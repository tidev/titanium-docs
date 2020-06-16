---
title: Launch Actions
weight: '30'
---

# Launch Actions

## Requirements

The examples in this page use the _**Prototype**_ library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Description

These set of actions can:

1. Retrieve information from the Studio regarding the available launch shortcuts (types).

2. Invoke an available launch on a specific project and mode.

## Invocation

This command is executed immediately in a synchronous way for the retrieval of the launch information, and execute asynchronously for the launch itself.

## Get launch types

The following _dispatch_ call will get a _Map_ of all the available launch type IDs for a given project name and launch mode:

```javascript
var launchTypes = dispatch($H({
  controller: 'portal.launch',
  action: "getLaunchTypes",
  args: {
    "project": "MyProject",
    "mode": "run"
  }
}).toJSON()).evalJSON();
```

**Conditions:**

1. The project must be accessible for a successful retrieval of the mapping.

2. The mode can _only_ be one of: _'run', 'debug' or 'profile'_

The returned value is a _Map_ between launch type IDs and their descriptive name.
That way, it's possible to render the same string the Studio display when a user right click a project and select _'Run As -> ...'_.
The returned type ID should later be used with the _**launch**_ command-action.

## Launching a project

The following _dispatch_ call will launch a specified project.

```javascript
var result = dispatch($H({
  controller: 'portal.launch',
  action: "launch",
  args: {
    "project": "MyProject",
    "mode": "run",
    "type": "com.aptana.launch.type.id"
  }
}).toJSON());
```

**Conditions:**

1. The project must be accessible for a successful retrieval of the mapping.

2. The mode can _only_ be one of: _'run', 'debug' or 'profile'_

3. The _type_ must be one that match a type that is returned with the _getLaunchTypes_ call.

The _result_ field indicate "OK" or "ERROR". In case of an "OK", a launch will start in a Job.

## Sample of use

An extensive example exists at the _**[studio3-sdk](https://github.com/aptana/studio3-sdk)**_ repository (_launch.js_)
