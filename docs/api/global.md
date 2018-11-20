---
title: Global APIs
sidebar: auto
metadataKey: Global
---

<Breadcrumb/>

# Global JavaScript APIs

The APIs that reside in the global scope, which may be called without a namespace prefix.

## Overview

Titanium provides a number of global built-in objects, detailed below.

### console

Titanium provides [console](global/console.md) support familiar to many javascript developers for logging at the toplevel, in addition to the <Titanium.API> logging facilities.

### alert

Titanium has a built-in convenience function [alert](global/alert.md) which can be used as an alias for the [AlertDialog](titanium/ui/alertdialog) module.

### Timers

Titanium has built-in support for one-off and repeating timers:
* Use [setTimeout](global.md#settimeout) to start a one-off timer.
* Use  [setInterval](global.md#setinterval) to start a repeating timer.

### JSON

Titanium provides a built-in [JSON](global/json.md) object two functions, parse and stringify.

### String Utilities

Titanium includes several extra utility functions for formatting text, attached to the global [String](global/string.md) object.

### Locale alias

The `L` macro can also be used as an alias for the [`Titanium.Locale.getString`](titanium/locale.md#getstring) method.

<ApiDocs/>