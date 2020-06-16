---
title: Windows Module Quick Start
weight: '50'
---

# Windows Module Quick Start

## Introduction

This guide walks through the steps to create, build and test an Windows module using Studio. The equivalent CLI instructions are given in the information boxes near the top of each section.

## Windows module prerequisites

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::
::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

To develop an Windows-based Module, you'll need all of the software required to build a Titanium application for Windows:

* Titanium SDK

* Supported versions of Visual Studio and the Windows Phone SDK, as described in [Installing the Windows Phone SDK](#undefined)

* Studio or the Appcelerator Command-Line Interface (CLI) for creating modules, and building and running test applications

Like Windows application development, Windows module development is only supported on Windows.

## Create a new module

First, create a new module project.

::: tip 💡 CLI Instructions
From a terminal, change the current working directory to your workspace and run:

```bash
cd /PATH/TO/WORKSPACE
appc new -n test --id com.example.test
### when prompted for the project type, select "Titanium Module"
```
:::

In Studio:

1. From the menu, select **File** > **New** > **Mobile Module Project** to open the **New Mobile Module Project** dialog.

2. In the **Project name** field, enter **test**.

3. In the **Module Id** field, enter **com.example.test**.

4. In **Deployment Targets**, select **Windows**.

5. Click **Next**, then click **Finish**.

Studio sets up a new folder called `test` that contains your module project.

## Build and package the module

Next, build the module and package it. This process produces a ZIP file containing a binary library with unprocessed module assets, example code and documentation.

::: tip 💡 CLI Instructions
From a terminal, go to the module's windows directory and run the `appc run -p windows --build-only`:

```bash
cd test/windows
appc run -p windows --build-only
```

After the build completes, unzip the built module in the Titanium SDK home path: (`C:\ProgramData\Titanium`).
:::

In Studio:

1. Select your module folder in the **Project Explorer** view.

2. Verify **Package** and **Windows Module** are displayed in **Launch Mode** and **Launch Target**, respectively.

3. Click the Package icon to open the **Package Windows Module** dialog.

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
appc new -t titanium -p windows -n Hello -u http:// --id com.example.hello
cd Hello/
```
:::

In Studio:

1. From the menu, select **File** > **New** > **Mobile App Project** to open the **New Mobile App Project** dialog.

2. On the **Project Template** page, select **Default Alloy Project** as the template type, then click **Next**.

3. On the **Project Location** page, enter the following information:

    * In the **Project Name** field, enter **Hello**.

    * In the **App ID** field, enter **com.example.hello**.

    * In **Deployment Targets**, select **Windows**.

4. Click **Finish** to create the project.

Studio sets up a new folder called `Hello` that contains the test application you will be using to test the module.

### Add the module as a dependency to the project

To load the module in the application, you need to add it as a dependency to the project.

::: tip 💡 CLI Instructions
Open the `tiapp.xml` and update the `<modules/>` element to include the module as a dependency to the project:

```xml
<ti:app>
    <modules>
        <module platform="windows">com.example.test</module>
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
appc run -p windows
```
:::

In the Studio toolbar, select **Run** in **Launch Modes** and select an Windows Phone simulator in **Launch Targets**.

Studio builds and launches the application on the select Windows Phone simulator. Monitor the **Console** view for log output.

The console lines seen below show us that the module is working as expected.

**Console**

```
[INFO]  module is => [object ComExampleTestModule]
[INFO]  module example() method returns => hello world
[INFO]  module exampleProp is => hello world
```

## Modify the module

Let's modify the module code to create a view object and access a string property.

First, look at some of the default files created by the Titanium SDK. Expand the `windows` folder. Inside this folder are two files:

* `src/ComExampleTest.cpp`: This is a boiler plate Module class. Every module requires a module class, which acts as the base API for the module.

* i`nclude/ComExampleTest.hpp` : This is a header file for the boiler plate class.

### Add a property

A Module is a key/value store like an Object. Without any modification, you can set properties on a Module and then read them back at will as if they were properties. You can also override the getters and setters to add some custom logic. Modify the default module class files to store and retrieve a string value. First, modify the `ComExampleTestModule.hpp` file to declare a variable to hold the string:

**ComExampleTest.hpp**

```cpp
class COMEXAMPLETEST_EXPORT Test : public Titanium::Module, public JSExport<Test>
{
    public:
        ...
        TITANIUM_PROPERTY_DEF(exampleProp);
        ...
    private:
        std::string exampleProp__;
};
```

Next, modify the example setter and getter to actually set and get the variable you just declared. These methods are already declared in the `ComExampleTestModule.cpp` file but not implemented. TitaniumKit provides useful macro to declare setter and getter, which is `TITANIUM_PROPERTY_GETTER` and `TITANIUM_PROPERTY_GETTER` . TitaniumKit requires property value being treated as an `JSValue` datatype. Once you implement the method, register it using `TITANIUM_ADD_FUNCTION` in `JSExportInitialize`.

**ComExampleTest.cpp**

```cpp
TITANIUM_PROPERTY_GETTER(Test, exampleProp)
{
    // example property getter
    //
    // Getter should return JavaScript value (JSValue).
    //
    // For more information on how to use JSContext / JSValue / JSObject, check out HAL:
    //      https://github.com/appcelerator/HAL
    //
    return get_context().CreateString(exampleProp__);
}

TITANIUM_PROPERTY_SETTER(Test, exampleProp)
{
    // example property setter
    //
    // There are a variable expanded from TITANIUM_PROPERTY_SETTER macro here:
    //     JSValue argument ... JavaScript value that is passed to this setter
    //
    // Example:
    //   # Check if it's a string
    //      auto _0 = argument.IsString();
    //
    //   # Convert argument to std::string
    //      auto _0 = static_cast<std::string>(argument);
    //
    //   For more information on how to use JSContext / JSValue / JSObject, check out HAL:
    //      https://github.com/appcelerator/HAL

    // Update property string
    exampleProp__ = static_cast<std::string>(argument);

    //
    // Setter should return true if the property was set, otherwise false.
    //
    return true;
}

void Test::JSExportInitialize()
{
    JSExport<Test>::SetClassVersion(1);
    JSExport<Test>::SetParent(JSExport<Titanium::Module>::Class());

    // register exampleProp property
    TITANIUM_ADD_PROPERTY(Test, exampleProp);
...
}
```

### Add a function

In order to add JavaScript function to Module, modify the default module class files to return JavaScript value First, modify the `ComExampleTestModule.hpp` file to declare a JavaScript function using `TITANIUM_FUNCTION_DEF`:

**ComExampleTest.hpp**

```cpp
class COMEXAMPLETEST_EXPORT Test : public Titanium::Module, public JSExport<Test>
{
    public:
        ...
        TITANIUM_FUNCTION_DEF(example);
        ...
};
```

Next, modify the example function to actually return variable you just declared. These methods are already declared in the `ComExampleTestModule.cpp` file but not implemented. TitaniumKit provides useful macro to declare JavaScript function, which is `TITANIUM_FUNCTION`. `TITANIUM_FUNCTION` should return `JSValue` datatype. Once you implement the method, register it using `TITANIUM_ADD_PROPERTY` in `JSExportInitialize`.

**ComExampleTest.cpp**

```cpp
TITANIUM_FUNCTION(Test, example)
{
    // example method
    //
    // There are variables expanded from TITANIUM_FUNCTION macro here:
    //     std::vector<JSValue> arguments ... list of arguments that is passed to this function
    //     JSObject this_object           ... "this" JavaScript object
    //
    // Example:
    //    # Get first argument and convert to std::string
    //      auto _0 = static_cast<std::string>(arguments.at(0));
    //
    //    # Get first argument and convert to double
    //      auto _0 = static_cast<double>(arguments.at(0));
    //
    //    # Get first argument and convert to std::uint32_t
    //      auto _0 = static_cast<std::uint32_t>(arguments.at(0));
    //
    //   Function should return JSValue.
    //   For more information on how to use JSContext / JSValue / JSObject, check out HAL:
    //      https://github.com/appcelerator/HAL
    //

    // Let's return exampleProp value for now
    return get_context().CreateString(exampleProp__);
}

void Test::JSExportInitialize()
{
    JSExport<Test>::SetClassVersion(1);
    JSExport<Test>::SetParent(JSExport<Titanium::Module>::Class());

    // register example function
    TITANIUM_ADD_FUNCTION(Test, example);
...
}
```

### Firing callbacks

There are multiple way to fire JavaScript functions as a callback. First, the easiest way to fire callback is leveraging Titanium's event mechanics such as `addEventListener`.
So let say you are listening `somethingfired` event. In this case you can add listener in JavaScript like below.

**app.js**

```javascript
test.addEventListener('somethingfired', function(e) {
    Ti.API.info(e.type + ' my_number:' + e.my_number);
});
```

In this case, you can fire this callback from the module by executing `fireEvent` like below.

**ComExampleTest.cpp**

```cpp
TITANIUM_FUNCTION(YourModule, doTheMyNumberEvent)
{
    const auto ctx = get_context();
    auto e = ctx.CreateObject();
    e.SetProperty("my_number", ctx.CreateNumber(12345));
    fireEvent("somethingfired", e);
}
```

There is another way to do the callback, by calling `JSObject` as a function directly. This is basic functionality on HAL framework.

**app.js**

```javascript
test.doTheCallbackImmediately(function(str) {
    Ti.API.info(str);
});
```

Since HAL `JSObject` is callable, you can just execute it with arguments like below.

**ComExampleTest.cpp**

```cpp
TITANIUM_FUNCTION(YourModule, doTheCallbackImmediately)
{
    ENSURE_OBJECT_AT_INDEX(my_callback, 0);

    const std::vector<JSValue> args { get_context().CreateString("TEST") };
    my_callback(args, get_object());
    return get_context().CreateUndefined();
}
```

## Next steps

* For information about HAL API, see [github/appcelerator/HAL](https://github.com/appcelerator/HAL)

* For information about TitaniumKit, see [github/appcelerator/titanium\_mobile\_windows](https://github.com/appcelerator/titanium_mobile_windows)

* For more examples of using the module API, see working Titanium modules under [github/appcelerator/titanium\_mobile\_windows/Source](https://github.com/appcelerator/titanium_mobile_windows/tree/master/Source)
