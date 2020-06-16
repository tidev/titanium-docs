---
title: Android Broadcast Intents and Receivers
weight: '30'
---

# Android Broadcast Intents and Receivers

## Introduction

In Android, the OS or an application can send out a broadcast message that can be monitored by any application. Some broadcasts require a special permission to be set in the application in order to monitor it. For example, the Android OS sends out broadcast messages about the device, such as if the device has a low battery or changes to airplane mode, while an application can send out a custom broadcast message.

The application can use broadcast receivers to monitor system events from the Android OS as well as custom broadcasts sent by other applications. The application will need to know the name of the broadcast actions in order to monitor them. Note that Titanium only supports programmatically creating and registering broadcast receivers. Titanium does not support declaring a receiver in the Android manifest.

## Send a broadcast

To send a broadcast, create an intent using the`Titanium.Android.createBroadcastIntent()`method. Pass the intent object to the current activity's`sendBroadcast()`or `sendBroadcastWithPermission()`method.

### Create a broadcast intent

To create a broadcast intent, pass the `Titanium.Android.createBroadcastIntent()` method an object with its `action` property set to a string describing the action that took place. Use a reverse domain name scheme in order to avoid potential conflicts with other applications.

To send extra data with the intent, use the intent's `putExtra()` method to add data. For details, see [Android Intents: Add Extra Data](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intents/#add-extra-data).

The application can also create an explicit intent to send the broadcast to a specific application or application activity. Specify the intent object's `className` and `packageName` properties, or the `url` property, but not both. For details, see [Android Intents: Create an Explicit Intent](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intents/#create-an-explicit-intent).

The following example creates a broadcast intent and adds extra data to be passed on to the application or activity.

```javascript
var intent = Ti.Android.createBroadcastIntent({
    action: 'com.appcelerator.action.ALERT'
});
intent.putExtra(Ti.Android.EXTRA_TEXT, 'Download update');
```

### Send a broadcast

To send a broadcast, pass the Intent object to the current activity's `sendBroadcast()` method. Use the `Titanium.Android.currentActivity` property to get a reference to the application's current activity.

```
Ti.Android.currentActivity.sendBroadcast(intent);
```

Any application that has a registered broadcast receiver listening to `com.appcelerator.action.ALERT` action will be notified.

### Send a broadcast with a permission

::: tip 💡 Hint
Instead of sending a broadcast with a permission, you can create an explicit intent (described in the _Create a Broadcast Intent_ section) to send the broadcast to a specific application if you know the package name and class name of the application.
:::

To restrict which application can receive the broadcast, send a broadcast with a permission:

1. Create the broadcast intent.

2. Declare the permission in the Android manifest section of the `tiapp.xml` file using the `<permission>` element with the `android:name` attribute set to the name of the action.

3. Pass the Intent object and permission to the `sendBroadcastWithPermission()` method.

In order to receive the broadcast, the receiving application needs to declare that it can use the permission in the Android manifest section of the `tiapp.xml`.

The example below takes the previous example and adds a permission to it.

**tiapp.xml**

```xml
<!-- Declare the permission -->
<ti:app>
    <android>
        <manifest>
          <permission android:name="com.appcelerator.action.ALERT"/>
        </manifest>
    </android>
</ti:app>
```

```javascript
var intent = Ti.Android.createBroadcastIntent({
    action: 'com.appcelerator.action.ALERT'
});
intent.putExtra(Ti.Android.EXTRA_TEXT, 'Download update');
Ti.Android.currentActivity.sendBroadcastWithPermission(intent, 'com.appcelerator.action.ALERT');
```

## Monitor a broadcast

To monitor a broadcast, the application needs to create a broadcast receive and register the broadcast receive with the OS. Use the `Titanium.Android.createBroadcastReceiver()` method to create a broadcast receiver, then register it with the `Titanium.Android.registerBroadcastReceiver()` method. Note that to receive some broadcasts, the application will need to declare the correct permission in Android manifest section of the `tiapp.xml` file.

**To create a broadcast receiver**, pass the `Titanium.Android.createBroadcastReceiver()` method a dictionary object with the one of the following properties defined, but not both:

* `onReceived`: Assign a callback function to handle the broadcast. The callback function is passed an object with its `intent` property set to the Intent that created the broadcast.

* `url`: Assign to the URL of a JavaScript file to handle the broadcast. Note that the JavaScript file does have any context passed to it, so it will not know the intent that created the broadcast.

**To register a broadcast receiver**, pass the `Titanium.Android.registerBroadcastReceiver()` method a `BroadcastReceiver` object as the first parameter and an array of actions to monitor as the second parameter. Android system broadcasts are declared as `Titanium.Android.ACTION_*` constants. Note that not all actions are system broadcasts.

**To unregister a broadcast receiver**, pass the `Titanium.Android.unregisterBroadcastReceiver()` method a `BroadcastReceiver` object to unregister it to stop monitoring a broadcast.

**To monitor a broadcast that requires a special permission**, declare the `<uses-permission>` element in the Android manifest section of the `tiapp.xml` file for each broadcast that uses a special permission.

The example below registers a broadcast receiver to monitor if the device's screen is turned on or off. The broadcast is a system event sent by the Android OS. If the screen is turned off then back on, the application displays an alert dialog.

```javascript
var showAlert = false;
var broadcastReceiver = Ti.Android.createBroadcastReceiver({
  onReceived : function(e) {
    switch (e.intent.action) {
            case Ti.Android.ACTION_SCREEN_OFF:
                showAlert = true;
                break;
            case Ti.Android.ACTION_SCREEN_ON:
                if (showAlert) {
                    alert("Peek-a-boo!");
                    showAlert = false;
          }
                break;
        }
    }
});
Ti.Android.registerBroadcastReceiver(broadcastReceiver, [Ti.Android.ACTION_SCREEN_OFF, Ti.Android.ACTION_SCREEN_ON]);
```

The example below registers a broadcast receiver to monitor the broadcast sent with permission from the example in _Send a Broadcast with a Permission._

**tiapp.xml**

```xml
<!-- Declare that the application uses the permission -->
<ti:app>
    <android>
        <manifest>
          <uses-permission android:name="com.appcelerator.action.ALERT"/>
        </manifest>
    </android>
</ti:app>
```

```javascript
var broadcastReceiver = Ti.Android.createBroadcastReceiver({
    onReceived : function(e) {
        var intent = e.intent,
            message;
        if (intent.hasExtra(Ti.Android.EXTRA_TEXT) && (message = intent.getStringExtra(Ti.Android.EXTRA_TEXT))) {
            alert(message);
        }
    }
});
Ti.Android.registerBroadcastReceiver(broadcastReceiver, ['com.appcelerator.action.ALERT']);
```

## Further reading

* [Titanium.Android API Reference](#!/api/Titanium.Android)
