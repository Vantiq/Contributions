    
    var isPublic = client.isPublic();
    
    var intro = client.getWidget("WelcomeLine");
    intro.text = isPublic ? "Welcome to VANTIQ! You are currently in Public Mode." : "Welcome to VANTIQ! You are currently in Private Mode.";
    
    var uuid = client.getUsername();
    var username = client.getUserRecord();
    var uuid_widget = client.getWidget("UUID");
    var username_widget = client.getWidget("Username");
    var pref_username = "";
    
    uuid_widget.text = "Your Unique User ID is: " + uuid;
    
    // at this point username returns null in some cases
    // the following function checks every tenth of a second
    // to try and request the username data - and also sets and displays
    // the username of the current user
    function getPrefUsername(){
        var id = setInterval(check, 100);
        function check() {
            if (username !== null) {
                clearInterval(id);
                pref_username = username.preferredUsername;
                username_widget.text = "Your Username is: " + 								pref_username;
            } else {
                username = client.getUserRecord();
            }
        }
    }
    
    getPrefUsername();