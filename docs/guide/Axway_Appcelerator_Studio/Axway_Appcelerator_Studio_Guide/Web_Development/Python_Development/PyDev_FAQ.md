---
title: PyDev FAQ
weight: '50'
---

# PyDev FAQ

## How do I Report a BUG?

The place to search and report BUGS is at [http://sourceforge.net/tracker/?group\_id=85796&atid=577329](http://sourceforge.net/tracker/?group_id=85796&atid=577329).

When reporting a bug, the following information must be given:

* System (for example, Windows XP)

* Eclipse version (for example, 3.5)

* PyDev version (for example, 1.5.1)

* PyDev **error log** (if any): go to **window** \> **show view** \> **other** > **PDE Runtime** \> **Error log**. (if you have the SDK installed, otherwise, you have to find the log file at `your_workspace/.metadata/.log`)

* Eclipse install location (e.g. `D:\eclipse_3\352\eclipse`)

* Project location where the bug appears (e.g. `D:\eclipse\workspace\my project`)

* What were you doing when the bug appeared

::: danger ❗️ Warning
If you have a bug where there's a **halting condition**, it's important to give the information on the available threads when that happens and whether there's a deadlock.
:::

To get that info, start eclipse with the **java executable (not javaw)** and add the **\-Dcom.sun.management.jmxremote** flag to vmargs (note that the sun java 1.6 should be used).

For example: `D:\bin\eclipse_350\eclipse.exe -vm D:\bin\jdk_1_6_11\bin\java.exe -vmargs -Dcom.sun.management.jmxremote`

Now, open up jconsole (for example, `D:\bin\jdk_1_6_11\bin\jconsole.exe`) and press 'detect deadlock'. If a deadlock is found, paste the info on the deadlocked threads, and that should be enough.

If no deadlock is found, the bug should have the info on all the threads running attached to it (below are instructions on how to get that info -- as it's too troublesome to pass every thread in jconsole copying it).

If you're on Windows, press **Ctrl** + **Break** to get a list of all the running threads (which should be attached to the bug). You may have to increase the buffer of the console to get all info (in the console open the properties menu (Alt + Space), select the 'properties', and in 'screen buffer size: height' raise it to something as high as 9999, and then press Ctrl + Break).

::: warning ⚠️ Warning
The [Users Forum](http://sourceforge.net/forum/forum.php?forum_id=293649) may be used for some doubts, but if you have a bug, that's not the place to go (even though it might be useful searching it to see if what you have is not really a bug or if someone has already asked about it).
:::

## How do I Report a Feature Request?

Report a feature request to [feature tracker at SourceForge](https://sourceforge.net/p/pydev/feature-requests/).

## I have some doubts I couldn't find in the FAQ, what do I do?

You can check the [Users Forum](http://sourceforge.net/forum/forum.php?forum_id=293649) for some doubts, but please, try to find what you're looking for on the homepage first.

## How do I get started with PyDev?

Check the getting started manual at [PyDev Getting Started](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Getting_Started/).

Also, there are some videos available at [http://www.youtube.com/user/pydev](http://www.youtube.com/user/pydev), which may help you in getting started.

## Can I have Eclipse installed anywhere to use PyDev?

Yes (note that some previous versions had a bug in which it didn't work if the Eclipse installation had spaces in the path).

## How do I import existing projects/sources into PyDev?

If the project was already in Eclipse (in other words, has the `.project` and `.pydevproject` files), use File > Import > Existing Projects into Workspace.

If the project never had the `.project` nor `.pydevproject` files, there are 2 choices:

**Option 1**:

Go through the File > New > PyDev Project wizard and select as the directory with your sources.

**Option 2**:

Create the `.project` and `.pydevproject` files from the template below and use File > Import > Existing Projects into Workspace to import it. Note that this option is more a reference for people that want to automate creating multiple projects at once.

The`.project` file contents (must replace the **MyProject** with the project name):

```xml
<projectDescription>
    <name>MyProject</name>
    <comment></comment>
    <projects>
    </projects>
    <buildSpec>
        <buildCommand>
            <name>org.python.pydev.PyDevBuilder</name>
            <arguments>
            </arguments>
        </buildCommand>
    </buildSpec>
    <natures>
        <nature>org.python.pydev.pythonNature</nature>
    </natures>
</projectDescription>
```

The`.pydevproject` file contents (must replace the path (**/MyProject/src**) with the actual folders to be in the PYTHONPATH):

```xml
<?eclipse-pydev version="1.0"?>
<pydev_project>
    <pydev_property name="org.python.pydev.PYTHON_PROJECT_INTERPRETER">Default</pydev_property>
    <pydev_property name="org.python.pydev.PYTHON_PROJECT_VERSION">python 2.7</pydev_property>
    <pydev_variables_property name="org.python.pydev.PROJECT_VARIABLE_SUBSTITUTION">
    </pydev_variables_property>
    <pydev_pathproperty name="org.python.pydev.PROJECT_SOURCE_PATH">
        <path>/MyProject/src</path>
    </pydev_pathproperty>
</pydev_project>
```

How do I import existing projects/sources for a Django project into PyDev?

Follow the same steps in the FAQ above to import a PyDev project, then right-click the project > PyDev > Set as Django project and add 2 String substitution variables (on right click project > properties > PyDev PYTHONPATH)

**DJANGO\_MANAGE\_LOCATION** - the relative path to `manage.py`. For example: **src/my\_project/manage.py**
**DJANGO\_SETTINGS\_MODULE** - the name of the settings module. For example: **my\_project.settings**

::: warning ⚠️ Warning
If the `.pydevproject` file was created, those values could already be added to it in the entry `org.python.pydev.PROJECT_VARIABLE_SUBSTITUTION`:

```xml
<pydev_variables_property name="org.python.pydev.PROJECT_VARIABLE_SUBSTITUTION">
    <key>DJANGO_MANAGE_LOCATION</key>
    <value>src/my_project/manage.py</value>
    <key>DJANGO_SETTINGS_MODULE</key>
    <value>my_project.settings</value>
</pydev_variables_property>
```
:::

## How do I configure my PYTHONPATH?

Please refer to the Getting Started Guide at [PyDev Getting Started](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Getting_Started/) for up-to-date information on how to correctly install and configure your PYTHONPATH.

## When I do a code-completion, PyDev hangs, what can I do?

PyDev does most of its things on the java side, but some information can only be retrieved from the python side (mainly builtins). To get that info, PyDev creates a shell and communicates with it through sockets.

The main problems when that happens are:

* There's a firewall blocking the communication to the shell

    * To enable it, execute: `echo 0 > /proc/sys/net/ipv6/bindv6only`

* The timeout to connect is too small.

    * This depends upon the "Timeout to connect to shell" in the code-completion preferences (window > preferences > PyDev > Code completion)

If nothing works, please report a bug (also, check if there is anything on the error log (window > show view > PDE Runtime > Error log) and on the eclipse `.log`, which is located at the .metadata folder of the workspace location.

## Why raw\_input() / input() does not work correctly in PyDev?

The eclipse console is not an exact copy of a shell... one of the changes is that when you press `<ENTER>` in a shell, it may give you a **\\r, \\n** or **\\r\\n** as an end-line char, depending on your platform. Python does not expect this. From the docs, it says that it will remove the last **\\n** (checked-in version 2.4), but, in some platforms, that will leave a **\\r** there. This means that the **raw\_input()** should usually be used as `raw_input().replace('\r', '')`, and `input()` should be changed for: `eval(raw_input().replace('\r', ''))`.

## My todo-tasks are not showing, is there something wrong?

Check the [tasks](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_Tasks/) page for info on tasks.

## Some keybindings Ctrl+\[0-9\] don't work under Ubuntu. What can I do about it?

That's a known bug in Eclipse. You can see more details on and vote for it if you want it fixed at [https://bugs.eclipse.org/bugs/show\_bug.cgi?id=179628](https://bugs.eclipse.org/bugs/show_bug.cgi?id=179628).

And details at the PyDev bug tracker: [https://sourceforge.net/tracker/index.php?func=detail&aid=1595998&group\_id=85796&atid=577329](https://sourceforge.net/tracker/index.php?func=detail&aid=1595998&group_id=85796&atid=577329)

Basically, Ctrl + \[0-9\] does not work if a Ctrl + Shift + \[0-9\] is also set.

The proposed workaround until this is fixed using Ctrl +/ and Ctrl + \\ for comment/uncomment, which are set by default, and changing Ctrl + Shift + 4 to Ctrl + 6 or removing it altogether if you don't use it.

## I have a library installed, and PyDev does not find it

Problems have been reported on iOS platforms, and the main reason seems to be symlinks. PyDev will only find extensions that are 'really' below the python install directory. This happens because of the 'less common denominator', which in this case, is windows, does not have symlinks. A workaround to this problem includes manually adding the given folder installation to the python path or changing the installation of the package to be under the site-packages folder.

## What is that 'Forced builtin libs' in the Python Interpreters' preferences?

Some libraries once installed do not show in code completion because they do not have a corresponding module (such as \__builtin_\_ and datetime) or they do have a corresponding module, but it cannot be used in code completion because most of its information is only gotten at runtime (such as sys and os). For code completion to get its information, you have to manually add it to those libs (and by doing so, its information is gotten with a python shell).

## How do I configure a python shell for experimenting with Python?

PyDev has an interactive console you can use. See the [PyDev Interactive Console](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_Interactive_Console/).

## The PyDev builder is taking too much of my time, what can I do about it?

Well, if you have PyLint active, you can disable it, as it is the process that takes the most time when building.
Another alternative is disabling the builder altogether. To do it, you can go to window > preferences > PyDev > builder and disable it.

::: warning ⚠️ Warning
Disabling the builders may have many side-effects, such as code completion not working, pylint, tasks, and so forth. If you want it, you can disable it, but do it with care.
:::

## Why the PyDev properties do not show?

Probably you are in the JAVA package explorer or something similar. You have to use the default navigator so that it shows its properties.
Also, note that you have to open a python file with PyDev in the project before it appears in the properties, too (the project python nature only appears after you do that).

## Why did nothing show in the PyDev Package Explorer?

Usually, this means that you have some misconfiguration in the PyDev Package Explorer working set selection or filters.

::: warning ⚠️ Warning
You can access the PyDev Package Explorer menu, with Ctrl + F10 or by clicking in the triangle that's upside down in the PyDev Package Explorer.
:::

The usual checks are:

1. In the PyDev Package Explorer menu, the **top-level element** is pointing to working sets?

2. In the PyDev Package Explorer menu, customize the view, the content has both, PyDev Navigator Content and Resources checked?

3. In the PyDev Package Explorer menu, customize the view, is it possible that the filters selected are hiding all your elements?

If all of these are correct, please ask in the users forum, as it could be a bug (please check your error log and if there's something there, add it to your post -- see: How do I Report a Bug? (in the top of this FAQ) for details on getting the error log).

## I can see no new Python project; how am I supposed to use PyDev?

**UPDATE**: As of version 0.9.8.6, a new 'PyDev Project' was introduced, so you can already use the 'new PyDev project' (but the way described below will still work).

Well, you have to do a simple project and use create a simple file/folder to create python modules.

You may also have to associate the `*.py` with the PyDev editor (even though that is probably automatic).
Anyway, if you need it, go to window > preferences > workbench > file associations and associate `*.py` with PyDev.

Don't forget to put it into both of your `PYTHONPATHs` (environment and in the project properties).

## How do I run a module from within eclipse using PyDev (either Python or Jython)?

Go to the Run menu (Run > Run As > Python or Jython). If it is not available in your current eclipse perspective, you can enable it by going to window > customize perspective > commands and checking the "Launch" item (in this way, you can go only with the keyboard).

Another way to run a module is by right-clicking the module in the navigator and choosing python > run (when a .py file is selected).

## How do I know which is the command-line and PYTHONPATH used to make a python or Jython run?

If you are in doubt what is being passed to the run, you can go to the run menu (Run > Run...) and on the given run (python or Jython), click on 'See resulting command-line for the given parameters' and check the command-line, as well as the `PYTHONPATH` that will be used for the run.

## Code completion is not working correctly for some library

Well, code completion works by default by analyzing the source code, but, sometimes, most information is only really available at runtime (the os module and wxPython are good examples here). So, you can specify that you want to treat those as built-in libraries. For that, go to the python interpreters and add it as a 'forced builtin lib'. More information may be found at the faq:

'What is that 'Forced builtin libs' in the Python Interpreters preferences?'

## I can't make \_ builtins \_.xxx = something while debugging

The problem is that PyDev passes a dict as the \__builtins_\_ module to execfile while debugging (so, regular attribute access is not available on that object).

Use this:

```
import _builtin_
_builtin_.xxx = something
```

It's the same thing but works when debugging.

## PyLint is not working; what should I do?

1. Make sure that PyLint is correctly installed in your site-packages (try running it at least once on a command-line to make sure your installation is correct).

2. Check if your project and your python path are correctly configured. Pylint is only passed in files in the python path for a project. If any of those are not well configured, pylint won't work correctly.

3. If your installation is all ok, try reading the [PyLint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Features/PyDev_PyLint/) provided page to see if it is correctly configured in the eclipse side.

4. If everything fails, you can ask in the forum or submit a bug report for it (don't forget to add the following information: pylint installation path, pylint version, and the other information requested on the 'How do I Report a BUG?' faq.

## I have a CORBA program, and I cannot debug its methods, what can I do?

Thanks for Petru Lauric for the following explanation:

The ORB I use (omniORB) creates its worker threads inside the python world, whenever a python function is called via CORBA. These threads are not created by using the 'threading' module, so the PyDev debugger's trace function is not automatically set for the ORB worker threads.

The solution is to set the trace function for the ORB threads explicitly.

1. Open folder `[eclipse sdk path]\plugins\org.python.pydev.debug_0.9.8.4\pysrc`.

2. Remove the file called `pydevd.pyc`, make a backup copy of the file `pydevd.py`, and make this change to the `PyDB::run()` method from file `pydevd.py`:

    ```javascript
    ...
    if globals is None:
    ...
    globals = m._dict_
    #
    # Hack: keep a reference to the PyDev debugger's
    # trace function in a global variable. This can
    # be used by the debugged script to set up the
    # trace function for the ORB worker threads.
    #
    globals['pydev_hook'] = self.trace_dispatch
    #
    ...
    ```

3. Make changes similar to those below to your python app.

    * Note 1: the `pydev_hook` global variable will \*only\* exist in the global namespace of the "main" module of your app (the script launched by PyDev when you debug your app). Feel free to pass it as an argument to functions from other modules, if that's where you need to use it.

    * Note 2: the trace function for the ORB worker threads MUST be set before the ORB creates the first worker thread.

    1. Import this undocumented ORB function

        ```
        from omniORB import addWThreadHook
        ```

    2. Add this function:

        ```javascript
        def dbg_trace(flag=0, wt=None):
        """This function is called whenever the ORB creates a worker thread (e.g. when a client calls a CORBA interface of the engine). The ORB worker threads are not created with the functions from the 'threading' module so, if we want to debug them with PyDev, we need to "manually" set the trace function for them."""
        if flag == 0: # WTHREAD_CREATED
        sys.settrace(pydev_trace_func)
        ```

    3. Finally, make these changes:

        ```javascript
        try:
        # check if pydev_hook is defined
        hook = pydev_hook
        except:
        hook = None
        if hook is not None:
        # keep a copy of the pydev_hook in a global
        # variable, so that dbg_trace() can find it later
        # on
        global pydev_trace_func
        pydev_trace_func = pydev_hook
        # NOTE: the ORB will call dbg_trace each time it
        # creates a worker thread. The function below
        # MUST be used *before* the ORB creates the first
        # worker thread.
        addWThreadHook(dbg_trace)
        ```

## OK, I know that many features are available, but I don't know how I can access them through my keyboard!!

Please refer to [PyDev Keybindings](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Keybindings/) for up-to-date info on the most useful keybindings provided by PyDev and Eclipse.

## How do I uninstall PyDev

To uninstall, remove the `org.python.pydev*` from eclipse/plugins and eclipse/features, or you can go to help > software updates > manage configuration, choose the PyDev plugin and disable it (after that, to remove it completely, you must restart Eclipse and only then select it for uninstall). Note that this process is the same for any Eclipse plugin.
