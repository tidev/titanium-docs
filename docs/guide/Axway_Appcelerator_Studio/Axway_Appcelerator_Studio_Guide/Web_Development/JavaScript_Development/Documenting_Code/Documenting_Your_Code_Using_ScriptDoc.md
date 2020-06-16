---
title: Documenting Your Code Using ScriptDoc
weight: '10'
---

# Documenting Your Code Using ScriptDoc

Using Studio's ScriptDoc system to document your code enables Content Assist to work for your code in addition to built-in support the core JavaScript language. This page gives some of the guidelines to think about when adding ScriptDoc blocks to your code.

A [nice one-page cheat sheet](http://www.scribd.com/doc/10040039/ScriptDoc-Cheatsheet-v01) for ScriptDoc on Scribd is posted.

## Basic Instructions

* Add a documentation block immediately before each function or class. The ScriptDoc parser automatically associates the documentation block with the function or class following it.

* Enclose each documentation block within a slash-asterisk-asterisk

    ::: tip
    ```
    (/**)
    ```
    :::

    and asterisk-slash

    ::: tip
    ```
    (*/)
    ```
    :::

    comment set.

* The first line in the block, except for file overviews, should be a short description of the function or class.

* After the description, add [tags](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/ScriptDoc_(SDOC)_2.0_Specification/) that explain the function, including a description, what parameters it takes, and its return type. You can also use the [ScriptDoc tag quick reference](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/ScriptDoc_tag_quick_reference/) to quickly lookup a tag once you are familiar with the syntax for each tag.

## Example: A basic documentation block for a getFoo() function

```javascript
/**
 * Gets the current foo
 * @param {String} fooId  The unique identifier for the foo.
 * @return {Object}          Returns the current foo.
 */
 function getFoo(fooID){
 }
```

## Ordering your tags

Add your tags in the following order, as appropriate:

* @classDescription (constructors only)

* @param (classes, interfaces, functions, and constructors only)

* @return (functions only)

* @type (functions only)

* @author (classes and interfaces only, required)

* @version (classes and interfaces only, required)

* @see

* @since

* @deprecated

## Guidelines for ordering multiple versions of the same tag

* @author - List @author tags chronologically, starting with the author who created the file or function.

* @param - List @param tags in argument declaration order.

* @see - List @see tags from nearest to furthest access, shown below:

```
@see #Constructor(Type, Type...)
 @see #Constructor(Type id, Type id...)
 @see #method(Type, Type,...)
 @see #method(Type id, Type, id...)
 @see Class
 @see Class#field
 @see Class#Constructor(Type, Type...)
 @see Class#Constructor(Type id, Type id)
 @see Class#method(Type, Type,...)
 @see Class#method(Type id, Type id,...)
 @see package.Class
 @see package.Class#field
 @see package.Class#Constructor(Type, Type...)
 @see package.Class#Constructor(Type id, Type id)
 @see package.Class#method(Type, Type,...)
 @see package.Class#method(Type id, Type, id)
 @see package
```

## Related Topics

* [About Content Assist](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Content_Assist/About_Content_Assist/)

* [ScriptDoc (SDOC) 2.0 Specification](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/ScriptDoc_(SDOC)_2.0_Specification/)

* [ScriptDoc tag quick reference](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/ScriptDoc_tag_quick_reference/)
