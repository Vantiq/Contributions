	var http = new Http();
    http.setVantiqUrlForSystemResource("documents");
    http.setVantiqHeaders();
    var imageName = extra.dataObject.name;
    var text = client.getWidget("CurrentDocText");
    text.text = imageName;
    
    // selects the clicked image from the list of documents
    http.selectOne(imageName,null,function(response) {
        var design = client.getDocumentUrl(imageName);
        var args = {
            imageName:imageName,
            modelName:client.getWidget("CurrentModel").text,
            threshold:client.data.threshold
        };
        // calls the tensorflow procedure
        processImage(design, args);
    },
    function(errors) {
        client.showHttpErrors(errors,"Doing a select on a single document");
    });