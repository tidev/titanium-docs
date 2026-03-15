---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Android/NotificationChannel.yml
---
# Titanium.Android.NotificationChannel

<TypeHeader/>

## Overview

You can create a notification channel for each distinct type of notification you need to send.

To create a notification channel, use the <Titanium.Android.createNotificationChannel> method.

Further Reading:

  * [Android Developers: Notification Channel](https://developer.android.com/reference/android/app/NotificationChannel.html)

## Examples

### Notification Channel Example

The following example shows how to create a notification with a channel.

``` js
var channel = Ti.Android.NotificationManager.createNotificationChannel({
        id: 'my_channel',
        name: 'TEST CHANNEL',
        importance: Ti.Android.IMPORTANCE_DEFAULT
    }),
    notification = Ti.Android.createNotification({
        icon: Ti.Android.R.drawable.ic_dialog_info,
        contentTitle: 'TITLE',
        contentText : 'This is a test',
        channelId: channel.id
    });

Ti.Android.NotificationManager.notify(100, notification);
```

<ApiDocs/>
