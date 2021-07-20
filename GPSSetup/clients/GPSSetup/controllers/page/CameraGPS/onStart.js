    var page = this;

    page.data.zone = 0;  // tells the drawing tools that we are not on the zone page


    //array for map markers
    page.data.markers = [];

    //get the map widet
    var map = client.getWidget("DynamicMapViewer136").map;


    page.data.camera.initializeToDefaultValues();
    page.data.camera.copyMatchingData(parameters);
    console.log(parameters);

    let lat = page.data.camera.geo.coordinates[1];
    let lng = page.data.camera.geo.coordinates[0];
    var place = {lat: lat, lng: lng};
    map.setMapTypeId('satellite');
    map.setCenter(place);
    map.setZoom(18);    

    //var canvas = $("#callibration-canvas").get(0);
    var canvas = document.getElementById('callibration-canvas');   
    var ctx = canvas.getContext("2d");    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Little hack to load a local file into the canvas, there is a small hidden html form input tag on the page that does the file upload, the button on the page just triggers this. See the tiny square under the map.
    var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);

    // setup the map gps markerss
    client.data.camGeoSetup.initializeToDefaultValues();
    var latlngbl, latlngbr, latlngtl, latlngtr;
    console.log(page.data.camera.gpsTrack);

    if (jQuery.isEmptyObject(page.data.camera.gpsTrack) === false){
        //if (page.data.camera.gpsTrack.length > 1 ){
        console.log("adding existing markers");
        latlngbl = page.data.camera.gpsTrack.bottomLeftGeo;
        addMarker(latlngbl, "bottomLeftGeo");

        latlngbr = page.data.camera.gpsTrack.bottomRightGeo;
        addMarker(latlngbr, "bottomRightGeo");

        latlngtl = page.data.camera.gpsTrack.topLeftGeo;
        addMarker(latlngtl, "topLeftGeo");

        latlngtr = page.data.camera.gpsTrack.topRightGeo;
        addMarker(latlngtr, "topRightGeo");

    } else {
        // since there are no markers set them up near the camera origin
        console.log("adding new markers");
        latlngbl = {lat:page.data.camera.geo.coordinates[1] - 0.0001, lng:page.data.camera.geo.coordinates[0] - 0.0001};
        addMarker(latlngbl, "bottomLeftGeo");

        latlngbr = {lat:page.data.camera.geo.coordinates[1] - 0.0001, lng:page.data.camera.geo.coordinates[0] + 0.0001};
        addMarker(latlngbr, "bottomRightGeo");

        latlngtl = {lat:page.data.camera.geo.coordinates[1] + 0.0001, lng:page.data.camera.geo.coordinates[0] - 0.0001};
        addMarker(latlngtl, "topLeftGeo");

        latlngtr = {lat:page.data.camera.geo.coordinates[1] + 0.0001, lng:page.data.camera.geo.coordinates[0] + 0.0001};
        addMarker(latlngtr, "topRightGeo");

    }

    // add markers function
    function addMarker(location, title) {
        var marker = new google.maps.Marker({
            position: location,
            title: title,
            map: map,
            draggable:true
        });


        marker.addListener('dragend', function(){
            console.log(this);

            var location = this.position; 

            // set the geoJSON for the object
            page.data.camera.gpsTrack[this.title] = {
                "lng": location.lng(),
                "lat": location.lat()
            };

        }); 

        page.data.markers.push(marker);
        //marker.setMap(map);
    }

    function moveShapes(){      
        if(page.data.camera.imageTrack.topLeftImage){            
            var x = page.data.camera.imageTrack.topLeftImage.x;
            var y = page.data.camera.imageTrack.topLeftImage.y;
            page.data.CanvasState.moveShape(0, x,y);
        } else {

            page.data.CanvasState.moveShape(0, 20,20);
        }

        if(page.data.camera.imageTrack.bottomLeftImage){
            var x = page.data.camera.imageTrack.bottomLeftImage.x;
            var y = page.data.camera.imageTrack.bottomLeftImage.y;
            page.data.CanvasState.moveShape(1, x,y);

        } else {

            page.data.CanvasState.moveShape(1, 20,80);
        }

        if(page.data.camera.imageTrack.bottomRightImage){
            var x = page.data.camera.imageTrack.bottomRightImage.x;
            var y = page.data.camera.imageTrack.bottomRightImage.y;
            page.data.CanvasState.moveShape(2, x,y);

        } else {

            page.data.CanvasState.moveShape(2, 80,80);

        }    

        if(page.data.camera.imageTrack.topRightImage){
            var x = page.data.camera.imageTrack.topRightImage.x;
            var y = page.data.camera.imageTrack.topRightImage.y;
            page.data.CanvasState.moveShape(3, x,y);

        } else {
            page.data.CanvasState.moveShape(3, 80,20);
        }


    }

    function drawShape(){
        //. then if there are existing plots use them instead
        if(page.data.camera.imageTrack.topLeftImage){
            var x = page.data.camera.imageTrack.topLeftImage.x;
            var y = page.data.camera.imageTrack.topLeftImage.y;
            page.data.CanvasState.addShape(new Shape(x,y,20,20, 'rgba(0,255,0, 0.6)'));
        } else {
            page.data.CanvasState.addShape(new Shape(20,20,20,20, 'rgba(0,255,0, 0.6)'));
        }

        if(page.data.camera.imageTrack.bottomLeftImage){
            var x = page.data.camera.imageTrack.bottomLeftImage.x;
            var y = page.data.camera.imageTrack.bottomLeftImage.y;
            page.data.CanvasState.addShape(new Shape(x,y,20,20, 'rgba(0,255,0, 0.6)'));
        } else {
            page.data.CanvasState.addShape(new Shape(20,80,20,20, 'rgba(0,255,0, 0.6)'));
        }

        if(page.data.camera.imageTrack.bottomRightImage){
            var x = page.data.camera.imageTrack.bottomRightImage.x;
            var y = page.data.camera.imageTrack.bottomRightImage.y;
            page.data.CanvasState.addShape(new Shape(x,y,20,20, 'rgba(0,255,0, 0.6)'));
        } else {
            page.data.CanvasState.addShape(new Shape(80,80,20,20, 'rgba(0,255,0, 0.6)'));

        }    

        if(page.data.camera.imageTrack.topRightImage){
            var x = page.data.camera.imageTrack.topRightImage.x;
            var y = page.data.camera.imageTrack.topRightImage.y;
            page.data.CanvasState.addShape(new Shape(x,y,20,20, 'rgba(0,255,0, 0.6)'));
        } else {
            page.data.CanvasState.addShape(new Shape(80,20,20,20, 'rgba(0,255,0, 0.6)'));
        }

    }

    function handleImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var image = new Image();
            image.onload = function(){
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image,0,0);
                if (!page.data.hasOwnProperty('CanvasState') ){
                    page.data.CanvasState = new CanvasState(canvas, image, page);
                    drawShape();
                } else {
                    page.data.CanvasState.changeBaseImage(image);
                    moveShapes();
                }
            };                
            image.src = event.target.result;
        };        
        reader.readAsDataURL(e.target.files[0]); 
    }

