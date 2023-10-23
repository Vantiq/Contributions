    var reference = this.configuration;
    if (client.data.targetCoorType == "Map") {
        client.getComponentWidget(reference, "floorplanLayout").isVisible = false;
        client.getComponentWidget(reference, "convertCoorChgBgBtn").isVisible = false;
        var mapWidget = client.getComponentWidget(reference, "targetMap");
        mapWidget.isVisible = true;
        var map = mapWidget.map;
        if (client.data.mapCenter) {
            map.setCenter(client.data.mapCenter);
        }
        if (client.data.markers) {
            for (var i=0; i<client.data.markers.length; i++) {
                client.data.markers[i].setMap(map);
            }
            map.markers = client.data.markers;
        }
 
        var markerArray = map.markers;
        if (markerArray && markerArray.length > 0) {
            client.getComponentWidget(reference, "mapIntroText").isVisible = false;
            client.getComponentWidget(reference, "clearMarkersBtn").isVisible = true;
        } else {
            client.getComponentWidget(reference, "mapIntroText").isVisible = true;
            client.getComponentWidget(reference, "clearMarkersBtn").isVisible = false;
        }
    } else {
        var mapWidget = client.getComponentWidget(reference, "targetMap");
        client.data.mapCenter = mapWidget.map.getCenter();
        client.data.markers = mapWidget.map.markers;
        mapWidget.isVisible = false;        
        client.getComponentWidget(reference, "clearMarkersBtn").isVisible = false;
        client.getComponentWidget(reference, "mapIntroText").isVisible = false;
        var canvasWidget = client.getComponentWidget(reference, "floorZoneCanvas");
        var layoutWidget = client.getComponentWidget(reference, "floorplanLayout");
        layoutWidget.isVisible = true;
        client.getComponentWidget(reference, "convertCoorChgBgBtn").isVisible = true;

        //layoutWidget.url = layoutWidget.configuration.convertedUrl;
        client.setTimeout(function() {
            com.vantiq.component.ui.resizeToNewBackground(client, layoutWidget, canvasWidget, 1,
                function(client) {
                    if (layoutWidget.configuration.zonePoints.length == 0) {
                        var zoneWidth = layoutWidget.scaledImageWidth/4;
                        var zoneHeight = layoutWidget.scaledImageHeight/4;
                        var x = layoutWidget.scaledImageWidth/2 - zoneWidth/2;
                        var y =  layoutWidget.scaledImageHeight/2 - zoneHeight/2;
                        layoutWidget.configuration.zonePoints.push({x: x, y: y});
                        layoutWidget.configuration.zonePoints.push({x: x + zoneWidth, y: y});
                        layoutWidget.configuration.zonePoints.push({x: x + zoneWidth, y: y + zoneHeight});
                        layoutWidget.configuration.zonePoints.push({x: x, y: y + zoneHeight});
                    }
                    canvasWidget.repaint();
                    layoutWidget.configuration.setupDnD();
                });                    
        }, 500);

    }