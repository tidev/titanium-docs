---
title: >-
  iOS Modules - Use Native UI Application Delegates in Hyperloop and Native
  Modules
weight: '10'
---

# iOS Modules - Use Native UI Application Delegates in Hyperloop and Native Modules

::: tip 💡 Hint
The API's described in this document require Titanium SDK 7.3.0+ and Hyperloop 3.1.2+ (if used).
:::

## Introduction

When working with Hyperloop and native modules, there are situations where you want to be notified about application-level events, like:

* Finish launching

* Push notifications (background and foreground)

* Background tasks

* URL-handlers / Deep linking

* Shortcut item interaction

* User activity handling

Titanium exposes events to the SDK for all of these, but for module developers (both for Objective-C modules and Hyperloop modules), there have been confusion on how to access them. For example, a module developer would like to use an own provider for handling background push notifications. As part of [TIMOB-24266](https://jira.appcelerator.org/browse/TIMOB-24266), we generically expose those events ("delegates" in the native world) to developers. In detail, we expose all delegates of the [UIApplicationDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate?language=objc).

## Examples

Say you want to configure an API when your application finished booting. The [application:didFinishLaunchingWithOptions](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1622921-application?language=objc) delegate is made for this. In your native module, you now simply subscribe to the UIApplicationDelegate of the TiApp class, which will then be triggered once the Titanium core receives the delegate message from the iOS core.

### Native Module

```objectivec
- (void)_configure
{
  [super _configure];
  [[TiApp app] registerApplicationDelegate:self];
}
```

The `_configure` selector is available in your module class, e.g. "FacebookModule.m" for [Ti.Facebook](#!/api/Titanium.Facebook). Please ensure to also call the super-class to avoid state glitches in your module.

Now that you subscribed to the application delegate, you can use all delegate methods like you would do in a native application. Example for didFinishLaunchingWithOptions:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSLog(@"[INFO] Hey there!");
}
```

This will log a simple message with an INFO log-level (remember, there are _TRACE_, _INFO_, _WARN_ and _ERROR_). Here you would configure your native SDK and your module would be ready to go. And this is it! Update your modules today and make use of the new core-technologies. But please note that you need to bump the minimum SDK to 7.1.0 in case you are using this solution. Older SDK's will not crash but ignore the setting because the `registerApplicationDelegate:` selector will be nil.

### Hyperloop

To use the new feature in Hyperloop, subscribe with the registerApplicationDelegate method as well, create the delegate and configure the methods you need. This will likely also be handled internally in the future, so that you only need to require the utility and it does everything else for you.

```javascript
var TiApp = require('Titanium/TiApp');
var UIApplicationDelegate = require('UIKit').UIApplicationDelegate;

var TiAppApplicationDelegate = Hyperloop.defineClass('TiAppApplicationDelegate', 'NSObject', UIApplicationDelegate);

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

var applicationDelegate = new TiAppApplicationDelegate();

// Called when the application finished launching. Initialize SDK's here for example
applicationDelegate.didFinishLaunchingWithOptions = function(application, options) {
  Ti.API.info('Hey there!');
  return true
};

TiApp.app().registerApplicationDelegate(applicationDelegate);
```

And that's it! If you have further questions, let us know!
