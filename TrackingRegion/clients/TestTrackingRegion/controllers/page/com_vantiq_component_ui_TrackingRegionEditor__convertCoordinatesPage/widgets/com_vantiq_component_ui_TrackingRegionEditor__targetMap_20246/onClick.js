    // place 4 markers on the clicked area
    var map = this.map;
    
    // add markers function
    function createMarker(location, label) {
        var marker = new google.maps.Marker({
            position: location,
            label: label,
            map: map,
            draggable:true
        });

        return marker;
    }  

    var mArray = map.markers;
    if (!mArray || (mArray.length == 0)) {
        // no markers yet, create 4 now
        var newArray = [];
        var currentZoom = map.zoom;
        var modifier = 0.185 - currentZoom*0.005;

        if (currentZoom >= 20) {
            modifier = 0.0001;
        }else if (currentZoom >= 17) {
            modifier = 0.0002;
        }else if (currentZoom >= 16) {
            modifier = 0.0005;
        }else if (currentZoom >= 15) {
            modifier = 0.001;
        } else if (currentZoom >= 14) {
            modifier = 0.002;
        } else if (currentZoom >= 13) {
            modifier = 0.004;
        } else if (currentZoom >= 13) {
            modifier = 0.006;
        } else if (currentZoom >=12 ) {
            modifier = 0.007;
        } else if (currentZoom >=11 ) {
            modifier = 0.008;
        } else if (currentZoom >=10 ) {
            modifier = 0.085 - currentZoom*0.005;
        }
 
        var latlngbl = {lat: extra.mapLatitude + modifier, lng: extra.mapLongitude - modifier};
        newArray.push(createMarker(latlngbl, "A"));
        latlngbl = {lat: extra.mapLatitude + modifier, lng: extra.mapLongitude + modifier};
        newArray.push(createMarker(latlngbl, "B"));
        latlngbl = {lat: extra.mapLatitude - modifier, lng: extra.mapLongitude + modifier};
        newArray.push(createMarker(latlngbl, "C"));
        latlngbl = {lat: extra.mapLatitude - modifier, lng: extra.mapLongitude - modifier};
        newArray.push(createMarker(latlngbl, "D"));
        map.markers = newArray;

        client.getComponentWidget(this.configuration, "mapIntroText").isVisible = false;
        client.getComponentWidget(this.configuration, "clearMarkersBtn").isVisible = true;
    }

    