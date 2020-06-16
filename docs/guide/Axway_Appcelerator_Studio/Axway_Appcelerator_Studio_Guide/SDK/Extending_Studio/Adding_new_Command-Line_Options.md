---
title: Adding new Command-Line Options
weight: '20'
---

# Adding new Command-Line Options

If you wish a user to have additional control over their environment, you can implement properties to modify the application's behavior from the command line or configuration files.

## Setting Properties

* Reference [Adding Command-Line Options](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/). These are all considered VM arguments.

* A full list of default Eclipse properties may be found [here](http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.isv/reference/misc/runtime-options.html).

## Creating a New Property

* Create a new Interface of the form I\*SystemProperties, where \* is derived from the name of the plugin. See [here](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Source_Code_Conventions/) for naming conventions

    ```
    package com.appcelerator.titanium.ui;

    /**
     * Various options that can be passed on the command line to control Studio behavior
     *
     * @author ingo
     */
    public interface ITitaniumUISystemProperties
    {
      /**
       * The url of the Titanium dashboard
       */
      public static String DASHBOARD_URL = "titanium.dashboardUrl"; //$NON-NLS-1$

    }
    ```

* Create a new string for the system property. Note the following naming convention:

    * titanium.camelCasedString for items in the Titanium set of plugins

    * studio.camelCasedName for items that affect the Aptana set of plugins

* Use EclipseUtils.isSystemPropertyEnabled() and EclipseUtils.getSystemProperty() to check if the specified option is defined, or the value in question
