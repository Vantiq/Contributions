	//var newURL = client.getWidget("urlInput").boundValue;
    var newURL = client.data.currentUrl;
    if (newURL !== this.configuration.originalUrl) {
        client.closePopup(newURL);
    } else {
        // ulr wasn't changed, just close the popup like CANCEL.
        client.closePopup("CANCEL");
    }
    