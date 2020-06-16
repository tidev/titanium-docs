---
title: Errors Building Titanium Projects
weight: '50'
---

# Errors Building Titanium Projects

## Overview

Errors while building a Titanium project are usually due to configuration issues. The most common problems and possible solutions are posted here.

## Run/Debug icons are greyed out

This occurs when a project isn't recognized as a Titanium project. You can check whether the project has the correct type by looking at the project folder in the **Navigator** or **Project Explorer** view. If the type is set correctly, the folder should have an "M" icon (for Mobile) or a "D" icon (for Desktop). If the icon is missing, the project type is set incorrectly.

1. Follow the steps in [Changing Your Project Type](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Working_with_Projects/Changing_Your_Project_Type/), choosing the settings for Titanium Mobile or Titanium Desktop.

2. After changing the project type, you may need to restart Studio.

## Build error in console output

Sometimes your project fails to build, but it's not clear if it's an issue with Studio, or perhaps there is a bug in the SDK. To isolate this problem, you can try building from the command line using the exact same parameters as Studio.

1. Open the Studio **Preferences** dialog and navigate to **Studio > Troubleshooting**.

    1. Push the slider all the way to the right to "All"

    2. Check on "debug specific components"

    3. Check on "com.aptana.core/debug/shell"

2. Save and exit the preference menu

3. Re-run the build. View the Studio log file (**Help > Studio > View Log file**)

4. You should see an entry like:

    ```
    !ENTRY com.aptana.core 1 0 2011-10-26 06:54:16.525
    !MESSAGE (Build 3.0.4.qualifier) [INFO] com.aptana.core/debug/shell Running process:
    Process: "/usr/bin/python" "/Library/Application Support/Titanium/mobilesdk/osx/1.7.2/iphone/builder.py" "simulator" "4.3" "/Users/ingo/Documents/Aptana Studio 3 Workspace/testmobil" "com.app" "testmobil" "universal" "iphone" ""
    Working directory: null
    Environment: null
    ```

5. Open a terminal window and paste in the first line (the whole line, starting with the reference to Python), as shown below:

    ![Screen_Shot_2011-10-26_at_6.57.37_AM](./Screen_Shot_2011-10-26_at_6.57.37_AM.png)

Does the process give the same error?

## Build error: No such file or directory

This can be caused by a few different issues:

1. You are running an incompatible version of XCode. Upgrade to the latest version.

2. You have not correctly installed the Java JDK.

## Install Error: INSTALL\_FAILED\_MISSING\_SHARED\_LIBRARY

When launching an Android application on the emulator, you may run into the following error:

```
[ERROR] Failed installing com.appcelerator.titanium:   pkg: /data/local/tmp/app.apk
Failure [INSTALL_FAILED_MISSING_SHARED_LIBRARY]
```

There are a few possible fixes.

1. Check that your launch configuration uses the _'Google APIs'_ Android version (e.g. 'Google APIs Android 2.2').

2. Kill the emulator (_adb_) process, and relaunch the application through your launch-configurations.

## Xcode not installed

Studio reports that Xcode is not installed, even though you believe it is. This appears to be caused by a bad install of Xcode. Uninstalling and reinstalling Xcode has fixed the issue in every case so far.

You can double check the install location of Xcode by typing the following in Terminal:

```
xcode-select -print-path
```

Which should print something like '/Developer'

## The directory ... contains 2 projects

This can happen when renaming an application. To fix this, delete the contents of **build/iphone** and re-build.
