---
title: Installing the Android NDK
weight: '20'
---

# Installing the Android NDK

## Contents

## Compatibility and Download

The Android NDK is required to build native Java/Kotlin modules for Android or to build the Titanium SDK from source.

The NDK is **not** required to build, run, or distribute apps using the Titanium SDK.

Titanium supports NDK Revision 11c and higher.

It's recommended to download the NDK via Android Studio. This will install it under the directory the Android SDK is installed at. Installing it via Android Studio avoids macOS Catalina (and newer versions) from requesting your permission to use the NDK tools when doing a build.

Alternatively, you can install the Android NDK to your own custom location by downloading from the following website:

[Download the Android NDK on developer.android.com](http://developer.android.com/sdk/ndk/index.html)

## Installation

If you've downloaded the Android NDK, simply expand the archive in the folder where you want to install it.

::: danger ❗️ Warning
The path to the NDK must not contain spaces or special characters, such as a dollar sign, ampersand, etc.
:::

After installing the NDK, define an environment variable identifying the path to the NDK. For example,
on OS X, you might add the following to your `.bash_profile`:

```
export ANDROID_NDK=~/android-ndk-r11c //path to your NDK
```
