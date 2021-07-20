
    var page = this;
    var map = client.getWidget("DynamicMapViewer121").map;
    map.setMapTypeId('satellite');

    page.data.refreshCamerasTable = function(){
        client.execute({},"getCameras",function(response){
            client.sendClientEvent("ce_cameras",response);
        });
    };

    page.data.refreshCamerasTable();
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: { lat: 37.678630, lng: -97.383411 },
    });
    infoWindow.open(map);

    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        //infoWindow.setContent(
        //    JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        //);

        var mmjson = mapsMouseEvent.latLng.toJSON();


        var args ={};
        args.obj = {};
        args.obj.id = client.generateUUID();           
        args.obj.name = "Camera" + args.obj.id.slice(31);            
        args.obj.geo = {"type":"Point",coordinates:[mmjson.lng, mmjson.lat]};

        if (page.data.type === "cameras"){
            infoWindow.setContent(
                page.data.type + " added"
            );
            client.execute(args,"submitCamera",function(response){
                console.log(args);
                console.log("SUCCESS: " + JSON.stringify(response));
                page.data.refreshCamerasTable();
            });
        } else {
            infoWindow.setContent(
                "nothing selected - nothing added"
            );
        }
        //infoWindow.open(map);
    });
