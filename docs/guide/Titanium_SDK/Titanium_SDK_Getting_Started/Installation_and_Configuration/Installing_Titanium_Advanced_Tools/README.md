---
title: Installing Titanium Advanced Tools
weight: '30'
---

# Installing Titanium Advanced Tools

## Contents

## Related Topics

* [Installing Git](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Git/)

* [Installing the Android NDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_the_Android_NDK/)

* [Installing Eclipse and ADT](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Eclipse_and_ADT/)

* [Installing Ant](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Ant/)

* [Installing gperf](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_gperf/)

## Overview

The following packages may be useful for advanced Titanium users, but are not necessary to develop with Titanium.

If you want to build the Titanium SDK from source, or to build native Android modules, you should read this section for software requirements.

### Android Native Development Tools (NDK) (optional)

The Android NDK is required to build native Java/Kotlin modules for Android or to build the Titanium SDK from source.

The NDK is **not** required to build, run, or distribute apps using the Titanium SDK.

Titanium supports NDK Revision 11c and higher.

It's recommended to download the NDK via Android Studio. This will install it under the directory the Android SDK is installed at. Installing it via Android Studio avoids macOS Catalina (and newer versions) from requesting your permission to use the NDK tools when doing a build.

Alternatively, you can install the Android NDK to your own custom location by downloading from the following website:

![download_05](/images/guide/download/attachments/29004836/download_05.png)

[Download the Android NDK on developer.android.com](http://developer.android.com/sdk/ndk/index.html)

See [Installing the Android NDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_the_Android_NDK/) for detailed instructions about how to install, including the program location and system environment variables that should be used.

### Ant (optional)

::: danger ❗️ Warning
Titanium 9.0.0 and newer versions no longer use Apache Ant. The below only applies to older SDK versions.
:::

Apache Ant is the standard build tool for Java. It can be used to build Titanium native Android modules and to build the Titanium SDK for Android. Ant is not required for building, running, or distributing applications using the Titanium SDK.

::: warning ⚠️ Warning
Java is a prerequisite for Ant, and should be installed first. See [Installing Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/) for instructions.
:::

Obtain the latest stable version of Apache Ant. Ant is supplied as a multi-platform archive. You can choose the archive format that's easiest for you to extract: all archives contain the same files.

![download_05](/images/guide/download/attachments/29004836/download_05.png)

| Operating System | Package Version | Download Location |
| --- | --- | --- |
| OS X | Latest Stable | [Official Website](http://ant.apache.org/bindownload.cgi) |
| Windows | Latest Stable | [Official Website](http://ant.apache.org/bindownload.cgi) |
| Ubuntu | Latest Stable | Default Repositories or [Official Website](http://ant.apache.org/bindownload.cgi) |

See [Installing Ant](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Ant/) for detailed instructions about how to install, including the program location and system environment variables that should be used.
