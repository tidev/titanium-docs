---
title: PyDev Code Analysis
weight: '20'
---

# PyDev Code Analysis

## PyDev Code Analysis

Code analysis provides error finding in python programs. It finds common errors such as undefined tokens, duplicated signatures, and warns about things such as unused variables or unused imports.

**PyDev** can currently find:

* Undefined variables

* Undefined variable from import

* Unused variables

* Unused imports

* Unused wild imports

* Duplicated signatures

* Import redefinition

* Unresolved imports

* No 'self' token declared in a class method

* Mixing indentation with tabs and spaces

* Bad indentation (incorrect number of spaces when indenting).

**Advantages** of the **PyDev Code Analysis**

* It can analyze your modules **while you are coding**, and not just when you have the module saved in your disk.

* It is **'very' fast** when compared to current alternatives.

::: warning ⚠️ Warning
You may still configure PyDev to analyze your code only when you save a file if you want.
:::
::: warning ⚠️ Warning
You have to disable PyLint manually if you don't want to use it anymore.
:::
::: warning ⚠️ Warning
If you want information on how to configure PyLint, you can check [PyDev PyLint](#undefined).
:::

## Configuring it

PyDev allows you to tweak-around the code analysis settings to suit your coding-style. To do that, go to: window > preferences > PyDev > Code Analysis. The image below shows it...

![analysis_prefs](./analysis_prefs.png)

Its options should be self-explanatory, so, if you have some doubt, please drop a note in the PyDev forum.

## Seeing the output

The output is shown as error markers in the editor itself (you may hover over it to see the description).

![code_analysis1](./code_analysis1.png)

You may also view the output in the 'problems view':

![code_analysis_problems](./code_analysis_problems.png)

## Important notes to effectively use code-analysis

::: danger ❗️ Warning
The undefined variable errors produced are used as an input for a [content assistant](#undefined) that allows you to fix it. Check the [PyDev Content Assistants](#undefined) page for more information on that (it also explains how you can give 'notes' to the code analysis so that it ignores some error or warning).
:::
::: danger ❗️ Warning
You are advised to leave the 'auto-build' turned on (in the menu: **project > build automatically**). If you, however, want to leave it off, you have to remember to make a build when you want your changes analyzed.
:::
::: danger ❗️ Warning
When you change the interpreter or change your python path, your files are not automatically analyzed. If you want them analyzed after that, you have to manually do a 'clear' on the projects you want to be analyzed (in the menu: **project > clean...**).
:::

## Passing info to code-analysis

Currently, code-analysis does lots of analysis so that invalid signs are not raised, but some signs are nearly impossible to detect when doing static analysis, so, in some cases, some flags may be added to the code to give more info to the code-analysis and make it behave better.

Currently, the supported flags are:

**Flag: @DynamicAttrs**
**Location:** Should be added anywhere within a class docstring
**Description:** Used to indicate that a class has dynamic attributes (so, code analysis won't complain about undefined variables when accessing any attribute from that class.

**Example:**

```
class Struct:
    '''Attributes passed in constructor.
    *@DynamicAttrs*
    '''
    def __init__(self, *entries):
        self.__dict__.update(entries)
```
