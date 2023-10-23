    try {
        var thisConfiguration = this.configuration;
        thisConfiguration.trackingRegion.distance = {};
        if (client.data.displayingObject.distance) {
            client.data.displayingObject.distance = client.data.displayingObject.distance.trim();
            if (client.data.displayingObject.distance) {
                thisConfiguration.trackingRegion.distance = JSON.parse(client.data.displayingObject.distance);
            }
        }
        client.popupPage("directionDistancePage", "Edit Distance", {configuration: thisConfiguration, obj: thisConfiguration.trackingRegion.distance},
            function(response) {
                if (response !== "CANCEL") {
                    thisConfiguration.trackingRegion.distance = response;
                    client.data.displayingObject.distance = JSON.stringify(response);
                    client.data.isRegionModified = true;                    
                }
            });
    } catch(err) {
        console.log("Error parsing input as JSON: "+err);
        client.errorDialog(err.toString());
    }