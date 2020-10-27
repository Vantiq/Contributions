    var useOriginalFileName = false;
    var forceOverwrite = true;
    var prefix = "images/";

    client.uploadDocument(function(status, detail)
    {
        if (status == "success")
        {
            console.log("File has been uploaded to document '" + detail 						+ "'");
        }
        else
        {
            console.log("Upload failed with error: " + detail);
        }
    }, useOriginalFileName, forceOverwrite, prefix);
    
    
    
