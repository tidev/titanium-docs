---
editUrl: https://github.com/appcelerator-modules/cloudpush/edit/master/apidoc/Cloudpush.yml
---
# Modules.CloudPush

<TypeHeader/>

## Overview

Push notifications for Android via Appcelerator Cloud Services. When push is enabled, this module persistently connects
to the ACS servers using a long lived and very light TCP socket. Using this, push notifications can be sent to your
users.

Icons that are to be referenced by push notifications sent to the application should be placed in the
`platform/android/res/drawable` folder of the application. Icon file names are specified in the notification message
without their file extension (e.g. `'logo'`).

Sound files that are to be played by push notifications sent to the application should be placed in the
`Resources/android/sound` folder of the application. Sound file names are specified in the notification message
with their file extension (e.g. `'mysound.mp3'`).

The default property values listed below are used until you set a property for the first time. Because the properties are
persisted to the device settings (just like [Ti.App.Properties](Titanium.App.Properties)), the most recent value you set will always be used.

## TiApp.xml
The constants this module uses can be overridden in your `tiapp.xml`, as follows:

### acs-push-api-url, acs-push-api-url-production, acs-push-api-url-development
Specifies which ACS api url is used.

### acs-gcm-sender-id, acs-gcm-sender-id-production, acs-gcm-sender-id-development
Specifies the required GCM sender id. If you visit https://code.google.com/apis/console, and create an app (or use an existing one), the
sender ID will be in your URL following "#project:". For example, it may look like `"801234118521"`.

### acs-grouped-notification-message, acs-grouped-notification-message-production, acs-grouped-notification-message-development
Specifies grouped message when there are more than one unread messages in Android notification tray. Use "$number$" to represent number of unread message.
For example, if setting `acs-grouped-notification-message` to `"You have $number$ unread messages."`, you will get "You have 3 unread messages." if there are 3 unread message.
This value also can be set by acs_grouped_notification_message under `i18n/specific_locale/string.xml`, to have an internationalization support.

For more information, please look at the Appcelerator Cloud Services documentation on [http://www.appcelerator.com/](http://www.appcelerator.com/).

## Examples

### callback listener

``` js
CloudPush.addEventListener('callback', function (evt) {
    Ti.API.info('Received push! ' + evt.payload);
    Ti.API.info('JSON: ' + JSON.parse(evt.payload));
    alert(evt.payload);
});
```

<ApiDocs/>
