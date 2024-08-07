---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Geolocation/Android/Android.yml
---
# Titanium.Geolocation.Android

<TypeHeader/>

## Overview

This module is used for manually configuring geolocation settings on Android. 

Manual configuration is recommended for applications that have more demanding 
geolocation needs (for example, driving directions). However, for basic geolocation
information, *simple mode* geolocation may be sufficient. For information on simple 
mode, see <Titanium.Geolocation>.

Manual configuration involves managing *providers* and *rules*:

*   *Location providers*, such as GPS, provide location updates.

*   *Location rules* filter the results returned by location providers. 

Configuring geolocation manually involves three steps:

1.  Enabling manual mode.

2.  Enabling location providers.

3.  Adding location rules (optional).

As with the other modes, you register for location updates using the main
<Titanium.Geolocation> module. Location updates are generated as long as 
an event listener is registered for the `location` event.  When you are not 
using location updates, you should remove any registered event listeners.

In manual mode, the application is responsible for dynamically updating the settings
to acheive its required accuracy while limiting battery usage. For example, an
application might do any of the following:

*   If the application isn't getting updates frequently enough, it can adjust its
    provider settings to provide more updates, or relax its location rules to allow
    less accurate updates through. 

*   If the application isn't receiving accurate enough updates from one provider, it 
    can add another provider to try to improve results.

*   If the application is getting sufficiently accurate results from the network 
    provider, it can disable the GPS provider to save power.

### Enabling Manual Configuration Mode

To enable manual configuration mode, set the [manualMode](Titanium.Geolocation.Android.manualMode) 
property to `true`. In manual configuration mode, the location providers and location
rules set through this module control the generation of location updates.

When `manualMode` is `true`, the following configuration settings in the
<Titanium.Geolocation> module are ignored:

*   [Geolocation.accuracy](Titanium.Geolocation.accuracy)
*   [Geolocation.frequency](Titanium.Geolocation.frequency)
*   [Geolocation.preferredProvider](Titanium.Geolocation.preferredProvider)

When `manualMode` is `false`, the `accuracy`, `frequency` and `preferredProvider`
settings from <Titanium.Geolocation> are used to configure location updates.
Any location providers and location rules set in <Titanium.Geolocation.Android> 
are retained, but they have no effect.

### Location Providers

Android supports three kinds of location providers: GPS, network, and the 
"passive" location provider, which provides only cached information. 

Each location provider represents a different tradeoff between accuracy and
battery power. For most accurate results, you can use a combination of location
providers. Your application can also dynamically change providers to optimize
battery life (for example, if the network provider is providing good enough
location updates, you can disable the GPS provider).

Location providers are represented by the
[LocationProvider](Titanium.Geolocation.Android.LocationProvider) object. 
To specify a location provider, create a new provider object, then register it
with [addLocationProvider](Titanium.Geolocation.Android.createLocationProvider):

``` js
var gpsProvider = Ti.Geolocation.Android.createLocationProvider({
    name: Ti.Geolocation.Android.PROVIDER_GPS,
    minUpdateTime: 60, 
    minUpdateDistance: 100
});
Ti.Geolocation.Android.addLocationProvider(gpsProvider);
```

As shown above, when you create a location provider, you can specify two
properties to limit update frequency:

*   `minUpdateTime`. Limits the frequency of location updates to no more 
    than one per `minUpdateTime` seconds.

*   `minUpdateDistance`. Don't send location updates until the location changes
    at least `minUpdateDistance` meters.

Only one provider of each type (GPS, network, passive) can be registered at a
time. Adding a new location provider with the same `name` value replaces any
existing provider with the same `name`.

Once a location provider is added, changes made to the location provider object itself
(such as changing its `minUpdateTime` value) change the active configuration of the 
location system.

### Location Rules

*Location Rules* filter the results returned by location providers. You use
location rules to reduce the number of location update events, and ensure that 
the events you do receive are as accurate and recent as your application requires.

You are not required to set any location rules. However, by reducing the number of 
location events that are passed from the native code
to the JavaScript layer, location rules can improve both performance and battery
life.

Location rules are represented by the
[LocationRule](Titanium.Geolocation.Android.LocationProvider) object. To
specify a location rule, create a new rule object, then register it with 
[addLocationRule](Titanium.Geolocation.Android.createLocationProvider):

``` js
var gpsRule = Ti.Geolocation.Android.createLocationRule({
    provider: Ti.Geolocation.PROVIDER_GPS,
    // Updates should be accurate to 100m
    accuracy: 100,
    // Updates should be no older than 5m
    maxAge: 300000
    // But  no more frequent than once per 10 seconds
    minAge: 10000
});
Ti.Geolocation.Android.addLocationRule(gpsRule);
```

Each rule can specify any combination of the following criteria:

*   `provider`. If specified, this rule only applies to updates generated
    by the specified provider. If not specified, this rule applies to all updates.

*   `accuracy`. Minimum accuracy required for a location update. Accuracy is
    expressed as the maximum allowable error, in meters. Updates with reported
    accuracy values greater than this are filtered out. 

*   `minAge`. Controls the frequency of location updates. Do not forward an update unless
     at least `minAge` milliseconds have passed since the last good location
     update.

*   `maxAge`. Controls the freshness of location updates. Do not forward an update
    unless it is newer than `maxAge` milliseconds.

You can specify as many location rules as you like. The order in which location rules
are added is not significant. For a `location` event to be generated, the location
update must pass all of the active rules.

Note that some combinations of rules may make it very difficult to get location
updates. In particular, very low values for either `accuracy` or `maxAge` may prevent 
results from getting through.

<ApiDocs/>
