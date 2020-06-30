---
title: PyDev Interpreter Configuration
weight: '20'
---

# PyDev Interpreter Configuration

## Configure Interpreter

After installing it, the first thing you must do is configure the **Python and Jython and IronPython** interpreter. To configure the interpreter:

1\. Go to: **window > preferences > PyDev > Interpreter - (Python/Jython/IronPython)**.

2\. Choose the interpreter you have installed on your computer (such as python.exe, jython.jar, or ipy.exe).

Note that the **Auto-Config** will try to find it in your PATH, but it can fail if it's not there (or if you want to configure a different interpreter).

On **Windows,** it'll also search the registry and provide a choice based on the multiple interpreters available on your computer (searching in the registry).

On **Mac**, usually, you can do a 'which python' to know where the python executable is located.

On **Mac** it's usually at someplace resembling the image below (so, if you want to configure a different version of the interpreter manually, that's where you'd want to search):

![interpreter_mac](./interpreter_mac.png)
3\. Select the paths that will be in your **SYSTEM PYTHONPATH**.

::: danger ❗️ Warning
Select only folders that will **NOT be used as source folders for any project** of yours (those should be later configured as source folders in the project).
:::
::: danger ❗️ IMPORTANT for Mac users
The Python version that usually ships with Mac doesn't seem to have the .py source files available, which are required for PyDev, so using a different interpreter is recommended (for example, download it from [http://python.org](http://python.org)). If you don't want to use a different interpreter, get the source files for the Python '/Lib' folder and add those to the system installation.
:::

After those steps, you should have a screen as presented below:

![interpreter](./interpreter.png)

## How to check if the information was correctly gotten

The **System libs** must contain at least the Lib and the Lib/site-packages directory.

The **Forced builtin libs** must contain the modules built into the interpreter (and others whose analysis should be done dynamically. See: [#Forced Builtins](#undefined)).

## What if it is not correct?

The most common error is having a problem in the environment variables used from the shell that spawned Eclipse in a way that, for some reason, when getting the variables of one interpreter, it gathers the info from another interpreter (thus mixing the interpreter and the actual libraries).

Usually running (from the command prompt) the file that gives that info for PyDev can help you discover the problem in your configuration (interpreterInfo.py):

That file is usually located at: eclipse\\plugins\\org.python.pydev\_$version$\\PySrc\\interpreterInfo.py, but it can be at other locations depending on how you installed it.

python.exe interpreterInfo.py

java.exe -cp c:\\path\\to\\jython.jar org.python.util.jython interpreterInfo.py

ipy.exe interpreterInfo.py

If you're unable to find out what's going on, please ask in the user's forum (giving the output obtained from executing interpreterInfo.py in your machine).

## What if I add something new in my System PYTHONPATH after configuring it?

If you add something to your python installation, you need to either
add it manually as a 'new folder' in the System PYTHONPATH (if it's still not under a folder in the PYTHONPATH)
or **(recommended) remove your interpreter and add it again**, then, press apply.

Note that if you added a library that's already under a folder in the PYTHONPATH, you have to at least go to
the interpreter preferences and press apply so that it clears its internal caches (after the configuration
is done, things are set in stone for PyDev)

## Libraries

The **System libs** are the libraries that will be added to the PYTHONPATH of any project that is using this interpreter.

For **Python and IronPython**, it's composed of **folders, zip files, and egg files**. Note that if dlls should be added to the PYTHONPATH, the folders containing those dlls should be added, and they must have the same name to be imported in the code (the case is important). For example, if you want to import iTextDll, it **must** be called iTextDll.dll (note that .pyd and .so extensions are also accepted).

For **Jython**, it's composed of **folders and jars**.

## Forced Builtins

The Forced builtin libs are the libraries that are built-in the interpreter, such as **\__builtin_\_, sha, and so forth** or libraries that should forcefully be analyzed through a shell (in other words, to analyze modules in this list, PyDev will spawn a shell and do a dir() on the module to get the available tokens for completions and code-analysis) – still, sometimes even that is not always possible, in which case, [#Predefined Completions](#undefined) may be used to let PyDev know about the structure of the code.

For **Python**, you should have around **50** entries.

For **Jython** around **30** entries.

For **IronPython** more than **100** entries. All the packages built into .NET should be included here – e.g.: Microsoft, Microsoft.Windows.Themes, System, System.IO, etc.

Additionally, you may add other libraries that you want to treat as builtins, such as **os, wxPython, OpenGL, etc**. This is very important because PyDev works on the java side only with static information, but some modules don't have much information when analyzed statically, so, PyDev creates a shell to get information on those. Another important thing is that they **must** be on your system python path (otherwise, the shell will be unable to get that information).

![interpreter_forced_builtins](./interpreter_forced_builtins.png)

## Predefined Completions

Predefined completions are completions acquired from sources that provide only the interfaces for a given Python module (with Python 3.0 syntax).

A predefined completion module may be created by having a module with the extension ".pypredef" with regular Python 3.0 contents, but with attributes having assigned to its type and methods having as the body a sole return statement – and the docstring may have anything.

Example of **my.source.module** (must be declared in the **my.source.module.pypredef** file):

```
MyConstantA = int
MyConstantB = int

class MyClass:

    instanceAttribute = QObject

    def __init__(self, parent=None):
        '''

        @type parent: QObject
        '''

    def registerTimer(interval, object):
        '''

        @type interval: int
        @type object: QObject
        '''
        return int
```

**Note 1**: the name of the file is the exact name of the module

**Note 2**: .pypredef files are not searched in subfolders

**Optionally a QScintilla .api file may be added**. When this is done, PyDev will try to create .pypredef files from that .api file and will add the folder containing those to the PYTHONPATH. Note that this conversion is still in beta, and the file may not be correctly generated, so, keep an eye for errors logged when a code-completion that would use those modules (while it will not fail, those completions won't be shown using the .pypredef files). In those situations, please create a bug report with the .api file that generated incorrect code.

![interpreter_predefined](./interpreter_predefined.png)

## Environment

The variables defined at the environment will be set as environment variables when running a script that uses the given interpreter (note that it can still be overridden in the run configuration)

## String substitution variables

Strings defined here may be used in:

* project configuration for source folders and external libraries

* launch configuration for the main module

They can be used in those places in the format: ${DECLARED\_VARIABLE}

## Cygwin users

PyDev currently has no support for Cygwin. Currently, you'll be able to configure the interpreter with Cygwin, but there are still other related problems (mostly on converting between windows and Cygwin paths as needed).
