	// Load existing direction or distance object into component.
    var comp = client.getWidget("dirdisComp");
    if (parameters.configuration.trackingRegion &&
         parameters.configuration.trackingRegion.ars_properties &&
         parameters.configuration.trackingRegion.ars_properties.imageUrl) {
            comp.configuration.imageUrl = parameters.configuration.trackingRegion.ars_properties.imageUrl;
         }    
    comp.configuration.loadObject(parameters.obj);