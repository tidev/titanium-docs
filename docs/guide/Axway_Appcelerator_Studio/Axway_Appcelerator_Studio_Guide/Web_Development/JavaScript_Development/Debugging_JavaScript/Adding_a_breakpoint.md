---
title: Adding a breakpoint
weight: '30'
---

# Adding a breakpoint

## Introduction

Add a breakpoint to your JavaScript code to stop the execution of your script at that exact point. Using breakpoints can help you determine the current value or type of a variable at that moment and other useful information.

You can either manually add a breakpoint to your code, or you can add an exception breakpoint to your code.

## Instructions

### Manually adding a breakpoint to your code

To manually add a breakpoint to your JavaScript code:

1. Start the debugger and switch to the Debug perspective. (See [Running the debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Running_the_debugger/) if you need help.)

2. Suspend the current JavaScript thread.

    1. In the Debug View, select the thread that you want to suspend.

    2. Click the **Suspend** button ![IconSuspend](./IconSuspend.png) to suspend the JavaScript code on the first executed line. While the thread is suspended, your web browser user interface will be completely disabled.

3. Add a breakpoint to your code.

    1. In the Editor or Outline View, navigate to the point in your code where you want to add a breakpoint.

    2. In the gray left margin of the Editor, double-click or right-click and select **Toggle Breakpoint** from the context menu (shown below).

        ![ToggleBreakpoint](./ToggleBreakpoint.png)
4. Click the Resume button ![IconResume](./IconResume.png) to resume the execution of your code. Your code will be suspended again when execution hits the breakpoint that you set up.

### Adding an exception breakpoint to your code

To add a breakpoint to your code so that execution automatically breaks on a certain type of exception:

1. Open the file with your script in the appropriate Editor.

2. From the **Run** menu, select **Add JavaScript Exception Breakpoint...** to open an **Add JavaScript Exception Breakpoint** pop-up window.

3. On the **Add JavaScript Exception Breakpoint** pop-up window, select the type of exception that you would like to break on.

4. Run the debugger (see [Running the debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Running_the_debugger/)) to debug your code.

## Related Topics

* [About the Debug perspective](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/)

* [Installing the JavaScript debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Installing_the_JavaScript_debugger/)

* [Running the debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Running_the_debugger/)

* [Stepping into and over functions](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Stepping_into_and_over_functions/)

* [Using the Console View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Using_the_Console_View/)
