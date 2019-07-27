# Titanium.Android.Notification

<ProxySummary/>

## Overview

Notifications alert the user that something is happening to your application while it is
in the background. Notifications appear in the notification drawer until the user
clears them and on the lock screen for devices running Android 5.0 or greater.
Note that the user can filter or turn notifications on and off from **Settings**.

For Android toast notifications (pop-up notifications sent while the application is in the
foreground), see <Titanium.UI.Notification>.

To create a notification, use the <Titanium.Android.createNotification> method.

Pass the Notification object to the methods of the <Titanium.Android.NotificationManager> class
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

## Examples

### Simple Notification Example

The following example shows how to create a notification that launches the
application when the user clicks on the notification.

To have the notification launch an application when the user clicks on it,
assign the `contentIntent` property to an [Intent](Titanium.Android.Intent) object
that launches the main activity of the application by specifying the `packageName`
and `className` properties of the intent.

The `packageName` is the project's application ID. For Titanium applications, you
can find this in the `tiapp.xml` file.

The `className` is the name of the main activity, prefixed with the `packageName`.
For Titanium applications, the name of the main activity is the application name with
only the first character capitalized suffixed with `Activity`.  You can also find the name
of the main activity in the `build/android/AndroidManifest.xml` file after you build your
application.

For example, if the application ID is `com.appcelerator.notificationsample` and the
application name is `NotificationSample`, the class name will be:

    com.appcelerator.notificationsample.NotificationsampleActivity

The notification icon must be specified as an Android resource ID. In this case,
the icon, `my_icon.png` would be placed in `platforms/android/res/drawable/my_icon.png`.
See <Titanium.App.Android.R> for more information.

This example does not include a custom alert sound. For information on adding a
custom alert sound, see [Notification.sound](Titanium.Android.Notification.sound).

    // Intent object to launch the application
    var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_MAIN,
        // Substitute the correct class name for your application
        className: 'com.appcelerator.notificationsample.NotificationsampleActivity',
        // Substitue the correct package name for your application
        packageName: 'com.appcelerator.notificationsample'
    });
    intent.flags |= Ti.Android.FLAG_ACTIVITY_NEW_TASK;
    intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

    // Create a PendingIntent to tie together the Activity and Intent
    var pending = Titanium.Android.createPendingIntent({
        intent: intent,
        flags: Titanium.Android.FLAG_UPDATE_CURRENT
    });

    // Create the notification
    var notification = Titanium.Android.createNotification({
    	// icon is passed as an Android resource ID -- see Ti.App.Android.R.
        icon: Ti.App.Android.R.drawable.my_icon,
    	contentTitle: 'Something Happened',
    	contentText : 'Click to return to the application.',
    	contentIntent: pending
    });

    // Send the notification.
    Titanium.Android.NotificationManager.notify(1, notification);

### Bundled Notifications Example

The following example shows how to create bundled notifications.

    var id = 100,
        groupKey = 'group_key';

    for (var i = 3; i > 0; i--) {
        Ti.Android.NotificationManager.notify(id++,
            Ti.Android.createNotification({
                icon: Ti.Android.R.drawable.ic_dialog_info,
                contentTitle: 'NOTIFICATION #' + i,
                contentText : 'Lorem ipsum dolor sit amet, facer eruditi omittantur cu pri, nibh nonumy putant eam eu.'
                groupKey: groupKey
            })
        );
    }
    Ti.Android.NotificationManager.notify(id++,
        Ti.Android.createNotification({
            icon: Ti.Android.R.drawable.ic_dialog_info,
            contentTitle: 'NOTIFICATIONS',
            contentText : 'You have 3 notifications.',
            groupKey: groupKey,
            groupSummary: true
        })
    );

<ApiDocs/>
