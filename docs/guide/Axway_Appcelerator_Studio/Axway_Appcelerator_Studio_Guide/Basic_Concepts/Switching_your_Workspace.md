---
title: Switching your Workspace
weight: '60'
---

# Switching your Workspace

## Overview

If you need to create an additional workspace for your projects or need to access projects in a different workspace, you can switch your Studio workspace. A workspace is a folder in your file system where new projects are created and where your preferences are stored. When you switch workspaces, Studio will automatically close down and restart, so make sure that you have saved any work in your current workspace.

You can also modify your preferences so that Studio asks you to choose a workspace every time that you start the application.

## Finding your workspace from Studio

To find your workspace while you are working in Studio:

1. From the **File** menu, select **Switch Workspace > Other...** to open the **Workspace Launcher**.

2. In the **Workspace Launcher**, the path under "Workspace:" is the path to your workspace on disk.

3. Click **Cancel**.

## Switching your workspace from Studio

To switch your workspace while you are working in Studio:

1. From the **File** menu, select **Switch Workspace > Other...** to open the **Workspace Launcher**.

2. In the **Workspace Launcher**, browse to the workspace that you want to switch to.

3. Click **OK**.

Studio will shut down, restart, and open to the workspace that you specified.

## Changing your workspace preferences

To change your preferences so that Studio asks you to choose your workspace on startup:

1. From the **Window** menu, select **Preferences** to open the **Preferences** window.

2. On the **Preferences** tree on the left, expand **General**, then expand **Startup and Shutdown**, and select **Workspaces** to display your workspace preferences.

3. Check the box next to **Prompt for workspace on startup** if you want Studio to ask you to choose a workspace each time that you start the application.

4. Click **Apply** to save your changes.

5. Click **OK** to close the **Preferences** window.

::: warning ⚠️ Warning
On Mac OS, **Preferences** is found under the **Aptana Studio**/**Titanium Studio** or **Eclipse** menu.
:::

## Restoring preferences when switching workspaces

If you move your workspace folder, any changes made to preferences are lost but are easily restored by transferring the .metadata folder from your old workspace to the same place in your new workspace folder:

::: tip
\\Workspace\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings
:::
