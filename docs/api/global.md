---
metadataKey: Global
breadcrumbLabel: Global
sidebar: auto
---

# Global JavaScript APIs

<ProxySummary/>

## Overview

Titanium provides a number of global built-in objects, detailed below.

### JSON

Titanium provides a built-in [JSON](Global.JSON) object two functions, `parse` and `stringify`.

### String Utilities

Titanium includes several extra utility functions for formatting text, attached to the
global [String](Global.String) object.

### console

Titanium provides [console](Global.console) support familiar to many javascript developers
for logging at the toplevel, in addition to the <Titanium.API> logging facilities.

### Timers

Titanium has built-in support for one-off and repeating timers:

*    Use [setTimeout](Global.setTimeout) to start a one-off timer.

*    Use [setInterval](Global.setInterval) to start a repeating timer.

### Alert

Titanium has a built-in convenience function [alert](Global.alert) which can be used as an alias
for the [AlertDialog](Titanium.UI.AlertDialog) module.

### Locale

The `L` macro can also be used as an alias for the <Titanium.Locale.getString> method.

<ApiDocs/>
