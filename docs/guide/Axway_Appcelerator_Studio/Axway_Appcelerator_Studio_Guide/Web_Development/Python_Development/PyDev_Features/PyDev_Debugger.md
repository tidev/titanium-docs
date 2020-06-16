---
title: PyDev Debugger
weight: '80'
---

# PyDev Debugger

This section is targetted at explaining how to use the debugger. If you want more details on how to use the remote debugger, please check the [Remote Debugger page](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_Remote_Debugger/).

Ok, probably the first thing you'll want to do is: add a breakpoint to some file and then run the file (and wait for it to hit the breakpoint). To do that, let's start with the example below:

![debugger1](./debugger1.png)

**Image:** mod1.py

The first thing we'll want to do is add a breakpoint. Let's do that in line 5 (print i). There are two ways of adding a breakpoint:

* Double-clicking the left ruler

* Typing **Ctrl+F10** to open the context menu (see image below)

![debugger2](./debugger2.png)

**Image:** Context-menu

If everything goes ok, you'll have the breakpoint shown in your sidebar (as below).

![debugger3](./debugger3.png)

**Image:** Breakpoint added

::: warning ⚠️ Warning
If you are putting the breakpoint in an external file (for example, some file in the site-packages), the left ruler will not appear, so you'll not see the breakpoint. That's an Eclipse bug in version 3.1. It appears to be fixed for Eclipse 3.2, but as Eclipse 3.2 currently only has only 'development' releases, it is unsupported.
:::

Now, to run that file, you can right-click the file and choose to debug the file as a 'python run'.

::: warning ⚠️ Warning
If you want to re-run the last executed file, you can click **F11** to debug it.
:::

![debugger4](./debugger4.png)

**Image:** Running the file in the debugger

When it hits the breakpoint, it will ask you to go to the debug perspective (you should say YES to this dialog).

![debugger5](./debugger5.png)

**Image:** Go to perspective dialog

This perspective has the actions needed for debugging and allows you to see the variables and evaluate expressions.

![debugger6](./debugger6.png)

**Image:** Debug perspective

* **1\. Stack view**: You can see the variables in previous stacks by clicking on the stack you want to see.

* **2\. Variables view**: It allows you to see the globals and locals for the selected stack.

* **3\. Breakpoints view**: Selecting this tab, you can see the breakpoints available and enable/disable any breakpoint.

* **4\. Editor**: Shows the code and highlights the line that is about to be executed.

* **5\. Console**: When you run a file through the PyDev debugger, the first thing that appears is a 'PyDev debugger' string, to indicate that you're running the file through the debugger.

Now, the basic things you can do in the debugger have some keybindings:

* Step in: **F5**

* Step over: **F6**

* Step out: **F7**

* Resume: **F8**

And you can also evaluate some expressions or make the breakpoint a conditional breakpoint. We'll see how this works below.

## Evaluating some expression

To evaluate some expression, you can select the piece of code you want to evaluate, right-click it, and select 'watch'.

![debugger7](./debugger7.png)

**Image:** Evaluating an expression

Doing so will open a new view that allows you to view the result of evaluating that piece of code in the current context. It allows you to edit some existing watch, add a new one, or remove an existing (right-clicking it provides all those actions).

![debugger8](./debugger8.png)

**Image:** Evaluate Expression view

## Conditional breakpoints

To make some breakpoint a 'conditional breakpoint', you have to go to some line that already has a breakpoint, type **Ctrl+F10**, and select **breakpoint properties**.

![debugger9](./debugger9.png)

**Image:** Adding a condition to a breakpoint

Doing that will give you the following screen:

![debugger10](./debugger10.png)

**Image:** Breakpoint Properties

On this screen, you can enable some condition...

![debugger11](./debugger11.png)

**Image:** Enabling some condition

So, now, if you resume execution, it will only hit that breakpoint again when the condition is evaluated to True.

## What more?

Now, on to the [Remote Debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_Remote_Debugger/) and the [Debug Console](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_Debug_Console/)...
