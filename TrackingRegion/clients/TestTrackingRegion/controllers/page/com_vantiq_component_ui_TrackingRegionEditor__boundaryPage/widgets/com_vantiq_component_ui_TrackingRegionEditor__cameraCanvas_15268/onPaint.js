    var ctx = extra.ctx;
    var canvas = this;
    ctx.clearRect(0, 0, canvas.w, canvas.h);

    if (canvas.configuration.zonePoints && (canvas.configuration.zonePoints.length > 0)) {
        // first, draw points
        ctx.filter = "opacity(100%)";
        for (var i = 0; i < canvas.configuration.zonePoints.length; i++) {
            var point = canvas.configuration.zonePoints[i];
            ctx.beginPath();
            ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 4;
            ctx.stroke();
        }

        // second, connect points with line
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 4;
        ctx.beginPath();       // Start a new path
        if (canvas.configuration.zonePoints.length > 1) {
            for (var i = 0; i < canvas.configuration.zonePoints.length; i++) {
                var point = canvas.configuration.zonePoints[i];
                if (i == 0) {
                    ctx.moveTo(point.x, point.y);
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            }
            // connect the last two points to close the loop
            ctx.lineTo(canvas.configuration.zonePoints[0].x, canvas.configuration.zonePoints[0].y);
            ctx.stroke();
        }

        ctx.strokeStyle = 'green';
        if (canvas.configuration.zonePoints.length > 2) {
            ctx.filter = "opacity(20%)";
            ctx.fillStyle = 'rgb(0, 200, 0)';
            // Create path
            let region = new Path2D();
            for (var i = 0; i < canvas.configuration.zonePoints.length; i++) {
                var point = canvas.configuration.zonePoints[i];
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
    }    