---
title: Titanium Compatibility Matrix
description: System environments and software versions compatible with Titanium SDK.
---

# Titanium Compatibility Matrix

## Overview

This document describes the system environments that are compatible with Titanium. Any components that fall outside of the min/max version ranges shown are considered not to be compatible.

Only the latest officially release is officially supported. Pre-release versions (Beta, Developer Preview, Release Candidate, Continuous Builds) are not supported.

## Minimum system requirements

### Operating system

| Operating System | Version |
|-----------------|---------|
| macOS | 10.11.5 (Mavericks) and later |
| Windows | Windows 7 and later (Android) — Windows 8.1 and later (Windows Phone) — Windows 10 and later (Windows 10 Mobile) |
| Linux | Tested on Fedora and (K)Ubuntu, others should work too |

## Java Development Kit

The JDK is required to build Titanium apps for Android. Use [OpenJDK](https://openjdk.java.net/) or [Oracle JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

| Titanium SDK version | Min JDK version | Max JDK version |
|---------------------|----------------|----------------|
| 13.3.0 - latest | 18 | 25 |
| 12.8.0 - 13.2.0 | 18 | 21 |

## Node.js

[Node.js](https://nodejs.org/en/download/releases/) is required to install and run Titanium SDK. On Windows, enable `dev mode` in Windows settings.

| Titanium SDK Version | Min Node Version | Max Node Version |
|---------------------|-----------------|-----------------|
| 13.1.1 - latest | 20.x | 24.x |
| 13.0.0 - 13.1.0 | 20.x | 22.x |
| 12.6.0 - 12.8.0 | 18.x | 22.x |

## Mobile development

Titanium supports the following combinations of operating systems and platform SDKs:

| Platform | macOS | Windows | Linux | Notes |
|----------|-------|---------|-------|-------|
| Android Development | ✅ | ✅ | ✅ | |
| iOS Development | ✅ | ❌ | ❌ | iOS apps may only be developed on Apple hardware per Apple's license agreement |

### Android

Titanium requires the Android SDK Tools. Since Titanium SDK 12.5.0 we target and support Android 14 by default.

As of **Titanium 9.0.0**, the build system automatically downloads the Android SDK platforms and tools needed. See the [Titanium SDK repository](https://github.com/tidev/titanium-sdk/blob/main/android/package.json) for details.

| Titanium SDK Version | Min Target (targetSdkVersion) | Max Target (targetSdkVersion) | Min Supported (minSdkVersion) |
|---------------------|------------------------------|------------------------------|------------------------------|
| 13.1.0+ | 15.x (API 35) | 15.x (API 35) | 7.x (API 24) |
| 12.8.0 - 13.0.1 | 15.x (API 35) | 15.x (API 35) | 5.x (API 21) |
| 12.5.0 - 12.8.0 | 14.x (API 34) | 14.x (API 34) | 5.x (API 21) |
| 12.0.0 - 12.5.0 | 13.x (API 33) | 13.x (API 33) | 5.x (API 21) |

#### Android Native Add-on Module Development on macOS

The Xcode command line tools are required to develop native Android add-on modules on macOS.

### iOS

Titanium requires Xcode to be installed for iOS development. Obtain Xcode from the Mac App Store or the [Apple Developer website](https://developer.apple.com/download/).

#### Xcode

| Titanium SDK Version | Min Xcode Version | Max Xcode Version | Notes |
|---------------------|------------------|------------------|-------|
| 12.6.3 - latest | 12.0.0 | 16.x | Full support for iOS 18.4 |
| 12.2.0 - 12.6.2 | 12.0.0 | 16.2 | Full support for iOS 17 |
| 10.1.0 - 12.1.2 | 11.0.0 | 13.x | Full support for iOS 15 |

#### iOS SDK / Target iOS platform

| Titanium SDK version | Min iOS SDK version | Max iOS SDK version | Min target iOS version | Max target iOS version |
|---------------------|-------------------|-------------------|----------------------|----------------------|
| 12.2.0 - latest | 13.0.0 | 17.x | 12.0 | 17.x |
| 10.1.0 - 12.1.2 | 13.0.0 | 15.x | 12.0 | 15.x |
