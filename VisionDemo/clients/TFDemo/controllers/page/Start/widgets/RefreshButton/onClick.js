	var canvas = $("#cameracanvas").get(0);    
    var ctx = canvas.getContext("2d");
    var img = new Image();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var curr_doc = client.getWidget("CurrentDocText").text;
    if (curr_doc != "No current image") {
        var design = client.getDocumentUrl(curr_doc);
        var http = new Http();
        http.setVantiqUrlForSystemResource("procedures");
        http.setVantiqHeaders();
        var args = {
            imageName:curr_doc,
            modelName:client.getWidget("CurrentModel").text,
            threshold:client.data.threshold
        };
		console.log(args);
        // calls the tensorflow procedure
        http.execute(args,"tfExample",function(response)
        {
            console.log("SUCCESS: " + JSON.stringify(response));
            client.getWidget("StaticHtmlObjView").html = "<pre>" + JSON.stringify(response, null ,2) + "</pre>";

            // draws the image, boxes, and labels from the response
            img.onload = function() {
                var widthScale = 819 / this.width;
                var heightScale = 622 / this.height;
                
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
        function(errors)
        {
            client.showHttpErrors(errors,"Executing 'MyService.MyProcedure'");
        });
    }
    
