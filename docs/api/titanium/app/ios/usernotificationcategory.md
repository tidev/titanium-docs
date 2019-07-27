# Titanium.App.iOS.UserNotificationCategory

<TypeHeader/>

## Overview

To create a notification category, use the <Titanium.App.iOS.createUserNotificationCategory> method.

A notification category represents a collection of <Titanium.App.iOS.UserNotificationAction>
to associate with a specific notification.  The notification category allows the application to
customize the notification options based on which notification style is used.  For alert dialogs,
only four notification actions can be displayed, while all other notifications can only display two
actions.

To use a local interactive notification, you need to register the notification category using
the <Titanium.App.iOS.registerUserNotificationSettings> method and send a notification using the
<Titanium.App.iOS.scheduleLocalNotification> and pass the category identifier to the `category`
property.

<ApiDocs/>
