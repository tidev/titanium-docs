---
title: Windows Module Architecture
weight: '30'
---

# Windows Module Architecture

## Introduction

The Titanium SDK is based on a modular architecture, which can be utilized to extend the SDK by building modules. The module architecture contains the following key interface components:

* **_Module_** : A base class that represents the native binding between your JavaScript code and native code

* **_View_** : The visual representation of a UI component which Titanium can render

To return visual data between JavaScript and native code, create a View. The View represents is responsible for exposing the APIs and events that the View supports.

To return non-visual data between JavaScript and native code, create a Module. The Module knows how to handle any method and property, and dispatching and firing events.

These components require special class names and method signatures. Each components is described in further detail below.

## Module

A Module is a class that provides an API point with a particular ID. That ID can then be used to `require` the module from JavaScript.

All modules must extend the `Titanium::Module` and `JSExport` class .

**ComExampleTest.hpp**

```cpp
#include "Titanium/Module.hpp"

class COMEXAMPLETEST_EXPORT Test : public Titanium::Module, public JSExport<Test>
{
public:
    ...
};
```

Module constructor should call `Titanium::Module` constructor with module id that specifies the identifier used with `require` to import the module.

**ComExampleTest.cpp**

```cpp
#include "ComExampleTest.hpp"

Test::Test(const JSContext& js_context) TITANIUM_NOEXCEPT
    : Titanium::Module(js_context, "com.example.test")
{
    ...
}
```

In this case, the JavaScript to require the module would look like this:

```javascript
var test = require("com.example.test");
```

