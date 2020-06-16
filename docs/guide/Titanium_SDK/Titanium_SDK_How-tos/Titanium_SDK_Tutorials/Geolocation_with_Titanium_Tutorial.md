---
title: Geolocation with Titanium Tutorial
weight: '20'
---

# Geolocation with Titanium Tutorial

This document will cover some of the basics to create a geolocation app.

If you need to create an app that requires Geolocation services, you will need to inform Apple and Google that your app requires access to the device's GPS and any related services. This is important as it enables the device's operating system to display the necessary permission dialogs so the user can allow or deny permission. If you don't do this, your app won't be able to run any geolocation code.

## Setting up the tiapp.xml file

Let's start out with creating a fresh Titanium app and start setting up the `tiapp.xml` file.

For iOS users, use this:

**tiapp.xml - iOS**

```xml
<ios>
    <plist>
        <dict>
            <key>NSLocationWhenInUseUsageDescription</key>
            <string>We need your location while using because...</string>
            <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
            <string>We always need you location because...</string>
        </dict>
    </plist>
</ios>
```

For Android:

**tiapp.xml - Android**

```xml
<android xmlns:android=“http://schemas.android.com/apk/res/android”>
    <manifest>
        <uses-permission android:name=“android.permission.ACCESS_FINE_LOCATION”/>
        <uses-permission android:name=“android.permission.ACCESS_COARSE_LOCATION”/>
    </manifest>
</android>
```

With this code, you can try to use Geolocation services in the app. The OS will inform the user that the app needs permission which the user can approve or deny the request.

## Ti.PlayServices

Titanium SDK 7.1.0 introduced support for `FusedLocationProvider` on Android. To enable this feature, include the [Ti.PlayServices](https://github.com/appcelerator-modules/ti.playservices) module in your app. This module inclusion will also enable battery efficiency with your app.

## Geolocation

### Get position

Assuming the user will approve the request to track location, the device's position can be obtained via this code (works on both Android and iOS):

**Geolocate: get current position**

```javascript
function getLocation( ) {
    Ti.Geolocation.getCurrentPosition(function(e) {
        console.log(e);
    });
}

getLocation();
```

Keep in mind that if the user denied the permission request from the OS, this code will fail (as it doesn't check if permission was granted or handles any types of errors). To offer a great app experience, the app should have the relevant permission before attempting to use the Geolocation service. The user can modify the location permission at any time and, on iOS, there is a friendly reminder that pops up from time to time to remind the user that the app is still using location feature.

### Check for permissions then get location

To check for permissions, our Geolocation service code should be wrapped with a permission check:

**Geolocation permission check**

```javascript
if (Ti.Geolocation.hasLocationPermissions()) {
  getLocation();
} else {
    Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE, function (e) {
        if (e.success) {
            getLocation();
        } else {
            alert(‘could not obtain location permissions’);
        }
    });
}
```

Here, we are checking for `AUTHORIZATION_WHEN_IN_USE`because the app is currently focused on getting the location. Note: this code is just obtaining the location once. It should include a timer to run every so often. It should also avoid wasting checks if the device's position hasn't changed after a period of time. We can solve this by using the `location` event by modifying the `getLocation` function so it will listen for changes based on location.

**Listen for location changes**

```javascript
function getLocation( ) {
  Ti.Geolocation.addEventListener("location",function(e) {
    console.log(e);
  });
}
```

This updated code will execute at the start of the app and whenever the device's location changes.

### Location data

The data sent back looks something like this:

**Location data**

```
{
  code = 0;
  coords = {
    accuracy = 5;
    altitude = 0;
    altitudeAccuracy = "-1";
    floor = {
      level = 0;
    };
    heading = "-1";
    latitude = "51.25243759155273";
    longitude = "-1.603847026824951";
    speed = "-1";
    timestamp = 1553776951640;
  };
  source = "[object GeolocationModule]";
  success = 1;
  type = location;
}
```

With this data (longitude, latitude, altitude, heading, speed, and elevation), the app can determine if the user is walking/running/riding/ on a mountain side or a beach.

## Fine tuning accuracy

You can fine tune the app with some additional settings in `Ti.Geolocation` to get and deliver location updates. This is important as over-checking the location can drain the device's battery unnecessarily.

Adjusting the accuracy (coupled with the features of the OS and device), can affect how the device figures out your location. For example, in a low power and low accuracy mode, the OS may use other means to figure out the device's location (e.g. cell towers or WiFi). With high accuracy mode enable, the OS might use any and all location detecting options available to it (including GPS) to get a pinpoint location.

To adjust the accuracy, tweak the `Ti.Geolocation.accuracy` property to set this to different accuracy levels such as `Ti.Geolocation.ACCURACY_BEST` or `Ti.Geolocation.ACCURACY_LOW`. For iOS, use the `Ti.Geolocation.distanceFilter` property to set the number of meters the device has to move before the location event is fired.

To fine tune the settings for Android, set up the `Ti.Geolocation.Android.LocationRule`. The following code will tell the device to skip location update unless the accuracy is less than 20m and at least 10 seconds has lapsed.

**Location rule**

```
Ti.Geolocation.Android.addLocationRule({accuracy: 20, minAge: 10000});
```

You can also use the `activity` property (`Ti.Geolocation.ACTIVITYTYPE_FITNESS` and `Ti.Geolocation.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION)`to determine when locations updates happen as the OS may have paused it.

This document was adapted from [Geolocation with Titanium – Part 1](https://devblog.axway.com/mobile-apps/geolocation-with-titanium-part-1/?utm_source=Axway+Developer&utm_campaign=dff3687f1a-Newsletter_April_2019&utm_medium=email&utm_term=0_763a3fa2c9-dff3687f1a-430799269) which was written by Jason Kneen.
