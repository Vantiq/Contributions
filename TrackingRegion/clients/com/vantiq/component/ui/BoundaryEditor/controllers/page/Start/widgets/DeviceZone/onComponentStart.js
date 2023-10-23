	// The owner of the component may load zones.
    // If not, start with 2 prebuild entrance and exit zones.
    if (!this.configuration.isLoadingZones) {
        // load default zones and setup drag & drop.
        this.configuration.loadBoundary(null);
    }