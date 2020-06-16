---
title: Titanium SDK 6.1.0.GA Release Note
weight: '110'
---

# Titanium SDK 6.1.0.GA Release Note

## Titanium SDK 6.1.0.GA - 26 May 2017

### Contents

### About this release

Titanium SDK 6.1.0.GA is a feature release of the SDK, addressing high-priority issues from previous releases as well as adding new features and improvements.

As of this release, Titanium SDK 6.0.x will not be supported six months from 6.1.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

### Notice of feature and behavior changes

#### Android platform

* [TIMOB-19578](https://jira.appcelerator.org/browse/TIMOB-19578) - Android: Customize Touch Feedback

    * Added the opt-in feature from Android Lollipop's touch feedback

### New features

#### Android platform

* [TIMOB-16005](https://jira.appcelerator.org/browse/TIMOB-16005) - Android: Small device textfield issue in landscape mode

    * When rotating a small screen device into landscape mode, the textField now expands to full screen

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
          backgroundColor : 'white',
          layout : 'vertical'
        });

        var aTextField = Ti.UI.createTextField({
          height : Ti.UI.SIZE,
          top : 10,
          width : Ti.UI.FILL,
          hintText : 'This is hint text',
          softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
          keyboardType : Ti.UI.KEYBOARD_DEFAULT,
          returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
          borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
        });

        win.add(aTextField);

        var aTextField1 = Ti.UI.createTextField({
          height : Ti.UI.SIZE,
          top : 10,
          width : Ti.UI.FILL,
          hintText : 'This is hint text',
          softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
          keyboardType : Ti.UI.KEYBOARD_DEFAULT,
          returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
          borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
        });

        win.add(aTextField1);
        win.open();
        ```

* [TIMOB-16369](https://jira.appcelerator.org/browse/TIMOB-16369) - Android: Disable copy,define,share popup contextual bar inside webview when selecting text

    * Added feature that allows for the disabling of the contextual bar: `disableContextMenu` (set to false by default)

* [TIMOB-18053](https://jira.appcelerator.org/browse/TIMOB-18053) - Android: expose the text color for the picker

    * Revised picker for row text color

* [TIMOB-18565](https://jira.appcelerator.org/browse/TIMOB-18565) - Android: Support android \*.aar libraries while building module

    * Added support for Android \*.aar libraries while building modules

* [TIMOB-20477](https://jira.appcelerator.org/browse/TIMOB-20477) - Android: Request to support Superscript/Subscript Attributed String

    * Added support for superscript and subscript styles in `Ti.UI.AtrributedString`

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: '#ddd',
        });

        var attr = Ti.UI.createAttributedString({
            text: 'x2 + y3, hello world!',
            attributes: [
                {
                    type: Ti.UI.ATTRIBUTE_SUPERSCRIPT_STYLE,
                    range: [1, 1]
                },
                {
                    type: Ti.UI.ATTRIBUTE_SUPERSCRIPT_STYLE,
                    range: [6, 1]
                },
                {
                    type: Ti.UI.ATTRIBUTE_SUBSCRIPT_STYLE,
                    range: [15, 5]
                }
            ]
        });

        var label = Ti.UI.createLabel({
            height: 50,
            color: "#000",
            attributedString: attr
        });

        win.add(label);
        win.open();
        ```

