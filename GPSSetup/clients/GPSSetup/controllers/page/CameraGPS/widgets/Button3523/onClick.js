

    var args = {
        obj:page.data.camera.values
    };
    
    console.log(page.data.camera.values);

    client.execute(args,"submitCamera",function(response){
        console.log("SUCCESS: " + JSON.stringify(response));
        client.returnToCallingPage();
    });
