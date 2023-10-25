	//upload document in ConvertCoordinates
    client.uploadDocument(function(status, detail)
    {
        //
        //  "status" contains either "success" or "error".
        //  "detail" contains either the name of the saved document (if "status" == "success") or an
        //  error message (if "status" == "error").
        //

        if (status == "success")
        {
            com.vantiq.component.ui.getDocuments(client, function(client, getRecordResponse) {
                    if (getRecordResponse && (getRecordResponse.length > 0)) {
                        var ds = client.getDataStreamByName("imageDocumentsStream");
                        client.sendClientEvent(ds, getRecordResponse);
                    }
                });                     
        } else {
            client.errorDialog(client.formatMsg("@error.upload.file",detail));
        }
    });