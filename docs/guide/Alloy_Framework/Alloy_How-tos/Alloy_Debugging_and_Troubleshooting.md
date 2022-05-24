---
title: Alloy Debugging and Troubleshooting
weight: '20'
---

# Alloy Debugging and Troubleshooting

## Overview

This guide covers debugging and troubleshooting Alloy applications.

## Debugging

### Compiler error messages

The Alloy compiler generates error messages for syntax errors in the JavaScript, JSON, TSS and XML files. The error messages report the file, line and character position, and a description of the error.

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

### Getting help

Use the [Titanium Community Questions and Answers Forum](https://developer.axway.com/develop-apps#DevelopApps_Engage) to receive assistance from Titanium Community members or find an answer to a previously answered question. Enter 'alloy' as a tag and include the Alloy version as part of the platform information included in the question. To get the Alloy version, run the `alloy --version`command in a console.

## Submitting a Bug Report

Use [GitHub Issues](https://github.com/tidev/alloy/issues) to search for existing issues or submit a bug report. Select 'Alloy' as the component when submitting a Titanium Community JIRA ticket and include the Alloy version as part of the environment information. To get the Alloy version, run the `alloy --version`command in a console.

Refer to [How to Report a Bug or Make a Feature Request](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/How_to_Report_a_Bug_or_Make_a_Feature_Request/) for more information.