A module can also have a parent module: for instance [Titanium.UI](https://github.com/appcelerator/titanium_mobile/blob/master/android/modules/ui/src/java/ti/modules/titanium/ui/UIModule.java) and [Titanium.App](https://github.com/appcelerator/titanium_mobile/blob/master/android/modules/app/src/java/ti/modules/titanium/app/AppModule.java) are children of the [Titanium](https://github.com/appcelerator/titanium_mobile/blob/master/android/titanium/src/java/ti/modules/titanium/TitaniumModule.java) module.

### Module Lifecycle Events

The module provides several places for you to hook into the application's lifecycle.

Use `postInitialize` method to declare a method to be called when the module object is created. This is optional and is only required if you have any module specific initialization, such as initializing variables that is required by the module. This method is called after module object initialization. This method could be called multiple times, _after_ your module object is actually created, and _before_ module is called as a constructor.

Declare `postInitialize` with `override` specifier in the header:

**ComExampleTest.hpp**

```cpp
#include "Titanium/Module.hpp"

class COMEXAMPLETEST_EXPORT Test : public Titanium::Module, public JSExport<Test>
{
public:
    virtual void postInitialize(JSObject& js_object) override;
    ....
};
```

Override `postInitialize` in the implementation:

**ComExampleTest.cpp**

```cpp
void Test::postInitialize(JSObject& js_object)
{
    // This is called when JavaScript object is created for this module.
    // Could be called multiple times, after module object is actually created, and before module is called as a constructor.
    //
    // For example:
    // var Test = require('com.example.test'); // <- postInitialize
    // var test = new Test(); // <- postInitialize
 }
```

If you only need to hook JavaScript constructor, use `postCallAsConstructor` method to declare a method to be called when the module constructor is called. This is optional and is only required if you have any module instance specific initialization, such as initializing variables that is required by the instance. This method is called during module constructor. This method is called only once _after_ module is called as a constructor.

Declare `postCallAsConstructor` with `override` specifier in the header:

**ComExampleTest.hpp**

```cpp
#include "Titanium/Module.hpp"

class COMEXAMPLETEST_EXPORT Test : public Titanium::Module, public JSExport<Test>
{
public:
    virtual void postCallAsConstructor(const JSContext& js_context, const std::vector<JSValue>& arguments) override;
    ....
};
```

Override `postCallAsConstructor` in the implementation. Note that the arguments that is given to the constructor are passed as `arguments` parameter.

**ComExampleTest.cpp**

```cpp
void Test::postCallAsConstructor(const JSContext& js_context, const std::vector<JSValue>& arguments)
{
    // This is called when JavaScript object is created as a constructor.
    // This method is called only once after module is called as a constructor.
    //
    // For example:
    // var TEST = require('com.example.test'); // <- postInitialize
    // var test = new Test(); // <- postInitialize, callAsConstructor
}
```

### Methods

Methods are exposed via `TITANIUM_ADD_FUNCTION` and `TITANIUM_FUNCTION_DEF` C++ macro.

First, declare method using `TITANIUM_FUNCTION_DEF` in header:

**ComExampleTest.hpp**

```cpp
#include "Titanium/Module.hpp"

class COMEXAMPLETEST_EXPORT Test : public Titanium::Module, public JSExport<Test>
{
public:
    TITANIUM_FUNCTION_DEF(example);
    ....
 };
```

Second, implement `example` method with `TITANIUM_FUNCTION` and then register in `JSExportInitialize` with `TITANIUM_ADD_FUNCTION`:

**ComExampleTest.cpp**

```cpp
void Test::JSExportInitialize()
{
    JSExport<Test>::SetClassVersion(1);
    JSExport<Test>::SetParent(JSExport<Titanium::Module>::Class());

    // register example method so we can use it from JavaScript
    TITANIUM_ADD_FUNCTION(Test, example);
    ...
}

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
    return get_context().CreateString("hello world");
}
```

There are variables expanded from `TITANIUM_FUNCTION` macro here: `arguments` as `std::vector<JSValue>`, and `this_object` as `JSObject`.Titanium provides several ways for typecasting incoming values to a specific type and extracting them from the array that can be used with `TITANIUM_FUNCTION`. For instance you can find `ENSURE_XXX_AT_INDEX` for typecasting, that is defined in `Titanium/detail/TiImpl.hpp.`

* ENSURE\_INT\_AT\_INDEX(OUT, INDEX)

* ENSURE\_UINT\_AT\_INDEX(OUT, INDEX)

* ENSURE\_DOUBLE\_AT\_INDEX(OUT, INDEX)

* ENSURE\_BOOL\_AT\_INDEX(OUT, INDEX)

* ENSURE\_STRING\_AT\_INDEX(OUT, INDEX)

Note that in this macro example `OUT` is a variable name, and `INDEX` is a index in the arguments. For example:

**ComExampleTest.cpp**

```cpp
TITANIUM_FUNCTION(Test, example)
{
    // get 1st argument and convert it to std::int32_t
    ENSURE_INT_AT_INDEX(my_int, 0);

    // get 2nd argument and convert it to double
    ENSURE_DOUBLE_AT_INDEX(my_double, 1);

    // get 3rd argument and convert it to boolean
    ENSURE_BOOL_AT_INDEX(my_bool, 2);

    // get 4th argument and convert it to std::string
    ENSURE_STRING_AT_INDEX(my_string, 3);

    // let's return 4th argument for example
    return get_context().CreateString(my_string);
}
```

### Properties

Properties are exposed via `TITANIUM_ADD_PROPERTY` and `TITANIUM_PROPERTY_DEF` C++ macro.

First, declare method using `TITANIUM_FUNCTION_DEF` in header:

**ComExampleTest.hpp**

```cpp
#include "Titanium/Module.hpp"

class COMEXAMPLETEST_EXPORT Test : public Titanium::Module, public JSExport<Test>
{
public:
    TITANIUM_PROPERTY_DEF(exampleProp);
    ....
 };
```

Second, implement `exampleProp` property getter/setter with `TITANIUM_PROPERTY_GETTER/` `TITANIUM_PROPERTY_SETTER` and then register in `JSExportInitialize` with `TITANIUM_ADD_PROPERTY:`

**ComExampleTest.cpp**

```cpp
void Test::JSExportInitialize()
{
    JSExport<Test>::SetClassVersion(1);
    JSExport<Test>::SetParent(JSExport<Titanium::Module>::Class());

    // register exampleProp property so we can use it from JavaScript
    TITANIUM_ADD_PROPERTY(Test, exampleProp);
    ...
}

TITANIUM_PROPERTY_GETTER(Test, exampleProp)
{
    // example property getter
    //
    // Getter should return JavaScript value (JSValue).
    //
    // For more information on how to use JSContext / JSValue / JSObject, check out HAL:
    //      https://github.com/appcelerator/HAL
    //
    return get_context().CreateString("hello world");
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
    //
    // Setter should return true if the property was set, otherwise false.
    //
    return true;
}
```

Inside setter, there's a variable that you can use: `argument` as `JSValue`. For typicasting property values, you can just use C++11 s`tatic_cast<TYPE>`.

**ComExampleTest.cpp**

```cpp
TITANIUM_PROPERTY_SETTER(Test, exampleProp)
{
    // example property setter
    //
    // There are a variable expanded from TITANIUM_PROPERTY_SETTER macro here:
    //     JSValue argument ... JavaScript value that is passed to this setter
    //

    const auto my_int = static_cast<std::int32_t>(argument);
    const auto my_double = static_cast<double>(argument);
    const auto my_string = static_cast<std::string>(argument);
    const auto my_bool = static_cast<bool>(argument);

    return true;
}
```

### Handling Events

Modules automatically handle firing events and managing event listeners. Internally, when you call `addEventListener()` or `removeEventListener()` from JavaScript against a module instance, the module will automatically handle the code for managing the event listeners. If you want to be notified upon an add or remove, you should override the methods:

**ComExampleTest.hpp**

```cpp
virtual void enableEvent(const std::string& event_name) TITANIUM_NOEXCEPT override;
virtual void disableEvent(const std::string& event_name) TITANIUM_NOEXCEPT override;
```

The`enableEvent` method will be invoked when event is enabled with given name. This is convenient, for example, when you would like to enable some action only once at least one listener is listening for the event. This can be useful for conserving system resources.

The `disableEvent` method will be invoked when event is enabled with given name. This is useful when you want to cleanup system resources once no listeners are actively listening for events.

To send an event to any event listener, you use the convenience method:

**Titanium/Module.hpp**

```cpp
virtual void fireEvent(const std::string& name) TITANIUM_NOEXCEPT final;
virtual void fireEvent(const std::string& name, const JSObject& event) TITANIUM_NOEXCEPT final;
```

The first one is the default and most common way to fire an event. The first argument (name) is the event name. The second argument (event) is an `JSObject` of event properties. The second argument can also be omitted if no additional event properties are needed. The event properties will be part of the event argument which is the first argument in all event functions.

For example:

```javascript
TITANIUM_FUNCTION(Test, example)
{
   ...
   const auto ctx = get_context();
   auto obj = ctx.CreateObject();
   obj.SetProperty("name", ctx.CreateString("my name"));
   fireEvent("foo", obj);
}
```

In this example, we'd adding one additional event property named 'name' with the value of 'my name'. In JavaScript, this would be retrieved like:

```
test.addEventListener('foo',function(e){
  alert("name is "+e.name);
});
```

In addition to any additional event arguments passed, Titanium automatically provides the following built-in properties on all events fired:

* source — The source object (proxy) that fired the event

* type — The type of event

### More Examples

* For information about HAL API, see [github/appcelerator/HAL](https://github.com/appcelerator/HAL)

* For information about TitaniumKit, see [github/appcelerator/titanium\_mobile\_windows](https://github.com/appcelerator/titanium_mobile_windows)

* For more examples of using the module API, see working Titanium modules under [github/appcelerator/titanium\_mobile\_windows/Source](https://github.com/appcelerator/titanium_mobile_windows/tree/master/Source)
