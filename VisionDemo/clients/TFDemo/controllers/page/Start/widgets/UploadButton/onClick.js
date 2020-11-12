    var useOriginalFileName = false;
    var forceOverwrite = true;
    var prefix = "images/";

    client.uploadDocument(function(status, detail) {
        if (status != "success"){
            console.log("Upload failed with error: " + detail);
        }
    }, useOriginalFileName, forceOverwrite, prefix);