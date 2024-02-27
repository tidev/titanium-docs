---
title: Titanium Compatibility Matrix
weight: '70'
---

# Titanium Compatibility Matrix

## Overview

This document describes the system environments that are compatible with Titanium. Any components that fall outside of the min/max version ranges shown are considered not to be compatible.

### Supported SDK releases

Some information about legacy Titanium SDK versions is included here solely for reference. Thus, only the following releases are officially supported:

* 12.0.0 - latest

### Pre-release versions

Be aware that any components notated as _Pre-release_ are not officially supported. This includes Beta, Developer Preview, and Release Candidate versions, as well as any development SDKs released via the [Continuous Builds](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_SDK_Continuous_Builds.html) download site.

## Minimum system requirements

### Operating system

Titanium is supported on the following Operating Systems:

| Operating System | Version |
| --- | --- |
| macOS | 10.11.5 (Mavericks) and later |
| Windows | Windows 7 and later(Android)  <br />Windows 8.1 and later (Windows Phone)  <br />Windows 10 and later (Windows 10 Mobile) |
| Linux | tested on Fedora and (K)Ubuntu, other should work too |

## Java Development Kit

The Java Development Kit (JDK) is required to build Titanium apps and modules for Android. You can use [OpenJDK](https://openjdk.java.net/) or [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

| Titanium SDK version | Min JDK version | Max JDK version |
| --- | --- | --- |
| 12.0.0 - latest | 11 | 17 |

<details>
<summary><b>Unsupported version</b></summary>

| Titanium SDK version | Min JDK version | Max JDK version |
| --- | --- | --- |
| 10.1.0 - 11.1.1 | 11 | 16 |
| 9.0.2 - 10.0.2 | 8 | 15 |
| 9.0.1 | 8 | 13 |
| 9.0.0 | 8 | 12 |
| 7.5.0 - 8.3.1 | 8 | 14 |
| 7.0.0 - 7.4.2 | 8 | 10 |
| 8.0.0 - 8.2.0 | 10.13.0 | 12.x |
| 7.1.0 - 7.1.2 | 8.x | 10.x |
| 6.2.2 - 7.0.12 | 6.x | 8.15.x |
| 6.0.0 - 6.2.1 | 4.2.0 | 4.6.2 |
| 5.1.0 - 5.4.0 | 0.10.x | 4.2.x |

</details>

See [Installing Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK.html) for detailed instructions.

## Node.js

To run all Titanium components, you must have Node.js 14 or later.

On Windows you will need to enable `dev mode` in the Windows settings in order to use Node correctly. [Official Website](https://nodejs.org/en/download/releases/)

### Supported version of node.js

| Unified CLI Version | Min Node Version | Max Node Version |
| --- | --- | --- |
| 12.1.0 - latest | 16.x | 20.x |


See [Installing Node](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node.html) for details.

<details>
<summary><b>Unsupported version of node.js</b></summary>

| Unified CLI Version | Min Node Version | Max Node Version |
| --- | --- | --- |
| 10.0.1 - 12.0.0 | 14.x | 16.x |
| 9.0.0 - 10.0.0 | 12.13.0 | 15.x |
| 8.0.0 - 8.2.0 | 10.13.0 | 12.x |
| 7.1.0 - 7.1.2 | 8.x | 10.x |
| 6.2.2 - 7.0.12 | 6.x | 8.15.x |
| 6.0.0 - 6.2.1 | 4.2.0 | 4.6.2 |
| 5.1.0 - 5.4.0 | 0.10.x | 4.2.x |

</details>

## Mobile development

Titanium can provide a development environment for third-party mobile platforms where a Software Development Kit (SDK) has been made available by the platform vendor. With this in mind, development with the following combinations of Operating Systems and SDKs are possible:

| Platform | macOS | Windows | Linux | Notes |
| --- | --- | --- | --- | --- |
| Android Development | ![check](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png)  <br /> | ![check](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png)  <br /> | ![check](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png)|  |
| iOS Development | ![check](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png)  <br /> | ![error](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/error.png)  <br />| ![error](/images/guide/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/error.png) | Due to Apple's license agreement, iOS applications may only be developed on Apple hardware. |

### Android

See [Installing the Android SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK.html) for detailed instructions. Since Titanium SDK 12.0.0 we target and support Android 13 by default.

Titanium requires the Android SDK Tools to be installed in order to allow you to develop Android applications.

The _Android SDK Manager_ installer may be obtained from the [Android Studio and SDK tools](https://developer.android.com/studio) site.

#### Required Android Packages

As of **Titanium 9.0.0**, the build system will automatically download the Android SDK platforms and tools needed.

For **Titanium 8.x.x**, you need to installed the following packages via the Android SDK Manager yourself:

| Package | Minimum Version |
| --- | --- |
| Android SDK Tools | Rev 28 |
| Android SDK Build-tools | Rev 23 |
| Android SDK Platform (API Level) | API Level 29 for Titanium 8.3.x<br />API Level 28 for Titanium version older than 8.3.0 |

::: warning ⚠️ Warning
Take caution before upgrading these packages, as changes to the way they work has broken the Titanium toolchain a number of times in the past. Although these problems are often beyond our control, we always do our utmost to fix them as soon as we are made aware of them.

With this in mind, it's important to only upgrade these packages _between_ major projects, so that you have time to fix any problems that may result. Always consult the Android Tools [Release Notes](http://developer.android.com/sdk/tools-notes.html) and [Known Issues](http://tools.android.com/knownissues) first, and refer to our [Installation Troubleshooting](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installation_Troubleshooting/) guide to check whether there are any further actions that need to be taken to make the Titanium and the Android SDK compatible.
:::

#### Android SDK / Target Android platform

Each Titanium SDK supports building against a specific range of Android versions, as shown in the following table, and requires at least one of these versions to be installed. If you specify a `android:targetSDKVersion` in the `tiapp.xml` file of your project, you must specify one within the target min and max values. The minimum Android/SDK version column indicates the minimum version of Android that a device can run, which a Titanium application supports.

##### <b>Supported versions</b>

| Titanium SDK Version | Min Target Android Version  <br />(android:targetSdkVersion) | Max Target Android Version  <br />(android:targetSdkVersion) | Min Supported Android Version  <br />(android:minSdkVersion) |
| --- | --- | --- | --- |
| 12.0.0 - latest | 6.0.x (API 23) | 13.0.x (API 33) | 5.0.x (API 21) |

<details>
<summary><b>Unsupported versions</b></summary>

| Titanium SDK Version | Min Target Android Version  <br />(android:targetSdkVersion) | Max Target Android Version  <br />(android:targetSdkVersion) | Min Supported Android Version  <br />(android:minSdkVersion) |
| --- | --- | --- | --- |
| 10.1.0 - 11.1.1 | 6.0.x (API 23) | 12.0.x (API 31) | 5.0.x (API 21) |
| 10.0.0 - 10.0.2 | 6.0.x (API 23) | 11.0.x (API 30) | 5.0.x (API 21) |
| 9.3.0 - 9.3.2 | 6.0.x (API 23) | 11.0.x (API 30) | 4.4.x (API 19) |
| 8.3.0 - 9.2.2 | 6.0.x (API 23) | 10.0.x (API 29) | 4.4.x (API 19) |
| 8.0.0 - 8.2.2 | 6.0.x (API 23) | 9.0.x (API 28) | 4.4.x (API 19) |
| 7.5.0 - 7.5.1 | 6.0.x (API 23) | 9.0.x (API 28) | 4.1.x (API 16) |
| 7.3.0 - 7.4.1 | 6.0.x (API 23) | 8.1.x (API 27) | 4.1.x (API 16) |
| 7.0.0 - 7.2.0 | 6.0.x (API 23) | 7.0.x (API 25) | 4.1.x (API 16) |
| 6.2.0 - 6.3.0 | 7.1.x (API 25) | 6.0.x (API 23) | 4.1.x (API 16) |
| 6.0.0 - 6.1.x | 6.0.x (API 23) | 6.0.x (API 23) | 4.1.x (API 16) |
| 5.1.0 - 5.5.x | 6.0.x (API 23) | 6.0.x (API 23) | 4.0.x (API 14) |
| 5.0.0 - 5.0.x | 5.0.x (API 21) | 6.0.x (API 23) | 4.0.x (API 14) |
| 4.0.0 - 4.1.x | 5.0.x (API 21) | 5.1.x (API 22) | 4.0.x (API 14) |
| 3.4.1 - 3.5.1 | 4.0.x (API 14)\* | 5.0.x (API 21)\*\* | 2.3.x (API 10) |
| 3.3.0 - 3.4.0 | 4.0.x (API 14)\* | 4.4.x (API 19) | 2.3.x (API 10) |
| 3.2.0 - 3.2.3 | 2.3.x (API 10)\* | 4.4.x (API 19) | 2.3.x (API 10) |
| 3.1.2 - 3.1.3 | 2.3.x (API 10) | 4.3.x (API 18) | 2.3.x (API 10) |
| 3.1.1 | 2.3.x (API 10) | 4.2.x (API 17) | 2.3.x (API 10) |
| 3.1.0 | 2.2 (API 8) | 4.2.x (API 17) | 2.2 (API 8) |
| 2.1.2 - 3.0.2 | 2.2 (API 8) | 4.1.x (API 16) | 2.2 (API 8) |
| 2.0 - 2.1.1 | 2.2 (API 8) | 4.0.x (API 15) | 2.2 (API 8) |
| 1.8.x | 2.2 (API 8) | 3.x.x (API 11) | 2.2 (API 8) |
| 1.7.x | 2.1 (API 7) | 3.x.x (API 11) | 2.1 (API 7) |

</details>


Most mobile device manufacturers have been licensed to use Google's enhanced API, which provides support for Maps and other functionality. If this is the case for your target devices, you will need to install the relevant Google packages, listed as _Google APIs by Google Inc., Android API x..._ by the **Android SDK Manager** tool. In Studio, choose the SDKs with the naming format "Google APIs x.x" to use the enhanced APIs, or those without the "Google APIs" prefix otherwise.

Android SDK packages can be installed using the **Android SDK Manager** tool. See [Installing the Android SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK.html) for detailed instructions.

The default Android SDK can be configured using Studio's _Preferences_, and then selected per-project using the _Run Configurations_.

#### Android Native Add-on Module Development on macOS

The Xcode command line tools are required to develop native Android add-on modules on macOS.

See [Installing the iOS SDK: Installing Command Line Tools](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK.html#install-the-command-line-tools-and-previous-simulators) for detailed instructions.

### iOS

See [Installing the iOS SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK.html) for detailed instructions.

Titanium requires Xcode to be installed in order for you to develop iOS applications.

There are two ways to obtain Xcode, the application that installs and manages iOS SDKs:

1. Launch the _App Store_ application, found in the `Applications` folder, and search for and install "Xcode" (includes the stable iOS and watchOS SDKs).

2. Enroll with the Apple Developer website and browse the [iOS Developer Center](https://developer.apple.com/download/) page to manually download the installer application (includes all previously-released iOS SDKs and new Beta versions).

Both of the above options are free of charge, although may require credit card details to be entered. Since 2016, you can also test your apps on your device using the free Apple developer program. If you wish to deploy your applications to the App Store for production, however, you will need to become a member of the _iOS Developer Program_, by way of an annual subscription charge of $99 at the time of writing.

#### Xcode

To develop for iOS, Titanium requires Apple's Xcode suite of tools.

Each Titanium SDK supports a specific range of Xcode versions, shown in the table below.

##### <b>Supported versions of Xcode</b>

| Titanium SDK Version | Min Xcode Version | Max Xcode Version | Notes |
| --- | --- | --- | --- |
| 12.2.0 - latest | 12.0.0 | 15.x | Full support for iOS 17 |
| 10.1.0 - 12.1.2 | 11.0.0 | 13.x | Full support for iOS 15 |

<details>
<summary><b>Unsupported versions of Xcode</b></summary>

| Titanium SDK Version | Min Xcode Version | Max Xcode Version | Notes |
| --- | --- | --- | --- |
| 10.0.0 - 10.0.2 | 11.0.0 | 12.x | Dropped iOS 11 support |
| 9.3.0 - 9.3.2 | 11.0.0 | 12.x |  |
| 9.2.0 - 9.2.2 | 11.0.0 | 12.x | Full support for iOS 14 and beta support for macOS via Mac Catalyst |
| 9.0.0 - 9.1.0 | 9.0.0 | 11.x | Dropped iOS 9 support |
| 8.3.0 - 8.3.1 | 8.0.0 | 11.x |  |
| 8.2.0 - 8.2.1 | 8.0.0 | 11.x | Full support for iOS 13 |
| 8.0.0 - 8.1.1 | 8.0.0 | 10.x |  |
| 7.5.0 - 7.5.2 | 8.0.0 | 10.x |  |
| 7.4.0 - 7.4.2 | 8.0.x | 10.x | Full support for iOS 12 |
| 7.0.0 - 7.3.1 | 6.0.x | 9.0.x |  |
| 6.3.0 | 6.0.x | 9.0.x |  |
| 6.2.x | 6.0.x | 9.0.x | Full support for iOS 11 |
| 5.5.x - 6.1.x | 6.0.x | 8.0.x |  |
| 5.0.0 - 5.4.0 | 6.0.x | 7.0.x |  |
| 4.0.0 - 4.1.x | 6.0.x | 6.4.x |  |
| 3.4.0 - 3.5.x | 6.0.x | 6.0.x |  |

Deploying for iOS 11.x requires Xcode 9.x, and macOS 10.12.4 and later.

Deploying for iOS 12.x requires Xcode 10.x, and macOS 10.13.6 and later.

As per apple guidelines, Starting April 2020 all apps submitted to App Store must be built with iOS 13 SDK or later, included in Xcode 11 or later.

</details>
<br/>

#### iOS SDK / Target iOS platform

Each Titanium SDK supports a specific range of iOS base SDKs and deployment targets. To build an application for a specific iOS target version, you must have the appropriate iOS SDK installed.

##### <b>Supported versions of iOS SDK / Target iOS platform</b>

| Titanium SDK version | Minimum iOS SDK version | Maximum iOS SDK version | Minimum target iOS version | Maximum target iOS version |
| --- | --- | --- | --- | --- |
| 12.2..0 - latest | 13.0.0 | 17.x | 12.0 | 17.x |
| 10.1.0 - 12.1.2 | 13.0.0 | 15.x | 12.0 | 15.x |

<details>
<summary><b>Unsupported versions of iOS SDK / Target iOS platform</b></summary>

| Titanium SDK version | Minimum SDK version | Maximum SDK version | Minimum target iOS version | Maximum target iOS version |
| --- | --- | --- | --- | --- |
| 10.0.0 - 10.0.2 | 13.0.0 | 14.x | 12.0 | 14.x |
| 9.2.0 - 9.3.x | 13.0.0 | 14.x | 10.0 | 14.x |
| 9.0.0 - 9.1.2 | 11.0.0 | 13.x | 10.0 | 13.x |
| 8.2.0 - 8.3.1 | 10.0.0 | 13.x | 9.0 | 13.x |
| 8.0.0 - 8.1.1 | 10.0.0 | 12.x | 9.0 | 12.x |
| 7.4.0 - 7.5.x | 8.0.0 | 12.x | 8.0 | 12.x |
| 7.0.0 - 7.3.x | 8.0.0 | 11.x | 8.0 | 12.x |
| 6.2.0 - 6.3.x | 8.0.x | 11.x | 8.0 | 12.x |
| 6.0.0 - 6.1.x | 8.0.x | 10.x | 8.0 | 12.x |
| 5.5.x | 8.0.x | 10.x | 7.1.x | 9.3.x |
| 5.0.0 - 5.4.x | 8.0.x | 9.3.x | 7.1.x | 9.3.x |
| 4.0.0 - 4.1.x | 8.0.x | 8.4.x | 7.1.x | 8.4.x |
| 3.4.0 - 3.5.x | 8.0.x | 8.0.x | 7.1.x | 8.0.x |
| 3.2.2 - 3.3.0 | 7.0.x | 7.1.x | 6.1.x | 7.1.x |
| 3.1.3 - 3.2.1 | 7.0.x | 7.0.x | 6.1.x | 7.0.x |
| 3.1.1 - 3.1.2 | 5.0.x | 6.1.x | 5.0.x | 6.1.x |
| 3.1.0 | 4.3.x | 6.1.x | 4.3.x | 6.1.x |
| 2.1.3 - 3.0.x | 4.0.x | 6.1.x | 4.0.x | 6.1.x |
| 2.1.0 - 2.1.2 | 4.0.x | 5.1.x | 4.0.x | 5.1.x |
| 2.0.x | 4.0.x | 5.1.x | 4.0.x | 5.1.x |
| 1.8.x | 4.0.x | 5.0.x | 4.0.x | 5.0.x |
| 1.7.1+ | 3.1.2 | 5.0.x | 3.1.2 | 5.0.x |

</details>

### Unified CLI compatibility matrix

#### Unified CLI Includes

The following table lists the various CLI component versions:

##### <b>Supported versions of CLI includes</b>

| Unified CLI | Alloy | API Builder | Cloud CLI | Titanium CLI | Appc Daemon |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 1.15.2 | N/A | 2.1.8 | 5.2.4 | 3.2.0 |

<details>
<summary><b>Unsupported versions of CLI includes</b></summary>

| Unified CLI | Alloy | API Builder | Cloud CLI | Titanium CLI | Appc Daemon |
| --- | --- | --- | --- | --- | --- |
| 8.1.0 | 1.15.1 | N/A | 2.1.8 | 5.2.2 | 3.2.0 |
| 8.0.0 | 1.14.5 | N/A | 2.1.3 | 5.2.2 | 3.1.0 |
| 7.1.1 | 1.14.1 | 3.2.13 | 2.1.2 | 5.2.1 | 1.1.3 |
| 7.1.0 | 1.14.0 | 3.2.13 | 2.1.0 | 5.2.1 | 1.1.3 |
| 7.0.12 | 1.13.10 | 3.2.13 | 2.1.0 | 5.1.1 | 1.1.3 |
| 7.0.11 | 1.13.9 | 3.2.12 | 2.1.0 | 5.1.1 | 1.1.3 |
| 7.0.10 | 1.13.8 | 3.2.11 | 2.0.12 | 5.1.1 | 1.1.3 |
| 7.0.9 | 1.13.4 | 3.2.7 | 2.0.12 | 5.1.1 | 1.1.3 |
| 7.0.8 | 1.13.4 | 3.2.7 | 2.0.11 | 5.1.1 | 1.1.3 |
| 7.0.7 | 1.13.2 | 3.2.5 | 2.0.10 | 5.1.1 | 1.1.3 |
| 7.0.6 | 1.13.2 | 3.0.0 | 2.0.10 | 5.1.1 | 1.1.3 |
| 7.0.5 | 1.12.0 | 3.0.0 | 2.0.10 | 5.1.1 | 1.1.3 |
| 7.0.4 | 1.12.0 | 3.0.0 | 2.0.8 | 5.1.1 | 1.1.3 |
| 7.0.3 | 1.12.0 | 3.0.0 | 2.0.8 | 5.1.0 | N/A |
| 7.0.2 | 1.10.12 | 3.0.0 | 2.0.8 | 5.0.14 | N/A |
| 7.0.1 | 1.10.10 | 3.0.0 | 2.0.8 | 5.0.14 | N/A |
| 7.0.0 | 1.10.9 | 3.0.0-19 | 2.0.8 | 5.0.14 | N/A |
| 6.3.0 | 1.10.5 | 2.0.2 | 2.0.7 | 5.0.14 | N/A |
| 6.2.4 | 1.9.14 | 2.0.2 | 2.0.5 | 5.0.14 | N/A |
| 6.2.3 | 1.9.13 | 2.0.2 | 2.0.5 | 5.0.14 | N/A |
| 6.2.2 | 1.9.11 | 2.0.2 | 2.0.5 | 5.0.14 | N/A |
| 6.2.1 | 1.9.11 | 2.0.0 | 2.0.4 | 5.0.13 | N/A |
| 6.2.0 | 1.9.11 | 2.0.3 | 2.0.4 | 5.0.12 | N/A |
| 6.1.0 | 1.9.5 | 1.10.1 | 1.2.2 | 5.0.11 | N/A |
| 6.0.0 | 1.9.4 | 1.8.12 | 1.2.2 | 5.0.11 | N/A |
| 5.5.1 | 1.9.2 | 1.8.6 | 1.2.1 | 5.0.9 | N/A |
| 5.5.0 | 1.9.2 | 1.8.6 | 1.2.1 | 5.0.9 | N/A |
| 5.4.0 | 1.9.1 | 1.8.2 | 1.2.1 | 5.0.9 | N/A |
| 5.3.1 | 1.8.7 | 1.8.2 | 1.2.0 | 5.0.8 | N/A |
| 5.3.0 | 1.8.7 | 1.7.31 | 1.2.0 | 5.0.8 | N/A |
| 5.2.2 | 1.8.3 | 1.7.29 | 1.2.0 | 5.0.6 | N/A |
| 5.2.1 | 1.8.2 | 1.7.29 | 1.2.0 | 5.0.6 | N/A |
| 5.2.0 | 1.7.33 | 1.7.27 | 1.1.0 | 5.0.6 | N/A |
| 5.1.0 | 1.7.32 | 1.3.22 | 1.0.32 | 5.0.6 | N/A |

</details>
<br/>

#### Android emulator

Refer to the [Android requirements and instructions below](#android) for installing the Android SDK, which contains the Android emulator.
