---
title: Integrating Windows Runtime Components in C#
weight: '10'
---

# Integrating Windows Runtime Components in C#

## /\*<!\[CDATA\[\*/ div.rbtoc1593709721267 {padding: 0px;} div.rbtoc1593709721267 ul {list-style: disc;margin-left: 0px;} div.rbtoc1593709721267 li {margin-left: 0px;padding-left: 0px;} /\*\]\]>\*/

## Introduction

This article shows how to integrate Windows Runtime components that's built in C#, with Titanium module. This content is valid as of Titanium SDK 6.1.0.

## Create simple Windows Runtime component in C#

This section we are going to create a basic Windows Runtime Component in C# that exposes few methods. For basic information about Windows Runtime Components in C#, refer to official document from Microsoft here: [Creating Windows Runtime Components in C# and Visual Basic](https://docs.microsoft.com/en-us/windows/uwp/winrt-components/creating-windows-runtime-components-in-csharp-and-visual-basic).

1. In Visual Studio, choose **File**, **New**, **Project**. In the **Installed Templates** section of the **New Project** dialog box, choose **Visual C#**, **Windows** **Universal**. Then choose the **Windows Runtime Component (Universal Windows)** and enter `MyComponent` for the project name.

2. In Solution Explorer, rename the `Class1.cs` to MyComponent.cs that is the class basically what we want to export.

3. Then, changes the name of the namespace to `MyComponent`, and change the name of the class to `Speaker`.

**MyComponent.cs**

```csharp
using System;
namespace MyComponent
{
    public sealed class Speaker
    {
    }
}
```

Then, add one static method, one instance method and property for instance. That would be look like below.

**MyComponent.cs**

```csharp
using System;

namespace MyComponent
{
    public sealed class Speaker
    {
        public int SampleNumber { get; set; }

        public static string sayHello(string str)
        {
            return String.Format("Hello, {0}!", str);
        }

        public string sayNumber()
        {
            return String.Format("SampleNumber is {0}.", SampleNumber);
        }
    }
}
```

After updating your Windows Runtime component, select solution in the Solution Explorer, right-click and choose **Build Solution**. When build is succeeded, you get `MyComponent.winmd` that is built under the directory in your project. You may see the location of the built binary in the Visual Studio's **Output** view.

```
1>------ Build started: Project: MyComponent, Configuration: Debug Any CPU ------
1>  WRC1 -> C:\Users\test\Documents\Visual Studio 2015\Projects\MyComponent\bin\Debug\MyComponent.winmd
========== Build: 1 succeeded, 0 failed, 0 up-to-date, 0 skipped ==========
```

## Call Windows Runtime component from Titanium module

After successfully building your Windows Runtime component describe above, you should have `MyComponent.winmd` under the Debug folder. Then we want to write a Titanium Module that uses your component.

### Create new Titanium module

```bash
cd /PATH/TO/WORKSPACE
appc new --name test --id com.example.test --type timodule
```

### Copy MyComponent.winmd into windows/lib folder of your module project

Copy your Windows Runtime component files into **windows/lib** folder of your Titanium module project. As of Titanium 6.1.0, Titanium CLI will look into the folder and generates Visual Studio project that has links to the components automatically.

### Modify Titanium module to use MyComponent

**ComExampleTest.hpp**

```cpp
#ifndef _COMEXAMPLETEST_HPP_
#define _COMEXAMPLETEST_HPP_
#include "ComExampleTest_EXPORT.h"
#include "Titanium/detail/TiBase.hpp"
#include "Titanium/Module.hpp"

namespace Com
{
    namespace Example
    {
        using namespace HAL;
        class COMEXAMPLETEST_EXPORT Test : public Titanium::Module, public JSExport<Test>
        {
            public:
                Test(const JSContext&) TITANIUM_NOEXCEPT;
                virtual ~Test()              = default;
                Test(const Test&)            = default;
                Test& operator=(const Test&) = default;
#ifdef TITANIUM_MOVE_CTOR_AND_ASSIGN_DEFAULT_ENABLE
                Test(Test&&)                 = default;
                Test& operator=(Test&&)      = default;
#endif
                static void JSExportInitialize();
                TITANIUM_FUNCTION_DEF(sayHello);
                TITANIUM_FUNCTION_DEF(sayNumber);
                TITANIUM_PROPERTY_DEF(sampleNumber);
                //
                // Overridden method
                // postInitialize is called when JSObject is initialized and associated with module
                // Typically used for initializing static/instance member variables
                //
                virtual void postInitialize(JSObject& js_object) override;
                //
                // Overridden method
                // postCallAsConstructor is called when this module is instantiated via constructor (for instance "new test()")
                // Typically used for initializing instance member variables
                //
                virtual void postCallAsConstructor(const JSContext& js_context, const std::vector<JSValue>& arguments) override;
                //
                // Overridden method
                // afterPropertiesSet is called after properties are all set in constructor (for instance "new test({sampleNumber:123})"")
                // Typically used for notifying all properties are set right after constructor
                //
                virtual void afterPropertiesSet() TITANIUM_NOEXCEPT override;
            private:
                //
                // This is Custom Windows Runtime Component we are developing
                //
                MyComponent::Speaker^ speaker__;
        };
    }
}
#endif // _COMEXAMPLETEST_HPP_
```

Then your Titanium modules cpp will look like:

**ComExampleTest.cpp**

