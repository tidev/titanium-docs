---
title: Using the TiApp Utility Class in Hyperloop iOS
weight: '40'
---

# Using the TiApp Utility Class in Hyperloop iOS

::: tip 💡 Hint
This document describes technologies available in Hyperloop 3.1.0+ and Titanium 7.3.0+.
:::

When developing iOS modules with Hyperloop, there are situations where you want to present a new view controller from your current context or pass your current context to a new view controller. Natively, you would usually reference "self" as its represents your current UIViewController subclass. In Titanium, your "self" is usually a Ti.UI.Window instance, which is fine for Titanium development, but cannot be used in native development.

That's why Hyperloop includes a number of utility methods that solve these kind of problems. They are exposed in the "TiApp" class that can be required as the following:

**indes.js**

```javascript
// ES5
var TiApp = require('Titanium/TiApp');

// ES6+
import TiApp from 'Titanium/TiApp';
```

And that's basically it. As the TiApp class is a singleton in Titanium, the instance methods are done on the `TiApp.app()` singleton and the class methods on `TiApp` directly. See the following table for a reference of the available utilities:

## Class Methods

Call these methods on the `TiApp` property directly.

| Name | Parameters | Return | Description |
| --- | --- | --- | --- |
| app() | void | TiApp | The singleton object to call all other API's on. |
| getController() | void | UIViewController | Returns the application's root view controller. |
| getTiAppProperties() | void | NSDictionary | Return a read-only dictionary from tiapp.xml properties. |

## Instance Methods

Call these methods on the `TiApp.app()` singleton.

| Name | Parameters | Return | Description |
| --- | --- | --- | --- |
| showModalController(controller, animated) | UIViewController, BOOL | void | Presents a view controller on the top presented view controller (e.g. "`presentViewController:animated`:"). |
| hideModalController(controller, animated) | UIViewController, BOOL | void | Hides a currently presented view controller (e.g. "`dismissViewControllerAnimated:completion`:"). |
| showModalError(error) | NSString | void | Shows the "red screen of death" indicating an unhandled error. |
| startNetwork() | void | void | Tells application to show network activity indicator. |
| stopNetwork() | void | void | Tells application to hide network activity indicator. |
| registerApplicationDelegate(delegate) | id<UIApplicationDelegate> | void | Registers a new `UIApplicationDelegate` to the host application. |
| unregisterApplicationDelegate(delegate) | id<UIApplicationDelegate> | void | Unregisters an existing `UIApplicationDelegate` from the host application. |
| windowIsKeyWindow() | void | BOOL | Indicates weather the current window is the key-window of the host application. |
| getRemoteDeviceUUID() | void | NSString | Returns the remote UUID for the current running device. |
| getSessionId() | void | NSString | Returns the unique identifier for the current application launch. |
| getLaunchOptions() | void | NSDictionary | Returns the application's launch options. |

## Instance Properties

Call these properties on the `TiApp.app()` singleton.

| Name | Type | Description |
| --- | --- | --- |
| userAgent | NSString | The user agent string to use for system network requests. |
| window | UIWindow | The application's primary window. |
| remoteNotification | NSDictionary | The details for the last remote notification. |
| localNotification | NSDictionary | The details for the last local notification. |
| userAgent | NSString | The user agent string to use for network requests. |

## Examples

### Present a view controller

This example shows how to open a new view controller in your current application context.

```javascript
var myNewViewController = new UIViewController(); // Create a new view controller or pass it from existing libraries / SDK's
var myNewView = UIView.alloc().initWithFrame(CGRectMake(0,0, 200, 200)); // Create a  new UIView with a 200x200 frame
myNewView.backgroundColor = UIColor.greenColor; // Set a green background color
myNewViewController.view = myNewView; // Assign the UIView instance to your UIViewController

TiApp.app().showModalController(myNewViewController, true); // Present the view controller
```

### Pass the current view controller

This example shows how to pass your top presented controller to a native method (e.g. in the Facebook SDK).

```javascript
var FBSDKShareDialog = require('FBSDKShareKit/FBSDKShareDialog');
var FBSDKShareDialogModeAutomatic = require('FBSDKShareKit').FBSDKShareDialogModeAutomatic;
var FBSDKShareLinkContent = require('FBSDKShareKit/FBSDKShareLinkContent');
var NSURL = require('Foundation/NSURL');
var TiApp = require('Titanium/TiApp');

var dialog = new FBSDKShareDialog(); // Create a new share dialog. Equals "FBSDKShareDialog.alloc().init()".
var content = new FBSDKShareLinkContent(); // Create new share content (link-based). Equals "FBSDKShareLinkContent.alloc().init()".

content.contentURL = NSURL.URLWithString('http://appcelerator.com'); // Construct a native URL
dialog.setMode(FBSDKShareDialogModeAutomatic); // Use enumerations to define how the dialog should be shown
dialog.setFromViewController(TiApp.controller); // <- This is where you pass your current context
dialog.setShareContent(content); // Assign the share content

dialog.show(); // Present it!
```

### Get the device's push notifications UUID

This examples shows how to receive the device's UUID used for remote notifications.

```javascript
var remoteUUID = TiApp.app().remoteDeviceUUID;
Ti.API.info('UUID: ' + remoteUUID);
```

### Subscribe to the UIApplicationDelegate

This example shows how to subscribe to the `UIApplicationDelegate` in order to use the `application:didFinishLaunchingWithOptions:` delegate method. For more infos, see [iOS Modules - Use Native UI Application Delegates in Hyperloop and Native Modules](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/iOS_Hyperloop_Programming_Guide/iOS_Modules_-_Use_Native_UI_Application_Delegates_in_Hyperloop_and_Native_Modules/).

::: tip 💡 Hint
Note: Many native SDK's recommend to initialize them in this delegate. In the Titanium world, you can also do this in the open event of your initial window, which effectively does the same and is more cross-platform fashioned way of implementing this.
:::

```javascript
var TiApp = require('Titanium/TiApp');
var UIApplicationDelegate = require('UIKit').UIApplicationDelegate;

// Create a new class to handle the delegate
var TiAppApplicationDelegate = Hyperloop.defineClass('TiAppApplicationDelegate', 'NSObject', 'UIApplicationDelegate');

// Add the selector to handle the result
TiAppApplicationDelegate.addMethod({
  selector: 'application:didFinishLaunchingWithOptions:',
  instance: true,
  returnType: 'BOOL',
  arguments: [
    'UIApplication',
    'NSDictionary'
  ],
  callback: function(application, options) {
    if (this.didFinishLaunchingWithOptions) {
      return this.didFinishLaunchingWithOptions(application, options);
    }
    return true;
  }
});

// Instantiate the delegate subclass
var applicationDelegate = new TiAppApplicationDelegate();

// Called when the application finished launching. Initialize SDK's here for example
applicationDelegate.didFinishLaunchingWithOptions = function(application, options) {
  Ti.API.info('Hey there!');
  return true
};

// Finally, assign your subclass to the "applicationDelegate" property of the TiApp class
TiApp.app().registerApplicationDelegate(applicationDelegate);
```
