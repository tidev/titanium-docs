---
title: Supporting Gestures
weight: '50'
---

# Supporting Gestures

## Objective

In this section, you will learn how to support more than simple taps in your Titanium apps. You'll examine various gestures, including shakes and swipes, and also learn how to manage global events within the Android app lifecycle.

## Contents

Mobile devices offer opportunity for inputs that go beyond simple taps. "Best of breed" apps should use those inputs whenever appropriate. These include:

* Shakes

* Swipes

* Touches

* Pinching

* Long presses

* and accelerometer inputs by which you gauge pitch, roll, and yaw.

We'll breeze through each of these in this section.

### Shake

You can determine when a user shakes their device via the `Ti.Gesture` module.

```
Ti.Gesture.addEventListener('shake',function(e) {
  alert('shaken at '+e.timestamp);
});
```

You could use the `timestamp` property to determine if a user has shaken the device for a given amount of time.

The iOS simulator supports simulated shake events. Choose **Hardware** > **Shake Device** to "shake" the simulator. The Android emulator does not support simulated shake events.

### Swipe

Swipes are left/right tap & drag the finger gestures (where scrolls are up/down drags). Support for swipes are built into most of the Titanium UI components.

```javascript
var view = Ti.UI.createView();
view.addEventListener('swipe', function(e){
  alert('You swiped to the '+e.direction);
});
```

### Touch

Touch events are associated with the Titanium UI components. There are four touch events:

* `touchstart` – fired when a user's finger first contacts the device's screen.

* `touchend` – fired when the user lifts his or her finger.

* `touchmove` – fires continuously as the user drags his or her finger on the screen.

* `touchcancel` – fired if the operating system interrupts an ongoing touch event, such as when a phone call is received.

The event object associated with these events has only two useful properties: the X and Y coordinates of the event. You can use that information to track the user's finger across your app's UI.

On the Android platform, other gesture events, such as `longpress` and `swipe`, cancel touch events, so a `touchend` event may not fire after a `touchstart` event.

### Pinch

Added in the 1.8 release of the APIs, the pinch event is currently supported on iOS only. (Android support is in the works.) This event is associated with UI components and its event object has the useful `scale` property as shown here:

```javascript
var view = Ti.UI.createView();
view.addEventListener('pinch', function(e){
  alert('You pinched to ' + e.scale*100 + '%');
});
```

### Long press

Also added in version 1.8 is support for long press events. These are like taps or clicks that last for more than an arbitrary amount of time. Keep in mind the native conventions for use of the long press. For example, on Android, a long press typically displays a pop-up of options or actions (sort of like a context menu on a desktop operating system).

Support for long presses are now built into most of the Titanium UI components.

```javascript
var view = Ti.UI.createView();
view.addEventListener('longpress', function(e){
  alert('You pressed at coordinates ' + e.x + ' / ' + e.y);
});
```

### Accelerometer

Some iOS and Android devices include an accelerometer, which you can use to track pitch, roll, and yaw. Perhaps you've seen racing games where you steer by tipping your device from side to side. You can use the accelerometer for similar user input in your Titanium apps.

```
// labelTime, labelX, labelY, and labelZ are Ti.UI.Labels
Ti.Accelerometer.addEventListener('update', function(e){
  labelTime.text = e.timestamp;
  labelX.text = 'x: ' + e.x;
  labelY.text = 'y:' + e.y;
  labelZ.text = 'z:' + e.z;
});
```

If you run this code or the accelerometer.js sample in the Kitchen Sink, you'll see that the `update` event is fired rapidly and the three axis values are extremely sensitive (many decimal places). To use the accelerometer successfully in your app, you'll want to average values over time and round the values to an appropriate level of precision for your needs. A Google search for [smoothing accelerometer data](http://www.google.com/search?aq=0&oq=smoothing+accelerometer&sourceid=chrome&ie=UTF-8&q=smoothing+accelerometer+data) will give you many code examples to draw from.

(Keep in mind that the simulator/emulator doesn't support the accelerometer. So, you'll have to test on a device.)

## Managing events within the app's lifecycle

Because Android is a multitasking environment, it's important that you remove global event listeners when your app is put into the background. (Global events include Ti.App, Ti.Gesture, Ti.Accelerometer, Ti.Geolocation, etc.) If you don't, the hardware that supports those global events will remain powered on and events will continue to be fired. Removing event listeners thus helps limit the associated battery-drain by powering down the device components. To remove an event listener, you must pass the same function signature to `removeEventListener()` as you passed to `addEventListener()`. For that reason, you should generally follow this format:

```javascript
// labelTime, labelX, labelY, and labelZ are Ti.UI.Labels
var accelerometerAdded = false;
var accelerometerCallback = function(e){
  labelTime.text = e.timestamp;
  labelX.text = 'x: ' + e.x;
  labelY.text = 'y:' + e.y;
  labelZ.text = 'z:' + e.z;
};
Ti.Accelerometer.addEventListener('update', accelerometerCallback);
accelerometerAdded = true;

if(Titanium.Platform.name == 'android') {
  Ti.Android.currentActivity.addEventListener('pause', function(e) {
    // called when app is put into the background
    if(accelerometerAdded) {
      Ti.API.info("removing accelerometer callback on pause");
      Ti.Accelerometer.removeEventListener('update', accelerometerCallback);
    }
  });
  Ti.Android.currentActivity.addEventListener('resume', function(e) {
    if(accelerometerAdded) {
      Ti.API.info("adding accelerometer callback on resume");
      Ti.Accelerometer.addEventListener('update', accelerometerCallback);
    }
  });
}
```

## Summary

In this section, you learned how to add support for shakes, swipes, touches, pinches, and long presses. You even explored how you can use the accelerometer as a means of user input. Finally, you handled global events within the app's lifecycle to manage battery drain.
