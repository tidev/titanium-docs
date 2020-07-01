---
title: ScriptDoc XML (SDOCML) 2.0 Specification
weight: '10'
---

# ScriptDoc XML (SDOCML) 2.0 Specification

## Overview

This page describes the valid elements, attributes, and attribute values for the XML-based content assist of JavaScript libraries.

## Introduction

The metadata in SDOCML files helps to provide the Code Assist information for the JavaScript editor. This reference describes which elements, attributes, and attribute values are valid metadata.

The section for each element includes the following information:

* Short description of the element

* Syntax

* Element parents and children

* Element attributes and their valid values

* Longer explanation of the element

* Example(s)

Once you have created this file, see [Using JavaScript Libraries](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Using_JavaScript_Libraries/) for the specifics on how to use it. Check the Aptana Log file (Help Menu > Troubleshooting > Aptana Log File) to see if there are any errors generated when loading it. There is also an available XSD to validate your document.

## Short Example

This example is not meant to be exhaustive, but will give you an example of what a simple file looks like.

```xml
<?xml version="1.0" encoding="UTF-8"?>
 <javascript>
    <class type="libraryname.ClassName" superclass="Object Object2">
        <constructors>
            <constructor scope="instance">
                <description>Constructor description. Note how this class inherits from two different superclass types (using space separations)</description>
                <parameters>
                    <parameter name="message" usage="required" type="String|Number|CustomType1">
                        <description>Parameter description. Note the multiple type definition</description>
                    </parameter>
                </parameters>
                <return-types>
                    <return-type type="libraryname.ClassName"/>
                </return-types>
            </constructor>
        </constructors>
        <properties>
            <property name="propertyInstance" access="read-write" scope="instance" type="String|CustomType2">
                <description>Property description. Note the multiple type definition</description>
            </property>
            <property name="propertyStatic" access="read-write" scope="static" type="String">
                <description>Property description</description>
            </property>
        </properties>
        <mixins scope="static">

            <mixin type="CustomType3" scope="static" />
        </mixins>
        <methods>
            <method name="functionInstance" scope="instance">
                <description>Method description</description>
                <parameters>
                    <parameter name="param" usage="required" type="String">
                        <description>Parameter description</description>
                    </parameter>
                </parameters>
                <return-types>
                    <return-type type="String"/>
                </return-types>
            </method>
            <method name="functionStatic" scope="static">
                <description>Method description</description>
                <parameters/>
                <return-types>
                    <return-type type="String"/>
                </return-types>
            </method>
        </methods>
    </class>
 </javascript>
```

## Types

We support an optional notation when describing types:

**Arrays**

* `String[]` - Array of Strings (simple syntax)

* `Array<String>` - Array of Strings (generics syntax for above)

* `Array<Array<String>>` - Array of Array of Strings

**Functions**

* Function - function with no params, and no return value

* Function:Object - function with no params, returns an Object

* Function->Object - function with no params, returns an Object (alternate syntax for above)

* Function:(String | Number) - function with no params, returns String or Number

* Function(String, Number) - function with two params, first of type String, second of type Number, and no return value

**A ScriptDoc sample**

```javascript
/**
* A sample scriptdoc comment
*
* @param {String} name
* @param {Array<Function(Event)>} handlers
*
*/
function sampleFunction(name, handlers) { ... }
```

**A XML sample**

```xml
<javascript>
   <!-- we assume super class is Object if none is defined -->
   <class type="MyClass">
    <methods>
    <!-- We assume methods (and properties) are instance types by default -->
      <method name="MyMethod">
        <description>Performs some amazing magic</description>
        <parameters>
          <!-- We assume parameters are required by default -->
          <parameter name="name" type="String"/>
          <parameter name="functions" type="Array<Function(String):Number>" usage="optional"/>
        </parameters>
      </method>
    </methods>
  </class>
</javascript>
```

## Reference

### alias

Alternate name for a class.

**Syntax**

```xml
<aliases>
  <alias name="name1" type="type1" />
  <alias name="name2" type="type2" />
</aliases>
```

