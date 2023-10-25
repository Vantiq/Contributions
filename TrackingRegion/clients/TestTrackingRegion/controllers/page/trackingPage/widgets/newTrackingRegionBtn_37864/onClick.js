    var thisCongiguration = this.configuration;
    if (client.data.isRegionModified) {
        client.confirmCustom("Current trackingRegion was mofified. Are you sure you want to create a new trackignRegion?","Yes","No",function(clicked)
        {
            //
            //  "clicked" will have a value of "Yes", "No" or "Cancel" depending on which 
            //  button in the dialog was clicked.
            //
            if (clicked == "Yes") {
                thisCongiguration.loadRegion({name: "NewTrackingRegion"});
            }
        });
    } else {
        thisCongiguration.loadRegion({name: "NewTrackingRegion"});
    }

	