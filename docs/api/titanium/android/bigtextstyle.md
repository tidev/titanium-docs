# Titanium.Android.BigTextStyle

<TypeHeader/>

## Overview

If the platform does not provide large-format notifications, this style helper has no effect.
The user will always see the normal notification view.

This style object attaches to a <Titanium.Android.Notification> object and modifies its behavior.

## Examples

### Big text style Example

``` js
var bigTextStyle = Titanium.Android.createBigTextStyle({
    bigText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bigContentTitle: "Title for big text",
    summaryText: "Summary for big text"
});

// Create big text style notification
var notification = Titanium.Android.createNotification({
    contentTitle: 'Something Happened',
    contentText : 'Click to return to the application.',
    style: bigTextStyle,
    time: Date.now()
});

// Send the notification.
Titanium.Android.NotificationManager.notify(1, notification);
```


<ApiDocs/>
