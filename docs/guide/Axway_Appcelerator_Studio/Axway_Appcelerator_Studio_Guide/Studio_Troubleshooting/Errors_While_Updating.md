---
title: Errors While Updating
weight: '80'
---

# Errors While Updating

## Overview

Studio is built on top of the Eclipse update mechanism. While quite reliable, it can occasionally spit out a few strange errors. Here are some hints for solving an issues you may encounter while updating.

## Updating Studio

These are errors that occur when starting Studio and you see a pop-up yellow toast indicating "Updates Available" or you manually choose "Check for Updates" in the Help menu.

### No updates were found

If there is a new version of Studio available but your current Studio shows "No updates were found" when you select **Help > Check for Titanium Updates** or **Help > Check for Appcelerator Updates**, you could try the following:

1. Open the Studio **Preferences** dialog and navigate to **Install/Update > Available Software Sites** and make sure the appropriate "Release Updates" entry is checked and enabled for what you want to install.

2. Select the entry and click **Reload** to make sure it returns success.

3. Try **Help > Check for Titanium Updates** or **Help > Check for Appcelerator Updates** again.

Prior to Release 3.2.0, to check for update, select **Help > Check for Updates**.

### Conflicting dependency

If Studio failed to update due to a "Cannot complete the install because of a conflicting dependency" error, try running Studio with elevated privileges, i.e. as Administrator on Windows or using sudo on \*nix system, and then update again.

For more details on the issue, please see [https://bugs.eclipse.org/bugs/show\_bug.cgi?id=322477](https://bugs.eclipse.org/bugs/show_bug.cgi?id=322477).

It can also happen in a few other circumstances:

* If you have the standalone version installed and are trying to update using the plugin update URL.

* If you have the plugin version installed and are trying to update using the standalone update URL.

* If you previously installed PyDev and are trying to install Studio over the top of that.

In the first two cases, check your URL. In the last case, uninstall PyDev and install studio instead. It includes PyDev.

### Error while loading manipulator or Error locating companion launcher jar

There is an error with your .ini file.

1. Follow the instructions [here](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/) for adding a launcher argument.

2. Replace the following lines at the top of the file (we are replacing the 1.1.0 version with the 1.1.1 version):

    ::: tip
    \-startup
    ../../../plugins/org.eclipse.equinox.launcher\_1.1.1.R36x\_v20101122\_1400.jar
    :::

    Make sure that plugin exists in your plugins directory. If a different version exists, you may need to change the above line.

3. Save and restart.

### An error occurred while collecting items to be installed

If an update fails with an error similar to the following:

```
An error occurred while collecting items to be installed
session context was:(profile=AppceleratorProfile, phase=org.eclipse.equinox.internal.p2.engine.phases.Collect, operand=, action=).
No repository found containing
```

There are a few possibilities:

1. Studio is having difficulties reaching the remote server. This can happen if there are network issues or you are on an intermittent connection.

2. Studio has incorrectly cached some metadata from the update site. Follow the instructions above for "No updates were found"

3. Start updating from a different branch to the one that has failed, by switching the values in "Available Software Sites" (i.e. if on stable, update from nightly). Then stop the download before it completes, restore the initial software sites settings, and try updating from the desired site again.

### No Update URLs

If you should happen to find your update list without any URLs, you can re-enter them as below:

#### Titanium Studio

* Standalone version: [http://download.appcelerator.com/appcelerator/studio/standalone/update/stable/](http://download.appcelerator.com/appcelerator/studio/standalone/update/stable/)

#### Aptana Studio

* Eclipse plug-in version: [http://download.aptana.com/studio3/plugin/update/](http://download.aptana.com/studio3/plugin/update/)

* Standalone version: [http://download.aptana.com/studio3-rcp/plugin/update/](http://download.aptana.com/studio3-rcp/plugin/update/)

## Updating Titanium Components

These are errors that occur when starting Studio and you see a pop-up yellow toast indicating "SDK Updates Available" or you manually choose **Check for Titanium Updates** or **Check for Appcelerator Updates** in the **Help** menu.

### Unable to update to a released version

It may be that the update server is not serving the appropriate list of available files to you. To check:

1. Open a web browser

2. Paste in the url [https://api.appcelerator.net/p/v2/release-list?name=mobilesdk&v=](https://api.appcelerator.net/p/v2/release-list?name=mobilesdk&v=)`<version>`&limit=5&os=`<os>`, substituting your operating system value, and version of **Studio**with only the first three version specifiers

    * `<os>`: osx, win32

    * `<version>`: 2.0.1.2012042345 => 2.0.1

3. An example might be: [https://api.appcelerator.net/p/v2/release-list?name=mobilesdk&v=2.0.0&limit=5&os=osx](https://api.appcelerator.net/p/v2/release-list?name=mobilesdk&v=2.0.0&limit=5&os=osx)

4. You should see a list of releases

If the release you expect is not in not in that list:

* If it is, but Studio does not see it, first try restarting Studio.

* Studio will only automatically download the _latest_ release in that list. If the one you want is not the first item, you'll need to download it manually.

* If it is the latest item, and Studio still does not see it, [check the log file](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Accessing_the_Log_File/) for information on how to find that file and file a bug.

* If there is (or isn't) something in the log file [file a bug](http://jira.appcelerator.org).

### Prompted repeatedly to install the same NPM package

If you previously installed the non-GA versions of the NPM packages, you need to first uninstall these components before installing or updating.

To check the current versions run the following commands:

  `npm list -g titanium`npm list -g alloy

If either package has a version number ending in `-alpha`, `-beta`, or `-cr`, you should uninstall the package manually. To uninstall these packages:

  `npm remove -g titanium  npm remove -g alloy`

::: warning ⚠️ Warning
You may need to use `sudo` before these terminal commands on OSX.
:::

You will be prompted to install these components when you restart Studio or to manually check for updates, from the **Help** menu, select **Check for Titanium Updates** or **Check for Appcelerator Updates**.

If you should run into any issues, run `npm cache clean` and then retry the steps above.

If Studio prompts you to install the same Node.js packages (CLI, ACS, Alloy, etc.), despite the fact that they appear to install successfully each time, Studio may be checking a different installation path than the one you have designated to install your NPM packages. To resolve this issue, add the environment variable NPM\_CONFIG\_PREFIX. For example, on Mac OS X, add the following to your Bash profile (`~/.bash_profile`):

```
export NPM_CONFIG_PREFIX = <PATH_TO_NPM>
```

For Windows, follow the directions from [Configuring Environment Variables on Windows](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#configuring-environment-variables-on-windows) to add the environment variable.
