---
title: PyDev Content Assistants
weight: '40'
---

# PyDev Content Assistants

## Content Assistants

Some content assistants to make your life easier...

They are ALL activated through **Ctrl+1**, but which one(s) will show depend on the context it is activated.

## Content assistants

### Make import for undefined token / Ignore error

Let's say that you have the code below and that the code-analysis has just seen that the 'xmlreader' token was undefined (this is important, as we cannot make this analysis before the token was generated). In this case, we have two options offered, one to fix that importing the token and another one saying that PyDev should ignore that error. The example below shows it in action:

![ctrl_1_fix_import1](./ctrl_1_fix_import1.png)

If we let the cursor at the undefined token line and press Ctrl+1, we get:

![ctrl_1_fix_import2](./ctrl_1_fix_import2.png)

**After** choosing the second import we have:

![ctrl_1_fix_import3](./ctrl_1_fix_import3.png)

Now, if we had chosen the third option (**@UndefinedVariable**), a note would have been entered in the code to warn PyDev to ignore that error, as pointed below...

![ctrl_1_ignoreerror](./ctrl_1_ignoreerror.png)

### Don't analyze module

PyDev can accept a 'note' to warn it not to make code-analysis at all in some modules. To do that, you can go to the first line of the module and press 'Ctrl+1' and choose the **@PydevCodeAnalysisIgnore** flag. Doing that will add a note in the code to warn that this module should not be analyzed by PyDev.

If you use automatically generated files, it might be useful to put that warning on those files, as it would not be useful to analyze those files. The example below shows the result of this action.

![ctrl_1_ignoremodule](./ctrl_1_ignoremodule.png)

**After** choosing it, we have:

![ctrl_1_ignoremodule2](./ctrl_1_ignoremodule2.png)

### Move import to global scope

**Before**

![ctrl_1_make_import](./ctrl_1_make_import.png)

**After**

![ctrl_1_compl_import](./ctrl_1_compl_import.png)

### Create docstring

::: warning ⚠️ Warning
Must be called in the 'def' line.
:::

**Before**

![ctrl_1_make_docstring](./ctrl_1_make_docstring.png)

**After**

![ctrl_1_compl_docstring](./ctrl_1_compl_docstring.png)

### Assign the result to a new local variable (or field)

**Before**

![ctrl_1_make_assign](./ctrl_1_make_assign.png)

**After**

![ctrl_1_compl_assign](./ctrl_1_compl_assign.png)

### Assign parameters to attributes

**Before**

![ctrl_1_assign_to_attribs](./ctrl_1_assign_to_attribs.png)

**After**

![ctrl_1_assign_to_attribs2](./ctrl_1_assign_to_attribs2.png)

### Surround code with try..except or try..finally

::: warning ⚠️ Warning
Must have some code selected.
:::

**Before**

![ctrl_1_make_try_except](./ctrl_1_make_try_except.png)

**After**

![ctrl_1_compl_try_except](./ctrl_1_compl_try_except.png)
