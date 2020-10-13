---
editUrl: https://github.com/appcelerator-modules/ti.map/edit/master/apidoc/Route.yml
---
# Modules.Map.Route

<TypeHeader/>

## Overview

The `Route` object gives you low-level control over routes that can be added to a
[map view](Modules.Map.View). A route must have its `points` property set to appear on a map.

Use the <Modules.Map.createRoute> method to create a route.

### iOS Platform Notes

The `addRoute` method no longer accepts a dictionary as a parameter. Pass a <Modules.Map.Route> object instead.

### Android Platform Notes
The parameter `points` accepts additional the route in format `encoded polyline`.  
https://developers.google.com/maps/documentation/utilities/polylinealgorithm

<ApiDocs/>
