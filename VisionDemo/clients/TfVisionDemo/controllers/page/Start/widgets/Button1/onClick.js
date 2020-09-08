    var useOriginalFileName = false;
    var forceOverwrite = true;
    var prefix = "images/";

    client.uploadDocument(function(status, detail)
    {
        if (status == "success")
        {
            console.log("File has been uploaded to document '" + detail + "'");
            var http = new Http();
            http.setVantiqUrlForResource("Pictures");
            http.setVantiqHeaders();
            var img = {
        		Name: detail
        	};
            http.upsert(img,function(response) {
                console.log("SUCCESS: " + JSON.stringify(response));
            },
            function(errors) {
        		client.showHttpErrors(errors,"Doing an insert of a new Employee");
    		});
            

        }
        else
        {
            console.log("Upload failed with error: " + detail);
        }
    }, useOriginalFileName, forceOverwrite, prefix);
    
    
    
