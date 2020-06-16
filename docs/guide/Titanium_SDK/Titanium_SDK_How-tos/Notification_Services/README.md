---
title: Notification Services
weight: '130'
---

# Notification Services

Local notifications and push notifications allow the application to send information to the user while the application is in the background. The information could be a message, an impending calendar event, or new data on a remote server.

## Chapters

**[Android Notifications](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/Android_Notifications/)**

On Android, the application requires a Service to send and respond to local notifications in the Notification Center.

**[iOS Local Notifications](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/iOS_Local_Notifications/)**

On iOS, simply call the `Titanium.App.iOS.scheduleLocalNotification` method to have the application schedule a notification.

**[iOS Interactive Notifications](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/iOS_Interactive_Notifications/)**

Starting with iOS 8, the application can create an interactive notification, where users are presented options to choose from in the notification. The user can respond to the application in the notification without opening the application.

**[Push Notifications](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/Push_Notifications/)**

Push notifications allow you to send a notification from a server to all devices that have your application installed on them, which are subscribed to receive push notifications. The device requires a connection to the internet to receive a push notification.
