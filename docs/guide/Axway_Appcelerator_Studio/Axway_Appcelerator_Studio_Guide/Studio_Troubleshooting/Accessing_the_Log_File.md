---
title: Accessing the Log File
weight: '10'
---

# Accessing the Log File

## Overview

The Studio `.log` file records most application exceptions that occur while you are using the Studio application, and is helpful to the Studio development team in troubleshooting bugs that you may encounter during normal usage.

::: tip 💡 Hint
_Always_ file a Studio Log when reporting an issue in the bug tracker
:::

## Accessing the Log

You can access your log either through the **Help** menu in Studio or manually through the filesystem on your computer.

### Accessing the Log from Studio/Eclipse

In the Studio-specific submenu, navigate to **Help** > **Studio** \> **View Log File** to open the log file in an editor window, where you can then save to a separate file in order to attach it to a support ticket.

### Accessing the Log from the File System

Your current .log file is located in a .metadata folder in your current workspace directory. The following is the path if you are working on the default workspace.

* Windows XP: C:\\Documents and Settings\\username\\My Documents\\<Studio Workspace>\\.metadata\\.log

* Windows Vista/Windows 7: C:\\Users\\username\\Documents\\<Studio Workspace>\\.metadata\\.log

* Mac OS X: ~/Documents/<Studio Workspace>/.metadata/.log

## Diagnostic Test

In the Studio-specific submenu, navigate to **Help > Studio > Run Diagnostic Test** to run a set of tests on the system environment that will help diagnose the issues. You could then copy the content to a separate file and attach it to a support ticket.

## Mobile Projects

If you get a console error when building a project, the correct log to submit depends on the platform you are building. An example error:

```
Traceback (most recent call last):
  File "/Users/loganbest/Library/Application Support/Titanium/mobilesdk/osx/1.7.1/iphone/builder.py", line 1397, in <module>
    main(sys.argv)
  ...
```

### iOS

1. Inside Studio, open the **Project Explorer** view

2. Click the small down arrow in the upper-right-corner of the view

3. Select **Customize View**

4. Scroll down to the bottom of the **Filters** tab and uncheck **Appcelerator Build Folders** or **Titanium Build Folders**

You can now see the build folder inside your Titanium projects

1. Expand the **build/iphone/build** folder

2. Attach the **build.log** file, and the output from the console.

Once you have found the log file, you can reverse the above steps to hide the build folders once again.

### Android and other platforms

Submit the output from the console.

## JavaScript Web Debugger Log File

See [Accessing your debugger log](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Accessing_your_debugger_log/).
