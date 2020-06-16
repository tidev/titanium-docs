---
title: Interactive Console
weight: '130'
---

# Interactive Console

::: warning ⚠️ Warning
From PyDev 2.2.2 onwards, if IPython (0.10 or 0.11) is found in the PYTHONPATH, PyDev will use it as the backend for the console.
:::

To use it, do **Ctrl+Alt+Enter** (while in the PyDev editor) to:

* Open a console if there's no open console

* Send the selected text to the console

* Make an execfile of the current editor in the console (if no text is selected), so that its symbols are available for further experimentation.

Alternatively, it can be initialized from the console view from the dropdown for a new console
(rightmost corner icon in the console view)

![start_console](./start_console.png)
Choose the console type – this will determine the PYTHONPATH and the interpreter that will be used in the console:

* only the PYTHONPATH for the current editor (gotten from the related project)

* PYTHONPATH containing all the paths from Python (for all the projects in the workspace)

* PYTHONPATH containing all the paths from Jython (for all the projects in the workspace)

![choose_console](./choose_console.png)
Code completion can be activated with Ctrl+Space (or the default keybinding in the target installation). All the features available for code completion in the editor are also available in the console (and they're controlled from the same place).

![code_completion](./code_completion.png)
Ctrl+1 can be used to make an assignment to a variable.

![ctrl_1](./ctrl_1.png)
Hovering over some elements in the console shows docstrings (or other suitable description if not available).

![hover](./hover.png)
Page up shows the history (multiple lines may be selected to be re-executed, and the field can be used to filter suitable lines – with wildcards).

![page_up](./page_up.png)
Hyperlinks are linked in tracebacks.

![hyperlink](./hyperlink.png)
The color, initial commands, and VM args for Jython can be configured in window > preferences > PyDev > interactive console.

![prefs](./prefs.png)
Other actions/features available:

* **Up / Down Arrows** cycles through the history (and uses the current text to match for the start of the history command)

* **Esc**: clears the current line

* Paste added directly to the command line

* Cut will only cut from the command line

* Copy does not get the prompt chars

* Home goes to first text char / prompt end/line start (and cycles again)

* The cursor automatically moved to the command line on key events

* Multiple views of the same console can be created

* Limitation: Output is not asynchronous (stdout and stderr are only shown after a new command is sent to the console)
