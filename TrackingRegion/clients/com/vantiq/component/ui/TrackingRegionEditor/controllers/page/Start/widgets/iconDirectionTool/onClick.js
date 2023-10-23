    try {
        var thisConfiguration = this.configuration;
        thisConfiguration.trackingRegion.direction = {direction: 0};
        if (client.data.displayingObject.direction) {
            client.data.displayingObject.direction = client.data.displayingObject.direction.trim();
            if (client.data.displayingObject.direction) {
                thisConfiguration.trackingRegion.direction = JSON.parse(client.data.displayingObject.direction);
            }
        }
        client.popupPage("directionDistancePage", "Edit Direction", {configuration: thisConfiguration, obj: thisConfiguration.trackingRegion.direction},
            function(response) {
                if (response !== "CANCEL") {
                    thisConfiguration.trackingRegion.direction = response;
                    client.data.displayingObject.direction = JSON.stringify(response);
                    client.data.isRegionModified = true;
                }
            });
    } catch(err) {
        console.log("Error parsing input as JSON: "+err);
        client.errorDialog(err.toString());
    }