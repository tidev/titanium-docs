---
title: Titanium SDK 5.5.0.Beta - 22 August 2016
weight: '40'
---

# Titanium SDK 5.5.0.Beta - 22 August 2016

## Contents

## About This Release

Titanium SDK 5.5.0.Beta is a minor release of the SDK, addressing high-priority issues from previous releases.
This release primarily adds support for iOS 10 and Xcode 8.

As of this release, Titanium SDK 5.4.x will not be supported six months from 5.5.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Notice of Feature and Behavior Changes

### iOS Platform

* This release supports Apple's Xcode from a minimum of 7.3.x to the maximum version of 8.0.x

* Team id is now required in tiapp.xml when building an app with a watch extension and Xcode 8

* Projects will set "SWIFT\_VERSION" to a value of "3.0"

* Removed old watchOS2 template in favor of existing watchOS2-objc template

* Minimum iOS SDK version is set to 8.0 by default if not explicitly set in the tiapp.xml when compiling using Xcode 8

## New Features

### iOS Platform

* [TIMOB-23509](https://jira.appcelerator.org/browse/TIMOB-23509) - iOS10: Expose new visual effects on Ti.UI.iOS.BlurView

    * Exposed `UIBlurEffectStyleProminent` and `UIBlurEffectStyleRegular` on Ti.UI.iOS.BlurView

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: "#fff"
        });

        // Reference image (or view)
        var img = Ti.UI.createImageView({
            image: "/default_app_logo.png",
            top: 100,
            width: 300,
            height: 300
        });

        // Blur view
        var blur = Ti.UI.iOS.createBlurView({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        });

        img.add(blur);

        // Effect controls
        var tabs = Ti.UI.iOS.createTabbedBar({
            labels: "Extra light", "Light", "Dark", "Regular", "Prominent",
            bottom: 100
        });

        // Available blur effects
        var effects =
            Ti.UI.iOS.BLUR_EFFECT_STYLE_EXTRA_LIGHT,
            Ti.UI.iOS.BLUR_EFFECT_STYLE_LIGHT,
            Ti.UI.iOS.BLUR_EFFECT_STYLE_DARK,
            Ti.UI.iOS.BLUR_EFFECT_STYLE_REGULAR,
            Ti.UI.iOS.BLUR_EFFECT_STYLE_PROMINENT
        ;

        tabs.addEventListener("click", function(e) {
            blur.setEffect(effectse.index);
        });

        win.add(tabs);
        win.add(img);
        win.open();
        ```

* [TIMOB-23513](https://jira.appcelerator.org/browse/TIMOB-23513) - iOS10: Support for new WatchConnectivity features

    * Added support for the new WatchConnectivity features such as `hasContentPending` and `remainingComplicationUserInfoTransfers`

    * Demo:

        ```
        Ti.WatchSession.activateSession();

        Ti.API.warn("Has content pending: " + Ti.WatchSession.hasContentPending);
        Ti.API.warn("Number of remaining complication userInfo transfers: " + Ti.WatchSession.remainingComplicationUserInfoTransfers);
        ```

* [TIMOB-23519](https://jira.appcelerator.org/browse/TIMOB-23519) - iOS10: Expose new Ti.UI.Pasteboard APIs

    * Exposed `hasURLs`, `hasImages`, and `hasColors` in the Ti.UI.Pasteboard API

    * Demo:

        ```
        Ti.API.warn("Has URLs:" + Ti.UI.Clipboard.hasURLs());
        Ti.API.warn("Has images" + Ti.UI.Clipboard.hasImages());
        Ti.API.warn("Has colors:" + Ti.UI.Clipboard.hasColors());
        ```

* [TIMOB-23524](https://jira.appcelerator.org/browse/TIMOB-23524) - iOS10: Support RefreshControl in Ti.UI.ScrollView

    * Added support for `refreshControl` in Ti.UI.ScrollView for iOS10

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: "#fff"
        });

        var refreshControl = Ti.UI.createRefreshControl({
            tintColor: "red"
        });

        var scroll = Ti.UI.createScrollView({
            backgroundColor: "yellow",
            refreshControl: refreshControl
        });

        refreshControl.addEventListener("refreshstart", function() {
            setTimeout(function() {
                refreshControl.endRefreshing();
            },1000);
        })

        scroll.add(Ti.UI.createLabel({
            text: "Scroll down!"
        }));

        win.add(scroll);
        win.open();
        ```

