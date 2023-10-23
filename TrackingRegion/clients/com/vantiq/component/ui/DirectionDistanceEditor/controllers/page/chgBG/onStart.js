    client.data.currentUrl = parameters.imageUrl;   
    client.getWidget("imagePreview").url = null;
    com.vantiq.component.ui.getDocuments(client, function(client, response)
        {
            if (response && (response.length > 0)) {
                client.sendClientEvent("imageDocumentsStream", response);
            }
        });        
        