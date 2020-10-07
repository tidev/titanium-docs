---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Titanium.yml
---
# Titanium

<TypeHeader/>

## Overview

The Titanium module provides the Titanium Mobile API, allowing developers to access native
features of each target environment. Currently, the Android and iOSenvironments are supported.

### Titanium Namespace

The complete Titanium API is accessible from the `Titanium` namespace but, for convenience and
brevity, the alias `Ti` is also provided. As the `Titanium` namespace is functionally-identical
to its `Ti` alias, it is always recommended to use `Ti` in your code.

For example, the following pairs of Titanium calls behave exactly the same.

``` js
Titanium.API.info('Hello Titanium!');
Ti.API.info('Hello Titanium!');

Titanium.Utils.sha256('Hello Titanium!');
Ti.Utils.sha256('Hello Titanium!');

Titanium.App.Properties.setString('hello_msg','Hello Titanium!');
Ti.App.Properties.setString('hello_msg','Hello Titanium!');

Titanium.Database.open('mydb');
Ti.Database.open('mydb');
```

### Global APIs

Titanium includes a number of built-in JavaScript objects that are not part of the Titanium
namespace, including String formatting, timers, and the CommonJS `require` function.
See [Global APIs](Global) for details.

<ApiDocs/>
