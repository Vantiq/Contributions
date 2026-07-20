    // lock the text-entry field in Conversation widget until TripPlanner service is initialized
    client.getWidget("Conversation1").isReadOnly = true;

    var trip = {id: crypto.randomUUID()};
    var args = {
        entityId: trip.id,
        entity: trip
    };
    client.execute(args, "com.vantiq.trip.TripPlanner.tripActivate", function(collaborationId) {
        client.setCollaborationContext({id: collaborationId});
        client.data.tripId = trip.id;
        client.getWidget("Conversation1").isReadOnly = false;  // unlock the text-entry field
    });
