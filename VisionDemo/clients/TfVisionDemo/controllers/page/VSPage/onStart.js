	var http = new Http();
    http.setVantiqUrlForSystemResource("procedures");
    http.setVantiqHeaders();
    var args = {
        imageName:""
    };
    var og = client.getWidget("Original");
    var gs = client.getWidget("Grayscale");
    var box = client.getWidget("Boxes");
    
    // calls the visionscript procedure
    http.execute(args,"vsExample",function(response) {
        console.log("SUCCESS: " + JSON.stringify(response));
        // you will need to change blood.jpg to the image name of your choosing
    	og.url = "../../pics/blood.jpg";
        gs.url = "../../pics/gsSave.jpg";
        box.url = "../../pics/boxedSave.jpg";
    },
    function(errors) {
        client.showHttpErrors(errors,"Executing VisionScript Procedure");
    });