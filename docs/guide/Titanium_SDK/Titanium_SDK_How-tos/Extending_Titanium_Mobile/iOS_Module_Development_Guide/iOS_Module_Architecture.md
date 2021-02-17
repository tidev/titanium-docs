---
title: iOS Module Architecture
weight: '20'
---

# iOS Module Architecture

## Introduction

The Titanium SDK is based on a modular architecture, which can be utilized to extend the SDK by building modules. The module architecture contains the following key interface components:

* **_Proxy_**: A base class that represents the native binding between your JavaScript code and native code

* **_Module_**: A special type of Proxy that describes a specific API set or namespace

* **_ViewProxy_**: A specialized Proxy that knows how to render Views

* **_View_**: The visual representation of a UI component which Titanium can render

When building a Module, you can only have one Module class but you can have zero or more Proxies, Views and ViewProxies.

To return visual data between JavaScript and native code, create a View and a ViewProxy. Each View requires a View Proxy. The ViewProxy represents the model data (which is kept inside the proxy itself in case the View needs to be released) and is responsible for exposing the APIs and events that the View supports.

To return non-visual data between JavaScript and native code, create a Proxy. The Proxy knows how to handle any method and property, and dispatching and firing events.

These components require special class names and method signatures. Each components is described in further detail below.

## Example module

