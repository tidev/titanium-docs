---
title: Using the Breakpoints View
weight: '10'
---

# Using the Breakpoints View

This page describes how to use the Breakpoints View that is part of the Debug perspective.

## Introduction

The Breakpoints View allows you to work with breakpoints that you have added to your JavaScript code. See [Adding a breakpoint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/) if you need help setting up a breakpoint. Breakpoints can help you determine the value or type of a variable or other useful information for an exact point in your JavaScript code.

## Instructions

This section describes how to perform common tasks to work with breakpoints.

### Setting the hit count for a breakpoint

Setting the hit count for a breakpoint will automatically suspend the execution of a thread after the breakpoint is "hit" the specified number of times. This is helpful if you have set a breakpoint inside of a loop structure.

To set the hit count for a breakpoint:

1. Set up a breakpoint in your code (see [Adding a breakpoint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/)).

2. In the Breakpoints View, right-click the breakpoint and select **Hit Count...** from the context menu to open a **Set Breakpoint Hit Count** prompt.

3. In the **Set Breakpoint Hit Count** prompt, type the number of times that you want the code to execute through the breakpoint before suspending the code.

4. Make sure that the **Enable Hit Count** box is checked.

5. Click **OK**.

6. Click the **Resume** button ![IconResume](./IconResume.png) to resume the execution of your code.

### Making a breakpoint conditional

You might want to make a breakpoint conditional if you only want your JavaScript code to break on that point if certain conditions are met.

To make a breakpoint conditional:

1. In the Breakpoints View, right-click the breakpoint and select **Properties** from the context menu to open a **Properties** window.

2. On the **Properties** window, check the **Enable Condition** box.

3. In the large text box below **Enable Condition**, type the condition for the breakpoint.

4. Click **OK**.

5. Click the **Resume** button ![IconResume](./IconResume.png) to resume the execution of your code.

### Related Topics

* [Adding a breakpoint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/)

* [About the Debug perspective](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/)

* [Using the Debug View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Debug_View/)

* [Using the Variables View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Variables_View/)

* [Using the Expressions View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Expressions_View/)
