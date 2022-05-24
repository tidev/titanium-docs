---
title: iOS Background Services
weight: '60'
---

# iOS Background Services

## Introduction

In iOS 7, Apple introduced new background execution modes which allow the application to download content in the background. These background modes are supported in Titanium SDK 3.2.0 and later, which are exposed as the following APIs:

* **URL session module**: a wrapper for the NSURLSession class that allows the application to download large content in the background. This module provides the main functionality for the background execution modes, such as creating the background download task and monitoring the download once it starts.

* **Background fetch event**: use to monitor signals from iOS to update the application while in the background.

* **Silent push event**: use to monitor a push notification to tell the application there is content to download.

With the Titanium platform, the background fetch and silent push events **cannot** be tested on the iOS simulator. These events can only be triggered on device.

## URL session module

The [URL session module (`com.appcelerator.urlSession`)](#!/api/Modules.URLSession) provides a significant portion of the functionality to support background download tasks. It allows applications to download content via HTTP. With this module, you can

1. Create a URL session and a background download task.

2. Monitor events to check the progress of the download and session.

3. Cancel downloads and invalidate sessions.

Before using this module, you need to add it to your project. This module is part of the Titanium SDK since Release 3.2.0 and does not need to be downloaded to obtain it. To add this module to your project:


**Using a text editor**

Open the `tiapp.xml` file and add the following under the `modules` element:

**tiapp.xml**

```xml
...
    <modules>
        <module platform="iphone">com.appcelerator.urlSession</module>
    </modules>
...
```

Initiate the module with the `require('com.appcelerator.urlSession')` method and make subsequent API calls with the new object:

```javascript
// Require in the module
var urlSession = require('com.appcelerator.urlSession');
var sessionConfig = urlSession.createSessionConfiguration({
    identifier: 'com.appcelerator.sessionx'
});
```

### Creating a URL session and background download task

A URL session object is used to manage your download tasks.

Before creating a URL session object, you need to create a session configuration using the `createURLSessionBackgroundConfiguration` method. Pass this method an arbitrary string, which is used to identify the session when monitoring events.

To create a URL session object, pass the session configuration object to the `createURLSession` method.

To create a background download task, pass the session object and the URL to download the asset to the `backgroundDownloadTaskWithURL` method. Once you have created the task, the download starts.

```javascript
// Require in the module
var urlSession = require('com.appcelerator.urlSession');

// Create a session configuration
// The string parameter is an arbitrary string used to identify the session in events
var sessionConfig = urlSession.createSessionConfiguration({
    identifier: 'com.appcelerator.sessionx'
});

// Create a URL session object based on the
var session = urlSession.createSession({
    configuration: sessionConfig
});

var task = session.downloadTask({
    url: 'http://download.foo.com/myimage.png'
});
```

### Monitoring the download task and URL session

Once your download starts, you can monitor its progress with the following events:

* `backgroundtransfer`: fired when URL session events are waiting to be processed. Use the `handlerId` and `sessionId` properties to track the task and session that needs to be managed.

* `downloadprogress`: fired periodically to show the progress of the download. Use the `totalBytesWritten` and `totalBytesExpectedToWrite` properties to track its progress.

* `downloadcompleted`: fired when the download completes. The save data is stored in the `data` property.

* `sessioncompleted`: fired when the all session tasks complete.

* `sessioneventscompleted`: fired when all session messages are delivered.

These events are monitored as application-level events by using the `addEventListener` method with the `Ti.App.iOS` namespace.

```javascript
// Monitor this event to receive updates on the progress of the download
Ti.App.iOS.addEventListener('downloadprogress', function(e) {
    // Update the progress indicator
    progress.value = (e.totalBytesWritten / e.totalBytesExpectedToWrite);
});

// Monitor this event to know when the download completes
Ti.App.iOS.addEventListener('downloadcompleted', function(e) {
    // Save downloaded asset
    var file = Ti.Filesystem.getFile('/default.png');
    file.write(e.data);
});

// Monitor this event to know when all session tasks have completed
Ti.App.iOS.addEventListener('sessioncompleted', function(e) {
    if (e.success) {
        alert('Downloads completed successfully.');
    }
});
```

### Invalidating the URL session

Once you are done with the URL session or want to abort it, invalidate the session by passing the URL session object to either of the following methods:

* `finishTasksAndInvalidate`: invalidates the session but allows the tasks to finish.

* `invalidateAndCancel`: invalidates the session but cancels any running tasks.

If you do not invalidate your URL session after it has completed, your application may leak memory.

### Example

In the following example, the user initiates a download by pressing a button. The user can either wait for the download to finish in the foreground or send the application to the background. A banner message will alert the user that the download has finished if the application is in the background. After the download is done, the application displays the downloaded image.

```javascript
// Require in the urlSession module
var urlSession = require('com.appcelerator.urlSession');

// Create a session configuration
// The string parameter is an arbitrary string used to identify the session in events
var sessionConfig = urlSession.createSessionConfiguration({
    identifier: 'com.appcelerator.test'
});

// Create a session
var session = urlSession.createSession({
    configuration: sessionConfig
});

// App UI
var win = Ti.UI.createWindow({
    backgroundColor: 'white'
});

var progress = Ti.UI.createProgressBar({
    width: 200,
    height: 50,
    min: 0,
    max: 1,
    value: 0,
    style: Ti.UI.iOS.ProgressBarStyle.PLAIN,
    top: 10,
    message: 'Downloading Image',
    font: { fontSize: 12, fontWeight: 'bold'},
    color: '#888'
});
win.add(progress);
var imageView = Ti.UI.createImageView({
    top: 150,
    height: 300,
    width: 200
});
win.add(imageView);

var button = Ti.UI.createButton({
    title: 'Download Image (url)',
    height: 40,
    width: 200,
    top: 70
});

button.addEventListener('click', function() {
    // Create a background download task to get the asset with the URL
    session.downloadTask({
        url: 'https://raw.github.com/appcelerator-developer-relations/KitchenSink/master/Resources/images/dog@2x~iphone.jpg'
    });

    progress.show();
});

win.add(button);
win.open();

// Monitor this event to receive updates on the progress of the download
Ti.App.iOS.addEventListener('downloadprogress', function(e) {
    // Update the progress indicator
    progress.value = (e.totalBytesWritten / e.totalBytesExpectedToWrite);
});

// Monitor this event to know when the download completes
Ti.App.iOS.addEventListener('downloadcompleted', function(e) {
    Ti.API.info('Download completed: ' + JSON.stringify(e));

    // Update the image
    imageView.image = e.data;

    // Invalidate the session and cancel current session tasks
    session.invalidateAndCancel();

    // Notify the user the download is complete if the application is in the background
    Ti.App.iOS.scheduleLocalNotification({
        alertBody: 'Download completed!',
        date: new Date().getTime()
    });
    progress.hide();
});

// Monitor this event to know when all session tasks have completed
Ti.App.iOS.addEventListener('sessioncompleted', function(e) {
    Ti.API.info('sessioncompleted: ' + JSON.stringify(e));
    if (e.success) {
        alert('Downloads completed successfully.');
    }
});
```

## Background fetch

If the application is in the background and the background fetch permission is enabled, iOS will periodically signal the application when it can download data in the background. Note that these notifications are at the discretion of iOS. iOS studies how the user interacts with your application and considers the current state of the device, such as the battery charage, to determine the best time to trigger background updates.

You need to modify your application to:

1. Have permission to listen for fetch notification in the background

2. Set the fetch interval and monitor the `backgroundfetch` event to initiate the download

### Setting application permissions

To use the background fetch functionality, modify your `tiapp.xml` file to add the `UIBackgroundMode` `s` `fetch` key in the plist section:

**tiapp.xml**

```xml
...
<ios>
    <plist>
        <dict>
            ...
            <key>UIBackgroundModes</key>
            <array>
                <string>fetch</string>
            </array>
        </dict>
    </plist>
</ios>
...
```

### Monitoring the background fetch notification

Use the [Ti.App.iOS.setMinimumBackgroundFetchInterval](#!/api/Titanium.App.iOS-method-setMinimumBackgroundFetchInterval) method when the application first starts to set the minimum interval between fetch operations. This value does not indicate the exact amount of time expected between fetch operations. iOS determines, based on device's status and how the user interacts with your application, when an appropriate time is to initiate the download. You can set the value to either:

* `Ti.App.iOS.BACKGROUNDFETCHINTERVAL_MIN`: smallest interval supported by the system.

* `Ti.App.iOS.BACKGROUNDFETCHINTERVAL_NEVER`: largest interval to prevent fetch operations.

Use the iOS application-level `backgroundfetch` event to monitor when the application receives a notification from iOS that it can initiate a background download. This notification can be received while the application is in the background. Once this event is triggered, you can initiate a download, then call the `Ti.App.iOS.endBackgroundHandler` method to put the application back to sleep. Pass the backgroundfetch event's `handlerId` property to the `endBackgroundHandler` method.

If your application is awake for more than 30 seconds, iOS suspends your application. If your application breaks this condition often, iOS may mark your application as resource intensive and be given fewer opportunities to download data in the background.

```
// Monitor this event for a signal from iOS to fetch data
Ti.App.iOS.addEventListener('backgroundfetch', function(e) {
    // Initiate a download operation
    // Put the application back to sleep
    Ti.App.iOS.endBackgroundHandler(e.handlerId);
});
```

### Example

In the following example, when the application enters the background and the device is left alone, iOS will eventually signal the application that it is OK to perform a background fetch. This signal is not reliably reproducible and occurs randomly at the discretion of iOS. Banner messages will be displayed when the download starts and finishes. When the application is back in the foreground and the download is complete, the image will be replaced with the downloaded image.

```javascript
// Require in the urlSession module
var urlSession = require('com.appcelerator.urlSession');

// Initiate the download
var sessionConfig = urlSession.createSessionConfiguration({
    identifier: 'com.appcelerator.backgroundfetch'
});
var session = urlSession.createSession({
    configuration: sessionConfig
});

// Set the fetch interval level
Ti.App.iOS.setMinimumBackgroundFetchInterval(Ti.App.iOS.BACKGROUNDFETCHINTERVAL_MIN);

// App UI
var win = Ti.UI.createWindow({
    backgroundColor: 'white'
});

var progress = Ti.UI.createProgressBar({
    width: 200,
    height: 50,
    min: 0,
    max: 1,
    value: 0,
    style: Ti.UI.iOS.ProgressBarStyle.PLAIN,
    top: 10,
    message: 'Downloading image',
    font: { fontSize: 12, fontWeight: 'bold'},
    color: '#888'
});
win.add(progress);
var imageView = Ti.UI.createImageView({
    top: 100,
    height: 350,
    width: 250,
    image: 'https://raw.github.com/appcelerator-developer-relations/KitchenSink/master/Resources/images/fence@2x.jpg'
});
win.add(imageView);
// Monitor this event for a signal from iOS to fetch data
Ti.App.iOS.addEventListener('backgroundfetch', function(e) {
    Ti.API.info('backgroundfetch: ' + JSON.stringify(e));

    session.downloadTask({
        url: 'https://raw.github.com/appcelerator-developer-relations/KitchenSink/master/Resources/images/dog@2x~iphone.jpg'
    });

    // Display a banner message when the download starts
    Ti.App.iOS.scheduleLocalNotification({
        alertBody: 'Background download initiated ...',
        date: new Date().getTime()
    });
    progress.show();

    // Put the application back to sleep
    Ti.App.iOS.endBackgroundHandler(e.handlerId);
});

// Monitor this event to receive updates on the progress of the download
Ti.App.iOS.addEventListener('downloadprogress', function(e) {
    // Update the progress indicator
    progress.value = (e.totalBytesWritten / e.totalBytesExpectedToWrite);
});

// Monitor this event to know when the download completes
Ti.App.iOS.addEventListener('downloadcompleted', function(e) {
    Ti.API.info('Download completed: ' + JSON.stringify(e));

    // Update the image
    imageView.image = e.data;

    // Invalidates the session and cancel any current session tasks
    session.invalidateAndCancel();

    // Display a banner message when the download finishes
    Ti.App.iOS.scheduleLocalNotification({
        alertBody: 'Download completed!',
        date: new Date().getTime()
    });
    progress.hide();
});

// Monitor this event to know when all session tasks have completed
Ti.App.iOS.addEventListener('sessioncompleted', function(e) {
    Ti.API.info('sessioncompleted: ' + JSON.stringify(e));
    if (e.success) {
        alert('Downloads completed successfully.');
    }
});

win.open();
```

## Silent push

In order to use the `silentpush` event to monitor silent remote push notifications, you need to setup your project to use push notifications as described in the [Push Notifications](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/Push_Notifications/) guide.

After you have push notifications setup, you need to modify your application to:

1. Have permission to listen for remote notifications in the background

2. Monitor the `silentpush` event to initiate the download

3. Subscribe the device to push notifications

Once your application is prepared, you can test it by sending a push notification to it.

### Setting application permissions

To use the silent push functionality, modify your `tiapp.xml` file to add the `UIBackgroundMode` `s` `remote-notification` key in plist section:

**tiapp.xml**

```xml
...
<ios>
    <plist>
        <dict>
            ...
            <key>UIBackgroundModes</key>
            <array>
                <string>remote-notification</string>
            </array>
        </dict>
    </plist>
</ios>
...
```

### Monitoring silent push notifications

Use the iOS application-level `silentpush` event to monitor when the application receives a silent push notification. This notification can be received while the application is in the background. Once this event is triggered, you can initiate a download, then call the `Ti.App.iOS.endBackgroundHandler` method to put the application back to sleep. Pass the `silentpush` event's `handlerId` property to the `endBackgroundHandler` method.

If custom fields were sent in the push notification, these fields are available as properties of object passed to the event callback.

If your application is awake for more than 30 seconds, iOS suspends your application. If your application breaks this condition often, iOS may mark your application as resource intensive and be given fewer opportunities to download data in the background.

```
// Monitor silent push notifications
Ti.App.iOS.addEventListener('silentpush', function(e) {
    // Initiate a download operation
    // Put the application back to sleep
    Ti.App.iOS.endBackgroundHandler(e.handlerId);
});
```

### Subscribing to push notifications

In order to receive the silent remote notification, the device needs to be subscribed to push notifications. Use the [Ti.Network.registerForPushNotifications method](#!/api/Titanium.Network-method-registerForPushNotifications) to register for push notifications and setup callbacks when the application first starts, then use either the Cloud module's `PushNotifications.subscribeToken` or `PushNotifications.subscribe` method to subscribe to a push channel.

The `subscribe` method requires the user to be logged in to Arrow to subscribe and receive push notifications, while `subscribeToken` only relies on the device token.

```javascript
// Require in the Cloud module
var Cloud = require('ti.cloud');

// Register for push notification
Ti.Network.registerForPushNotifications({
    // Only need to listen to alerts
    types: [Ti.Network.NOTIFICATION_TYPE_ALERT],
    success: deviceTokenSuccess,
    error: deviceTokenError
});

function deviceTokenSuccess(e) {

    // Subscribes the device to the 'silent_push' channel to listen for silent push alerts
    // The channel name is arbitrary and can be anything you wish
    Cloud.PushNotifications.subscribeToken({
        device_token: e.deviceToken,
        channel: 'silent_push',
        type: 'ios'
    }, function (e) {
        if (e.success) {
            Ti.API.info('Subscribed');
        } else {
            Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

function deviceTokenError(e) {
    Ti.API.info('Failed to register for push notifications: ' + e.error);
}
```

### Sending a silent push notification

To send a silent push notification to the application to trigger the download, use the Appcelerator Dashboard to send the following payload to the push channel and subscribed devices:

```
{"alert": "", "content-available": 1}
```

The payload only requires the following two field but you may use others:

* The `content-available` field indicates that there is new content to download.

* The `alert` field still needs to be included but does not require a value. If this field is left blank as shown, a banner message is not displayed to the user.

If the push notification contains custom fields, these are stored as properties to the object passed to the `silentpush` callback.

### Example

In the following example, the user needs to launch the application at least once, so the application can register for push notifications. When the application enters the background, you can send a silent push notification to initiate a download, with the content URL as the `download_url` field in the push payload. Banner messages will be displayed when the download starts and finishes. When the application is back in the foreground and the download is complete, the image will be replaced with the downloaded image.

This example requires that push notifications are setup for the project. For directions, see [Push Notifications](/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/Push_Notifications/).

**app.js**

```javascript
// Send the following push notification to this example:
// {"alert":"","content-available":1,"download_url":"https://raw.github.com/appcelerator-developer-relations/KitchenSink/master/Resources/images/dog@2x~iphone.jpg"}

// Require in the urlSession and Cloud modules
var urlSession = require('com.appcelerator.urlSession');
var Cloud = require('ti.cloud');
var session;

// App UI
var win = Ti.UI.createWindow({
    backgroundColor: 'white'
});

var progress = Ti.UI.createProgressBar({
    width: 200,
    height: 50,
    min: 0,
    max: 1,
    value: 0,
    style: Ti.UI.iOS.ProgressBarStyle.PLAIN,
    top: 10,
    message: 'Downloading image URL',
    font: { fontSize: 12, fontWeight: 'bold'},
    color: '#888'
});
win.add(progress);
var imageView = Ti.UI.createImageView({
    top: 100,
    height: 350,
    width: 250,
    image: 'https://raw.github.com/appcelerator-developer-relations/KitchenSink/master/Resources/images/fence@2x.jpg'
});
win.add(imageView);

// Monitor silent push notifications
Ti.App.iOS.addEventListener('silentpush', function(e) {

    Ti.API.info('silentpush: ' + JSON.stringify(e));

    // Create a background download task
    // The push payload field, download_url, is available to this callback as e.download_url
    session.DownloadTask({
        url: e.download_url
    });

    // Display a banner message when the download starts
    Ti.App.iOS.scheduleLocalNotification({
        alertBody: 'Background download initiated ...',
        date: new Date().getTime()
    });
    progress.show();

    // Put the application back to sleep
    Ti.App.iOS.endBackgroundHandler(e.handlerId);
});

// Monitor this event to receive updates on the progress of the download
Ti.App.iOS.addEventListener('downloadprogress', function(e) {
    // Update the progress indicator
    progress.value = (e.totalBytesWritten / e.totalBytesExpectedToWrite);
});

// Monitor this event to know when the download completes
Ti.App.iOS.addEventListener('downloadcompleted', function(e) {
    Ti.API.info('Download completed: ' + JSON.stringify(e));

    // Update the image
    imageView.image = e.data;

    // Invalidates the session and cancel any current session tasks
    session.invalidateAndCancel();

    // Display a banner message when the download finishes
    Ti.App.iOS.scheduleLocalNotification({
        alertBody: 'Download completed!',
        date: new Date().getTime()
    });
    progress.hide();
});

// Monitor this event to know when all session tasks have completed
Ti.App.iOS.addEventListener('sessioncompleted', function(e) {
    Ti.API.info('sessioncompleted: ' + JSON.stringify(e));
    if (e.success) {
        alert('Downloads completed successfully.');
    }
});

// Register for push notification
Ti.Network.registerForPushNotifications({
    types: [Ti.Network.NOTIFICATION_TYPE_ALERT],
    success: deviceTokenSuccess,
    error: deviceTokenError
});

function deviceTokenSuccess(e) {
    // Subscribes the device to the 'silent_push' channel to listen for silent push alerts
    // The channel name is arbitrary and can be anything you wish
    Cloud.PushNotifications.subscribeToken({
        device_token: e.deviceToken,
        channel: 'silent_push',
        type: 'ios'
    }, function (e) {
        if (e.success) {
            Ti.API.info('Subscribed');
        } else {
            Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

function deviceTokenError(e) {
    Ti.API.info('Failed to register for push notifications: ' + e.error);
}
```
