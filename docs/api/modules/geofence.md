# Modules.Geofence

<TypeHeader/>

## Overview

<p class="note">This feature requires a Pro or Enterprise subscription!</p>

You use the Geofence module to define and monitor geofences in your application. A geofence is a circular
region defined by a point (a latitude/longitude pair) and a radius, and represented by the
[Region](Modules.Geofence.Region) object. When a device moves into
or out of a geofence being monitored, the module notifies your application of the event.

Enterprise customers can also define geofences on the server using the 
<a href="/cloud/latest/#!/api/GeoFences-method-create">Appcelerator Cloud Services API</a>. 
An application can query the server for any defined geofences and begin monitoring them. 
See the RegionMonitoring example in the module ZIP download.

## Getting Started

Once you have [installed](#!/guide/Using_a_Module) the module, use `require()` to access it from JavaScript:

    var Geofence = require('ti.geofence');

### Location Permissions

Please ensure to request proper location permissions before attempting to use geofencing feautures. See
[Titanium.Geolocation.hasLocationPermissions(<type>)](Titanium.Geolocation.hasLocationPermissions) and [Titanium.Geolocation.requestLocationPermissions(<type>, <callback>)](Titanium.Geolocation.requestLocationPermissions)
for details. Example:
  
    if (!Ti.Geolocation.hasLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS)) {
        Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS, function (e) {
            if (!e.success) {
                alert('Location permissions declined!');
                return;
            }
            
            alert('Location permissions ready');
            // Initialize monitoring here
        });
    }

### Creating and monitoring geofence regions

You use the [Geofence.createRegion()](Modules.Geofence.createRegion) method to define a [Region](Modules.Geofence.Region) object.
A geofence is a circular area defined by a point (latitude and longitude) and a radius (in meters).

    var newRegion = Geofence.createRegion({
        center: {
            latitude: 37.389601,
            longitude: -122.050169
        },
        radius: 500,
        identifier:'Appcelerator'
    });

To start monitoring a region, call the [Geofence.startMonitoringForRegions()](Modules.Geofence.startMonitoringForRegions) method, passing it the
region or regions you want to monitor.

    Geofence.startMonitoringForRegions([region1, region2]);

To be notified when the device moves into or out of a geofence region, create an event listener
for the [enterregions](Modules.Geofence.enterregions) or [exitregions](Modules.Geofence.exitregions) events, respectively.
For example:

    Geofence.addEventListener('enterregions', function(e) {
        e.regions.forEach(function (region) {
            // Display local notification
            showNotification({
                title: 'ENTER',
                body: 'enter - ' + region.identifier
            });
        });
    });

The event object passed to the event handler contains a `regions` property that identifies the region(s)
that were entered or exited. On iOS this property contains an array of [Region](Modules.Geofence.Region) objects;
on Android, it contains an array of generic objects that each contain a property called
`identifier`. The value of this property corresponds to the one assigned to the [Region](Modules.Geofence.Region)
when it was created.

## Testing Geofence monitoring

You have a few options for testing geofence monitoring in your application. One approach
is field testing: travel (drive, walk, etc.) between monitored regions while the application is running.
You can also pass mock location data to the application running on a device or Simulator.

Note: The timing and frequency of location events may vary from one environment to another (device, OS version, network availability).

### Mock locations from the iOS Simulator

Once the application is running in the simulator, select **Debug** > **Location** in the Simulator and
select a predefined location or route that you would like to be sent to the Simulator. You can
also enter a custom location (latitude, longitude).

### Mock locations using Xcode

This method will work on both the iOS Simulator and on device.

1. Launch your application once, then go to the build folder of your project and open the Xcode project found in **build/iphone/**.
2. Run your project using Xcode.
3. Once app is running, in Xcode debug area, click the Simulate Location icon to display a list of mock locations that can be sent to your application.
5. Select one of these locations to send it to your app.
    Alternately, click on **Add GPX File to Project...** and select a GPX file with mock locations. A GPX file is provided in the **example/MockLocationData** folder in module download. The route starts at North De Anza Blvd and I-280 in Cupertino, CA and travels north on I-280.
8. After adding a GPX file, go back and click on the mock locations arrow. The GPX file should now be in the list. Select the mock location to start using it.

### Mock locations on Android

Add the following to your `tiapp.xml`.

    <uses-permission android:name="android.permission.ACCESS_MOCK_LOCATION" />

For more information, see [Provide Mock Location Data](https://developer.android.com/guide/topics/location/strategies#MockData)

### Sample applications

The module ZIP file contains two Geofence sample applications (**examples/Basic** and **examples/RegionMonitoring**) 
and a GPX file (**examples/MockLocationData**) for mocking location data in Xcode.

<ApiDocs/>
