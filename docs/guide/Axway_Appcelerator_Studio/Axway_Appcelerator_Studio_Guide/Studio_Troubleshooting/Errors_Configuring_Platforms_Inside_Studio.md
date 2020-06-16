---
title: Errors Configuring Platforms Inside Studio
weight: '120'
---

# Errors Configuring Platforms Inside Studio

## Overview

Errors while building a mobile project are usually due to configuration issues. The most common problems and possible solutions are posted here.

## iOS SDK version XXX not found

This will happen if you have upgraded your iOS SDKs, and the old one is not available. To fix:

1. Select **Run** \> **Run Configurations...** (you will get to the same spot if you choose **Debug Configurations...**).

2. Select the configuration for the project you are having an issue with.

3. Choose an available iOS SDK from the list.

4. Save and close the dialog.

## Could not locate the Android SDK at the given path

This usually appears inside the **Preference** dialog inside Studio. Studio runs a Python script to determine your current configuration. To diagnose the exact issue, please try the following:

1. Turn on debug logging: [Debugging Studio](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Debugging_Studio/), and enable specific component **com.aptana.core/debug/shell**.

2. Re-open the Preference dialog.

3. Open the Studio log file (**Help** \> **Studio** \> **View Log File**) and scroll to the end.

4. You should see a command line invocation of `avd.py`, for example:

    ```
    "/usr/bin/python" "/Library/Application Support/Titanium/mobilesdk/osx/1.8.0.1/android/avd.py" "/Users/username/Documents/android"
    ```

5. Copy and paste that complete command line into a terminal window and run it. Check the output. If it doesn't find minimum required Android SDK, the configuration will be marked as invalid.

It may be that you don't have an `avd.py` script at the location it's looking. To solve that, just install the latest [Continuous Build](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_SDK_Continuous_Builds/), ensuring that you choose the master branch from the drop-down menu of the download site, and restart Studio.

## iOS configuration issues

This usually appears inside the **Preference** dialog inside Studio. Studio runs some commands to determine your current configuration:

1. To determine the location of your xcode tooling, it runs `xcode-select --print-path`.

2. It then looks at `/Platforms/iPhoneSimulator.platform/Developer/SDKs` underneath that path for the SDK locations.

3. Currently, it expects to see _at least_ one iOS SDK of version greater than or equal to 4.2 and less than 5.1. You can have more installed than that, but you at least need one within that range.
