---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/PushNotifications/PushNotifications.yml
---
# Modules.Cloud.PushNotifications

<TypeHeader/>

## Overview

For information on configuring and setting up push notifications,
see the [Push Notifications guide](https://docs.appcelerator.com/platform/latest/#!/guide/Push_Notifications).

The methods in this module are used to subscribe and unsubscribe from Arrow push notification
channels, and to generate Arrow push notifications. Push notifications are received using
platform-specific mechanisms:

*   On iOS, push notifications are received through the standard iOS push notification
    mechanism. When you register for push notifications, incoming push notifications
    are passed to the `callback` callback. See
    [Network.registerForPushNotifications](Titanium.Network.registerForPushNotifications)
    for details.
*   On Android, push notifications are received through the <Modules.CloudPush> module.
    Add a listener for the [callback](Modules.CloudPush.callback) event to receive push notifications.

To register for push notifications, you need to obtain an application-specific _device
token_. To obtain a device token:

*   On iOS, when you successfully register for push notifications, the device token is 
    passed to the `success` callback.
*   On Android, use
    [CloudPush.retrieveDeviceToken](Modules.CloudPush.retrieveDeviceToken) to request
    a device token. The device token is passed to the `success` callback.

## Examples

### Subscribe to Channel

This example subscribes to a push notification channel and checks the response.

    Cloud.PushNotifications.subscribe({
        channel: 'friend_request',
        device_token: myPushDeviceToken
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Unsubscribe to Channel

This example unsubscribes from a push notification channel and checks the response.

    Cloud.PushNotifications.unsubscribe({
        channel: 'friend_request',
        device_token: myPushDeviceToken
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Notify Channel

This example sends a push notification to a channel and checks the response.

    Cloud.PushNotifications.notify({
        channel: 'friend_request',
        payload: 'Welcome to push notifications'
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update Subscription

This example updates the user's notification subscription with the device's current
location, upon successfully obtaining the device's current position.

    var latitude, longitude, 
    var pushDeviceToken; // Device token obtained earlier...

    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            Ti.API.error('Error: ' + e.error);
        } else {
            latitude = e.coords.latitude;
            longitude = e.coords.longitude;
            Cloud.PushNotifications.updateSubscription({
                device_token: pushDeviceToken,
                loc: [longitude, latitude]
            }, function (e) {
                if (e.success) {
                    alert('Subscription Updated.');
                }
                else {
                    alert(e);
                }
            });                        
        }
    });

<ApiDocs/>
