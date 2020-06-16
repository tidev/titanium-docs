---
title: Prerequisites
weight: '20'
---

# Prerequisites

## Overview

This document lists the minimum requirements necessary to run a Titanium environment.

### Memory

The minimum memory requirement for Studio and the Titanium SDK is as follows:

| Product | Host Operating System | Storage |
| --- | --- | --- |
| Appcelerator Studio | All | 1 GB (contiguous) |
| Latest Android SDK | macOS | 1.5 GB (contiguous) |
| Latest Android SDK | Windows | 1 GB (contiguous) |

::: warning ⚠️ Warning
Minimum system memory requirements is 8GB of RAM. 16GB is highly recommended.
:::

### Operating System

Titanium is supported on the following Operating Systems:

| Operating System | Version |
| --- | --- |
| macOS | 10.11.5 (Mavericks) and later |
| Windows | Windows 7 and later(Android)  <br />Windows 8.1 and later (Windows Phone)  <br />Windows 10 and later (Windows 10 Mobile) |

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::
::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

### Required Software

The Titanium SDK requires Oracle's JDK and Node.js.

If you are using Studio for Mac OS X and Windows, Studio prompts you to install the required software.

#### Java Development Kit

Oracle's Java Development Kit (JDK) is required to be installed in order to work with Titanium.

::: warning ⚠️ Warning
Be aware that no other flavors of JDK, such as OpenJDK, currently work with Titanium; only Oracle's will suffice.
:::

Titanium supports the following versions of JDK for each respective Operating System:

![download_05](/images/guide/download/attachments/29004836/download_05.png)

| Operating System | Min JDK Version | Max JDK Version | Package Arch Version | Download Location | Notes |
| --- | --- | --- | --- | --- | --- |
| OS X | 8 | 8 latest revision | 64-bit | [Official Website](http://www.oracle.com/technetwork/java/javase/downloads/index.html) | * On Mac OS X 10.6 (Snow Leopard) and earlier, the JDK is preinstalled.<br />    <br />* On Mac OS X 10.7 (Lion) and later, the OS should prompt you to install it when needed.<br />    <br />* Android Development on OS X systems requires JDK 8 or higher to be installed. |
| Windows | 8 | 8 latest revision | **32-bit** (x86 / i586) (see note) | [Official Website](http://www.oracle.com/technetwork/java/javase/downloads/index.html) | * The 32-bit version of the JDK is required regardless of whether Titanium is running on a 32-bit Windows system.<br />    <br />* Studio offers to install JDK 8 if no JDK is found.<br />    <br /><br />**Note**: From Studio 5.1.0 and up, 64-bit JDK is supported |

See [Installing Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/) for detailed instructions.

#### Node.js

To run all Appcelerator components, you must have Node.js 10.13.0 or later.

On Mac OS X and Windows, if you have selected to install Titanium updates, Studio prompts you to install Node.js. On Linux, you need to manually install Node.js.

![download_05](/images/guide/download/attachments/29004836/download_05.png)

| Operating System | Min Node Version | Max Node Version | Download Location |
| --- | --- | --- | --- |
| macOS / Windows / Linux | 10.13.0 | 12.X | [Official Website](https://nodejs.org/en/download/releases/) |

See [Installing Node](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/) for detailed instructions.

### Titanium Compatibility Matrix

To minimize the risk of problems, please refer to the [Titanium Compatibility Matrix](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/) whenever you make changes to your Titanium environment.
