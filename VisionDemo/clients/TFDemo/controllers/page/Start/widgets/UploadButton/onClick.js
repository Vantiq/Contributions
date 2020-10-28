    var useOriginalFileName = false;
    var forceOverwrite = true;
    var prefix = "images/";

    client.uploadDocument(function(status, detail)
    {
        if (status == "success")
        {
            console.log("File has been uploaded to document '" + detail 						+ "'");
            var upload = client.getWidget("UploadButton");
            var refresh = client.getWidget("RefreshButton");
            var model = client.getWidget("ChangeModelButton");
            upload.isDisabled = true;
            refresh.isDisabled = true;
            model.isDisabled = true;
        }
        else
        {
            console.log("Upload failed with error: " + detail);
        }
    }, useOriginalFileName, forceOverwrite, prefix);
    
    
    
