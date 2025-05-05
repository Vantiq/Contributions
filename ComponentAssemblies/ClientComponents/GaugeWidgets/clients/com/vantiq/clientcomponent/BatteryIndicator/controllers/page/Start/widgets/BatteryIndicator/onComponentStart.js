


    let config = this.configuration;
    var ratio = 60 / 40;
    let height = config.height;
    var width = height / ratio;

    let widget = config.root.apiWidget.children[0];

    widget.h = config.height;
    widget.w = width;

    config.setBattery(100);
    

    