---
title: Adding Command-Line Options
weight: '20'
---

# Adding Command-Line Options

## Overview

Several tools and techniques require you to either pass options on the command line or edit your .ini file. This gives you instructions for both techniques.

## Finding Your INI Configuration File

1. Locate the INI configuration file:

    1. **Mac OS X**:

        1. Navigate to the `/Applications/Appcelerator Studio` folder in Finder.

        2. Right-click (or control-click) on `AppceleratorStudio.app` and choose Show package contents.

        3. In the new Finder window, navigate to `Contents/MacOS`.

    2. **Windows**: Navigate to the location of your Studio application (likely under `C:\Users\username\AppData\Local\Appcelerator Studio`).

2. Open `AppceleratorStudio.ini.`

3. Edit the options as desired.

4. Save and close the file.

::: warning ⚠️ Warning
You can follow the same procedures on Eclipse. The folder structure will be identical, but the file to edit is **eclipse.ini**.
:::

## VM args vs. Launcher Arguments

When working with command-line arguments, they are generally split into two camps: launcher arguments and VM (virtual machine) arguments. The Launcher arguments are arguments that come from the following [list](http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.isv/reference/misc/runtime-options.html). VM arguments are arguments that will be passed to Studio or the Java virtual machine.

In general, launcher arguments control options about how Studio starts and some initial configuration options. VM arguments control how Studio behaves when it is running.

## Specifying Launcher Arguments

Launcher arguments can be passed on the command line, like so:

```
TitaniumStudio.exe -debug
```

or they can appear in the .ini file:

```
-debug
--launcher.defaultAction
openFile
-vmargs
-Xms40m
```

::: warning ⚠️ Warning
Note that launcher arguments always appear first, before the vmargs section. No matter which type of item you are specifying, generally the value goes on the _next_ line (see launcher.defaultAction above)
:::

## Specifying VM Arguments

Virtual machine arguments may be specified in one of two ways:

Use -DpropName=propValue as an argument to the Java Virtual Machine on the command line, like:

```
TitaniumStudio.exe -vmargs -DpropName=propValue
```

Set the property in question to the desired value in the config.ini file:

```
--launcher.defaultAction
openFile
-vmargs
-DpropName=propValue
```
