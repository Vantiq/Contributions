    var comp = client.getComponentWidget(this, "cameraZoneComp");
    // close a popup page
    var newBoundary = comp.configuration.getBoundary();
    if (newBoundary) {
        if (!this.configuration.trackingRegion.ars_properties) {
            this.configuration.trackingRegion.ars_properties = {};
        }
        this.configuration.trackingRegion.ars_properties.imageUrl = comp.configuration.imageUrl;

        client.closePopup(newBoundary);
    }