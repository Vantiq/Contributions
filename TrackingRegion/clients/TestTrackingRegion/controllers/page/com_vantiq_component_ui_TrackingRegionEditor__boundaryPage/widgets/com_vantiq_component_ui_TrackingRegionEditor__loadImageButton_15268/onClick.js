	var cameraLayout = client.getComponentWidget(this.configuration, "cameraLayout");
	var cameraCanvas = client.getComponentWidget(this.configuration, "cameraCanvas");

    var widthRatio = cameraLayout.scaledImageWidth / cameraLayout.trueImageWidth;
    var heightRadio = cameraLayout.scaledImageHeight / cameraLayout.trueImageHeight;
    var savedPoints = [];
    for (var i = 0; i < this.configuration.zonePoints.length; i++) {
		savedPoints.push({
		    x: this.configuration.zonePoints[i].x / widthRatio,
		    y: this.configuration.zonePoints[i].y / heightRadio
		});
    }
    this.configuration.boundary = savedPoints;
 
    this.configuration.imageUrl = cameraLayout.url;

    client.popupPage("chgBG",client.formatMsg("@btn.change.image"), {imageUrl: cameraLayout.url},
                        function(response) {
        if (response && (response !== "CANCEL") && (cameraLayout.url !== response)) {
            var originalTrueWidth = cameraLayout.trueImageWidth;
            var origianlTrueHeight = cameraLayout.trueImageHeight;
            cameraLayout.url = response;
            cameraLayout.configuration.imageUrl = response;
            client.setTimeout(function() {
                com.vantiq.component.ui.resizeToNewBackground(client, cameraLayout, cameraCanvas, 1, function() {
                    // background size change, convert boundary to the new true image coordinate
                    var widthRatio = cameraLayout.trueImageWidth/originalTrueWidth;
                    var heightRadio = cameraLayout.trueImageHeight/origianlTrueHeight;
                    var newBoundary = [];
                    for (var i = 0; i < cameraLayout.configuration.boundary.length; i++) {
                    newBoundary.push({
                        x: cameraLayout.configuration.boundary[i].x * widthRatio,
                        y: cameraLayout.configuration.boundary[i].y * heightRadio
                    });
                    }
                    cameraLayout.configuration.boundary = newBoundary;

                    var widthRatio = cameraLayout.scaledImageWidth / cameraLayout.trueImageWidth;
                    var heightRadio = cameraLayout.scaledImageHeight / cameraLayout.trueImageHeight;

                    // convert region points into the scalled image coord
                    cameraLayout.configuration.zonePoints = [];
                    for (var i = 0; i < newBoundary.length; i++) {
                        cameraLayout.configuration.zonePoints.push({
                            x: newBoundary[i].x * widthRatio,
                            y: newBoundary[i].y * heightRadio
                        });
                    }
                    cameraCanvas.repaint();
                });
            }, 500);
        }
    });
