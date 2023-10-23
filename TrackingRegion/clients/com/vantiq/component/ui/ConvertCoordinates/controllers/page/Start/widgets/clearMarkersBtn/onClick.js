    var mapWidget = client.getComponentWidget(this.configuration, "targetMap");
    var map = mapWidget.map;
    var oldArray = map.markers;
    if (oldArray) {
        for (var i=0; i<oldArray.length; i++) {
            var marker = oldArray[i];
            marker.setMap(null);
        }
    }
    map.markers = [];

    client.getComponentWidget(this.configuration, "mapIntroText").isVisible = true;
    client.getComponentWidget(this.configuration, "clearMarkersBtn").isVisible = false;    