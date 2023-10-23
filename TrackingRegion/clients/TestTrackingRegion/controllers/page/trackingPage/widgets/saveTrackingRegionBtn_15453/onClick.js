    var nameWidget = client.getWidget("regionNameInput");
    //comp.configuration.trackingRegion.name = nameWidget.boundValue;
    if (nameWidget.configuration.validateRegion()) {
        //
        //  Execute the asynchronous server request. This expects 4 parameters:
        //
        //  typeName:        The Type where the record is to be inserted.
        //  data:            The object being inserted.
        //  successCallback: A callback function that will be driven when the request completes
        //                   successfully (i.e. a status code of 2XX)
        //  failureCallback: A callback function that will be driven when the request does not complete
        //                   successfully.
        //
        client.upsert("system.trackingRegions",nameWidget.configuration.trackingRegion,function(response)
        {
            //
            //  At this point "response" is the inserted object
            //
            console.log("SUCCESS: " + JSON.stringify(response));
            client.infoDialog("Tracking Region '"+nameWidget.configuration.trackingRegion.name+"' has been saved successfully.");
            client.data.isRegionModified = false;
        },
        function(errors)
        {
            //
            //  This call will format the error into a popup dialog
            //
            client.showHttpErrors(errors,"Doing an upsert of a system.trackingRegion");
        });
        //*** End of fragment
    }