* [TIMOB-23429](https://jira.appcelerator.org/browse/TIMOB-23429) - Android N: File Permissions

    * Added support for Android N restrictions to file system permissions

* [TIMOB-23455](https://jira.appcelerator.org/browse/TIMOB-23455) - Android: Support for requesting Audio Focus

    * Added support for [Audio Focus](https://developer.android.com/training/managing-audio/audio-focus.html) which allows Ti.Media.AudioPlayer to grab focus from other audio sources

* [TIMOB-23974](https://jira.appcelerator.org/browse/TIMOB-23974) - Android: Add property to release space when hiding an object

    * Added support for the ”gone”” property for visibility of elements in the layout views

* [TIMOB-24400](https://jira.appcelerator.org/browse/TIMOB-24400) - Android: Download video and save it to the Device's Gallery

    * Added support for saving video files to gallery

#### iOS platform

* [TIMOB-5436](https://jira.appcelerator.org/browse/TIMOB-5436) - iOS: Expose SystemAlert

    * Added support for Ti.Media.SystemAlert

* [TIMOB-7406](https://jira.appcelerator.org/browse/TIMOB-7406) - iOS: Set a user-agent for a webview

    * Added support to set an user-agent for WebView (iOS)

* [TIMOB-15275](https://jira.appcelerator.org/browse/TIMOB-15275) - iOS: Enable ARC by default in Titanium Mobile Module projects

    * Added support for ARC and other improvements in native iOS modules

* [TIMOB-19911](https://jira.appcelerator.org/browse/TIMOB-19911) - iOS: Set Entitlements.plist keys from tiapp.xml like we do for Info.plist

    * Set `entitlements.plist` keys from `tiapp.xml` in a similar fashion like `info.plist`

* [TIMOB-20024](https://jira.appcelerator.org/browse/TIMOB-20024) - iOS: Support setting values for Ti.UI.AlertDialog input fields

    * Added support for `value`, `loginValue`, and `passwordValue` for `Ti.UI.AlertDialog`

* [TIMOB-20547](https://jira.appcelerator.org/browse/TIMOB-20547) - iOS: Add Keychain-access to Ti.TouchID, add passcode-fallback mode, expose new iOS 10 TouchID API's

    * Added support for native keychain-access in `Ti.TouchID` and passcode-fallback mode

* [TIMOB-23836](https://jira.appcelerator.org/browse/TIMOB-23836) - iOS10: Support UITableView data-source prefetching

    * Added support for UITableView data-source prefetching

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow();
        var list = Ti.UI.createListView();
        var items = [];

        for (var i = 0; i < 200; i++) {
            items.push({
                properties: {
                    title: "Item " + i
                }
            });
        }

        list.setSections([Ti.UI.createListSection({items: items})]);

        list.addEventListener("prefetch", function(e) {
            Ti.API.warn("event:prefetch");
            Ti.API.warn(e.prefetchedItems);
        });

        list.addEventListener("cancelprefetch", function(e) {
            Ti.API.warn("event:cancelprefetch");
            Ti.API.warn(e.prefetchedItems);
        });

        win.add(list);
        win.open();
        ```

* [TIMOB-23837](https://jira.appcelerator.org/browse/TIMOB-23837) - iOS10: Support new TabGroup API's

    * Added support for new iOS 10 TabGroup API's

    * Demo:

        ```javascript
        var tabGroup = Ti.UI.createTabGroup({
            unselectedItemTintColor: "red",
            tabs: [createTab("Tab 1"), createTab("Tab 2"), createTab("Tab 3"), createTab("Tab 4")]
        });

        // Sets the badge after 3 seconds
        setTimeout(function() {
            tabGroup.tabs[1].badge = 3;
            tabGroup.tabs[1].badgeColor = "gray";
        },3000);

        tabGroup.open();

        function createTab(title) {
            return Ti.UI.createTab({
                title: title,
                icon: "chat.png",
                window: Ti.UI.createWindow({
                    title: title
                })
            })
        }
        ```

* [TIMOB-23992](https://jira.appcelerator.org/browse/TIMOB-23992) - iOS: Disable context menu inside webview when selecting text

    * Added support to disable context menu inside WebView when selecting text

* [TIMOB-24110](https://jira.appcelerator.org/browse/TIMOB-24110) - iOS: Expose keyboardDisplayRequiresUserAction property in Ti.UI.WebView

    * Added support for the `keyboardDisplayRequiresUserAction` in `Ti.UI.WebView`

* [TIMOB-24356](https://jira.appcelerator.org/browse/TIMOB-24356) - iOS: Add missing animation transitions (top to bottom, bottom to top, cross-dissolve)

    * Added animation transitions for top to bottom, bottom to top, and cross-dissolve

* [TIMOB-24372](https://jira.appcelerator.org/browse/TIMOB-24372) - iOS: Get file path from Ti.Media.openMusicLibrary, use media identifier to Ti.Media.systemMusicPlayer

    * Added support for all missing `Ti.Media.Item` properties and the ability to play Apple Music items in the `Ti.Media.AudioPlayer`

#### Windows platform

* [TIMOB-19935](https://jira.appcelerator.org/browse/TIMOB-19935) - Windows: Implement Ti.Network.Socket.TCP

    * Implemented `Ti.Network.Socket.TCP`

* [TIMOB-23388](https://jira.appcelerator.org/browse/TIMOB-23388) - Windows: autoLink URLs support for Ti.UI.Label

    * Support autoLink URLs for `Ti.UI.Label`

* [TIMOB-24093](https://jira.appcelerator.org/browse/TIMOB-24093) - Windows: Modularize Hyperloop

    * Add support for Hyperloop on Windows

* [TIMOB-24245](https://jira.appcelerator.org/browse/TIMOB-24245) - Windows: listview.scrollToItem not working

    * Implemented `listview.scrollToItem` for Windows

#### Multiple platforms

* [TIMOB-17467](https://jira.appcelerator.org/browse/TIMOB-17467) - iOS/Android: Expose request-headers for WebView

    * Added capability to add custom request-header to `Ti.UI.WebView` request

* [TIMOB-20286](https://jira.appcelerator.org/browse/TIMOB-20286) - Support getElementById method to lookup views by ID

    * Added capability for the `getElementById` method to lookup views by ID

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: '#fff'
        });

        var container = Ti.UI.createView({
            width: 300,
            height: 300,
            backgroundColor: 'red'
        });

        var btn = Ti.UI.createButton({
            title: 'Get view by ID',
            id: 'myButton'
        });

        btn.addEventListener('click', function () {
            var myButton = win.getViewById('myButton');

            // If no button is found, it will return null
            if (myButton) {
                myButton.setTitle('Worked! ');
            }
        });

        container.add(btn);
        win.add(container);
        win.open();
        ```

### Community credits

* [Ivo Tasevski](https://github.com/auda2016) for his help on Android: Mime-type in Ti.Media.openPhotoGallery() ([TIMOB-23898](https://jira.appcelerator.org/browse/TIMOB-23898))

* [Carlos Henrique Zinato](https://github.com/chmiiller) for iOS: Expose Ti.UI.Label maxLines (Parity) ([TIMOB-24071](https://jira.appcelerator.org/browse/TIMOB-24071))

* Thomas Neerup Andersen for Android: Ti.TouchID fails on SDK < 23 ([TIMOB-24230](https://jira.appcelerator.org/browse/TIMOB-24230))

* [Luc-Edmond Gaspard](https://github.com/gaspardle) for Android: Add support for the roundIcon attribute ([TIMOB-24659](https://jira.appcelerator.org/browse/TIMOB-24659))

* [Uriel Lizama](https://github.com/ulizama) for iOS CLI: Improve the way dist-appstore build works ([TIMOB-24565](https://jira.appcelerator.org/browse/TIMOB-24565))

* [Flavio Maria De Stefano](https://github.com/kopiro) for

    * Android: ImageView quality (gradient banding) ([TIMOB-24465](https://jira.appcelerator.org/browse/TIMOB-24465))

    * iOS: Multiple Webviews with same local URL does not inject Titanium XHR bridge properly ([TIMOB-24259](https://jira.appcelerator.org/browse/TIMOB-24259))

    * iOS: Expose keyboardDisplayRequiresUserAction property in Ti.UI.WebView ([TIMOB-24110](https://jira.appcelerator.org/browse/TIMOB-24110))

    * iOS: Label doesn't fire link event correctly ([TIMOB-24086](https://jira.appcelerator.org/browse/TIMOB-24086))

    * iOS: Expose SystemAlert ([TIMOB-5436](https://jira.appcelerator.org/browse/TIMOB-5436))

* [Kiley Williams](https://github.com/mrkiley) for Android: Ti.Calendar.Calendar.getEventsBetweenDates returns same events for all calendars ([TIMOB-24464](https://jira.appcelerator.org/browse/TIMOB-24464))

* [Michael Gangolf](https://github.com/m1ga) for

    * TiAPI: Enable ScrollView.smoothScrollTo(x,y) method ([TIMOB-24411](https://jira.appcelerator.org/browse/TIMOB-24411))

    * Android: Small device textfield issue in landscape mode ([TIMOB-16005](https://jira.appcelerator.org/browse/TIMOB-16005))

    * Android: androidback event not working in Ti SDK 6.0.0.GA ([TIMOB-24253](https://jira.appcelerator.org/browse/TIMOB-24253))

    * Docs: Title in ListView example rendered wrong

    * Android: Adding getLocationOnScreen() to retrieve location after translation ([TIMOB-24190](https://jira.appcelerator.org/browse/TIMOB-24190))

    * Android: Update TableView/ListView accessory images, fix spacing ([TIMOB-24174](https://jira.appcelerator.org/browse/TIMOB-24174))

    * Android: Null pointer exception in destroyRunners() of Android.Service ([TIMOB-24159](https://jira.appcelerator.org/browse/TIMOB-24159))

    * Android: Add property to release space when hiding an object ([TIMOB-23974](https://jira.appcelerator.org/browse/TIMOB-23974))

    * iOS/Android: Add 'scrolling' event to ListView to track scroll direction (up or down) ([TIMOB-23406](https://jira.appcelerator.org/browse/TIMOB-23406))

    * Android HTTPClient onsendstream progress is wrong ([TIMOB-20483](https://jira.appcelerator.org/browse/TIMOB-20483))

* [Christoph Eck](https://github.com/chreck) for

    * iOS: WebView - load a webpage with request headers ([TIMOB-24397](https://jira.appcelerator.org/browse/TIMOB-24397))

    * iOS: setting additional request header disallows POST form requests ([TIMOB-24329](https://jira.appcelerator.org/browse/TIMOB-24329))

* [Dongwoo Gim](https://github.com/gimdongwoo) for Android: Child view's percent width incorrect of horizontal layout parent view (6.1.0 regression) ([TIMOB-24308](https://jira.appcelerator.org/browse/TIMOB-24308))

* [Brianggalvez](https://github.com/Brianggalvez) for Allow Multiple Selection When Editing in ListView

* [Graziano Grespan](https://github.com/grazianogrespan) for Android: SearchView: “change” event is fired on SearchView first initialization ([TIMOB-24322](https://jira.appcelerator.org/browse/TIMOB-24322))

* [Richard Lustemberg](https://github.com/rlustemberg) for

    * Ti.UI.iOS.LivePhotoView does not update it's layout when it's livePhoto property is updated ([TIMOB-24249](https://jira.appcelerator.org/browse/TIMOB-24249))

    * iOS/Android: Add 'scrolling' event to ListView to track scroll direction (up or down) ([TIMOB-23406](https://jira.appcelerator.org/browse/TIMOB-23406))

* [Tim Ma](https://github.com/snakewa) for 6.1.0.v20161006012211-osx iOS App Store distribution build fail

* [Dulmandakh](https://github.com/dulmandakh) for Android: Expose "setProgress" method in Ti.Android.Notification ([TIMOB-23991](https://jira.appcelerator.org/browse/TIMOB-23991))

* [Rene Pot](https://github.com/Topener) for getResponseHeaders method is missing from docs ([TIDOC-2628](https://jira.appcelerator.org/browse/TIDOC-2628))

* [Hazem Khaled](https://github.com/HazemKhaled) for [Ti.Platform.name](http://ti.platform.name/) return value not documented since 5.5.0 ([TIDOC-2611](https://jira.appcelerator.org/browse/TIDOC-2611))

* [Andrew Greenstreet](https://github.com/gstreetmedia) for Android: Remove Default Sound Effect when touchEnabled = false ([TIMOB-16080](https://jira.appcelerator.org/browse/TIMOB-16080))

### Fixed issues patch releases

#### Android platform

* [TIMOB-3887](https://jira.appcelerator.org/browse/TIMOB-3887) - Android: Image taken in portrait orients itself to landscape

* [TIMOB-8430](https://jira.appcelerator.org/browse/TIMOB-8430) - Android: TimePicker - Switching between am and pm time does not makes changes in time format on the top of the page

* [TIMOB-14285](https://jira.appcelerator.org/browse/TIMOB-14285) - Android: applyProperties() does not apply custom properties to proxy

* [TIMOB-15890](https://jira.appcelerator.org/browse/TIMOB-15890) - Android: Text shadow not working as expected

* [TIMOB-17954](https://jira.appcelerator.org/browse/TIMOB-17954) - Android: ScrollView's ScrollTo(x,y) incorrect behavior (Parity)

* [TIMOB-19035](https://jira.appcelerator.org/browse/TIMOB-19035) - Android: Ti.UI.SIZE on ScrollableView not working

* [TIMOB-19629](https://jira.appcelerator.org/browse/TIMOB-19629) - Android: Buttons stay uppercased in UI

* [TIMOB-19984](https://jira.appcelerator.org/browse/TIMOB-19984) - Android: transform animation doesn't work immediately after creating a view android

* [TIMOB-20448](https://jira.appcelerator.org/browse/TIMOB-20448) - Android: Adding text color to a singular row adds the color to multiple down the list

* [TIMOB-20483](https://jira.appcelerator.org/browse/TIMOB-20483) - Android HTTPClient onsendstream progress is wrong

* [TIMOB-20490](https://jira.appcelerator.org/browse/TIMOB-20490) - Android: Apps should be able to open/resume and respond to intents

* [TIMOB-20502](https://jira.appcelerator.org/browse/TIMOB-20502) - Using Android shortcut to start new activity fails to detect Alloy.

* [TIMOB-23135](https://jira.appcelerator.org/browse/TIMOB-23135) - Android: Ti.Geolocation.locationServicesEnabled returns false, but works

* [TIMOB-23428](https://jira.appcelerator.org/browse/TIMOB-23428) - Android: Ti.Media.Sound method 'setUrl' not working

* [TIMOB-23556](https://jira.appcelerator.org/browse/TIMOB-23556) - Android: Update the Android package.json in the sdk to support Android build tools 24

* [TIMOB-23646](https://jira.appcelerator.org/browse/TIMOB-23646) - Android: Button source missing properties on bubbleParent event.

* [TIMOB-23715](https://jira.appcelerator.org/browse/TIMOB-23715) - Android: Memory leak when window has listView inside

* [TIMOB-23873](https://jira.appcelerator.org/browse/TIMOB-23873) - Android: Template for Manifest needs updating

* [TIMOB-23881](https://jira.appcelerator.org/browse/TIMOB-23881) - Android: Analytics not enabled when root activity is not launched

* [TIMOB-23885](https://jira.appcelerator.org/browse/TIMOB-23885) - Android WebView Video stays black sound only

* [TIMOB-23898](https://jira.appcelerator.org/browse/TIMOB-23898) - Android: Mime-type in Ti.Media.openPhotoGallery() is always image/bitmap

* [TIMOB-24039](https://jira.appcelerator.org/browse/TIMOB-24039) - Android: ti.map.PolylineProxy cannot be cast to ti.map.PolygonProxy when adding polyline to map

* [TIMOB-24048](https://jira.appcelerator.org/browse/TIMOB-24048) - Android: Window transition animations are not working as expected

* [TIMOB-24058](https://jira.appcelerator.org/browse/TIMOB-24058) - Android: backgroundSelectedColor & backgroundSelectedImage property does not work for tableviewrow

* [TIMOB-24082](https://jira.appcelerator.org/browse/TIMOB-24082) - Ti.Media.soundPlayer is not working on Android KitKat (4.4)

* [TIMOB-24095](https://jira.appcelerator.org/browse/TIMOB-24095) - Android: Cannot set HTML property in WebViews

* [TIMOB-24149](https://jira.appcelerator.org/browse/TIMOB-24149) - Android: Remove redundant Ti.UI.Window url property code

* [TIMOB-24158](https://jira.appcelerator.org/browse/TIMOB-24158) - Android: Ti.UI.TableViewRow not shown in 6.1.0 (Regression)

* [TIMOB-24159](https://jira.appcelerator.org/browse/TIMOB-24159) - Android: Null pointer exception in destroyRunners() of Android.Service

* [TIMOB-24161](https://jira.appcelerator.org/browse/TIMOB-24161) - Android: Ti.UI.AlertDialog.androidView doesn't work when borderRadius is set

* [TIMOB-24177](https://jira.appcelerator.org/browse/TIMOB-24177) - Android : TiHTTPClient / Request Length Expected Wrong (6.1.0 regression)

* [TIMOB-24192](https://jira.appcelerator.org/browse/TIMOB-24192) - Android: PickerRow.setColor is not a function

* [TIMOB-24204](https://jira.appcelerator.org/browse/TIMOB-24204) - Android: require() not working with Android if path has ../ after Titanium SDK 6.0.0+

* [TIMOB-24225](https://jira.appcelerator.org/browse/TIMOB-24225) - Android: close event is not fired when a window is closed

* [TIMOB-24231](https://jira.appcelerator.org/browse/TIMOB-24231) - Android: Clean module build folder appropriately

* [TIMOB-24232](https://jira.appcelerator.org/browse/TIMOB-24232) - Android: Module build should not error when incompatible native libraries are in the 'libs' folder

* [TIMOB-24233](https://jira.appcelerator.org/browse/TIMOB-24233) - Android: tabsBackgroundColor is not working.

* [TIMOB-24244](https://jira.appcelerator.org/browse/TIMOB-24244) - Android: Large file uploads fail with java.lang.OutOfMemoryError

* [TIMOB-24246](https://jira.appcelerator.org/browse/TIMOB-24246) - Android: Use SecureRandom for SSLContext

* [TIMOB-24250](https://jira.appcelerator.org/browse/TIMOB-24250) - Android: TextField AUTOCAPITALIZATION\_ALL property doesn't work with googles new keyboard: GBoard

* [TIMOB-24262](https://jira.appcelerator.org/browse/TIMOB-24262) - Android : Crash when Try to remove view from parents.

* [TIMOB-24277](https://jira.appcelerator.org/browse/TIMOB-24277) - Android: ListView horizontal layout ignores 'right'

* [TIMOB-24322](https://jira.appcelerator.org/browse/TIMOB-24322) - Android: SearchView: “change” event is fired on SearchView first initialization.

* [TIMOB-24344](https://jira.appcelerator.org/browse/TIMOB-24344) - Android: hdpi is mapped to incorrect value 213 in DisplayCapsProxy.java

* [TIMOB-24347](https://jira.appcelerator.org/browse/TIMOB-24347) - Android: Get image frames at times out of local video

* [TIMOB-24367](https://jira.appcelerator.org/browse/TIMOB-24367) - Android: Going back to the tabgroup with android back button crashes app with "java.lang.NullPointerException: Attempt to invoke virtual method 'java.lang.Object ti.modules.titanium.ui.TabGroupProxy.getProperty(java.lang.String)"

* [TIMOB-24407](https://jira.appcelerator.org/browse/TIMOB-24407) - Android: calendarViewShown does not work on Lollipop and above

* [TIMOB-24413](https://jira.appcelerator.org/browse/TIMOB-24413) - Android: Ti.TouchID crashes app on unsupported devices

* [TIMOB-24417](https://jira.appcelerator.org/browse/TIMOB-24417) - LiveView: App does not refresh after second time on android 7.0 & above

* [TIMOB-24428](https://jira.appcelerator.org/browse/TIMOB-24428) - Android: Titanium.UI.View.center setter does not work

* [TIMOB-24459](https://jira.appcelerator.org/browse/TIMOB-24459) - Android: Can’t remove unused permissions from AndroidManifest.xml using Ti SDK 6.x

* [TIMOB-24464](https://jira.appcelerator.org/browse/TIMOB-24464) - Android: Ti.Calendar.Calendar.getEventsBetweenDates returns same events for all calendars

* [TIMOB-24654](https://jira.appcelerator.org/browse/TIMOB-24654) - Android: Hybrid CommonJS and Native Modules don't export the commonjs code

* [TIMOB-24660](https://jira.appcelerator.org/browse/TIMOB-24660) - Android: openPhotoGallery is not working for downloads

* [TIMOB-24667](https://jira.appcelerator.org/browse/TIMOB-24667) - Android: borderRadius doesn't clip the backgroundColor on android 4.1.x, 4.2.x on SDK 6+

* [TIMOB-24681](https://jira.appcelerator.org/browse/TIMOB-24681) - Android: AVD detection fails if matching SDK is not installed

* [TIMOB-24698](https://jira.appcelerator.org/browse/TIMOB-24698) - Android: Unable to find default AVD emulator from CLI

* [TIMOB-24703](https://jira.appcelerator.org/browse/TIMOB-24703) - Android: Missing R class for modules

* [TIMOB-24712](https://jira.appcelerator.org/browse/TIMOB-24712) - Android: SDK 6.1.0.RC doesnt honor custom\_theme.xml colorPrimary setting

* [TIMOB-24728](https://jira.appcelerator.org/browse/TIMOB-24728) - Crash when closing a window with a TableView on Android

* [TIMOB-24733](https://jira.appcelerator.org/browse/TIMOB-24733) - Android: Missing --no-version-vectors options for AAPT in during app builds

* [TIMOB-24734](https://jira.appcelerator.org/browse/TIMOB-24734) - Android: Duplicate resources with .aar and Hyperloop enabled

* [TIMOB-24737](https://jira.appcelerator.org/browse/TIMOB-24737) - Android: Reading property "WebView.disableContextMenu" causes crash if never assigned

#### iOS platform

* [TIMOB-3408](https://jira.appcelerator.org/browse/TIMOB-3408) - iOS: Expose Ti.UI.Label.textAlign "justify"

* [TIMOB-7855](https://jira.appcelerator.org/browse/TIMOB-7855) - iOS: Ti.Gesture.landscape and Ti.Gesture.portrait are undefined

* [TIMOB-9007](https://jira.appcelerator.org/browse/TIMOB-9007) - iOS: UI.Switch - does not display if value is not set when rendered

* [TIMOB-10488](https://jira.appcelerator.org/browse/TIMOB-10488) - iOS: webView.loading always returns null

* [TIMOB-14763](https://jira.appcelerator.org/browse/TIMOB-14763) - iOS: titleid and messageid properties don't work for AlertDialog

* [TIMOB-16100](https://jira.appcelerator.org/browse/TIMOB-16100) - iOS9: TextField with passwordMask & fontFamily changes its fontSize

* [TIMOB-18276](https://jira.appcelerator.org/browse/TIMOB-18276) - UI.Notification.setMessage function is not found even though it is documented

* [TIMOB-19241](https://jira.appcelerator.org/browse/TIMOB-19241) - iOS: Keyboard loses focus after 1 character when TextField is in a TableView TableViewRow

* [TIMOB-19924](https://jira.appcelerator.org/browse/TIMOB-19924) - iOS: "onclick" event is not triggered in the WebView if you are listening to multiple "click" events

* [TIMOB-20482](https://jira.appcelerator.org/browse/TIMOB-20482) - iOS: WebView converting spaces into extra lines

* [TIMOB-20506](https://jira.appcelerator.org/browse/TIMOB-20506) - iOS: Ti.App.Properties.setList failes when array element is object with null property

* [TIMOB-20513](https://jira.appcelerator.org/browse/TIMOB-20513) - iOS: Activity indicator label cut off when auto layout is enabled

* [TIMOB-20623](https://jira.appcelerator.org/browse/TIMOB-20623) - iOS: The application has crashed with an uncaught exception 'org.voya\_crash.TiUITabProxy'

* [TIMOB-23542](https://jira.appcelerator.org/browse/TIMOB-23542) - Memory-leaks and warnings across the iOS-project

* [TIMOB-23391](https://jira.appcelerator.org/browse/TIMOB-23391) - iOS: View is not getting horizontally wrapped properly.

* [TIMOB-23666](https://jira.appcelerator.org/browse/TIMOB-23666) - iOS: Button setting remote backgroundImage doesn't appear to work

* [TIMOB-23810](https://jira.appcelerator.org/browse/TIMOB-23810) - iOS: Delay in firing click event listener on View when using run-on-main-thread

* [TIMOB-23887](https://jira.appcelerator.org/browse/TIMOB-23887) - Attributed string link on a TextArea doesn't fire link event

* [TIMOB-23916](https://jira.appcelerator.org/browse/TIMOB-23916) - iOS: After taking picture from landscape mode showing white color on top and bottom portion.

* [TIMOB-23929](https://jira.appcelerator.org/browse/TIMOB-23929) - Rename contextId to stop confusing Apple's private API scan

* [TIMOB-23934](https://jira.appcelerator.org/browse/TIMOB-23934) - iOS: The first view-children not firing click-events when using run-on-main-thread

* [TIMOB-23960](https://jira.appcelerator.org/browse/TIMOB-23960) - iOS: Application crashes from background-notifications when delegate method is not implemented

* [TIMOB-23997](https://jira.appcelerator.org/browse/TIMOB-23997) - iOS and Android revert incorrect CommonJS module changes

* [TIMOB-24015](https://jira.appcelerator.org/browse/TIMOB-24015) - Camera preview on app has red line across screen

* [TIMOB-24067](https://jira.appcelerator.org/browse/TIMOB-24067) - iOS: List view crash when deleting rows with "pruneSectionsOnEdit" set

* [TIMOB-24086](https://jira.appcelerator.org/browse/TIMOB-24086) - iOS: Label doesn't fire link event correctly

* [TIMOB-24141](https://jira.appcelerator.org/browse/TIMOB-24141) - iOS: TiBlob.imageAsResized resizing the Blob image but file size is very high (JPG)

* [TIMOB-24196](https://jira.appcelerator.org/browse/TIMOB-24196) - iOS: Debugging app with Safari throws error when adding event-listeners

* [TIMOB-24203](https://jira.appcelerator.org/browse/TIMOB-24203) - iOS: TextField ignores backgroundColor when borderStyle set

* [TIMOB-24249](https://jira.appcelerator.org/browse/TIMOB-24249) - Ti.UI.iOS.LivePhotoView does not update it's layout when it's livePhoto property is updated

* [TIMOB-24259](https://jira.appcelerator.org/browse/TIMOB-24259) - iOS: Multiple Webviews with same local URL does not inject Titanium XHR bridge properly

* [TIMOB-24273](https://jira.appcelerator.org/browse/TIMOB-24273) - iOS: Overwriting existing event listeners only calls the last one (Regression from 6.0.1)

* [TIMOB-24320](https://jira.appcelerator.org/browse/TIMOB-24320) - iOS: Removing a TableView with headerView may cause the app to crash

* [TIMOB-24329](https://jira.appcelerator.org/browse/TIMOB-24329) - iOS: setting additional request header disallows POST form requests

* [TIMOB-24352](https://jira.appcelerator.org/browse/TIMOB-24352) - iOS: Add MaskedImage, BlurView, LivePhotoView and and ButtonBar API's to ListView template types

* [TIMOB-24358](https://jira.appcelerator.org/browse/TIMOB-24358) - iOS: Ti.Media.systemMusicPlayer crashes with Apple Music

* [TIMOB-24361](https://jira.appcelerator.org/browse/TIMOB-24361) - iOS: Using rgb color values causing a false warning, Android: 2-digit float-values do not work

* [TIMOB-24397](https://jira.appcelerator.org/browse/TIMOB-24397) - iOS: WebView - load a webpage with request headers

* [TIMOB-24474](https://jira.appcelerator.org/browse/TIMOB-24474) - iOS: Animate object's opacity with animate({}) method don't change the opacity property

* [TIMOB-24484](https://jira.appcelerator.org/browse/TIMOB-24484) - iOS: Bundle images are copied to asset catalog when using app-thinning, causing apps to crash

* [TIMOB-24489](https://jira.appcelerator.org/browse/TIMOB-24489) - iOS: Ti.TouchID - Callback error with Ti.Network.createHTTPClient

* [TIMOB-24525](https://jira.appcelerator.org/browse/TIMOB-24525) - ioslib: Error detecting simulators when Xcode is not installed

* [TIMOB-24535](https://jira.appcelerator.org/browse/TIMOB-24535) - iOS: Ti.Geolocation Speed returning incorrect number or -1 for speed

* [TIMOB-24663](https://jira.appcelerator.org/browse/TIMOB-24663) - iOS: App with "More" tab crashes on tapping (6.0.4.GA)

#### Windows platform

* [TIMOB-23319](https://jira.appcelerator.org/browse/TIMOB-23319) - Windows: Ti.Platform.openURL does not open some media files

* [TIMOB-23547](https://jira.appcelerator.org/browse/TIMOB-23547) - Windows: Not all emulators shown when building with mismatched SDKs

* [TIMOB-23613](https://jira.appcelerator.org/browse/TIMOB-23613) - CLI: Encryption process fails on Windows with spawn ENAMETOOLONG on a large amount of files

* [TIMOB-23678](https://jira.appcelerator.org/browse/TIMOB-23678) - Windows: Device is unable to connect to LiveView server

* [TIMOB-23682](https://jira.appcelerator.org/browse/TIMOB-23682) - Windows: borderRadius for ProgressBar

* [TIMOB-23728](https://jira.appcelerator.org/browse/TIMOB-23728) - Windows: Items missing in parity report

* [TIMOB-23758](https://jira.appcelerator.org/browse/TIMOB-23758) - Windows: Unable to build to 10.0.10586 emulator after installing Windows SDK 10.0.14393

* [TIMOB-23785](https://jira.appcelerator.org/browse/TIMOB-23785) - Windows: Error thrown when updating list section item that doesn't exist

* [TIMOB-23832](https://jira.appcelerator.org/browse/TIMOB-23832) - Windows: Proximity sensor not included in auto-generated capabilities

* [TIMOB-23879](https://jira.appcelerator.org/browse/TIMOB-23879) - Windows: Unexpected behaviour when rebuilding an app and app is already open on device

* [TIMOB-23976](https://jira.appcelerator.org/browse/TIMOB-23976) - Windows: Unable to build to a Windows 10 device if no Windows 10 emulators are installed

* [TIMOB-23977](https://jira.appcelerator.org/browse/TIMOB-23977) - Windows: Invalid value returned for Ti.App.getSessiondId

* [TIMOB-24103](https://jira.appcelerator.org/browse/TIMOB-24103) - Windows: Tabgroup disappears when navigating back from an opened window

* [TIMOB-24104](https://jira.appcelerator.org/browse/TIMOB-24104) - Windows: appendrow does not work on a tableview with no data

* [TIMOB-24125](https://jira.appcelerator.org/browse/TIMOB-24125) - Windows: Calling insertRowBefore with an existing row causes application to freeze

* [TIMOB-24130](https://jira.appcelerator.org/browse/TIMOB-24130) - Windows: Labels in a tableviewrow are not sized correctly

* [TIMOB-24132](https://jira.appcelerator.org/browse/TIMOB-24132) - Windows: touchmove event not fired on tableview

* [TIMOB-24134](https://jira.appcelerator.org/browse/TIMOB-24134) - Windows: tableview.data/getData does not return a tableviewsection

* [TIMOB-24147](https://jira.appcelerator.org/browse/TIMOB-24147) - Windows: Unable to "new" EasClientDeviceInformation

* [TIMOB-24185](https://jira.appcelerator.org/browse/TIMOB-24185) - Windows: console log not printing right arguments

* [TIMOB-24222](https://jira.appcelerator.org/browse/TIMOB-24222) - Universal Windows App (UWP): ScrollView doesn't scroll vertically when the content is larger then height

* [TIMOB-24223](https://jira.appcelerator.org/browse/TIMOB-24223) - Universal Windows App (UWP) not getting the correct [source.id](http://source.id/)

* [TIMOB-24226](https://jira.appcelerator.org/browse/TIMOB-24226) - Windows: Phone TCP Write Error

* [TIMOB-24239](https://jira.appcelerator.org/browse/TIMOB-24239) - Windows: zIndex property/method applied but without any effect

* [TIMOB-24252](https://jira.appcelerator.org/browse/TIMOB-24252) - Windows: touchEnabled property/method applied but without any effect

* [TIMOB-24285](https://jira.appcelerator.org/browse/TIMOB-24285) - Windows: Build fails when no target is specified

* [TIMOB-24299](https://jira.appcelerator.org/browse/TIMOB-24299) - Universal Windows App (UWP): Unable to render different fonts

* [TIMOB-24328](https://jira.appcelerator.org/browse/TIMOB-24328) - UniversalWindowsApp: touchEnabled: false does not disable button

* [TIMOB-24336](https://jira.appcelerator.org/browse/TIMOB-24336) - Windows: App crashes when Ti.Network.Socket.TCP fails to connect

* [TIMOB-24371](https://jira.appcelerator.org/browse/TIMOB-24371) - UniversalWindowsApp: Textfield's return event fires twice

* [TIMOB-24385](https://jira.appcelerator.org/browse/TIMOB-24385) - Windows: Ti.Network.Socket.TCP.readAsync() is not continuous

* [TIMOB-24554](https://jira.appcelerator.org/browse/TIMOB-24554) - Windows: Ti.UI.FILL resizes Label incorrectly

* [TIMOB-24583](https://jira.appcelerator.org/browse/TIMOB-24583) - Windows: Native view should use absolute position in Ti View

* [TIMOB-24595](https://jira.appcelerator.org/browse/TIMOB-24595) - Windows: Hyperloop addEventListener doesn't work

* [TIMOB-24603](https://jira.appcelerator.org/browse/TIMOB-24603) - Windows: Remove all children is not working on windows devices

* [TIMOB-24615](https://jira.appcelerator.org/browse/TIMOB-24615) - Windows -HTTPClient - responseText is not cleared between two requests

* [TIMOB-24634](https://jira.appcelerator.org/browse/TIMOB-24634) - (Windows) Unable to run a Windows application using the 6.1.0.v20170426072049 build

* [TIMOB-24651](https://jira.appcelerator.org/browse/TIMOB-24651) - Windows: Hyperloop unable to compile generic collections

* [TIMOB-24656](https://jira.appcelerator.org/browse/TIMOB-24656) - Windows: Failed to install app on device

* [TIMOB-24689](https://jira.appcelerator.org/browse/TIMOB-24689) - (Windows) Unable to build for Android on 6.0.4.GA

* [TIMOB-24699](https://jira.appcelerator.org/browse/TIMOB-24699) - LiveView: Alloy app errors out when built for Windows

#### Multiple platforms

* [TIMOB-20247](https://jira.appcelerator.org/browse/TIMOB-20247) - Regression in android HTTPClient

* [TIMOB-20544](https://jira.appcelerator.org/browse/TIMOB-20544) - Align permission methods Ti.Media.AudioRecorder with the others

* [TIMOB-23490](https://jira.appcelerator.org/browse/TIMOB-23490) - Packaged JavaScript and Hybrid Modules: it doesn't work properly

* [TIMOB-23999](https://jira.appcelerator.org/browse/TIMOB-23999) - CLI: Building a module on Windows errors with 'Missing required manifest key "name"'

* [TIMOB-24181](https://jira.appcelerator.org/browse/TIMOB-24181) - Parity: ListItem properties set to undefined/null have inconsistent results on iOS and Android

* [TIMOB-24642](https://jira.appcelerator.org/browse/TIMOB-24642) - TiAPI: Require call in a node\_modules directory causes infinite loop

* [TIMOB-24662](https://jira.appcelerator.org/browse/TIMOB-24662) - CLI: Build errors out with "Couldn't find preset "babili" relative to directory" when deploy type is test

* [TIMOB-24691](https://jira.appcelerator.org/browse/TIMOB-24691) - Forked correct SDK command args doesn't resolve platform when using short flag

* [TIMOB-24693](https://jira.appcelerator.org/browse/TIMOB-24693) - LiveView: Incorrect argument checked for custom IP

### Improvements

* [TIMOB-1618](https://jira.appcelerator.org/browse/TIMOB-1618) - Android: Expose Ti.UI.Label.minimumFontSize for Parity

    * Added support for the `minimumFontSize`property in`Ti.UI.Label`

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: 'white'
        });

        var label = Ti.UI.createLabel({
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
            minimumFontSize: 6,
            width: 200,
            height: 30,
            color: "#333"
        });

        win.add(label);
        win.open();
        ```

* [TIMOB-16080](https://jira.appcelerator.org/browse/TIMOB-16080) - Android: Remove Default Sound Effect when touchEnabled = false

    * Added new property called `PROPERTY_TOUCH_SOUND_ENABLED` that allows for the separation of functionality of clicking on a window and toggling the default sound (defaults to on) which can be specified by the user

* [TIMOB-19482](https://jira.appcelerator.org/browse/TIMOB-19482) - Parity: Ti.UI.View.add should support array of views on Android as iOS

    * Added support for passing arrays to `Ti.UI.View.Add`

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: "#fff"
        });
        var btn1 = Ti.UI.createButton({
            title: "Add views together",
            top: 0
        });

        var view1 = Ti.UI.createView({
            backgroundColor: "red",
            top: 50,
            height: 100
        });
        var view2 = Ti.UI.createView({
            backgroundColor: "green",
            bottom: 50,
            height: 100
        });

        btn1.addEventListener("click", function() {
            win.remove(view1);
            win.remove(view2);

            // Just to see that they are actually removed before
            setTimeout(function() {
                win.add([view1, view2]);
            }, 250);
        });

        var btn2 = Ti.UI.createButton({
            title: "Add views after each other",
            bottom: 0
        });

        btn2.addEventListener("click", function() {
            win.remove(view1);
            win.remove(view2);

            // Just to see that they are actually removed before
            setTimeout(function() {
                win.add(view1);
                win.add(view2);
            }, 250);
        });

        win.add(btn1);
        win.add(btn2);

        win.open();
        ```

* [TIMOB-19985](https://jira.appcelerator.org/browse/TIMOB-19985) - Android - ListView doesn't have canScroll property

    * Implemented `canScroll` property in ListView for Android

* [TIMOB-23193](https://jira.appcelerator.org/browse/TIMOB-23193) - Windows: Change target specific build options into target agnostic build options

    * Deprecated the commands for `wp-*` and `ws-*`

    * The following replaces the deprecated commands:

        * ws-cert > win-cert

        * wp-sdk > win-sdk

        * wp-product-guid > win-product-guid

* [TIMOB-23206](https://jira.appcelerator.org/browse/TIMOB-23206) - iOS: Unable to Retrieve Detailed Calendar Information via Ti.Calendar.CalendarOS: Refactor default new app-projects

    * Added support for retrieving source details in calendar events

    * Demo:

        ```javascript
        function showCalendars(calendars) {
            for (var i = 0; i < calendars.length; i++) {
                Ti.API.info(calendars[i].name);
                Ti.API.info(calendars[i].sourceTitle);
                Ti.API.info(calendars[i].sourceIdentifier);
                Ti.API.info(formatSourceType(calendars[i].sourceType)+ '\n');
            }
        }

         function formatSourceType(type) {
            switch (type) {
                case Ti.Calendar.SOURCE_TYPE_LOCAL:
                return "Ti.Calendar.SOURCE_TYPE_LOCAL";

                case Ti.Calendar.SOURCE_TYPE_EXCHANGE:
                return "Ti.Calendar.SOURCE_TYPE_EXCHANGE";

                case Ti.Calendar.SOURCE_TYPE_CALDAV:
                return "Ti.Calendar.SOURCE_TYPE_CALDAV";

                case Ti.Calendar.SOURCE_TYPE_MOBILEME:
                return "Ti.Calendar.SOURCE_TYPE_MOBILEME";

                case Ti.Calendar.SOURCE_TYPE_SUBSCRIBED:
                return "Ti.Calendar.SOURCE_TYPE_SUBSCRIBED";

                case Ti.Calendar.SOURCE_TYPE_BIRTHDAYS:
                return "Ti.Calendar.SOURCE_TYPE_BIRTHDAYS";
            }

            return "Unknown attendee role: " + type;
        }

        Ti.API.info('ALL CALENDARS:'+'\n');
        if (Ti.Calendar.hasCalendarPermissions()) {
            showCalendars(Ti.Calendar.allCalendars);
        } else {
            Ti.Calendar.requestCalendarPermissions(function(e) {
                if (e.success) {
                    showCalendars(Ti.Calendar.allCalendars);
                } else {
                    Ti.API.error(e.error);
                    alert('Access to calendar is not allowed');
                }
            });
        }
        ```

* [TIMOB-23281](https://jira.appcelerator.org/browse/TIMOB-23281) - Search Bar: search results listview background color change

    * Added option to style the search results in `Ti.UI.ListView`

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
            backgroundColor: '#000',
            fullscreen: true
        });
        var search = Ti.UI.createSearchBar({
            barColor: '#000',
            showCancel: true,
            height: 43,
            top: 0,
        });
        search.addEventListener('cancel', function() {
            search.blur();
        });

        var listView = Ti.UI.createListView({
            searchView: search,
            caseInsensitiveSearch: true,
            backgroundColor: 'transparent',

            // NEW since 6.1.0
            resultsBackgroundColor: "red",
            resultsSeparatorColor: "green",
            resultsSeparatorInsets: {
                left: 0
            },

            templates: {
                "a": {
                    properties: {
                        backgroundColor: 'transparent'
                    },
                    childTemplates: [{
                        type: 'Ti.UI.Label',
                        bindId: 'bindLabel',
                        properties: {
                            color: '#fff'
                        }

                    }]
                }
            }
        });

        var listSection = Ti.UI.createListSection();
        var fruits = ['Papaya', 'Peach', 'Pear', 'Persimmon', 'Pineapple', 'Pluot', 'Pomegranate'];
        var data = [];
        for (var i = 0; i < fruits.length; i++) {
            data.push({
                template: 'a',
                properties: {
                    searchableText: fruits[i]
                },
                bindLabel: {
                    text: fruits[i]
                }
            });
        }
        listSection.setItems(data);
        listView.addEventListener('noresults', function(e) {
            alert("No results found!");
        });
        listView.sections = [listSection];
        win.add(listView);
        win.open();
        ```

* [TIMOB-23327](https://jira.appcelerator.org/browse/TIMOB-23327) - iOS: Webview request send out beforeload event is excuted on Webview (Parity)

    * Handle blacklisted URL's on iOS (Parity with Android)

* [TIMOB-23331](https://jira.appcelerator.org/browse/TIMOB-23331) - Windows: Implement Ti.UI.TableView filter properties

    * Implemented `filterAttribute`, `filterAnchored`, and filterCaseInsensitive properties for Ti.UI.TableView

* [TIMOB-23370](https://jira.appcelerator.org/browse/TIMOB-23370) - Windows: Log the Windows SDK version being built with

    * Display SDK version being built with Windows

* [TIMOB-23406](https://jira.appcelerator.org/browse/TIMOB-23406) - iOS/Android: Add 'scrolling' event to ListView to track scroll direction (up or down)

    * Added support to track the scroll direction in `Ti.UI.ListView`

* [TIMOB-23493](https://jira.appcelerator.org/browse/TIMOB-23493) - Android: Support #append() method on Ti.Filesystem.File

    * Added support for `Ti.Filesystem.File#append()` to the Android platform

* [TIMOB-23494](https://jira.appcelerator.org/browse/TIMOB-23494) - Android: Support #createFile() method on Ti.Filesystem.File

    * Added support for `Ti.Filesystem.File#createFile()`

* [TIMOB-23497](https://jira.appcelerator.org/browse/TIMOB-23497) - Android: Support indicatorColor and indicatorDiameter properties on Ti.UI.ActivityIndicator

    * Implement Ti.UI.ActivityIndicator's `indicatorColor` and `indicatorDiameter` properties

* [TIMOB-23621](https://jira.appcelerator.org/browse/TIMOB-23621) - Windows: Improve error message when passing an invalid number of arguments to a function

    * Improved error message when passing an invalid number of arguments to a function

* [TIMOB-23660](https://jira.appcelerator.org/browse/TIMOB-23660) - Windows: Implement Ti.UI.TableView separatorColor property

    * Implemented separatorColor property for Ti.UI.TableView

* [TIMOB-23661](https://jira.appcelerator.org/browse/TIMOB-23661) - Windows: Remove the concept of a selected Windows SDK in ti info

    * Using `appc ti config windows.wpsdk.selectedVersion <version>` changes selected Windows SDK

* [TIMOB-23683](https://jira.appcelerator.org/browse/TIMOB-23683) - Windows: Default to users OS version when building ws-local projects

    * Unless selected, `ws-local` defaults to Windows 10 OS

* [TIMOB-23759](https://jira.appcelerator.org/browse/TIMOB-23759) - Windows: Allow a user to define a target Windows version and Minimum Version in the tiapp.xml

    * Added feature to define a target version and a minimum target version in `tiapp.xml`

    * Example:

        ```xml
        <windows>
            <TargetPlatformVersion>10.0.14393.0</TargetPlatformVersion>
            <TargetPlatformMinVersion>10.0.10240.0</TargetPlatformMinVersion>
        </windows>
        ```

* [TIMOB-23760](https://jira.appcelerator.org/browse/TIMOB-23760) - Windows: --wp-sdk option should handle actual Windows SDK versions

    * CLI's `--wp-sdk` option now accepts Windows SDK versions

* [TIMOB-23799](https://jira.appcelerator.org/browse/TIMOB-23799) - iOS: Support Named Pasteboards

    * Added support to name Pasteboards

* [TIMOB-23833](https://jira.appcelerator.org/browse/TIMOB-23833) - Windows: Generate capabilities even when they are defined in tiapp.xml

    * Added support to generate capabilities even if they were not defined in the `tiapp.xml`

* [TIMOB-23931](https://jira.appcelerator.org/browse/TIMOB-23931) - Windows: Allow an event to be logged to the console for inspection

    * Added parity to log an event to the console to inspect the properties returned in the JSON payload

* [TIMOB-23988](https://jira.appcelerator.org/browse/TIMOB-23988) - iOS: Ti.Map - Add click event to "callout" bubble and return clicksource==infoWindow, deprecate showsCompass

    * Added parity for click-events on the callout bubble / info window, indicating with the clicksource being equal to "infoWindow"

    * deprecated `showsCompass` iOS property in favor of the cross-platform `compassEnabled` property

* [TIMOB-23991](https://jira.appcelerator.org/browse/TIMOB-23991) - Android: Expose "setProgress" method in Ti.Android.Notification

    * Added progress notification support

* [TIMOB-24051](https://jira.appcelerator.org/browse/TIMOB-24051) - Windows: Add the ability to remove all Ti.App.Properties at once

    * Parity for `Ti.App.Properties.removeAllProperties()`

* [TIMOB-24063](https://jira.appcelerator.org/browse/TIMOB-24063) - Windows: Allow a developer to specify required capabilities in their timodule file

    * Added support that lets developers specify required capabilities in `timodule.xml`

* [TIMOB-24071](https://jira.appcelerator.org/browse/TIMOB-24071) - iOS: Expose Ti.UI.Label maxLines (Parity)

    * Added support for numberOfLines property on UILabel component

* [TIMOB-24085](https://jira.appcelerator.org/browse/TIMOB-24085) - iOS: Add ability to style subtitle in native UITableViewCell templates

    * Added `subtitleColor` and `selectedSubtitleColor` properties to style subtitle in native UITableViewCell templates

* [TIMOB-24097](https://jira.appcelerator.org/browse/TIMOB-24097) - Windows: Native event handling

    * Added support for native event handling for Hyperloop using `addEventListener`

* [TIMOB-24099](https://jira.appcelerator.org/browse/TIMOB-24099) - Windows: Mix WinRT APIs with Titanium APIs

    * Added support for mixing WinRT APIs with Titanium APIs

* [TIMOB-24101](https://jira.appcelerator.org/browse/TIMOB-24101) - Windows: Ability to use 3rd-party native classes

    * Added capability to use third-party dependencies in Hyperloop enabled projects

* [TIMOB-24102](https://jira.appcelerator.org/browse/TIMOB-24102) - Windows: Native method resolution and casting

    * Implemented better method overload handling with given type

* [TIMOB-24126](https://jira.appcelerator.org/browse/TIMOB-24126) - Windows: Adding a searchbar to a tableview or listview search property should also add it to the window

    * Added support to use search bar without explicitly adding to the Window

* [TIMOB-24153](https://jira.appcelerator.org/browse/TIMOB-24153) - iOS: Add parity for Ti.UI.TextField.padding

    * Added parity for `Ti.UI.TextField.padding`

* [TIMOB-24211](https://jira.appcelerator.org/browse/TIMOB-24211) - iOS: Support Ti.UI.TextArea padding (Parity)

    * Added parity for `Ti.UI.TextArea.padding`

* [TIMOB-24230](https://jira.appcelerator.org/browse/TIMOB-24230) - Android: Ti.TouchID fails on SDK < 23

    * Added support for Ti.TouchID on SDK < 23

* [TIMOB-24237](https://jira.appcelerator.org/browse/TIMOB-24237) - iOS: Add backgroundSelectedColor property (Parity)

    * Added parity for backgroundSelectedColor property

* [TIMOB-24288](https://jira.appcelerator.org/browse/TIMOB-24288) - Deprecate "onStopBlacklistedUrl" WebView event in favor of cross-platform "blacklisturl" event

    * Deprecated blacklistedUrls property in favor of `blacklisturl`

* [TIMOB-24382](https://jira.appcelerator.org/browse/TIMOB-24382) - Windows: Adding same component multiple times should not cause error

    * Fixed issue where adding the same component multiple times doesn't cause an error

* [TIMOB-24386](https://jira.appcelerator.org/browse/TIMOB-24386) - Windows: Resize Label when Window is resized

    * `Label` resizes it's content when the parent `Window` is resized

* [TIMOB-24402](https://jira.appcelerator.org/browse/TIMOB-24402) - Windows: Building module for specific platform/architecture

    * Added feature to limit target platform for module

* [TIMOB-24409](https://jira.appcelerator.org/browse/TIMOB-24409) - Android: Improve Android 6.0 permission requirements

    * Improved how permission requirements are handled for Android 6.0

* [TIMOB-24411](https://jira.appcelerator.org/browse/TIMOB-24411) - TiAPI: Enable ScrollView.smoothScrollTo(x,y) method

    * Added support for the `smoothScrollTo` method in `Ti.UI.ScrollView`

* [TIMOB-24438](https://jira.appcelerator.org/browse/TIMOB-24438) - Android: Update bundled Android libraries to 23.4.0

    * Updated bundled Android Support Libraries to version 23.4.0

* [TIMOB-24446](https://jira.appcelerator.org/browse/TIMOB-24446) - Android: Allow user to specify Android Support Library version

    * Added support to allow users to specify Android Support Library version

* [TIMOB-24454](https://jira.appcelerator.org/browse/TIMOB-24454) - Windows: Improve library integration with module

    * Improved packaging libraries for use of third party JARs

        * Every `.lib`, `.dll`, and `.winmd` file in the `lib` director will be packaged into a module and copied or linked during Ti app build

        * Every file in `platform` directory is packaged into a module and copied into Ti app so the module can overwrite file using Ti app build

* [TIMOB-24455](https://jira.appcelerator.org/browse/TIMOB-24455) - Windows: Allow custom Extensions in manifest root

    * Added support to allow [Package/Extensions](https://msdn.microsoft.com/en-us/library/windows/apps/dn934749.aspx) for package manifest

* [TIMOB-24565](https://jira.appcelerator.org/browse/TIMOB-24565) - iOS CLI: Improve the way dist-appstore build works

    * Improved the way `dist-appstore` packaging works making it easier to integrate other CLI tools such as [TiFastlane](https://github.com/ulizama/TiFastlane)

* [TIMOB-24609](https://jira.appcelerator.org/browse/TIMOB-24609) - Replace uglifyjs usage with babel to parse ES6+ code

    * Babel replaces uglifyjs to parse ES6+ code

* [TIMOB-24618](https://jira.appcelerator.org/browse/TIMOB-24618) - Windows: Replace uglify usage in build process

    * Replaced uglifyjs with Babel in the build process

* [TIMOB-24682](https://jira.appcelerator.org/browse/TIMOB-24682) - Windows: require proper document for memory leaks and tracking memory allocations

    * Added documentation for [Managing Memory and Finding Leaks#MonitoringallocationsonWindows](/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Managing_Memory_and_Finding_Leaks/#monitoring-allocations-on-windows)

### API changes

#### New APIs

The following APIs are new or have expanded platform support in Release 6.1.0 as of May 26th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.Notification.setProgress | method | Set the progress this notification represents. (New API, supported on Android.) |
| Titanium.Blob.imageAsCompressed | method | Creates a new blob by compressing the underlying image to the specified quality. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Calendar.Calendar.getSourceIdentifier | method | Gets the value of the Titanium.Calendar.Calendar.sourceIdentifier property. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.getSourceTitle | method | Gets the value of the Titanium.Calendar.Calendar.sourceTitle property. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.getSourceType | method | Gets the value of the Titanium.Calendar.Calendar.sourceType property. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.sourceIdentifier | property | Displays the source identifier. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.sourceTitle | property | Displays the source title. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.sourceType | property | Displays the source type. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_BIRTHDAYS | property | A birthday calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_CALDAV | property | A calDev calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_EXCHANGE | property | A microsoft exchange calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_LOCAL | property | A local calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_MOBILEME | property | A mobileMe calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_SUBSCRIBED | property | A subscribed calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Filesystem.File.createFile | method | Creates a file at the path identified by this file object. (Added support for Android.) |
| Titanium.Media.SystemAlert | object | An object for playing system sounds. (New API, supported on iPhone and iPad.) |
| Titanium.Media.hasAudioRecorderPermissions | method | Returns `true` if the app has audio permissions. (New API, supported on iPhone and iPad.) |
| Titanium.Media.requestAudioRecorderPermissions | method | Request the user's permission for audio recording. (New API, supported on iPhone, iPad and Windows Phone.) |
| Titanium.UI.ATTRIBUTE\_SUBSCRIPT\_STYLE | property | Use with Attribute.type to place the text in a lower position. (New API, supported on Android.) |
| Titanium.UI.ATTRIBUTE\_SUPERSCRIPT\_STYLE | property | Use with Attribute.type to place the text in an upper position. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.getLoginValue | method | Gets the value of the Titanium.UI.AlertDialog.loginValue property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPasswordValue | method | Gets the value of the Titanium.UI.AlertDialog.passwordValue property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getValue | method | Gets the value of the Titanium.UI.AlertDialog.value property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.loginValue | property | Value of the login text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.passwordValue | property | Value of the password text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setLoginValue | method | Sets the value of the Titanium.UI.AlertDialog.loginValue property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPasswordValue | method | Sets the value of the Titanium.UI.AlertDialog.passwordValue property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setValue | method | Sets the value of the Titanium.UI.AlertDialog.value property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.value | property | Value of the text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Button.backgroundSelectedColor | property | Selected background color of the view, as a color name or hex triplet. (Added support for iPhone and iPad.) |
| Titanium.UI.Button.getBackgroundSelectedColor | method | Gets the value of the Titanium.UI.Button.backgroundSelectedColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.Button.setBackgroundSelectedColor | method | Sets the value of the Titanium.UI.Button.backgroundSelectedColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.Clipboard.allowCreation | property | Create a clipboard identified by name if it doesn't exist. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.getAllowCreation | method | Gets the value of the Titanium.UI.Clipboard.allowCreation property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.getName | method | Gets the value of the [Titanium.UI.Clipboard.name](http://titanium.ui.clipboard.name/) property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.getUnique | method | Gets the value of the Titanium.UI.Clipboard.unique property. (New API, supported on iPhone and iPad.) |
| [Titanium.UI.Clipboard.name](http://titanium.ui.clipboard.name/) | property | Create a new named clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.remove | method | Removes the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.setAllowCreation | method | Sets the value of the Titanium.UI.Clipboard.allowCreation property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.setName | method | Sets the value of the [Titanium.UI.Clipboard.name](http://titanium.ui.clipboard.name/) property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.setUnique | method | Sets the value of the Titanium.UI.Clipboard.unique property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.unique | property | Create a new clipboard identified by a unique system-generated name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.HIDDEN\_BEHAVIOR\_GONE | property | Release free space when hiding an object. (New API, supported on Android.) |
| Titanium.UI.HIDDEN\_BEHAVIOR\_INVISIBLE | property | Keeps free space when hiding an object. (New API, supported on Android.) |
| Titanium.UI.Label.getMaxLines | method | Gets the value of the Titanium.UI.Label.maxLines property. (Added support for iPhone and iPad.) |
| Titanium.UI.Label.getMinimumFontSize | method | Gets the value of the Titanium.UI.Label.minimumFontSize property. (Added support for Android.) |
| Titanium.UI.Label.maxLines | property | Makes the label at most this many lines tall. (Added support for iPhone and iPad.) |
| Titanium.UI.Label.minimumFontSize | property | Minimum font size when the font is sized based on the contents. (Added support for Android.) |
| Titanium.UI.Label.setMaxLines | method | Sets the value of the Titanium.UI.Label.maxLines property. (Added support for iPhone and iPad.) |
| Titanium.UI.Label.setMinimumFontSize | method | Sets the value of the Titanium.UI.Label.minimumFontSize property. (Added support for Android.) |
| Titanium.UI.ListItem.getSelectedSubtitleColor | method | Gets the value of the Titanium.UI.ListItem.selectedSubtitleColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListItem.selectedSubtitleColor | property | Color to use for the item subtitle when the item is selected, as a color name or hex triplet. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListItem.setSelectedSubtitleColor | method | Sets the value of the Titanium.UI.ListItem.selectedSubtitleColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListItem.subtitleColor | property | Default text color of the subtitle, as a color name or hex triplet. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.canScroll | property | Determines if the list view can scroll in response to user actions. (Added support for Android.) |
| Titanium.UI.ListView.cancelprefetch | event | Fired when list items that previously were considered as candidates for pre-fetching were not actually used. Note that this event is only available on iOS 10 and later (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getCanScroll | method | Gets the value of the Titanium.UI.ListView.canScroll property. (Added support for Android.) |
| Titanium.UI.ListView.getResultsBackgroundColor | method | Gets the value of the Titanium.UI.ListView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getResultsSeparatorColor | method | Gets the value of the Titanium.UI.ListView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getResultsSeparatorInsets | method | Gets the value of the Titanium.UI.ListView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getResultsSeparatorStyle | method | Gets the value of the Titanium.UI.ListView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.prefetch | event | Fired when new list items are prefetched. The items are ordered ascending by geometric distance from the list view. Note that this event is only available on iOS 10 and later. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.resultsBackgroundColor | property | The background color of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.resultsSeparatorColor | property | Separator line color between rows inside search results, as a color name or hex triplet (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.resultsSeparatorInsets | property | The insets for search results separators (applies to all cells & iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.resultsSeparatorStyle | property | The separator style of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.scrolling | event | Fires when the list view is scrolling. Calling the `scrollTo` methods will not fire this event (Added support for Android.) |
| Titanium.UI.ListView.setCanScroll | method | Sets the value of the Titanium.UI.ListView.canScroll property. (Added support for Android.) |
| Titanium.UI.ListView.setResultsBackgroundColor | method | Sets the value of the Titanium.UI.ListView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setResultsSeparatorColor | method | Sets the value of the Titanium.UI.ListView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setResultsSeparatorInsets | method | Sets the value of the Titanium.UI.ListView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setResultsSeparatorStyle | method | Sets the value of the Titanium.UI.ListView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_ALIGNMENT\_JUSTIFY | property | Justify align text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.badgeColor | property | If this item displays a badge, this color will be used for the badge's background. If set to null, the default background color will be used instead. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.getBadgeColor | method | Gets the value of the Titanium.UI.Tab.badgeColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.setBadgeColor | method | Sets the value of the Titanium.UI.Tab.badgeColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.getUnselectedItemTintColor | method | Gets the value of the Titanium.UI.TabGroup.unselectedItemTintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.setUnselectedItemTintColor | method | Sets the value of the Titanium.UI.TabGroup.unselectedItemTintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.unselectedItemTintColor | property | Unselected items in this tab group will be tinted with this color. Setting this value to null indicates that the tab group should use its default value instead. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextArea.fullscreen | property | Leave some space above the keyboard in landscape mode or not. (New API, supported on Android.) |
| Titanium.UI.TextArea.getFullscreen | method | Gets the value of the Titanium.UI.TextArea.fullscreen property. (New API, supported on Android.) |
| Titanium.UI.TextArea.getPadding | method | Gets the value of the Titanium.UI.TextArea.padding property. (Added support for iPhone and iPad.) |
| Titanium.UI.TextArea.padding | property | Sets the left and right padding of this TextArea. The text will always be vertically centered. (Added support for iPhone and iPad.) |
| Titanium.UI.TextArea.setFullscreen | method | Sets the value of the Titanium.UI.TextArea.fullscreen property. (New API, supported on Android.) |
| Titanium.UI.TextArea.setPadding | method | Sets the value of the Titanium.UI.TextArea.padding property. (Added support for iPhone and iPad.) |
| Titanium.UI.TextField.fullscreen | property | Leave some space above the keyboard in landscape mode or not. (New API, supported on Android.) |
| Titanium.UI.TextField.getFullscreen | method | Gets the value of the Titanium.UI.TextField.fullscreen property. (New API, supported on Android.) |
| Titanium.UI.TextField.setFullscreen | method | Sets the value of the Titanium.UI.TextField.fullscreen property. (New API, supported on Android.) |
| Titanium.UI.View.getHiddenBehavior | method | Gets the value of the Titanium.UI.View.hiddenBehavior property. (New API, supported on Android.) |
| Titanium.UI.View.getTouchFeedback | method | Gets the value of the Titanium.UI.View.touchFeedback property. (New API, supported on Android.) |
| Titanium.UI.View.getTouchFeedbackColor | method | Gets the value of the Titanium.UI.View.touchFeedbackColor property. (New API, supported on Android.) |
| Titanium.UI.View.getViewById | method | Returns the matching view of a given view ID. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.View.hiddenBehavior | property | Sets the behavior when hiding an object to release or keep the free space (New API, supported on Android.) |
| Titanium.UI.View.setHiddenBehavior | method | Sets the value of the Titanium.UI.View.hiddenBehavior property. (New API, supported on Android.) |
| Titanium.UI.View.setTouchFeedback | method | Sets the value of the Titanium.UI.View.touchFeedback property. (New API, supported on Android.) |
| Titanium.UI.View.setTouchFeedbackColor | method | Sets the value of the Titanium.UI.View.touchFeedbackColor property. (New API, supported on Android.) |
| Titanium.UI.View.touchFeedback | property | A material design visual construct that provides an instantaneous visual confirmation of touch point. (New API, supported on Android.) |
| Titanium.UI.View.touchFeedbackColor | property | Optional touch feedback ripple color. This has no effect unless `touchFeedback` is true. (New API, supported on Android.) |
| Titanium.UI.WebView.blacklistedURLs | property | An array of url strings to blacklist. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.blacklisturl | event | Fired when a blacklisted URL is stopped. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.disableContextMenu | property | Determines whether or not the webview should not be able to display the context menu. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.getBlacklistedURLs | method | Gets the value of the Titanium.UI.WebView.blacklistedURLs property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.getDisableContextMenu | method | Gets the value of the Titanium.UI.WebView.disableContextMenu property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.getKeyboardDisplayRequiresUserAction | method | Gets the value of the Titanium.UI.WebView.keyboardDisplayRequiresUserAction property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.getRequestHeaders | method | Gets the value of the Titanium.UI.WebView.requestHeaders property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.getUserAgent | method | Gets the value of the Titanium.UI.WebView.userAgent property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.keyboardDisplayRequiresUserAction | property | A Boolean value indicating whether web content can programmatically display the keyboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.requestHeaders | property | Sets extra request headers for this web view to use on subsequent URL requests. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setBlacklistedURLs | method | Sets the value of the Titanium.UI.WebView.blacklistedURLs property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.setDisableContextMenu | method | Sets the value of the Titanium.UI.WebView.disableContextMenu property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setKeyboardDisplayRequiresUserAction | method | Sets the value of the Titanium.UI.WebView.keyboardDisplayRequiresUserAction property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.setRequestHeaders | method | Sets the value of the Titanium.UI.WebView.requestHeaders property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setUserAgent | method | Sets the value of the Titanium.UI.WebView.userAgent property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.userAgent | property | The User-Agent header used by the web view when requesting content. (Added support for iPhone and iPad.) |
| Titanium.UI.iOS.AnimationStyle.CROSS\_DISSOLVE | property | A transition that dissolves from one view to the next. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AnimationStyle.FLIP\_FROM\_BOTTOM | property | Flip from bottom to top during a transition animation. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AnimationStyle.FLIP\_FROM\_TOP | property | Flip from top to bottom during a transition animation. (New API, supported on iPhone and iPad.) |

#### Deprecated APIs

The following APIs are deprecated in Release 6.1.0 as of May 26th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Gesture.isLandscape | method | Use Titanium.Gesture.landscape for parity instead. |
| Titanium.Gesture.isPortrait | method | Use Titanium.Gesture.portrait for parity instead. |
| Titanium.Media.hasAudioPermissions | method | Use Titanium.Media.hasAudioRecorderPermissions instead. |
| Titanium.Media.requestAudioPermissions | method | Use Titanium.Media.requestAudioRecorderPermissions instead. |
| Titanium.UI.TextField.getPaddingLeft | method | Use Titanium.UI.TextField.padding for parity instead. |
| Titanium.UI.TextField.getPaddingRight | method | Use Titanium.UI.TextField.padding for parity instead. |
| Titanium.UI.TextField.paddingLeft | property | Use Titanium.UI.TextField.padding for parity instead. |
| Titanium.UI.TextField.paddingRight | property | Use Titanium.UI.TextField.padding for parity instead. |
| Titanium.UI.TextField.setPaddingLeft | method | Use Titanium.UI.TextField.padding for parity instead. |
| Titanium.UI.TextField.setPaddingRight | method | Use Titanium.UI.TextField.padding for parity instead. |
| Titanium.UI.WebView.onStopBlacklistedUrl | event | Use the cross-platform `blacklisturl` event instead. |
