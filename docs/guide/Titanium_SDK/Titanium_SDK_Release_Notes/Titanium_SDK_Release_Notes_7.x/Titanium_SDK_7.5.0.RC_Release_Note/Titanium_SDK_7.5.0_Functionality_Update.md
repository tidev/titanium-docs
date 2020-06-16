---
title: Titanium SDK 7.5.0 Functionality Update
weight: '10'
---

# Titanium SDK 7.5.0 Functionality Update

## Functionality Update

Generally speaking, CommonJS modules expect to have their own scope, to export their objects, values, and functions.

Prior to SDK 7.5.0, the app.js loading on all platforms did not adhere to that expectation and would assign any top-level variables to the global object. Furthermore, Alloy relied on this implicit assignment and it's possible your apps may rely on this behavior too. Why? We're moving towards a self-contained app.js scope as well and as a result any assignments to global properties and/or variables should be done explicitly from now on.

As a consequence of this, if we detect that your app might be using this, then we will log a warning during the build process.

This change does not affect the usage of Alloy.Globals.

## When

From **SDK 7.5.0** and onward, during the build process, we provide an **automatic assignment of top-level variables in app.js** to the global scope to maintain backwards compatibility.

This backwards compatibility feature will be removed in **SDK 9.0.0**.

## Example

Currently, in an app.js a variable declared like `const labelText = 'Titanium Rocks!';` will be added to the global scope.

If you know your code requires this variable to be accessible throughout the app, you can assign it `global.labelText = 'Titanium Rocks!';` to allow this global variable.
