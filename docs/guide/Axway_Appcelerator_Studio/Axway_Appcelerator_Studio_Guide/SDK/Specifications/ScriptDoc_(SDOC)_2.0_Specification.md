---
title: ScriptDoc (SDOC) 2.0 Specification
weight: '50'
---

# ScriptDoc (SDOC) 2.0 Specification

## Overview

This reference page provides comprehensive documentation for all ScriptDoc tags, in alphabetical order.

Several tags have "synonyms" where you can use two differently named tags to document the same thing. You can use a synonym by using the exact same syntax as the original tag, but just substituting the tag name.

The section for each tag includes the following information:

* Short description of the tag

* Syntax

* What the tag applies to

* Longer explanation of the tag

* Example (Some tags have multiple examples)

## Reference

The following tags are valid for code documentation.

### alias

ID for a class or function.

Applies to: Any

**Syntax**

@alias fooBar

**Description**

Use the @alias tag to ID a class or function if you have used a "shorthand" way to code the full name for that class or function.

**Example**

This example shows the @alias tag used to id a function called fooBar in the FOO.Lib namespace.

```javascript
FOO.Lib.update(FOO.Lib) {

/**
 * Returns a function that will return a number one greater than the previous returned value, starting at n.
 * @alias fooBar
 * @alias FOO.Lib.fooBar
 * @param {Object} n  Number to start with. Default is 1.
 * @return {Function) Returns a function that will return a number one greater than the previous returned value.
 */
    fooBar: function (n/* = 1 */) {
        if (arguments.length === 0) {
            n = 1;
        }
        return function () {
            return n++;
        };
    },
```

### author

Author of a JavaScript file or function.

Applies to: Any

**Syntax**

@author _Author-name_ \[ _email_ \]

**Description**

Use @author to credit the author of a JavaScript file or function.

**Example**

