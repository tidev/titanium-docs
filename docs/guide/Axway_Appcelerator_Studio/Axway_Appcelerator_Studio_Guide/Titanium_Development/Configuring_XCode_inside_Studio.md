---
title: Switch between Xcode 4.3 and other Xcode versions (Xcode 4.2 and lower)
weight: '90'
---

# Switch between Xcode 4.3 and other Xcode versions (Xcode 4.2 and lower)

Appcelerator Studio, and the Titanium CLI, uses the **xcode-select** command (typically found in /usr/bin/xcode-select) to retrieve the desired Xcode installation. If you have multiple Xcode installations and need to switch what version Studio uses, you use the same command to select the desired XCode version.

**To switch the Xcode version used by Studio**:

1. Open a Terminal window and execute the following command:

    ```bash
    sudo xcode-select -switch <xcode_folder_path>
    ```

    The **<xcode\_folder\_path>** is typically /Applications/Xcode.app/Contents/Developer for Xcode 4.3 and later (or /Developer or /Developer-x.x for Xcode 4.2).

2. In Studio, open the Studio Preferences and navigate to **Studio** > **Platforms** > **iOS.**

3. In the iOS section, click the **Refresh** button.

4. The newly specified Xcode folder path should be displayed.

You may need to restart Studio for your changes to take effect.
