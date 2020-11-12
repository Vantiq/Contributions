	// for tracking current document
    var text = client.getWidget("CurrentDocText");
    text.text = data.name;
    var design = client.getDocumentUrl(data.name);
    var args = {
        imageName:data.name,
        modelName:client.getWidget("CurrentModel").text,
        threshold:client.data.threshold
    };
    // calls the tensorflow procedure 
	processImage(design, args);

