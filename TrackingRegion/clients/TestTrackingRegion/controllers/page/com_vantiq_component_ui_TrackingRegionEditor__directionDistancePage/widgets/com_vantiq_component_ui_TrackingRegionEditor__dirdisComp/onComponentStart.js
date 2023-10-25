    if (!this.configuration.editingObject) {
        // testing within IDE without calling loadObject first.
        // call loadObject with default value now.
        this.configuration.loadObject({});
    }