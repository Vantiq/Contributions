	var widget = client.getWidget("RegisterButton");
    if (client.data.email !== null && client.data.first_name !== null && client.data.last_name !== null){
        widget.isDisabled = false;
    } else {
        widget.isDisabled = true;
    }