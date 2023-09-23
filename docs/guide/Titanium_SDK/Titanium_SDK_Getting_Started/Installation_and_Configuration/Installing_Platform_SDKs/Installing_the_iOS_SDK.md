---
title: Installing the iOS SDK
weight: '20'
---

# Installing the iOS SDK

::: warning ⚠️ Warning
Due to Apple's terms and conditions, the iOS SDK may only be installed on Apple products, hence only instructions for installing to Apple's macOS operating system are provided here.
:::

## Overview

This guide describes where to obtain and how to install the Xcode developer tools including the iOS and watchOS SDKs.

## Compatibility and download

Titanium requires Xcode to be installed in order for you to develop iOS applications.

There are two ways to obtain Xcode, the application that installs and manages iOS SDKs:

1. Launch the _App Store_ application, found in the `Applications` folder, and search for and install "Xcode" (includes the stable iOS and watchOS SDKs).

2. Enroll with the Apple Developer website and browse the [iOS Developer Center](https://developer.apple.com/download/) page to manually download the installer application (includes all previously-released iOS SDKs and new Beta versions).

Both of the above options are free of charge, although may require credit card details to be entered. Since 2016, you can also test your apps on your device using the free Apple developer program. If you wish to deploy your applications to the App Store for production, however, you will need to become a member of the _iOS Developer Program_, by way of an annual subscription charge of $99 at the time of writing.

### Xcode

To develop for iOS, Titanium requires Apple's Xcode suite of tools.
For a list of supported version please refer to the [Titanium Compatibility Matrix](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/).


## Installation (iOS-only)

Note that the typical file system location of this software can be found in the [mac OS Software Locations](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables.html#macos-software-locations) section of these guides.

### Install Xcode

**To install the current version of Xcode**, use the Mac App Store:

1. Launch the **App Store** application from the _Applications_ folder

2. Search for "Xcode"

3. Click the **Free** button, then **Install App** button

The App Store starts the download and installation process.

**To install previous versions of Xcode**, download and run the installer application from [iOS Developer Center: Downloads for Apple Developers](https://developer.apple.com/download/more/).

1. Go to [https://developer.apple.com/download/more/](https://developer.apple.com/download/more/) (Requires an Apple Developer account)

2. Search for "Xcode"

3. Locate the Xcode version you want to install and click the link to start downloading it.

4. Once the download completes, launch the installer application and follow the directions.

### Launch Xcode

To confirm that Xcode has been installed correctly, launch it from _Applications._ When installing Xcode the first time, you are also prompted to accept the End User License Agreement (EULA) and are being asked to installed required components. These will be downloaded once accepted.

### Update Xcode using Xcode installer

When new versions of the SDK are released, launch the _App Store_ and click the **Updates** icon. If Xcode appears, click the **Update** button.

## Install the Command Line tools and previous simulators

The Xcode command-line tools are required for native add-on module development and recommended to be installed for mobile application development. You can either install the command-line tools from Xcode or by running the xcode-select command from a terminal.

To install the command-line tools or older simulator from Xcode:

1. Launch Xcode.

2. Select **Xcode** \> **Preferences.**

3. Select the **Components** icon and click the **Install** button next to the Command Line Tools item.

4. If desired, you can install older simulators.

To install the command-line tools from a terminal, run the following command under "sudo" permissions:

```bash
sudo xcode-select --install
```

## Select the active Xcode version

For systems with multiple Xcode versions installed, the current version can be selected by running `sudo xcode-select` at the command-line.

For example:

```bash
sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer/
```

## Configure the CLI

The CLI use the `xcode-select` command to obtain the location of the Xcode tool to use when building your iOS applications. Neither tool requires any additional configuration.

## Note for Mavericks (and later)

If you are using maxOS 10.9+ and packaging an iOS application to the iTune Stores, after the Xcode Organizer is launched, a dialog from your maxOS may open stating, 'UI element scripting is not enabled. Check "Enable access for assitive devices"'.

![Screen_Shot_2013-12-03_at_9.38.50_AM](./Screen_Shot_2013-12-03_at_9.38.50_AM.png)

This message is misleading as this was the name of the setting in previous versions of macOS, which is already enabled by default on the older versions.

On Mavericks and later, to fix this issue:

1. Open **System Preferences** from the Apple Menu.

2. Click **Security & Privacy**.

3. Click the **Privacy** tab.

4. If the dialog is locked (bottom-left corner), unlock it.

5. Click **Accessibility** from the left list.

6. Enable either **Terminal** (if you are using the CLI).

7. Close the **System Preferences**.

![Screen_Shot_2016-10-27_at_14.38.14](./Screen_Shot_2016-10-27_at_14.38.14.png)
