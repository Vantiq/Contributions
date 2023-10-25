    var thisConfiguration = this.configuration;
    var expression = client.data.displayingObject.conversionSpecification;

    var expressionObj = {};
    if (expression) {
        try {
            expressionObj = JSON.parse(expression);
        } catch (error) {
            client.errorDialog("Please enter a valid JSON for conversionSpecification.");
            return;
        }
    }
    
    client.popupPage("convertCoordinatesPage", "Edit ConversionSpecification", {configuration: thisConfiguration, obj: expressionObj}, function(response) {
        if (response && (response !== "CANCEL")) {
            var txt = JSON.stringify(response, null,3);
            client.data.displayingObject.conversionSpecification = txt;
            thisConfiguration.trackingRegion.conversionSpecification = response;
            client.data.isRegionModified = true;            
        }
    });