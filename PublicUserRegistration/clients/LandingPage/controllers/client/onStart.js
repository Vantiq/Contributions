    
    var isPublic = client.isPublic();
    
    var intro = client.getWidget("WelcomeLine");
    intro.text = isPublic ? "Welcome to VANTIQ! You are currently in Public Mode." : "Welcome to VANTIQ! You are currently in Private Mode.";
    
    var username = client.getUsername();
    var username_widget = client.getWidget("Username");
    var preferred_username = "";
    var preferred_username_widget = client.getWidget("PreferredUsername");
    
    username_widget.text = "Your Username is: " + username;
    
    // on startup client.getUserRecord() may return null for a 
    // brief period
    // the following function checks every tenth of a second
    // to try and request the user record - and then sets and displays
    // the preferred username of the current user
    function setPrefUsername() {
        var id = setInterval(check, 100);
        function check() {
            var user_record = client.getUserRecord();
            if (user_record !== null) {
                clearInterval(id);
                preferred_username = user_record.preferredUsername;
                preferred_username_widget.text = "Your Preferred Username is: " + preferred_username;
            } 
        }
    }
    
    setPrefUsername();