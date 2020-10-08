---
editUrl: https://github.com/appcelerator-modules/ti.map/edit/master/apidoc/Map.yml
---
# Modules.Map

<TypeHeader/>

## Overview

### Requirements

-   Google Maps API key (required for both development and production)
-   Google Play services SDK installed using the Android SDK manager
-   This module only works on Android devices.  This module is not supported on the Android emulator

### Getting Started

-   Edit the `modules` section of your tiapp.xml file to include this module:

    ``` xml
    <ti:app>
        <modules>
            <!-- Add this line to your modules section -->
            <module platform="android">ti.map</module>
        </modules>
    </ti:app>
    ```

-   Obtain a Google Maps API key.  For instructions, refer to the "Obtain and Add a Google API Key"
    section in the
    [Google Maps v2 for Android guide](http://docs.appcelerator.com/titanium/latest/#!/guide/Google_Maps_v2_for_Android).

-   Add the following `meta-tag` element to the Android manifest section of the tiapp.xml
    file. You may need to add the `manifest` and `application` elements.
    ``` xml
    <ti:app>
        <android xmlns:android="http://schemas.android.com/apk/res/android">
            <manifest>
                <application>
                    <!-- Replace "YOUR_API_KEY" with the Google API key you obtained -->
                    <meta-data 
                        android:name="com.google.android.geo.API_KEY"
                        android:value="YOUR_API_KEY" />
                </application>
            </manifest>
        </android>
    </ti:app>
    ```

-   Instantiate the module with the `require('ti.map')` method, then make subsequent API calls with
    the new map object.

    ``` javascript
    var Map = require('ti.map');
    var mapview = Map.createView({ 
      mapType: Map.NORMAL_TYPE 
    });
    ```

## iOS

This module is a replacement for the built-in Titanium.Map module on iOS.

For more instructions and examples of using the module, refer to the
[iOS Map Kit guide](http://docs.appcelerator.com/titanium/latest/#!/guide/iOS_Map_Kit).

### Requirements

-   Applications using this module must be built using Xcode 5 or later.

### Getting Started

-   Edit the `modules` section of your tiapp.xml file to include this module:

    ``` xml
    <ti:app>
        <modules>
            <!-- Add this line to your modules section -->
            <module platform="iphone">ti.map</module>
        </modules>
    </ti:app>
    ```

-   To use the `userLocation` property in iOS 8 and later, add either the
    [`NSLocationWhenInUseUsageDescription`](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW26)
    or
    [`NSLocationAlwaysUsageDescription`](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW18)
    key to the iOS plist section of the project's `tiapp.xml` file.

    ``` xml
    <ti:app>
        <ios>
            <plist>
                <dict>
                    <key>NSLocationAlwaysUsageDescription</key>
                    <string>
                        Specify the reason for accessing the user's location information.
                        This appears in the alert dialog when asking the user for permission to
                        access their location.
                    </string>
                </dict>
            </plist>
        </ios>
    </ti:app>
    ```

-   Instantiate the module with the `require('ti.map')` method, then make subsequent API calls with
    the new map object.

    ``` javascript
    var Map = require('ti.map');
    var mapview = Map.createView({
      mapType: Map.NORMAL_TYPE
    });
    ```

### Breaking Changes

-   The `addRoute` method no longer accepts a dictionary as a parameter. Pass a <Modules.Map.Route> object instead.

## Examples

### Basic Map Example

This is a basic map example that places a custom annotation on the map, and
listens for click events on the annotation.

In this example, a custom property (`myid`) is added to the annotation object.
While adding custom members to a Titanium object is not generally recommended,
in this case it provides a mechanism for uniquely identifying an annotation. This
can be useful, for example, if the annotations are dynamically generated
and it is not practical to identify them by title.

``` javascript
var Map = require('ti.map');
var win = Titanium.UI.createWindow();

var mountainView = Map.createAnnotation({
    latitude: 37.390749,
    longitude: -122.081651,
    title: 'Appcelerator Headquarters',
    subtitle: 'Mountain View, CA',
    pincolor: Map.ANNOTATION_RED,
    myid: 1 // Custom property to uniquely identify this annotation.
});

var mapview = Map.createView({
    mapType: Map.NORMAL_TYPE,
    region: { 
        latitude: 33.74511,
        longitude: -84.38993,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    },
    animate: true,
    regionFit: true,
    userLocation: true,
    annotations: [ mountainView ]
});

var circle = Map.createCircle({
    center: {
        latitude: 33.74511,
        longitude: -84.38993
    },
    radius: 1000, // = 1.0 km
    fillColor: '#20FF0000'
});
mapview.addCircle(circle);

win.add(mapview);

mapview.addEventListener('click', function(event) {
    Ti.API.info('Clicked ' + event.clicksource + ' on ' + event.latitude + ', ' + event.longitude);
});
win.open();
```

### Alloy XML Markup

Previous example as an Alloy view.

In XML markup, use the `View` element with the `module` attribute set to `ti.map` to create an
instance of a map view, then use the `Annotation` element to define an annotation.

In the initializer file, load the map module and assign it to the `Alloy.Globals.Map` namespace.
This variable can be used to reference map module constants in the project, as seen in the TSS
file to assign the `pincolor` attribute.

`alloy.js`:

``` javascript
// Loads the map module to the global Alloy scope, which can be referenced by Alloy.Globals.Map
Alloy.Globals.Map = require('ti.map');
```

`app/views/index.xml`:

``` xml
<Alloy>
    <Window>
        <Module id="mapview" module="ti.map" onClick="report" method="createView">
            <Annotation id="appcHQ" myId="1337" />
        </Module>
    </Window>
</Alloy>
```

`app/styles/index.tss`:

``` javascript
"#mapview": {
    region: {
        latitude: 33.74511,
        longitude: -84.38993,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }
},
"#appcHQ": {
    latitude: 37.368122,
    longitude: -121.913653,
    title: "Appcelerator Headquarters",
    subtitle: "San Jose, CA",
    pincolor: Alloy.Globals.Map.ANNOTATION_RED
}
```

`app/controllers/index.js`:

``` javascript
function report(event) {
    Ti.API.info('Annotation ' + event.title + ' clicked, ID: ' + event.annotation.myID);
}

$.index.open();
```

### Map Clustering (iOS 11+)

This is a map-example which creates marker annotation and clustering of annotations.

The `clusterIdentifier` property and the `clusterstart` event are required in order to enable 
clustering. You can control the clustering by defining the `collisionMode` property and
setting special cluster annotations using the `setClusterAnnotation` method on your map
view instance.

``` javascript
var Map = require('ti.map');
var win = Titanium.UI.createWindow();
var annotations = [];

for (var i = 0; i < 10; i++) {
    annotations.push(Map.createAnnotation({
        title: 'Appcelerator Inc.',
        subtitle: 'TiRocks!',
        clusterIdentifier: 'abc', // Required for clusters
        collisionMode: Map.ANNOTATION_VIEW_COLLISION_MODE_RECTANGLE,
        showAsMarker: true,
        markerGlyphText: i.toString(),
        markerColor: 'blue',
        markerGlyphColor: 'green',
        markerTitleVisibility: Map.FEATURE_VISIBILITY_VISIBLE,
        markerSubtitleVisibility: Map.FEATURE_VISIBILITY_HIDDEN,
        markerGlyphImage: 'path/to/flag.png',
        markerSelectedGlyphImage: 'path/to/flag-selected.png',
        annotationDisplayPriority: Map.FEATURE_DISPLAY_PRIORITY_DEFAULT_LOW,
        latitude: (Math.random() * 10) + 40,
        longitude: Math.random() * 10,
    }));
}

var mapview = Map.createView({
    annotations: annotations,
    rotateEnabled: true,
    mapType: Map.MUTED_STANDARD_TYPE,
    showsPointsOfInterest: false,
    userLocation: true
});

mapview.addEventListener('clusterstart', function(e) {
    Ti.API.info('clustering started!');

    var clusterAnnotation = Map.createAnnotation({
        showAsMarker: true,
        markerText: e.memberAnnotations.length.toString(),
        title: 'Cluster Title',
        subtitle: 'Cluster Subtitle',
    });

    mapview.setClusterAnnotation({
        annotation: clusterAnnotation,
        memberAnnotations: e.memberAnnotations
    });
});
win.add(mapview);
win.open();
```

<ApiDocs/>
