---
title: Subscribing to push notifications
weight: '20'
---

# Subscribing to push notifications

For a push notification to reach a user, the user (or device) must be subscribed to receive push notifications on one or more notification _channels_. The application must also obtain a _device token_, which permits Mobile Backend Services (MBS) to communicate with the push service provider (Google Cloud Messaging (GCM), Firebase Cloud Messaging (FCM), or Apple Push Notification). [Firebase Cloud Messaging](http://firebase.google.com/docs/cloud-messaging/) (FCM) is the new version of GCM. This guide explains how to how obtain a device token, and how to use the [PushNotifications API](#!/api/Modules.Cloud.PushNotifications) to manage your user's notification subscriptions.

## Obtaining a device token

To receive push notifications, your application first needs to obtain a _device token_. To obtain a device token:

* On Android, call the [CloudPush](#!/api/Modules.CloudPush) module's`retrieveDeviceToken()`method

* On iOS, call the`Titanium.Network.registerForPushNotifications()`

Once your application has obtained a device token it should save it for later use.

### Obtaining a device token on Android

To obtain a device token from GCM or FCM, you first need to add the CloudPush module to your project. This module is included with the Titanium SDK, but is not included by default in new projects.

**To add the CloudPush module to your project**:

1. In Studio, open your project's `tiapp.xml` file.

2. In the **Modules** section, click the add (**+**) button.

3. Select **ti.cloudpush** and click **OK**.

In your application code, require the `ti.cloudpush` module and call its `retrieveDeviceToken()` method, and register event handlers to respond to `success` and `error` events. Once a device token has been retrieved, your application can listen for the `callback` event to process incoming push notifications. Your application should save the device token for later use. The following code demonstrates the minimal code required to obtain a device token and setup event handlers:

```javascript
// Require the module
var CloudPush = require('ti.cloudpush');
var deviceToken = null;

// Initialize the module
CloudPush.retrieveDeviceToken({
    success: deviceTokenSuccess,
    error: deviceTokenError
});

// Enable push notifications for this device
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
}
function deviceTokenError(e) {
    alert('Failed to register for push notifications! ' + e.error);
}

// Process incoming push notifications
CloudPush.addEventListener('callback', function (evt) {
    alert("Notification received: " + evt.payload);
});
```

### Obtaining a device token on iOS

To obtain a device token on iOS, call the`Titanium.Network.registerForPushNotifications()`and setup callbacks for the `success`, `error`, and `callback` events. You can also specify the types of notifications enabled for your application, which can include one or more of the following: [NOTIFICATION\_TYPE\_ALERT](#!/api/Titanium.Network-property-NOTIFICATION_TYPE_ALERT), [NOTIFICATION\_TYPE\_BADGE](#!/api/Titanium.Network-property-NOTIFICATION_TYPE_BADGE), [NOTIFICATION\_TYPE\_NEWSSTAND](#!/api/Titanium.Network-property-NOTIFICATION_TYPE_NEWSSTAND) , or [NOTIFICATION\_TYPE\_SOUND](#!/api/Titanium.Network-property-NOTIFICATION_TYPE_SOUND).

You need to register the user notification types you want to use with the `Titanium.App.iOS.registerUserNotificationSettings()`method before calling the `registerForPushNotifications()` method.

```javascript
var deviceToken = null;

// Wait for user settings to be registered before registering for push notifications
Ti.App.iOS.addEventListener('usernotificationsettings', function registerForPush() {

    // Remove event listener once registered for push notifications
    Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush);

    Ti.Network.registerForPushNotifications({
        success: deviceTokenSuccess,
        error: deviceTokenError,
        callback: receivePush
    });
});

// Register notification types to use
Ti.App.iOS.registerUserNotificationSettings({
    types: [
        Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
        Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
        Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
    ]
});

// Process incoming push notifications
function receivePush(e) {
    alert('Received push: ' + JSON.stringify(e));
}
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
}

function deviceTokenError(e) {
    alert('Failed to register for push notifications! ' + e.error);
}
```

## Using the Titanium PushNotifications API

Once your application has [obtained a device token](#obtaining-a-device-token) and setup `callback` event handlers, you can use the [Modules.Cloud.PushNotifications](#!/api/Modules.Cloud.PushNotifications) APIs to manage the user's notification subscriptions. You use the PushNotifications API to subscribe and unsubscribe to notifications _channels_, send notifications to other MBS users or devices, or query MBS for the current user's subscriptions.

### Session- and token-based subscriptions

Arrow Push provides two ways for an application to manage its push notification subscriptions: **session-based** and **token-based.** Session-based subscriptions require that the current user be [logged in](/arrowdb/latest/#!/api/Users-method-login) to MBS to subscribe/unsubscribe, send, or receive push notifications. Token-based notifications only require the application to retrieve a device token (see [Obtaining a device token](#obtaining-a-device-token) ).

The [Cloud.PushNotifications](#!/api/Modules.Cloud.PushNotifications-method-subscribe) API provides equivalent methods for using either of these approaches. For instance, you call the `subscribe()`method to subscribe the currently logged in API Builder Push user to a channel, or `subscribeToken()`to subscribe an application user with only the obtained token. Similarly, there are equivalent methods for unsubscribing from a channel `(unsubscribe()` and `unsubscribeToken()`) and sending notifications `(notify()`and `notifyToken()`).

::: warning ⚠️ Warning
It's recommended that you use either session- or token-based subscriptions in your application, but not both together.
:::

### Adding the Cloud module to your project

The Cloud module is included with the Titanium SDK, but is not enabled by default in new projects.

**To add the Cloud module to your project**:

1. Open your project's `tiapp.xml` file.

2. In the **Modules** section, click the Add button (green plus sign).

3. Select **ti.cloud** and click **OK** **.**

### Subscribing to Push Notifications with Device Tokens

To subscribe your application to receive push notifications using only a device the token, you call the `subscribeToken()`method. In the following sample code, the user is subscribed to the "news\_alerts" channel when tap the Subscribe button; tapping the Unsubscribe button calls the `unsubscribeToken()`method.

The following example is functionally identical to the [token-based version](#subscribing-to-push-notifications-with-user-sessions), except that it includes functionality to log the user into MBS.

```javascript
// You first need to get a device token (see previous section):
var deviceToken = null;

// Require the Cloud module
var Cloud = require("ti.cloud");
function subscribeToChannel () {
    // Subscribes the device to the 'news_alerts' channel
    // Specify the push type as either 'android' for Android or 'ios' for iOS
    Cloud.PushNotifications.subscribeToken({
        device_token: deviceToken,
        channel: 'news_alerts',
        type: Ti.Platform.name === 'android' ? 'android' : 'ios'
    }, function (e) {
        if (e.success) {
            alert('Subscribed');
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

function unsubscribeToChannel () {
    // Unsubscribes the device from the 'test' channel
    Cloud.PushNotifications.unsubscribeToken({
        device_token: deviceToken,
        channel: 'news_alerts',
    }, function (e) {
        if (e.success) {
            alert('Unsubscribed');
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

var win = Ti.UI.createWindow({
    backgroundColor: 'white',
    layout: 'vertical'
});

var subscribe = Ti.UI.createButton({ title: 'Subscribe' });
subscribe.addEventListener('click', subscribeToChannel);
win.add(subscribe);

var unsubscribe = Ti.UI.createButton({ title: 'Unsubscribe' });
unsubscribe.addEventListener('click', unsubscribeToChannel);
win.add(unsubscribe);

win.open();
```

### Subscribing to Push Notifications with User Sessions

You can subscribe to receive push notifications based the user's current MBS session. If you do not require push notifications to be sent to specific users, then consider using [token-based notifications](#subscribing-to-push-notifications-with-device-tokens) . You can create an MBS user in Appcelerator Dashboard or programmatically (as shown in the [example](#!/api/Modules.Cloud.Users) for [Modules.Cloud.Users](#!/api/Modules.Cloud.Users) ).

The following example is identical to the [token-based version](#subscribing-to-push-notifications-with-device-tokens), except that it includes functionality to log the user into API Builder.

```javascript
// For this example to work, you need to get the device token. See the previous section.
// You also need an ArrowDB user account.

// Require in the Cloud module
var Cloud = require("ti.cloud");

function loginUser(){
    // Log in to Arrow
    Cloud.Users.login({
        login: 'waldo',
        password: 'password'
    }, function (e) {
        if (e.success) {
            alert('Login successful');
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

function subscribeToChannel(){
    // Subscribe the user and device to the 'test' channel
    // Specify the push type as either 'android' for Android or 'ios' for iOS
    // Check if logged in:
    Cloud.PushNotifications.subscribe({
        channel: 'test',
        device_token: deviceToken,
        type: Ti.Platform.name === 'android' ? 'android' : 'ios'
    }, function (e) {
        if (e.success) {
            alert('Subscribed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

function unsubscribeToChannel ()
    // Unsubscribes the user and device from the 'test' channel
    Cloud.PushNotifications.unsubscribe({
        channel: 'test',
        device_token: deviceToken
    }, function (e) {
        if (e.success) {
            alert('Unsubscribed');
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

var win = Ti.UI.createWindow({
    backgroundColor: 'white',
    layout: 'vertical'
});

var subscribe = Ti.UI.createButton({ title: 'Subscribe' });
subscribe.addEventListener('click', subscribeToChannel);
win.add(subscribe);

var unsubscribe = Ti.UI.createButton({ title: 'Unsubscribe' });
unsubscribe.addEventListener('click', unsubscribeToChannel);
win.add(unsubscribe);

win.open();
loginUser();
```

### Updating Subscriptions with Device Location

AMPLIFY Appcelerator Services' users can send push notifications to devices located within a geographic area you specify (see [Sending and Scheduling Push Notifications](#undefined)). For a geo-based push to reach its intended recipients, the application must periodically update its location with API Builder by calling the `updateSubscription()`method.

To obtain the device's current location, you call the `getCurrentPosition()`or registering to listen for`location` events. Doing this frequently, however, can be a significant drain on the device's battery.

The [Ti.Geofence](#!/api/Modules.Geofence) module (**requires a Team or Enterprise subscription**) provides a more battery-efficient way to monitor a device's movement in to, or out of, virtual geographic perimeters, or _geofences_ .

When the device enters a defined geofence region, the application is notified and can obtain the device's current location and send it to API Builder. The following code demonstrates this approach.

```javascript
var Cloud = require('ti.cloud');
var Geofence = require('ti.geofence');

// Define a region to monitor:
var region1 = Geofence.createRegion({
    center: {
        latitude: 37.389601,
        longitude: -122.050169
    },
    radius: 500,
    identifier: 'Appcelerator'
});

// Start monitoring for region entrances/exits:
Geofence.startMonitoringForRegions(region1);

// Event listener invoked when device enters a region being monitored:
Geofence.addEventListener("enterregions", function(e) {
    // Get current location and update subscription with location:
    Titanium.Geolocation.getCurrentPosition(function(e) {
      if (e.error) {
        Ti.API.error('Error: ' + e.error);
      } else {
        var latitude = e.coords.latitude;
        var longitude = e.coords.longitude;
        Cloud.PushNotifications.updateSubscription({
          device_token : pushDeviceToken,
          loc : [longitude, latitude]
        }, function(e) {
          if (e.success) {
            alert('Subscription Updated.');
          } else {
            alert(e);
          }
        });
      }
    });
});
```

## Parsing a notification payload

The notification payload that is delivered to the device is modified slightly structure is a bit different between Android and iOS, as shown below.

The original JSON payload:

```
{
    "title": "Example",
    "alert": "Sample alert",
    "icon": "little_star",
    "badge": 3,
    "sound": "door_bell",
    "vibrate": true,
    "custom_field_1": "Appcelerator ArrowDB Rocks!",
    "custom_field_2": "Hi Push"
}
```

iOS payload:

```
{
    "aps": {
        "alert": "Sample alert",
        "badge": 3,
        "sound": "door_bell",
    },
    "title": "Example",
    "icon": "little_star",
    "vibrate": true,
    "custom_field_1": "Appcelerator ArrowDB Rocks!",
    "custom_field_2": "Hi Push"
}
```

Android parsed payload:

```
{
    "android": {
        "title": "Example",
        "alert": "Sample alert",
        "icon": "little_star",
        "badge": 3,
        "sound": "door_bell",
        "vibrate": true,
    },
    "custom_field_1": "Appcelerator ArrowDB Rocks!",
    "custom_field_2": "Hi Push"
}
```

For example, in the following example the `receivePush()` method was previously assigned to the notification callback handler. The following code parses the alert string from the notification payload, and assigns it to a variable named `alertString`.

```javascript
var ostype = Titanium.Platform.osname;
var alertString;
function receivePush(e) {
  if(ostype === "android"){
      alertString = JSON.parse(e.payload).android.alert;
  }
  if(ostype === "iphone" || ostype === "ipad"){
      alertString = e.data.aps.alert;
  }
}
```

Sample payload sent push notification in the multiline format on an Android device:

```
{
   "title": "myApp",
   "alert": "Here, I want to send the multiline push notification messages to the user for the \n details reports.",
   "style": {
      "bigContentTitle": "myApp",
      "bigText": "Here, I want to send the multiline push notification messages to the user for the \n details reports.",
      "summaryText": "Here, I want to send the multiline push notification messages"
   }
}
```

## More examples

For another demonstration of the PushNotification API, run the Cloud demo app and select **Push Notifications**. The code for the Cloud demo is located in the Cloud module at`<PATH_TO_TITANIUM_SDK>/modules/commonjs/ti.cloud/<VERSION>/example/`.

## Troubleshooting

### Unable to retrieve a device token (iOS)

### Error: APSCloudPush has not been enabled. Call APSCloud.enable(context, key) to enable. (Android)

If LiveView is enabed, disable it. There are some known conflict when using LiveView and push notification services ([TIMOB-19233](https://jira-archive.titaniumsdk.com/TIMOB-19233)).
