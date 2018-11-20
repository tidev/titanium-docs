---
title: Titanium.Proxy
breadcrumbLabel: Proxy
sidebar: auto
---

<Breadcrumb/>

# Titanium.Proxy

<ProxySummary/>

## Overview

On platforms that use native code (Android and iOS), the Proxy type represents a JavaScript wrapper or proxy around a native object. Setting or getting a property on a proxy object results in a method invokation on the native object. Likewise, calling a method on the proxy object results in a method invokation on the native object.

Some Titanium objects are createable: new instances of these objects can be created using factory methods. For example, a Window object can be created using the `Titanium.UI.createWindow` method.

In general, developers should avoid modifying the prototype of a Titanium object, or adding methods to a Titanium object. (Adding a simple property such as an ID value is generally OK.)

<ApiDocs/>