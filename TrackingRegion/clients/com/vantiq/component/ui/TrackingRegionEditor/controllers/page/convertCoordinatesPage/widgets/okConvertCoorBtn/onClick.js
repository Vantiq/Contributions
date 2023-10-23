    var comp = client.getComponentWidget(this.configuration, "convertCoorComp");
    var convertExpression = comp.configuration.getConvertExperssion();
    
    // make sure there are 4 points in convertedCoordinates
    if (convertExpression.convertedCoordinates  && (convertExpression.convertedCoordinates.length == 4)) {
        // save converted image background and map zoom if found.
        if (!this.configuration.trackingRegion.ars_properties) {
            this.configuration.trackingRegion.ars_properties = {};
        }
        this.configuration.trackingRegion.ars_properties.convertedUrl = comp.configuration.convertedUrl;
        if (convertExpression.zoom) {
            this.configuration.trackingRegion.ars_properties.zoom = convertExpression.zoom;
            delete convertExpression.zoom;
        } else if (this.configuration.trackingRegion.ars_properties.zoom) {
            delete this.configuration.trackingRegion.ars_properties.zoom;
        }        

        // close popup and return convertExpression.
        client.closePopup(convertExpression);
    } else {
        client.infoDialog("Please specify 4 points in target coordinates.");
    }