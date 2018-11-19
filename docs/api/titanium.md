---
title: Titanium
sidebar: auto
---

<Breadcrumb/>

# Titanium

<ProxySummary/>

## Overview

The Titanium module provides the Titanium Mobile API, allowing developers to access native features of each target environment. Currently, the Android and iOS environments are supported.

### The Titanium global

The complete Titanium API is accessible from the `Titanium` namespace but, for convenience and brevity, the alias `Ti` is also provided. As the Titanium namespace is functionally-identical to its Ti alias, it is always recommended to use Ti in your code.

For example, the following pairs of Titanium calls behave exactly the same.

```js
Titanium.API.info('Hello Titanium!');
Ti.API.info('Hello Titanium!');

Titanium.Utils.sha256('Hello Titanium!');
Ti.Utils.sha256('Hello Titanium!');

Titanium.App.Properties.setString('hello_msg', 'Hello Titanium!');
Ti.App.Properties.setString('hello_msg', 'Hello Titanium!');

Titanium.Database.open('mydb');
Ti.Database.open('mydb');
```

### Other Global JavaScript APIs
Titanium includes a number of built-in JavaScript objects that are not part of the Titanium namespace, including JSON parsing, String formatting, timers, and the CommonJS require function. See [Global APIs](/api/global.md) for details.

<PropertyList/>
<MethodList/>