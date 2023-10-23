    var viewer = client.getComponentWidget(this.configuration, "regionJSONViewer");
    navigator.clipboard.writeText(viewer.boundValue);