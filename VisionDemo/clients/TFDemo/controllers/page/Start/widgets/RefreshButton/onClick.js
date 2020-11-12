    var img = new Image();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var currDoc = client.getWidget("CurrentDocText").text;
    if (currDoc != "No current image") {
        var design = client.getDocumentUrl(currDoc);
        var args = {
            imageName:currDoc,
            modelName:client.getWidget("CurrentModel").text,
            threshold:client.data.threshold
        };
        // calls the tensorflow procedure
        processImage(design, args);
    }
    
