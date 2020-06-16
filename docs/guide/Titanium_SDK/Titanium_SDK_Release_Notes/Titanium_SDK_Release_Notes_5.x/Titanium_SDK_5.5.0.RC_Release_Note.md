---
title: Titanium SDK 5.5.0.RC - 31 August 2016
weight: '30'
---

# Titanium SDK 5.5.0.RC - 31 August 2016

## Contents

## About This Release

Titanium SDK 5.5.0.RC is a minor release of the SDK, adding support for iOS 10 and Xcode 8, as well as addressing high-priority issues from previous releases.

As of this release, Titanium SDK 5.4.x will not be supported six months from 5.5.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Notice of Feature and Behavior Changes

### iOS Platform

* This release adds Xcode support from 7.3.x to the maximum version of 8.x

* The team-id is now required in tiapp.xml when building an app with a watch extension and Xcode 8

* Minimum iOS SDK version is set to 8.0 by default if not explicitly set in the tiapp.xml when compiling using Xcode 8

    * This behavior is following the one Xcode 8 provides. You can still change your minimum iOS version to 7.1 in tiapp.xml

## New Features

### iOS Platform

* Team id is now required in `tiapp.xml` when building an app with a watch extension and Xcode 8. Add the `<team-id>` to the `<ios>` section of your `tiapp.xml:`

    ```xml
    <ios>
        <team-id>YOUR-TEAM-ID</team-id>
        <!-- more iOS specific keys -->
    </ios>
    ```

