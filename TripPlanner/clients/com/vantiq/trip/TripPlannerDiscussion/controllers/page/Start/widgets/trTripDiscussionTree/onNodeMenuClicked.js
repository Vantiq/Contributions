
    if (extra.key == "CLOSE")
    {
        //  Execute Procedure 'com.vantiq.trip.TripPlannerDiscussion.closeDiscussion'
        var args = {
            "discussionId": extra.node.related.discussionId,  // String
            "status": "completed"
        };
        client.execute(args, "com.vantiq.trip.TripPlannerDiscussion.discussionsUpdateStatus", function(response){});

    } else if (extra.key == "DELETE"){

        //  Execute Procedure 'com.vantiq.trip.TripPlannerDiscussion.deleteDiscussion'
        var args = {
            "discussionId": extra.node.related.discussionId  // String
        };
        client.execute(args, "com.vantiq.trip.TripPlannerDiscussion.discussionsDelete", function(response){});

    }
