---
title: Push Notifications
weight: '40'
---

# Push Notifications

This document contains information on configuring, subscribing, sending, and scheduling push services.

## Configuring push services

To send push notifications, Appcelerator Mobile Backend Services relies on the Google Cloud Messaging (GCM) or Firebase Cloud Messaging for Android applications, and the Apple Push Notification (APN) service for iOS applications. [Firebase Cloud Messaging](http://firebase.google.com/docs/cloud-messaging/) (FCM) is the new version of GCM. To use these services in your Titanium application, you first need to enable either FCM or GCM or APN for your application, and then configure Mobile Backend Services with information about your push service. This guide walks you through the process of creating and configuring push services for your application. For more information, see [Configuring push services](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/Push_Notifications/Configuring_Push_Services/).

## Subscribing to push notifications

For a push notification to reach a user, the user (or device) must be subscribed to receive push notifications on one or more notification channels. The application must also obtain a device token, which permits Mobile Backend Services to communicate with the push service provider (Google Cloud Messaging, Firebase Cloud Messaging, or Apple Push Notification). This guide explains how to obtain a device token, and how to use the PushNotifications API to manage your user's notification subscriptions. For more information, see [Subscribing to push notifications](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/Push_Notifications/Subscribing_to_push_notifications/).

## Sending and scheduling push notifications

To send and schedule push notifications, you can use Appcelerator Dashboard. You can also directly call the [PushNotifications](/arrowdb/latest/#!/api/PushNotifications) APIs `notify`or `notify_token` methods to send notifications. For more information, see [Sending and Scheduling Push Notifications](#undefined).
