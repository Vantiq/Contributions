    var buttonLayout = client.getComponentWidget(this.configuration, "HLOkCancel");
    buttonLayout.isVisible = !this.configuration.hideToolbar;
    if (!this.configuration.isLoadingZones && !this.configuration.trackingRegion) {
        // show a default new region
        this.configuration.loadRegion();
    }