Check out the [Ti.ModDevGuide module](https://github.com/appcelerator-modules/ti.moddevguide) on Github that uses the following best practices to build a cross-platform Titanium module for iOS / Android!

## Module

A Module is a class that provides an API point with a particular ID. That ID can then be used to `require` the module from JavaScript. Each module must have one module and only one module class can be defined.

Module's can also expose properties and methods to JavaScript. See the Proxy section for more information.

### Module Class

To create a Module, the class name and filename is the module ID in camel case notation and suffixed with `Module`. The class must extend the `TiModule` class. Note that when you create a new module, you already have a boilerplate module class.

**ComExampleTestModule.h**

```objectivec
#import "TiModule.h"
@interface ComExampleTestModule : TiModule
@end
```

To access the module from JavaScript, pass the module ID to the `require` method.

```javascript
var module = require('com.example.test');
```

### Module Lifecycle

The module provides several places for you to hook into the application's lifecycle.

When you create a iOS module, the boiler plate code provides you with the default `startup` and `shutdown` methods to execute code when the module is loaded or unloaded from the application, respectively.

You can also use the `load` method to execute code before the application starts. This allows the application to register callbacks for lifespan events, such as `application:didFinishLaunchingWithOptions`.

For items you want to inject right into the runtime, use the`performSelectorDuringRunLoopStart` method to assign a callback that executes every time a run loop starts before the file is executed. The selector is a class method that takes one argument, which is the `TiBindingRunLoop` method. This is useful for modifying the runtime or for debugging by capturing exceptions before the application has been parsed.

```objectivec
+ (void)doALittleDance:(TiBindingRunLoop)runLoop
{
    NSLog(@"I'm doing a little dance for %@", runLoop);
}
// Binds the previous method before the application starts.
// Function executes when the runtime loop starts.
+ (void)load
{
    NSLog(@"I'mma do a little dance.");
    [self performSelectorDuringRunLoopStart:@selector(doALittleDance:)];
}
```

## Proxy

A Proxy can expose methods and properties to JavaScript. Each of these can be an NSObject, nil or a proxy. Proxies also have built-in event management

### Proxy Class

To declare a Proxy, the class name and filename must be prefixed with the module ID in camel case notation and suffixed with `Proxy`. The class must extend the `TiProxy` class.

**ComExampleTestFooProxy.h**

```objectivec
#import "TiProxy.h"
@interface ComExampleTestFooProxy : TiProxy
@end
```

**ComExampleTestFooProxy.m**

```objectivec
#import "ComExampleTestFooProxy.h"
@implementation ComExampleTestFooProxy
@end
```

When you declare a Proxy in this manner, it exposes a create method to JavaScript to allow you to create an instance of the Proxy using the module reference. The create method is the name of the class without the module ID prefix and `Proxy` suffix, with a `create` prefix. For example, the previous class will have a `createFoo()` method.

```javascript
var module = require('com.example.test');
var fooProxy = module.createFoo();
```

### Proxy Methods

Proxies expose methods and properties by simply using standard Objective-C syntax. To expose a method, a Proxy must have one of the following valid signatures:

```objectivec
// This signature is used when the method returns a value to the caller.
// The returned result can be either a valid NSObject, nil or a Proxy (or subclass thereof).
- (id)methodName:(id)args
{
    // Call the method with "var result = foo.methodName()"
}
```

```objectivec
// This signature should be used if your method returns no value.
- (void)methodName:(id)args
{
    // Call your method with "foo.methodName(args)"
}
```

Both signatures take a single argument (args) as a NSArray. However, generally, we recommend using the id declaration. This will make it easier to typecast the incoming value to another value, which we'll describe below.

If you function takes no arguments, you can simply ignore the incoming args value.

Titanium provides several convenience macros for typecasting incoming values to a specific type and extracting them from the array.

```
ENSURE_SINGLE_ITEM(args,type)
```

* The first parameter is the name of the argument.

* The second parameter is the type name that the value should be.

This macro will do two actions:

1. Pull out the first argument, that is, `[args objectAtIndex:0]`.

2. Cast the return value to the type passed in the second argument.

This macro can only be used for single-argument methods. If you have multiple arguments, you should simply used the normal array accessor methods.

```
ENSURE_UI_THREAD_0_ARGS
```

This macro can be used to ensure that the current method only runs on the UI thread (main thread). If the method is invoked on a non-main thread, it will simply re-queue the method on the UI thread. This method is equivalent to \[NSThread performSelectorOnMainThread\].

You can only use this method if you have no return result.

```
ENSURE_UI_THREAD_1_ARG(arg)
```

This macro can be used to ensure that the current method, with argument, only runs on the UI Thread. It is the same as the previous macro with the exception that it will ensure that the arguments are passed along, too.

Titanium provides a Utility library for converting and checking certain values. This library is in TiUtils and can be imported with:

```cpp
#import "TiUtils.h"
```

Some common conversion utility examples:

```objectivec
CGFloat f = [TiUtils floatValue:arg];
NSInteger f = [TiUtils intValue:arg];
NSString *value = [TiUtils stringValue:arg];
NSString *value = [TiUtils stringValue:@"key" properties:dict def:@"default"];
TiColor *bgcolor = [TiUtils colorValue:arg];
```

### Proxy Properties

To expose a JavaScript property in a Proxy, you can define a property using the Objective-C `@property` notation with the `copy` attribute:

**SomeProxy.h**

```objectivec
@interface SomeProxy: TiUIView {

}

@property(copy) NSString* propertyName;

@end
```

To expose a property in a Proxy with a custom setter or getter, declare the variable in the class's header file and implement the setter and getter methods:

**SomeProxy.h**

```objectivec
@interface SomeProxy: TiUIView {
    NSString *foo;
}
@end
```

**SomeProxy.m**

```objectivec
- (void)setPropertyName:(id)value
{
    ENSURE_STRING(value);
    foo = [value retain];
}

- (NSString *)propertyName
{
    return foo;
}
```

In the setter method, the method name must be the property name with the first letter capitalized and prefixed with `set`. Titanium will pass a single value as the converted value as the first argument (instead of an NSArray like a method).

In the getter method, your property method must return a value as either a NSObject, nil or TiProxy (or subclass).

### Type Conversions

#### Returning Object Values

The following Objective-C types can be returned without conversion:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><strong class=" ">Objective-C</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>NSString</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>NSDictionary</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>NSArray</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>NSNumber</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>NSDate</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>NSNull</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><strong class=" ">JavaScript</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>String</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Object</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Array</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Number</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Date</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>null</p></td></tr></tbody></table>

#### Returning Primitive Values

To return a primitive value from either a method or property, you should return an NSNumber with the appropriate wrapped primitive value. Titanium provides a set of macros to make this easier:

| **Macro** | **Description** |
| --- | --- |
| NUMINT | Equivalent to \[NSNumber numberWithInt:value\] |
| NUMBOOL | Equivalent to \[NSNumber numberWithInt:value\] |
| NUMLONG | Equivalent to \[NSNumber numberWithLong:value\] |
| NUMLONGLONG | Equivalent to \[NSNumber numberWithLongLong:value\] |
| NUMDOUBLE | Equivalent to \[NSNumber numberWithDouble:value\] |
| NUMFLOAT | Equivalent to \[NSNumber numberWithFloat:value\] |

#### Returning Complex Values

There are two approaches to returning complex values:

* The first approach is to set values in a NSDictionary and it. When returning a NSDictionary, Titanium converts this to a JavaScript object with each key/value being mapped into JavaScript object property/values.

* The second approach is to create a specialized Proxy. The Proxy should then be returned which will be exposed as a JavaScript object with functions and properties. Invocation against the returned Proxy will be invoked against your returned proxy instance. When you return a Proxy instance, you must autorelease it if you created it in your method.

#### Returning Files

To return a reference to a filesystem file, you should return an instance of a TiFile proxy. This will automatically handle exposing the native file and it's methods and properties. To return a file, you can use the following example:

```objectivec
return [[[TiFile alloc] initWithPath:path] autorelease];
```

#### Returning Blobs

To return a reference to a blob data (such as a NSData), you should return an instance of a TiBlob. This will automatically handle exposing some native blob operations. To return a blob, you can use the following examples:

```objectivec
return [[[TiBlob alloc] initWithData:nsdata mimetype:@"application/octet-stream"] autorelease];
return [[[TiBlob alloc] initWithImage:image] autorelease];
return [[[TiBlob alloc] initWithFile:file] autorelease];
```

In the first example above, the second argument should map to the mime type of the raw data content. If the data is binary, you can use the "application/octet-stream" value.

#### Returning CGRect

To return a CGRect, Titanium provides a proxy named TiRect. You can use the following example:

```objectivec
TiRect *result = [[[TiRect alloc] init] autorelease];
[result setRect:rect];
return result;
```

#### Returning CGPoint

To return a CGPoint, Titanium provides a proxy named TiRect. You can use the following example:

```objectivec
return [[[TiPoint alloc] initWithPoint:point] autorelease];
```

#### Returning NSRange

To return an NSRange, create an NSDictionary using the NSRange values and return the NSDictionary.
TiRange was used to return an NSRange in the past. TiRange has been removed from the SDK as of version 2.1.0 in favor of NSDictionary.
You can use the following example:

```
return [NSDictionary dictionaryWithObjectsAndKeys:NUMINT(range.location),@"location",NUMINT(range.length),@"length", nil];
```

#### Returning UIColor

To return a UIColor, Titanium provides a proxy named TiColor. You can use the following example:

```objectivec
return [[[TiColor alloc] initWithColor:color name:@"#fff"] autorelease];
```

The second argument (name) should be the textual name (if provided) of the UIColor.

### Setting Proxy Values

When you create a proxy from JavaScript, you typically pass an optional dictionary of key/value pairs. By using this pattern, Titanium provides built-in functionality to help make proxy programming easier.

Let's use a simple example:

```javascript
var my_module = require('com.example.test');
var foo = my_module.createFoo({
  'bar': '123'
});
```

Titanium will automatically correctly define and dispatch proxy factory creation methods like above. You simply need to define a Proxy with the same name as your module and the name of your method plus the Proxy suffix.

```
ComExampleTestFooProxy.h
ComExampleTestFooProxy.m
```

Your module does not need to define the createFoo method. Using this convention, Titanium already knows how to do that for you.

In your proxy, you would then want to define a setter method to handle the bar property. Upon construction (the init), Titanium will automatically call the setter for all properties passed in the constructor.

```objectivec
#import "ComExampleTestFooProxy.h"#import "TiUtils.h"
@implementation ComExampleTestFooProxy
- (void)setBar:(id)value
{
   NSString *str = [TiUtils stringValue:value];
}
@end
```

In the above example, we simply define the setter and use the TiUtils to convert the value into a stringValue. Using this utility ensures that no matter what type of value passed into the argument, we'll get the string representation. So, if the user was to pass the number 123, it would still return an NSString with the value @"123".

Proxies are also special about how they handle and hold their properties. Proxies will always store values passed in a special internal NSDictionary called 'dynprops'. This means that you can always use the following method to retrieve the value of the proxy without having to define getters and setters for each of your properties:

```
id value = [self valueForUndefinedKey:@"bar"];
```

If you use valueForUndefinedKey, you will always retrieve the original property value. However, if you want to invoke a potential getter (which may or may not return the original property value in JavaScript), you should use the following:

```
id value = [self valueForKey:@"bar"];
```

In the above code example, if we had defined a method like the following below it would be invoked instead of retrieving our internal original property.

```objectivec
- (id) bar
{
  return @"456";
}
```

Properties don't have to be passed in the constructor for them to be internally set and your setter invoked.

```
foo.bar = 789;
```

When you invoke the property of a proxy, the following will happen:

* If you have defined a setter, it will be invoked.

* If you have not defined a setter, the property and value will be stored internally in the dynprops.

If you implement a setter, you should also manually store the property yourself in dynprops. You can do this by calling the following method:

```objectivec
- (void)setBar:(id)value
{
  [self replaceValue:value forKey:@"bar" notification:NO];
}
```

The third argument (notification) tells Titanium whether you want the setter to be invoked from this property change. Since we're already inside our setter, we don't want an infinite recursion so we pass NO.

### Handling Events

Proxies automatically handle firing events and managing event listeners. Internally, when you call `addEventListener()` or `removeEventListener()` from JavaScript against a proxy instance, the proxy will automatically handle the code for managing the event listeners.

If you want to be notified upon an add or remove, you should override the methods:

```objectivec
- (void)_listenerAdded:(NSString*)type count:(int)count
{
    // A new listener was added
}

- (void)_listenerRemoved:(NSString*)type count:(int)count
{
    // An existing listener was removed
}
```

The `_listenerAdded` method will be invoked with the event name (type) and the total number of existing listener with the same type (including the new event listener). This is convenient, for example, when you would like to enable some action only once at least one listener is listening for the event. This can be useful for conserving system resources.

The `_listenerRemoved` method will be invoked with the event name (type) and the total number of remaining listeners with the same type (excluding the removed listener). This is useful when you want to cleanup system resources once no listeners are actively listening for events. To send an event to any event listener, you use the convenience method:

```objectivec
- (void)fireEvent:(NSString *)type withObject:(id)obj;
```

The first argument is the default and most common way to fire an event. The first argument (type) is the event name. The second argument (obj) is an NSDictionary of event properties. The second argument can also be nil if no additional event properties are needed. The event properties will be part of the event argument which is the first argument in all event functions.

For example:

```objectivec
- (void)myMethod
{
    [self fireEvent:@"foo" withObject:@{@"name": @"foo"}];
}
```

In this example, we'd adding one additional event property named 'name' with the value of 'foo'. In JavaScript, this would be retrieved like:

```
foo.addEventListener('foo', function(e) {
  alert('Name is ' + e.name);
});
```

In addition to any additional event arguments passed, Titanium automatically provides the following built-in properties on all events fired:

* source — The source object (proxy) that fired the event

* type — The type of event

You can also check for the existing of a listener (recommended) before firing an event. This is done with the `_hasListeners` method.

```objectivec
- (void)fireMyEvent
{
    if ([self _hasListeners:@"foo"]) {
        // Fire event
        [self fireEvent:@"foo" withObject:@{@"name": @"foo"}];
    }
}
```

It is generally recommended that you only construct your event object and fire the event if you have listeners to conserve processing power.

### Memory Management

Proxies act like any Objective-C class and all memory management rules must be considered. When returning a new proxy instance from a method, you must autorelease the instance. Titanium will retain a reference to the proxy which maps to a reference to the resulting JavaScript variable reference. However, once the JavaScript variable is no longer referenceable, it will be released and your proxy will be sent the dealloc message.

You must take special care to retain/release your objects in Titanium just like you would in any Objective-C based programs. Improper retain/release will cause crashes and undesired results. Modules created with Titanium SDK 6.1.0 or later will use ARC (Automatic Reference Counting) be default, so you do not need to retain/release objects manually anymore. But please remember that there might still be use-cases where you need to use memory-concepts like the autorelease-pool to release objects properly (e.g. when manipulating image-references inside a loop). See [this guide](https://developer.apple.com/library/content/releasenotes/ObjectiveC/RN-TransitioningToARC/Introduction/Introduction.html) on how to migrate a non-ARC code-base to ARC!

## View Proxy and View

To display UI elements with a module, create both a View Proxy and a View. A View Proxy is a special Proxy that is used for Views — objects which interact with the UI to draw things on the screen.

The View Proxy holds the data (model) and acts like a controller for dispatching property changes and methods against the view. The View handles the internal logic for interacting with UIKit and handling UIKit events. The View is a model delegate to the View Proxy, and as long as referenced, receives property changes.

The View Proxy does not always retain a valid reference to a View. The View is only created on demand, as needed. Once the View is created and retained by the View Proxy, all property change events on the View Proxy will be forwarded to the View.

To call the method to create the view from JavaScript, call the module's `create*View``()` method. The name of the method is the name of the view class without the module ID, then prefixed with `create`. For example, if the class was called `ComExampleTestFooView`, the method would be called `createFooView()`.

```javascript
var module = require('com.example.test');
var fooView = module.createFooView(/* params */);
var win = Ti.UI.createWindow();
win.add(fooView);
win.open();
```

For Alloy projects, you can also use the `Module` element. Set the `module` attribute to the module ID and set the `method` attribute to a method that returns a View. You can optionally pass in initialization parameters for the create method.

```xml
<Alloy>
    <View>
        <Module module="com.example.test" method="createFooView"/>
    </View>
</Alloy>
```

### View Proxy Class

To declare a View Proxy, the class name and filename must be prefixed with the module ID in camel case notation and suffixed with `ViewProxy`. The class must extend the [`TiViewProxy`](http://docs.appcelerator.com/module-apidoc/latest/ios/Classes/TiViewProxy.html) class.

**ComExampleTestFooViewProxy.h**

```objectivec
#import "TiViewProxy.h"
@interface ComExampleTestFooViewProxy: TiViewProxy {
    // Your private properties go here
}
@end
```

**ComExampleTestMyViewProxy.m**

```objectivec
#import "ComExampleTestFooViewProxy.h"
@implementation ComExampleTestFooViewProxy
@end
```

To get a reference to the View, call the View Proxy's `view` method:

```
UIView *view = [self view];
```

### View Class

To declare a View Proxy, the class name and filename must be prefixed with the module ID in camel case notation and suffixed with `View`. The class must extend the `TiUIView` class. The `TiUIView` class extends `UIView` and provides Titanium specific functionality.

**ComExampleTestFooView.h**

```objectivec
#import "TiUIView.h"
@interface ComExampleTestFooView : TiUIView {

}@end
```

**ComExampleTestFooView.m**

```objectivec
#import "ComExampleTestFooView.h"
@implementation ComExampleTestFooView
@end
```

The View will be attached to the UIView hierarchy as needed by the View Proxy. However, if you have sub-views you will need to attach them to yourself (TiUIView) as necessary. This is typically done by assigning your view to an instance variable and keeping a reference to it and only creating and attaching when the reference is nil.

### View Properties

Properties that can be set on views can either be defined in the View class or the ViewProxy class.

The view property setters are named using a special required convention.

To define a property in a **View**, capitalize the first character of the property, then prefix it with `set` and suffix it with an underscore (`_`).

**ComExampleTestView.m**

```objectivec
- (void)setFoo_:(id)value
{
    // Handle the value
}
```

To define a property in a **View Proxy**, capitalize the first character of the property, then prefix it with `set`. Do **NOT** add an underscore to the end.

**ComExampleTestViewProxy.m**

```objectivec
- (void)setFoo:(id)value
{
    // Handle the value
}
```

When you have properties in your View Proxy that should be handled by an active View, you don't need to define them in your View. Instead, you can define them using the syntax above in your View and they be automatically dispatched. In the event that your View is attached after properties have been set, the View Proxy will automatically forward all property change events (results in calling each setter method) to the View upon construction.

**Note**: to access the View from the View Proxy, use the View Proxy's `view` method.

```
UIView *view = [self view];
```

### View Methods

The View Proxy must declare and dispatch any methods that it wants the View to also handle. For example:

```objectivec
- (void)show:(id)args
{
    [[self view] performSelectorOnMainThread:@selector(show:)
                                  withObject:args waitUntilDone:NO];
}
```

You can also use a convenience macro that does the equivalent:

```
USE_VIEW_FOR_UI_METHOD(methodName)
```

The following code example is the same as the show method above:

```
USE_VIEW_FOR_UI_METHOD(show)
```
