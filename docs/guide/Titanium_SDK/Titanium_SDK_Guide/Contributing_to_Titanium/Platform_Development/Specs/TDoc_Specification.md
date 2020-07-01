---
title: TDoc Specification
weight: '10'
---

# TDoc Specification

::: tip 💡 Hint
To see an example of this spec in use, check out the documentation for `Titanium.UI.View`.
:::

**Contents**

## Overview

Titanium Mobile needs a richer documentation specification, particularly to capture more metadata and make it available both to our SDK users who browse the online documentation and to other software such as Studio's content assist feature.

This document introduces a new SDK documentation specification based on YAML, which offers a well-structured yet still readable format.

Though the primary driver was a new Titanium **Mobile** SDK documentation format, the goal here is also to create a specification that can be applied to Titanium Desktop as well, in addition to Titanium modules that are external to the Mobile SDK and Desktop SDK code bases, including those created by third-party developers.

## Goals

The goals of the new documentation format are:

* Support rich metadata for all API members, including platform support, versioning, and deprecation information.

* Provide an inheritance mechanism for documentation.

* Allow documentation of object literals used as properties, method parameters, and in events and callbacks.

* Support documenting callback arguments.

* As much as possible, take advantage of standard libraries for parsing and formatting.

* Generate documentation as well as content assist files.

## Definitions

* TDoc - The file extension used for the previous API documentation files was "tdoc"; several such files (one per module or proxy). Because of this file extension, the documents themselves are often called simply "TDocs" in our "Titanium vernacular."

* Code Assist or Content Assist - The feature of Studio which provides pop-up help to help you complete your code statements.

* JSCA - "JSON for Studio Content Assist". JSCA files contain the JSON which feeds the content assist available to developers using Studio. The requirement to generate JSCA from the documentation is one of the drivers behind this spec.

