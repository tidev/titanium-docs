---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Accelerometer/Accelerometer.yml
---
# Titanium.Accelerometer

<TypeHeader/>

## Overview

An accelerometer is a hardware unit integrated into a mobile device, that detects when the 
device has moved, and returns its new orientation in a three-dimensional space. With its 
single `update` event, this module provides an interface to access the output positional data.

An accelerometer needs to be switched on in order for it to report to the operating system, 
which consumes a lot of power that will deplete the battery over time. This is why it is 
recommended that the accelerometer is switched off when not in use.

The accelerometer may be switched on and off by simply adding and removing the `update` 
event listener function. See the example for a demonstration.

## Examples

### Basic Accelerometer Event

Adds an accelerometer update event listener, and displays the x, y and z axis in the 
window when the device is moved. On Android, the accelerometer is switched off and on when 
the application is paused and resumed.

``` js
var win = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose:true,
  layout: 'vertical'
});

opts = {
  color:'black',
  font:{fontSize:20},
  text:'-',
  top:20, left:10,
  width:300
};
var labelTimestamp = Ti.UI.createLabel(opts);
win.add(labelTimestamp);
var labelx = Ti.UI.createLabel(opts);
win.add(labelx);
var labely = Ti.UI.createLabel(opts);
win.add(labely);
var labelz = Ti.UI.createLabel(opts);
win.add(labelz);
win.open();

var accelerometerCallback = function(e) {
  labelTimestamp.text = 'timestamp: ' + e.timestamp;
  labelx.text = 'x: ' + e.x;
  labely.text = 'y: ' + e.y;
  labelz.text = 'z: ' + e.z;
};

if (Ti.Platform.model === 'Simulator' || Ti.Platform.model.indexOf('sdk') !== -1 ) {
  alert('Accelerometer does not work on a virtual device');
} else {
  Ti.Accelerometer.addEventListener('update', accelerometerCallback);
  if (Ti.Platform.name === 'android') {
    win.addEventListener("open", function(e) {
      win.activity.addEventListener("pause", function() {
        Ti.API.info("removing accelerometer callback on pause");
        Ti.Accelerometer.removeEventListener('update', accelerometerCallback);
      });
      win.activity.addEventListener("resume", function() {
        Ti.API.info("adding accelerometer callback on resume");
        Ti.Accelerometer.addEventListener('update', accelerometerCallback);
      });
    });
  }
}
```

<ApiDocs/>
