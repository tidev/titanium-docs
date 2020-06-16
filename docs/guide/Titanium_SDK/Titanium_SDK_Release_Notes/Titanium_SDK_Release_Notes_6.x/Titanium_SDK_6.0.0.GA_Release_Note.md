---
title: Titanium SDK 6.0.0.GA - 14 November 2016
weight: '200'
---

# Titanium SDK 6.0.0.GA - 14 November 2016

Titanium SDK 6.0.0.GA is a major release that includes new features, improvements, and bug fixes.

As of this release, Titanium SDK 5.x will not be supported one calendar year from 6.0.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Notice of feature and behavior changes

SDK 6.0.0.GA brings a few behavior changes that includes changes to Xcode and Node support, Studio Debugger, and our logging system. For more details, please visit [Titanium SDK 6.0.0 Changes](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_6.x/Titanium_SDK_6.0.0.Beta_Release_Note/Titanium_SDK_6.0.0_Changes/).

* Titanium 6.0.0 only supports Xcode 8 (which supports Swift 2.3+, watchOS 2 and 3, and iOS 8+)

* Node 4.2.0 is now a minimum requirement and Node 4.6.x is maximum version supported

* Apps using Hyperloop can use Studio Debugger. On iOS, you will need to turn on `<user-jscore-framework>true</use-jscore-framework>`. Also, you can use Safari to debug your app.

    * This only works using `appc cli 6.0.0-61.between`

    * Entering `appc config set lastUpdateCheckTiDownloads null` before `appc run` will trigger modules download

### NodeJS support

