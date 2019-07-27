# Titanium.Android.BigPictureStyle

<TypeHeader/>

## Overview

If the platform does not provide large-format notifications, this style helper has no effect.
The user will always see the normal notification view.

This style object attaches to a <Titanium.UI.Notification> object and modifies its behavior.

## Examples

### Big picture style Example

This example will be use image that placed in one of the density-specific folder
under `Resources/android/images`

    var bigPictureStyle = Titanium.Android.createBigPictureStyle({
        bigPicture: "/images/bigPicture.png",
        bigContentTitle: "Title for big picture",
        summaryText: "Summary for big picture"
    });

Create big image style notification

    var notification = Titanium.Android.createNotification({
        contentTitle: 'Something Happened',
        contentText : 'Click to return to the application.',
        style: bigPictureStyle,
        time: Date.now()
    });

Send the notification.

    Titanium.Android.NotificationManager.notify(1, notification);

<ApiDocs/>
