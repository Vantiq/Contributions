    client.getWidget("RegisterButton").isDisabled = true;
    
    // copy over form information to local variable
    var userDef = {
        email: client.data.email,
        first_name: client.data.first_name,
        last_name: client.data.last_name
    };
    
    var http = new Http();
    http.setVantiqUrlForSystemResource("procedures", 		client.getNamespace());
    http.setVantiqHeaders();
    var args = {
        obj:userDef
    };
    
    http.execute(args,"Registration.oauthUserRegistration",function(response) {
        console.log("SUCCESS: " + JSON.stringify(response));
        // will change pages upon a successful registration
        client.goToPage("WaitingPage");
    },
    function(errors)
    {
        console.log(errors);
        alert("You have entered an invalid email. Please try a different one.");
        client.data.email = "";
    });
    