This release implemented full NodeJS support so users can use NPM modules for Android and iOS platforms ([TIMOB-16078](https://jira.appcelerator.org/browse/TIMOB-16078)). This implementation includes the NodeJS require algorithm with some minor differences:

* SDK doesn't attempt to load \*.node files

* SDK doesn't have replacements for Node's core modules

* If the require string doesn't have the prefix of `./`, `/`, or `../`, and its not a native module, the SDK will fall back to legacy Titanium behavior of assuming the require is meant as "absolute" inside the app (as in starting at "`Resources/`")

* The SDK will load JSON files and directories (package.json's main property (look at it, resolve it, and try to load it), index.js, and index.json)

To summarize the algorithm the SDK uses:

Require(X) from module at path Y:

1. If X is a core module,

    1. return the core module

    2. STOP

2. If X begins with ./, or ../,

    1. LOAD\_AS\_FILE(Y + X)

    2. LOAD\_AS\_DIRECTORY(Y + X)

3. If X begins with /,

    1. LOAD\_AS\_FILE(X)

    2. LOAD\_AS\_DIRECTORY(X)

4. If X does not contain '/', assume it should try and load CommonJS module first....

    1. LOAD\_AS\_FILE(X/X.js): try to load "legacy" CommonJS file named `module.id/module.id.js`.

    2. LOAD\_AS\_DIRECTORY(X): try to load CommonJS module as a directory

5. WARN user about possible bad require being treated as absolute THROW "not found"

    1. LOAD\_AS\_FILE(X)

    2. LOAD\_AS\_DIRECTORY(X)

LOAD\_AS\_FILE(X):

1. If X is a file, load X as JavaScript text or JavaScript Object (JSON). STOP

2. If X.js is a file, load X.js as JavaScript text. STOP

3. If X.json is a file, parse X.json to a JavaScript Object. STOP

LOAD\_AS\_DIRECTORY(X):

1. If X/package.json is a file, If X/index.js is a file, load X/index.js as JavaScript text. STOP

    1. Parse X/package.json and look for "main" field.

    2. let M = X + (json main field)

    3. LOAD\_AS\_FILE(M)

2. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP

### Logging system and TCP ports

The new logging system uses a TCP port ([TIMOB-23786](https://jira.appcelerator.org/browse/TIMOB-23786)). The port number is ALWAYS determined at build time, never at run time. This means that if you build two different Titanium apps, they cannot use the same port at the same time. There are a couple ways the tooling works to overcome this.

* For both simulator and device builds, the iOS build will auto-select a port between 10000 and 60000 based on the app id. For example, the app id com.appcelerator.testapp3269 will generate the port 10416. The primary reason we do this is attempt to avoid the same port being used by different apps. The other reason we do this so we don't have a different port each build and crippling differential builds. A nice side-effect is the new logging system allows multiple simultaneous clients as well as reconnects and having a consistent port is convenient.

* It is important to note that because we are auto-selecting a port number based on the app id, the probability of a collision is extremely high. com.appcelerator.testapp17 and com.appcelerator.testapp8249 both resolve to port 19024. This is where <log-server-port> comes in handy. You may specify a <log-server-port>XXXXX</log-server-port> in the <ios> section of the tiapp.xml and it will always be used first. Also note that the port number must be an integer between 1 and 65535 and probably should be greater than 1024 to avoid binding to a privileged port. The port number should be unique per project. You only need to use this if the auto-selected port number is causing collisions with other apps. This is really only a problem when working with multiple projects at the same time.

* If there is a collision where two different apps are being built AND running at the same time with the same port, the first app to launch will get the port. The second app will try to bind to it, but it will fail. It is very important to note that whichever app launches 2nd will fail to bind to the port, however the 2nd app will still continue to run normally, just without logs. For simulator builds, you can open the simulator's system.log, or for device builds, use the macOS Sierra Console application at any time to view the log messages.

* The biggest issue to be aware of is the 2nd app's iOS build will end up connecting to the 1st app's log server. There is currently no way for the iOS build to know which log server for which app it has connected to. In the future we may introduce a more proper protocol to handle this.

* For simulator builds only, the port is shared with the local machine. For example, you could use port 27017 for device builds, but you can't for simulator builds if you have MongoDB installed. So, if there is no <log-server-port>, or there is, but it's not available, or the app id-based port is not available, then the iOS build will fallback to a random port number that will certainly change every build.

* It's also worth noting that for simulator builds only, the iOS build will start up a Node.js server on the selected port to make sure it's available. If it isn't, it will randomly test ports until it finds an available port. To be clear, device builds do not have this limitation.

* The client in the iOS build that connects to the app will always connect after the app has started. This means it's possible for several messages to have already been logged. Because of this, Titanium will queue the last 100 log messages only while there are no client connections. As soon as the iOS build connects to the log server, the queue is flushed and released. This shouldn't be a huge deal since the client tries to connect every 250ms.

* Finally, logging is only enabled for simulator and device builds. It is NOT enabled for app store or adhoc builds. You can enable it by hacking the build system or via a CLI plugin.

### Removal of Ti.include

Ti.include has been deprecated since version 3.3.0. With the release of 6.0.0, we have completely removed it ([TIMOB-23185](https://jira.appcelerator.org/browse/TIMOB-23185)). For those who are still using it, we urge you to replace usage with the necessary **require()** calls. If you did not migrate until now, please follow [this guide](#!/api/Global-method-require) to do so.

As a last resort, consider using this workaround:

**Ti.include workaround**

```javascript
function include(file) {
    return eval(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, file).read().text);
}
```

### SDK 6.0.0 and Studio 4.8.0

**Recommendation:** If you upgraded SDK to version 6.0.0, we strongly urge you to upgrade Studio to version 4.8.0 to avoid any backwards compatibility issues.

### Android platform

For this release of Titanium SDK, V8 has been updated to the latest LTS release ([TIMOB-19790](https://jira.appcelerator.org/browse/TIMOB-19790)).
If you have Android titanium modules, you have to rebuild them with this V8 in order for it to be supported on Titanium SDK 6.0.0.

You will need to update the `android/manifest` by:

1. Bump apiversion from 2 to 3.

2. Remove "armeabi" ABI from listing (keep "armeabi-v7a").

3. Bump their module version (typically bump the major number since this is a backwards-incompatible change).

4. Update minsdk to 6.0.0,

5. Then rebuild the module.

Our community member [Tim Poulsen](https://github.com/skypanther) also did a [blog-post](http://www.skypanther.com/2016/10/rebuilding-modules-for-titanium-6/) about some tweaks he discovered, including a detailed upgrade guide.

Note, you may also need to edit the Java code to remove references to deprecate classes that have been removed in 6.0.0 (such as TiContext).

[TIMOB-19919](https://jira.appcelerator.org/browse/TIMOB-19919) - Android: add ability to listen to androidback without overriding

* Changed how the override of a default behavior for the back button on Android

* This is a breaking change. Apps using this to override the back button need to update their code when using calls like this: `win.addEventListener('androidback', onBack);`

## New features

### Android platform

* [TIMOB-2122](https://jira.appcelerator.org/browse/TIMOB-2122) - Android: Implement Video Recording

    * Implemented video recording

* [TIMOB-9403](https://jira.appcelerator.org/browse/TIMOB-9403) - Android: Map - Add centerOffset property to Ti.Map.Annotation

    * Added centerOffset property to custom annotation so it can be set by an x & y offset to the image of the annotation

* [TIMOB-14382](https://jira.appcelerator.org/browse/TIMOB-14382) - Enable Media.openPhotoGallery to select multiple media items instead of 1 at a time

    * Added the ability to select multiple media items with Media.openPhotoGallery

* [TIMOB-16512](https://jira.appcelerator.org/browse/TIMOB-16512) - Android: Expose properties/methods for controlling internal padding in TextField (and possibly TextArea)

    * Added support for controlling internal padding in Ti.UI.TextField

* [TIMOB-19376](https://jira.appcelerator.org/browse/TIMOB-19376) - Android: Fingerprint support

    * Added support for fingerprint authentication

* [TIMOB-23486](https://jira.appcelerator.org/browse/TIMOB-23486) - Android: Add an option to handle AlertDialog box outside touch

    * Added canceledOnTouchOutside property which should only allow AlertDialogs to close when the cancel button is pressed

### iOS platform

* [TIMOB-18927](https://jira.appcelerator.org/browse/TIMOB-18927) - iOS: Calendar Event: Allow to fetch event Organiser and Invitees/Attendees details

    * Added support to fetch event Organizer and Invitees/Attendees details from Ti.Calendar.Event

* [TIMOB-20092](https://jira.appcelerator.org/browse/TIMOB-20092) - iOS: Need ability to generate static image of map for the specified coordinates

    * Added feature that allows for generating a static image of a map for specific coordinates

    * Demo:

        ```javascript
        var MapModule = require('ti.map');

        var win = Ti.UI.createWindow({
          backgroundColor: 'white'
        });

        var Snapshotter = MapModule.createSnapshotter({
          mapType: MapModule.HYBRID_TYPE,
          region: {
            latitude: 37.3382,
            longitude: -121.8863,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4
          },
          size: {
            width: 300,
            height: 200
          }
        });
        ```

* [TIMOB-23442](https://jira.appcelerator.org/browse/TIMOB-23442) - iOS: Dismiss keyboard on drag / interactively in ScrollView & ListView

    * Added the capability to dismiss the keyboard on drag or interactively

* [TIMOB-23567](https://jira.appcelerator.org/browse/TIMOB-23567) - iOS: Close all navigation windows at once

    * Added the capability to close all current windows in a `Ti.UI.iOS.NavigationWindow` at the same time

    * Demo:

        ```javascript
        var i = 0;
        var MAX_WINDOWS = 3;
        var nav = Ti.UI.iOS.createNavigationWindow({window: createWindow(++i)});

        nav.open();

        function createWindow(num) {
          var win = Ti.UI.createWindow({title: "Window " + num, backgroundColor: "#fff"});
          var btn = Ti.UI.createButton({title: (i == MAX_WINDOWS) ? "Close all windows" : ("Open Window " + (num + 1))});

          win.addEventListener("close", function() {
            Ti.API.warn("Closing " + this.title);
          });

          btn.addEventListener("click", function() {
            if (i == MAX_WINDOWS) {
              nav.popToRootWindow({animated: true});
              i = 0;
              return;
            }
            nav.openWindow(createWindow(++i));
          });

          win.add(btn);
          return win;
        }
        ```

* [TIMOB-23675](https://jira.appcelerator.org/browse/TIMOB-23675) - iOS9: Support preferred alert action

    * Added support to define a preferred alert action inside Ti.UI.AlertDialog

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
          backgroundColor: "#fff"
        });
        var btn = Ti.UI.createButton({
          title: "Show alert"
        });

        btn.addEventListener("click", function() {
          var alert = Ti.UI.createAlertDialog({
            title: "Test",
            message: "Message",
            buttonNames: ["OK", "Cancel", "Destructive"],
            cancel: 1,
            destructive: 2,
            preferred: 0
          });
          alert.addEventListener("click", function(e) {
            Ti.API.warn(e);
          })
          alert.show();
        });

        win.add(btn);
        win.open();
        ```

* [TIMOB-23691](https://jira.appcelerator.org/browse/TIMOB-23691) - iOS: Expose status-bar background-color

    * Added support to change the global status bar background color

    * Demo:

        ```javascript
        // Set the global status-bar background-color
        Ti.UI.iOS.setStatusBarBackgroundColor("red");

        var win = Ti.UI.createWindow({
          backgroundColor: "#fff"
        });
        var nav = Ti.UI.iOS.createNavigationWindow({window: win});
        var btn = Ti.UI.createButton({
          title: "Open another window"
        });

        btn.addEventListener("click", function() {
          // Open a new window to see that the status-bar background persists across windows
          nav.openWindow(Ti.UI.createWindow({backgroundColor: "#fff"}));
        });

        win.add(btn);
        nav.open();
        ```

* [TIMOB-23891](https://jira.appcelerator.org/browse/TIMOB-23891) - iOS 10: Support iPhone 7 Haptic Engine API

    * Added support for iPhone 7's Haptic Engine API

    * Demo:

        ```javascript
        var dataStructure = [
          "FEEDBACK_GENERATOR_TYPE_SELECTION",
          "FEEDBACK_GENERATOR_TYPE_IMPACT",
          "FEEDBACK_GENERATOR_TYPE_NOTIFICATION";
        ];
        var win = Ti.UI.createWindow({
          backgroundColor: "#fff",
          title: "iOS 10 Haptic Engine",
          translucent: false
        });

        var nav = Ti.UI.iOS.createNavigationWindow({window: win});

        var list = Ti.UI.createListView({
          sections: [
            Ti.UI.createListSection({
              items: createItems()
            })
          ]
        });

        list.addEventListener("itemclick", function(e) {
          var type = e.itemId;
          var args = {type: Ti.UI.iOS[type]}; // Same as Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_SELECTION etc.

          // If we select the impact-feedback, the style property specifies the style of it
          if (Ti.UI.iOS[type] == Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT) {
            args["style"] = Ti.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM;
          }

          // Create the generator with the selected type
          var generator = Ti.UI.iOS.createFeedbackGenerator(args);
          generator.prepare(); // Prepare the feedback before to avoid latence

          // Execute different feedbacks based on the type
          switch (generator.type) {
            case Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_SELECTION:
              generator.selectionChanged();
              break;
            case Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT:
              generator.impactOccurred();
              break;
            case Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_NOTIFICATION:
              generator.notificationOccurred(Ti.UI.iOS.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS);
              break;
          }
          this.deselectItem(e.sectionIndex, e.itemIndex);
        });

        win.add(list);
        nav.open();

        function createItems() {
          var items = [];

          for (var i = 0; i < dataStructure.length; i++) {
            items.push({
              properties: {
                itemId: dataStructure[i],
                title: dataStructure[i],
                height: 60,
                accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
              }
            });
          }
          return items;
        }
        ```

### Windows platform

* [TIMOB-19926](https://jira.appcelerator.org/browse/TIMOB-19926) - Windows: Support proximity sensor for Windows 10

    * Added support for proximity sensor for Windows 10

* [TIMOB-23156](https://jira.appcelerator.org/browse/TIMOB-23156) - Windows: Automatically add required Capabilities to Manifest based on API usage

    * Capabilities are automatically generated for Titanium APIs

* [TIMOB-23557](https://jira.appcelerator.org/browse/TIMOB-23557) - Windows: target win sdk attribute in timodule.xml

    * Added support to timodule.xml for Windows module to specify target Window SDK version attribute

### Multiple platforms

* [TIMOB-20347](https://jira.appcelerator.org/browse/TIMOB-20347) - appcd: Support for --config and --config-file options

    * Added support for --config and --config-file for start and restart commands

* [TIMOB-23230](https://jira.appcelerator.org/browse/TIMOB-23230) - iOS,Android: An event for the camera has been opened successfully

    * Implemented an cameraReady event

## Improvements

### Android platform

* [TIMOB-18082](https://jira.appcelerator.org/browse/TIMOB-18082) - Android: Enable --multi-dex for android builds

    * Implemented the use of `--multi-dex` argument to dexer during builds to avoid the 65k method limit during app builds

* [TIMOB-23423](https://jira.appcelerator.org/browse/TIMOB-23423) - Android: Add rotation, rotationX, rotationY, scaleX, scaleY to view

    * Added the ability of rotation, rotation on X and Y, scale X, and scale Y to views

* [TIMOB-23612](https://jira.appcelerator.org/browse/TIMOB-23612) - Android: Improve Ti.Android.requestPermissions() documentation

    * Improved documentation for Ti.Android.requestPermissions()

* [TIMOB-23860](https://jira.appcelerator.org/browse/TIMOB-23860) - Android: Update Google Play services used by cloudpush module

    * Updated cloudpush module to use Google Play services 9.6.1

* [TIMOB-23872](https://jira.appcelerator.org/browse/TIMOB-23872) - Enable android.mergeCustomAndroidManifest by default

    * Enabled custom AndroidManifest.xml to override the default one (but tiapp.xml still overrides everything)

### iOS platform

* [TIMOB-19335](https://jira.appcelerator.org/browse/TIMOB-19335) - iOS: ListView editActions specify better action

    * Improved ListView's editActions' `identifier` so it can be set to define the action as opposed to the title

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({backgroundColor: 'white'}),
          favoriteAction = {
            identifier: 'setFavorite',
            title: 'Favorite',
            style: Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT
          },
          unfavoriteAction = {
            identifier: 'unsetFavorite',
            title: 'Unfavorite',
            style: Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL
            },
          data = [
            {properties: {canEdit: true, editActions: [favoriteAction], title: 'Kitten Whiskers'}},
            {properties: {canEdit: true, editActions: [favoriteAction], title: 'Copper Kettle'}},
            {properties: {canEdit: true, editActions: [favoriteAction], title: 'Woolen Mittens'}},
            {properties: {canEdit: true, editActions: [favoriteAction], title: 'Apple Strudel'}},
            {properties: {canEdit: true, editActions: [favoriteAction], title: 'Brown Packages'}},
            {properties: {canEdit: true, editActions: [favoriteAction], title: 'Dog Bites'}},
            {properties: {canEdit: true, editActions: [favoriteAction], title: 'Bee Stings'}}
          ],
          listSection = Ti.UI.createListSection({
            items: data
          }),
          listView = Ti.UI.createListView({
            top: 15,
            sections: [listSection]
          });

        listView.addEventListener('editaction', function(e) {
          var item = e.section.getItemAt(e.itemIndex)
          if (e.identifier === 'setFavorite') {
            item.properties.editActions = [unfavoriteAction];
          } else if (e.identifier === 'unsetFavorite') {
            item.properties.editActions = [favoriteAction];
          }
          e.section.updateItemAt(e.itemIndex, item);
        });

        win.add(listView);
        win.open();
        ```

* [TIMOB-20083](https://jira.appcelerator.org/browse/TIMOB-20083) - Remove watchos1 template and related code

    * watchos1 no longer supported

* [TIMOB-20409](https://jira.appcelerator.org/browse/TIMOB-20409) - iOS: Add rest of stylus properties to 3D touch events

    * Added `azimuthAngleInView` and `azimuthUnitVectorInView`. These properties are available if using a stylus.

    * Demo:

        ```javascript
        // this sets the background color of the master UIView (when there are no windows/tab groups on it)
        Titanium.UI.setBackgroundColor('#000');

        var win = Titanium.UI.createWindow({title: 'TIMOB-23501'}),
        view = Titanium.UI.createView({
          borderRadius: 10,
          backgroundColor: 'blue',
          width: Ti.UI.FILL,
          height: Ti.UI.FILL
        });

        view.addEventListener("touchmove", function(e) {
          Ti.API.info("View",e);
        });

        win.add(view);
        win.open();
        ```

* [TIMOB-23506](https://jira.appcelerator.org/browse/TIMOB-23506) - Add event listener for applicationWillTerminate

    * Documented the applicationWillTerminate event listener

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
          backgroundColor: "#fff"
        });

        Ti.App.addEventListener("close", function() {
          Ti.API.warn("applicationWillTerminate");
        });

        win.open();
        ```

* [TIMOB-23514](https://jira.appcelerator.org/browse/TIMOB-23514) - iOS10: Deprecate iAds

    * Apple deprecated iAds in iOS 10, so we followed and deprecated the Ti.UI.iOSAdView in Titanium 6.

    * Demo: The following call will through a warning on Xcode 8 and later:

        ```javascript
        var adView = Ti.UI.iOS.createAdView();
        ```

* [TIMOB-23538](https://jira.appcelerator.org/browse/TIMOB-23538) - iOS: Refactor default new app-projects

    * Refreshed the default app templates with updated best practices (@3x icons, improved assets structure, ...)

* [TIMOB-23566](https://jira.appcelerator.org/browse/TIMOB-23566) - iOS: Support global tintColor

    * Added support for a global tint color that is used for alert dialogs, lists, button and all other UI-based elements.

    * Demo:

        ```javascript
        // Set a global tintColor once
        Ti.UI.setTintColor("#f00");

        var win = Ti.UI.createWindow({backgroundColor: "#fff", title: "First Window"});
        var nav = Ti.UI.iOS.createNavigationWindow({window: win});

        var btn = Ti.UI.createButton({
          title: "Open Sub-Window (button should be red)"
        });

        btn.addEventListener("click", function() {
          var win2 = Ti.UI.createWindow({backgroundColor: "#fff", title: "Sub Window"});
          var btn2 = Ti.UI.createButton({title: "Close Sub-Window (button should be green)", tintColor: "green"});

          btn2.addEventListener("click", function() {
            nav.closeWindow(win2);
          });

          win2.add(btn2);
          nav.openWindow(win2);
        });

        win.add(btn);
        nav.open();
        ```

* [TIMOB-23584](https://jira.appcelerator.org/browse/TIMOB-23584) - Add support for iOS 9 Text Style additions

    * Added support for additional styles to font.textStyle

    * Example:

        ![simulatorscreenshot01nsuoj](./simulatorscreenshot01nsuoj.png)

* [TIMOB-23684](https://jira.appcelerator.org/browse/TIMOB-23684) - iOS: Expose missing iOS8 properties to hide NavigationBar

    * Added support to hide NavigationBar in iOS8

    * Demo:

        ```javascript
        var win = Ti.UI.createWindow({
          backgroundColor: "#fff",
          title: "TIMOB-23684",
          layout: "vertical"
        });

        win.add(createButtonWithAction("hidesBarsOnSwipe"));
        win.add(createButtonWithAction("hidesBarsOnTap"));
        win.add(createButtonWithAction("hidesBarsWhenVerticallyCompact"));
        win.add(createButtonWithAction("hidesBarsWhenKeyboardAppears"));
        win.add(Ti.UI.createTextField({width: 200, height:50, backgroundColor: "#ccc", top: 20}));

        var nav = Ti.UI.iOS.createNavigationWindow({window: win});

        nav.open();

        function createButtonWithAction(action) {
          var btn = Ti.UI.createButton({
            title: action,
            top: 60
          });
          btn.addEventListener("click", function() {
            win[action] = true;
          });
          return btn;
        }
        ```

* [TIMOB-24007](https://jira.appcelerator.org/browse/TIMOB-24007) - iOS: Selected color not available in Ti.UI.ListItem

    * The selectedColor property for iOS system ListItem templates is now supported

### Windows platform

* [TIMOB-19962](https://jira.appcelerator.org/browse/TIMOB-19962) - Windows: Implement Titanium.UI.TableView footerView/footerTitle

    * Implemented footerView and footerTitle on a TableView

* [TIMOB-23261](https://jira.appcelerator.org/browse/TIMOB-23261) - Windows: Error when adding capabilities in wrong order

    * Incorrect order of capabilities no longer causes an error in the build process

* [TIMOB-23296](https://jira.appcelerator.org/browse/TIMOB-23296) - Windows: Implement Ti.Locale.setLanguage

    * An app's language can now be set using `Ti.Locale.setLanguage`. When implementing this into your application, please take [this](https://msdn.microsoft.com/pl-pl/windows/uwp/globalizing/manage-language-and-region) documentation from Microsoft into account as setting a user's language may differ from what is expected due to the platforms behaviour.

* [TIMOB-23329](https://jira.appcelerator.org/browse/TIMOB-23329) - Windows: Implement Ti.UI.TableView border properties

    * Implemented borderColor, borderWidth, borderRadius for Ti.UI.TableView

    * Sample:

        ```javascript
        var win = Ti.UI.createWindow({backgroundColor: 'red'});
        var tableView = Ti.UI.createTableView({
          borderWidth: 5,
          borderColor: 'yellow',
          borderRadius: 5,
          data: [{title: 'Apples'}, {title: 'Bananas'}, {title: 'Carrots'}, {title: 'Potatoes'}]
        });

        tableView.addEventListener('click', function (e) {
          alert(JSON.stringify(e.row.title));
        });

        win.add(tableView);
        win.open();
        ```

* [TIMOB-23399](https://jira.appcelerator.org/browse/TIMOB-23399) - Analytics: Implement networkType property for Windows platform

    * `Ti.Network.networkTypeName` now returns the correct value depending on the devices current network

* [TIMOB-23546](https://jira.appcelerator.org/browse/TIMOB-23546) - Windows: Tap-to-focus for Camera

    * When using the front or rear camera with an overlay, the view can now be tapped to focus the camera

* [TIMOB-23573](https://jira.appcelerator.org/browse/TIMOB-23573) - Windows: Support Ti.UI.ImageView.reverse

    * `Ti.UI.ImageView` now supports the reverse property

* [TIMOB-23637](https://jira.appcelerator.org/browse/TIMOB-23637) - Windows: Titanium object creation takes too long

    * Improvemented performance optimization for TitaniumKit

* [TIMOB-23655](https://jira.appcelerator.org/browse/TIMOB-23655) - Windows: Implement Ti.Geolocation.requestLocationPermissions/hasLocationPermissions methods to match iOS and Android behaviour

    * Implemented `Ti.Geolocation.requestLocationPermissions` and `hasLocationPermissions` methods for Windows

* [TIMOB-23656](https://jira.appcelerator.org/browse/TIMOB-23656) - Windows: Implement Ti.Media.requestCameraPermissions/hasCameraPermissionsmethods to match iOS and Android behaviour

    * Implemented `Ti.Media.requestCameraPermissions` and `hasCameraPermissions` methods for Windows

* [TIMOB-23686](https://jira.appcelerator.org/browse/TIMOB-23686) - Windows: Implement CameraOptionsType.whichCamera

    * Camera preview can be set to either the front or back. Setting an invalid option or no option will set the camera to the default of the device.

    * Sample:

        ```javascript
        var win = Ti.UI.createWindow({backgroundColor: 'green', layout: 'vertical'});
        var openButton = Ti.UI.createButton({title: 'OPEN CAMERA', backgroundColor: 'blue'});
        var imageView = Ti.UI.createImageView({width: Ti.UI.FILL, height: '70%'});
        var takeButton = Ti.UI.createButton({title: 'TAKE A PHOTO', backgroundColor: 'red'}),
        var hideButton = Ti.UI.createButton({title: 'HIDE PREVIEW', backgroundColor: 'red'});

        var overlay = Ti.UI.createView({
          layout: 'vertical',
          height: '20%', width: Ti.UI.FILL,
          bottom: 0
        });

        takeButton.addEventListener('click', function () {
          Ti.Media.takePicture();
        });

        hideButton.addEventListener('click', function () {
          Ti.Media.hideCamera();
        });

        overlay.add(takeButton);
        overlay.add(hideButton);

        openButton.addEventListener('click', function () {
          Ti.Media.showCamera({
            whichCamera: Titanium.Media.CAMERA_FRONT, // OR: Titanium.Media.CAMERA_REAR
            mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
            overlay: overlay,
            success: function (e) {
              Ti.API.info('showCamera() success');
              imageView.image = e.media;
            },
            error: function (e) {
              alert('showCamera() error: ' + JSON.stringify(e));
            }
          });
        });

        win.add(openButton);
        win.add(imageView);
        win.open();
        ```

* [TIMOB-23775](https://jira.appcelerator.org/browse/TIMOB-23775) - Windows: Impose restrictions on feature events

    * Set restrictions on feature events to enforce proper usage

        * Payload should be no more than 1000 bytes

        * Custom event can have no more than 35 keys

        * Custom event is limited to a maximum of 5 nested JS objects (e.g. { a: { b: { c: { d: 5 } } } } has 3)

        * Key's (string) value can only be a max of 50 chars

### Multiple platforms

* [TIMOB-23448](https://jira.appcelerator.org/browse/TIMOB-23448) - SDK: Set Node 4.X as minimum supported version

    * Set the minimum supported version of Node to 4.X

* [TIMOB-23572](https://jira.appcelerator.org/browse/TIMOB-23572) - iOS/Android: Add the ability to remove all Ti.App.Properties at once

    * Added the capability to remove all `Ti.App.Properties` at once

    * Demo:

        ```
        // Check the initial properties (should only be the iOS ones)
        Ti.API.warn(Ti.App.Properties.listProperties());

        // Add all possible property-types (bool, int, double, string, object & list)
        Ti.App.Properties.setBool("testBool", true)
        Ti.API.warn(Ti.App.Properties.getBool("testBool"));

        Ti.App.Properties.setInt("testInt", 1337)
        Ti.API.warn(Ti.App.Properties.getInt("testInt", 1337));

        Ti.App.Properties.setDouble("testDouble", 13.37);
        Ti.API.warn(Ti.App.Properties.getDouble("testDouble", 13.37));

        Ti.App.Properties.setString("testString", "john_doe")
        Ti.API.warn(Ti.App.Properties.getString("testString", "john_doe"));

        Ti.App.Properties.setObject("testObject", {appc: "rocks"})
        Ti.API.warn(Ti.App.Properties.getObject("testObject", {appc: "rocks"}));

        Ti.App.Properties.setList("testList", ["appc", "rocks"])
        Ti.API.warn(Ti.App.Properties.getList("testList", ["appc", "rocks"]));

        // Check the properties again. It should now include the keys of the custom properties
        Ti.API.warn(Ti.App.Properties.listProperties());

        // Remove all custom properties
        Ti.API.warn(Ti.App.Properties.removeAllProperties());

        // Check the properties a last time. The custom properties should not be included anymore
        Ti.API.warn(Ti.App.Properties.listProperties());
        ```

* [TIMOB-23649](https://jira.appcelerator.org/browse/TIMOB-23649) - Use per-platform moduleAPIVersions in the SDK manifest.json

    * Added the ability to specify module API version (a measure of binary compatibility) on a per-platform basis, rather than globally across platforms (e.g. iOS, Android, Windows)

* [TIMOB-23817](https://jira.appcelerator.org/browse/TIMOB-23817) - CLI: Update upper limit for node version in vendorDependencies

    * Raised the upper limit of Node.js to V6

## Community credits

* [Flavio De Stefano](https://github.com/kopiro) for exposing new properties to the iOS navigation bar ([TIMOB-23684](https://jira.appcelerator.org/browse/TIMOB-23684)) and exposing the "statusBarBackgroundColor" property ([TIMOB-23691](https://jira.appcelerator.org/browse/TIMOB-23691)) on iOS

* [Rene Pot](https://github.com/Topener) for adding the "responseHeaders" property on Android ([TIDOC-2628](https://jira.appcelerator.org/browse/TIDOC-2628))

* [Stephen Feather](https://github.com/stephenfeather) for implementing the iOS 9 text styles ([TIMOB-23584](https://jira.appcelerator.org/browse/TIMOB-23584))

* [Michael Gangolf](https://github.com/m1ga) for

    * implementing text field padding ([TIMOB-16512](https://jira.appcelerator.org/browse/TIMOB-16512))

    * fixing filed upload progress by adding setChunkedStreamingMode ([TIMOB-20483](https://jira.appcelerator.org/browse/TIMOB-20483))

    * adding rotation, rotationX, rotationY, scaleX, and scaleY to view ([TIMOB-23423](https://jira.appcelerator.org/browse/TIMOB-23423))

* [Manuel Lehner](https://github.com/manumaticx) for enabling Media.openPhotoGallery to select multiple media items instead of one at a time ([TIMOB-14382](https://jira.appcelerator.org/browse/TIMOB-14382))

## Fixed issues

* [MOD-2257](https://jira.appcelerator.org/browse/MOD-2257) - Android 6 : Appcelerator Geofence Module (version 1.1.4) and ti.map throwing error

* [MOD-2269](https://jira.appcelerator.org/browse/MOD-2269) - Android: ti.admob 2.1.6 crashes

* [MOD-2272](https://jira.appcelerator.org/browse/MOD-2272) - TouchId Module: isSupported() return TRUE even for iPhone4S and iPhone 5 which doesn't have finger print sensor

* [MOD-2280](https://jira.appcelerator.org/browse/MOD-2280) - Facebook: fb.permissions leading to crash inconsistently on iOS

* [MOD-2286](https://jira.appcelerator.org/browse/MOD-2286) - Ti.Facebook iOS: Sending Ti.Blob's in requestWithGraphPath throws mutating-error

* [MOD-2289](https://jira.appcelerator.org/browse/MOD-2289) - Android - Latest 6.X SDK crashes when importing Ti.CloudPush

* [MOD-2296](https://jira.appcelerator.org/browse/MOD-2296) - iOS10: Ti.SafariDialog - tintColor on iOS 10 broken, new barColor property available

* [MOD-2300](https://jira.appcelerator.org/browse/MOD-2300) - Ti.SafariDialog: tintColor does not work on iOS 9

* [MOD-2304](https://jira.appcelerator.org/browse/MOD-2304) - Ti.admob: Android issues starting from Ti SDK 5.1

* [TIMOB-4865](https://jira.appcelerator.org/browse/TIMOB-4865) - iOS: imageAsCropped rotates image

* [TIMOB-11188](https://jira.appcelerator.org/browse/TIMOB-11188) - iOS: Debugger: breakpoints ignored if app is only primitive assignment statements

* [TIMOB-15765](https://jira.appcelerator.org/browse/TIMOB-15765) - Android: TableView - JNI ERROR (app bug): local reference table overflow (max=512)

* [TIMOB-15976](https://jira.appcelerator.org/browse/TIMOB-15976) - iOS: Turning the camera around using Ti.Media.switchCamera(Ti.Media.CAMERA\_FRONT) causing camera to get stuck and refuse to snap a picture

* [TIMOB-16218](https://jira.appcelerator.org/browse/TIMOB-16218) - iOS: Ti.UI.RefreshControl.beginRefreshing() does not work

* [TIMOB-19812](https://jira.appcelerator.org/browse/TIMOB-19812) - Android: Arbitrary ListView template height

* [TIMOB-20181](https://jira.appcelerator.org/browse/TIMOB-20181) - iOS: HTTPClient multipart/form-data produces bad content-type headers for individual parts

* [TIMOB-20278](https://jira.appcelerator.org/browse/TIMOB-20278) - Android: java.lang.IllegalArgumentException when ti.map and ti.geofence modules were added

* [TIMOB-20279](https://jira.appcelerator.org/browse/TIMOB-20279) - Android: Ti.Contacts.getAllPeople() crashes with overflow on Android < 6

* [TIMOB-20319](https://jira.appcelerator.org/browse/TIMOB-20319) - iOS: Weird behavior after crop the image captured from camera

* [TIMOB-20415](https://jira.appcelerator.org/browse/TIMOB-20415) - Android: HttpClient Basic Auth: Infinite loop with bad credentials

* [TIMOB-20490](https://jira.appcelerator.org/browse/TIMOB-20490) - Android: Apps should be able to open/resume and respond to intents

* [TIMOB-20502](https://jira.appcelerator.org/browse/TIMOB-20502) - Using Android shortcut to start new activity fails to detect Alloy

* [TIMOB-23138](https://jira.appcelerator.org/browse/TIMOB-23138) - Parity: On Android require() tries current folder first

* [TIMOB-23164](https://jira.appcelerator.org/browse/TIMOB-23164) - Windows: Unit test failed for View.animate for UWP 10 app

* [TIMOB-23225](https://jira.appcelerator.org/browse/TIMOB-23225) - Windows: Ti.UI.SIZE is not working properly on Windows Phone on a container with child views.

* [TIMOB-23279](https://jira.appcelerator.org/browse/TIMOB-23279) - Windows: Omit invalid devices from wptool detection

* [TIMOB-23297](https://jira.appcelerator.org/browse/TIMOB-23297) - Calling Ti.App.getArguments() crashes app when launched via new App Shortcuts

* [TIMOB-23309](https://jira.appcelerator.org/browse/TIMOB-23309) - Android: pdf and xls files with response headers (Content-Type →application/octet-stream) not opening with Ti sdk 5.0.0,5.1.1, 5.2.0

* [TIMOB-23333](https://jira.appcelerator.org/browse/TIMOB-23333) - Android: Attempt to invoke virtual method 'void android.view.OrientationEventListener.disable()' on a null object reference Crash

* [TIMOB-23352](https://jira.appcelerator.org/browse/TIMOB-23352) - Windows: ScrollView click event always has ScrollView as source, not the actual view clicked on

* [TIMOB-23381](https://jira.appcelerator.org/browse/TIMOB-23381) - Parity: Titanium CommonJS modules require'd differently than NodeJS require spec

* [TIMOB-23382](https://jira.appcelerator.org/browse/TIMOB-23382) - Parity: Cannot require directory as done in NodeJS

* [TIMOB-23383](https://jira.appcelerator.org/browse/TIMOB-23383) - Parity: Titanium CommonJS modules cannot require relative files

* [TIMOB-23404](https://jira.appcelerator.org/browse/TIMOB-23404) - Windows parity: App name is not sourced from app.xml in folders suffixed with ISO 3166-1 Alpha-2 code

* [TIMOB-23407](https://jira.appcelerator.org/browse/TIMOB-23407) - Android: TableViewRow event listener postlayout is never called

* [TIMOB-23427](https://jira.appcelerator.org/browse/TIMOB-23427) - Windows: Camera controls are not showing

* [TIMOB-23440](https://jira.appcelerator.org/browse/TIMOB-23440) - Windows: Ti.Contacts permission methods need to renamed be to match iOS and Android

* [TIMOB-23459](https://jira.appcelerator.org/browse/TIMOB-23459) - Android: Ti.Filesystem.getFile causes hard crash with null argument

* [TIMOB-23474](https://jira.appcelerator.org/browse/TIMOB-23474) - Android: Ti.UI.AlertDialog.get/setTitleid() methods missing

* [TIMOB-23475](https://jira.appcelerator.org/browse/TIMOB-23475) - Android: read-only properties with no setter are writable/delete-able

* [TIMOB-23476](https://jira.appcelerator.org/browse/TIMOB-23476) - Android: constants are writable

* [TIMOB-23479](https://jira.appcelerator.org/browse/TIMOB-23479) - Windows: Local webview does not show any images, or opens other files.

* [TIMOB-23484](https://jira.appcelerator.org/browse/TIMOB-23484) - windowslib: don't hard error when detecting devices if Visual Studio is not installed

* [TIMOB-23492](https://jira.appcelerator.org/browse/TIMOB-23492) - Windows: Parity issue with Ti.Geolocation.reverseGeocoder callback response

* [TIMOB-23498](https://jira.appcelerator.org/browse/TIMOB-23498) - Windows: titleId/title should retain existing value if key not found

* [TIMOB-23499](https://jira.appcelerator.org/browse/TIMOB-23499) - Android: Ti.UI.Label.wordWrap should default to true, but is undefined

* [TIMOB-23500](https://jira.appcelerator.org/browse/TIMOB-23500) - Android: Ti.UI.Label.ellipsize should default to TruncateAt.END, but is undefined

* [TIMOB-23501](https://jira.appcelerator.org/browse/TIMOB-23501) - iOS: Ti.UI.Label.ellipsize should default to false, but is undefined

* [TIMOB-23503](https://jira.appcelerator.org/browse/TIMOB-23503) - Windows: WebView local script doesn't work for hyperlink

* [TIMOB-23512](https://jira.appcelerator.org/browse/TIMOB-23512) - Windows: relative require() from sub-directory fails

* [TIMOB-23521](https://jira.appcelerator.org/browse/TIMOB-23521) - Ti.Facebook - presentShareDialog does not open native app, only webview

* [TIMOB-23531](https://jira.appcelerator.org/browse/TIMOB-23531) - Windows: Tab title color is not changed on selection

* [TIMOB-23543](https://jira.appcelerator.org/browse/TIMOB-23543) - TiAPI: require implementation uses incorrect \_\_filename values

* [TIMOB-23554](https://jira.appcelerator.org/browse/TIMOB-23554) - Android: Ti.apiName should == 'Ti'

* [TIMOB-23559](https://jira.appcelerator.org/browse/TIMOB-23559) - SDK no longer installed in uniquely named folder

* [TIMOB-23563](https://jira.appcelerator.org/browse/TIMOB-23563) - Windows: 'possible EventEmitter memory leak detected' warning when building Windows Platform module

* [TIMOB-23569](https://jira.appcelerator.org/browse/TIMOB-23569) - SDK Release containing 2 Bug Fixes

* [TIMOB-23575](https://jira.appcelerator.org/browse/TIMOB-23575) - Windows: CLI does not check correct directories when detecting app icons

* [TIMOB-23607](https://jira.appcelerator.org/browse/TIMOB-23607) - Windows: View gets snapped back to center when animating using the right property

* [TIMOB-23623](https://jira.appcelerator.org/browse/TIMOB-23623) - iOS: Ti.setUserAgent() doesn't exist

* [TIMOB-23624](https://jira.appcelerator.org/browse/TIMOB-23624) - iOS: Ti.userAgent ignored for Ti.Network.HTTPClient operations

* [TIMOB-23628](https://jira.appcelerator.org/browse/TIMOB-23628) - Android: Unable to debug an application with run-on-main-thread set to true

* [TIMOB-23638](https://jira.appcelerator.org/browse/TIMOB-23638) - Android: Unable to debug an application with newer V8

* [TIMOB-23639](https://jira.appcelerator.org/browse/TIMOB-23639) - Windows: Updating a tableviewsection with the index of a deleted tableviewsection adds the deleted tableviewsection back

* [TIMOB-23641](https://jira.appcelerator.org/browse/TIMOB-23641) - Windows: list section instertItemsAt not working

* [TIMOB-23653](https://jira.appcelerator.org/browse/TIMOB-23653) - Windows: Animation returns to original opacity property when finished

* [TIMOB-23657](https://jira.appcelerator.org/browse/TIMOB-23657) - Windows: borderRadius does not work for some components

* [TIMOB-23658](https://jira.appcelerator.org/browse/TIMOB-23658) - Windows: Ti.UI.Label.border\* properties do not work when not using width and height

* [TIMOB-23662](https://jira.appcelerator.org/browse/TIMOB-23662) - Windows: can't detect Windows Phone SDK if no emulator installed

* [TIMOB-23666](https://jira.appcelerator.org/browse/TIMOB-23666) - iOS: Button setting remote backgroundImage doesn't appear to work

* [TIMOB-23674](https://jira.appcelerator.org/browse/TIMOB-23674) - iOS - Compilation error

* [TIMOB-23676](https://jira.appcelerator.org/browse/TIMOB-23676) - Security alert : Google Play Warning: WebViewClient.onReceivedSslError handler

* [TIMOB-23687](https://jira.appcelerator.org/browse/TIMOB-23687) - Windows: Camera can default to front facing camera on some devices

* [TIMOB-23693](https://jira.appcelerator.org/browse/TIMOB-23693) - Windows: setting a headerView/footerView for a listview without a height set on the view makes the view oversized

* [TIMOB-23694](https://jira.appcelerator.org/browse/TIMOB-23694) - Windows: setting a headerView/footerView for a tableview without a height set on the view makes the view oversized

* [TIMOB-23696](https://jira.appcelerator.org/browse/TIMOB-23696) - Windows: Ti.App.\_restart() does not function correctly

* [TIMOB-23699](https://jira.appcelerator.org/browse/TIMOB-23699) - iOS Media.showCamera "Temp" file issue

* [TIMOB-23708](https://jira.appcelerator.org/browse/TIMOB-23708) - Hyperloop: Android aar without asset folder fails compiling

* [TIMOB-23710](https://jira.appcelerator.org/browse/TIMOB-23710) - Android: dexer fails due to duplicate Crittercism classes

* [TIMOB-23712](https://jira.appcelerator.org/browse/TIMOB-23712) - iOS: Ti.UI.IOS.Stepper.value does not default to correct value

* [TIMOB-23716](https://jira.appcelerator.org/browse/TIMOB-23716) - Windows: Front camera preview/image is upside down

* [TIMOB-23734](https://jira.appcelerator.org/browse/TIMOB-23734) - Windows: section updateItemAt updates wrong item

* [TIMOB-23740](https://jira.appcelerator.org/browse/TIMOB-23740) - Windows: Error thrown intermitently when building for device,Opening the package from location Preprodclassic\_1.0.0.0\_ARM\_Debug.appxbundle failed

* [TIMOB-23744](https://jira.appcelerator.org/browse/TIMOB-23744) - Android: Crash using Ti.Android.R values

* [TIMOB-23745](https://jira.appcelerator.org/browse/TIMOB-23745) - Android: Crash using Math.random

* [TIMOB-23748](https://jira.appcelerator.org/browse/TIMOB-23748) - Windows: Failed to connect to WP 8.1 device

* [TIMOB-23749](https://jira.appcelerator.org/browse/TIMOB-23749) - Windows: "appc ti info" does not list Windows Phone 8.1 emulators

* [TIMOB-23753](https://jira.appcelerator.org/browse/TIMOB-23753) - Android: Crash when adding Ti.Network event listener

* [TIMOB-23762](https://jira.appcelerator.org/browse/TIMOB-23762) - Windows: Install of app to Windows 10 Mobile device fails on second build of application

* [TIMOB-23764](https://jira.appcelerator.org/browse/TIMOB-23764) - Default app created with 6.0.0 SDK comes pre populated with hyperloop 2.0.0 & in tiapp.xml & build fails as 2.0.0 is not downloaded

* [TIMOB-23766](https://jira.appcelerator.org/browse/TIMOB-23766) - Android: Default alloy & classic app crashes after launch with error : Requested module not found: ti.cloud, even though present

* [TIMOB-23767](https://jira.appcelerator.org/browse/TIMOB-23767) - Android: Tab icons & label text not visible on default classic 2 tabbed app created using 6.0.0.v20160810073036

* [TIMOB-23786](https://jira.appcelerator.org/browse/TIMOB-23786) - iOS10: Logs not working on iOS 10 devices

* [TIMOB-23787](https://jira.appcelerator.org/browse/TIMOB-23787) - Android: Can't add android modules to project when using SDK 6.0.0.v20160817065403

* [TIMOB-23800](https://jira.appcelerator.org/browse/TIMOB-23800) - Windows: CLI hangs on install of app when a different app is installed

* [TIMOB-23801](https://jira.appcelerator.org/browse/TIMOB-23801) - Titanium Android module build fails with Titanium SDK 6.1.0

* [TIMOB-23808](https://jira.appcelerator.org/browse/TIMOB-23808) - Hyperloop: iOS - Example application not building with Xcode 8 because of Swift-Error

* [TIMOB-23816](https://jira.appcelerator.org/browse/TIMOB-23816) - Windows: Unable to build to an 8.1 emulator

* [TIMOB-23827](https://jira.appcelerator.org/browse/TIMOB-23827) - Module ID with underscores not allowed despite Android only platform

* [TIMOB-23829](https://jira.appcelerator.org/browse/TIMOB-23829) - Fails to detect Android NDK on Windows

* [TIMOB-23847](https://jira.appcelerator.org/browse/TIMOB-23847) - VideoQuality - User is not able to set camera property to QUALITY\_HIGH

* [TIMOB-23849](https://jira.appcelerator.org/browse/TIMOB-23849) - Windows: terrible performance of listview

* [TIMOB-23851](https://jira.appcelerator.org/browse/TIMOB-23851) - Cannot build ti.facebook iOS using "appc ti build"

* [TIMOB-23852](https://jira.appcelerator.org/browse/TIMOB-23852) - Android: http status code 411 error when building a default app with ti.cloud module

* [TIMOB-23864](https://jira.appcelerator.org/browse/TIMOB-23864) - CLI: Build process does not exit if using an incompatible module based on apiversion

* [TIMOB-23866](https://jira.appcelerator.org/browse/TIMOB-23866) - Windows: uap capability included when building for 8.1

* [TIMOB-23869](https://jira.appcelerator.org/browse/TIMOB-23869) - Windows: Ti.Media.takePicture usage does not include videosLibrary capability

* [TIMOB-23870](https://jira.appcelerator.org/browse/TIMOB-23870) - Windows: 'The request is not supported' error thrown when using front camera and tapping view to focus

* [TIMOB-23871](https://jira.appcelerator.org/browse/TIMOB-23871) - iOS: Safari/WebInspector Debugger crashes app when hitting breakpoint

* [TIMOB-23873](https://jira.appcelerator.org/browse/TIMOB-23873) - Android: Template for Manifest needs updating

* [TIMOB-23875](https://jira.appcelerator.org/browse/TIMOB-23875) - Windows: Incorrect \_\_filename value

* [TIMOB-23880](https://jira.appcelerator.org/browse/TIMOB-23880) - Windows: Default classic app template does not show tabs

* [TIMOB-23901](https://jira.appcelerator.org/browse/TIMOB-23901) - Android: App stuck on splash screen when app run second time with analytics to true from tiapp.xml

* [TIMOB-23920](https://jira.appcelerator.org/browse/TIMOB-23920) - iOS: Ti.UI.Picker not working in Ti.UI.ListView on device

* [TIMOB-23923](https://jira.appcelerator.org/browse/TIMOB-23923) - iOS 10: Ti.Media.queryMusicLibrary crashes the app

* [TIMOB-23925](https://jira.appcelerator.org/browse/TIMOB-23925) - iOS: App rejected because some <key> in the Info.plist aren't specified

* [TIMOB-23929](https://jira.appcelerator.org/browse/TIMOB-23929) - Rename contextId to stop confusing Apple's private API scan

* [TIMOB-23930](https://jira.appcelerator.org/browse/TIMOB-23930) - Windows: ScrollView doesn't load complete data

* [TIMOB-23935](https://jira.appcelerator.org/browse/TIMOB-23935) - iOS: Ti.Media.switchCamera() fails to switch camera.

* [TIMOB-23936](https://jira.appcelerator.org/browse/TIMOB-23936) - Ti.Media.showCamera() with overlay bug on iOS 10

* [TIMOB-23937](https://jira.appcelerator.org/browse/TIMOB-23937) - iOS: Edited videos are not saved to photo gallery

* [TIMOB-23938](https://jira.appcelerator.org/browse/TIMOB-23938) - Android: Titanium crashes if back button is hit soon enough after app launch

* [TIMOB-23939](https://jira.appcelerator.org/browse/TIMOB-23939) - IOS: Packaging IOS modules fails with xcode-dist xcodebuild error

* [TIMOB-23943](https://jira.appcelerator.org/browse/TIMOB-23943) - Android module build doesn't use proper logging

* [TIMOB-23946](https://jira.appcelerator.org/browse/TIMOB-23946) - Android: Creating a default alloy/classic project with only android as target created a "\_MACOSX folder in the project root with touchtest module in it.

* [TIMOB-23957](https://jira.appcelerator.org/browse/TIMOB-23957) - iOS: Building app with extension containing swift code doesn't set correct Xcode build settings

* [TIMOB-23964](https://jira.appcelerator.org/browse/TIMOB-23964) - Android: Ti.UI.Switch should default to false but is undefined

* [TIMOB-23966](https://jira.appcelerator.org/browse/TIMOB-23966) - Android: Unable to send a feature event with a number as the data objects key

* [TIMOB-23968](https://jira.appcelerator.org/browse/TIMOB-23968) - Android: problems in webview since 5.4.0

* [TIMOB-23969](https://jira.appcelerator.org/browse/TIMOB-23969) - Android: Exiting an app by pressing back prevents the app from being resumed

* [TIMOB-23973](https://jira.appcelerator.org/browse/TIMOB-23973) - iOS: Events on images inside ListViewItem templates not fired (regression)

* [TIMOB-23978](https://jira.appcelerator.org/browse/TIMOB-23978) - \_MACOSX folder present in touchtest plugin 8244.293.2 folder

* [TIMOB-23983](https://jira.appcelerator.org/browse/TIMOB-23983) - iOS Debugger: Breakpoint not hit for Alloy applications

* [TIMOB-23989](https://jira.appcelerator.org/browse/TIMOB-23989) - Android: When the back button is pressed on android it closes the app even if it is not the last window with SDK 6.0.0

* [TIMOB-23999](https://jira.appcelerator.org/browse/TIMOB-23999) - CLI: Building a module on Windows errors with 'Missing required manifest key "name"'

* [TIMOB-24005](https://jira.appcelerator.org/browse/TIMOB-24005) - Android: Architectures - armeabi armeabi-v7a cause build error at compiling module

* [TIMOB-24008](https://jira.appcelerator.org/browse/TIMOB-24008) - iOS: Can't use Xcode managed provisioning profiles to build app?

* [TIMOB-24010](https://jira.appcelerator.org/browse/TIMOB-24010) - Android: Update Google Play services for ti.geofence

* [TIMOB-24011](https://jira.appcelerator.org/browse/TIMOB-24011) - iOS: require fails to resolve paths like 'hyperloop/uikit/uilabel'

* [TIMOB-24012](https://jira.appcelerator.org/browse/TIMOB-24012) - Android: crashing trying to load non-existing JS resources inside native modules

* [TIMOB-24017](https://jira.appcelerator.org/browse/TIMOB-24017) - iOS: Add support for headers to the log server

* [TIMOB-24019](https://jira.appcelerator.org/browse/TIMOB-24019) - Windows: Listitems do not maintain itemindex when filtered

* [TIMOB-24023](https://jira.appcelerator.org/browse/TIMOB-24023) - Packaging mobile app for iOS will fail with "An uncaught exception was thrown! p is not defined"

* [TIMOB-24028](https://jira.appcelerator.org/browse/TIMOB-24028) - iOS: Build errors out with Invalid <log-server-port> found in the tiapp.xml: undefined

* [TIMOB-24030](https://jira.appcelerator.org/browse/TIMOB-24030) - iOS: Cannot build with touchtest 2.0 with development deploy type

* [TIMOB-24034](https://jira.appcelerator.org/browse/TIMOB-24034) - iOS: New logging system breaks differential builds - simulator builds only

* [TIMOB-24040](https://jira.appcelerator.org/browse/TIMOB-24040) - iOS: Set backgroundImage : "'' for TI.UI.VIEW cause app crash After SDK 5.5.0.GA

* [TIMOB-24052](https://jira.appcelerator.org/browse/TIMOB-24052) - Android: Event-listeners in Ti.UI.TextArea not working when editable = false (Regression)

* [TIMOB-24053](https://jira.appcelerator.org/browse/TIMOB-24053) - Android: passwordMask property cannot be changed after rendering (Regression)

* [TIMOB-24055](https://jira.appcelerator.org/browse/TIMOB-24055) - Android: Enabling push notifications crashes the app with latest 6.0.0.v20161019091022

* [TIMOB-24059](https://jira.appcelerator.org/browse/TIMOB-24059) - Android: Update ti.cloud require to new require standards

* [TIMOB-24061](https://jira.appcelerator.org/browse/TIMOB-24061) - Android: Different debug-log for incorrect CommonJS usage

* [TIMOB-24065](https://jira.appcelerator.org/browse/TIMOB-24065) - iOS: Using \`--build-only\` forces Development team to be required for builds

* [TIMOB-24072](https://jira.appcelerator.org/browse/TIMOB-24072) - iOS: Classic projects always invoke xcodebuild; Differential builds

* [TIMOB-24079](https://jira.appcelerator.org/browse/TIMOB-24079) - Android Debugger: Not all breakpoints are hit during debug of android app with SDK 6.0.0

* [TIMOB-24091](https://jira.appcelerator.org/browse/TIMOB-24091) - If you package for mobile web, then "\[ERROR\] ENOENT: no such file or directory" error is returned

* [TIMOB-24107](https://jira.appcelerator.org/browse/TIMOB-24107) - iOS: Setting "navBarHidden" before opening Ti.UI.iOS.NavigationWindow has no effect (regression)

* [TIMOB-24117](https://jira.appcelerator.org/browse/TIMOB-24117) - Android: Fix ti.map and ti.admob modules "duplicate entry" error

* [TIMOB-24127](https://jira.appcelerator.org/browse/TIMOB-24127) - Android: Expected 9683000 but found 9452000 error when using map module 3.0.1

* [TIMOB-24139](https://jira.appcelerator.org/browse/TIMOB-24139) - iOS: App is crashed if it contain Button with backgroundImage property (regression)

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 6.0.0 as of November 14th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.Properties.removeAllProperties | method | Removes all properties that have been set by the user on runtime, or does nothing otherwise. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
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
| Titanium.App.iOS.handleurl | event | Fired when a new URL is handled by the application. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_CHAIR | property | Attendee role is chair. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_NON\_PARTICIPANT | property | Attendee is not a participant. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_OPTIONAL | property | Attendee role is optional. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_REQUIRED | property | Attendee role is required. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_UNKNOWN | property | Attendee role is unknown. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_ACCEPTED | property | Attendee status is accepted. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_DECLINED | property | Attendee status is declined. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_DELEGATED | property | Attendee status is delegated. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_IN\_PROCESS | property | Attendee status is in process. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_PENDING | property | Attendee status is pending. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_TENTATIVE | property | Attendee status is tentative. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_UNKNOWN | property | Attendee status is unknown. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_GROUP | property | Attendee type is group. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_PERSON | property | Attendee type is person. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_RESOURCE | property | Attendee type is resource. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_ROOM | property | Attendee type is room. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_UNKNOWN | property | Attendee type is unknown. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Attendee | object | An object that represents a single attendee of an event. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Event.attendees | property | The list of event attendees. This list will be empty if the event has no attendees. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Event.getAttendees | method | Gets the value of the Titanium.Calendar.Event.attendees property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.canceledOnTouchOutside | property | When this is set to `true`, the dialog is canceled when touched outside the window's bounds. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.getCanceledOnTouchOutside | method | Gets the value of the Titanium.UI.AlertDialog.canceledOnTouchOutside property. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.getPreferred | method | Gets the value of the Titanium.UI.AlertDialog.preferred property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.preferred | property | Index to define the preferred button. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setCanceledOnTouchOutside | method | Sets the value of the Titanium.UI.AlertDialog.canceledOnTouchOutside property. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.setPreferred | method | Sets the value of the Titanium.UI.AlertDialog.preferred property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasColors | method | Indicates whether any colors are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasImages | method | Indicates whether any images are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasURLs | method | Indicates whether any URLs are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.RefreshControl.refreshend | event | Fired in response to a user finished action to refresh the contents of the table view, list view or scroll view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.getKeyboardDismissMode | method | Gets the value of the Titanium.UI.ScrollView.keyboardDismissMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.getRefreshControl | method | Gets the value of the Titanium.UI.ScrollView.refreshControl property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.keyboardDismissMode | property | The manner in which the keyboard is dismissed when a drag begins in the scroll view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.refreshControl | property | View positioned above the first row that is only revealed when the user drags the scroll view contents down. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.setKeyboardDismissMode | method | Sets the value of the Titanium.UI.ScrollView.keyboardDismissMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.setRefreshControl | method | Sets the value of the Titanium.UI.ScrollView.refreshControl property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_ELLIPSIZE\_TRUNCATE\_CHAR\_WRAP | property | Add ellipses before the first character that doesnt fit. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_ELLIPSIZE\_TRUNCATE\_CLIP | property | Lines are simply not drawn past the edge of the text container. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_ELLIPSIZE\_TRUNCATE\_NONE | property | Disables ellipsizing of the label. The text will be cut off if it is too long. (New API, supported on Android.) |
| Titanium.UI.TEXT\_ELLIPSIZE\_TRUNCATE\_WORD\_WRAP | property | Add ellipses at word boundaries, unless the word itself doesn't fit on a single line. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_CALLOUT | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_TITLE1 | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_TITLE2 | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_TITLE3 | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextArea.getPadding | method | Gets the value of the Titanium.UI.TextArea.padding property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.padding | property | Sets the left and right padding of this TextArea. The text will always be vertically centered. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.setPadding | method | Sets the value of the Titanium.UI.TextArea.padding property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.getPadding | method | Gets the value of the Titanium.UI.TextField.padding property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.padding | property | Sets the padding of this text field. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.setPadding | method | Sets the value of the Titanium.UI.TextField.padding property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Window.getHidesBarsOnSwipe | method | Gets the value of the Titanium.UI.Window.hidesBarsOnSwipe property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getHidesBarsOnTap | method | Gets the value of the Titanium.UI.Window.hidesBarsOnTap property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getHidesBarsWhenKeyboardAppears | method | Gets the value of the Titanium.UI.Window.hidesBarsWhenKeyboardAppears property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getHidesBarsWhenVerticallyCompact | method | Gets the value of the Titanium.UI.Window.hidesBarsWhenVerticallyCompact property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.hidesBarsOnSwipe | property | Set this to true to hide the navigation bar on swipe. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.hidesBarsOnTap | property | Set this to true to hide the navigation bar on tap. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.hidesBarsWhenKeyboardAppears | property | Set this to true to hide the navigation bar when the keyboard appears. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.hidesBarsWhenVerticallyCompact | property | Set this to true to hide the navigation bar in a vertically compact environment. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesBarsOnSwipe | method | Sets the value of the Titanium.UI.Window.hidesBarsOnSwipe property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesBarsOnTap | method | Sets the value of the Titanium.UI.Window.hidesBarsOnTap property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesBarsWhenKeyboardAppears | method | Sets the value of the Titanium.UI.Window.hidesBarsWhenKeyboardAppears property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesBarsWhenVerticallyCompact | method | Sets the value of the Titanium.UI.Window.hidesBarsWhenVerticallyCompact property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.getTintColor | method | Gets the value of the Titanium.UI.tintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.NavigationWindow.popToRootWindow | method | Closes all windows that are currently opened inside the navigation window. (New API, supported on iPhone and iPad.) |
| Titanium.UI.setTintColor | method | Sets the value of the Titanium.UI.tintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.tintColor | property | Sets the global tint color of the application. It is inherited by the child views and can be overwritten by them using the `tintColor` property. (New API, supported on iPhone and iPad.) |
| Titanium.WatchSession.getHasContentPending | method | Gets the value of the Titanium.WatchSession.hasContentPending property. (New API, supported on iPhone.) |
| Titanium.WatchSession.getRemainingComplicationUserInfoTransfers | method | Gets the value of the Titanium.WatchSession.remainingComplicationUserInfoTransfers property. (New API, supported on iPhone.) |
| Titanium.WatchSession.hasContentPending | property | Returns `true` if there is more content for the session to deliver. (New API, supported on iPhone.) |
| Titanium.WatchSession.remainingComplicationUserInfoTransfers | property | The number of calls remaining to `transferCurrentComplication` before the system starts transferring the complicationUserInfo as regular userInfos. (New API, supported on iPhone.) |

### Deprecated APIs

The following APIs are deprecated in Release 6.0.0 as of November 14th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.UI.TextArea.getPaddingLeft | method | Use Titanium.UI.TextArea.padding instead. |
| Titanium.UI.TextArea.getPaddingRight | method | Use Titanium.UI.TextArea.padding instead. |
| Titanium.UI.TextArea.paddingLeft | property | Use Titanium.UI.TextArea.padding instead. |
| Titanium.UI.TextArea.paddingRight | property | Use Titanium.UI.TextArea.padding instead. |
| Titanium.UI.TextArea.setPaddingLeft | method | Use Titanium.UI.TextArea.padding instead. |
| Titanium.UI.TextArea.setPaddingRight | method | Use Titanium.UI.TextArea.padding instead. |
| Titanium.UI.TextField.getPaddingLeft | method | Use Titanium.UI.TextField.padding instead. |
| Titanium.UI.TextField.getPaddingRight | method | Use Titanium.UI.TextField.padding instead. |
| Titanium.UI.TextField.paddingLeft | property | Use Titanium.UI.TextField.padding instead. |
| Titanium.UI.TextField.paddingRight | property | Use Titanium.UI.TextField.padding instead. |
| Titanium.UI.TextField.setPaddingLeft | method | Use Titanium.UI.TextField.padding instead. |
| Titanium.UI.TextField.setPaddingRight | method | Use Titanium.UI.TextField.padding instead. |

### Removed APIs

The following APIs have been removed in Release 6.0.0 as of November 14th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Filesystem.File.getWriteable | method | Use Titanium.Filesystem.File.writable instead. |
| Titanium.Filesystem.File.writeable | property | Use Titanium.Filesystem.File.writable instead. |
| Titanium.Media.VideoPlayer.getMovieControlMode | method | Use Titanium.Media.VideoPlayer.mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.movieControlMode | property | Use Titanium.Media.VideoPlayer.mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.setMovieControlMode | method | Use Titanium.Media.VideoPlayer.mediaControlStyle instead. |
| Titanium.UI.AUTODETECT\_ADDRESS | property | Use Titanium.UI.AUTOLINK\_MAP\_ADDRESSES instead. |
| Titanium.UI.AUTODETECT\_ALL | property | Use Titanium.UI.AUTOLINK\_ALL instead. |
| Titanium.UI.AUTODETECT\_CALENDAR | property | Use Titanium.UI.AUTOLINK\_CALENDAR instead. |
| Titanium.UI.AUTODETECT\_LINK | property | Use Titanium.UI.AUTOLINK\_URLS instead. |
| Titanium.UI.AUTODETECT\_NONE | property | Use Titanium.UI.AUTOLINK\_NONE instead. |
| Titanium.UI.AUTODETECT\_PHONE | property | Use Titanium.UI.AUTOLINK\_PHONE\_NUMBERS instead. |
| Titanium.UI.BLEND\_MODE\_CLEAR | property | Use Titanium.UI.iOS.BLEND\_MODE\_CLEAR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_BURN | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_BURN instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_DODGE | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_DODGE instead. |
| Titanium.UI.BLEND\_MODE\_COPY | property | Use Titanium.UI.iOS.BLEND\_MODE\_COPY instead. |
| Titanium.UI.BLEND\_MODE\_DARKEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DARKEN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_IN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OVER instead. |
| Titanium.UI.BLEND\_MODE\_DIFFERENCE | property | Use Titanium.UI.iOS.BLEND\_MODE\_DIFFERENCE instead. |
| Titanium.UI.BLEND\_MODE\_EXCLUSION | property | Use Titanium.UI.iOS.BLEND\_MODE\_EXCLUSION instead. |
| Titanium.UI.BLEND\_MODE\_HARD\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_HARD\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_HUE | property | Use Titanium.UI.iOS.BLEND\_MODE\_HUE instead. |
| Titanium.UI.BLEND\_MODE\_LIGHTEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_LIGHTEN instead. |
| Titanium.UI.BLEND\_MODE\_LUMINOSITY | property | Use Titanium.UI.iOS.BLEND\_MODE\_LUMINOSITY instead. |
| Titanium.UI.BLEND\_MODE\_MULTIPLY | property | Use Titanium.UI.iOS.BLEND\_MODE\_MULTIPLY instead. |
| Titanium.UI.BLEND\_MODE\_NORMAL | property | Use Titanium.UI.iOS.BLEND\_MODE\_NORMAL instead. |
| Titanium.UI.BLEND\_MODE\_OVERLAY | property | Use Titanium.UI.iOS.BLEND\_MODE\_OVERLAY instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_DARKER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_DARKER instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_LIGHTER instead. |
| Titanium.UI.BLEND\_MODE\_SATURATION | property | Use Titanium.UI.iOS.BLEND\_MODE\_SATURATION instead. |
| Titanium.UI.BLEND\_MODE\_SCREEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SCREEN instead. |
| Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOFT\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_IN instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_XOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_XOR instead. |
| Titanium.UI.Window.getUrl | method |  |
| Titanium.UI.Window.setUrl | method |  |
| Titanium.UI.Window.url | property |  |
| Titanium.UI.iOS.3DMatrix | object | Use Titanium.UI.3DMatrix instead. |
| Titanium.UI.iOS.Attribute | object | Use Attribute instead. |
| Titanium.UI.iOS.AttributedString | object | Use Titanium.UI.AttributedString instead. |
| Titanium.UI.iOS.NavigationWindow.getUrl | method |  |
| Titanium.UI.iOS.NavigationWindow.setUrl | method |  |
| Titanium.UI.iOS.NavigationWindow.url | property |  |
| Titanium.UI.iPad.DocumentViewer | object | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.SplitWindow | object | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPad.createDocumentViewer | method | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.createSplitWindow | method | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPhone.getStatusBarHidden | method | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.getStatusBarStyle | method | Use Titanium.UI.Window.statusBarStyle instead. |
| Titanium.UI.iPhone.statusBarHidden | property | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.statusBarStyle | property | Use Titanium.UI.Window.statusBarStyle instead. |

## Known issues

* [TIMOB-23761](https://jira.appcelerator.org/browse/TIMOB-23761) - Hyperloop: Errors when running project with liveview and hyperloop enabled

    * Projects that include or reference Hyperloop and have LiveView enabled encounter the following error

        ```
        [INFO] : [LiveView] Error Evaluating app.js @ Line: <null> [ERROR] : Couldn't find module: UIKit/UIAlertController for architecture: arm64 [ERROR] : File: app.js [ERROR] : Line: <null> [ERROR] : SourceId: <null> [ERROR] : Backtrace: [ERROR] : undefined
        ```

* [TIMOB-24037](https://jira.appcelerator.org/browse/TIMOB-24037) - Android: Debugging not working with hyperloop enabled with run-on-main-thread set to true or false

    * Debugging doesn't work with Hyperloop enabled with run-on-main-thread set to either true or false
