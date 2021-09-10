---
editUrl: https://github.com/appcelerator-modules/ti.map/edit/master/apidoc/Polyline.yml
---
# Modules.Map.Polyline

<TypeHeader/>

## Overview

The `Polyline` object gives you low-level control over polylines that can be added to a
[map view](Modules.Map.View). A polyline must have its `points` property set to appear on a map.

Use the <Modules.Map.createPolyline> method to create a polyline.

### Example

``` javascript
var polyline = Map.createPolyline({
    points: [{
            latitude: -33.891614,
            longitude: 151.276417
        },
        [-33.87365, 151.20689]
    ],
    strokeWidth: 3,
    strokeColor: '#f00',
    zIndex: 1
});
mapView.addPolyline(polyline);
```

<ApiDocs/>
