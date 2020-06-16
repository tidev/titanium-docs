---
title: Workbench Actions
weight: '140'
---

# Workbench Actions

## Requirements

The examples in this page use the _**Prototype**_ library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Invocation

This command is executed immediately in a synchronous way.

## Get the Active Perspective Information

To get information regarding the active perspective in the Studio, dispatch this command:

```javascript
var activePerspective = dispatch($H({
  controller: 'portal.workbench',
  action: "getActivePerspective"
}).toJSON());
```

The _activePerspective_ variable will hold a _Map_ that contains the following keys: _**label, description**_ and _**id**_.
