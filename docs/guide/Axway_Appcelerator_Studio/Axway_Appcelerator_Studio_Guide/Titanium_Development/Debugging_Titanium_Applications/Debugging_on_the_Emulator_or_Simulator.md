---
title: Debugging on the Emulator or Simulator
weight: '10'
---

# Debugging on the Emulator or Simulator

This document describes how to debug Titanium applications using an Emulator or Simulator.

## To Debug on Android Emulator or iOS Simulator

1. Create a new project (or import an existing one).

2. Open up your project's `app.js` file by expanding "Resources" and double clicking on the filename.

3. Set some breakpoints in your app.js by double clicking in the left margin of the text editor (See [Adding a breakpoint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/)).

4. Make sure your project is selected in the **Project Explorer** view.

5. In the global tool bar, select **Debug** from the **Launch Mode** drop-down list.

6. Select the Android emulator or iOS simulator you want to launch your project on in the **Target** drop-down list.

7. Click the **Launch** button.

8. When Studio prompts you to switch to the **Debug** perspective, click **Yes**.

Any breakpoints you set should be hit when the app loads (or if they are in event listeners or separate files, when those execute). Some other things you should be able to do:

* Edit variables by clicking their values while inside a breakpoint.

* Add expressions to the **Expressions** view to see the value of free form JavaScript code (See [Using the Expressions View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Expressions_View/)).

* Set conditions on breakpoints by going to the "Breakpoints" view, right clicking on the breakpoint, clicking on "Properties", and hit the checkmark next to "Enable Condition".

* Click on various frames in the stack trace to see values of other variables in your call stack (See [Using the Debug View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Debug_View/)).

## To Debug a Specific Run Configuration

By specifying a run configuration, you can choose the iOS version of the emulator or simulator to test in, the screen size, and other options.

1. Make sure your project is selected in the **Project Explorer** view.

2. In the global tool bar, select **Debug** from the **Launch Mode** drop-down list.

3. Select **Debug Configurations...** from the **Target** drop-down list.

4. Select the OS or SDK version and device type or screen size you want to run on.

5. Select a logging level. Log messages are only generated for the selected level and higher. For example, if **Info** is selected, no **Debug** level messages are generated.

6. Click **Debug** to launch the debug session.

## Related Topics

* [Debugging Titanium Applications](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/)

    * [Debugging on Android Devices](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_Android_Devices/)

    * [Debugging on iOS Devices](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_iOS_Devices/)

* [About the Debug perspective](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/)

    * [Using the Debug View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Debug_View/)

    * [Using the Variables View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Variables_View/)

    * [Using the Console View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Using_the_Console_View/)

    * [Using the Breakpoints View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Breakpoints_View/)

    * [Using the Expressions View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Expressions_View/)

* [Stepping into and over functions](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Stepping_into_and_over_functions/)

* [Adding a breakpoint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/)
