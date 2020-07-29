    var isPublic = client.isPublic();
    var widget = client.getWidget("isPublicOrPrivate");
    widget.text = isPublic ? "Public Mode" : "Private Mode";