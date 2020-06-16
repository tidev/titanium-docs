---
title: PyDev Debug Console
weight: '70'
---

# PyDev Debug Console

## Debug Console

In PyDev, once you hit a breakpoint, you can use the console for probing the program at the selected frame. The screenshot below shows it in action...

![console1](./console1.png)

**1**. Shows the selected frame. You may choose another frame to probe.
**2**. Shows the place where the debugger is currently suspended.
**3**. It allows you to enter statements to be evaluated by the debugger.

## Code completion in debug Console

From **version 1.6.0** onwards, code-completion can be used in that console (shows templates, common tokens, and the locals/globals from the selected frame).

Its preferences are shared with the default code completion preferences in PyDev > editor > code completion.

![console2](./console2.png)
**Update in 1.3.13**: the return of simple statements is printed automatically to the output (so, in the example, just typing the name of the variable 'a' in the prompt would already show its value in the output).

**Update in 1.6.0**: commands are evaluated on each new line unless the line starts with ' ' or '/t' or ends with ':' or '/' (so, for entering multi-line statements, the input must be entered properly respecting those limitations).

**Old (before 1.6.0)**: the command was only evaluated when an empty line was entered.