* [TIMOB-23509](https://jira.appcelerator.org/browse/TIMOB-23509) - iOS10: Expose new visual effects on Ti.UI.iOS.BlurView

    * Exposed the `Ti.UI.iOS.BLUR_EFFECT_STYLE_PROMINENT` and `Ti.UI.iOS.BLUR_EFFECT_STYLE_REGULAR` on Ti.UI.iOS.BlurView

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
        var effects = [
            Ti.UI.iOS.BLUR_EFFECT_STYLE_EXTRA_LIGHT,
            Ti.UI.iOS.BLUR_EFFECT_STYLE_LIGHT,
            Ti.UI.iOS.BLUR_EFFECT_STYLE_DARK,
            Ti.UI.iOS.BLUR_EFFECT_STYLE_REGULAR,
            Ti.UI.iOS.BLUR_EFFECT_STYLE_PROMINENT
        ];

        tabs.addEventListener("click", function(e) {
            blur.setEffect(effects[e.index]);
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

        ```javascript
        Ti.API.warn("Has URLs:" + Ti.UI.Clipboard.hasURLs());
        Ti.API.warn("Has images" + Ti.UI.Clipboard.hasImages());
        Ti.API.warn("Has colors:" + Ti.UI.Clipboard.hasColors());

        var localOnly = Ti.UI.CLIPBOARD_OPTION_LOCAL_ONLY;
        var expirationDate = Ti.UI.CLIPBOARD_OPTION_EXPIRATION_DATE;

        // Set mime-type based items with additional options
        Ti.UI.Clipboard.setItems({
            items: [{
                "text/plain": "John",
            },{
                "text/plain": "Doe"
            }],
            options: {
                localOnly: true,
                expirationDate: new Date(2020, 04, 20)
            }
        });
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

* [TIMOB-23528](https://jira.appcelerator.org/browse/TIMOB-23528) - iOS10: Support new Ti.App.iOS.SearchableItemAttributeSet properties

    * Added support for: fullyFormattedAddress, postalCode, thoroughfare and subThoroughfare

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
                keywords: ['appcelerator', 'titanium_mobile', 'ios10', 'corespotlight']
            });

            var item = Ti.App.iOS.createSearchableItem({
                uniqueIndentifier: 'core-spotlight',
                domainIdentifier: 'ios10',
                attributeSet: itemAttr
            });

            var indexer = Ti.App.iOS.createSearchableIndex();
            indexer.addToDefaultSearchableIndex([item], function(e) {
                if (e.success) {
                    alert('Press the home button and now search for your keywords');
                } else {
                    alert('Error: ' + JSON.stringify(e.error));
                }
            });
        }
        ```

* [TIMOB-23828](https://jira.appcelerator.org/browse/TIMOB-23828) - iOS10: Support the new CoreSpotlight CSSearchQuery API

    * Added the ability to query searchable indexes with iOS 10

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: "#fff"
        });
        var btn = Ti.UI.createButton({
            title: "Start search-query"
        });

        var searchItems = [];
        var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
            itemContentType: Ti.App.iOS.UTTYPE_IMAGE,
            title: "Titanium Core Spotlight Tutorial"
        });

        itemAttr.contentDescription = "Tech Example \nOn: " + String.formatDate(new Date(), "short");
        itemAttr.keywords = ["Mobile", "Appcelerator", "Titanium"];
        itemAttr.displayName = "Hello world";

        var item = Ti.App.iOS.createSearchableItem({
            uniqueIdentifier: "my-id",
            domainIdentifier: "com.mydomain",
            attributeSet: itemAttr
        });
        searchItems.push(item);

        var indexer = Ti.App.iOS.createSearchableIndex();

        indexer.addToDefaultSearchableIndex(searchItems, function(e) {
            if (e.success) {
                Ti.API.info("Press the home button and now search for your keywords");
            } else {
                alert("Errored: " + JSON.stringify(e.error));
            }
        });

        btn.addEventListener("click", function() {
            // An array of found Ti.App.iOS.SearchableItem's
            var allItems = [];

            // The search-query
            var searchQuery = Ti.App.iOS.createSearchQuery({
                queryString: 'title == "Titanium*"',
                attributes: ["title", "displayName", "keywords", "contentType"]
            });

            // The event to be called when a new batch of items is found
            searchQuery.addEventListener("founditems", function(e) {
                for (var i = 0; i < e.items.length; i++) {
                    allItems.push(e.items[i]);
                }
            });

            // The event to be called when the search-query completes
            searchQuery.addEventListener("completed", function(e) {
                if (!e.success) {
                    alert(e.error);
                }

                for (var i = 0; i < allItems.length; i++) {
                    var attributeSet = allItems[i].attributeSet
                    var foundTitle = attributeSet.title
                    var foundDisplayName = attributeSet.displayName

                    Ti.API.info("title: " + foundTitle + ", displayName: " + foundDisplayName);
                }
            });

            // Start the search-query (or use searchQuery.cancel()) to abort it
            searchQuery.start();
        });

        win.add(btn);
        win.open();
        ```

## Community Credits

* [Vladimir Trifonov](https://github.com/vladimir-trifonov) for resolving [CLI-1022](https://jira.appcelerator.org/browse/CLI-1022) - If you set access to an Arrow connector, "Successfully set access for <ACCESS\_RIGHT> to null." will appear

* [Michael Gangolf](https://github.com/m1ga) for his work on android: add setRequestHeaders({});, docs, add getter, change docu, adding parameter, and updating documentation.

## Fixed Issues

* [CLI-1070](https://jira.appcelerator.org/browse/CLI-1070) - If you use node 0.12.X, then you'll be unable to download the Hyperloop module through 'appc new'

* [CLI-1079](https://jira.appcelerator.org/browse/CLI-1079) - Modules and plugins are not overwritten if the files already exist

* [TIMOB-23518](https://jira.appcelerator.org/browse/TIMOB-23518) - iOS: Cannot build with Xcode 8.0

* [TIMOB-23549](https://jira.appcelerator.org/browse/TIMOB-23549) - ioslib doesn't recognize global WatchOS simulators

* [TIMOB-23614](https://jira.appcelerator.org/browse/TIMOB-23614) - iOS10: Titanium with Swift Watch App fails to build on Xcode 8.0 Beta

* [TIMOB-23616](https://jira.appcelerator.org/browse/TIMOB-23616) - Class not found: Ti.UI.ScrollableView in ListView Template

* [TIMOB-23620](https://jira.appcelerator.org/browse/TIMOB-23620) - ioslib fails to choose a watch simulator under Xcode 8.0 Beta

* [TIMOB-23627](https://jira.appcelerator.org/browse/TIMOB-23627) - Calendar, Contacts and Camera can crash on iOS 10 / Xcode 8

* [TIMOB-23636](https://jira.appcelerator.org/browse/TIMOB-23636) - Failed watchOS pairing will silently fail appc run without error

* [TIMOB-23671](https://jira.appcelerator.org/browse/TIMOB-23671) - Receiving "Segmentation fault: 11" when trying to build after updating SDK to 5.4.0 from June 6 (or later)

* [TIMOB-23747](https://jira.appcelerator.org/browse/TIMOB-23747) - iOS: Handoff crashes from iOS9 to iOS8

* [TIMOB-23756](https://jira.appcelerator.org/browse/TIMOB-23756) - iOS: Build fails if project name matches file/folder in built app

* [TIMOB-23722](https://jira.appcelerator.org/browse/TIMOB-23722) - Hyperloop: Classes that are unavailable on watchOS/tvOS are also not compiled on iOS

* [TIMOB-23761](https://jira.appcelerator.org/browse/TIMOB-23761) - Hyperloop: Errors when running project with liveview and hyperloop enabled

* [TIMOB-23815](https://jira.appcelerator.org/browse/TIMOB-23815) - Hyperloop: Android error when creating proxy after Hyperloop version 1.2.6

* [TIMOB-23769](https://jira.appcelerator.org/browse/TIMOB-23769) - iOS: Deprecated warnings are thrown in unrelated API's

* [TIMOB-23790](https://jira.appcelerator.org/browse/TIMOB-23790) - node-ios-device: emitter error during process exit and uncaught exception

* [TIMOB-23823](https://jira.appcelerator.org/browse/TIMOB-23823) \- iOS: Error when device is disconnected while running a build

* [TIMOB-23824](https://jira.appcelerator.org/browse/TIMOB-23824) - iOS: Using animationStyle will cause the app to crash

## Improvements

* [TIMOB-23514](https://jira.appcelerator.org/browse/TIMOB-23514) - iOS10: Deprecate iAds

    * Removed support for iAd framework as noted in [iOS 10.0 API Diffs](https://developer.apple.com/library/prerelease/content/releasenotes/General/iOS10APIDiffs/Objective-C/iAd.html)

* [TIMOB-23778](https://jira.appcelerator.org/browse/TIMOB-23778) - iOS: Improve warning when calling iOS10 visual effects for Ti.UI.iOS.BlurView on < iOS10

    * Improved the warning when calling iOS10 visual effects for Ti.UI.iOS.BlurView on non-iOS10 devices. The error message should look something like this:

        ```
        ERROR : The provided value for the Ti.UI.iOS.BlurView.effect property is not available in this iOS version.
        ```

## Known Issues

* [TIMOB-2372](https://jira.appcelerator.org/browse/TIMOB-23726) - iOS: Debugger for Alloy project hangs on Device with run-on-main-thread enabled - open

    * Running an Alloy project in Debug mode to Device causes the app to hang on "The Debugger is waiting for you to launch the app on your device".

    * This is a Regression from 5.3.0.GA

    * The hang does not occur on simulator, classic titanium mobile project, or with run-on-main-thread disabled

* [TIMOB-23781](https://jira.appcelerator.org/browse/TIMOB-23781) - iOS8: Image Assets in Xcode 8.0 are distorted (Xcode 8 Beta issue) - open

    * Image assets are distorted in apps built with Xcode 8.0 (10.0 SDK) on iOS8 devices. For a default two-tabbed classic application with an ImageView, it affects:

        * The LaunchScreen Icon

        * The two Tab Icons

        * The Custom Image within the ImageView

    * This does not occur in Simulators or with iOS9 or iOS10

    * When reverting to Xcode 7.3 (9.3 SDK), the issue is no longer reproducible

    * This affects Classic & Alloy Projects

* [TIMOB-23786](https://jira.appcelerator.org/browse/TIMOB-23786) - iOS10: Logs not working on iOS 10 devices (Xcode 8 Beta issue) - open

* [TIMOB-23761](https://jira.appcelerator.org/browse/TIMOB-23761) - Hyperloop: Errors when running project with liveview and hyperloop enabled

    * Currently, Liveview only supports Hyperloop on simulators of Alloy projects

* [TIMOB-23797](https://jira.appcelerator.org/browse/TIMOB-23797) - iOS: Improve Pasteboard support

    * If you provide an invalid mime-type to the items property, receiving the items with Ti.UI.Clipboard.getItems() will fail with an error

## API Changes

### New APIs

The following APIs are new or have expanded platform support in Release 5.5.0 as of September 13th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.SearchQuery | object | A search query object manages the criteria to apply when searching app content that you have previously indexed by using the Core Spotlight APIs. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress | property | The fully formatted address of the item (obtained from MapKit). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getFullyFormattedAddress | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getPostalCode | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.postalCode property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getSubThoroughfare | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getThoroughfare | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.postalCode | property | The postal code for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setFullyFormattedAddress | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setPostalCode | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.postalCode property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setSubThoroughfare | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setThoroughfare | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare | property | The sub-location (e.g., street number) for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare | property | The location (e.g., street name) for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createSearchQuery | method | Creates and returns an instance of Titanium.App.iOS.SearchQuery. (New API, supported on iPhone and iPad.) |
| Titanium.Media.hasAudioPermissions | method | Returns `true` if the app has audio permissions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.CLIPBOARD\_OPTION\_EXPIRATION\_DATE | property | Specifies the time and date that you want the system to remove the clipboard items from the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.CLIPBOARD\_OPTION\_LOCAL\_ONLY | property | Specifies that the clipboard items should not be available to other devices through Handoff. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.getItems | method | Gets the items that have been specified earlier using Titanium.UI.Clipboard.setItems. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasColors | method | Indicates whether any colors are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasImages | method | Indicates whether any images are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasURLs | method | Indicates whether any URLs are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.setItems | method | Adds an array of items to a clipboard, and sets privacy options for all included items. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.getRefreshControl | method | Gets the value of the Titanium.UI.ScrollView.refreshControl property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.refreshControl | property | View positioned above the first row that is only revealed when the user drags the scroll view contents down. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.setRefreshControl | method | Sets the value of the Titanium.UI.ScrollView.refreshControl property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_PROMINENT | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_REGULAR | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.WatchSession.getHasContentPending | method | Gets the value of the Titanium.WatchSession.hasContentPending property. (New API, supported on iPhone.) |
| Titanium.WatchSession.getRemainingComplicationUserInfoTransfers | method | Gets the value of the Titanium.WatchSession.remainingComplicationUserInfoTransfers property. (New API, supported on iPhone.) |
| Titanium.WatchSession.hasContentPending | property | Returns `true` if there is more content for the session to deliver. (New API, supported on iPhone.) |
| Titanium.WatchSession.remainingComplicationUserInfoTransfers | property | The number of calls remaining to `transferCurrentComplication` before the system starts transferring the complicationUserInfo as regular userInfos. (New API, supported on iPhone.) |
