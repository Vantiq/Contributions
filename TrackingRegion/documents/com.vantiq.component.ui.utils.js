function varDefined(v){ return (v !== null && v !== undefined);}
if(!varDefined(com)) { var com = {}; }
if(!varDefined(com.vantiq)) { com.vantiq = {}; }
if(!varDefined(com.vantiq.component)) { com.vantiq.component = {}; }
if(!varDefined(com.vantiq.component.ui)) { com.vantiq.component.ui = {}; }

com.vantiq.component.ui.resizeToNewBackground = function(client, cameraLayout, cameraCanvas, retryCount, callback) {
    if (retryCount > 25) {
        console.error("Unable to detect background image changed after 5 seconds. widget name="+cameraLayout.name+"  url="+cameraLayout.url);
    } else {
        if (cameraLayout.scaledImageWidth > 0) {
            // resize both the layout and canvas to match the new background
            cameraLayout.w = cameraLayout.scaledImageWidth;
            cameraLayout.h = cameraLayout.scaledImageHeight;
            cameraCanvas.w = cameraLayout.scaledImageWidth;
            cameraCanvas.h = cameraLayout.scaledImageHeight;
            if (callback) {
                callback(client);
            }
        } else {
            retryCount++;
            client.setTimeout(function () {
                com.vantiq.component.ui.resizeToNewBackground(client, cameraLayout, cameraCanvas, retryCount, callback);
            }, 200);
        }
    }
}

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
com.vantiq.component.ui.roundRect = function(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
        var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }
}

/**
 *
 * @param x
 * @param y
 * @param vs
 * @returns {boolean}
 */
com.vantiq.component.ui.isPointInsidePolygon = function(x, y, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i].x, yi = vs[i].y;
        var xj = vs[j].x, yj = vs[j].y;

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};
com.vantiq.component.ui.isClickedInsidePolygon = function(e, vs) {
    var x = e.offsetX;
    var y = e.offsetY;
    return com.vantiq.component.ui.isPointInsidePolygon(x, y, vs);
};

com.vantiq.component.ui.isClickedOnDNDPoint = function(element, p, e) {
    var offsetX = 0, offsetY = 0, mx, my;
    mx = e.offsetX;
    my = e.offsetY;

    // distance to p
    var distance = Math.sqrt( Math.pow((mx-p.x), 2) + Math.pow((my-p.y), 2) );

    if (distance <= 10) {
        return true;
    } else {
        return false;
    }
}

/**
 * Get a list of Image Documents
 */
com.vantiq.component.ui.getDocuments = function(client, callback) {
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do a "select" on the specified user Type
    //
    http.setVantiqUrlForResource("system.documents");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Specify the (optional) query parameters
    //
    var query = {
        where: {
            fileType: {
                "$regex":"^image"
            }
        }
    };

    //
    //  Execute the asynchronous server request. This expects 3 parameters:
    //
    //  parameters: "null" or an object containing the parameters for this request
    //  successCallback: A callback function that will be driven when the request completes
    //                   successfully (i.e. a status code of 2XX)
    //  failureCallback: A callback function that will be driven when the request does not complete
    //                   successfully.
    //
    http.select(query,function(response)
        {
            //
            //  At this point "response" is an array containing the objects returned for the "select".
            //
            if (callback) {
                callback(client, response);
            }
        },
        function(errors)
        {
            //
            //  This call will format the error into a popup dialog
            //
            client.showHttpErrors(errors,"Doing a select on 'system.documents'");
        });
}

