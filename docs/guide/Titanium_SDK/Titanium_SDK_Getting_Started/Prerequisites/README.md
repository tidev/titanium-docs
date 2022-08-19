---
title: Prerequisites
weight: '20'
---

# Prerequisites

## Overview

This document lists the minimum requirements necessary to run a Titanium environment.

### Memory

The minimum memory requirement for the Titanium SDK is as follows:

| Product | Host Operating System | Storage |
| --- | --- | --- |
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

#### Java Development Kit

The Java Development Kit (JDK) is required to build Titanium apps and modules for Android.

| Titanium SDK version | Min JDK version | Max JDK version |
| --- | --- | --- |
| 10.1.0 - latest | 11 | 16 |
| 9.0.2 - 10.0.2 | 8 | 15 |
| 9.0.1 | 8 | 13 |
| 9.0.0 | 8 | 12 |
| 7.5.0 - 8.3.1 | 8 | 14 |
| 7.0.0 - 7.4.2 | 8 | 10 |

![download_05](/images/guide/download/attachments/29004836/download_05.png) [Download Location](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

See [Installing Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/) for detailed instructions.

#### Node.js

To run all Titanium components, you must have Node.js 14 or later.

![download_05](/images/guide/download/attachments/29004836/download_05.png)

| Operating System | Min Node Version | Max Node Version | Download Location |
| --- | --- | --- | --- |
| macOS / Windows / Linux | 14.X | 16.X | [Official Website](https://nodejs.org/en/download/releases/) |

See [Installing Node](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/) for detailed instructions.

### Titanium Compatibility Matrix

To minimize the risk of problems, please refer to the [Titanium Compatibility Matrix](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/) whenever you make changes to your Titanium environment.
