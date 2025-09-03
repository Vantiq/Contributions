    if (client.data.tripId) {
        client.execute({entityId: client.data.tripId}, "com.vantiq.trip.TripPlanner.tripClose", function(response) {
            client.data = null;
        });
    }