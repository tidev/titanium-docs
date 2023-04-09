---
title: Style and Conventions
weight: '60'
---

# Style and Conventions

* [Summary](#summary)

In this section, we'll examine the Titanium SDK recommended best-practices for coding style, including naming conventions, code formatting, and commenting.

## Language rules

Many references exist that describe JavaScript language rules to follow. We'll lay out a few of the most important here, then direct you to the [References](#references) section below.

* `var` – All variables should be explicitly declared using the `var` keyword. Omitting `var` places the variable in the global scope. [Read more](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=var#var)

* Semicolons – Always use semicolons to terminate statements. [Read more](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Semicolons#Semicolons)

* Use `this` with extreme care, as it sometimes doesn't refer to the object you expect. [Read more](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=this#this)

We have codified our set of internal formatting and linting rules for ESLint at our repository: [https://github.com/tidev/eslint-config-axway](https://github.com/tidev/eslint-config-axway)

This is the set of lint rules we apply to our own JavaScript source for any SDK-related NPM packages, CLI code, etc.

## Coding style best practices

### Naming conventions

#### Variable and function names

Variable names start with a category noun (lowercase) so that they are easier to categorize and associate with related variables.

**Variable examples**

```
personName, personAddress
personNameLast, personNameFirst
```

Function names follow a similar convention, though we start with a category verb (lowercase) and are often followed by an associated variable name (if any).

**Function examples**

```
getPersonName, setPersonAddress
driveCarBlue, stopCarRed
```

Both variables and functions (or properties and methods, respectively) start with a lowercase word so that they are easier to differentiate from major namespace objects or 'classes'.

::: warning ⚠️ Warning
Titanium SDK does not support the use of Hungarian Notation.
:::

#### Object and 'class' names

Major objects and class-like functions (constructors) follow a standard pattern of capitalized words. Though not necessarily a naming convention, 'class' names that end up rather large is an indicator that the 'class' is most likely designed to do too much. 'Class' names may also start with an abbreviation of a library.

**Examples**

```
Car, GarbageCollector
IKSystem, MCStyle
```

#### Namespace

Here, convention is similar to 'class' naming.

**Examples**

* App.UI.Widget

* App.Network.Request

::: warning ⚠️ Warning
'app.ui' should be 'App.UI'
:::

#### Factories

Factory functions are located within a major namespace object, start with 'create' and return an object.

**Examples**

```
createPhotoGallery
App.UI.createWidget
App.Network.createRequest
```

#### Operators

Type data and operators should always be separated by a single space.

**Examples**

```javascript
var nameFull = nameFirst + nameLast;
for (var i = 0, cl = content.length; i < cl; i++) {}
```

### Indentation

Both K&R/1TBS and Allman styles are acceptable. **_Consistency is most important and a combination is not to be used on the same project. Clean indentation is required._**

```
// K&R/1TBS Style
if (x < 10) {
  if (y > 10) {
    // do this
  }
} else {
  // do this
}
```

```
// Allman Style
if (x < 10)
{
  if (y > 10)
  {
    // do this
  }
}
else
{
  // do this
}

// but never do this within a function:
return
{
  foo: 'bar'
}
```

As noted, you should never put `return` on its own line followed by an object literal definition. Doing so will return an `undefined` value rather than the object. See [this blog post](http://encosia.com/in-javascript-curly-brace-placement-matters-an-example/) or [Crockford's JavaScript: The Good Parts](http://www.amazon.com/dp/0596517742/?tag=stackoverfl08-20) for more info.

### Primitive types

**Concatenation**
Strings concatenated using the + operator must always use a space be added before and after the + operator to improve readability:

```javascript
var someString = 'My name is ' + firstName + 'and I am a developer';
```

**Primitive type construction**
Do not use the primitive type object constructors unless you have a very clear reason for doing so.

```javascript
// Don't do this
var test = new String('My String');
```

### Control statements

Switch statements have a single space before the opening parenthesis of the conditional statement and also a single space after the closing parenthesis. Switch statement content is indented with one tab. Content in each case is indented one tab as well:

```
switch (someTest) {
    case 1:
        break;

    case 2:
        break;

    default:
        break;
}
```

### Comments and documentation

Single-line comments are required to reduce programmer error. However, specialized block commenting is preferred when documenting functions. Inline statement comments should be used at a minimum or not at all.

```javascript
// Calculate position using initial
// and offset x coordinates.
var finalPos = initPosX + offsetPosX;

/**
 * @param {String} customerName Customer's full name.
 */
function getCustomer(customerName) {}
```

## References and further reading

* [Douglas Crockford's JavaScript Code Conventions](http://javascript.crockford.com/code.html)

* [Google's JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

* [Axway Appcelerator's ESLint Configuration](https://github.com/tidev/eslint-config-axway)

## Summary

In this chapter, you learned the Appcelerator recommended best-practices for coding style, including naming conventions, code formatting, and commenting.