This example shows the @author tag used with the [@projectDescription](#projectdescription) and [@version](#version) tags to provide header information for a JavaScript file.

```
/**
* @projectDescription   Joe Smith's wonderful JavaScript library.
*
* @author  Joe Smith jsmith@company.com
* @version  0.1
*/
```

### classDescription

Description of the class.

Applies to: Function

**Syntax**

@classDescription _Description_

**Description**

Use the @classDescription tag to give a short description of the class (if applicable).

**Example**

This example shows a sample documentation block for a basic Shape class.

```javascript
/**
* Create a new instance of Shape.
*
* @classDescription  This class creates a new Shape.
* @return {Shape}  Returns a new Shape.
* @type {Object}
* @constructor
*/
function Shape() {
}
```

### constructor

Shows that a function is a constructor for a class.

Applies to: Function

**Syntax**

@constructor

**Description**

Use the @constructor tag to signify that a function is a constructor if you are coding in an object-oriented programming style.

**Example**

This example shows a sample documentation block for a basic Shape class.

```javascript
/**
* Create a new instance of Shape.
*
* @classDescription  This class creates a new Shape.
* @return {Object}  Returns a new Shape object.
* @constructor
*/
function Shape() {
}
```

### deprecated

Signifies that a function or a property has been deprecated.

Applies to: Function or property.

**Syntax**

@deprecated

**Description**

Use the @deprecated tag to show that a function or a property has been deprecated and should not be used.

**Example**

This example shows a @deprecated tag added to a documentation block for a function.

```javascript
/**
* This function gets a foo by name.
* @param {Object}  fooName  Name of the foo to retrieve.
* @return {Object}  Returns a new foo.
* @deprecated
*/
```

### example

Gives an example for the function being documented.

Applies to: Any (except @projectDescription)

**Syntax**

@example _Example-code_

**Description**

Use the @example tag when you want to show an example of how to use the code that you are documenting. Any whitespace you add will be included when the tag is parsed. You can also include basic HTML to make your example more readable.

**Example**

This example shows a documentation block for a "move" function that takes the arguments "layerID" and "direction" and includes an @example tag with code example. Use HTML tags to format your descriptions. Use the

::: tip
```
{code}{code}
```
:::

tag set to format the example as code. (This example uses the @remarks tag to give more information about the function.)

```javascript
/**
* This function moves a layer in the specified direction.
* @param {String}  layerID  The ID for the layer to be moved.
* @param {String}  direction  The direction for the layer to be moved.
* @param {Number}  number  Number of pixels to move the layer.
* @remarks The direction argument can be "right", "left", "up", or "down".
*          You cannot move the layer beyond the boundaries of the browser window.
* @example  Using the move function
*           This example uses the move function to move myLayer to the right by 50 pixels.
*           move(myLayer, right, 50)
* /
function move(layerID, direction, number)
```

### exception

Specifies the type of exception thrown by a function.

Applies to: Function

**Syntax**

@exception { _Exception_ } _Exception-description_

**Description**

Use the @exception tag to specify any exceptions thrown by a function. You can specify multiple exceptions in a documentation block.

**Example**

This example shows a function that throws two exceptions--a "MemoryException" and a "GeneralShapeException".

```javascript
/**
* This function creates a new Shape object.
*
* @exception  {MemoryException}  Throws a memory exception if out of memory.
* @exception  {GeneralShapeException}  Throws a general shape exception if the object is not a shape.
* @return   {Object}  Returns a new shape object.
*/
```

### id

Unique identifier for a function or property.

Applies to: All

**Syntax**

@id _identifierName_

**Description**

Use @id to link a function or property to its documentation in an external @sdoc file. Add the @id tag both inline right above a function and to the documentation block in the .sdoc file to create the link.

**Example**

This example shows an inline @id tag for the function foo.

```javascript
/** @id */
function foo() {
   alert("Foo!");
}
```

### inherits

Indicates that one item "inherits" from another

Applies to: Function

**Syntax**

```
@inherits _functionNameA_
 @inherits _functionNameB_
```

or

```
@inherits _functionNameA_, _functionNameB_
```

**Description**

Use @inherits to indicate that one "class" subclasses another in object-oriented JavaScript.

**Example**

This example shows that bar inherits from foo.

```javascript
function foo() {
}

/** @inherits foo */
function bar() {
}
```

### internal

Specifies that a function or property should not be made visible by Content Assist.

Applies to: Function, Property

**Syntax**

@internal

**Description**

Specifies that a function or property should not be made visible by Content Assist.

**Example**

This example shows an @internal tag.

```
/**
* @internal
*/
```

### memberOf

Signifies that a function is a member of the specified class.

Applies to: Function, Property.

**Syntax**

@memberOf _Class_

**Description**

Use the @memberOf tag to signify that a function is a member of the specified class.

**Example**

This example shows that the getFoo function is a member of the fooBar class.

```javascript
/**
* @memberOf fooBar
*/
function getFoo(){
}
```

### method

Signifies that a function is a method of a class, if applicable.

Applies to: Function

**Syntax**

@method

**Description**

Use the @method tag to signify a method of a class if you are coding in an object-oriented programming style.

**Example**

This example shows a @method tag.

```
/**
* @method
*/
```

### namespace

Creates the namespace prefix for a library file.

Applies to: File

**Syntax**

@namespace _namespaceName_

**Description**

Creates the link between the namespace of a library file and an external .sdoc file.

**Example**

This example shows how to use the @namespace tag to link the namespace of a library to an .sdoc file.

The excerpt below would go at both the top of the library file that contains the "ajax" namespace for the "snazzyLib" library and the corresponding "ajax.sdoc" file that contains the documentation for the "ajax" namespace in snazzyLib:

```
/**
 * @namespace snazzyLib.ajax
 */
```

### param

Use @param to tag each parameter for a function.

Applies to: Function

**Syntax**

@param { _Type_ \[, _Type_, ... \]} \[ **...** \] _ParameterName_ _Parameter-Description_

**Description**

Gives information about a parameter for a function. Specify the data type between the curly braces. If the parameter is optional, add '\[ \]' around the parameter name. An ellipsis (...) after the parameter type indicates that the parameter can be repeated.

**Examples**

_Standard example_

The following example shows a parameter for a function that takes a String named myDog.

```
/**
 * @param {String} myDog The name of the dog.
 */
```

_Optional parameter example_

The following example shows an optional parameter that can be either a String or a Date.

```
/**
 * @param {String, Date} [myDate] Specifies the date, if applicable.
 */
```

_Multiple objects example_

The following example shows a parameter that can be one or more Strings.

```
/**
 * @param {String} ... Takes one or more dog parameters.
 */
```

### private

Signifies that a class or a function is private.

Applies to: Function, Property

**Syntax**

@private

**Description**

Use the @private tag to signify that a class or function is private. The ScriptDoc output will not include private classes or functions unless you run ScriptDoc with the _\--private_ commmand line argument.

**Example**

This example shows a private function that returns a foo.

```javascript
/**
 * This function creates a new foo.
 * @private
 * @return {Object} Returns a foo.
 */
```

### projectDescription

Gives a description of a JavaScript file.

Applies to: File.

**Syntax**

@projectDescription _Description_

**Description**

Use the @projectDescription tag as the first tag in the first documentation block for a JavaScript file. The @projectDescription tag signifies that the entire documentation block is part of a project description.

**Example**

This example shows the @projectDescription tag used with the [@author](#author) and [@version](#version) tags to provide header information for a JavaScript file.

```
/**
 * @projectDescription  This library contains a lot of classes and functions.
 *
 * @author   Joe Smith jsmith@company.com
 * @version   0.1
 */
```

### property

Indicates that a member is a property of a class instance

Applies to: File.

**Syntax**

@property {_Type_ \[, _Type_, ... \]}

**Description**

Use the @property tag to indicate that the following member is a property (as opposed to a method) of a class instance.

**Example**

This example shows the @property tag being used to define a "myProperty" property on the MyClass class. The property contains a description and will be treated as a String.

```
/**
 * This is a property of class MyClass
 *
 * @alias MyClass.myProperty
 * @property {String}
 */
```

### return

Specifies information about the return value(s) of a function.

Applies to: Function

**Syntax**

@return {_Type_ \[, _Type_, ...\]} _Returns-Description_

**Description**

@return gives a description for the return value of a function.

**Example**

This example shows a return value for a function that returns a new foo object.

```
/**
 * @return {Object} Returns a new foo object.
 */
```

### see

Links to another related class or function.

Applies to: Any

**Syntax**

@see _Class | #Function | Class#Function_

**Description**

Use the @see tag to add a link to another class, a function within the current class, or a function in another class.

**Examples**

_Function example_

This example shows a link to a function named "foo" in the same class as the one being documented.

```
/**
 * @see #foo
 */
```

_Class example_

This example shows a link to a class named "fooBar".

```
/**
 * @see fooBar
 */
```

_Function in another class example_

This example shows a link to a function named "foo" in another class named "fooBar".

```
/**
 * @see fooBar#foo
 */
```

### since

Specifies since which version the library, function, or property became valid.

Applies to: File, Function, Property

**Syntax**

@since _Version-number_

**Description**

Specifies since which version the library, function, or property became valid.

**Example**

This example shows a @since tag, used in conjunction with @projectDescription, @author, and @version tags. A documentation block like this would go at the top of a JavaScript file.

```
/**
 * @projectDescription  This library contains a lot of classes and functions.
 *
 * @author   Joe Smith jsmith@company.com
 * @version   1.1
 * @since  1.0
 */
```

### type

Specifies what data type a property is.

Applies to Property

**Syntax**

@type {_Type_}

**Description**

Specifies what data type a property is.

**Example**

This example uses the @type tag to show the type for a property.

```
/**
 * This property describes what type of shape an object is.
 * @type {Object} This property describes what type of shape an object is.
 */
```

### version

Specifies the version number of the JavaScript file or class.

Applies to: Any

**Syntax**

@version _Version-Number_

**Description**

Specifies the version number of the JavaScript file or class.

**Example**

This example shows the @version tag used with the [@projectDescription](#projectdescription) and [@author](#author) tags to provide header information for a JavaScript file.

```
/**
 * @projectDescription A description of the file ahead
 *
 * @author   Joe Smith jsmith@company.com
 * @version   0.1
 */
```