* [TIMOB-23528](https://jira.appcelerator.org/browse/TIMOB-23528) - iOS10: Support new CoreSpotlight APIs

    * Added support for CoreSpotlight framework particularly for `CSSearchableItemAttributeSet` and `CSSearchQuery`

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
          backgroundColor : "#fff"
        });

        var btn = Ti.UI.createButton({
            title : "Add searchable index"
        });

        btn.addEventListener("click", function() {
            addToSearchableIndex();
        });

        win.add(btn);
        var nav = Ti.UI.iOS.createNavigationWindow({window: win});
        nav.open();

        function addToSearchableIndex() {
            var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
                itemContentType: Ti.App.iOS.UTTYPE_AUDIO,
                title: 'Who rocks iOS 10?',
                // iOS 10 only
                fullyFormattedAddress: "1732 N 1st St, San Jose, CA 95112",
                postalCode: "95112",
                thoroughfare: "N 1st St",
                subThoroughfare: "1732",
                keywords: 'appcelerator', 'titanium_mobile', 'ios10', 'corespotlight'
            });

           var item = Ti.App.iOS.createSearchableItem({
                identifier: 'core-spotlight',
                domainIdentifier: 'ios10',
                attributeSet: itemAttr
            });

            var indexer = Ti.App.iOS.createSearchableIndex();
            indexer.addToDefaultSearchableIndex(item, function(e) {
                if (e.success) {
                    alert('Press the home button and now search for your keywords');
                } else {
                    alert('Error: ' + JSON.stringify(e.error));
                }
            });
        }
        ```

## Fixed Issues

* [CLI-1070](https://jira.appcelerator.org/browse/CLI-1070) - If you use node 0.12.X, then you'll be unable to download the Hyperloop module through 'appc new'

* [CLI-1079](https://jira.appcelerator.org/browse/CLI-1079) - Modules and plugins are not overwritten if the files already exist

* [TIMOB-23518](https://jira.appcelerator.org/browse/TIMOB-23518) - iOS: Cannot build with Xcode 8.0

* [TIMOB-23549](https://jira.appcelerator.org/browse/TIMOB-23549) - ioslib doesn't recognize global WatchOS simulators

* [TIMOB-23614](https://jira.appcelerator.org/browse/TIMOB-23614) - iOS10: Titanium with Swift Watch App fails to build on Xcode 8.0 Beta

* [TIMOB-23620](https://jira.appcelerator.org/browse/TIMOB-23620) - ioslib fails to choose a watch simulator under Xcode 8.0 Beta

* [TIMOB-23627](https://jira.appcelerator.org/browse/TIMOB-23627) - Calendar, Contacts and Camera can crash on iOS 10 / Xcode 8

* [TIMOB-23636](https://jira.appcelerator.org/browse/TIMOB-23636) - Failed watchOS pairing will silently fail appc run without error

* [TIMOB-23671](https://jira.appcelerator.org/browse/TIMOB-23671) - Receiving "Segmentation fault: 11" when trying to build after updating SDK to 5.4.0 from June 6 (or later)

* [TIMOB-23722](https://jira.appcelerator.org/browse/TIMOB-23722) - Hyperloop: Classes that are unavailable on watchOS/tvOS are also not compiled on iOS

* [TIMOB-23747](https://jira.appcelerator.org/browse/TIMOB-23747) - iOS: Handoff crashes from iOS9 to iOS8

* [TIMOB-23756](https://jira.appcelerator.org/browse/TIMOB-23756) - iOS: Build fails if project name matches file/folder in built app

* [TIMOB-23761](https://jira.appcelerator.org/browse/TIMOB-23761) - Hyperloop: Errors when running project with liveview and hyperloop enabled

* [TIMOB-23769](https://jira.appcelerator.org/browse/TIMOB-23769) - iOS: Deprecated warnings are thrown in unrelated API's

* [TIMOB-23790](https://jira.appcelerator.org/browse/TIMOB-23790) - node-ios-device: emitter error during process exit and uncaught exception

## Improvements patch releases

* [TIMOB-23514](https://jira.appcelerator.org/browse/TIMOB-23514) - iOS10: Deprecate iAds

    * iAds has been depreciated ([iOS 10.0 API Diffs](https://developer.apple.com/library/prerelease/content/releasenotes/General/iOS10APIDiffs/Objective-C/iAd.html))

* [TIMOB-23778](https://jira.appcelerator.org/browse/TIMOB-23778) - iOS: Improve warning when calling iOS10 visual effects for Ti.UI.iOS.BlurView on < iOS10

    * Improved the warning when calling iOS10 visual effects for Ti.UI.iOS.BlurView on non-iOS10 devices. The error message should look something like this:

        ```
        ERROR : The provided value for the Ti.UI.iOS.BlurView.effect property is not available in this iOS version.
        ```

## Known Issues in 5.5.0.Beta

* [TIMOB-23726](https://jira.appcelerator.org/browse/TIMOB-23726) - iOS: Debugger for Alloy project hangs on Device with run-on-main-thread enabled

    * Running an Alloy project in Debug mode to Device causes the app to hang on "The Debugger is waiting for you to launch the app on your device".

    * This is a Regression from 5.3.0.GA

    * The hang does not occur on simulator, classic titanium mobile project, or with run-on-main-thread disabled

* [TIMOB-23781](https://jira.appcelerator.org/browse/TIMOB-23781) - iOS8: Image Assets are distorted with Xcode 8.0

    * Image assets are distorted in apps built with Xcode 8.0 (10.0 SDK) on iOS8 devices. For a default two-tabbed classic application with an ImageView, it affects:

        * The LaunchScreen Icon

        * The two Tab Icons

        * The Custom Image within the ImageView

    * This does not occur in Simulators or with iOS9 or iOS10

    * When reverting to Xcode 7.3 (9.3 SDK), the issue is no longer reproducible

    * This affects Classic & Alloy Projects

* [TIMOB-23786](https://jira.appcelerator.org/browse/TIMOB-23786) - iOS10: Logs not working on iOS 10 devices

## API Changes

No APIs were changed at this time.
