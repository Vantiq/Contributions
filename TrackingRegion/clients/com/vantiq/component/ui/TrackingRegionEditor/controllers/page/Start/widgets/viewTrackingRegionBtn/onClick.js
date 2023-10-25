    var region = this.configuration.getRegion();
    if (region) {
        var regionJSON = JSON.stringify(region, null, 3);
        client.popupPage("showJSONPage", "Tracking Region in JSON", regionJSON);
    }