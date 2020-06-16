---
title: Alloy Debugging and Troubleshooting
weight: '20'
---

# Alloy Debugging and Troubleshooting

## Overview

This guide covers debugging and troubleshooting Alloy applications.

## Debugging

### Studio Debugger

The Studio debugger can be utilized to debug your Alloy application. The Studio debugger allows you to set breakpoints in your code to pause your application before it executes a line and to examine variables and their values. Review [Debugging in Studio](/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Debugging_in_Studio/) for detailed information about using the debugger in Studio.

Create breakpoints in your Alloy Controllers or `alloy.js` file by double-clicking in the left margin on the left side of a line number to add or remove a breakpoint. A blue dot appears for your breakpoint. These breakpoints map to the code in the generated Titanium file located in the `Resources` directory.

Breakpoints set in the CommonJS modules and Alloy Model files in the `app` directory are ignored during debugging. To add breakpoints for these items, you need to add the breakpoints to the generated Titanium files created by the Alloy CLI. The CommonJS modules are copied to the `Resources` directory and the generated Alloy Model files are located in the `Resources/alloy/models` directory.

If your `Resources` folder is hidden:

1. In the  **Project Explorer** view, click the **View Menu** button (white triangle pointing down).

2. Select **Customize Views...**, then the **Available Customizations** dialog appears.

3. In the **Filters** tab, uncheck the **Appcelerator Resources Folder** checkbox.

4. Click the **OK** button. The `Resources` folder should appear.

Breakpoints set in the files in the `Resources` directory may be cleared or not mapped to the correct line number if you modify any of the files in the `app` directory. After your code has been compiled, confirm that the breakpoints set in the files in the `Resources`directory are still set and in the correct location (line number). If not, clear and reset your breakpoints, then rerun the project in debug mode.

When you are ready to debug your application:

1. In the **Project Explorer** view, make sure your project is selected.

2. In the global tool bar, select **Debug** from the **Launch Mode** drop-down list.

3. Select the device you want to launch your project on in the **Target** drop-down list.

4. If the **Launch Automatically** option is not enabled, click the **Launch** button.

5. Before the code starts to compile, a dialog appears asking to switch the perspective. Click the **Yes** button.

In the _Debug_ perspective, you can use the _Debug_ view to step into, pause or resume your code. While your code is paused, in the _Variables_ view, you can view your current variables and their values.

### Compiler error messages

The Alloy compiler generates error messages for syntax errors in the JavaScript, JSON, TSS and XML files. The error messages report the file, line and character position, and a description of the error.

In Studio, these error messages output to the Console View.

## Troubleshooting

### \[ERROR\] No app.js found. Ensure the app.js file exists in your project's Resources directory.

If p art of the contents of your `Resources` folder were deleted, run `alloy compile --config platform=<platform>` to regenerate the missing files.

### Android: Images, HTML pages and other assets do not display

If assets are being displayed for iOS and Mobile Web applications and not Android applications, the path to the asset needs to be preceded by a slash ('/'). The iOS and Mobile Web platform can accept relative and absolute paths, but the Android platform requires an absolute path.

### Android Runtime Error: Uncaught TypeError: Cannot call method xxx of undefined

1\. You might be trying to create an iOS-only Titanium object. Use the platform attribute in the view to enforce platform-specific objects.
2\. If the top-level UI component in your view has an assigned ID, that is, the id attribute in the XML markup is defined for that component, the controller cannot use `$.<controller_name>` to reference it. It needs to use the assigned ID.

### Android Runtime Error: Uncaught ReferenceError: Alloy is not defined

Non-controller JavaScript files are not automatically wrapped by Alloy. You need to require the 'alloy' module. See [Library Code](/guide/Alloy_Framework/Alloy_Guide/Alloy_Controllers/#LibraryCodeandCommonJSModules) for more information.

### iOS Application Error: invalid method (xxx) passed to UIModule (unknown file).

You might be trying to create an Android-only Titanium object. Use the platform attribute in the view to enforce platform-specific objects.

### iOS Application Error: undefined is not an object (evaluating $.xxx.open) (unknown file).

If the top-level UI component in your view has an assigned ID, that is, the id attribute in the XML markup is defined for that component, the controller cannot use `$.<controller_name>` to reference it. It needs to use the assigned ID.

### Mobile Web: Changes to code do not take effect

Mobile Web applications cannot be built in Studio, since Mobile Web does not support compiler plugins. If you are building a Mobile Web application using Alloy, you need to compile the code using the Alloy command-line interface:

```
$ alloy compile --config platform=mobileweb
```

### Mobile Web: \[ERROR\] alloy run not supported by mobileweb

Mobile Web applications cannot run from the command-line interface. Run the program from Studio.

### Studio: Unable to find alloy binary

There was probably an issue installing Alloy with Studio or the alloy binary is not in your PATH. Check to see if alloy is installed and is in your PATH (usually in '/usr/local/bin') or follow the [Manual Installation instructions](/guide/Alloy_Framework/Alloy_Getting_Started/#command-line-interface-installation) to install it.

### Getting help

Use the [Titanium Community Questions and Answers Forum](https://developer.axway.com/develop-apps#DevelopApps_Engage) to receive assistance from Titanium Community members or find an answer to a previously answered question. Enter 'alloy' as a tag and include the Alloy version as part of the platform information included in the question. To get the Alloy version, run the `alloy --version`command in a console.

## Submitting a Bug Report

Use [JIRA](http://jira.appcelerator.org/) to search for existing issues or submit a bug report. Select 'Alloy' as the component when submitting a Titanium Community JIRA ticket and include the Alloy version as part of the environment information. To get the Alloy version, run the `alloy --version`command in a console.

Refer to [How to Report a Bug or Make a Feature Request](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/How_to_Report_a_Bug_or_Make_a_Feature_Request/) for more information.
