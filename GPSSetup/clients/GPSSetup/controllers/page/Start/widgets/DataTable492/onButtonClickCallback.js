    console.log("Extra: " + extra);

    if (extra.buttonLabel === "GPS"){  
        client.goToPage("CameraGPS", extra.dataObject);
    }


    if (extra.buttonLabel === "Remove"){
        client.confirmCustom("Are you sure you want to delete this camera","Yes","No",function(clicked)
                             {
            if (clicked === "Yes"){

                var cameraId = extra.dataObject._id;

                client.deleteOne("cameras",cameraId,function(response){
                    page.data.refreshCamerasTable();
                });

            }
        });  

    }

