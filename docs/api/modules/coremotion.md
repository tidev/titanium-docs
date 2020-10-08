---
editUrl: https://github.com/appcelerator-modules/ti.coremotion/edit/master/apidoc/CoreMotion.yml
---
# Modules.CoreMotion

<TypeHeader/>

## Overview

The Core Motion module provides access to Apple's CoreMotion APIs. The Core Motion module provides support
for monitoring various hardware sensors on iOS devices, such as the accelerometer, gyroscope, and
magnetometer. The Core Motion module allows you to access the metrics provided by these sensors.

For instruction and examples of using the Core Motion Module, see the
[Core Motion Module guide](http://docs.appcelerator.com/platform/latest/#!/guide/Core_Motion_Module).


### Requirements

This module only works with devices running iOS 7 and later. Not all devices have the same hardware sensors,
so all features may not be available for all devices. Be sure to use the API to check the device
for the existence of a feature.

You can only test the Core Motion module on a device. The Core Motion API cannot be tested on the iOS
simulator.

Some features may require permission to use "Motion Activity". iOS requires the user's approval to
use the "Motion Activity" permission. When the application uses the Core Motion API for the first
time, iOS prompts the user to either approve or deny access to the Core Motion features of the
device. The user can change the permission settings with **Settings** > **Privacy**.


### Getting Started

Once you have [installed](#!/guide/Using_a_Module) the module and added it as a depedency,
use `require()` to access it from JavaScript:

``` javascript
var CoreMotion = require("ti.coremotion");

// The `CoreMotion` variable is a reference to the Module object.  Use this reference to make
// subsequent calls to the CoreMotion Module API. The following example shows the step counting
// API of `CoreMotion`.

var pedometer = CoreMotion.createPedometer();

// This code checks to see if the device can gather step counting data
if (pedometer.isStepCountingAvailable()) {
    // If it can, it starts the step counter and outputs the data to the console
    pedometer.startPedometerUpdates(function(e) {
        Ti.API.info(JSON.stringify(e));
    });
} else {
    Ti.API.warn('This device does not support counting steps.');
}
```

### Sample Application

The module ZIP file contains a Core Motion sample applications in `example/app.js`.

### Further Reading

- [iOS Developer Library: Core Motion Framework Reference](https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CoreMotion_Reference/_index.html)
- [iOS Developer Library: Motion Events](https://developer.apple.com/library/ios/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/motion_event_basics/motion_event_basics.html)

<ApiDocs/>
