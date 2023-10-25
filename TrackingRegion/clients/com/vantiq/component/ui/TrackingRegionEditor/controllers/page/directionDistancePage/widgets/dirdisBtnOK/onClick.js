    var comp = client.getComponentWidget(this.configuration, "dirdisComp");
    var returnObj = comp.configuration.getObject();
    if (returnObj) {
        if (!this.configuration.trackingRegion.ars_properties) {
            this.configuration.trackingRegion.ars_properties = {};
        }
        this.configuration.trackingRegion.ars_properties.imageUrl = comp.configuration.imageUrl;
        client.closePopup(returnObj);
    }