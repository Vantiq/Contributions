This project  contains 4 client components that provides a grapical interface for editing a Tracking Region.

### About Tracking Region ###
A tracking region represents a named area in a coordinate space.
Tracking regions have the following properties:

* **name** -- this is the name of the tracking region.
* **boundary** -- this is an Object that contains a list of (at most 4) points that comprise the boundary of the region.
* **distance** -- this is an Object containing the following properties:
    * **points** -- a list of two points
    * **distance** -- the distance between these two points
* **direction** -- this is an Object containing the following properties
    * **points** -- a list of two points
    * **direction** -- the direction (compass degrees between 0 and 360) that movement from the
first point to the second represents.
* **converstionOnly** -- a boolean 
* **conversionSpecification** -- this is an Object defines the conversion between 2 coordinates. It containing the following properties
    * **imageCoordinates** -- A set of 4 points in input coordinates with are 4 corners of image used by **boundary**, **distance**, and **direction**.
    * **convertedCoordinates** -- A set of 4 porints converted from 4 points of **imageCoordinates" on the output coordinates.  Output coordinates can be set of latitude and longitude coordinates on a map.

### Client Components: ###
* **com.vantiq.component.ui.BoundaryEditor** - An editor for specifying boundary (an array of 4 points) over an selected image.
* **com.vantiq.component.ui.DirectionDistanceEditor** - An editor for editing "distance" or "direction" property of a TrackingRegion.
* **com.vantiq.component.ui.ConvertCoordinates** - An editor for editing "convertionSepcification" property of a TrackingRegion.
* **com.vantiq.component.ui.TrackingRegionEditor** - A Client component to create/view/edit a tracking region. It use above three client components to edit its properties.  


### Using the Tracking Region Editor ###
You can run com.vantiq.component.ui.TrackingRegionEditor as a normal Client to create/edit/view tracking regions.

You can also embed the editor as a component to your Client. See _TestTrackingRegion_ as an example. The TrackingRegionEditor component's toolbar buttons are hidden by setting its _hideToolbar_ property to `true`.