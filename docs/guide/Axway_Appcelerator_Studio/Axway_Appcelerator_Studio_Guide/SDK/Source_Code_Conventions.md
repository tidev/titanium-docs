---
title: Source Code Conventions
weight: '50'
---

# Source Code Conventions

For those contributing to the Aptana source code base, we follow a few conventions.

## Code Submission Checklist

* License header at top of file

* Code passes all Checkstyle checks

* Code passes all PMD tests

* Code is formatted according to Aptana conventions

* Strings are externalized

* Code is spell-checked

* Code has class/method and field-level Java Docs for public and protected members

* There is at least one unit test for the checked-in code, preferably that does not need to run as a plugin.. Comments should be _relevant_

## Basic Coding Guidelines

::: tip 💡 Hint
Above all, the code should be **elegant**. It should be well-spaced and easy to follow.
:::

* There are no empty try/catch blocks

* Don't call abstract methods in constructors (See here for an explanation: [http://www.artima.com/forums/flat.jsp?forum=226&amp;thread=113723](http://www.artima.com/forums/flat.jsp?forum=226&thread=113723))

* Many of these rules are encapsulated by PMD tests

* Private variables may begin with an underscore, but we specifically do not follow the Eclipse 'f' prefix convention. You should be consistent within your class.

## Naming Conventions

* Interfaces begin with 'I'

* Plugin Activator names are derived from the plugin package name.

    1. Strip the first two segments from the plugin (generally "com.aptana" or "com.appcelerator" assuming a reverse domain name naming system)

    2. Initial case the rest of the segments

    3. Strip the periods

    4. Add the word "Plugin" at the end. Some examples:

        * **com.aptana.scripting** -> ScriptingPlugin

        * **com.appcelerator.titanium.branding** -> TitaniumBrandingPlugin

* Plugin-specific classes (like I\*SystemProperties, I\*DebugScopes, I\*PreferenceConstants) also follow the same convention for the creation of the \* section as plugin activators

    * **com.appcelerator.titanium.core** -> ITitaniumCoreSystemProperties

    * **com.aptana.editor.epl** -> IEditorEplDebugScopes

## License

Please ensure that the following header is at the top of each Studio file, or at least an equivalent header. We must have code which is EPL-compatible for the EPL plugins, and GPL compatable for all other Aptana plugins:

### GPL

```
/**
 * Aptana Studio
 * Copyright (c) 2005-2011 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the GNU Public License (GPL) v3 (with exceptions).
 * Please see the license.html included with this distribution for details.
 * Any modifications to this file must keep this entire header intact.
 */
```

### EPL

```
/**
 * Copyright (c) 2005-2011 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Eclipse Public License (EPL).
 * Please see the license.txt included with this distribution for details.
 * Any modifications to this file must keep this entire header intact.
 */
```

### Private Code

```
/**
 * Appcelerator Titanium Studio
 * Copyright (c) 2011 by Appcelerator, Inc. All Rights Reserved.
 * Proprietary and Confidential - This source code is not for redistribution
 */
```

## PMD

We use PMD to check code consistency.

1. Within Eclipse go to Help->Software Updates->Find and Install

2. Choose Search for new features to install and press Next

3. Create a New Remote Site...

4. Input a name to your liking (for instance PMD Plug-in) and input the following URL: [http://pmd.sf.net/eclipse](http://pmd.sf.net/eclipse)

5. Click your way through the following pages to install the plug-in.

For those interested, our PMD file is located at: [https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana\_pmd\_rules.xml](https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_pmd_rules.xml)

You will need to download that file, set PMD preferences, clear out the existing rule set, and import the new one from this file. You can then manually run PMD on a file or package from the right-click menu.

## Java Formatting

Our Java formatting conventions are relatively easy going, though we do add braces, always.

1. Download the file from [https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana\_java\_formatter\_preferences.xml](https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_java_formatter_preferences.xml)

2. Within Eclipse go to Window->Preferences->Java->Code Style->Formatter

3. Click on "Import..." and choose the file you just downloaded

## Externalized Strings

1. Right-click on a file, choose "Source", "Externalize Strings". Make sure the "Use Eclipse's String Mechanism" is checked. (See how this has been done this elsewhere, with a Messages class and a messages.properties file)

    1. This will require you to change the "Common Prefix". Just replace the '.' with a '_'. i.e. FileExplorerView. becomes FileExplorerView_

    2. You will need to manually rename the keys that are to be externalized from the auto-numbers it creates. Just type something useful, like a pascal-cased shorthand for the original string: "ThisIsAnErrorMessage".

2. Do the externalization per-package, not per-plugin.

    ::: danger ❗️ Warning
    **Make sure you add the messages.properties file to the build.properties file.** You want to make sure that message.properties file is included in the binary build.
    :::

3. Exclude _all_ strings in any unit testing plugins, or any case where it does not make sense to translate that piece of text.

    ::: danger ❗️ Warning
    **Use StringUtils.format() instead of "string " + variable.** Again, take a look at how we use this elsewhere. The easiest way to do this is to try and run the externalization wizard. Notice where you have "constructed" strings. Cancel out of the wizard, and then fix them. Then run the wizard again.
    :::

4. Make sure you add the messages.properties file to source control

5. Also ensure that you comment all the methods in the messages file to remove any generated warnings

## Unit Testing

1. Ensure that the current set of unit tests run before submitting your code, especially if it is a high-risk addition

2. Make sure you've added new unit tests for the new items you've added. If you can't unit test it, write a unit test for something else.
