---
title: Subscribing to push notifications
weight: '20'
---

# Subscribing to push notifications

For a push notification to reach a user, the user (or device) must be subscribed to receive push notifications on one or more notification _channels_. The application must also obtain a _device token_, which permits Mobile Backend Services (MBS) to communicate with the push service provider (Google Cloud Messaging (GCM), Firebase Cloud Messaging (FCM), or Apple Push Notification). [Firebase Cloud Messaging](http://firebase.google.com/docs/cloud-messaging/) (FCM) is the new version of GCM. This guide explains how to how obtain a device token, and how to use the [PushNotifications API](#!/api/Modules.Cloud.PushNotifications) to manage your user's notification subscriptions.

## Obtaining a device token

To receive push notifications, your application first needs to obtain a _device token_. To obtain a device token:

* On iOS, call the`Titanium.Network.registerForPushNotifications()`

Once your application has obtained a device token it should save it for later use.

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

## Using Firebase

You can use Firebase (Firebase Cloud Messaging) for push notifications. The module is available at https://github.com/hansemannn/titanium-firebase-cloud-messaging and you can find a full tutorial at [from zero to app](https://fromzerotoapp.com/ah-push-it-use-firebase-push-in-your-app/)
