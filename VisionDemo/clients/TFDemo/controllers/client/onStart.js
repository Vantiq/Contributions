    canvas = $("#cameracanvas").get(0);    
    ctx = canvas.getContext("2d");
    
    // This function creates an http object to execute the 
    // tensorflow procedure. It uses the response to draw the 
    // boxes and labels on the image that it was given.  
    // It also disables and then renables 
    // the client buttons while it is processing. 
    function processImageGlobal(design, args) {
        var upload = client.getWidget("UploadButton");
        var refresh = client.getWidget("RefreshButton");
        upload.isDisabled = true;
        refresh.isDisabled = true;
        var http = new Http();
        http.setVantiqUrlForSystemResource("procedures");
        http.setVantiqHeaders();
        var img = new Image();
        
        //var results = TensorFlowOperation.processDocument(args);
        //console.log(results);
        
        http.execute(args,"tfExample",function(response) {
            client.getWidget("StaticHtmlObjView").html = "<pre>" + JSON.stringify(response, null ,2) + "</pre>";
			
            // draws the image, boxes, and labels from the response
            img.onload = function() {
                var widthScale = 819 / this.width;
                var heightScale = 622 / this.height;
                
                ctx.drawImage(this, 0, 0, this.width * widthScale, this.height * heightScale);
                ctx.beginPath();
                response.forEach(function(result){
                    ctx.lineWidth = "2";	
                    ctx.strokeStyle = client.getWidget("BoxColor").platformWidget.rawValue;	
                    
                    ctx.rect(result.location.left * widthScale, result.location.top * heightScale , 
                             (result.location.right - result.location.left) * widthScale, 
                             (result.location.bottom -  result.location.top) * heightScale); 
                    
                    ctx.stroke();
                    ctx.font = '20pt Calibri';
                    ctx.fillStyle = client.getWidget("TextColor").platformWidget.rawValue;
                    ctx.fillText(result.label + " : " + result.confidence.toFixed(2), (result.location.left < 0) ?
                                 0 : result.location.left * widthScale , (result.location.top < 20) ? 
                                 (result.location.top > 0 ? result.location.top + (20 - result.location.top) : 
                                  -result.location.top + 5) * heightScale :(result.location.top - 10) * heightScale);
                    ctx.font = '10pt Calibri';
                    
            	});
        	};
        	img.src = design;
            var upload = client.getWidget("UploadButton");
            var refresh = client.getWidget("RefreshButton");
            upload.isDisabled = false;
            refresh.isDisabled = false;
        },
        function(errors) {
            client.showHttpErrors(errors,"Executing TensorFlow Procedure");
        });
    }
    processImage = processImageGlobal;