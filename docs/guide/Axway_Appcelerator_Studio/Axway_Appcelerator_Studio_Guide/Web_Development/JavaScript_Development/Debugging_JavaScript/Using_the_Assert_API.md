---
title: Using the Assert API
weight: '110'
---

# Using the Assert API

This page explains how to use the Assert API feature that is part of the Studio JavaScript debugger.

## Introduction

Use the Assert API to determine whether a condition that you specify is true or false at a given moment. You can do this by adding the code "aptana.assert\_CallName\_" to your code where you want to test the condition.

## Instructions

The Assert API has a variety of available calls for you to test various conditions in your code. The list below displays the reference information for each call.

### aptana.fail

Displays if the code fails at the specified point.

**Syntax**

```
aptana.fail(message,arg1,arg2,...);
```

**Example**

```
aptana.fail("Failed!", "arg1", "arg2");
```

### aptana.assert

Asserts the specified statement.

**Syntax**

```
aptana.assert(object, arg1, arg2, ...);
```

**Example**

```
aptana.assert(null, "This is my assert message!", "arg1", "arg2");
```

### aptana.assertEquals

Returns true if the arguments are equal.

**Syntax**

```
aptana.assertEquals(o1,o2,arguments);
```

**Example**

```
aptana.assertEquals(1,2, "arg1", "arg2");
```

### aptana.assertNotEquals

Returns true if the arguments are not equal.

**Syntax**

```
aptana.assertNotEquals(o1,o2,arguments);
```

**Example**

```
aptana.assertNotEquals(1,1 "arg1", "arg2");
```

### aptana.assertGreater

Returns true if the first argument is greater than the second argument(s).

**Syntax**

```
aptana.assertGreater(o1,o2,arguments);
```

**Example**

```
aptana.assertGreater(1,2,"arg1", "arg2");
```

### aptana.assertNotGreater

Returns true if the first argument is not greater than the second argument(s).

**Syntax**

```
aptana.assertNotGreater(o1,o2,arguments);
```

**Example**

```
aptana.assertNotGreater(1,2,"arg1", "arg2");
```

### aptana.assertLess

Returns true if the first argument is less than the second argument(s).

**Syntax**

```
aptana.assertLess(o1,o2,arguments);
```

**Example**

```
aptana.assertLess(2,1, "arg1", "arg2");
```

### aptana.assertNotLess

Returns true if the first argument is not less than the second argument(s).

**Syntax**

```
aptana.assertNotLess(o1,o2,arguments);
```

**Example**

```
aptana.assertNotLess(2,1, "arg1", "arg2");
```

### aptana.assertContains

Returns true if the objects contain the arguments.

**Syntax**

```
aptana.assertContains(o1,o2,arguments);
```

**Example**

```
aptana.assertContains("x",window, "arg1", "arg2");
```

### aptana.assertNotContains

Returns true if the objects do not contain the arguments.

**Syntax**

```
aptana.assertNotContains(o1,o2,arguments);
```

**Example**

```
aptana.assertNotContains("document",window, "arg1", "arg2");
```

### aptana.assertTrue

Returns true if the specified condition is true.

**Syntax**

```
aptana.assertTrue(object,arguments);
```

**Example**

```
aptana.assertTrue(false, "arg1", "arg2");
```

### aptana.assertFalse

Returns true if the specified condition is false.

**Syntax**

```
aptana.assertFalse(object,arguments);
```

**Example**

```
aptana.assertFalse(true, "arg1", "arg2");
```

### aptana.assertNull

Returns true if the specified object/arguments are null.

**Syntax**

```
aptana.assertNull(object,arguments);
```

**Example**

```
aptana.assertNull(window, "arg1", "arg2");
```

### aptana.assertNotNull

Returns true if the specified object/arguments are not null.

**Syntax**

```
aptana.assertNotNull(object,arguments);
```

**Example**

```
aptana.assertNotNull(null, "arg1", "arg2");
```

### aptana.assertUndefined

Returns true if the specified object/arguments are undefined.

**Syntax**

```
aptana.assertUndefined(object,arguments);
```

**Example**

```
aptana.assertUndefined(window, "arg1", "arg2");
```

### aptana.assertNotUndefined

Returns true if the specified object/arguments are not undefined.

**Syntax**

```
aptana.assertNotUndefined(object,arguments);
```

**Example**

```javascript
var x; aptana.assertNotUndefined(x, "arg1", "arg2");
```

### aptana.assertInstanceOf

Returns true if the argument(s) are an instance of the object(s).

**Syntax**

```
aptana.assertInstanceOf(o1,o2,arguments);
```

**Example**

```
aptana.assertInstanceOf("str",Date, "arg1", "arg2");
```

### aptana.assertNotInstanceOf

Returns true if the argument(s) are not an instance of the objects.

**Syntax**

```
aptana.assertNotInstanceOf(o1,o2,arguments);
```

**Example**

```
aptana.assertNotInstanceOf(new Date(),Date, "arg1", "arg2");
```

### aptana.assertTypeOf

Returns true if the argument(s) are the type of the objects.

**Syntax**

```
aptana.assertTypeOf(o1,o2,arguments);
```

**Example**

```
aptana.assertTypeOf(1, "string", "arg1", "arg2");
```

### aptana.assertNotTypeOf

Returns true if the argument(s) are not a type of objects.

**Syntax**

```
aptana.assertNotTypeOf(o1,o2,arguments);
```

**Example**

```
aptana.assertNotTypeOf(1,"number", "arg1", "arg2");
```

### Related Topics

* [About the Debug perspective](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/)

* [Installing the JavaScript debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Installing_the_JavaScript_debugger/)

* [Uninstalling the debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Uninstalling_the_debugger/)

* [Running the debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Running_the_debugger/)

* [Accessing your debugger log](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Accessing_your_debugger_log/)

* [Stepping into and over functions](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Stepping_into_and_over_functions/)

* [Adding a breakpoint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/)
