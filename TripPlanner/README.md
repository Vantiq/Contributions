## Multi-Agent System Example

This is a very basic (and incomplete) example of how to approach the construction of a multi-agent system in Vantiq. The application has the following resources:

* TripPlanner (Client) -- this is a very simple client which allows the user to interact with the TripPlanner Agent.  On startup, the client creates an instance of the "Trip" type (which just holds a UUID).  It then starts a collaboration and conversation for that trip.  The collaboration instance is closed when the client exits.

* TripPlanner (Agent) -- this agent is the primary contact point for the client and coordinates interactions with the other agents in the application.  The primary entry point is the **processRequest** procedure which is invoked by the client when the user provides input. It is an example of a Planning Agent.

* "Travel" Agents -- there are 3 Agents (Flight, CarRental, and Hotel) which are provided as "tools" to the planning algorithm.  The planning process determines which one(s) to invoke based on the user's input.

### Setup

You will need to provide a value for the secret `VANTIQ_A2A_SECRET`. This should be a valid OpenAI API Key.