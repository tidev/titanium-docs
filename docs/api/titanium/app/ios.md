---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/App/iOS/iOS.yml
---
# Titanium.App.iOS

<TypeHeader/>

## Overview

### Local Notifications

Local notifications are a way for an application that is not running in the foreground to let
users know that it has information for them. When invoked, the application either displays a
banner message or an alert dialog with a **Close** button to dismiss and an **Open** button to bring the application
into the foreground. The application can also modify the icon badge, to show the
number of pending notifications, and generate a sound.

To send a local notification, the application needs to:

  1. Enroll the application to send local notifications with the
     <Titanium.App.iOS.registerUserNotificationSettings> method.
  2. Schedule a local notification with the <Titanium.App.iOS.scheduleLocalNotification> method.
  3. Monitor the [notification](Titanium.App.iOS.notification) event to respond to the
     notification.

For instructions on sending local interactive notifications, see the
[iOS Local Notifications guide](https://docs.appcelerator.com/platform/latest/#!/guide/iOS_Local_Notifications).

### Local Interactive Notifications

You can create interactive notifications, where users can respond to application notifications
without launching the application to the foreground. The user needs to reveal notification
actions in the notification, then press a notification action to respond to the notification.

To create an interactive notification, the application needs to:

  1. Create and configure notification actions with the
     <Titanium.App.iOS.createUserNotificationAction> method.
  2. Create notification categories and assign notification actions to them
     with the <Titanium.App.iOS.createUserNotificationCategory> method.
  3. Register the notification categories with the
     <Titanium.App.iOS.registerUserNotificationSettings> method.
  4. Monitor the [localnotificationaction](Titanium.App.iOS.localnotificationaction) event.

For instructions on sending local interactive notifications, see the
[iOS Local Notifications guide](https://docs.appcelerator.com/platform/latest/#!/guide/iOS_Local_Notifications).

### Background Downloads

In iOS 7, Apple introduced new background execution modes which allow the application to download
content in the background. These background modes are supported in Titanium SDK 3.2.0 and later.

For more information on getting started, refer to the
[iOS Background Services guide](https://docs.appcelerator.com/platform/latest/#!/guide/iOS_Background_Services).

### Handoff User Activities

Handoff allows you to create and transfer user activies from one device to another. For example, you can start editing
a document on your phone, then transfer the activity to your iPad to continue editing the document.

To make an activity shareable, use the <Titanium.App.iOS.UserActivity> API to create the activity.
To continue the activity on another device, listen for the
[continueactivity](Titanium.App.iOS.continueactivity) event.

### Index Application Content

In iOS 9 and later, Apple lets you index application content, such as music, videos, images and documents, to allow it
to be searched in iOS Spotlight. To effectively add and remove information from the iOS search index
you will need to use the following APIs:

* <Titanium.App.iOS.SearchableItemAttributeSet> - Used to create metadata related to the `Ti.App.iOS.SearchableItem`
* <Titanium.App.iOS.SearchableItem> - Used to assemble metadata into a unique object package to be used by `Ti.App.iOS.SearchableIndex`
* <Titanium.App.iOS.SearchableIndex> - Used to add and remove `Ti.App.iOS.SearchableItem` objects to the device search index

<ApiDocs/>
