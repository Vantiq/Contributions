    var trip = {id: crypto.randomUUID()};
    var args = {
        entityId: trip.id,
        entity: trip
    };
    client.execute(args, "com.vantiq.trip.TripPlanner.tripActivate", function(collaborationId) {
        client.setCollaborationContext({id: collaborationId});
        client.data.tripId = trip.id;
    });