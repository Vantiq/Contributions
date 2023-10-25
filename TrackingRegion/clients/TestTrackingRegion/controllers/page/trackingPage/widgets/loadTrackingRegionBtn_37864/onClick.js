    var thisCongiguration = this.configuration;
    if (client.data.isRegionModified) {
        client.confirmCustom("Current trackingRegion was mofified. Are you sure you want to load an existing trackignRegion?","Yes","No",function(clicked)
        {
            //
            //  "clicked" will have a value of "Yes", "No" or "Cancel" depending on which 
            //  button in the dialog was clicked.
            //
            if (clicked == "Yes") {
                client.popupPage("selectRegionPage", "Select a tracking region", null, function(selectedRegion) {
                    if (selectedRegion && (selectedRegion !== "CANCEL" )) {
                        delete selectedRegion._id;
                        delete selectedRegion.ars_namespace;
                        delete selectedRegion.ars_version;
                        delete selectedRegion.ars_createdAt;
                        delete selectedRegion.ars_createdBy;                        
                        thisCongiguration.loadRegion(selectedRegion);
                    }
                });
            }
        });
    } else {
        client.popupPage("selectRegionPage", "Select a tracking region", null, function(selectedRegion) {
            if (selectedRegion && (selectedRegion !== "CANCEL" )) {
                delete selectedRegion._id;
                delete selectedRegion.ars_namespace;
                delete selectedRegion.ars_version;
                delete selectedRegion.ars_createdAt;
                delete selectedRegion.ars_createdBy;
                thisCongiguration.loadRegion(selectedRegion);
            }
        });
    }
	