# Modules.Map.View

<TypeHeader/>

## Overview

With native maps, you can control the mapping location, the type of map, the zoom level
and you can add custom annotations and routes directly to the map. Once the map view is
displayed, the user can pan, zoom and tilt the map using the native control gestures.

Use the <Modules.Map.createView> method to create a map view.

In Alloy, use the **`<Module>`** element with the `module` attribute set to `ti.map`
and `method` attribute set to `createView` to create a map view in XML markup:

``` xml
<Module module="ti.map" method="createView" />
```

All latitude and longitude values are specified in decimal degrees. Values in degrees,
minutes and seconds (DMS) must be converted to decimal degrees before being passed to
the map view.

You can add [Annotation](Modules.Map.Annotation) objects to the map to mark points of
interest. An annotation has two states: selected and deselected. A deselected annotation
is marked by a pin image. When selected, the full annotation is displayed, typically
including a title and an optional subtitle.

You can add [Route](Modules.Map.Route) objects to the map to create paths between
two or more points of interest.

To use the `userLocation` property in iOS 8 and later, add either the
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

<ApiDocs/>
