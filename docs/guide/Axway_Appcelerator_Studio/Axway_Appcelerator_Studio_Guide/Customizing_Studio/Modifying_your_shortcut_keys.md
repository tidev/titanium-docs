---
title: Modifying your shortcut keys
weight: '60'
---

# Modifying your shortcut keys

## Overview

Many hotkeys (or key shortcuts) in Studio use Eclipse's key mappings by default. You can modify these settings on your own if you would like your hotkeys to be similar to Emacs, Dreamweaver, Visual Studio, or another IDE. Some commands are contributed via Rubles and must be edited using a different mechanism, outlined at the bottom of the page.

You can also export your keybindings to a file and import them into Aptana. This is useful if you want to share keybinding settings with another user or if you are running multiple instances of Aptana and want to use the same key settings for each instance.

## Instructions (Eclipse-based Commands)

This section explains how to modify your shortcut keys and how to export and import your keybinding settings.

### Modifying your key settings

To modify your key settings:

1. From the **Window** menu, select **Preferences** to open the **Preferences** window.

2. On the Preferences tree on the left, expand **General > Keys** to change your key settings (shown below):

    ![Key_window_3](./Key_window_3.jpg)
3. In the **Keys** window, select the Command or Binding that you want to modify, which auto-populates the existing key setting for you in the **Name** and **Binding** fields (shown below).

    ![Keys_2](./Keys_2.jpg)
4. In the **Binding** field, you can re-map the key sequence. For example, you can change the current **Ctrl+F6** shortcut, which tabs to the next open Editor tab, to **Ctrl+tab**.

    1. In the **Binding** field, place your cursor on the current key setting (for example, **Ctrl+F6**), and press the backspace key to delete the old shortcut.

    2. Type the key sequence for the new shortcut (for example, **Ctrl+tab**) to create the new shortcut.

5. Click the **OK** button to apply and save your changes.
    Aptana retains the new key mappings that you set.

### Exporting and importing your keybindings

::: warning ⚠️ Warning
To be able to export your keybindings, you will need to have made at least one modification to your key preferences (see directions above).
:::

To export your keybindings:

1. From the **File** menu, select **Export...** to open the **Export** window.

2. On the **Export** window, expand the **General** tab, select **Preferences**, and click the **Next** button to go to the **Export Preferences** screen.

3. On the **Export Preferences** screen, choose the **Choose specific preferences to export** option.

4. From the **Preferences** list, check the **Keys Preferences** box.

5. To the right of the **To preference file** field, click the **Browse** button to browse to the location where you want to save the preferences file for your keybindings.

6. Click the **Finish** button.
    Aptana saves your keybindings as an .epf file.

If you want to import keybindings, you will need to import an .epf file. This can be a file that you created using the "export" instructions, or a file that someone else created for key preferences.

To import keybindings:

1. From the **File** menu, select **Import...** to open the **Import** window.

2. On the **Import** window, expand the **General** tab, select **Preferences**, and click the **Next** button to go to the **Import Preferences** screen.

3. To the right of the **From preference file** field, click the **Browse** button, and browse to the .epf file containing the key preferences that you want.

4. On the **Preferences** list, check the box next to **Key Preferences**. (This will automatically choose the **Choose specific preferences to import** option for you.)

5. Click the **Finish** button.
    Aptana imports the keybindings from the preference file that you specified.

## Instructions (Ruble-based Commands)

Rubles do not currently allow associated key commands to be changed using the regular Eclipse mechanism. In this case, you will need to edit the bundle directly.

### Modifying the Built-In Bundles

1. Find the bundle that contains the command you are interested in. If you don't know which command is the one you want to switch, use the menu item **Commands > Bundle Development > Show Command Bindings**

2. Select the menu item **Commands > Bundle Name > Edit this Bundle**. It will create a project in your workspace with the contents of that bundle.

3. Open up the bundle project, and find the command of interest under the "commands" folder. In general, the command file name will be reflective of the command in the menu.

4. Edit (or add) the key\_binding section as part of the command. If you need to use modifier keys, see the reference [Ruble Specification](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/) on how to specify keys such as Command, Shift, Option, and Control.

5. Restart Studio. Your new key bindings should be in effect.

### Example

As an example, we modify the keys for commenting code:

1. Select the menu "Commands > Source > Edit this bundle."

2. Open the file Source / commands / toggle\_comment.rb.

    ```
    command 'Comment Line / Selection' do | cmd |
       cmd.key_binding = 'M1+K'
       cmd.output = :insert_as_snippet
       cmd.input = :selection, :line
       ...
    ```

3. Edit the key\_bindings property to use the new key command.

4. Save the file and restart Studio. The command should work as expected.
