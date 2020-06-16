---
title: Handoff User Activities
weight: '30'
---

# Handoff User Activities

## Introduction

Starting with iOS 8.0 and Titanium SDK 5.0, you can use the Handoff feature to transfer a user activity from one device to another. Handoff lets you start using an application, such as editing a document, on one device, then transfer to another device to continue working on it. Both devices will need to share the same iCloud account and Wi-Fi connection as well as be Bluetooth enabled.

Note that you can only test handoff on device. You cannot test handoff on the iOS simulator.

## Device Setup

To use handoff, both devices must:

* Be logged into the same iCloud account

* Be on the same Wi-Fi network

* Have Bluetooth enabled

* Have Handoff enabled

For detailed instructions, see [Apple Support: Use Continuity to connect your iPhone, iPad, iPod touch, and Mac](https://support.apple.com/en-us/HT204681).

To test if Handoff is working, open Safari on one device and navigate to a specific web page. On the other device, go to the locked screen. You should see a Safari icon in the bottom-left corner. Tap on the Safari icon and swipe up. Safari should open to the same web page.

## Share an Activity

To share an Activity, create an UserActivity object and set it as the current activity. You will also need to register the activity in the plist section of the `tiapp.xml` file to use it.

To create an Activity, use the Titanium.App.iOS.createUserActivity() method. Pass the method a dictionary with following properties defined. The `activityType` property is the only required property.

* `activityType`: developer-defined string used as the activity type for the user activity. The activity type must be registered in the plist section of the `tiapp.xml` file to use it.

* `eligibleForHandOff`: set to `true` to allow the activity to be handed off to another device. Default is true. **Requires iOS 9.0 or later.**

* `eligibleForPublicIndexing`: set to `true` to allow the activity to be indexed publicly allowing it to be search by all users. Must also set the `requiredUserInfoKey` or `webpageURL` properties. Default is false. **Requires iOS 9.0 or later.**

* `eligibleForSearch`: set to `true` to allow the activity to be added to the on-device index. Default is false. **Requires iOS 9.0 or later.**

* `expirationDate`: date that the activity expires in the format: `yyyy-MM-ddTHH:mm:ss.SSS+0000`. If not set, the OS will determine the expiration time.

* `keywords`: array of strings that a user can use to find the activity in Spotlight. You can also use the UserActivity object's `addContentAttributeSet()` method to add indexable content. **Both APIs require iOS 9.0 or later.**

* `requiredUserInfoKey`: array of keys that need to be sent in the `userInfo` object. **Requires iOS 9.0 or later.**

* `title`: user-visible title for the activity, such as a document name or webpage URL.

* `userInfo`: object of key-value pairs to send with the activity

* `webpageURL`: if a suitable application is not found on the device, loads the specified web page and continues the activity in the browser. Only supports the `http://` and `https://` protocols. Any other protocol will throw an error.

Once you are ready to share the activity, use the `supported` property to check if the user activity is supported by the application, then invoke its `becomeCurrent()` method to indicate that the activity is in use by the current device.

**app.js**

```javascript
var activity =  Ti.App.iOS.createUserActivity({
    activityType:'com.foo.message',
    title:'Handoff Messenger',
    userInfo:{
        msg: 'Tag! You\'re it!'
    }
});

if(!activity.supported){
    alert('activity is not supported');
} else {
    activity.becomeCurrent();
}
```

Before using the activity, you will need to register each activity type in the `plist` section of the `tiapp.xml` file. Under the `<dict>` element in the `<ios><plist>` elements, add the `NSUserActivityTypes` key with the value set to an array of strings, where each string is the `activityType` property that you want the application to support.

**tiapp.xml**

```xml
<ti:app>
  <ios>
    <plist>
      <dict>
        <key>NSUserActivityTypes</key>
        <array>
          <string>com.foo.message</string>
          <string>com.foo.bar</string>
        </array>
      </dict>
    </plist>
  </ios>
</ti:app>
```

### Monitor the Activity

Listen for the [`useractivitywascontinued`](#!/api/Titanium.App.iOS.UserActivity-event-useractivitywascontinued) event to determine when the user activity was handed off to another device. The event will be passed the `activityType`, `title`, `userInfo` and `webpageURL` properties that were set on the user activity.

**app.js**

```javascript
activity.addEventListener('useractivitywascontinued', function(e) {
    Ti.API.info('Activity moved to a different device.');
});
```

### Update the Activity

_Every time_ something happens that requires the activity's state to be updated before it could be handed off, set the UserActivity object's `needsSave` property to `true`. Listen for the `useractivitywillsave` event to actually update the activity state or content, such as saving changes to an API. This event is triggered at the discretion of iOS and when you call `becomCurrent()`. The event will be passed the current `activityType`, `title`, `userInfo` and `webpageURL` properties. After the event is fired, iOS will reset the `needsSave` property to false.

**app.js**

```javascript
activity.addEventListener('useractivitywillsave', function(e) {
    Ti.API.info('Updating content...');
});

// Every time the activity needs to be updated set:
activity.needsSave = true;
```

## Continue the Activity

To continue the activity on another paired device, listen for the `Ti.App.iOS` module's `continueactivity`event. The handoff event will be passed the `activityType`, `title`, `userInfo` and `webpageURL` properties that were set on the user activity. Use the passed information to continue the activity.

**app.js**

```javascript
Ti.App.iOS.addEventListener('continueactivity', function(e){
    if (e.activityType === 'com.foo.message' && e.userInfo.msg) {
        alert(e.userInfo.msg);
    }
});
```

## Test the Sample

To test the code above, make sure you have both iOS devices setup as described in the "Device Setup" section. Copy and paste both `app.js` snippets to one file and add the `NSUserActivityTypes` key to the `tiapp.xml`. Run the project on two iOS devices.

Before launching the application, have the lock screen on for the first device, then on the second device, launch the application. On the lock screen of the first device, the application icon should appear in the bottom-left corner.

![lockscreen](./lockscreen.png)

Tap the icon and drag up to open the application on the first device. You should see an alert dialog with the message: "Tag! You're it!"

![tagyouareit](./tagyouareit.png)

## Reference

[iOS Developer Library: Handoff Programming Guide](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338)
