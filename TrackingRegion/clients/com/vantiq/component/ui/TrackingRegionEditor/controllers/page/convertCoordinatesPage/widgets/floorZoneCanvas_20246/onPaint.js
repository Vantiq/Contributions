    var first =1;
    var ctx = extra.ctx;
    var second=2;
    var canvas = this;
	ctx.clearRect(0, 0, canvas.w, canvas.h);
    
    // connect points with lines
    ctx.filter = "opacity(100%)";
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 4;
    ctx.beginPath();       // Start a new path
    if (!this.configuration.zonePoints) {
        this.configuration.zonePoints = [];
    }
    if (this.configuration.zonePoints.length > 1) {
        for (var i = 0; i < this.configuration.zonePoints.length; i++) {
            var point = this.configuration.zonePoints[i];
            if (i == 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        }
        // connect the last two points to close the loop
        ctx.lineTo(this.configuration.zonePoints[0].x, this.configuration.zonePoints[0].y);
        ctx.stroke();
    }

    // fill the polygon
    ctx.strokeStyle = 'green';
    if (this.configuration.zonePoints.length > 2) {
        ctx.filter = "opacity(20%)";
        ctx.fillStyle = 'rgb(0, 200, 0)';
        // Create path
        let region = new Path2D();
        for (var i = 0; i < this.configuration.zonePoints.length; i++) {
            var point = this.configuration.zonePoints[i];
            if (i == 0) {
                region.moveTo(point.x, point.y);
            } else {
                region.lineTo(point.x, point.y);
            }
        }
        region.closePath();

        // Fill path
        ctx.fill(region);
    }
    
    // draw labels on top of corner.
    ctx.filter = "opacity(100%)";
    var labels = ["A", "B", "C", "D"];
    for (var i = 0; i < this.configuration.zonePoints.length; i++) {
        var point = this.configuration.zonePoints[i];

        ctx.fillStyle = 'red';
        ctx.font = 'bold 30px";// san-serif';
        ctx.fillText(labels[i], point.x-10, point.y+10);
    }
    