```cpp
#include "ComExampleTest.hpp"
#include "Titanium/detail/TiImpl.hpp"
#include "TitaniumWindows/LogForwarder.hpp"
#include "TitaniumWindows/Utility.hpp"

namespace Com
{
    namespace Example
    {
        Test::Test(const JSContext& js_context) TITANIUM_NOEXCEPT
            : Titanium::Module(js_context, "com.example.test")
        {
            TITANIUM_LOG_DEBUG("Test::ctor Initialize");
        }
        void Test::postInitialize(JSObject& js_object)
        {
        }
        //
        // Overridden method
        // postCallAsConstructor is called when this module is instantiated via constructor (for instance "new test()" in JavaScript)
        //
        void Test::postCallAsConstructor(const JSContext& js_context, const std::vector<JSValue>& arguments)
        {
            Titanium::Module::postCallAsConstructor(js_context, arguments);
            //
            // Let's create Speaker instance on the constructor for now. In JavaScript
            //
            speaker__ = ref new MyComponent::Speaker();
        }
        //
        // Overridden method
        // afterPropertiesSet is called after properties are set in constructor (for instance "new test({sampleNumber:123})"" in JavaScript)
        //
        void Test::afterPropertiesSet() TITANIUM_NOEXCEPT
        {
            Titanium::Module::afterPropertiesSet();
            //
            // Output logs to see if it works
            //
            TITANIUM_MODULE_LOG_INFO("Test::afterPropertiesSet() is called");
        }
        //
        // Expose sayHello method as static method and just delegate it to Speaker
        //
        TITANIUM_FUNCTION(Test, sayHello)
        {
            // We can call Windows Runtime Components static method like this
            // We call ConvertUTF8String function to convert Platform::String^ to std::string here
            return get_context().CreateString(TitaniumWindows::Utility::ConvertUTF8String(MyComponent::Speaker::sayHello("World")));
        }

        //
        // Expose sayNumber method as instance method and just delegate it to Speaker
        //
        TITANIUM_FUNCTION(Test, sayNumber)
        {
            //
            // Note that speaker__ can be nullptr.
            // Speaker instantiates it only when constructor is called
            // We call ConvertUTF8String function to convert Platform::String^ to std::string here
            //
            if (speaker__) {
                return get_context().CreateString(TitaniumWindows::Utility::ConvertUTF8String(speaker__->sayNumber()));
            }
            return get_context().CreateUndefined();
        }
        //
        // Expose name property setter and just delegate it to Speaker
        //
        TITANIUM_PROPERTY_SETTER(Test, sampleNumber)
        {
            //
            // Note that speaker__ can be nullptr.
            // Speaker instantiates it only when constructor is called
            //
            if (speaker__) {
                speaker__->SampleNumber = static_cast<int>(argument);
                return true;
            }
            return false;
        }
        //
        // Expose sampleNumber property getter and just delegate it to Speaker
        //
        TITANIUM_PROPERTY_GETTER(Test, sampleNumber)
        {
            //
            // Note that speaker__ can be nullptr.
            // Speaker instantiates it only when constructor is called
            //
            if (speaker__) {
                return get_context().CreateNumber(speaker__->SampleNumber);
            }
            return get_context().CreateUndefined();
        }
        void Test::JSExportInitialize()
        {
            JSExport<Test>::SetClassVersion(1);
            JSExport<Test>::SetParent(JSExport<Titanium::Module>::Class());

            TITANIUM_ADD_FUNCTION(Test, sayHello);
            TITANIUM_ADD_FUNCTION(Test, sayNumber);
            TITANIUM_ADD_PROPERTY(Test, sampleNumber);
        }
    }
}
```

For more examples of using the module API, see working Titanium modules under [github/appcelerator/titanium\_mobile\_windows/Source](https://github.com/appcelerator/titanium_mobile_windows/tree/master/Source)

### C++ built-in types and Windows Runtime types

You might wonder why we can't pass `JSValue` as string directly to `MyComponent->Name`. That is because only Windows Runtime types can be passed across ABI boundary. For basic information about type system in Windows Runtime refer to [Type System (C++/CX)](https://docs.microsoft.com/en-us/cpp/cppcx/type-system-c-cx). To pass string across ABI boundary you need to convert `JSValue` to `std::string` and then convert to `Platform::String^` (C++). There are some utility functions to convert it in `TitaniumWindows::Utility` namespace. Let say we have argument variable that is passed as `JSValue` like below, we can cast `JSValue` to std::string, and then convert it to `Platform::String^` using `TitaniumWindows::Utility::ConvertUTF8String`. Note that we need to treat strings in `JSValue` as UTF8 because it consists of UTF8 strings.

```javascript
//
// Only Windows Runtime types can be passed to Windows Runtime component.
// Usage: const auto wrcString = ConvertToString(jsvalue)
//
Platform::String^ ConvertToString(const JSValue& js_value) {
    const auto name = static_cast<std::string>(js_value);
    return TitaniumWindows::Utility::ConvertUTF8String(name);
}
```

### Build module with --run-cmake option

In order to re-create Visual Studio project files so it can use your component, we need to specify `--run-cmake` option.

```bash
appc run -p windows --build-only --run-cmake
```

Then Titanium CLI will generate module zip that contains your Windows Runtime Component.

## Next steps

* For information about HAL API, see [github/appcelerator/HAL](https://github.com/appcelerator/HAL)

* For information about TitaniumKit, see [github/appcelerator/titanium\_mobile\_windows](https://github.com/appcelerator/titanium_mobile_windows)

* For more examples of using the module API, see working Titanium modules under [github/appcelerator/titanium\_mobile\_windows/Source](https://github.com/appcelerator/titanium_mobile_windows/tree/master/Source)
