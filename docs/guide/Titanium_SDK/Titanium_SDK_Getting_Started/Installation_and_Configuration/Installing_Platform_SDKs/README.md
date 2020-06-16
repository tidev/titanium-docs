---
title: Installing Platform SDKs
weight: '20'
---

# Installing Platform SDKs

To develop native mobile applications with Titanium you need to have the SDKs installed for your target platform. For instance, to develop Android applications you need the Android SDK and toolchain installed, and XCode to develop iOS applications. You can either use Studio's Platform Configuration tool to automate the installation process or install these SDKs manually.

## Studio Platform Configuration Tool

Studio provides the Platform Configuration tool to make it easier to install, configure and update native platform SDKs on your system. This tool is automatically launched when Studio first starts after being installed, or when creating a new project with an unconfigured platform. You may also launch the tool through the Studio Dashboard **Get Started** tab by selecting an SDK to configure.

When the **Platform Configuration** dialog opens, this dialog indicates which platform SDKs are installed and which are not, and lets you easily install individual SDKs.

In the dialog, select the SDKs you want to install and optionally click **Settings** to specify a few basic settings for each (described in more detail the below sections). Click **Configure** to start the installation process.

Studio begins downloading and installing each SDK you selected, according to the settings you specified. In the case of iOS, Studio launches the App Store application installed on your Mac to the XCode download page.

### Android settings

You specify where to install the SDK and which versions to install. To build applications for other versions of Android, select the appropriate Android SDKs from the settings view.

### iOS settings

There aren't any special settings for iOS, as you only need to install the Xcode developer toolset.

## Manual Installation

For advanced platform configurations or setting up the platform SDKs for use with the Titanium CLI, refer to the following installation guides:

* [Installing the Android SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/)

* [Installing the iOS SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/)

* [Installing the Windows SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Windows_SDK/)
