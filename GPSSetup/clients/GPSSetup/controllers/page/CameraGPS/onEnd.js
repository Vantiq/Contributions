    // clear image
    var canvas = document.getElementById('callibration-canvas');   
    var ctx = canvas.getContext("2d");    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var imageLoader = document.getElementById('imageLoader');
    imageLoader.value = '';

    //get the map widet
    var map = client.getWidget("DynamicMapViewer136").map;
    this.data.markers.forEach(function(item){
        item.setMap(null);
    });