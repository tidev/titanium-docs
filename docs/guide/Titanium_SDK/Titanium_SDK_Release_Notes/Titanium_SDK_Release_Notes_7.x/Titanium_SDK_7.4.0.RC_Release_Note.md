---
title: Titanium SDK 7.4.0.RC - 6 September 2018
weight: '120'
---

# Titanium SDK 7.4.0.RC - 6 September 2018

## About this release

Titanium SDK 7.4.0.RC is a minor release of the SDK that focuses on supporting iOS 12 and Xcode 10 updates.

As of this release, Titanium SDK 7.3.x will not be supported six months (2019-03-17) from 7.4.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New features

### iOS platform

* [TIMOB-25708](https://jira.appcelerator.org/browse/TIMOB-25708) - iOS: Support iOS 12 and Xcode 10

    * Implemented support Xcode 10 and iOS 12

* [TIMOB-26312](https://jira.appcelerator.org/browse/TIMOB-26312) - iOS 12 : Expose new NSUserActivity APIs for Siri Intents

    * Added support NSUserActivity API

    * Sample app

        ```javascript
        var win = Ti.UI.createWindow({
          backgroundColor: '#fff'
        });

        var identifierBtn = Ti.UI.createButton({
          top: 100,
          title: 'Persistent Identifier'
        });

        var btn = Ti.UI.createButton({
          top: 200,
          title: 'Delete UserActivity for identifier'
        });

        var deleteBtn = Ti.UI.createButton({
          top: 300,
          title: 'Delete All UserActivity'
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

          Ti.App.iOS.addEventListener('continueactivity', function(e) {
            Ti.API.info('continueactivity called');
            if (e.activityType === 'com.appcelerator.titanium' && e.userInfo.msg) {
              alert(e.userInfo.msg);
            }
          });
        }

        activity.addEventListener('useractivitydeleted', function(e) {
          Ti.API.info('useractivitydeleted called');
          alert('user activity deleted');
        });

        btn.addEventListener('click', function() {
          activity.deleteSavedUserActivitiesForPersistentIdentifiers('titanium_siri_identifier');
        });

        identifierBtn.addEventListener('click', function() {
          Ti.API.info('persistent identfier is: ' +activity.persistentIdentifier);
          Ti.API.info('\neligibleForPrediction is: ' +activity.eligibleForPrediction);
        });

        deleteBtn.addEventListener('click', function() {
          activity.deleteAllSavedUserActivities();
        });

        win.add(identifierBtn);
        win.add(btn);
        win.add(deleteBtn);
        win.open();
        ```

## Fixed issues

* [TIMOB-25226](https://jira.appcelerator.org/browse/TIMOB-25226) - Xcode 9/10: Support using new build-system

* [TIMOB-26096](https://jira.appcelerator.org/browse/TIMOB-26096) - iOS 12: Simulator does not boot with Xcode 10

* [TIMOB-26097](https://jira.appcelerator.org/browse/TIMOB-26097) - Hyperloop: iOS 12 - Using CocoaPods in Hyperloop does not work with Xcode 10

* [TIMOB-26103](https://jira.appcelerator.org/browse/TIMOB-26103) - iOS 12: Support grouped notifications

* [TIMOB-26109](https://jira.appcelerator.org/browse/TIMOB-26109) - Xcode 10: Cannot build modules with the new (default) build system

* [TIMOB-26110](https://jira.appcelerator.org/browse/TIMOB-26110) - Xcode 10: Cannot build application with new (default) build system

* [TIMOB-26351](https://jira.appcelerator.org/browse/TIMOB-26351) - iOS CLI (Babel): Cannot read property 'isIfStatement' of null

## Improvements

* [TIMOB-26089](https://jira.appcelerator.org/browse/TIMOB-26089) - iOS 12: Update simulator mappings for Xcode 10

    * Dropped support for versions of Xcode below 9 and added support for Xcode 10

* [TIMOB-26090](https://jira.appcelerator.org/browse/TIMOB-26090) - iOS 12: Make iOS development-project compatible with Xcode 10

    * Made minor updates to Xcode template

* [TIMOB-26094](https://jira.appcelerator.org/browse/TIMOB-26094) - iOS 12: Add Password Autofill improvements

    * Added new `Ti.UI.TextField` API

    * Related docs:

        * [UITextInputPasswordRules](https://developer.apple.com/documentation/uikit/uitextinputpasswordrules)

        * [passwordRules](https://developer.apple.com/documentation/uikit/uitextinputtraits/2980934-passwordrules)

        * [UITextContentTypeNewPassword](https://developer.apple.com/documentation/uikit/uitextcontenttypenewpassword)

        * [UITextContentTypeOneTimeCode](https://developer.apple.com/documentation/uikit/uitextcontenttypeonetimecode)

    * Sample code

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: '#ddd'
        });

        var field = Ti.UI.createTextField({
            autofillType: Ti.UI.AUTOFILL_TYPE_PASSWORD,
            passwordRules: 'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;',
            passwordMask: true,
            width: 300,
            height: 40,
            backgroundColor: '#fff' });

        win.add(field);
        win.open()
        ```

## Known issues

* [TIMOB-26320](https://jira.appcelerator.org/browse/TIMOB-26320) - Xcode 10: Cannot build native modules in Xcode IDE when using new build-system (default)

    * Xcode cannot find the header-source-paths used before (e.g. #import "TiApp.h") from ~/Library/Application Support/Titanium/mobilesdk/osx/7.3.0.GA/iphone/include/ anymore. While building the module works fine, but building the library from Xcode to debug the development process, does not work anymore. The radar is [rdar://40906817](http://www.openradar.me/40906817).

    * Workaround: go to **File** > **Project Settings** and select the **Legacy Build System**.

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 7.4.0 as of September 17th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_PROVISIONAL | property | The application is provisionally authorized to post non-interruptive user notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_TYPE\_CRITICAL\_ALERT | property | The ability to play sounds for critical alerts.Use with the types property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_TYPE\_PROVIDES\_APP\_NOTIFICATION\_SETTINGS | property | An option indicating the system should display a button for in-app notification settings.Use with the types property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_TYPE\_PROVISIONAL | property | The ability to post non-interrupting notifications provisionally to the Notification Center.Use with the types property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.deleteAllSavedUserActivities | method | Deletes all user activities created by your app. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.deleteSavedUserActivitiesForPersistentIdentifiers | method | Deletes user activities created by your app that have the specified persistent identifiers. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.eligibleForPrediction | property | A Boolean value that determines whether Siri can suggest the user activity as a shortcut to the user. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.getEligibleForPrediction | method | Gets the value of the Titanium.App.iOS.UserActivity.eligibleForPrediction property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.getPersistentIdentifier | method | Gets the value of the Titanium.App.iOS.UserActivity.persistentIdentifier property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.persistentIdentifier | property | A value used to identify the user activity. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.setEligibleForPrediction | method | Sets the value of the Titanium.App.iOS.UserActivity.eligibleForPrediction property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.setPersistentIdentifier | method | Sets the value of the Titanium.App.iOS.UserActivity.persistentIdentifier property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.useractivitydeleted | event | Fired when the user activity get deleted using the Titanium.App.iOS.UserActivity.deleteAllSavedUserActivities or Titanium.App.iOS.UserActivity.deleteSavedUserActivitiesForPersistentIdentifiers methods. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationCategory.categorySummaryFormat | property | A format string for the summary description used when the system groups the category's notifications. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NEW\_PASSWORD | property | Specifies the expectation of a new password. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ONE\_TIME\_CODE | property | Specifies the expectation of a single-factor SMS login code. (New API, supported on iPhone and iPad.) |
