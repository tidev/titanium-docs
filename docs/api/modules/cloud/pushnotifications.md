---
breadcrumbLabel: PushNotifications
sidebar: auto
---

# Modules.Cloud.PushNotifications

<ProxySummary/>

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
*   On Android, push notifications are received through the [Modules.CloudPush](Modules.CloudPush) module.
    Add a listener for the [callback](Modules.CloudPush.callback) event to receive push notifications.

To register for push notifications, you need to obtain an application-specific _device
token_. To obtain a device token:

*   On iOS, when you successfully register for push notifications, the device token is 
    passed to the `success` callback.
*   On Android, use
    [CloudPush.retrieveDeviceToken](Modules.CloudPush.retrieveDeviceToken) to request
    a device token. The device token is passed to the `success` callback.

<ApiDocs/>
