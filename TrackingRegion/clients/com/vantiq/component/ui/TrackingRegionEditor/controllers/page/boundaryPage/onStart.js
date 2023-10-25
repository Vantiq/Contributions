	// Load existing boundary into component.
    //how to get configuration in Page.onStart()?
    var comp = client.getWidget("cameraZoneComp");
    if (parameters.configuration.trackingRegion &&
         parameters.configuration.trackingRegion.ars_properties &&
         parameters.configuration.trackingRegion.ars_properties.imageUrl) {
            comp.configuration.imageUrl = parameters.configuration.trackingRegion.ars_properties.imageUrl;
         }
    comp.configuration.loadBoundary(parameters.boundary);