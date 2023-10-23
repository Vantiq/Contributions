    var expression = client.getWidget("regionViewer").boundValue;
    var expressionObj = {};
    if (expression) {
        try {
            expressionObj = JSON.parse(expression);
        } catch (error) {
            client.errorDialog("Error parsing JSON for TrackingRegion: "+ error);
            return;
        }
    }
    client.popupPage("trackingPage", "Edit Tracking Region", expressionObj, function(parameters) {
        if (parameters && (parameters !== "CANCEL")) {
            var txt = JSON.stringify(parameters, null,3);
            client.getWidget("regionViewer").boundValue = txt;
        }
    });