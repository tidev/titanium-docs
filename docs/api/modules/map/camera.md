# Modules.Map.Camera

<TypeHeader/>

## Overview

Applying a camera to a map has the effect of giving the map a 3D-like appearance.
You can use a camera to rotate the map so that it is oriented to match the user's
heading or to apply a pitch angle to tilt the plane of the map.

If the app is run on pre iOS 7, camera functionality will not be available.
After creating a `Camera` object, it can be applied to the map by setting the `camera` property of the 
[map view](Modules.Map.View).

Use the <Modules.Map.createCamera> method to create a camera.

If `altitude`, `eyeCoordinate`, and `centerCoordinate` are passed in on creation, a camera will be
returned using the specified viewing angle information.

<ApiDocs/>
