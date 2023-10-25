	var layoutWidget = client.getComponentWidget(this.configuration, "floorplanLayout");
	var canvasWidget = client.getComponentWidget(this.configuration, "floorZoneCanvas");
       
    var widthRatio = layoutWidget.scaledImageWidth / layoutWidget.trueImageWidth;
    var heightRadio = layoutWidget.scaledImageHeight / layoutWidget.trueImageHeight;
    var savedPoints = [];
    for (var i = 0; i < layoutWidget.configuration.zonePoints.length; i++) {
        savedPoints.push({
            x: layoutWidget.configuration.zonePoints[i].x / widthRatio,
            y: layoutWidget.configuration.zonePoints[i].y / heightRadio
        });
    }    
    if (savedPoints) {   
        if (!layoutWidget.configuration.convertExpression) {
            layoutWidget.configuration.convertExpression = {};
        }
        layoutWidget.configuration.convertExpression.convertedCoordinates = savedPoints; 
        layoutWidget.configuration.convertedUrl = layoutWidget.url;

        client.popupPage("chgBG",client.formatMsg("@btn.change.image"), {imageUrl: layoutWidget.url},
                         function(response) {
            if (response && (response !== "CANCEL") && (layoutWidget.url !== response)) {
                var originalTrueWidth = layoutWidget.trueImageWidth;
            	var origianlTrueHeight = layoutWidget.trueImageHeight;
                layoutWidget.url = response;
                layoutWidget.configuration.convertedUrl = response;
                client.setTimeout(function() {
                    com.vantiq.component.ui.resizeToNewBackground(client, layoutWidget, canvasWidget, 1,
                        function(client) {
                            // redraw the current boundary
		                    // background size change, convert boundary to the new true image coordinate
		                    var widthRatio = layoutWidget.trueImageWidth/originalTrueWidth;
	                        var heightRadio = layoutWidget.trueImageHeight/origianlTrueHeight;
	                        var newPoints = [];
	                        for (var i = 0; i < layoutWidget.configuration.convertExpression.convertedCoordinates.length; i++) {
		                        newPoints.push({
		                            x: layoutWidget.configuration.convertExpression.convertedCoordinates[i].x * widthRatio,
		                            y: layoutWidget.configuration.convertExpression.convertedCoordinates[i].y * heightRadio
		                        });
	                        }
	                        layoutWidget.configuration.convertExpression.convertedCoordinates = newPoints;
    
                            layoutWidget.configuration.zonePoints = [];

                            widthRatio = layoutWidget.scaledImageWidth / layoutWidget.trueImageWidth;
                            heightRadio = layoutWidget.scaledImageHeight / layoutWidget.trueImageHeight;

                            // convert region points into the scalled image coord
                            for (var i = 0; i < newPoints.length; i++) {
                                layoutWidget.configuration.zonePoints.push({
                                    x: newPoints[i].x * widthRatio,
                                    y: newPoints[i].y * heightRadio
                                });
                            }
                            canvasWidget.repaint();                            
                        });                    
                }, 500);
            }
        });
    }    