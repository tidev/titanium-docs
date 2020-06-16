---
title: Errors While Starting Studio
weight: '70'
---

# Errors While Starting Studio

## Overview

Occasionally you may experience errors starting Studio. Here are some suggested solutions.

::: warning ⚠️ Warning
See [Switching your Workspace](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Switching_your_Workspace/) to help find your current workspace location
:::

## Workspace in use or cannot be created, choose a different one

This can happen as a result of an improper shutdown of Studio. To resolve the issue, you need to delete a .lock file.

1. Delete the file %WORKSPACE\_PATH%/.metadata/.lock, and restart Studio

## An Error Has Occurred

These are errors pop up a dialog box, asking you to look at a log file

### See the log file /Users/....

Open the log file at the specified location. If you see messages like:

```
org.osgi.framework.BundleException: Exception in org.eclipse.core.resources.ResourcesPlugin.start() of bundle org.eclipse.core.resources.
...
Caused by: org.eclipse.core.internal.dtree.ObjectNotFoundException: Tree element 'XXX' not found.
```

It is caused by [this](https://bugs.eclipse.org/bugs/show_bug.cgi?id=149121) bug in Eclipse, most likely due to a case where Studio quit or was closed unexpectedly, corrupting a particular file.

Steps to fix:

1. Copy your whole workspace first, so that you are not risking your original files when you attempt these steps

2. Delete the file %WORKSPACE\_PATH%/.metadata/.plugins/org.eclipse.core.resources/.snap, and restart Studio

This will start Studio, but your workspace will most likely be missing your projects. This is okay--you can quickly reimport them

1. File > Import > Existing Projects....

2. Select the workspace directory from above, and finish the wizard

## Launching the Studio with -clean

If Studio does not appear to work properly, you can try and launch it with a -clean option.

1. Follow the instructions [here](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/) for adding a launcher argument.

2. Add **\-clean** to the launch arguments for Studio or Eclipse.

## How to stop Studio from loading a problem file

A file might be causing trouble when Studio is restarted because it is very large or in some way corrupted. There are a couple of ways you could prevent Studio from loading the file.

* Rename the problem file. This means Studio can no longer find it and so will ignore the file on restart.

* Delete the <studio\_workspace>\\.metadata\\.plugins\\org.eclipse.ui.workbench\\workbench.xml file, where the state of workbench when exiting is saved. This means Studio will not preload any files that were open on the last exit.
