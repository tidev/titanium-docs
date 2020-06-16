---
title: Updating the Current Version
weight: '20'
---

# Updating the Current Version

## Updating the current version

Studio automatically checks for updates and will notify users of updates in a bubble on the bottom right-hand corner of the IDE.

You can also manually check for updates within Studio by choosing **Check for Appcelerator Updates** from the **Help** menu.

If there are none available, Studio will display a "No updates were found" message.

1. From the **Help** menu, select **Check for Appcelerator Updates**.

2. If updates are available, the Update Manager will list them.

3. Check the updates you wish to install and click **Next**.

4. Review the updates and click **Next**.

5. Choose the option for **I accept the terms of the license agreements** and click **Finish**.

6. Once the update is complete, you will be prompted to restart Studio for the changes to be applied.

::: warning ⚠️ Warning
Note about upgrading to Studio 5.1.0: You cannot update to Studio 5.1.0.

* With Appcelerator Studio 5.1.0 release, we have upgraded the Eclipse core from 4.4 to 4.7. This update brings a different directory structure to Studio for MacOS users.

* Due to several internal changes, it is not possible to update from Studio 5.0.0 to 5.1.0. Users are advised to download and install a fresh copy of Studio 5.1.0 installer directly for both Windows and MacOS. Please review [Uninstalling Studio](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Updating_Studio/Uninstalling_Studio/) for removing Studio (as necessary for your setup).

* You are advised to use the existing workspace directory when launching Studio 5.1.0 to get your old studio projects
:::

## Turn on automatic updates

If you installed Studio as plugins into Eclipse, the automatic update option would be turned off by default. To turn it on:

1. Open the **Preferences** window.

    * Windows Users: Go to **Window** > **Preferences**

    * Mac Users: Go to **Eclipse** > **Preferences**

2. Expand **Install/Update** and select **Automatic Updates**.

3. Check **Automatically find new updates and notify me**.
