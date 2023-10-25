/*
var newPoint = extra;
    this.configuration.zonePoints.push(newPoint);
    
    var points = this.configuration.zonePoints;
    // Get the center (mean value) using reduce
const center = points.reduce((acc, { x, y }) => {
  acc.x += x / points.length;
  acc.y += y / points.length;
  return acc;
}, { x: 0, y: 0 });

// Add an angle property to each point using tan(angle) = y/x
const angles = points.map(({ x, y }) => {
  return { x, y, angle: Math.atan2(y - center.y, x - center.x) * 180 / Math.PI };
});

// Sort your points by angle
const pointsSorted = angles.sort((a, b) => a.angle - b.angle);
    this.configuration.zonePoints = pointsSorted;
    this.repaint();	
    */