# Titanium.App.iOS.UserActivity

<TypeHeader/>

## Overview

A UserActivity object requires the `activityType` property to be specified at creation time.
Additional properties can be set either at creation or set individually after creation.

Handoff will not work in the simulator.  You must build and run on a compatible device.

Handoff functionality depends on a few things:

  * You must be logged into the same iCloud account on each device you wish to use Handoff.
  * Handoff broadcasts activities via Bluetooth LE signals, so both the broadcasting and receiving devices must have Bluetooth LE 4.0 support.
  * Connect all devices to the same Wi-Fi network.

Make sure you have two devices that are logged onto the same iCloud account.

Since iOS 12, you can also configure the UserActivity API for handling Siri Shortcuts. See the
below API's and example or refer to the [Apple Siri Shortcuts Docs](https://developer.apple.com/documentation/sirikit/donating_shortcuts?language=objc)
for details.

## Examples

### Creating a new User Activity

The following example demonstrates how to create a new UserActivity and mark the activity as
the current activity Handoff should be using when switching between devices.

It is important to note that all activityTypes must be defined in your `tiapp.xml` before this
feature can be supported.  It is important to check the supported property on your UserActivity
to ensure the activity created is supported on your device.

#### app.js

    var activity =  Ti.App.iOS.createUserActivity({
    activityType: 'com.setdirection.home',
        title: 'activity 1',
        userInfo: {
            msg: 'hello world'
        }
    });

    if (!activity.isSupported()) {
        alert('User Activities are not supported on this device!');
    } else {
        activity.becomeCurrent();

        Ti.App.iOS.addEventListener('continueactivity', function (e) {
            if (e.activityType === 'com.setdirection.home' && e.userInfo.msg) {
                alert(e.userInfo.msg);
            }
        });
    }

#### tiapp.xml

    <ti:app>
      <ios>
        <plist>
          <dict>
            <key>NSUserActivityTypes</key>
            <array>
              <string>com.setdirection.home</string>
            </array>
          </dict>
        </plist>
      </ios>
    </ti:app>

### iOS 12+ Siri Shortcuts

The following example shows how to add and delete a UserActivity for Siri Shortcuts
on iOS 12 and later.

#### app.js

    var win = Ti.UI.createWindow({
        backgroundColor: '#fff'
    });

    var btn = Ti.UI.createButton({
        top: 200,
        title: 'Delete UserActivity'
    });

    var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
        itemContentType: Ti.App.iOS.UTTYPE_IMAGE,
        title: 'Titanium Siri Shortcut Tutorial',
        contentDescription: 'Tech Example \nOn: ' + (new Date().toLocaleString()),
    });

    var activity = Ti.App.iOS.createUserActivity({
        activityType: 'com.appcelerator.titanium',
        title: 'Siri shortcut activity',
        userInfo: {
            msg: 'hello world'
        },
        eligibleForSearch: true,
        eligibleForPrediction: true,
        persistentIdentifier: 'titanium_siri_identifier'
    });

    activity.addContentAttributeSet(itemAttr);

    if (!activity.isSupported()) {
        alert('User Activities are not supported on this device!');
    } else {
        activity.becomeCurrent();

        Ti.App.iOS.addEventListener('continueactivity', function (e) {
            Ti.API.info('continueactivity called');
            if (e.activityType === 'com.appcelerator.titanium' && e.userInfo.msg) {
                alert(e.userInfo.msg);
            }
        });
    }

    activity.addEventListener('useractivitydeleted', function (e) {
        Ti.API.info('useractivitydeleted called');
        alert('user activity deleted');
    });

    btn.addEventListener('click', function () {
        activity.deleteSavedUserActivitiesForPersistentIdentifiers(['titanium_siri_identifier']);
    });

    win.add(btn);
    win.open();

<ApiDocs/>
