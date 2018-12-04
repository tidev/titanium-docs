# Modules.CloudPush

<ProxySummary/>

## Overview

The CloudPush module supports Android push notifications for a device by providing a connection
to the push notification server to the device to receive push notifications and to optionally
present a tray notification to the user when a new push notification is received.

This module is only used to receive push notifications.  For information on configuring your
project to send push notifications, see <Modules.Cloud.PushNotifications>.

### Push Protocols

As of Release 3.2.0, the CloudPush module only supports Google Cloud Messaging (GCM) for push
notifications. MQTT support is deprecated and support was removed in Release 3.2.0. Upgrade your
application to use the GCM protocol.

GCM supports devices that run Android 2.2 and later, and requires that the Google Play Store
application be installed. For pre-4.0 devices, the user is required to set up their Google
account.

### Getting Started

To use the CloudPush module in your JavaScript code, you need to require it in and
get a device token with the `retrieveDeviceToken` method to enable push notifications with Arrow Push.
In your project's `tiapp.xml`, you need to add some keys to configure push notifications.

Note that this module is not included in the Titanium namespace, but it is bundled with the Titanium SDK as of
version 2.0.0. To use it, you must require it, like this:

    var CloudPush = require('ti.cloudpush');

Then, call the `retrieveDeviceToken` method to get a unique token specific to that device and
Arrow DB application.  This token is used with [Arrow PushNotifications calls](Modules.Cloud.PushNotifications)
to subscribe and unsubscribe the device to push notification channels.

Once the device is subscribed to at least one push channel, listen to the module's `callback`,
`trayClickLaunchedApp`, and `trayClickFocusedApp` events to monitor for incoming push notifications.

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

### Virtual Private Cloud Configuration

If you are using a virtual private cloud (VPC), you need to configure your Arrow Push dispatcher
URL in order to send push notifications with GCM.  In the `tiapp.xml` file, add the `acs-push-api-url`
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

This example lets the application retrieve the device token and listens for several events
to monitor incoming push notifications.

    var CloudPush = require('ti.cloudpush');
    CloudPush.retrieveDeviceToken({
        success: function deviceTokenSuccess(e) {
            // Use this device token with Ti.Cloud.PushNotifications calls
            // to subscribe and unsubscribe to push notification channels
            Ti.API.info('Device Token: ' + e.deviceToken);
        },
        error: function deviceTokenError(e) {
            alert('Failed to register for push! ' + e.error);
        }
    });
    // These events monitor incoming push notifications
    CloudPush.addEventListener('callback', function (evt) {
        alert(evt.payload);
    });
    CloudPush.addEventListener('trayClickLaunchedApp', function (evt) {
        Ti.API.info('Tray Click Launched App (app was not running)');
    });
    CloudPush.addEventListener('trayClickFocusedApp', function (evt) {
        Ti.API.info('Tray Click Focused App (app was already running)');
    });

<ApiDocs/>
