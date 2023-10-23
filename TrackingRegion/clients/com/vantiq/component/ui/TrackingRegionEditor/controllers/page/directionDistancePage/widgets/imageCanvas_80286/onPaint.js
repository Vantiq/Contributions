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
            ctx.stroke();
        }
    }
