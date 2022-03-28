---
title: iOS Module Quick Start
weight: '10'
---

# iOS Module Quick Start

## Introduction

This guide walks through the steps to create, build and test an iOS module using Studio. The equivalent CLI instructions are given in the information boxes near the top of each section.

## iOS module prerequisites

To develop an iOS-based Module, you'll need all of the software required to build a Titanium application for iOS:

* Titanium SDK

* Supported versions of Xcode and the iOS SDK, as described in [Installing the iOS SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/)

* Studio or the Appcelerator Command-Line Interface (CLI) for creating modules, and building and running test applications

ComExampleTestModuleIn addition, Python, Python setuptools and the Python markdown (or markdown2) module are both required by the module build scripts. For Mac OS X, Python and the Python setuptools should already be installed. For the markdown module, see [Installing Required Python Packages](#undefined).

Like iOS application development, iOS module development is only supported on OS X.

## Create a new module

First, create a new module project.

::: tip 💡 CLI Instructions
From a terminal, change the current working directory to your workspace and run:

```bash
cd /PATH/TO/WORKSPACE
ti create -n test --id com.example.test
### when prompted for the project type, select "Titanium Module"
```
:::

In Studio:

1. From the menu, select **File** > **New** > **Mobile Module Project** to open the **New Mobile Module Project** dialog.

2. In the **Project name** field, enter **test**.

3. In the **Module Id** field, enter **com.example.test**.

4. In **Deployment Targets**, select **iOS**.

5. Click **Next**, then click **Finish**.

Studio sets up a new folder called `test` that contains your module project.

## Validate the SDK version

You should validate the used Titanium SDK version inside the `titanium.xcconfig` to point to a version that is installed on your machine. This is especially important to validate when using existing module projects that may have been created with a different SDK version.

## Build and package the module

Next, build the module and package it. This process produces a ZIP file containing a binary library with unprocessed module assets, example code and documentation.

::: tip 💡 CLI Instructions
From a terminal, go to the module's `ios` directory and run the `ti build` command:

```bash
cd test/ios
ti build -p ios --build-only
```

Optional: After the build completes, either unzip the built module in the Titanium SDK home path or in your local project:

```
unzip -o com.example.test-iphone-1.0.0.zip -d ~/Library/Application\ Support/Titanium/
```
:::

In Studio:

1. Select your module folder in the **Project Explorer** view.

2. Verify **Package** and **iOS Module** are displayed in **Launch Mode** and **Launch Target**, respectively.

3. Click the Package icon to open the **Package iOS Module** dialog.

4. In **Output Location**, choose the **Titanium SDK** to install the module in the Titanium SDK home path to be accessed by any Titanium application.

5. Click **Finish**.

Studio builds and installs the module to the Titanium SDK home path.

## Test the module

To test the module, create a test application and add the module as a dependency of the project. Then, load the module and make module API calls to the module reference.

### Create a test application

::: tip 💡 CLI Instructions
From a new terminal window, change the current working directory to your workspace and run the following commands:

```bash
cd /PATH/TO/WORKSPACE
ti create -t app -p ios -n Hello -u http:// --id com.example.hello
cd Hello/
```
:::

In Studio:

1. From the menu, select **File** > **New** > **Mobile App Project** to open the **New Mobile App Project** dialog.

2. On the **Project Template** page, select **Default Alloy Project** as the template type, then click **Next**.

3. On the **Project Location** page, enter the following information:

    * In the **Project Name** field, enter **Hello**.

    * In the **App ID** field, enter **com.example.hello**.

    * In **Deployment Targets**, select **iPhone** and **iPad**.

4. Click **Finish** to create the project.

Studio sets up a new folder called `Hello` that contains the test application you will be using to test the module.

### Add the module as a dependency to the project

To load the module in the application, you need to add it as a dependency to the project.

::: tip 💡 CLI Instructions
Open the `tiapp.xml` and update the `<modules/>` element to include the module as a dependency to the project:

```xml
<ti:app>
  <modules>
    <module platform="iphone">com.example.test</module>
  </modules>
</ti:app>
```
:::

In Studio:

1. Open the `tiapp.xml` file located in the root directory of the project.

2. Under the **Modules** section, click the **Add** button.

3. Select **com.example.test**.

4. Click **OK**.

### Load the module and make module API calls

::: warning ⚠️ Warning
The module can be loaded by passing the module ID to the `require()` method, which returns a reference to the module that API calls can be made on.
Since Titanium SDK 7.1.0 and later, you can also import it using the ES6+ `import` statements.
:::

Open the `app/alloy.js` file and replace the code with the following, which invokes API calls to the module:

#### Use require() to import your module

Before SDK 7.1.0, modules are imported as the following:

**app/alloy.js**

```javascript
var test = require('com.example.test');
Ti.API.info('module is => ' + test);
Ti.API.info('module example() method returns => ' + test.example());
Ti.API.info('module exampleProp is => ' + test.exampleProp);
test.exampleProp = 'This is a test value';
```

Since SDK 7.1.0, you can use import statements and template strings, see the following:

**app/alloy.js**

```javascript
import test from 'com.example.test';
Ti.API.info(`module is => ${test}`);
Ti.API.info(`module example() method returns => ${test.example()}`);
Ti.API.info(`module exampleProp is => ${test.exampleProp}`);
test.exampleProp = "This is a test value";
```

### Run the application

::: tip 💡 CLI Instructions
From a terminal that has the test app as its current working directory, run:

```bash
ti build -p ios
```
:::

In the Studio toolbar, select **Run** in **Launch Modes** and select an iOS simulator in **Launch Targets**.

Studio builds and launches the application on the select iOS simulator. Monitor the **Console** view for log output.

The console lines seen below show us that the module is working as expected.

**Console**

```
[INFO] module is => [object ComExampleTestModule]
[INFO] module example() method returns => hello world
[INFO] module exampleProp is => hello world
```

## Modify the module

Let's modify the module code to create a view object and access a string property.

### Open the module in Xcode

Titanium creates a basic Xcode project, which is used to build the module. You can open this project in Xcode, the IDE used to develop iOS applications and used by the Titanium toolchain to build your iOS applications and modules.

::: tip 💡 CLI Instructions
From a terminal, run:

```
open test/ios/test.xcodeproj
```
:::

In Studio:

1. Right-click the `test.xcodeproj` folder and select **Show In** > **Terminal**.

2. In the Terminal, run the following command:

    ```
    open .
    ```

Your module project is now open in Xcode. Expand the `Classes` folder and take a look at the default files created by the Titanium SDK:

* `ComExampleTestModule.h` and `ComExampleTestModule.m`: These are the header and source file for the module class. Every module requires a module class (and only one module class), which acts as the base API for the module, such as providing the module ID, GUID, etc.

* `ComExampleTestModuleAssets.h` and `ComExampleTestModuleAssets.m`: These are the header and source files to manage module assets. These files are auto-generated. You can ignore these for now in this tutorial.

Notice that all the files start with the module ID in camel case notation. Every file and class you add to the module project must start with name and every file and class you add must end with `Proxy`, `ViewProxy` or `View`, which determines how Titanium uses the files. Titanium uses a strict naming convention and directory structure to manage the module classes and resources. If a file or class is added to the project and does not conform to these conventions, it will be treated as a normal non-Titanium class. It will be accessible from Objective-C code but not from JavaScript.

### Add a view proxy and view

To display any UI with a module, create a view proxy and view in pairs. Create the four files below for your Xcode project and save them in the module's `iphone/Classes` directory.

In Xcode, for each file:

1. Right-click the project and select **New File...**

2. For the header files, select **Header File**, and for the source files, select **Objective-C** **File**, then click **Next**.

3. For the Objective-C files, enter the name of the file and click **Next** to proceed to the last dialog.

4. For the header files, enter the name of the file in the **Save As** field.

5. For both files, select the module's `Classes` folder.

6. Ensure that the **Target** `test` is selected.

7. Click **Create**.

**ComExampleTestViewProxy.h**

```objectivec
#import "TiViewProxy.h"
@interface ComExampleTestViewProxy: TiViewProxy {

}
@end
```

**ComExampleTestViewProxy.m**

```objectivec
#import "ComExampleTestViewProxy.h"

@implementation ComExampleTestViewProxy
@end
```

**ComExampleTestView.h**

```objectivec
#import "TiUIView.h"
@interface ComExampleTestView: TiUIView {
  UIView *square;
}
@end
```

**ComExampleTestView.m**

```objectivec
#import "ComExampleTestView.h"
#import "TiUtils.h"

@implementation ComExampleTestView

- (void)initializeState
{
  // Creates and keeps a reference to the view upon initialization
  square = [[UIView alloc] initWithFrame:[self frame]];
  [self addSubview:square];
  [super initializeState];
}

- (void)frameSizeChanged:(CGRect)frame bounds:(CGRect)bounds
{
  // Sets the size and position of the view
  [TiUtils setView:square positionRect:bounds];
}

- (void)setColor_:(id)color
{
  // Assigns the view's background color
  square.backgroundColor = [[TiUtils colorValue:color] _color];
}

@end
```

The `ComExampleTestViewProxy` class extends the `TiViewProxy` class. This class exposes the view to the JavaScript and acts as an intermediary between the JavaScript and the native view. Normally, you do not need to implement any APIs in this class, but you can hook into the View's lifecycle events.

The `ComExampleTestView` class extends the `TiUIView` class. The TiUIView can be added to other Titanium views and windows, which makes it the perfect place for a UIView to be added so that it can be displayed in a Titanium app. This class creates the native view to display. The class implements three methods of the `TiUIView` class and a custom setter method:

* **`initializeState`** : This method is called when the view is initialized. In this example, we are using this method as a place to create a native UIView which is called square.

* **`frameSizeChanged`** : This method is called when the view's dimensions change. The method calls a TiUtils helper function to update the dimensions of square. In JavaScript, this occurs when the `width`, `height`, `top`, `bottom`, `left` or `right` properties are invoked.

* **`setColor_`** : All setter methods in a View class must end with an underscore (\_), which exposes the property to the JavaScript application. When `color` property is invoked, the method updates the background color of the square.

Notice that there is no code tying `ComExampleTestView` to `ComExampleTestViewProxy`. The naming convention is what causes the View to be connected to its ViewProxy.

To call the method to create the view from JavaScript, call the module's `createView` `()` method. The name of the method is the name of the view class without the module ID, then prefixed with `create`. For example, if the class was called `ComExampleTestMyView` (rather than `ComExampleTestView`), the method would be called `createMyView()` (rather than `createView()`).

Below is an example of calling `createView()`, and passing dimensions and color properties to the method.

**Example**

```javascript
var view = test.createView({
  color: 'blue',
  height: 50,
  width: 50
});
win.add(view);
```

### Add a property

A Proxy is a key/value store like an NSDictionary (Objective-C) or an Object (JavaScript). Without any modification, you can set properties on a Module, Proxy, or ViewProxy and then read them back at will as if they were properties. You can also override the getters and setters and do some custom logic.

Modify the default module class files to store and retrieve a string value.

First, modify the `ComExampleTestModule.h` file to declare a variable to hold the string:

```objectivec
@interface ComExampleTestModule : TiModule {
  NSString *foo;
}
@end
```

Next, modify the example setter and getter to actually set and get the variable you just declared. These methods are already declared in the `ComExampleTestModule.m` file but not implemented. Titanium requires that all setter methods be declared with the method name starting with `set` and being passed an `id` datatype.

```objectivec
// More methods here ...
- (NSString *)exampleProp
{
  NSLog(@"[INFO] In Module - the stored value for exampleProp: %@", foo);
  return foo;
}
- (void)setExampleProp:(id)value
{
  // Macro from TiBase.h to type check the data
  ENSURE_STRING(value);
  // Pass the new value to our existing property
  foo = value;
  NSLog(@"[INFO] In Module - the new value for exampleProp: %@", value);
}
```

In the JavaScript code, the `foo` string can be accessed using the `exampleProp` property, and `getExampleProp()` and `setExampleProp` `()` methods.

::: warning ⚠️ Warning
If you do not need a custom getter or setter, you can use the `@property` notation with the `copy` attribute to create a property.

```objectivec
@interface ComExampleTestModule : TiModule

@property(copy) NSString *foo;

@end
```
:::

### Test the module

Open the `app/views/index.xml` file and replace the code with the following, which loads the module and displays a red square:

**app/views/index.xml**

```xml
<Alloy>
  <Window>
    <!-- Invokes the createView method and provides a reference to the module in the controller -->
    <Module id="test" module="com.example.test" method="createView" height="50" width="50" color="red"/>
  </Window>
</Alloy>
```

Open the `app/controllers/index.js` file and replace the code with the following, which invokes API calls to the module:

**app/controllers/index.js**

```javascript
$.index.open();

Ti.API.info('module ->' + $.test);
$.test.exampleProp = 'foobar';
Ti.API.info('exampleProp: ' + $.test.getExampleProp());
```

Build and install your module, then run the example app.

When the application starts running, you see should a red square in the middle of the screen and see the log output below, which means the application successfully loaded the module and called its APIs.

**Console**

```
[INFO] In Module - the new value for exampleProp => foobar
[INFO] In Module - the stored value for exampleProp => foobar
[INFO] exampleProp: foobar
```

## Next steps

* For information about how to structure your module project, add assets or third-party frameworks to your module project or more details on how to use the CLI or Studio, see [iOS Module Project](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/iOS_Module_Development_Guide/iOS_Module_Project/).

* For information about how to construct the class components for your project, see [iOS Module Quick Start](#undefined).

* For more examples of using the module API, see the [ti.moddevguide Github project](https://github.com/appcelerator-modules/ti.moddevguide).
