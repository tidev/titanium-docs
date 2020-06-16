---
title: iOS Hyperloop Programming Guide
weight: '30'
---

# iOS Hyperloop Programming Guide

This document provides information on iOS Hyperloop programming requirements, classes, instantiation, methods and properties, named methods, constants, enumerations, and functions, casting, blocks, function pointers, creating your own classes, using 3rd party libraries, and additional resources.

## Requirements

See [Hyperloop Requirements](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/Hyperloop_Requirements/#requirements) for software requirements for using Hyperloop.

::: tip 💡 Important notes about your Xcode location
It is important that your Xcode installation is under the default location in `/Applications/Xcode.app`. Hyperloop uses a bundled library from Xcode to inspect the available native APIs. This can lead to errors in the generated metadata if you have selected Xcode from a different location (either via `xcode-select` or in the Location settings in the Xcode preferences) but also have another installation in the default folder. Keep this in mind if you have more than one Xcode installation on your system.
:::

## Classes

Classes in Hyperloop map to the underlying classes defined in Objective-C. For example, if you have a class such as `UIView` defined in the UIKit framework, you would reference it using a standard require such as:

```javascript
var UIView = require('UIKit/UIView');
```

This will return the `UIView` class object. Meaning, it’s not an instance of a UIView, but the `UIView` class itself (or in Objective-C parlance, the interface defined with `@interface`).

Once you have the Class reference returned from `require`, you can call normal JavaScript property and functions against it. Remember, at this point calling functions or properties against the class object above will be accessing Class level Objective-C methods (not instance level).

For example, you could get the `layerClass` of the `UIView` using the example:

```javascript
var layerClass = UIView.layerClass;
```

## Instantiation

To instantiate a native Class and create an instance, you can use the normal `alloc init`style pattern from Objective-C:

```javascript
var view = UIView.alloc().init();
```

Or, to simplify and make it more standard JavaScript convention, for default initializers you can use `new`:

```javascript
var view = new UIView();
```

This is the equivalent of the `alloc init` example above. When constructing an instance using `new`, it will always call the default initializer that is designated as `init`. If you have a special initializer that takes arguments, you can use the following as you would in Objective-C:

```javascript
var view = UIView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));
```

## Methods and properties

Methods in Objective-C are mapped to JavaScript functions. Properties in Objective-C are mapped to JavaScript property accessors.

For example:

```objectivec
@interface UIView : UIControl
@property UIColor * backgroundColor;
- (void)addSubview:(UIView *)view;
- (void)setColor:(UIColor *) forMyState:(MyState)state;

@end
```

Would map to the following in JavaScript:

```
view.backgroundColor = UIColor.redColor;
view.addSubview(label);
view.setColorForMyState(UIColor.redColor, MyState.TestState);
```

You can also use auto-generated property-setters like `view.setBackgroundColor()`. Note that methods with multiple arguments are simply concatenated by their signature. More examples of that behavior:

```javascript
/** -- Simple methods with two arguments -- **/

// Native (Obj-C)
[myView insertSubview:anotherView atIndex: 0];

// Hyperloop (JavaScript)
myView.insertSubViewAtIndex(anotherView, index);

/** -- Complex methods with blocks -- **/

// Native (Obj-C)
[UIView.animateWithDuration:1000.0 animations:^{
  // Do animation
} completion:(BOOL finished)^{
  // Finished animation
}];

// Hyperloop
UIView.animateWithDurationAnimationsCompletion(1000.0, function animations () {
  // Do animation
}, function completion (finished) {
  // Finished animation
});
```

Note that for the `animateWithDuration` method in Hyperloop, you do not need to name the callbacks, but it improves the readability and is a well used JavaScript pattern.

## Named methods

If you have a selector with multiple parameters, the name of the function will be slightly different since JavaScript cannot receive multiple parameters as part of a function call. For example, to send a message with the selector `addAttribute:value:range:` you would use the function named `addAttributeValueRange` instead. Hyperloop will camel-case each receiver name in the selector and remove the ":" character to formulate the name of the method. Arguments should then be passed to the function in the same order as you would in Objective-C.

## Constants, enumerations, and functions

Constants, enumerations, and functions defined in the Framework are available in the Framework package. For example, to reference the enum `UISemanticContentAttribute` you would reference it such as:

```javascript
var UISemanticContentAttributeUnspecified = require('UIKit').UISemanticContentAttributeUnspecified;
view.semanticContentAttribute = UISemanticContentAttributeUnspecified;
```

The constants, enumerations, and functions are read-only properties of the UIKit framework.

## Casting

Sometimes interfaces define generic return types such as `NSObject` or `id` and you will need to cast them to a different type to then reference methods and properties of the class. You can use the special class function `cast` on any Class to return a casted object. For example, suppose the result of the function returned an id but you know the implementation is actually a `UIView`. You could use the following:

```javascript
var view = UIView.cast(object);
view.backgroundColor = UIColor.redColor;
```

**Be careful with casting**: If you cast an object which is actually something different, you will experience an error and likely a crash. You can also cast a Titanium UI-component into its equivalent. For example, this would work:

```javascript
var tiView = Ti.UI.createView({
  backgroundColor : 'red'
});
var nativeView = UIView.cast(tiView);
console.log('color should be red', nativeView.backgroundColor);
```

## Blocks

Blocks in Hyperloop are translated into JavaScript callback-functions.

For example, to animate a view which normally takes a block:

```
UIView.animateWithDurationAnimationsCompletion(1.0, function() {
  view.layer.opacity = 0.0;
}, function(done) {
    // The animation has been completed
});
```

## Function pointers

Currently, function pointers are not currently supported in the latest version.

## Creating your own classes

Hyperloop provides you the ability to dynamically create your own Objective-C classes at runtime. Once created, these classes can be used as normal in either Hyperloop or passed to native calls. Let’s create a simple custom `UIView`:

```javascript
var MyClass = Hyperloop.defineClass('MyClass', 'UIView');
```

This will create a new class in the Objective-C runtime named `MyClass` which will extend UIView which is equivalent to the following code:

```
@interface MyClass : UIView
@end
```

You can also pass an Array of Strings as the third argument which are the protocols to implement for the new class:

```javascript
var MyView = Hyperloop.defineClass('MyClass', 'UIView', ['UIAppearance']);
```

You can now add methods:

```
MyView.addMethod({
  selector: 'drawRect:',
  instance: true,
  arguments: ['CGRect'],
  callback: function(rect) {
    // this code is executed when the drawRect: delegate is called
  }
});
```

Hyperloop supports the following set of properties for adding methods:

* `arguments` can be either an Array or String of argument types (which can be either Objective-C encoding types or general type names such as `float` or `int`).

* `returnType` can be a String return type (which can be either Objective-C encoding types or general type names such as `float` or `int`). If no return is required (a `void` return type), you can omit the `returnType` property altogether and void will be implied.

Another example with multiple arguments using simplified types:

```
MyView.addMethod({
  selector: 'foo:bar:hello:',
  instance: true,
  returnType: 'void',
  arguments: ['int', 'float', 'id'],
  callback: function(a, b, c) {
        // Invoked when the method is called
  }
});
```

Once you have defined your class, you would just instantiate it as normal.

```javascript
var view = new MyView();
```

## Using third-party libraries

You can use Third-Party libraries in Hyperloop that are available in the dependency-manager [CocoaPods](https://cocoapods.org/).

::: warning ⚠️ Warning
As of Hyperloop 2.2.0, CocoaPods 0.39 and below will no longer be supported and we recommend that you use Cocoapods 1.x or the latest version.
:::

### CocoaPods

Hyperloop supports CocoaPods as a way to manage Third-party dependencies in your Hyperloop-enabled project.

You must first install CocoaPods if you do not already have it installed. You can install using: `sudo gem install cocoapods`

Once you have CocoaPods installed you can create a Podfile in your Titanium project directory such as:

**Podfile**

```ruby
# This is required for CocoaPods 1.x
install! 'cocoapods',
         :integrate_targets => false

platform :ios, '8.0'
target 'MyProject' do
    pod 'JBChartView'
end
```

Note that `MyProject` would be replaced with the name of your Titanium project. The above example will use the [JBChartView](https://github.com/Jawbone/JBChartView) framework as a dependency.

That’s it! CocoaPods and the Hyperloop compiler will do the rest to manage pulling down the required dependencies, compiling them and integrating them into the Xcode build.

Let’s now use the imported project:

```javascript
var JBBarChartView = require('JBChartView/JBBarChartView');
var chart = new JBBarChartView();
chart.minimumValue = 1;
chart.maximumValue = 100;
```

::: danger ❗️ Warning
Note for Ad-Hoc builds: The build can fail if some frameworks importted via CocoaPods contain Bitcode and some not. You can fix this issue by disabling Bitcode for third-party frameworks in that case. Add the following snippet to your Podfile:

**Podfile**

```ruby
# Fix build error for mixed Bitcode frameworks in CocoaPods
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['ENABLE_BITCODE'] = 'NO'
    end
  end
end
```
:::

### Custom frameworks and libraries

::: danger ❗️ Warning
The following functionality has been deprecated in Hyperloop 2.2.0 and will be removed in future versions of Hyperloop. Since Hyperloop 2.2.0, you can drop your native iOS framework (static or dynamic) into your `app/platform/ios` (Alloy) or `platform/ios` (Classic Titanium) folder. The manual configuration via the `hyperloop.ios.thirdparty` object of the `appc.js` is not necessary anymore.
:::

In addition to CocoaPods, you can include third-party or first-party custom code by including a reference in `appc.js` under the `thirdparty` property. For example, to include custom objective-c from the project’s src directory you could provide:

**appc.js**

```javascript
module.exports = {
  hyperloop: {
    ios: {
      thirdparty: {
        'MyFramework': {
          source: ['src'],
          header: 'src',
          resource: 'src'
        }
      }
    }
  }
};
```

* The `source` property can be either an Array or String of source directories to include in the compile. This is optional.

* The `header` property can be either an Array or String of header directories to include in the compile. This is required.

* The `resource` property can be either an Array or String of resource directories to search for resources or files to compile (images, story boards, xibs, etc). These files will be flattened and copied directly into the root of the application and can be loaded with `NSBundle`.

To provide additional compiler flags, you can add them in the `xcodebuild` property of `ios` such as:

**appc.js**

```javascript
module.exports = {
  hyperloop: {
    ios: {
      xcodebuild: {
        flags: {
          LIBRARY_SEARCH_PATHS: '../../src',
          OTHER_LDFLAGS: '-lMyLibrary'
        }
      }
    }
  }
};
```

Note that the "flags" key takes a relative path from the build/iphone directory.

### Using Swift

In addition to Objective-C, you can import third-party libraries written in Swift. Any `*.swift` files found in your `src` directories will automatically be compiled and available to use in your JavaScript just like Objective-C APIs.

::: tip 💡 Hint
It is recommended to use CocoaPods and the use\_frameworks! flag to properly manage Swift frameworks.
:::

### Customizing your Xcode build

You can further customize the Xcode build by defining an `appc.js` file in the root of your project. This project will provide some additional configuration which the Hyperloop compiler will read when invoking Xcode.

For example:

**appc.js**

```javascript
module.exports = {
  hyperloop: {
    ios: {
      xcodebuild: {
        flags: {
          GCC_PREPROCESSOR_DEFINITIONS: 'foo=bar'
        }
      }
    }
  }
};
```

Any `flags` added to the `xcodebuild` property will be passed to `xcodebuild` . Any `frameworks` in the array provided will be automatically added to the xcode project. _Note: Any referenced frameworks in your Hyperloop code are automatically added for you. However, this gives you even more control to custom your compile environment._

## Resources

Any Xcode resources that are found in your `Resources` folder (for Classic projects) or `app`folder (for Alloy projects) will be automatically be compiled and/or copied to your application root directory. Any intermediate folders will be flattened automatically.

The following resources will be compiled automatically:

* Storyboard (\*.storyboard)

* XC Data Model (\*.xcdatamodel, \*.xcdatamodeld, \*.xcmappingmodel)

* Interface Builder (\*.xib)

The other resources will be copied such as PNG files.

It is recommended that you place any platform specific files under `Resources/iphone` (Titanium classic) or `app/assets/iphone` (Alloy).
