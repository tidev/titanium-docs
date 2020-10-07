# Modules.CloudPush

<TypeHeader/>

## Overview

The CloudPush module supports Android push notifications for a device by providing a connection
to the push notification server to the device to receive push notifications and to optionally
present a tray notification to the user when a new push notification is received.

This module is only used to receive push notifications.  For information on configuring your
project to send push notifications, see <Modules.Cloud.PushNotifications>.

### Push Protocols

The CloudPush module only supports [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) (FCM) for push
notifications.

### Project Configuration

This module must also be added to the modules section in your tiapp.xml. This can be done using the Modules list in
the Titanium Studio TiApp Editor, or by editing the XML directly and adding the following line to the modules
element:

    <module platform="android">ti.cloudpush</module>

Your app must prove that it is allowed to talk to Arrow. This keeps your data secure by preventing anyone from
making requests to Arrow that impersonate your app.

Titanium Studio creates a pair of keys (Development and Production) for each Titanium application depending on the
user preference specified during new project creation. This pair of keys will be stored in `tiapp.xml` and one of the
keys will be used during application build depending on the build type (development or production).

To use push notifications, in the `tiapp.xml` file, you need to specify the Arrow Push keys and push
type. The supported properties in `tiapp.xml` are:

    <!-- Property keys for Arrow Push (required) -->
    <property name="acs-api-key-development" type="string">YOUR DEVELOPMENT API KEY HERE</property>
    <property name="acs-api-key-production" type="string">YOUR PRODUCTION API KEY HERE</property>
    <property name="acs-api-key" type="string">YOUR API KEY HERE</property>

If a deployment-specific setting is provided (production or development) then that value will be used for the current deployment environment.

*WARNING*: The default properties of this module are used until you set a property for the first time. Because the
properties are persisted to the device settings (via <Titanium.App.Properties>), the most recent value you set will
always be used.

### Google Services JSON

As of Titanium 9.1.0 (using `ti.cloudpush` module version 7.1.0), you must download a `google-services.json` file
from Google's [Firebase Console](https://console.firebase.google.com/) website and add it your Titanium project.
This file provides the keys needed to retrieve a device token for push notifications.

For Alloy projects, download the file to folder...

    ./app/platform/android

For Classic projects, download the file to folder...

    ./platform/android

### Virtual Private Cloud Configuration

If you are using a virtual private cloud (VPC), you need to configure your Arrow Push dispatcher
URL in order to send push notifications with FCM.  In the `tiapp.xml` file, add the `acs-push-api-url`
application property and set the node text to the push dispatcher URL provided to you.  The URL may
be the same as your custom ArrowDB endpoint and have deployment-specific settings, that is, two
URLs--one for production and another for the development environment.

    <ti:app>
        <property name="acs-push-api-url-production">https://api-prod.fooinc.com</property>
        <property name="acs-push-api-url-development">https://api-dev.fooinc.com</property>
    </ti:app>

### Grouped Notifications

If the device receives multiple push notifications from the application, Android can group these
notifications together as one notification.

To use grouped notifications, add a grouped notification template to either the `tiapp.xml` file
or the `i18n` folder for internationalized versions:

`tiapp.xml`:

    <property name="acs-grouped-notification-message-development" type="string">You have $number$ unread messages.</property>
    <property name="acs-grouped-notification-message-production" type="string">You have $number$ unread messages.</property>
    -or-
    <property name="acs-grouped-notification-message" type="string">You have $number$ unread messages.</property>

`i18n/es/strings.xml` (example for Spanish):

    <?xml version="1.0" encoding="utf-8"?>
    <resources>
       <string name="acs_grouped_notification_message">Tienes $number$ mensajes no leidos.</string>
    </resources>

The `$number$` variable indicates the number of unread messages.

## Examples

### Listening for Push Notifications

```js
const CloudPush = require('ti.cloudpush');

// Show notifications in status bar while app is backgrounded.
CloudPush.showTrayNotification = true;

// Show notifications in status bar while app is in the foreground.
CloudPush.showTrayNotificationsWhenFocused = true;

// Fetches app's push notification token and registers it with the cloud if changed.
function registerForPushNotifications() {
    CloudPush.retrieveDeviceToken({
        success: function (e) {
            // We've successfully obtained a token.
            Ti.API.info('Device Token: ' + e.deviceToken);

            // You should call "ti.cloud" module's PushNotifications subscribe() method next,
            // but only after successfully logging in to the cloud.
        },
        error: function (e) {
            // We've failed to acquire a token.
            Ti.API.error('Failed to register for CloudPush. Reason: ' + e.error);
        }
    });
}

// Always fetch token from system on app startup in case it changed since last startup.
registerForPushNotifications();

// Called for every push notification received by the app.
CloudPush.addEventListener('callback', function (e) {
    alert(e.payload);
});

// Called when last token has expired and has become invalid.
// We must obtain a new token in order for this app to keep receiving push notifications.
CloudPush.addEventListener('deviceTokenExpired', function (e) {
    Ti.API.info('Previous CloudPush token has expired. Acquiring a new token.');
    registerForPushNotifications();
});

// Called when cold-starting app by tapping notification in status bar.
CloudPush.addEventListener('trayClickLaunchedApp', function (e) {
    Ti.API.info('Tray Click Launched App (app was not running)');
});

// Called when resuming app from background by tapping notification in status bar.
CloudPush.addEventListener('trayClickFocusedApp', function (e) {
    Ti.API.info('Tray Click Focused App (app was already running)');
});
```

<ApiDocs/>
