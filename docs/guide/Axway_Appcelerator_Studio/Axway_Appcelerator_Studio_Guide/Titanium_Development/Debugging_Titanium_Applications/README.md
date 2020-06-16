---
title: Debugging Titanium Applications
weight: '50'
---

# Debugging Titanium Applications

Debugging a Titanium project is much like debugging any other JavaScript project. When starting a debug session for a Titanium project, you can choose the platform and environment you want to debug on:

* Android Emulator

* Android Device

* iOS Simulator

* iOS Device

Debugging on the emulator or simulator requires less setup, but an emulator or simulator may not match the results on the actual device.

Once the debug session is initiated, you can use all of the standard JavaScript debugger views described in [About the Debug perspective](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/).

Currently, Mobile Web applications can't be debugged using Studio – you must use a browser with a built-in debugger (such as Chrome) or an add-on debugger (such as Firefox with Firebug).

::: warning ⚠️ LiveView and the Debugger
LiveView may cause conflicts with the Studio debugger, causing the debugger not suspend execution when breakpoints are encountered. When you are debugging, turn off LiveView.
:::

## Related Topics

* [Debugging on iOS Devices](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_iOS_Devices/)

* [Debugging on Android Devices](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_Android_Devices/)

* [Debugging on the Emulator or Simulator](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_the_Emulator_or_Simulator/)

* [About the Debug perspective](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/)

    * [Using the Debug View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Debug_View/)

    * [Using the Variables View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Variables_View/)

    * [Using the Console View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Using_the_Console_View/)

    * [Using the Breakpoints View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Breakpoints_View/)

    * [Using the Expressions View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Expressions_View/)

* [Stepping into and over functions](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Stepping_into_and_over_functions/)

* [Adding a breakpoint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/)