Child of: [#aliases](#aliases)

No children.

**Attributes and values**

* name - Name of the alias

* type - Type that the alias represents

**Description**

The `alias` element is used in special cases to make Code Assist appear properly for a class.

**Example**

```xml
<aliases>
  <alias name="document" type="Document" />
</aliases>
```

### aliases

Container node for the alternate name(s) for a class.

**Syntax**

```xml
<aliases>
  <alias name="name1" type="type1" />
  <alias name="name2" type="type2" />
</aliases>
```

Child of: [#class](#class)

Parent of: [#alias](#alias)

**Attributes and values**

No attributes and values.

**Description**

The `alias` element is used in special cases to make Code Assist appear properly for a class.

**Example**

```xml
<aliases>
  <alias name="document" type="Document" />
</aliases>
```

### availability

Container node for the specifications (e.g. ECMAScript version) that apply to a class, constructor, method, or property.

**Syntax**

```xml
<availability>
  <specification name="name1" />
</availability>
```

Child of: [#class](#class), [#constructor](#constructor), [#method](#method), [#property](#property)

Parent of: [#specification](#specification)

**Attributes and values**

No attributes and values.

**Description**

The `availability` element element lists the specifications (e.g. JavaScript version, JScript version and/or ECMAScript version) that apply to a class, constructor, method, or property.

In the DOM, CSS, HTML metadata, the `availability` and `specification` nodes hold information about the W3C specification for an element or object.

**Example**

```xml
<availability>
  <specification name="JavaScript 1.1"/>
  <specification name="JScript 2.0"/>
  <specification name="ECMAScript v1"/>
</availability>
```

### browser

Holds the information about browser support for a class, constructor, method, or property.

**Syntax**

```xml
<browsers>
  <browser platform="browserName1" version="version" os="operatingSystem osVersion="operatingSystemVersion">
    <description>Notes</description>
  </browser>
  <browser platform="browserName2" version="version" />
</browsers>
```

Child of: [#browsers](#browsers)

Parent of: [#description](#description)

**Attributes and values**

* platform - Name of the browser platform. Use "IE", "Mozilla", "Netscape", "Opera", or "Safari".

* version - Platform version (optional but recommended)

* os - Operating system (optional)

* osVersion - OS version

**Description**

The `browser` element lists the browser support information that applies to a class, constructor, method, or property.

Use the child `description` node to list any caveats or notes about the browser support for that particular class, constructor, method, or property.

**Example**

```xml
<browsers>
  <browser platform="IE" version="4.0+"/>
  <browser platform="Mozilla" version="1.0+"/>
  <browser platform="Netscape" version="3.0+"/>
  <browser platform="Opera" version="7.0+" />
  <browser platform="Safari" version="1.0+" />
</browsers>
```

### browsers

Container node that holds `browser` nodes, which have the information about browser support for a class, constructor, method, or property.

**Syntax**

```xml
<browsers>
  <browser platform="browserName1" version="version" os="operatingSystem osVersion="operatingSystemVersion">
    <description>Notes</description>
  </browser>
  <browser platform="browserName2" version="version" />
</browsers>
```

Child of: [#class](#class), [#constructor](#constructor), [#method](#method), [#property](#property)

Parent of: [#browser](#browser)

**Attributes and values**

No attributes or values.

**Description**

The `browsers` element holds the `browser` nodes for a class, constructor, property, or method.

**Example**

```xml
<browsers>
  <browser platform="IE" version="4.0+"/>
  <browser platform="Mozilla" version="1.0+"/>
  <browser platform="Netscape" version="3.0+"/>
  <browser platform="Opera" version="7.0+" />
  <browser platform="Safari" version="1.0+" />
</browsers>
```

### class

Represents an object class in JavaScript.

**Syntax**

```xml
<class type="objectType" superclass="className className2" visibility="[internal]" >
        <aliases />
  <availability/>
  <browsers/>
  <constructors />
  <description/>
  <example />
  <mixins />
  <methods />
  <properties />
        <references />
  <remarks/>
</class>
```

Child of: [#javascript](#javascript)

Parent of: [#aliases](#aliases), [#availability](#availability), [#browsers](#browsers), [#constructors](#constructors), [#deprecated](#deprecated), [#description](#description), [#example](#example), [#interfaces](#interfaces), [#methods](#methods), [#mixins](#mixins), [#properties](#properties), [#references](#references), [#remarks](#remarks)

**Attributes and values**

* type - JavaScript type or object type of the class (e.g. Boolean, Document, etc.)

* superclass - Superclass that the class belongs to. Separate multiple superclasses with a space

* visibility - If internal only, specify "internal", otherwise, leave blank.

**Description**

The `class` element is the container node for a JavaScript class.

**Example**

```xml
<class type="TypeError" superclass="Error">
  <description>A TypeError is thrown when a value is a different type than what was expected.</description>
  <browsers>
    <browser platform="IE" version="5.0+"/>
    <browser platform="Mozilla" version="1.0+"/>
    <browser platform="Netscape" version="6.0+"/>
  </browsers>
  <constructors>
    <constructor scope="instance">
      <description>Creates a new instance of TypeError.</description>
      <parameters>
        <parameter name="message" type="String" usage="optional">
          <description>Error message that provides information about the exception.</description>
        </parameter>
      </parameters>
      <return-types>
        <return-type type="TypeError"/>
      </return-types>
    </constructor>
  </constructors>
  <properties>
    <property name="message" type="String" scope="instance" access="read-write">
      <availability>
        <specification name="JavaScript 1.5"/>
        <specification name="JScript 5.5"/>
        <specification name="ECMAScript v3"/>
      </availability>
      <references>
        <reference name="Error.message"/>
      </references>
      <description>An error message associated with the TypeError.</description>
      <browsers>
        <browser platform="IE" version="5.0+"/>
        <browser platform="Mozilla" version="1.0+"/>
        <browser platform="Netscape" version="6.0+"/>
      </browsers>
    </property>
    <property name="name" type="String" scope="instance" access="read-write">
      <availability>
        <specification name="JavaScript 1.5"/>
        <specification name="JScript 5.5"/>
        <specification name="ECMAScript v3"/>
      </availability>
      <description>Specifies the type of exception.</description>
      <browsers>
        <browser platform="IE" version="5.0+"/>
        <browser platform="Mozilla" version="1.0+"/>
        <browser platform="Netscape" version="6.0+"/>
      </browsers>
    </property>
  </properties>
  <methods/>
  <references>
    <reference name="Error"/>
    <reference name="Error.message"/>
    <reference name="Error.name"/>
  </references>
  <availability>
    <specification name="JavaScript 1.5"/>
    <specification name="JScript 5.5"/>
    <specification name="ECMAScript v3"/>
  </availability>
  <remarks>A TypeError is most commonly thrown when you try to access a value that is unexpectedly null or undefined.</remarks>
</class>
```

### constructor

Holds constructor information for a class.

In JS, functions can serve as standard functions and they can be used to construct new object instances. Typically, when defining types in SDOCML files, the instances cannot be constructed directly. However, there are occasions where a constructor method for a type is needed. That's where the constructor element steps in.

When a constructor element is encountered, a new global property matching the type name is created. It's return type is setup to`Function<type>` where "type" is the name of the type where the constructor element is defined.

**Syntax**

```xml
<constructors>
  <constructor scope="instance | static">
    <description>Constructor description.</description>
    <parameters>
      <parameter name="parameterName" type="parameterType" usage="optional | required">
        <description>Parameter description.</description>
      </parameter>
    </parameters>
    <return-types>
      <return-type type="returnType"/>
    </return-types>
  </constructor>
</constructors>
```

Child of: [#constructors](#constructors)

Parent of: [#availability](#availability), [#browsers](#browsers), [#description](#description), [#example](#example), [#exceptions](#exceptions), [#parameters](#parameters), [#references](#references), [#return-description](#return-description), [#return-types](#return-types), [#remarks](#remarks)

**Attributes and values**

* scope - Instance or static.

* visibility - If internal only, specify "internal". Otherwise, leave blank. (Optional.)

**Description**

The `constructors` element holds the `constructor` node(s) for a class.

**Example**

```xml
<constructors>
  <constructor scope="instance">
    <description>Creates a new instance of URIError.</description>
    <parameters>
      <parameter name="message" type="String" usage="optional">
        <description>Error message that provides information about the exception.</description>
      </parameter>
    </parameters>
    <return-types>
      <return-type type="URIError"/>
    </return-types>
  </constructor>
</constructors>
```

### constructors

Container node that holds `constructor` node(s) for a class.

**Syntax**

```xml
<constructors>
  <constructor scope="instance | static">
    <description>Constructor description.</description>
    <parameters>
      <parameter name="parameterName" type="parameterType" usage="optional | required">
        <description>Parameter description.</description>
      </parameter>
    </parameters>
    <return-types>
      <return-type type="returnType"/>
    </return-types>
  </constructor>
</constructors>
```

Child of: [#class](#class)

Parent of: [#constructor](#constructor)

**Attributes and values**

No attributes or values.

**Description**

The `constructors` element holds the `constructor` node(s) for a class.

**Example**

```xml
<constructors>
  <constructor scope="instance">
    <description>Creates a new instance of URIError.</description>
    <parameters>
      <parameter name="message" type="String" usage="optional">
        <description>Error message that provides information about the exception.</description>
      </parameter>
    </parameters>
    <return-types>
      <return-type type="URIError"/>
    </return-types>
  </constructor>
</constructors>
```

### deprecated

If present, indicates that a class, constructor, method, or property is deprecated.

**Syntax**

```xml
<deprecated>Deprecated in favor of newClass | newConstructor | newProperty | newMethod.</deprecated>
```

Child of: [#class](#class), [#constructor](#constructor), [#method](#method), [#property](#property)

No children.

**Attributes and values**

No attributes or values.

**Description**

If present, the `deprecated` element indicates that a class, constructor, method, or property has been deprecated. The node text describes the replacement class, constructor, method, or property.

**Example**

```xml
<deprecated>Font attributes are deprecated in favor of CSS styling.</deprecated>
```

### description

Contains the text description of a browser support node, class, constructor, method, parameter, or property.

**Syntax**

```xml
<description>Text description.</description>
```

Child of: [#browser](#browser), [#class](#class), [#constructor](#constructor), [#method](#method), [#parameter](#parameter), [#property](#property)

No children.

**Attributes and values**

No attributes or values.

**Description**

Contains the text description of a browser support node, class, constructor, method, parameter, or property. For browser support, the description contains notes and caveats about the browser support for a class, constructor, method or property.

**Example**

```xml
<parameter name="length" type="Number" usage="required">
     <description>The number of characters to extract.</description>
</parameter>
```

### example

Contains an example of how to use a class, constructor, method, or property.

**Syntax**

```xml
<example>Code example and explanation.</example>
```

Child of: [#class](#class), [#constructor](#constructor), [#method](#method), [#property](#property)

No children.

**Attributes and values**

No attributes or values.

**Description**

Contains the text description of a code sample. Also contains the code sample itself. Because examples are rendered as HTML, actual code formatting should use HTML entities and escape characters so that they display properly.

**Example**

```xml
<example>
<h3>Example: Examining the source code of an array</h3>
<p>To examine the source code of an array:</p>
<pre>alpha = new Array("a", "b", "c")
alpha.toSource() //returns ["a", "b", "c"]</pre>
</example>
```

### exception

Contains exception information for a method.

**Syntax**

```xml
<exceptions>
     <exception type="errorType">
          <description>Text description of the exception.</description>
     </exception>
</exceptions>
```

Child of: [#exceptions](#exceptions)

Parent of: [#description](#description)

**Attributes and values**

* type - Name of the error type (e.g. "DOMException")

**Description**

The `exception` element holds the error type and description information for an exception that can be thrown for a method.

**Example**

```xml
<exceptions>
    <exception type="TypeError">
        <description>Throws TypeError if toLocaleString is called on an object that is not an array.</description>
     </exception>
</exceptions>
```

### exceptions

Container node for the exception(s) for a method.

**Syntax**

```xml
<exceptions>
     <exception type="errorType">
          <description>Text description of the exception.</description>
     </exception>
</exceptions>
```

Child of: [#method](#method)

Parent of: [#exception](#exception)

**Attributes and values**

* type - Name of the error type (e.g. "DOMException")

**Description**

The `exceptions` element is a container node for the individual `exception` elements for a method.

**Example**

```xml
<exceptions>
    <exception type="TypeError">
        <description>Throws TypeError if toLocaleString is called on an object that is not an array.</description>
     </exception>
</exceptions>
```

### interface

Contains interface information for a class.

**Syntax**

```xml
<interfaces>
     <interface type="interfaceType" />
</interfaces>
```

Child of: [#interfaces](#interfaces)

No children

**Attributes and values**

* type - Name of interface type

**Description**

Contains interface information for a class. Used primarily for global classes.

**Example**

```xml
<interfaces>
  <interface type="Global"/>
</interfaces>
```

### interfaces

Container node for the `interface` node for a class.

**Syntax**

```xml
<interfaces>
     <interface type="interfaceType" />
</interfaces>
```

Child of: [#class](#class)

Parent of: [#interface](#interface)

**Attributes and values**

No attributes and values.

**Description**

Contains the `interface` node for a class. Used primarily for global classes.

**Example**

```xml
<interfaces>
  <interface type="Global"/>
</interfaces>
```

### javascript

Overall parent node to all of the individual class nodes of the JavaScript metadata.

**Syntax**

```xml
<javascript>
     <class type="class1" superclass="superClass1" />
     <class type="class2" superclass="superClass2" />
</javascript>
```

No parent.

Parent of: [#class](#class)

**Attributes and values**

No attributes and values.

**Description**

Overall parent node to all of the individual class nodes of the JavaScript metadata.

**Example**

```xml
<javascript>
     <class type="Arguments" superclass="Object" />
     <class type="Array" superclass="Object" />
</javascript>
```

### method

Contains information about a class method.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
        <description>
          Text description of method.
        </description>
    <browsers>
      <browser platform="platform1" version="versionNumber"/>
      <browser platform="platform2" version="versionNumber"/>
    </browsers>
        <return-description>Text description of return type.</return-description>
        <parameters>
          <parameter name="paramName" type="paramType" usage="required | optional | one-or-more">
            <description>Text description of parameter.</description>
          </parameter>
        </parameters>
        <exceptions/>
        <return-types>
          <return-type type="returnType"/>
        </return-types>
        <availability>
          <specification name="specificationName1"/>
          <specification name="specificationName2" />
        </availability>
        <example>
          Text description of code sample and code sample.
        </example>
        <remarks>
          Text description with more information about the method.
        </remarks>
      </method>
</methods>
```

Child of: [#methods](#methods)

Parent of: [#availability](#availability), [#browsers](#browsers), [#deprecated](#deprecated), [#description](#description), [#example](#example), [#exceptions](#exceptions), [#parameters](#parameters), [#references](#references), [#remarks](#remarks), [#return-description](#return-description), [#return-types](#return-types)

**Attributes and values**

* name - Name of the method

* scope - instance or static

**Description**

The `method` element holds the description of a method.

**Example**

```javascript
<methods>
      <method name="concat" scope="instance">
        <description>
          Returns a new array comprised of this array joined
          with other array(s) and/or value(s).
        </description>
    <browsers>
      <browser platform="IE" version="4.0+"/>
      <browser platform="Mozilla" version="1.0+"/>
      <browser platform="Netscape" version="4.0+"/>
      <browser platform="Opera" version="7.0+" />
      <browser platform="Safari" version="1.0+" />
    </browsers>
        <return-description>Returns a new array comprised of this array joined with other array(s) and/or value(s).</return-description>
        <parameters>
          <parameter name="valueN" type="Number" usage="one-or-more">
            <description>Arrays and/or values to concatenate to this array.</description>
          </parameter>
        </parameters>
        <exceptions/>
        <references>
          <reference name="Array.join"/>
          <reference name="Array.push"/>
          <reference name="Array.splice"/>
        </references>
        <return-types>
          <return-type type="Array"/>
        </return-types>
        <availability>
          <specification name="JavaScript 1.2"/>
          <specification name="JScript 3.0"/>
          <specification name="ECMAScript v3"/>
        </availability>
        <example>
          <h3>Concatenating two arrays</h3>
      <p>The following code concatenates two arrays:</p>
      <pre>alpha = new Array("a", "b", "c");</pre>
        </example>
        <remarks>
          <p><code>concat</code> does not alter the original
          arrays, but returns a "one level deep" copy that contains
          copies of the same elements combined from the original
          arrays.</p>
        </remarks>
      </method>
      <method name="every" scope="instance" visibility="">
  <parameters>
    <parameter name="callback" type="Function" usage="required">
      <description>Function that tests each element of an array.</description>
    </parameter>
    <parameter name="thisObject" type="Function" usage="zero-or-more">
      <description>Object to use as this when executing callback.</description>
    </parameter>
  </parameters>
  <return-types>
    <return-type type="Boolean"/>
  </return-types>
  <availability>
    <specification name="JavaScript 1.5"/>
    <specification name="Gecko 1.8b2"/>
  </availability>
  <example><h3>Example: Testing size of all array elements </h3>
<p>The following example tests whether all elements in the array are bigger than 10.</p></example>
  <remarks><p><code>every</code> executes the provided function (<code>callback</code>) once for each element present in the array until it finds one where <code>callback</code> returns a false value.</remarks>
  <description>Returns true if every element in an array meets the specified criteria.</description>
  <browsers>
    <browser platform="Mozilla" version="1.0+"/>
    <browser platform="Netscape" version="3.0+"/>
  </browsers>
  <return-description>Returns true if every element in an array meets the specified criteria.</return-description>
  </method>
</methods>
```

### methods

Container node for the method node(s) of a class.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
         ...
      </method>
</methods>
```

Child of: [#class](#class)

Parent of: [#method](#method)

**Attributes and values**

No attributes or values.

**Description**

The `methods` element holds the individual `method` nodes for a class.

**Example**

```xml
<methods>
      <method name="concat" scope="instance">
         ...
      </method>
      <method name="every" scope="instance" visibility="">
         ...
      </method>
</methods>
```

### mixin

Contains information about the properties and methods "mixed-in" to the parent class.

**Syntax**

```xml
<mixins scope="instance">
      <method name="Class1" scope="static" />
      <mixin type="Class2" scope="static" />
</mixins>
<mixins scope="static">
      <method name="Class1" scope="static" />
      <mixin type="Class2" scope="static" />
</mixins>
```

Child of: [#mixins](#mixins)

Parent of: [#mixin](#mixin)

**Attributes and values**

* type -Type of the class

* scope - instance or static

**Description**

The `mixin` element indicates what properties and methods of a class will be "mixed-in". In the example below, the static methods and properties of Class1 and Class2 will be available as instance properties and methods on the parent class holding this mixins node. The case of `mixins scope="instance", mixin scope="instance"` is effectively regular inheritance, so while possible to specify using this interface, using the regular superclass attribute is preferred.

**Example**

```xml
<mixins scope="instance">
      <method name="Class1" scope="static" >
      <method name="Class2" scope="static" />
</mixins>
```

### mixins

Container node for the mixin node(s) of a class. There may be multiple "mixins" nodes. These nodes indicate what types of items to "mix-in" from the referenced classes

**Syntax**

```xml
<mixins scope="instance|static">
      <mixin type="ClassName1" scope="instance | static" />
</mixins>
```

Child of: [#class](#class)

Parent of: [#mixin](#mixin)

**Attributes and values**

No attributes or values.

**Description**

The `mixins` element holds the individual `mixin` nodes for a class.

**Example**

```xml
<mixins scope="instance">
      <method name="Class1" scope="static" />
      <mixin type="Class2" scope="static" />
</mixins>
<mixins scope="static">
      <method name="Class1" scope="static" />
      <mixin type="Class2" scope="static" />
</mixins>
```

### parameter

Holds parameter information for a method or constructor.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
        <description>
          Text description of method.
        </description>
        <return-description>Text description of return type.</return-description>
        <parameters>
          <parameter name="paramName" type="paramType" usage="required | optional | one-or-more">
            <description>Text description of parameter.</description>
          </parameter>
        </parameters>
        <exceptions/>
        <return-types>
          <return-type type="returnType"/>
        </return-types>
        <example>
          Text description of code sample and code sample.
        </example>
        <remarks>
          Text description with more information about the method.
        </remarks>
      </method>
</methods>
```

Child of: [#parameters](#parameters)

Parent of: [#description](#description), [#values](#values)

**Attributes and values**

* name - Name of the parameter.

* type - JavaScript type of the parameter (e.g. Object).

* usage - Whether the parameter is "required", "optional", or can take "one-or-more" values.

**Description**

The `parameter` element holds information about a parameter for a method.

**Example**

```javascript
<methods>
      <method name="concat" scope="instance">
        <description>
          Returns a new array comprised of this array joined
          with other array(s) and/or value(s).
        </description>
    <browsers>
      <browser platform="IE" version="4.0+"/>
      <browser platform="Mozilla" version="1.0+"/>
      <browser platform="Netscape" version="4.0+"/>
      <browser platform="Opera" version="7.0+" />
      <browser platform="Safari" version="1.0+" />
    </browsers>
        <return-description>Returns a new array comprised of this array joined with other array(s) and/or value(s).</return-description>
        <parameters>
          <parameter name="valueN" type="Number" usage="one-or-more">
            <description>Arrays and/or values to concatenate to this array.</description>
          </parameter>
        </parameters>
        <exceptions/>
        <references>
          <reference name="Array.join"/>
          <reference name="Array.push"/>
          <reference name="Array.splice"/>
        </references>
        <return-types>
          <return-type type="Array"/>
        </return-types>
        <availability>
          <specification name="JavaScript 1.2"/>
          <specification name="JScript 3.0"/>
          <specification name="ECMAScript v3"/>
        </availability>
        <example>
          <h3>Concatenating two arrays</h3><p>The following code concatenates two arrays:</p>
      <pre>alpha = new Array("a", "b", "c");</pre>
        </example>
        <remarks>
          <p><code>concat</code> does not alter the original
          arrays, but returns a "one level deep" copy that contains
          copies of the same elements combined from the original
          arrays.
        </remarks>
      </method>
      <method name="every" scope="instance" visibility="">
  <parameters>
    <parameter name="callback" type="Function" usage="required">
      <description>Function that tests each element of an array.</description>
    </parameter>
    <parameter name="thisObject" type="Function" usage="zero-or-more">
      <description>Object to use as this when executing callback.</description>
    </parameter>
  </parameters>
  <return-types>
    <return-type type="Boolean"/>
  </return-types>
  <availability>
    <specification name="JavaScript 1.5"/>
    <specification name="Gecko 1.8b2"/>
  </availability>
  <example><h3>Example: Testing size of all array elements </h3>
<p>The following example tests whether all elements in the array are bigger than 10.</p></example>
  <remarks><p><code>every</code> executes the provided function (<code>callback</code>) once for each element present in the array until it finds one where <code>callback</code> returns a false value.</remarks>
  <description>Returns true if every element in an array meets the specified criteria.</description>
  <browsers>
    <browser platform="Mozilla" version="1.0+"/>
    <browser platform="Netscape" version="3.0+"/>
  </browsers>
  <return-description>Returns true if every element in an array meets the specified criteria.</return-description>
  </method>
</methods>
```

### parameters

Container node for the individual parameter element(s) for a method.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
        <description>
          Text description of method.
        </description>
        <return-description>Text description of return type.</return-description>
        <parameters>
          <parameter name="paramName" type="paramType" usage="required | optional | one-or-more">
            <description>Text description of parameter.</description>
          </parameter>
        </parameters>
        <exceptions/>
        <return-types>
          <return-type type="returnType"/>
        </return-types>
        <example>
          Text description of code sample and code sample.
        </example>
        <remarks>
          Text description with more information about the method.
        </remarks>
      </method>
</methods>
```

Child of: [#method](#method)

Parent of: [#parameter](#parameter)

**Attributes and values**

No attributes or values.

**Description**

The `parameters` element is a container for the individual parameter(s) for a method.

**Example**

```javascript
<methods>
      <method name="concat" scope="instance">
        <description>
          Returns a new array comprised of this array joined
          with other array(s) and/or value(s).
        </description>
    <browsers>
      <browser platform="IE" version="4.0+"/>
      <browser platform="Mozilla" version="1.0+"/>
      <browser platform="Netscape" version="4.0+"/>
      <browser platform="Opera" version="7.0+" />
      <browser platform="Safari" version="1.0+" />
    </browsers>
        <return-description>Returns a new array comprised of this array joined with other array(s) and/or value(s).</return-description>
        <parameters>
          <parameter name="valueN" type="Number" usage="one-or-more">
            <description>Arrays and/or values to concatenate to this array.</description>
          </parameter>
        </parameters>
        <exceptions/>
        <references>
          <reference name="Array.join"/>
          <reference name="Array.push"/>
          <reference name="Array.splice"/>
        </references>
        <return-types>
          <return-type type="Array"/>
        </return-types>
        <availability>
          <specification name="JavaScript 1.2"/>
          <specification name="JScript 3.0"/>
          <specification name="ECMAScript v3"/>
        </availability>
        <example>
          <h3>Concatenating two arrays</h3><p>The following code concatenates two arrays:</p>
      <pre>alpha = new Array("a", "b", "c");</pre>
        </example>
        <remarks>
          <p><code>concat</code> does not alter the original
          arrays, but returns a "one level deep" copy that contains
          copies of the same elements combined from the original
          arrays.
        </remarks>
      </method>
      <method name="every" scope="instance" visibility="">
  <parameters>
    <parameter name="callback" type="Function" usage="required">
      <description>Function that tests each element of an array.</description>
    </parameter>
    <parameter name="thisObject" type="Function" usage="zero-or-more">
      <description>Object to use as this when executing callback.</description>
    </parameter>
  </parameters>
  <return-types>
    <return-type type="Boolean"/>
  </return-types>
  <availability>
    <specification name="JavaScript 1.5"/>
    <specification name="Gecko 1.8b2"/>
  </availability>
  <example><h3>Example: Testing size of all array elements </h3>
<p>The following example tests whether all elements in the array are bigger than 10.</p></example>
  <remarks><p><code>every</code> executes the provided function (<code>callback</code>) once for each element present in the array until it finds one where <code>callback</code> returns a false value.</remarks>
  <description>Returns true if every element in an array meets the specified criteria.</description>
  <browsers>
    <browser platform="Mozilla" version="1.0+"/>
    <browser platform="Netscape" version="3.0+"/>
  </browsers>
  <return-description>Returns true if every element in an array meets the specified criteria.</return-description>
  </method>
</methods>
```

### properties

Container node for the individual properties for a class.

**Syntax**

```xml
<properties>
      <property name="propertyName" type="propertyType" scope="instance | static" access="read | read-write">
    <browsers>
      <browser platform="browserName1" version="browserVersion"/>
      <browser platform="browserName2" version="browserVersion"/>
    </browsers>
    <availability>
      <specification name="specificationName"/>
    </availability>
    <remarks>Text information about property.</remarks>
    <description>Text description of property.</description>
  </property>
</properties>
```

Child of: [#class](#class)

Parent of: [#property](#property)

**Attributes and values**

No attributes or values.

**Description**

Container node for the individual properties for a class.

**Example**

```xml
<properties>
      <property name="index" type="Number" scope="instance" access="read-write">
      <browsers>
        <browser platform="Mozilla" version="1.0+"/>
        <browser platform="Netscape" version="3.0+"/>
        <browser platform="Opera" version="7.0+" />
      </browsers>
      <availability>
        <specification name="JavaScript 1.2"/>
      </availability>
      <remarks>Only applicable to an array created by a RegExp match.</remarks>
      <description>Zero-based index number for the corresponding string in a RegExp match.</description>
    </property>
</properties>
```

### property

Container node for the individual properties for a class.

**Syntax**

```xml
<properties>
      <property name="propertyName" type="propertyType" scope="instance | static" access="read | read-write">
    <browsers>
      <browser platform="browserName1" version="browserVersion"/>
      <browser platform="browserName2" version="browserVersion"/>
    </browsers>
    <availability>
      <specification name="specificationName"/>
    </availability>
    <remarks>Text information about property.</remarks>
    <description>Text description of property.</description>
  </property>
</properties>
```

Child of: [#properties](#properties)

Parent of: [#availability](#availability), [#browsers](#browsers), [#deprecated](#deprecated), [#description](#description), [#example](#example), [#remarks](#remarks)

**Attributes and values**

* name - Property name.

* type - JavaScript type (e.g. Object).

* scope - static or instance.

* access - read or read-write.

* visibility - internal or blank.

**Description**
Contains the information for an individual property for a class.

**Example**

```xml
<properties>
      <property name="index" type="Number" scope="instance" access="read-write">
      <browsers>
        <browser platform="Mozilla" version="1.0+"/>
        <browser platform="Netscape" version="3.0+"/>
        <browser platform="Opera" version="7.0+" />
      </browsers>
      <availability>
        <specification name="JavaScript 1.2"/>
      </availability>
      <remarks>Only applicable to an array created by a RegExp match.</remarks>
      <description>Zero-based index number for the corresponding string in a RegExp match.</description>
    </property>
</properties>
```

### reference

Holds a reference to another class, property, or method.

**Syntax**

```xml
<references>
  <reference name="referenceName"/>
</references>
```

Child of: [#references](#references)

No children.

**Attributes and values**

* name - Name of the reference.

**Description**

Reference to a related class, property, or method.

**Example**

```xml
<references>
  <reference name="Object.constructor"/>
</references>
```

### references

Container node for reference(s) for a class, property, or method.

**Syntax**

```xml
<references>
  <reference name="referenceName"/>
</references>
```

Child of: [#class](#class), [#property](#property), [#method](#method)

Parent of: [#reference](#reference)

**Attributes and values**

No attributes or values.

**Description**

Container node for reference(s) for a class, property, or method. In the online Help, creates an automatic link to the reference.

**Example**

```xml
<references>
  <reference name="Object.constructor"/>
</references>
```

### remarks

Contains text remarks about a class, constructor, method or property.

**Syntax**

```xml
<remarks>
  Text remarks.
</remarks>
```

Child of: [#class](#class), [#constructor](#constructor), [#method](#method), [#property](#property)

No children.

**Attributes and values**

No attributes or values.
**Description**

Contains text remarks about a class, constructor, method, or property. Remarks are generally longer and give additional information to the sibling `description` node. Remarks are rendered in HTML and can contain HTML entities and escape characters for formatting.

**Example**

```xml
<remarks>
          <p>The value of the <code>length</code> property is an
          integer with a positive sign and a value less than 2 to
          the 32 power (2<sup>32</sup>).</p><p>You can set the <code>length</code> property to
          truncate an array at any time. When you extend an array
          by changing its <code>length</code> property, the number
          of actual elements does not increase; for example, if you
          set <code>length</code> to 3 when it is currently 2, the
          array still contains only 2 elements.</p>
</remarks>
```

### return-description

Contains a text description of the return type for a method.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
        ...
        <return-description>Text description of return type.</return-description>
        ...
      </method>
</methods>
```

Child of: [#method](#method)

No children.

**Attributes and values**

No attributes or values.

**Description**

Contains a text description of the return type for a method.

**Example**

```xml
<methods>
      <method name="concat" scope="instance">
        ...
        <return-description>Returns a new array comprised of this array joined with other array(s) and/or value(s).</return-description>
      </method>
      <method name="every" scope="instance" visibility="">
        ...
  <return-description>Returns true if every element in an array meets the specified criteria.</return-description>
  ...
      </method>
</methods>
```

### return-type

Contains the JavaScript return type for a method.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
        ...
        <return-types>
          <return-type type="returnType"/>
        </return-types>
        ...
      </method>
</methods>
```

Child of: [#return-types](#return-types)

No children.

**Attributes and values**

* type - JavaScript type returned by the method.

**Description**

Contains the JavaScript return type for a method.

**Example**

```xml
<methods>
      <method name="concat" scope="instance">
        ...
        <return-types>
          <return-type type="Array"/>
        </return-types>
        ...
      </method>
      <method name="every" scope="instance" visibility="">
        ...
  <return-types>
    <return-type type="Boolean"/>
  </return-types>
        ...
  </method>
</methods>
```

### return-types

Container node for the return-type node(s) for a method.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
        ...
        <return-types>
          <return-type type="returnType"/>
        </return-types>
        ...
      </method>
</methods>
```

Child of: [#method](#method)

Parent of: [#return-type](#return-type)

**Attributes and values**

No attributes or values.

**Description**

Container node for the return-type node(s) for a method. A JavaScript method may have more than one return type.

**Example**

```xml
<methods>
      <method name="concat" scope="instance">
        ...
        <return-types>
          <return-type type="Array"/>
        </return-types>
        ...
      </method>
      <method name="every" scope="instance" visibility="">
        ...
  <return-types>
    <return-type type="Boolean"/>
  </return-types>
        ...
      </method>
</methods>
```

### specification

The specifications (e.g. ECMAScript version) that apply to a class, constructor, method, or property.

**Syntax**

```xml
<availability>
  <specification name="name1" />
</availability>
```

Child of: [#specification](#specification)

No children.

**Attributes and values**

* name - Name of the specification

* version - Version of the specification (optional)

**Description**

The `specification` element(s) lists the specifications (e.g. JavaScript version, JScript version and/or ECMAScript version) that apply to a class, constructor, method, or property.

In the DOM, CSS, HTML metadata, the `availability` and `specification` nodes hold information about the W3C specification for an element or object.

**Example**

```xml
<availability>
  <specification name="JavaScript 1.1"/>
  <specification name="JScript 2.0"/>
  <specification name="ECMAScript v1"/>
</availability>
```

### type-map

An element that specifies the mapping of one type to another.

**Syntax**

```xml
<type-maps>
      <type-map sourceType="jQuery" destinationType="Function<jQuery>"/>
</type-maps>
```

Child of: [#type-maps](#type-maps)

Parent of: none

**Attributes and values**

* sourceType - The name of the type to map to the destination type

* destinationType - The new type value to use when replacing the source type

### type-maps

A container for all type-map elements.

**Syntax**

```xml
<type-maps>
      <type-map sourceType="jQuery" destinationType="Function<jQuery>"/>
</type-maps>
```

Child of: [#javascript](#javascript)

Parent of: [#type-map](#type-map)

**Attributes and values**

No attributes or values.

### value

Contains a possible value for a parameter to a method.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
        ...
        <parameters>
          <parameter name="paramName" type="paramType" usage="required | optional | one-or-more">
            <description>Text description of parameter.</description>
            <values>
              <value name="valueName1" description="valueDescription1" />
              <value name="valueName2" description="valueDescription2" />
            </values>
          </parameter>
        </parameters>
        ...
      </method>
</methods>
```

Child of: [#parameter](#parameter)

No children.

**Attributes and values**

* name - Name of the attribute.

* description - Attribute description.

**Description**

Contains a valid value for an attribute for a parameter for a method.

**Example**

```xml
<parameters>
  <parameter name="code" type="Number" usage="required">
    <description>Code for the parameter.</description>
    <values>
      <value name="0" description="Boolean" />
            <value name="1" description="String" />
            <value name="2" description="Number" />
    </values>
  </parameter>
</parameters>
```

### values

Container node for the individual value nodes for a parameter.

**Syntax**

```xml
<methods>
      <method name="methodName1" scope="instance | static">
        ...
        <parameters>
          <parameter name="paramName" type="paramType" usage="required | optional | one-or-more">
            <description>Text description of parameter.</description>
            <values>
                  <value name="valueName1" description="valueDescription1" />
                  <value name="valueName2" description="valueDescription2" />
            </values>
          </parameter>
        </parameters>
        ...
      </method>
</methods>
```

Child of: [#parameter](#parameter)

Parent of: [#value](#value)

**Attributes and values**

No attributes or values.

**Description**

Container node for the individual value nodes for a parameter.

**Example**

```xml
<parameters>
  <parameter name="code" type="Number" usage="required">
    <description>Code for the parameter.</description>
    <values>
      <value name="0" description="Boolean" />
            <value name="1" description="String" />
            <value name="2" description="Number" />
    </values>
  </parameter>
</parameters>
```
