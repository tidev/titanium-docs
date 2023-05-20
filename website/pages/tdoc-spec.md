---
sidebar: auto
---

# TDoc Specification

<Badge type="tip">Version 1.1</Badge>

YAML based API documentation spec for the Titanium SDK and native modules.

:::warning WORK IN PROGRESS
The migration of this document is currently still a work in progress. For the original please see [here](https://docs.appcelerator.com/platform/latest/#!/guide/TDoc_Specification)
:::

:::tip
To see an example of this spec in use, check out the documentation for [Titanium](https://github.com/tidev/titanium-sdk/blob/master/apidoc/Titanium).
:::

## Overview

Titanium SDK needs a richer documentation specification, particularly to capture more metadata and make it available both to our SDK users who browse the online documentation and to other software such as code assist in various IDEs or for TypeScript typings.

This document descripes our SDK documentation specification based on YAML, which offers a well-structured yet still readable format.

Though the primary driver is to be a Titanium SDK documentation format, the goal here is also to have a specification that can be applied to Titanium modules that are external to the Mobile SDK, including those created by third-party developers.

## Goals

The goals of this documentation format are:

- Support rich metadata for all API members, including platform support, versioning, and deprecation information.
- Provide an inheritance mechanism for documentation.
- Allow documentation of object literals used as properties, method parameters, and in events and callbacks.
- Support documenting callback arguments.
- As much as possible, take advantage of standard libraries for parsing and formatting.
- Generate documentation as well as content assist files.

## Format

The documentation is based on YAML. "Free-form text" property values in the YAML – such as method descriptions and code examples – will be parsed as standard Markdown.

## Data Types

Since Titanium is running in a JavaScript runtime you can generally use all types available in JavaScript. In addition there are a few predefined types that help you to easily express more complex types.

### JavaScript data types

- Boolean
- Null
- Undefined
- Number
- String
- Symbol
- Object (prefer one of the specific Titanium types below if applicable)

### Titanium specific types

#### `Titanium.XX`

This is shorthand to signify the types that are defined within the documentation. In fact, they don't have to be the `Titanium.XX` namespace; any fully-qualified name defined within the set of documentation being parsed can be used as a type name. But since this specification will first be used for Titanium SDK, `Titanium.XX` is used here as the example.

#### `Dictionary<[type]>`

A special type indicating a dictionary – i.e., an object literal – whose members can be the properties of the specified `[type]`. Example: `Dictionary<Titanium.UI.View>`. You might use this if you provide your own documentation for a proxy-creation method such as `Titanium.UI.createView` rather than rely on the auto-generated documentation for proxy-creation methods. In that case, you would use `Dictionary<Titanium.UI.Window>` for the type of the single parameter that `createWindow` takes.

#### `Callback<[type]>`

A special type indicating a function used as a callback, whose single callback argument (the info passed to the callback) is of type `[type]`, where `[type]` can be a type that you define elsewhere. We'll see examples of this in the special section on [callbacks](#callbacks). The angle bracket notation is optional: `Callback` by itself signifies simply a function that gets called, with no precise information concerning what is passed to it, if anything.

### Arrays

Arrays must be specified as follows:

`Array<[type]>`

Examples:

- `Array<Object>`
- `Array<String>`
- `Array<Titanium.UI.View>`

### Interface types

Additionally, other "interface-types" (following TypeScript's [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)) may be defined inside the documents as stand-ins for things like callback arguments, object literals that are passed as parameters, or objects that implement a particular interface. We'll see examples of this in the special sections on [callbacks](#callbacks) and [object literals and interfaces](#object-literals-and-interfaces).

## Inheritance

The specification supports what might be called "multiple documentation inheritance", whereby a Titanium type that is being documented (i.e., a proxy or module) has an `extends` property that can be set to a single qualified type name or an array of type names, thereby giving the child type all of the method, property and event documentation defined in the super types. Example:

```yaml
---
name: Titanium.UI.Window
extends: Titanium.UI.View
```

The example indicates that `Titanium.UI.Window` inherits all of the method, property and event documentation of the `Titanium.UI.View` type.

If a type documentation includes methods, properties or events that are already defined in its super type(s), the child type's documentation will be used. To put it another way: the lowest-level, most specific documentation wins.

## Folders and Files

Each type being documented must have its own file. The file extension for documentation files must be `.yml`, the standard for YAML files.

The folder structure must be hierarchical, following the module namespaces. Example: `Titanium.UI.Android` documentation goes in `/Titanium/UI/Android/`. The module and its contained proxies must be documented in files residing at the same folder level. Example: `/Titanium/UI/UI.yml` is a module documentation file, and `/Titanium/UI/Window.yml` is the Window proxy documentation file.

## Documenting types

This section details the documentation of types, which are the highest-level documented artifacts. A type can be, for example, a Titanium module `Titanium.UI` or a Titanium proxy `Titanium.UI.Window`.

Types shall be documented in their own files, just as they are in the current TDoc specification. This is not a YAML requirement, but rather a convention that shall be followed.

Types are documented in a YAML "document". YAML marks the beginning of a document with three dashes (`---`) on a line. So that is the first line of the type documentation's .yml file, excepting any comment lines (lines beginning with `# ) which can and may be placed before it.

Throughout this document we will add to an example .yml file that adheres to our specification. The example will document the fictitious `Titanium.Do.Hicky` type. So far, we have the following:

```yaml
# Documentation of Titanium.Do.Hicky
---
```

### Top-level type keys

These are the keys (i.e., YAML properties/members) which are valid in the documentation of a Type. The order of these keys is not relevant to YAML, however this a suggested order. By convention, the name, description, platforms, extends and since keys should be defined first (i.e., appear at the top of the document).

| Key | Notes |
| -- | --- | --- |
| name | A fully-qualified name for the type |
| summary | A short, "one-liner" summary of the type, in Markdown format. Keep it short, as it will often be generated next to the type name in lists, for example. Deeper information about the type should go into the description property. **Please start summaries with a capital letter and end with a period.** |
| description | **(Optional)** Free-form, longer format text description of the Type, in Markdown format, or `file:` followed by the relative path to a file which contains the description. If an external file is used, the contents must be in Markdown format and the file extension must be .md. |
| createable | **(Optional)** Applicable only to "proxy" types (types having `Titanium.Proxy` as an ancestor). This indicates whether a standard `createXXXX` method is supported to create an instance of the proxy from the module in which it is located. The default is `true` since almost all proxies can be created in that way. |
| platforms | **(Optional)** Array of supported platforms. If missing, it is to be assumed that all platforms are supported. Note that `ipad` is its own platform. As the example shows, a simple YAML array syntax is to enclose a comma-separated list in square brackets. |
| extends | **(Optional)** Either a single fully-qualified type name, or an array of fully-qualified type names from which the documented Type inherits. |
| excludes | **(Optional)** For excluding inherited methods, properties or events. Can have one or more of these members: `methods`, `properties`, `events`. Each of those is an array of strings indicating which methods (or properties, or events) to exclude. |
| since | Indicates in which Titanium version the Type first appeared. Either a single value if the Type appeared at the same time on all platforms, or a dictionary object with keys per platform and values containing the relevant version number. NOTE: Specify version numbers in full-quotations. |
| deprecated | **(Optional)** A simple dictionary object with keys `since`, `removed` and `notes`. `since` and `removed` values should hold Titanium version numbers indicating since when the type was deprecated and when (if ever) it will be removed. `since` should always be present. `removed` is optional. `notes`, which is also optional, can hold free-form text and should especially emphasize which alternative type to use in place of the deprecated type, if any. |
| osver | **(Optional)** Can be used to specify operating system version number requirements for the given type. This should be a dictionary with keys for each OS whose version needs to be specified (ios/android). The key values should then also be dictionaries with the keys `min`, `max` and/or `versions`, each of which is optional. `min` and `max` should have stringified version numbers, whereas versions, if present, should be an array of stringified version numbers. |
| examples | **(Optional)** An array of objects wherein each element has `title` and `example` properties. The `title` property should briefly describe the particular example. The `example` property should be a free-form text block in Markdown format for showing code examples, or `file:` followed by the path to a file which contains the code examples. If an external file is used, the contents should be in Markdown format and the file extension should be `.md`. This can also be set to an external `file:` alltogether where each heading will mark a sperate example. |
| methods | **(Optional)** An array of method definitions describing the type's methods. See [Method Specification](#method-specification) below. |
| properties | **(Optional)** An array of property definitions describing the type's methods. See [Property Specification](#property-specification) below. |
| events | **(Optional)** An array of event definitions describing the type's events. See [Event Specification](#event-specification) below. |

Our running example so far:

```yaml
# Documentation of Titanium.Do.Hicky
---
name: Titanium.Do.Hicky
summary: A view which automatically renders as an octagon.
platforms: [android, ipad, iphone]
extends: Titanium.UI.View
since: {android: "1.6.0", iphone: "0.8", ipad: "1.4.0"}
# We could also just do this if all platforms got the type at the same time:
# since: "0.8"

description: It's important *not* to use this view on a scrollview! Behavior there is undefined!
# We could also have specified that the description is in an external file, like this:
# description: file:Hicky_description.md

examples:
  - title: Put a Hicky on a Window
    example: |
        The following example shows putting a Hicky directly on a window:

        ```js
        var win = Ti.UI.createWindow({backgroundColor: '#ccc'});
        win.add(Ti.Do.createHicky());
        ```

# In following sections we'll show ...
# methods: ...
# properties: ...
# events: ...
```

### Method specification

As noted above, the type documentation includes a `methods` key, which is described as an array of method documentation definitions. This section describes the method documentation specification, then shows an example of putting multiple method documentation definitions together to form a YAML array (more accurately a [Sequence of Mappings](http://www.yaml.org/spec/1.2/spec.html#id2760193)).

A single method documentation definition may contain the following keys:

| Key | Notes |
| -- | --- | --- |
| name | The method name. |
| summary | A short, "one-liner" summary of the parameter, in Markdown format. Keep it short, as it will often be generated next to the parameter name in lists, for example. Deeper information about the parameter should go into the `description` property. **Please start summaries with a capital letter and end with a period.** |
| description | **(Optional)** Free-form , longer format text description of the method, in Markdown format. |
| returns | **(Optional)** A dictionary object with `type` and `description` keys and their values. The `description` key is optional. The `type` key's value should be a type identifier. If it is possible for the method to return different types, set this to an array of these dictionaries. This key is **optional** in the sense that if it is missing, then it is assumed that there is no return value. There is no need to specify void return types. |
| platforms | **(Optional)** Identical to the platforms key defined in the [Top-level type keys](#top-level-type-keys) section, but applied here to a method. This is **optional**. If missing it is assume that the value would be the same as the type's `platforms` value. |
| since | **(Optional)** Identical to the `since` key defined in the [Top-level type keys](#top-level-type-keys) section, but applied here to a method. This is **optional**. If missing, it is assumed that the value would be the same as the type's `since` value. |
| deprecated | **(Optional)** Identical to the `deprecated` key defined in the [Top-level type keys](#top-level-type-keys) section, but in this case only deprecated a certain method. |
| osver | **(Optional)** Identical to the `osver` key defined in the [Top-level type keys](#top-level-type-keys) section, but in this case only applies to a certain method. |
| examples | **(Optional)** Identical to the `examples` key defined in the [Top-level type keys](#top-level-type-keys) section, but in this case to show examples specifically for the method. |
| parameters | **(Optional)** An array of parameter definitions documenting the [method parameters](#method-parameters).|


#### Method parameters

A method may, of course, have zero or more parameters. This section is the specification for a method parameter documentation definition.

The valid keys are:

| Key | Notes |
| -- | --- | --- |
| name | The parameter name. |
| summary | A short, "one-liner" summary of the parameter, in Markdown format. Keep it short, as it will often be generated next to the parameter name in lists, for example. Deeper information about the parameter should go into the `description` property. **Please start summaries with a capital letter and end with a period.** |
| type | A data type specifier indicating the type of the parameter, or an array of data type specifiers in case multiple types are allowed for the parameter. A view dimension is a typical use-case for the latter, since we support numeric values (interpreted as pixels) or string values ("auto", "10dp", etc.). |
| repeatable | **(Optional)** Whether the parameter is repeatable. Default is `false`. |
| optional | **(Optional)** Whether the parameter is optional. Default is `false`. |
| default | **(Optional)** Describes the default value for the parameter; useful if the parameter is optional. |
| constants | **(Optional)** Array of Titanium constant values the parameter can take. You can use a wildcard character at the end of the value to match more than one constant |

Our running example so far:

```yaml
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

          ```js
          var win = Ti.UI.createWindow({backgroundColor: '#ccc'});
          win.add(Ti.Do.createHicky());
          ```

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

### Property specification

### Event Specification

## Free-Form Text Values

## Code Examples

## Documenting Callbacks

## Documenting Object Literals and Interfaces

## Intra-Documentation Links
