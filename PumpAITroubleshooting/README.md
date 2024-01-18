## Introduction and Goals

This project serves as an illustration of how to leverage the Generative AI features offered by the Vantiq platform in your applications.  Note that it is not intended to be used as is and several shortcuts have been taken in order to highlight the use of semantic search and direct LLM interactions.

## Application Overview

The application is modeled after a monitoring and field service application for industrial pumps.  It has a browser based client (`Sim`) which is used to simulate production of out of range values for either pump temperature or vibration (or both).  These values are processed by the `IssueDetection` service and if the pump's overall status has changed, an event is sent to the `IssueManagement` service for processing.  This event is processed by the `InboundIssue` event handler which uses a collaboration to manage resolution of the pump's issues.  This handler leverages semantic search to query the pump's documentation and determine what steps should be taken by the technician.  Communication with the technician is handled by the `DeviceIssue` client (sent via a notification in the Vantiq mobile app).  This client also allows the technician to submit follow-up questions and request status updates from the `PumpControl` service.  All of the application's resources are defined in the `com.vantiq.pumpAssistant` package.

## Running the Application

### Initial Setup

There are a couple of tasks to complete before using the application.  The document *PWI_IOM.pdf* must be loaded into the `pumpIndex` semantic index.  This document is included as a Vantiq resource, so it can be loaded using the *Resource* entry type.  This provides the context needed to troubleshoot the predefined pump instance.  In order to send the `DeviceIssues` client via a notification, the **NotifyUser** task in the `InboundIssue` event handler will need to be updated.  You want to set the target user id to be the one for the user running the demo (this can be found in the "user info" dialog in the upper right hand corner of Modelo).

Once these changes are made, the application is ready to be used.