# Titanium.Geolocation

<TypeHeader/>

## Overview

This module combines two sets of features:

*   Location services. Determining the location of the device.

*   Geocoding and reverse geocoding. Converting geographic  coordinates into
    addresses, and converting addresses into geographic  coordinates.

Using location services can have a significant impact on a device's battery life,
so it's important to use them in the most efficient manner possible. Power consumption
is strongly influenced by the accuracy and frequency of location updates required by
your application.

The location services systems of the underlying platforms are very different, so there
are significant implementation differences between the platforms.

The basic methods of requesting location information and receiving location updates
are essentially the same on all platforms. However, the method of configuring the
accuracy and frequency of location updates is different for each platform.

### Getting Location Information

There are two ways to get location information:

*   Make a one-time request with [getCurrentPosition](Titanium.Geolocation.getCurrentPosition).

*   Register to receive location updates by adding an event listener for the
    [location](Titanium.Geolocation.location) event.

**NOTE:** Location services stay enabled for as long as a listener is registered for the
`location` event, so be sure to remove the event listener when you do not require
location updates.

### Configurating Location Updates on iOS

In iOS, the accuracy (and power consumption) of location services is primarily
determined by the [accuracy](Titanium.Geolocation.accuracy) setting. This can be set
to one of the following values:

*   [ACCURACY_BEST](Titanium.Geolocation.ACCURACY_BEST) (highest accuracy and power consumption)
*   [ACCURACY_BEST_FOR_NAVIGATION](Titanium.Geolocation.ACCURACY_BEST_FOR_NAVIGATION)
*   [ACCURACY_HIGH](Titanium.Geolocation.ACCURACY_HIGH)
*   [ACCURACY_NEAREST_TEN_METERS](Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS)
*   [ACCURACY_HUNDRED_METERS](Titanium.Geolocation.ACCURACY_HUNDRED_METERS)
*   [ACCURACY_KILOMETER](Titanium.Geolocation.ACCURACY_KILOMETER)
*   [ACCURACY_LOW](Titanium.Geolocation.ACCURACY_LOW)
*   [ACCURACY_THREE_KILOMETERS](Titanium.Geolocation.ACCURACY_THREE_KILOMETERS) (lowest
    accuracy and power consumption).

Based on the accuracy you choose, iOS uses its own logic to select location providers
and filter location updates to provide location updates that meet your accuracy
requirements.

You can further limit power consumption on iOS by setting the
[distanceFilter](Titanium.Geolocation.distanceFilter) property to eliminate position
updates when the user is not moving.

In order to receive the user's location, add either the
[`NSLocationWhenInUseUsageDescription`](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW26)
or
[`NSLocationAlwaysUsageDescription`](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW26)
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

For iOS 11 and later, also add the [`NSLocationAlwaysAndWhenInUseUsageDescription`](https://developer.apple.com/documentation/corelocation/choosing_the_authorization_level_for_location_services/request_always_authorization)
when planning to request the "Always" permission. Using the above key, you are also able to upgrade your permissions from
"When in Use" to "Always", which is the recommended way for managing location permissions in iOS 11 and later.
Please also remember to request your desired location-permissions before using any geolocation-related API in
order to receive the best usability and permission-control during the app-lifecycle using <Titanium.Geolocation.hasLocationPermissions>
and <Titanium.Geolocation.requestLocationPermissions>. Also note that you also need to include the `NSLocationWhenInUseUsageDescription` key
in *any* case when targeting iOS 11 and later. Descriptive error-logs will be thrown if required permissions are missing.

### Configurating Location Updates on Android

On Android, two different location service modes are supported: *simple*, and *manual*.

*   *Simple mode* provides a compromise mode that provides adaquate support for
    undemanding location applications without requiring developers to
    write a lot of Android-specific code. To use simple mode:

    1.   Leave the <Titanium.Geolocation.Android.manualMode> flag set to `false` (the
         default value).

    2.   Set the [accuracy](Titanium.Geolocation.accuracy) property to
         either [ACCURACY_HIGH](Titanium.Geolocation.ACCURACY_HIGH) or
         [ACCURACY_LOW](Titanium.Geolocation.ACCURACY_LOW).

*   *Manual mode* gives developers low-level control of location updates, including
    enabling individual location providers and filtering updates, for the best
    combination of accuracy and battery life.

    Manual mode is used when the <Titanium.Geolocation.Android.manualMode> flag is set
    to `true`. In manual mode, the `accuracy` property is not used, and all
    configuration is done through the <Titanium.Geolocation.Android> module.

As of Titanium SDK 7.1.0 and later, including the [`ti.playservices`](https://github.com/appcelerator-modules/ti.playservices) module will allow Google Play Services 
to be used by default to obtain location information. This means the provider passed into [createLocationProvider](Titanium.Geolocation.Android.createLocationProvider)
will be ignored, as Google Play Services will select the best provider based on current device conditions.
If Google Play Services is not available it will fallback to previous behaviour of using Android location APIs.

To retrieve location events:

``` js
var win = Ti.UI.createWindow({ backgroundColor: 'white' });

Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;

function getLocation() {
    Ti.Geolocation.addEventListener('location', function(e) {
        alert(JSON.stringify(e, null, 2));
    });
}

win.addEventListener('open', function() {
    if (Ti.Geolocation.hasLocationPermissions()) {
        getLocation();
      } else {
        Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS, function(e) {
            if (e.success) {
                getLocation();
            } else {
                alert('could not obtain location permissions');
            }
        });
    }
});

win.open();
```

### Using the Compass

Both iOS and Android support a receiving heading updates from a hardware compass, if available.

Check the [hasCompass](Titanium.Geolocation.hasCompass) property to see if the current
device supports a compass.

To retrieve compass readings, you can either use
[getCurrentHeading](Titanium.Geolocation.getCurrentHeading) as shown in the
previous example, or add a listener for the
[heading](Titanium.Geolocation.heading) event, as shown below:

``` js
function compassHandler (e) {
  if (e.success) {
    Ti.API.info('Heading: ' + e.heading.magneticHeading);
  }
}
Ti.Geolocation.addEventListener('heading', compassHandler);
```

Note that Android did not include a `success` property in the `heading` event prior to SDK 7.5.0.
Heading events are only generated on Android when heading data is available. So if
`success` is undefined on prior SDK versions, we assume that the event contains valid compass data.

To obtain true heading data for the compass (as opposed to magnetic heading data),
a current location fix is required. See the notes on
[trueHeading](HeadingData.trueHeading) for more information.

As with location updates, the application should unregister for heading updates
when it is no longer being used, or when it goes into the background. Use
`removeEventListener` to stop heading updates:

``` js
Ti.Geolocation.removeEventListener('heading', compassHandler);
```

Finally, note that neither the Android emulator nor the iOS simulator provide
compass support. Compass code must be tested on physical devices.

### Geocoding Services

The module provides two methods, [forwardGeocoder](Titanium.Geolocation.forwardGeocoder) and [reverseGeocoder](Titanium.Geolocation.reverseGeocoder)
to convert between geographic coordinates and addresses. These methods map to MapQuest Open Nominatim Search Service.

While this API has the advantage that it has no daily usage limits, please note that the data backing this API is crowd sourced and might not return
proper values for valid addresses and geographic coordinates.

If geocoding services are essential component of the application, developers are encouraged to use commercial geocoding providers.

<ApiDocs/>
