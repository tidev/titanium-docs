---
title: PyDev Refactoring
weight: '200'
---

# PyDev Refactoring

Well, let's see how refactoring works... and let's make it by example.

As our 'base', we will use the example below:

![refactor_base](./refactor_base.png)

Features:

* Keybinding: **Alt+Shift+R**

* Supports **preview**

* Integrated into the editor (but not in the package explorer, so, it can rename a module, but only through an import to that module)

* Supports **undo/redo** in the workspace

* Rename class

* Rename method

* Rename attribute

* Rename imports

* Rename local variable

Let's say we want to rename our 'newVar', and call it 'renamedVar'. To do that, mark it and press **Alt+Shift+R** and set the name to 'renamedVar'.

![refactor_rename1](./refactor_rename1.png)
That would give us the following result:

![refactor_rename2](./refactor_rename2.png)

**Extracting a method**: Let's mark the '100+500' and press **Alt+Shift+M** (alternatively, you could use a context menu: press the right button and select: refactoring > Extract Method). And set the name of the new method to 'newMethod'.

![refactor_extract_method1](./refactor_extract_method1.png)
That would give us the following result:

![refactor_extract_method2](./refactor_extract_method2.png)

**Inlining a variable**: Let's say that we are still not satisfied with that; we wouldn't like that 'var' variable, so we want to remove the reference to it and call the method directly. To do that, mark the 'var' and press **Alt+Shift+I**.

![refactor_inline1](./refactor_inline1.png)
That would give us the following result:

![refactor_inline2](./refactor_inline2.png)

**Extracting a variable**: Ok, it just wasn't what we wanted, so, let's make the opposite refactoring, let's extract a variable from the self.newMethod() call. Mark it and press **Alt+Shift+L** and set the name to 'newVar'.

![refactor_extract_var1](./refactor_extract_var1.png)
That would give us the following result:

![refactor_extract_var2](./refactor_extract_var2.png)
And that's it for the refactoring... hope you enjoy it.
