    if (parameters) {
        var comp = client.getWidget("convertCoorComp");
        if (parameters.configuration.trackingRegion && parameters.configuration.trackingRegion.ars_properties) {
            if (parameters.configuration.trackingRegion.ars_properties.imageUrl) {
                comp.configuration.imageUrl = parameters.configuration.trackingRegion.ars_properties.imageUrl;
            }    
            if (parameters.configuration.trackingRegion.ars_properties.convertedUrl) {
                comp.configuration.convertedUrl = parameters.configuration.trackingRegion.ars_properties.convertedUrl;
            }    
            if (parameters.configuration.trackingRegion.ars_properties.zoom) {
                comp.configuration.zoom = parameters.configuration.trackingRegion.ars_properties.zoom;
            }    
        }
        comp.configuration.loadConvertExpression(parameters.obj);
    }