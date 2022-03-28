---
title: Android Module Quick Start
weight: '10'
---

# Android Module Quick Start

## Introduction

This guide walks through the steps to create, build and test an Android module using Studio. The equivalent CLI instructions are given in the information boxes near the top of each section.

## Android module prerequisites

To develop an Android-based Module, you need to install the following tools and setup a few additional environment variables:

* Titanium SDK

* Android SDK API 26+

* Studio or the Appcelerator Command-Line Interface (CLI) for creating modules, and building and running test applications

* [Android NDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_the_Android_NDK/) and add an ANDROID\_NDK environment variable pointing to the NDK directory. See [Installing the Android NDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_the_Android_NDK/).

* [gperf](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_gperf/) must be installed and in your system PATH. See [Installing gperf](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_gperf/).

* Python, Python setuptools and the markdown module, and Python in your system PATH. See [Installing Python](#undefined) and [Installing Required Python Packages](#undefined).

If you want to use Studio, install:

* [Eclipse Java Development Tools plugin](https://eclipse.org/jdt/). See [Installing the Java Development Tools](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Installing_the_Java_Development_Tools/).

* [Android Development Tools plugin](http://developer.android.com/tools/sdk/eclipse-adt.html). See [Installing the Android Development Tools](#undefined).

## Create a new module

First, create a new module project.

::: tip 💡 CLI Instructions
From a terminal, change the current working directory to your workspace and run:

```bash
cd /PATH/TO/WORKSPACE
ti create --n test --id com.example.test -p Android
## when prompted, select "Titanium Module"
```
:::

In Studio:

1. From the menu, select **File** > **New** > **Mobile Module Project** to open the **New Mobile Module Project** dialog.

2. In the **Project name** field, enter **test**.

3. In the **Module Id** field, enter **com.example.test**.

4. In **Deployment Targets**, select **Android**.

5. Click **Next**, then click **Finish**.

Studio sets up a new folder called `test` that contains your module project.

## Build and package the module

Next, build the module and package it. This process produces a ZIP file in the `android` `/dist` directory containing a binary library with unprocessed module assets, example code and documentation.

::: tip 💡 CLI Instructions
From a terminal, go to the module's `android` directory and run `ti build -p android --build-only`:

```bash
cd test/android
ti build -p android --build-only
```

After the build completes, unzip the built module in the Titanium SDK home path:

```
unzip -o com.example.test-android-1.0.0.zip -d ~/Library/Application\ Support/Titanium/
```
:::

In Studio:

1. Select your module folder in the **Project Explorer** view.

2. Verify **Package** and **Android Module** are displayed in **Launch Mode** and **Launch Target**, respectively.

3. Click the Package icon to open the **Package Android Module** dialog.

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
ti create -t app -p android -d . -n Hello -u http:// --id com.example.hello
cd Hello/
```
:::

In Studio:

1. From the menu, select **File** > **New** > **Mobile App Project** to open the **New Mobile App Project** dialog.

2. On the **Project Template** page, select **Default Alloy Project** as the template type, then click **Next**.

3. On the **Project Location** page, enter the following information:

    * In the **Project Name** field, enter **Hello**.

    * In the **App ID** field, enter **com.example.hello**.

    * In **Deployment Targets**, select **Android**.

4. Click **Finish** to create the project.

Studio sets up a new folder called `Hello` that contains the test application you will be using to test the module.

### Add the module as a dependency to the project

To load the module in the application, you need to add it as a dependency to the project.

::: tip 💡 CLI Instructions
Open the `tiapp.xml` and update the `<modules/>` element to include the module as a dependency to the project:

```xml
<ti:app>
    <modules>
        <module platform="android">com.example.test</module>
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
The module can be loaded by passing the module ID to the `require()`method, which returns a reference to the module that API calls can be made on.
:::

Open the `app/alloy.js` file and replace the code with the following, which invokes API calls to the module:

**app/alloy.js**

```javascript
var test = require('com.example.test');
Ti.API.info("module is => " + test);
Ti.API.info("module example() method returns => " + test.example());
Ti.API.info("module exampleProp is => " + test.exampleProp);
test.exampleProp = "This is a test value";
```

### Run the application

::: tip 💡 CLI Instructions
From a terminal that has the test app as its current working directory, run:

```bash
ti build -p android
```
:::

In the Studio toolbar, select **Run** in **Launch Modes** and select an Android emulator in **Launch Targets**.

Studio builds and launches the application on the selected Android simulator. Monitor the **Console** view for log output.

The console lines seen below show us that the module is working as expected.

**Console**

```
[INFO]  module is => [object Object]
[INFO]  module example() method returns => hello world
[INFO]  module exampleProp is => hello world
```

## Modify the module

Let's modify the module code to create a view object and access a string property.

First, look at some of the default files created by the Titanium SDK. Expand the `android/src/com/example/test` folder. Inside this folder are two files:

* `TestModule.java`: This is a boiler plate Module class. Every module requires a module class, which acts as the base API for the module, such as providing the module ID, GUID, etc.

* ExampleProxy.java: This is a boiler plate Proxy class that you can model your module Proxy and View components on. All Proxy classes must end with `Proxy` in the name of the class and file.

### Add a View Proxy and View

To display any UI with a module, create a view proxy and view class in pairs. Open the `ExampleProxy.java` file and replace its contents with the following:

**ExampleProxy.java**

```java
package com.example.test;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.AsyncResult;
import org.appcelerator.kroll.common.TiMessenger;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiC;
import org.appcelerator.titanium.util.TiConvert;
import org.appcelerator.titanium.proxy.TiViewProxy;
import org.appcelerator.titanium.view.TiCompositeLayout;
import org.appcelerator.titanium.view.TiCompositeLayout.LayoutArrangement;
import org.appcelerator.titanium.view.TiUIView;
import android.app.Activity;
import android.os.Handler;
import android.os.Message;
import android.view.View;

@Kroll.proxy(creatableInModule=TestModule.class)
public class ExampleProxy extends TiViewProxy
{
    private static final int MSG_SET_COLOR = 70000;
    private static final String PROPERTY_COLOR = "color";

    private class ExampleView extends TiUIView
    {
        public ExampleView(TiViewProxy proxy) {
            super(proxy);
            LayoutArrangement arrangement = LayoutArrangement.DEFAULT;
            if (proxy.hasProperty(TiC.PROPERTY_LAYOUT)) {
                String layoutProperty = TiConvert.toString(proxy.getProperty(TiC.PROPERTY_LAYOUT));
                if (layoutProperty.equals(TiC.LAYOUT_HORIZONTAL)) {
                    arrangement = LayoutArrangement.HORIZONTAL;
                } else if (layoutProperty.equals(TiC.LAYOUT_VERTICAL)) {
                    arrangement = LayoutArrangement.VERTICAL;
                }
            }
            setNativeView(new TiCompositeLayout(proxy.getActivity(), arrangement));
        }

        @Override
        public void processProperties(KrollDict props)
        {
            super.processProperties(props);

            // Check if the color is specified when the view was created
            if (props.containsKey(PROPERTY_COLOR)) {
                View square = (View)getNativeView();
                square.setBackgroundColor(TiConvert.toColor(props, PROPERTY_COLOR));
                square.invalidate();
            }
        }

        // Setter method called by the proxy when the 'color' property is set.
        public void setColor(String color)
        {
            // Use the TiConvert method to get the values from the arguments
            int newColor = TiConvert.toColor(color);
            View square = (View)getNativeView();
            square.setBackgroundColor(newColor);
        }
    }

    @Override
    public TiUIView createView(Activity activity)
    {
        TiUIView view = new ExampleView(this);
        view.getLayoutParams().autoFillsHeight = true;
        view.getLayoutParams().autoFillsWidth = true;
        return view;
    }

    @Kroll.setProperty(retain=false)
    public void setColor(final String color)
    {
        // Get the view object from the proxy and set the color
        if (view != null) {
            if (!TiApplication.isUIThread()) {
                // If we are not on the UI thread, need to use a message to set the color
                TiMessenger.sendBlockingMainMessage(new Handler(TiMessenger.getMainMessenger().getLooper(), new Handler.Callback() {
                    public boolean handleMessage(Message msg) {
                        switch (msg.what) {
                            case MSG_SET_COLOR: {
                                AsyncResult result = (AsyncResult) msg.obj;
                                ExampleView fooView = (ExampleView)view;
                                fooView.setColor(color);
                                result.setResult(null);
                                return true;
                            }
                        }
                        return false;
                    }
                }).obtainMessage(MSG_SET_COLOR), color);
            } else {
                ExampleView fooView = (ExampleView)view;
                fooView.setColor(color);
            }
        }
        // Updates the property on the JavaScript proxy object
        setProperty("color", color, true);
    }
}
```

The `ExampleProxy` class extends the `TiViewProxy` class. This class exposes the view to the JavaScript and acts as an intermediary between the JavaScript and the native view. The class implements one method of the `TiViewProxy` class and a custom setter method:

* **`createView`** : This method must be implemented in every class that extends a `TiViewProxy`. The method should create and return the View.

* **`setColor`** : Calls the `setColor` method of the view and sets the color property on the JavaScript proxy object. Note the `@Kroll.setProperty` annotation before the method. This annotation exposes the property and setter to JavaScript.

The `ExampleView` class extends the `TiUIView` class. The TiUIView can be added to other Titanium views and windows, which makes it the perfect place for a UIView to be added so that it can be displayed in a Titanium app. This class creates the native view to display. The class implements the the constructor and one method of the `TiUIView` class, and a custom setter method:

* **constructor**: The constructor must be implemented in every class that extends a `TiUIView`.

* **`processProperties`** : This method allows the application to processes properties passed in when the view is created. In this example, the application intercepts the color property to set the native view's background color.

* **`setColor`** : Sets the background color of the native view. This method is called by the View Proxy's `setColor` method.

Notice the `@Kroll.proxy(creatableInModule=TestModule.class)` annotation before the View Proxy class declaration. This annotation exposes the `createExample()` method to JavaScript to create the view from a Titanium application. The name of the method is the name of the View Proxy class without the `Proxy` suffix, then prefixed with `create`. For example, if the class was called`TestViewProxy` (rather than `ExampleProxy`), the method would be called `createTestView()` (rather than `createExample()`).

Below is an example of calling `createExample()`, and passing dimensions and color properties to the method.

**Example**

```javascript
var view = test.createExample({
    color: 'blue',
    height: 50,
    width: 50
});
win.add(view);
```

### Add a property

A Proxy is a key/value store like an Object. Without any modification, you can set properties on a Module, Proxy or ViewProxy and then read them back at will as if they were properties. You can also override the getters and setters to add some custom logic.

Modify the default module class file to store and retrieve a string value. Add a private variable to store the string value, then modify the example setter and getter to actually set and get the variable you just declared. These methods are already declared in the `ComExampleTestModule.m` file but not implemented. Titanium requires that all setter methods be declared with the method name starting with `set` and being passed an `id` datatype.

**TestModule.java**

```java
private String foo;
...
    @Kroll.getProperty @Kroll.method
    public String getExampleProp()
    {
        Log.i(LCAT, "In Module - the stored value for exampleProp:" + foo);
        return foo;
    }

    @Kroll.setProperty @Kroll.method
    public void setExampleProp(String value) {
        Log.i(LCAT, "In Module - the new value for exampleProp:" + foo);
        foo = value;
    }
```

In the JavaScript code, the `foo` string can be accessed using the `exampleProp` property, and `getExampleProp()` and `setExampleProp` `()` methods.

::: warning ⚠️ Warning
To create a property without a custom getter or setter, add the property name in the `propertyAccessors` element list of the `@Kroll.proxy` or `@Kroll.module` annotation type:

```
// package...
// import(s)...
@Kroll.module(name="Test", id="com.example.test", propertyAccessors = {"exampleProp"})
public class TestModule extends KrollModule {
    // Class stuff...
}
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

$.test.exampleProp = 'foobar';
Ti.API.info('exampleProp: ' + $.test.getExampleProp());
```

Build and install your module, then run the example app.

When the application starts running, you see should a red square in the middle of the screen and see the log output below, which means the application successfully loaded the module and called its APIs.

**Console**

```
[INFO] :   TestModule: (KrollRuntimeThread) [1,165] In Module - the new value for exampleProp:foobar
[INFO] :   TestModule: (KrollRuntimeThread) [2,167] In Module - the stored value for exampleProp:foobar
[INFO]  exampleProp: foobar
```

## Next steps

* For information about how to structure your module project, add assets or third-party frameworks to your module project or more details on how to use the CLI or Studio, see [Android Module Project](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Android_Module_Development_Guide/Android_Module_Project/).

* For information about how to construct the class components for your project, see [Android Module Architecture](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Android_Module_Development_Guide/Android_Module_Architecture/).

* For more examples of using the module API, see the [ti.moddevguide Github project](https://github.com/appcelerator-modules/ti.moddevguide/tree/master/android).

## AIDL support

As of 5.2.0, building Android modules now supports AIDL files. To use AIDL files in your app, apply the following steps:

1. Using Studio, you can generate the AIDL .java file. The AIDL file is only used to generate the Java interface code. Once that file is available, it isn't required anymore. See Android Developer's page called Preparing Your In-app Billing Application for more details.

2. Copy over the AIDL file into the correct namespace package folder into the src directory of the Appcelerator Studio module.

See [IInAppBillingService.java](https://github.com/appcelerator-modules/ti.inappbilling/blob/stable/android/src/com/android/vending/billing/IInAppBillingService.java) for reference information.

Note: Prior to Studio 5.2.0, you will need to use either Eclipse or Android Studio to generate the AIDL file.
