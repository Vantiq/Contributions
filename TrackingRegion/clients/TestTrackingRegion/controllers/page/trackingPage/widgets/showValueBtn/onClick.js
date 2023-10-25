    var comp = client.getWidget("trackingRegionComp");
    var region = comp.configuration.getRegion();
    console.log("current value: "+region);
    if (region) {
        client.closePopup(region);
    }
    