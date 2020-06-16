---
title: Adding new Troubleshooting Options
weight: '50'
---

# Adding new Troubleshooting Options

Studio provides a sophisticated mechanism for allowing users to turn on and off various bits of logging in their code. Please see [Debugging Studio](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Debugging_Studio/) for details on the user interactions.

## Logging

The com.aptana.core.IdeLog class contains a variety of methods allowing the developer to write out information to the log file, and allow the user to filter exactly what they wish to see.

At the simplest, the user can take a slider and switch debugging from Errors, to Errors + Warnings, to Errors + Warnings + Info messages. This will work, but the user may quickly be overwhelmed with wading through a large set of "Info" messages. This is where component-level debugging comes in.

We create the notion of "Debug Scopes" which allows the user to more precisely filter the list of items that they see in the log file. To enable, a user selects the "Debug specific components" checkbox, and then selects the items in the list that apply.

::: warning ⚠️ Warning
The log file is a poorly-discoverable option for the end user and directing the user to the log file should be seen as a method of last resort. It is, however, very useful to us when debugging, but please be careful when logging items under the **ERROR** severity. That is a true, blocker/critical error. We can always ask the user to modify the severity slider for log info, and capture the more detailed information as necessary.
:::

## Logging Best Practices

* **ERROR** means a show-stopper error that deserves a bug report. If it's not that important, it's a **WARNING**

* **WARNING** means items of interest that may be the source of a problem, or issues that should be taken care of eventually

* **INFO** means anything useful during debugging

If the error is caused by a configuration issue in Studio, the UI should present the problem and offer ways to help the user solve the problem, one of which may be pointing them to documentation. This is independent of what is logged to the log file.

The error message in the log file should be descriptive enough that the user could reasonably file a bug and we could understand the context. **e.getLocalizedMessage() is rarely the right message to display.**

::: tip
* If the user is **not** in "Specific components" mode, all components are logged, regardless of scope, but filtered by severity slider

* If a user **is** in "Specific components" mode only components where the scope is null or matches the toggled options will log, filtered by severity slider

* If a user is in **debug mode** (-debug, tracing tab in run configurations), those settings override the "Specific components" setting. If desired, the user can then later turn on those specific options manually while in the process of debugging by using the "Troubleshooting" page.
:::

## Scopes

A scope is of the form:

PLUGIN\_ID + "/debug" + name\_of\_scope

Performance-related debug options may also be created, though they don't currently work in the Troubleshooting tab. They exhibit the form:

PLUGIN\_ID + "/perf" + name\_of\_scope

::: tip 💡 Hint
We use the term "scope" a bit loosely here, as the scopes don't quite match the form of other scopes across Studio. However, to maintain compatibility with existing Eclipse infrastructure, we use the same form as they suggest
:::

### To create a scope:

1. Create a new .options file at the root of your plugin (if one does not exist already)

2. Edit build.properties to ensure the .options file is included as part of the build

3. Edit the file to add a line such as:

    ```
    com.aptana.core/debug/logger=true
    ```

4. The initial default value of true/false is not relevant here--when enabling a scope, we default to true

5. Create a new Interface of the form I\*DebugScopes in the main package of your plugin, where \* is derived from the name of the plugin. See [here](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Source_Code_Conventions/) for naming convention:

    ```
    package com.aptana.core;
    /**
     * A interface to capture the various scopes available during debugging. These need to match the items in the .options
     * file at the root of the plugin
     *
     * @author Ingo Muschenetz
     */
    public interface ICoreDebugScopes
    {
      /**
       * Items related to the logging process
       */
      String LOGGER = CorePlugin.PLUGIN_ID + "/debug/logger"; //$NON-NLS-1$
    }
    ```

### Using a Scope

In your code, call the scope above by using a log method of the form:

```
IdeLog.logInfo(CorePlugin.getDefault(), "My info message", ICoreDebugScopes.LOGGER);
```

If you need to test if logging is enabled before compiling an errors sting (say there are performance considerations involved), you can test using IdeLog.isOutputEnabled(). An example:

```
IdeLog.isOutputEnabled(ScriptingActivator.getDefault(), IdeLog.StatusLevel.INFO,
        ICoreDebugScopes.SHOW_ELEMENT_REGISTRATION)
```

There are also severity-specific versions, such as isInfoEnabled(), isWarningEnabled(), etc...

## Enabling Logging

1. Open the **Preferences > Studio > Troubleshooting** page

2. Slide the severity slider to the desired level

3. Click "specific component" checkbox

4. Find the scope in the list and click to check it

## Debugging Logging

The com.aptana.core plugin contains a debug scope for logging itself. Enable "com.aptana.core/debug/logger" to see messages written out to the log file. It will indicate if the message wasn't written because of a filtered severity level association, or a filtered scope setting.

## Error Messages

### SC100: Error 1

This is an error message detailing something has seriously gone wrong with your application.

### SC200: Error 2

This is a different error message indicating something else has gone wrong.
