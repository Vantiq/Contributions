    try {
        if (client.data.displayingObject.boundary) {
            client.data.displayingObject.boundary = client.data.displayingObject.boundary.trim();
            if (client.data.displayingObject.boundary) {
                this.configuration.trackingRegion.boundary = JSON.parse(client.data.displayingObject.boundary);
            } else {
                this.configuration.trackingRegion.boundary = [];
            }
        }
        var thisConfiguration = this.configuration;
        client.popupPage("boundaryPage", "Edit Boundary", {configuration: thisConfiguration, boundary:thisConfiguration.trackingRegion.boundary},
            function(response) {
                if (response !== "CANCEL") {
                    thisConfiguration.trackingRegion.boundary = response;
                    client.data.displayingObject.boundary = JSON.stringify(response, null, 3);
                    client.data.isRegionModified = true;
                }
            });
    } catch(err) {
        console.log("Error parsing input as JSON: "+err);
        client.errorDialog(err.toString());
    }