* YAML - [YAML Ain't Markup Language](http://yaml.org). "YAML is a human-readable data serialization format" (Wikipedia).

## Proposed Documentation Specification

### YAML

The documentation shall be based on YAML. "Free-form text" property values in the YAML – such as method descriptions and code examples – will be parsed as _standard_ Markdown, however. The emphasis on _standard_ is made so as to indicate that non-standard "Appcelerator Markdown" will be avoided, meaning fenced code (~~~) is out. The goal here is that anyone can parse our documents.

#### Justification for choosing YAML

The choice of YAML could prove controversial, as YAML has its lovers and haters. Therefore we include this separate justification section just for YAML.

Many other projects don't need to make this choice of a separate "documentation language" because they can rely on their documentation being generated automatically via their code comments (Javadoc, etc.) The Titanium Mobile SDK has no single canonical code base because there are separate implementations for each platform. Therefore code comments cannot be relied upon for documentation.

##### Alternatives

XML, JSON, Markdown and YAML are common choices when external (outside-the-code) documentation is necessary. Let's look at these alternatives head-to-head with YAML:

* XML versus YAML: Even for someone who doesn't like YAML, this could probably be characterized as "which do you hate more/less". XML is quite unpopular these days as the busy-ness and clutter of opening and closing tags seems less necessary given other structured-data standards such as JSON and YAML.

* JSON versus YAML: JSON and YAML are fairly similar. In the arena of clutter, JSON was a huge improvement over XML, as-is YAML an improvement over JSON. YAML, for example, removes most of the curly braces and quotation marks that distract you while viewing JSON.

* Markdown versus YAML: "[Markdown](http://daringfireball.net/projects/markdown/) is a text-to-HTML conversion tool for web _writers_." We've italicized _writers_ here to emphasize the fact that Markdown is really meant for writing top-down articles (blog posts, free-form documentation pages, etc.) as opposed to structured documentation. It is, in fact, relatively parseable, as our existing TDoc specification has shown. However, the more you want to annotate it with structured data outside of the free-form text that it caters to, the more unwieldy it becomes. You start inventing ways to delimit parseable data, such as by surrounding certain pieces of text with square brackets or some other braces. We've been through this with the existing TDoc specification and we are not alone. When adding more and more annotations – as we wish to do with this new specification – it becomes difficult to choose how to mark up the annotations.

Our solution is to use the strengths of YAML – structured data representation – as our primary means of documentation, and to use Markdown's strength – easy text formatting – where it's applicable, namely in the "free form text" YAML properties such as a method's description or a code example.

##### Tool Support

\[Insert Your Favorite Programming Language\] has a YAML library with which our new TDocs will be instantly parseable.

Additionally, \[Insert Your Favorite Editor\] offers YAML enhancements either natively or with plugins. Admittedly, if your favorite editor is Windows Notepad or OS X's TextEdit, there probably is no enhancement available for YAML. But if you're using [Eclipse](http://www.google.com/search?q=eclipse+yaml), [Vim](http://www.google.com/search?q=vim+yaml) or another well-supported programmer's editor, you should have no problem finding enhancements for YAML. The fact is, however, that simple indentation support is all you need to effectively write YAML.

##### Significant Whitespace

This will be a concern to some: in YAML, [indentation is meaningful](http://www.yaml.org/spec/1.2/spec.html#id2777534), similar to Python, though the tab character is not allowed as indentation in YAML, so the tab-versus-spaces ambiguity that Python suffers from is not relevant in YAML.

Given that we are all capable of writing well-indented code, and given that most text editors will have enhancements for YAML, we do not believe YAML's whitespace rules should be a hinderance to its acceptance.

##### Precedent

There is precedent within the Titanium family for YAML: the Titanium Desktop SDK documentation is in YAML.

### Data Types

#### Simple Data Types

| Type | Notes |
| --- | --- |
| Boolean |  |
| Number | Open to discussion as to whether more specific numeric types – int, float, etc. – are needed. JSCA, for example, only supports Number |
| String |  |
| Date | Loosely defined here as a Javascript `Date` |

#### Compound Data Types

| Type | Notes |
| --- | --- |
| Object | Please don't misuse. We wish to emphasize the use of strong types. |
| Titanium.XX.XX | This is shorthand to signify the types that are defined within the documentation. In fact, they don't have to be the `Titanium.XX` namespace; any fully-qualified name defined within the set of documentation being parsed can be used as a type name. But since this specification will first be used for Titanium Mobile, `Titanium.XX` is used here as the example. |
| Dictionary<\[type\]> | A special type+syntax indicating a dictionary – i.e., an object literal – whose members can be the properties of the specified \[type\]. Example: `Dictionary<Titanium.UI.Window>`. You might use this if you provide your own documentation for a proxy-creation method such as `Titanium.UI.createWindow` rather than rely on the auto-generated documentation for proxy-creation methods. In that case, you would use `Dictionary<Titanium.UI.Window>` for the type of the single parameter that `createWindow` takes. |
| Callback<\[type\]> | A special type+syntax indicating a function used as a callback, whose single callback argument (the info passed to the callback) is of type \[type\], where \[type\] can be a type that you define elsewhere. We'll see examples of this in the special section on [callbacks](#documenting-callbacks). The angle bracket notation is optional: `Callback` by itself signifies simply a function that gets called, with no precise information concerning what is passed to it, if anything. |

#### Arrays

Arrays shall be specified as follows:

`Array<[type]>`

Examples:

`Array<Object>`
`Array<String>`
`Array<Titanium.UI.View>`

#### Pseudo-Types

Additionally, other "pseudo-types" (for lack of a better term) may be defined inside the documents as stand-ins for things like callback arguments, object literals that are passed as parameters, or objects that implement a particular interface. We'll see examples of this in the special sections on [callbacks](#documenting-callbacks) and [object literals and interfaces](#documenting-object-literals-and-interfaces).

### Inheritance

The specification supports what might be called "multiple documentation inheritance", whereby a Titanium type that is being documented (i.e., a proxy or module) has an `extends` property that can be set to a single qualified type name or an array of type names, thereby giving the child type all of the method, property and event documentation defined in the super types. Example:

```
---
name: Titanium.UI.Window
extends: Titanium.UI.View
```

The example indicates that `Titanium.UI.Window` shall inherit all of the method, property and event documentation of the `Titanium.UI.View` type.

If a type documentation includes methods, properties or events that are already defined in its super type(s), the child type's documentation will be used. To put it another way: the lowest-level, most specific documentation wins.

### Folders and Files

Each Titanium type being documented shall have its own file, which is identical to the existing TDoc standard.

The folder structure shall remain as it is in the existing TDoc standard, whereby each module gets its own folder. The folders shall be hierarchical, following the module namespaces. Example: Titanium.UI.Android documentation goes in `/Titanium/UI/Android/`. The module and its contained proxies shall be documented in files residing at the same folder level, just as today. Example: `/Titanium/UI/UI.yml` is a module documentation file, and `/Titanium/UI/Window.yml` is the Window proxy documentation file.

#### File Extension

The file extension for documentation files shall be `.yml`, replacing the previous `.tdoc` extension. `.yml` is standard for YAML files.

#### Three New Documentation Files: Proxy.yml, Module.yml and Event.yml

The existing TDoc generation script (docgen.py) puts in standard proxy and module methods, properties and events into proxy and module types at runtime. This will change such that the files `/Titanium/Proxy.yml` and `/Titanium/Module.yml` will be created and will contain documentation just like any other type. Other types can then extend the proxy and module documentation by referring to them as `Titanium.Proxy` and `Titanium.Module`.

Additionally, the existing script tacks on the standard `source` and `type` parameters to event objects. This will change such that the file `/Titanium/Event.yml` will exist and contain a simple type definition for those two properties.

#### Indentation Within Files

Indentation within the .yml files should be four characters. YAML does not allow the tab character for indentation, so the indentation must be four _space_ characters.

##### A Note About Indentation in Sequences

You will notice in our samples that we often use "[block sequences](http://www.yaml.org/spec/1.2/spec.html#id2759963)" for our API documentation. The "methods" collection here in this very simple example shows a block sequence:

```
methods:
  - name: myMethod
    description: My method.
  - name: yourMethod
    description: Your method
```

The dash that is used to indicate the start of a block sequence entry _is part of the indentation_. So whereas it may look like the example is using two levels of two-character indentation, it's in fact using one level of four-character indentation; it's just that part of the indentation – the dash – is meaningful.

### Documentation of Types

This section details the documentation of _types_, which are the highest-level documented artifacts. A type can be, for example, a Titanium module (`Titanium.UI`) or a Titanium proxy (`Titanium.UI.Window`).

Types shall be documented in their own files, just as they are in the current TDoc specification. This is not a YAML requirement, but rather a convention that shall be followed.

#### YAML Specification for Type Documentation

##### A Type Documentation is a YAML Document

Types shall be documented in a YAML "document". YAML marks the beginning of a document with "---" on a line. So that shall be the first line of the type documentation's .yml file, excepting any comment lines (lines beginning with `#`) which can and may be placed before it.

Throughout this document we will add to an example `.yml` file that adheres to our specification. The example will document the fictitious `Titanium.Do.Hicky` type. So far, we have the following:

**Hicky.yml**

```yml
# Documentation of Titanium.Do.Hicky
---
```

##### Valid Keys in the Documentation of a Type

These are the keys (i.e., YAML properties/members) which are valid in the documentation of a Type. The order of these keys is not relevant to YAML, however this a suggested order. By convention, the `name`, `description`, `platforms`, `extends` and `since` keys should be defined first (i.e., appear at the top of the document).

| Key | Notes | Example |
| --- | --- | --- |
| name | A fully-qualified name for the type | `name: Titanium.Do.Hicky` |
| summary | A short, "one-liner" summary of the type, in Markdown format. Keep it short, as it will often be generated next to the type name in lists, for example. Deeper information about the type should go into the `description` property. **Please start summaries with a capital letter and end with a period.** | `summary: View which automatically renders as an octagon.` |
| description | (**Optional**) Free-form , longer format text description of the Type, in Markdown format, or "file:" followed by the name of a file which contains the description. If an external file is used, the contents should be in Markdown format and the file extension should be `.md`. | See [#Free-Form Text Values](#free-form-text-values) below. |
| createable | (**Optional**) Applicable only to "proxy" types (types having `Titanium.Proxy` as an ancestor). This indicates whether a standard `createXXXX` method is supported to create an instance of the proxy from the module in which it is located. The default is `true` since almost all proxies can be created in that way. | `createable: false` |
| platforms | (**Optional**) Array of supported platforms. If missing, it is to be assumed that all platforms are supported. Note that `ipad` is its own platform. As the example shows, a simple YAML array syntax is to enclose a comma-separated list in square brackets. | `platforms: [android, iphone, ipad]` |
| extends | (**Optional**). Either a single fully-qualified type name, or an array of fully-qualified type names from which the documented Type inherits. | `extends: Titanium.UI.View` |
| excludes | (**Optional**). For excluding inherited methods, properties or events. Can have one or more of these members: `methods`, `properties`, `events`. Each of those is an array of strings indicating which methods (or properties, or events) to exclude. | `excludes: {methods: [add, remove], events: [click]`} |
| since | Indicates in which Titanium version the Type first appeared. Either a single value if the Type appeared at the same time on all platforms, or a dictionary object with keys per platform and values containing the relevant version number. NOTE: YAML will interpret values such as `0.8` as numbers, which can lead to parser libraries ending up with values such as `0.800000000001` because of floating points. Enclose version numbers in full-quotations so as to avoid this. | `since: "0.8"` or `since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.2"`} |
| deprecated | (**Optional**) A simple dictionary object with keys `since`, `removed` and `notes`. `since` and `removed` values should hold Titanium version numbers indicating since when the type was deprecated and when (if ever) it will be removed. `since` should always be present. `removed` is optional. `notes`, which is also optional, can hold free-form text and should especially emphasize which alternative type to use in place of the deprecated type, if any. | `deprecated: {since: "1.6.0", removed: "1.8.0", notes: "Use <Titanium.Do.Hicky2> instead"`} |
| osver | (**Optional**). Can be used to specify operating system version number requirements for the given type. This should be a dictionary with keys for each OS whose version needs to be specified (ios/android). The key values should then also be dictionaries with the keys `min`, `max` and/or `versions`, each of which is optional. `min` and `max` should have stringified version numbers, whereas `versions`, if present, should be an array of stringified version numbers. | `osver: {android: {min: "2.1"`}} or `osver: {ios: {max: "3.2"`}} or `osver: {android: {versions: ["1.6", "2.1"]`}} |
| examples | (**Optional**). An array of objects wherein each element has `title` and `example` properties. The `title` property should briefly describe the particular example. The `example` property should be a free-form text block in Markdown format for showing code examples, or "file:" followed by the name of a file which contains the code examples. If an external file is used, the contents should be in Markdown format and the file extension should be `.md`. In the text block or external file, the blocks of code themselves should be indented four spaces to follow the Markdown standard and guarantee that generated HTML will include <pre> and <code> tags. So-called "fenced code blocks" (~~~) are not supported, as they are non-standard and not all Markdown parsers support them. | See [#Code Examples](#code-examples) below. |
| methods | (**Optional**). An array of method definitions describing the type's methods. | See [#Method Specification](#method-specification) below. |
| properties | (**Optional**). An array of property definitions describing the type's methods. | See [#Property Specification](#property-specification) below. |
| events | (**Optional**). An array of event definitions describing the type's events. | See [#Event Specification](#event-specification) below. |

Our running example so far:

**Hicky.yml**

```yml
# Documentation of Titanium.Do.Hicky
---
name: Titanium.Do.Hicky
summary: A view which automatically renders as an octagon.
platforms: [android, ipad, iphone]
extends: Titanium.UI.View
since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.0"}
# We could also just do this if all platforms got the type at the same time:
# since: "0.8"

description: It's important *not* to use this view on a scrollview!  Behavior there is undefined!
# We could also have specified that the description is in an external file, like this:
# description: file:Hicky_description.md

examples:
  - title: Put a Hicky on a Window
    example:
        The following example shows putting a Hicky directly on a window:

            var win = Ti.UI.createWindow({backgroundColor: '#ccc'});
            win.add(Ti.Do.createHicky());

# In following sections we'll show ...
# methods: ...
# properties: ...
# events: ...
```

##### Method Specification

As noted above, the type documentation includes a `methods` key, which is described as an array of method documentation definitions. This section describes the method documentation specification, then shows an example of putting multiple method documentation definitions together to form a YAML array (more accurately a [Sequence of Mappings](http://www.yaml.org/spec/1.2/spec.html#id2760193)).

A single method documentation definition may contain the following keys:

| Key | Notes | Examples |
| --- | --- | --- |
| name | The method name. | `name: doSomething` |
| summary | A short, "one-liner" summary of the method, in Markdown format. Keep it short, as it will often be generated next to the method name in lists, for example. Deeper information about the method should go into the `description` property. **Please start summaries with a capital letter and end with a period.** | `summary: Does something on the view.` |
| description | (**Optional**) Free-form , longer format text description of the method, in Markdown format, or "file:" followed by the name of a file which contains the description. If an external file is used, the contents should be in Markdown format and the file extension should be `.md`. | See [#Free-Form Text Values](#free-form-text-values) below. |
| returns | (**Optional**). A dictionary object with `type` and `description` keys and their values. The `description` key is optional. The `type` key's value should be a [type identifier](#data-types). If it is possible for the method to return different types, set this to an array of these dictionaries. This key is **optional** in the sense that if it is missing, then it is assumed that there is no return value. There is no need to specify `void` return types. | `returns: {type: "String", description: "The system's locale"`} or, in the case of multiple possible return types, `returns: [{type: "String", description: "The system's locale"}, {type: "Object", description: "A locale object"}]`. |
| platforms | (**Optional**). Identical to the `platforms` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but applied here to a method. This is **optional**. If missing it is assume that the value would be the same as the type's `platforms` value. | `platforms: [android, iphone, ipad]` |
| since | (**Optional**). Identical to the `since` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but applied here to a method. This is **optional**. If missing, it is assumed that the value would be the same as the type's `since` value. | `since: "0.8"` or `since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.2"`} |
| deprecated | (**Optional**) A simple dictionary object with keys `since`, `removed` and `notes`. `since` and `removed` values should hold Titanium version numbers indicating since when the method was deprecated and when (if ever) it will be removed. `since` should always be present. `removed` is optional. `notes`, which is also optional, can hold free-form text and should especially emphasize which alternative method to use in place of the deprecated method, if any. | `deprecated: {since: "1.6.0", removed: "1.8.0", notes: "Use <Titanium.Do.Hicky.doThat> instead."`} |
| osver | (**Optional**). Can be used to specify operating system version number requirements for the given method. This should be a dictionary with keys for each OS whose version needs to be specified (ios/android). The key values should then also be dictionaries with the keys `min`, `max` and/or `versions`, each of which is optional. `min` and `max` should have stringified version numbers, whereas `versions`, if present, should be an array of stringified version numbers. | `osver: {android: {min: "2.1"`}} or `osver: {ios: {max: "3.2"`}} or `osver: {android: {versions: ["1.6", "2.1"]`}} |
| examples | (**Optional**). Identical to the `examples` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but in this case to show examples specifically for the method. | See [#Code Examples](#code-examples) below. |
| parameters | (**Optional**). An array of parameter definitions documenting the method parameters. | See [#Method Parameter Specification](#MethodParameterSpecification) below. |

###### Method Parameter Specification

A method may, of course, have zero or more parameters. This section is the specification for a method parameter documentation definition.

The valid keys are:

| Key | Notes | Examples |
| --- | --- | --- |
| name | The parameter name. | `name: x` |
| summary | A short, "one-liner" summary of the parameter, in Markdown format. Keep it short, as it will often be generated next to the parameter name in lists, for example. Deeper information about the parameter should go into the `description` property. **Please start summaries with a capital letter and end with a period.** | `summary: type of thing.` |
| type | A data type specifier indicating the type of the parameter, or an array of data type specifiers in case multiple types are allowed for the parameter. A view dimension is a typical use-case for the latter, since we support numeric values (interpreted as pixels) or string values ("auto", "10dp", etc.). | `type: Number` |
| optional | (**Optional**) Whether the parameter is optional. Default is false. | `optional: true` |
| repeatable | (**Optional**) Whether the parameter is repeatable. Default is false. Setting to true means the parameter becomes a "varargs" parameter (and therefore the method becomes variadic), similar to the use of ellipses in C or Java. (Java example: `void myMethod(String... args)` ). | `repeatable: true` |
| default | (**Optional**) Describes the default value for the parameter; useful if the parameter is optional. | `default: 0` or `default: The device's default locale` or `default: <Titanium.Codec.CHARSET_UTF8>` |
| constants | ( **Optional** ). Array of Titanium constant values the parameter can take. You can use a wildcard character at the end of the value to match more than one constant | `constants: [ Titanium.UI.LANDSCAPE_*, Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT]` |

###### Method Documentation Definitions

So far this section has concentrated on the specification for a single method's documentation. Of course, a type will most often have multiple methods that need to be documented, and therefore the type documentation specification's `methods` key expects an array of method documentation definitions, or, more accurately, what YAML calls a "Sequence of Mappings". Similarly, each method may have 0 or more parameters, therefore a sequence of parameter documentation definitions is also required for the method specification's `parameters` key. It's quite simple to put multiple definitions together in a sequence in YAML. This shows how it is done, both for methods and parameters:

```
methods:
  - name: doSomething
    summary: This method, when called, will do something.
    since: "0.8"
    platforms: [android, iphone, ipad]
    returns: {type: "String", description: "The thing done."}
    parameters:
      - name: x
        summary: The x-axis value
        type: Number
      - name: y
        summary: The y-axis value
        type: Number
  - name: multiply
    summary: Multiplies two factors and returns product.
    since: "0.8"
    platforms: [android, iphone, ipad]
    returns: {type: "Number", description: "The multiplication result"}
    parameters:
      - name: num1
        description: First factor.
        type: Number
    - name: num2
        description: Second factor.
        type: Number
```

As the example shows, a sequence that is a value of a key is indented, and a dash indicates the beginning of an element in the sequence, followed by the keys and values for that element.

Our running example so far:

**Hicky.yml**

```yml
# Documentation of Titanium.Do.Hicky
---
name: Titanium.Do.Hicky
summary: A view which automatically renders as an octagon.
platforms: [android, ipad, iphone]
extends: Titanium.UI.View
since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.0"}
# We could also just do this if all platforms got the type at the same time:
# since: "0.8"

description: It's important *not* to use this view on a scrollview!  Behavior there is undefined!
# We could also have specified that the description is in an external file, like this:
# description: file:Hicky_description.md

examples:
  -  title: Put a Hicky on a Window
     example: |
         The following example shows putting a Hicky directly on a window:

             var win = Ti.UI.createWindow({backgroundColor: '#ccc'});
             win.add(Ti.Do.createHicky());

methods:
  - name: doSomething
    summary: This method, when called, will do something.
    since: "0.8"
    platforms: [android, iphone, ipad]
    returns: {type: "String", description: "The thing done"}
    parameters:
      - name: x
        summary: The x-axis value
        type: Number
      - name: y
        summary: The y-axis value
        type: Number
  - name: multiply
    summary: Multiplies two factors and returns product.
    since: "0.8"
    platforms: [android, iphone, ipad]
    returns: {type: "Number", description: "The multiplication result"}
    parameters:
      - name: num1
        summary: First factor.
        type: Number
      - name: num2
        summary: Second factor.
        type: Number

# In following sections we'll show ...
# properties: ...
# events: ...
```

##### Property Specification

The type documentation includes a `properties` key, which is described as an array of property documentation definitions. This section describes the property documentation specification.

\***NOTE** **: Do \*\*not**\* create method documentation for getters/setters for a property. Only create the documentation for the property, and the getters and setters will be documented automatically in our documentation scripts (such as the script that generates our HTML-based API documentation on the developer.appcelerator.com site.) If a property does not have a getter/setter method, use `accessors: false` in the property documentation.

A single property documentation definition may contain the following keys:

| Key | Notes | Examples |
| --- | --- | --- |
| name | The property name. | `name: x` |
| summary | A short, "one-liner" summary of the property, in Markdown format. Keep it short, as it will often be generated next to the property name in lists, for example. Deeper information about the property should go into the `description` property. **Please start summaries with a capital letter and end with a period.** | `summary: X-axis of the dohicky.` |
| description | (**Optional**) Free-form , longer format text description of the property, in Markdown format, or "file:" followed by the name of a file which contains the description. If an external file is used, the contents should be in Markdown format and the file extension should be `.md`. | See [#Free-Form Text Values](#free-form-text-values) below. |
| type | A data type specifier indicating the type of the parameter, or an array of data type specifiers in case multiple types are allowed for the parameter. A view dimension is a typical use-case for the latter, since we support numeric values (interpreted as pixels) or string values ("auto", "10dp", etc.). | `type: Number` |
| platforms | (**Optional**). Identical to the `platforms` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but applied here to a property. | `platforms: [android, iphone, ipad]` |
| since | (**Optional**). Identical to the `since` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but applied here to a property. | `since: "0.8"` or `since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.2"`} |
| deprecated | (**Optional**) A simple dictionary object with keys `since`, `removed` and `notes`. `since` and `removed` values should hold Titanium version numbers indicating since when the property was deprecated and when (if ever) it will be removed. `since` should always be present. `removed` is optional. `notes`, which is also optional, can hold free-form text and should especially emphasize which alternative property to use in place of the deprecated property, if any. | `deprecated: {since: "1.6.0", removed: "1.8.0", notes: "Use <Titanium.Do.Hicky.backgroundColor> instead."`} |
| osver | (**Optional**). Can be used to specify operating system version number requirements for the given property. This should be a dictionary with keys for each OS whose version needs to be specified (ios/android). The key values should then also be dictionaries with the keys `min`, `max` and/or `versions`, each of which is optional. `min` and `max` should have stringified version numbers, whereas `versions`, if present, should be an array of stringified version numbers. | `osver: {android: {min: "2.1"`}} or `osver: {ios: {max: "3.2"`}} or `osver: {android: {versions: ["1.6", "2.1"]`}} |
| examples | (**Optional**). Identical to the `examples` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but in this case to show examples specifically for the property. | See [#Code Examples](#code-examples) below. |
| permission | (**Optional**). One of `read-only`, `write-only` or `read-write`. If missing, the value is assumed to be `read-write`. | `permission: read-only` |
| availability | (**Optional**). When the property can be written to, in the sense that some of our proxy properties can only be set in the dictionary object passed to a `createXXX({...})` method. Valid values here are `always`, `creation` and `not-creation`. `creation` means it can (or should – this is a cue to the SDK user) only be set in the dictionary object passed to `createXXX({...})`, whereas `not-creation` means it can only be set directly on the proxy object and _not_ via the `createXXX({...})` method. If missing, the value is assumed to be `always`. | `availability: always` |
| accessors | (**Optional**). Whether a getter and setter method exist for the property (true/false, default true). | `accessors: false` to indicate that there is no setter/getter for the property. |
| optional | (**Optional**). Whether it's considered optional to have the property set in the object. The default is `true` (i.e., not every object property needs to have a value). There may be cases where it is useful to set this to `false` to indicate that a value is required, for example when passing an object (see pseudo-object discussion below) as a paramater to a method. | `optional: false` |
| value | (**Optional**). The fixed value of the property. Particularly useful to express that something is a constant, such as by setting `permission: read-only` and by setting a `value`. | `value: 0` |
| default | (**Optional**). The default value of a property. You can use this to set a specific value (such as 0) or free text explaining how the default value is determined. | `default: 0` or `default: <Titanium.Codec.CHARSET_UTF8>` or `default: The device's current locale` |
| constants | ( **Optional** ). Array of Titanium constant values the property can be assigned. You can use a wildcard character at the end of the value to match more than one constant | `constants: [ Titanium.UI.LANDSCAPE_*, Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT]` |

Multiple property documentation definitions can be put together into a YAML sequence by following the same syntax as for [multiple methods](#ArrayofMethodDocumentationDefinitions).

Our running example so far, which includes a sequence of property definitions:

**Hicky.yml**

```yml
# Documentation of Titanium.Do.Hicky
---
name: Titanium.Do.Hicky
summary: A view which automatically renders as an octagon.
platforms: [android, ipad, iphone]
extends: Titanium.UI.View
since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.0"}
# We could also just do this if all platforms got the type at the same time:
# since: "0.8"

description: It's important *not* to use this view on a scrollview!  Behavior there is undefined!
# We could also have specified that the description is in an external file, like this:
# description: file:Hicky_description.md

examples:
  - title: Put a Hicky on a Window
    example: |
        The following example shows putting a Hicky directly on a window:

            var win = Ti.UI.createWindow({backgroundColor: '#ccc'});
            win.add(Ti.Do.createHicky());

methods:
  - name: doSomething
    summary: This method, when called, will do something.
    since: "0.8"
    platforms: [android, iphone, ipad]
    returns: {type: "String", description: "The thing done."}
    parameters:
      - name: x
        summary: The x-axis value
        type: Number
      - name: y
        summary: The y-axis value
        type: Number
  - name: multiply
    summary: Multiplies two factors and returns product.
    since: "0.8"
    platforms: [android, iphone, ipad]
    returns: {type: "Number", description: "The multiplication result"}
    parameters:
      - name: num1
        summary: First factor.
        type: Number
      - name: num2
        summary: Second factor.
        type: Number

properties:
  - name: x
    summary: The x-axis value.
    type: Number
    availability: always
    permission: read-write
  - name: y
    summary: The y-axis value.
    type: Number
  - name: z
    summary: The z-axis value.
    type: Number
    platforms: [ipad]
    since: "1.4.0"
    deprecated:
        since: "1.6.0"
        removed: "1.8.0"
        notes: Use <Titanium.Do.Hicky.zz> instead.

# In following sections we'll show ...
# events: ...
```

##### Event Specification

The type documentation includes a `events` key, which is described as an array of event documentation definitions. This section describes the event documentation specification.

A single event documentation definition may contain the following keys:

| Key | Notes | Examples |
| --- | --- | --- |
| name | The event name. | `name: flummered` |
| summary | A short, "one-liner" summary of the event, in Markdown format. Keep it short, as it will often be generated next to the event name in lists, for example. Deeper information about the event should go into the `description` property. **Please start summaries with a capital letter and end with a period.** | `summary: Fires when something happens.` |
| description | (**Optional**) Free-form , longer format text description of the event, in Markdown format, or "file:" followed by the name of a file which contains the description. If an external file is used, the contents should be in Markdown format and the file extension should be `.md`. | See [#Free-Form Text Values](#free-form-text-values) below. |
| extends | (**Optional**). Either a single fully-qualified type name, or an array of fully-qualified type names from which the event object inherits. As a convenience, this can be omitted and it will then be assumed that the event object extends `Titanium.Event`, which only contains the standard `type` and `source` properties. | `extends: Titanium.Event` |
| platforms | (**Optional**). Identical to the `platforms` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but applied here to an event. | `platforms: [android, iphone, ipad]` |
| since | (**Optional**). Identical to the `since` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but applied here to an event. | `since: "0.8"` or `since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.2"`} |
| deprecated | (**Optional**) A simple dictionary object with keys `since`, `removed` and `notes`. `since` and `removed` values should hold Titanium version numbers indicating since when the event was deprecated and when (if ever) it will be removed. `since` should always be present. `removed` is optional. `notes`, which is also optional, can hold free-form text and should especially emphasize which alternative event to use in place of the deprecated event, if any. | `deprecated: {since: "1.6.0", removed: "1.8.0", notes: "Use <Titanium.Do.Hicky.flummered2> instead."`} |
| osver | (**Optional**). Can be used to specify operating system version number requirements for the given event. This should be a dictionary with keys for each OS whose version needs to be specified (ios/android). The key values should then also be dictionaries with the keys `min`, `max` and/or `versions`, each of which is optional. `min` and `max` should have stringified version numbers, whereas `versions`, if present, should be an array of stringified version numbers. | `osver: {android: {min: "2.1"`}} or `osver: {ios: {max: "3.2"`}} or `osver: {android: {versions: ["1.6", "2.1"]`}} |
| properties | (**Optional**). A sequence of [event listener object property definitions](#EventListenerObjectPropertySpecification) which describe the properties in the event object passed to a listener for this event. | See [#Event Listener Object Property Specification](#EventListenerObjectPropertySpecification). |

Multiple event documentation definitions can be put together into a YAML sequence by following the same syntax as for [multiple methods](#ArrayofMethodDocumentationDefinitions).

Our running example so far, which includes a sequence of event definitions:

**Hicky.yml**

```yml
# Documentation of Titanium.Do.Hicky
---
name: Titanium.Do.Hicky
summary: A view which automatically renders as an octagon.
platforms: [android, ipad, iphone]
extends: Titanium.UI.View
since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.0"}
# We could also just do this if all platforms got the type at the same time:
# since: "0.8"

description: It's important *not* to use this view on a scrollview!  Behavior there is undefined!
# We could also have specified that the description is in an external file, like this:
# description: file:Hicky_description.md

examples:
  - title: Put a Hicky on a Window
    example: |
        The following example shows putting a Hicky directly on a window:

            var win = Ti.UI.createWindow({backgroundColor: '#ccc'});
            win.add(Ti.Do.createHicky());

methods:
  - name: doSomething
    summary: This method, when called, will do something.
    since: "0.8"
    platforms: [android, iphone, ipad]
    returns: {type: "String", description: "The thing done."}
    parameters:
      - name: x
        summary: The x-axis value
        type: Number
      - name: y
        summary: The y-axis value
        type: Number
  - name: multiply
    summary: Multiplies two factors and returns product.
    since: "0.8"
    platforms: [android, iphone, ipad]
    returns: {type: "Number", description: "The multiplication result"}
    parameters:
      - name: num1
        summary: First factor.
        type: Number
      - name: num2
        summary: Second factor.
        type: Number

properties:
  - name: x
    summary: The x-axis value.
    type: Number
    availability: always
    permission: read-write
  - name: y
    summary: The y-axis value.
    type: Number
  - name: z
    summary: The z-axis value.
    type: Number
    platforms: [ipad]
    since: "1.4.0"
    deprecated:
        since: "1.6.0"
        removed: "1.8.0"
        notes: Use <Titanium.Do.Hicky.zz> instead.

events:
  - name: flubbered
    summary: Event occurs when the Hicky is flubbered.
    since: "1.4.0"
    properties:
    - name: flubtime
    summary: the time at which Hicky was flubbered.
    type: Date
    - name: x
    summary: the x-axis position on which the flubber occurred.
    type: Number
    - name: y
    summary: the y-axis position on which the flubber occurred.
    type: Number
  - name: zinkered
    summary: An event that happens if the Hicky is zinkered.
    properties:
      - name: zinkerText
        summary: The zinker text message.
        type: String
```

###### Event Listener Object Property Specification

Each event contains a `properties` sequence. This section describes the specification for each member of that sequence. We refer to them as "Event Listener Object Properties" because they are properties of the single object that gets passed to all event listeners in Titanium. These objects are often given the parameter name `e`, though that is not a requirement, such as in this example:

```
button.addEventListener('click', function(e) {
  Titanium.API.info('Event source: ' + e.source);
  Titanium.API.info('Event type: ' + e.type);
});
```

In that example, the `source` and `type` are what we are calling "event listener object properties" here.

A single event listener object property documentation definition may contain the following keys:

| Key | Notes | Examples |
| --- | --- | --- |
| name | The property name. | `name: x` |
| summary | A short, "one-liner" summary of the property, in Markdown format. **Please start summaries with a capital letter and end with a period.** | `summary: The x point of the event in receiving view coordinates.` |
| type | A data type specifier indicating the type of the property, or an array of data type specifiers in case multiple types are allowed for the property. A view dimension is a typical use-case for the latter, since we support numeric values (interpreted as pixels) or string values ("auto", "10dp", etc.). | `type: Number` |
| platforms | (**Optional**). Identical to the `platforms` key defined in the [Valid Keys in the Documentation of a Type](#valid-keys-in-the-documentation-of-a-type) section, but applied here to an event listener object property. | `platforms: [android, iphone, ipad]` |
| deprecated | (**Optional**) A simple dictionary object with keys `since` and `removed`, whose values should hold Titanium version numbers indicating since when the property was deprecated and when (if ever) it will be removed. `since` should always be present. `removed` is optional. | `deprecated: {since: "1.6.0", removed: "1.8.0"`} |
| constants | ( **Optional** ). Array of Titanium constant values the property can be assigned. You can use a wildcard character at the end of the value to match more than one constant | `constants: [ Titanium.UI.LANDSCAPE_*, Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT]` |

For examples, see the YAML sample above in the [#Event Specification](#event-specification).

#### Free-Form Text Values

Four of the YAML keys described in previous sections – `summary`, `description`, the `example` property of each member of an `examples` array, and the `notes` property in a `deprecated` entry – accept free-form text which will be processed by our scripts as Markdown. This section describes valid approaches to entering free-form text as values for YAML keys.

##### Short One-Liners

For relatively short text blocks, simply type the text right after the key:

```
summary: This method does this and that.
```

By convention, the `summary` key (for types, methods, method parameters, properties and events) should be a single line, relatively short blurb like the example shown above. Please adhere to this, as these short one-liners will often appear next to the type/method/property/event name in lists.

Also, although these are short one-liners and may not be grammatical sentences, please treat them as sentences for purposes of capitalization and punctuation: start with a capital letter and end with a period!

##### Multiline with Folding

Line-breaks can be used for longer text blocks in order to make the YAML itself more readable. The second and following lines need to be indented one level from the key. The parser will fold the line breaks and remove the indentation spaces:

```
description: Now is the time
    for all good men
    to come to the aid
    of their country.
```

The parser will convert that key value to `Now is the time for all good men to come to the aid of their country.`

##### Preserving Line Breaks and Inserting Code Blocks

When line-breaks are relevant, free-form text block values can take advantage of the YAML vertical bar syntax which preserves line-breaks. The vertical bar is followed by a new line, and then the text block should be indented by one level. The line-breaks in the text block will be preserved. This is the approach that should be taken for the `examples` key value, since it will most likely contain separate code blocks:

```javascript
examples:
  - title: Order of Operations
    example: |
        The `doSomethingElse` method should always be called *after* the `doSomething` method:

            var result = doSomething();
            doSomethingElse();
```

Note that the actual code block is preceded by an empty line and then indented by at least four spaces, as the Markdown standard specifies.

###### Language of Code Blocks

All code blocks are assumed to be Javascript, unless the language is specified using this technique:

* The first line of the indented code block should be a comment (using whatever single-line comment syntax the language uses) containing {{`language:[language]`}}.

* `[language]` should be one of the "Short names" values specified by [Pygments](http://pygments.org/docs/lexers/), since that is a very popular syntax highlighter, and syntax highlighting is very likely the most common why someone would be interested in this information.

Examples:

```javascript
example: |
    Here is a Javascript example:

        var x = y;

    Here is a Java example:

        // {{language:java}}
        int x = 0;

    Here is an Objective-C example:

        // {{language:obj-c}}
        - (id)init
        {
            return self;
        }

    Here is a Python example:

        # {{language:python}}
        def doNothing():
            pass
```

##### Referring to External Files

Particularly, long free-form text blocks can optionally be placed in an external Markdown file by entering `file:filename.md`

For example:

```
description: file:Hicky_description.md
```

This is not part of the YAML specification; it is a convenience that our own scripts will recognize.

The external file must be placed in the same folder as the `.yml` file.

By convention, the `summary` key value, which we prefer to be a relatively short one-liner, should not use this `file:` convenience.

By convention, the filename should be in the form of `[type name]_[method/property name]_[key name].md`. For example, if the file contains an `example` for the `doSomething` method of the `Hicky` type, the filename should be `Hicky_doSomething_example.md`. If the file is for a key value of the type itself, rather than one of its methods or properties, the filename should simply be in the form of `[type name]_[key name].md`, such as `Hicky_example.md`.

#### Code Examples

The `examples` property for type, method and property definitions is actually an array (tuple); i.e., you can have multiple examples – each with their own title – per type/method/porperty. Each member of the array should contain:

* A `title` property, which is a brief description of the particular example;

* An `example` property, which is free-form text (as described in the previous section) wherein you can put both explanatory text and any code blocks. This is parsed as Markdown, so simply indent each code block by another four characters for the Markdown processor to recognize it as code.

Note that you should put the vertical bar (|) at the start of the `example` value, followed by a line break and indentation. This is so that any further indentation that you do, such as for code blocks, is preserved.

Example:

```javascript
examples:
  - title: Calling doSomething from a Callback
    example: |
        This shows how to properly call `doSomething` from a callback:

            function myCallback() {
                doSomething();
            }
  - title: Calling doSomething from a View
    example: |
        To properly invoke `doSomething`from a view, be sure to do it as follows:

            view.addEventListener('click', function(){doSomething();});
```

#### Documenting Callbacks

Documentation for callbacks is tricky. The place in documentation where a callback is relevant is usually as a parameter to a method call. At that point, the only thing that is relevant is that it is a callable function. But the most interesting thing about a callback is the parameter that is passed _back_ to it when it is called.

For example, [Titanium.Media.takeScreenshot](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.takeScreenshot-method.html) takes a single parameter, a callback function. The documentation could easily be something like this:

```
name: takeScreenshot
parameters:
  - name: callback
    type: Function
```

That's awkward, because it does not give any information about what the callback function should look for and evaluate when it gets called. All of our callbacks use the simple pattern of taking a single parameter which is an object literal whose relevant members can then be evaluated by the callback function. The problem is, those relevant object members vary. For the callback invoked at the completion of `Titanium.Media.takeScreenshot`, the relevant member of the object literal which is passed back is `media`. `Titanium.Geolocation.reverseGeocoder`, on the other hand, sends an object literal with several members to its callback, among them `street`, `city` and `country`.

We have created the following syntax to indicate a particular type of callback, meaning a callback that accepts an object literal that is documented as having particular properties:

```
type: Callback<[type]>
```

`[type]` should be replaced with the name of a type that you document simply for purposes of documenting this callback parameter. These can perhaps be thought of as _pseudo-types_, in the sense that they are only "being documented for the documentation", or to make the documentation complete.

The next section, [#Documenting Object Literals and Interfaces](#documenting-object-literals-and-interfaces), describes how to document these _pseudo-types_. For the time being, imagine you have defined a _pseudo-type_ named `ScreenshotResult` to be used with the callback for `Titanium.Media.takeScreenshot`. In that case, the documentation for the parameters of `takeScreenshot` would look like this:

```
name: takeScreenshot
parameters:
  - name: callback
    type: Callback<ScreenshotResult>
```

Note: If a callback is called without parameters, it can be specified simply with `Callback`, i.e., without the angle-bracketed type specifier.

#### Documenting Object Literals and Interfaces

##### Object Literals

As the section on [#Documenting Callbacks](#documenting-callbacks) shows, there are some occasions when we wish to provide "strongly-typed documentation" for what are actually simple Javascript object literals with Java `HashMap` or Objective-C `NSDictionary` instances behind them. The single parameter accepted by callbacks is one good example; in that case, we wish to document which properties can be expected in the object literal passed to the callback, what data types should be expected for those properties, etc.

Another example is [Titanium.Media.openPhotoGallery](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.openPhotoGallery-method.html), which takes a single argument: an object literal that should contain several properties. If you look at the existing documentation for that method's single parameter, you will see that it is just a bunch of text describing what should go into the object literal; this is not useful for automated tools and utilities, such as the Code Assist feature of Studio. We would rather have structured documentation for this object literal.

##### Interfaces

Similarly, parts of our API might accept properties or parameters that don't necessarily need to be instances of specific proxies but rather must implement a particular interface. One might think of this as a kind of "[duck typing](http://en.wikipedia.org/wiki/Duck_typing)". An upcoming example of this can be seen in our new [Stream specification](#undefined), in which two Titanium types – file streams and socket streams – implement a Stream interface. From the documentation perspective, there should be no need for stream-related methods and properties to be documented for both of those types. Instead, a generic stream type should be documented just once so that the documentation definitions for file streams and socket streams can simply extend it, and so that any method parameters or properties throughout the rest of our API which accept streams can have their `type` key set to the special documented type.

##### Solution: Pseudo-Types

To provide "strongly typed documentation" for these object literals and shared interfaces, simply document them as their own types. One might call these _pseudo-types_, in the sense that they are documentation-only types, not types that are truly instantiable in code. The names of these pseudo-types will not be presented in the online documentation; they are here solely so that scripts – such as our scripts that will generate the online documentation and the Content Assist JSCA file – can determine the attributes which are expected in an object used as a property or method parameter.

###### Pseudo-Types Useful to Just One Titanium Type

Some of these _pseudo-types_ might be useful only to one Titanium type being documented. An example of this is the object that gets passed to `Titanium.Media.openPhotoGallery`: there is no other part of the Titanium Mobile SDK which cares about that object. In such cases, you should document the pseudo-type in the same file in which you are documenting the main type.

With YAML, you can document multiple types in a single documentation file simply by starting a new "document". You'll recall from [#A Type Documentation is a YAML Document](#a-type-documentation-is-a-yaml-document) that a new document begins with three dashes (---) alone on a line. So if you wish to write documentation for a pseudo-type that is only used in one place, you can simply start a new YAML document at the bottom of the file.

Using our running example type `Titanium.Do.Hicky`, we can document a method, `adjustFlubber`, which accepts a dictionary object (or "object literal") as a parameter. The object should have the properties `x` and `y`, which are coordinates, and `callback`, which is a function that will be called upon completion. The callback accepts an object that has `success` and `error` members. The documentation definition might look like this:

```javascript
# MAIN TYPE (a user-facing Titanium type) being documented in this file.
---
name: Titanium.Do.Hicky
summary: A view which automatically renders as an octagon.
platforms: [android, ipad, iphone]
extends: Titanium.UI.View
since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.0"}
(etc., etc., etc.)

methods:
  - name: adjustFlubber
    summary: Does an async adjustment of a flubber.
    parameters:
      - name: options
        summary: flubber adjustment options
        type: FlubberAdjustmentSpec
(etc., etc., etc.)

# NEW DOCUMENT (in same file) to describe pseudo type FlubberAdjustmentSpec
---
name: FlubberAdjustmentSpec
summary: Specification for a flubber adjustment
platforms: [android, ipad, iphone]
since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.0"}
properties:
  - name: x
    summary: desired new x-axis value
    type: Number
  - name: y
    summary: desired new y-axis value
    type: Number
  - name: callback
    summary: function will be called when adjustment has finished.
    type: Callback<FlubberAdjustmentResult>

# NEW DOCUMENT (in same file) to describe pseudo type FlubberAdjustmentResult
---
name: FlubberAdjustmentResult
summary: Object with properties describing the result of flubber adjustment.
platforms: [android, ipad, iphone]
since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.0"}
properties:
  - name: success
    summary: indicates success/failure
    type: Boolean
  - name: error
    summary: error string that will be set if success==false
    type: String
```

###### Pseudo-Types Useful to a Single Module

If a _pseudo-type_ has applicability beyond a single type definition, it should go in its own file. If it's applicable only to types which are all in the same module, it can go in the same folder as the module but in its own file (e.g., `Titanium/Do/FlubberAdjustmentResult.yml`.

The real-world example documentation for `Titanium.UI.View` also contains some pseudo-type defintions near the botttom of the file.

###### Pseudo-Types Useful in Multiple Modules

If a _pseudo-type_ is useful in multiple modules, it should go in a `common/` folder which is at the root of the documentation directories, i.e., as a sibling to `Titanium/`. One example of this is the documentation definition for the Stream interface described in [#Interfaces](#interfaces) above. In that case, a file in `common/` should exist – perhaps `common/TiStream.yml` – with contents similar to this example:

**TiStream.yml**

```yml
# TiStream.yml - Documents common Stream interface used
# in multiple Titanium modules.
---
name: TiStream
summary: Titanium Stream interface
since: "1.7.0"
methods:
  - name: read
    summary: reads buffer.length amount of data from stream into buffer.
    returns: {type: "Number", description: "Count of bytes read"}
    parameters:
      - name: buffer
        summary: Buffer into which read bytes will be placed.
        type: Titanium.Buffer
  - name: read
    summary: reads "length" number of bytes into "buffer" starting at "offset" in stream.
    returns: {type: "Number", description: "Count of bytes read"}
    parameters:
      - name: buffer
        summary: Buffer into which read bytes will be placed.
        type: Titanium.Buffer
      - name: offset
        summary: Offset in stream at which to start read
        type: Number
      - name: length
        summary: Number of bytes to read
        type: Number
# ETC ETC
```

### Intra-Documentation Links

Our current TDocs support automatic linking within the documentation, either using backticks or double square brackets. The convenience of automatic linking will continue with the adoption of this new specification, however backticks and square brackets will no longer be used, as described in the following sub-sections.

#### Type Specifications Do Not Need Backticks

When a type is specified (such as a return type, a method parameter type or a property type), and the specified type is documented in our documentation .yml files, our scripts will handle linking to the type automatically. There is no need to use backticks in this case. **Do not use backticks in this case!**

**Incorrect:**

```
parameters:
  - name: view
    type: `Titanium.UI.View` # WRONG!
```

**Correct:**

```
parameters:
  - name: view
    type: Titanium.UI.View
```

#### Markdown Links in Free-Form Text Values

As [explained earlier](#free-form-text-values), a few of the documentation YAML key values accept free-form text which is treated as Markdown. Backticks and double-brackets will no longer be used within these text blocks as indicators that links to type documentation should automatically be generated. Instead, Markdown shall be followed more closely. In Markdown, the backtick has no meaning with respect to linking – nor does a set of double square brackets.

Instead, use one of these two Markdown standards:

* Angle brackets, if you don't need any custom text for the link. Example: `<Titanium.UI.View>` becomes a link with "Titanium.UI.View" as the link text and the reference being the appropriate address to the `Titanium.UI.View` documentation.

* The standard, most common Markdown "inline link" syntax. Example: `[Your custom link text here](Titanium.UI.View)` becomes a link with "Your custom link text here" as the link text and the reference being the appropriate address to the `Titanium.UI.View` documentation.

Our scripts will then evaluate the link and if the link value precisely matches the full, namespace-qualified name of a documented type, then the script will know to generate the link to the type's documentation.

**Incorrect:**

```
example: The following code shows how easy it is to get a [View](`Titanium.UI.View`): # WRONG!
# ...
description: This type is often used in conjunction with `Titanium.UI.2DMatrix`. # WRONG!
# ...
description: This type is often used in conjunction with [[Titanium.UI.2DMatrix]]. # WRONG
```

**Correct:**

```
example: The following code shows how easy it is to get a [View](Titanium.UI.View):
# ...
description: This type is often used in conjunction with <Titanium.UI.2DMatrix>.
```

## Real-World Example

For purposes of a real-world example, `Titanium.UI.View` was documented following this proposed specification.
