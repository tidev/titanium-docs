---
breadcrumbLabel: Notification
sidebar: auto
---

# Titanium.Android.Notification

<ProxySummary/>

## Overview

Notifications alert the user that something is happening to your application while it is
in the background. Notifications appear in the notification drawer until the user
clears them and on the lock screen for devices running Android 5.0 or greater.
Note that the user can filter or turn notifications on and off from **Settings**.

For Android toast notifications (pop-up notifications sent while the application is in the
foreground), see [Titanium.UI.Notification](Titanium.UI.Notification).

To create a notification, use the [createNotification](Titanium.Android.createNotification) method.

Pass the Notification object to the methods of the [Titanium.Android.NotificationManager](Titanium.Android.NotificationManager) class
to send or cancel notifications.

For examples of using Notifications, see [Android Notifications](#!/guide/Android_Notifications).

Further Reading:

  * [Android Developers: Notifications](https://developer.android.com/design/patterns/notifications.html)

### Android 5.0 Changes

Starting with Android 5.0 (API 21), ticker text, defined with the `tickerText` property,
no longer appears in the status bar when the notification is first sent but is used as an
audible notification if accessibility services are enabled.

Notifications now appear in the lock screen.  The user can customize the visibility level of
these notifications from **Settings**.  The visibility level is based on the `visibility`
property set on the notification.

<ApiDocs/>
