---
title: Titanium Modules Information
weight: '100'
---

# Titanium Modules Information

## Requirements

The examples in this page use the _**Prototype**_ library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Description

These set of actions can retrieve a Titanium Modules information from the Studio. The actions support both Mobile modules and Desktop modules.

## Invocation

This command is executed immediately in a synchronous way.

## Mobile Modules

The following _dispatch_ call will get the Titanium Mobile Modules information:

```
modulesInfo = dispatch($H({
  controller: 'portal.titanium.modules',
  action: "getMobileModules"
}).toJSON()).evalJSON();
```

The returned _mobules information_ JSON is a Map object that has two roots:

1. **global\_modules** - Holds the modules that were installed into the Titanium SDK folder (<sdk-dir>/modules).

2. **project\_modules** - Holds the modules that were installed into the opened _Titanium Mobile Projects_ in the workspace.

### Global Modules

As described above, the _Global Modules_ are the modules that were installed into the Titanium SDK modules directory.
The hash value for the **global\_modules** key holds an _array_ of module-descriptions. Each item in this array is a hash that holds the following information:

| key | description |
| --- | --- |
| name | The name of the module |
| platforms | The platforms that this module has support for (an array) |
| versions | The versions that this module has support for (an array) |
| type | The module-type ('_global_' or '_project_', and in this case - only '_global_') |

### Project's Modules

The Studio collects all the modules information from the _Titanium Mobile Projects_ in the workspace. Modules that were located under a _modules_ directory in a project are considered as installed-modules for that project.
The hash value for the **project\_modules** key holds a _hash_ that maps from a _project-name_ to an array of modules. Each module in that array holds the same information as described above, with the minor difference in the _'type'_ field.

### JSON Structure Illustration

Here is an illustration that describes the form of the returned JSON object.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083163/modules_json.png" alt="images/download/attachments/30083163/modules_json.png" class="confluence-embedded-image image-left"></p></td></tr></tbody></table>

### Installing a Module

You can download and install a Mobile Module by using the _'installModule'_ action.

```
dispatch($H({
    controller: 'portal.titanium.modules',
    action: "installModule",
    args: '["<url>", "<target>", "<project-name>"]'
}).toJSON());
```

The _"target"_ and the _"project-name"_ are optional arguments.
The 'target' can be one of _**global\_modules**_ or _**project\_modules**_.
When a _'global\_modules'_ string is passed in, there is no need for the last argument, and the module will be downloaded and installed into the global space (the Titanium SDK modules directory).
The _'project\_modules'_ argument required a third argument that specify the project name that the module will be deployed into.

When the given URL is null or empty, the Studio will display a module-deployment dialog that will allow the user to input a valid URL and select the deployment target. The the URL is the only argument given here, the Studio will display the same dialog, but this time without the URL field (just the deployment-target selection).

## Desktop Modules

The following _dispatch_ call will get the Titanium Desktop Modules information:

```
modulesInfo = dispatch($H({
  controller: 'portal.titanium.modules',
  action: "getDesktopModules"
}).toJSON()).evalJSON();
```

The returned _mobules information_ JSON is a Map object that holds the _versions_ of the installed modules as _keys_, and holds an array of _module-names_ as values.
For example:

```
{"1.1.0" : ["php", "ruby", "python", "javascript", "tiapp"...]}
```

## Sample of use

See _**[studio3-sdk](https://github.com/aptana/studio3-sdk)**_ repository (_modules.js_)
