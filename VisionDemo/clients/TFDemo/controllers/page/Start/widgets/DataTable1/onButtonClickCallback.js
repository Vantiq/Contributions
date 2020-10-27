	var http = new Http();
    http.setVantiqUrlForSystemResource("documents");
    http.setVantiqHeaders();
    var imageName = extra.dataObject.name;
    var text = client.getWidget("CurrentDocText");
    text.text = imageName;
    
    // selects the clicked image from the list of documents
    http.selectOne(imageName,null,function(response)
    {
        var http2 = new Http();
        http2.setVantiqUrlForSystemResource("procedures");
        http2.setVantiqHeaders();
        var args = {
            imageName:imageName,
            modelName:client.getWidget("CurrentModel").text,
            threshold:client.data.threshold
        };
		
        var design = client.getDocumentUrl(imageName);
        console.log(design);
        var canvas = $("#cameracanvas").get(0);
        var img = new Image();
        var ctx = canvas.getContext("2d");
        
        // calls the tensorflow procedure
        http2.execute(args,"tfExample",function(response) {
            console.log("SUCCESS: " + JSON.stringify(response));
            client.getWidget("StaticHtmlObjView").html = "<pre>" + JSON.stringify(response, null ,2) + "</pre>";
            console.log(this);

            // draws the image, boxes, and labels from the response
            img.onload = function() {
                var widthScale = 819 / this.width;
                var heightScale = 622 / this.height;
                
                console.log(this);

                ctx.drawImage(this, 0, 0, this.width * widthScale, this.height * heightScale);
                ctx.beginPath();
                response.forEach(function(result){
                    ctx.lineWidth="2";	
                    ctx.strokeStyle = client.getWidget("BoxColor").platformWidget.rawValue;
                                       
                    ctx.rect(result.location.left * widthScale, result.location.top * heightScale , (result.location.right - result.location.left) * widthScale, (result.location.bottom -  result.location.top) * heightScale); 
                    
                    ctx.stroke();
                    ctx.font = '20pt Calibri';
                    ctx.fillStyle = client.getWidget("TextColor").platformWidget.rawValue;
                    ctx.fillText(result.label + " : " + result.confidence.toFixed(2), (result.location.left < 0) ? 0 : result.location.left * widthScale , (result.location.top < 20) ? (result.location.top > 0 ? result.location.top + (20 - result.location.top) : -result.location.top + 5) * heightScale :(result.location.top - 10) * heightScale);
                    ctx.font = '10pt Calibri';
                    
            	});
        	};
            img.src = design;
            
        },
        function(errors) {
            client.showHttpErrors(errors,"Executing TensorFlow Procedure");
        });
        
        
    },
    function(errors)
    {
        client.showHttpErrors(errors,"Doing a select on a single document");
    });