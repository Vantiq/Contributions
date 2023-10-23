This project  contains 4 client components that you can use in your clients.

### Client Components: ###
* com.vantiq.component.ui.BoundaryEditor - A eitor for specifying boundary (an array of 4 points) over an selected image.
* com.vantiq.component.ui.DirectionDistanceEditor - A editor for editing "distance" or "direction" property of a TrackingRegion.
* com.vantiq.component.ui.ConvertCoordinates - A editor for editing "convertionSepcification" property of a TrackingRegion.
* com.vantiq.component.ui.TrackingRegionEditor - A Client component to create/view/edit a tracking region. It use above three client components to edit its properties.  

### Using the Tracking Region Editor ###
You can run com.vantiq.component.ui.TrackingRegionEditor as a normal Client to create/edit/view tracking regions.
You can also embed the editor as a component to your Client. See TestTrackingRegion as an example. The TrackingRegionEditor component's toolbar buttons are hidden by setting its hideToolbar property to true.