---
title: PyDev Running a program
weight: '60'
---

# PyDev Running a program

Ok, now that you're already up and running, let's **run a program from within Eclipse** with PyDev.

For that, we will extend the module we created in the previous chapter with the following program:

```
if __name__ == '__main__':
    print 'Hello World'
```

Then, to run the file, you can:

* Use a shortcut: **F9** to run based on the project configuration where the module is contained.

* Go to the menu: Alt + R + S + The number of the Run you wish (It can be Python, Jython, unit-test, and so forth).

    ::: warning ⚠️ Warning
    If you were using **unit-tests**, you could use: **Ctrl+F9** to run the unit-tests from the module (and even selecting which tests should be run).
    :::

::: warning ⚠️ Warning
External files may be launched, but an associated project must be available. So, a file may be dragged from the filesystem into Eclipse, and later, with the editor open, F9 may be pressed to run the file...It'll still ask for a project to resolve the PYTHONPATH and interpreter to be used (you can probably use any project you have that has the interpreter you want to use for the run or create a PyDev project as 'external\_projects' and bind those runs to it).– The configuration created may be changed later on in the menu: Run > Run configurations.
:::

![menu_run](./menu_run.png)
Doing so, the console should be brought forward with the output of the code (if you had some exception raised, clicking on it would bring you to the code in the stack-trace).

After the first run, if you type **Ctrl+F11**, the last file ran re-run. Or, if you type **F11**, a debug session is started with your last run. Let's test this...

::: warning ⚠️ Warning
This behavior changed in Eclipse 3.3 – but it's generally recommended to restore it in the preferences at **window > preferences > Run/Debug > Launching** and set the Launch Operation to **Always launch the previously launched application**. This tutorial will always consider this as the default option.
:::

First, you'll need to add a breakpoint in the "print 'Hello World'" line. To do so, go to the line and type **Ctrl+F10** and select 'Add breakpoint', then type **F11**. Doing so will trigger you to go to the 'debug perspective'. You should say **'yes'** to this dialog.

![perspective_to_debug](./perspective_to_debug.png)
After saying yes, you should be brought to the perspective below.

![debug_perspective](./debug_perspective.png)
In this perspective, the debug actions are activated and presented to you, so, you can use:

**F5**: Step into

**F6**: Step over

**F7**: Step return

**F8**: Resume execution

After the debug session, you can return to the previous perspective by typing **'Ctrl+F8'** (this keybinding iterates through the open perspectives)... And while we are at it, **'Ctrl+F7'** iterates through the views and **'Ctrl+F6'** iterates through the editors.
