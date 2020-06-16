---
title: Resources Actions
weight: '70'
---

# Resources Actions

## Requirements

The examples in this page use the _**Prototype**_ library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Description

These set of actions can retrieve various resources information from the Studio. At the moment it's pretty limited to listing projects, but more will be added in time.

## Invocation

This command is executed immediately in a synchronous way.

## Get all accessible project names

The following _dispatch_ call will get a names array of all the accessible (open and existing) project names:

```javascript
var allProjects = dispatch($H({
  controller: 'portal.resources',
  action: "getProjects"
}).toJSON()).evalJSON();
```

The returned value is an array of strings (names).
