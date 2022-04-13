---
title: Installing the Windows SDK
weight: '30'
---

# Installing the Windows SDK

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.The below only applies to users of older Titanium versions.
:::

## Overview

This guide walks through the steps required to download and setup the Windows SDKs required for Windows Platform development.

## Requirements

To develop for Windows Platform, the following are the preferred requirements:

* An installation of either Windows 8.1 Pro or Windows 10 Pro

    * The Pro version of Windows is required to be able to run emulators which use Hyper-V

* An installation of Visual Studio 2017 Community, Professional, or Enterprise with the following workloads and additional items:

    * For Windows 10 and Windows 10 Mobile development, the **Universal Windows App Development Tools** must be installed

* To use Windows Phone Emulators, Hyper-V must be enabled. For information on how to enable Hyper-V, see [this document from Microsoft.](https://msdn.microsoft.com/library/windows/apps/xaml/jj863509.aspx)

::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

## Compatibility

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::

### Visual Studio

#### Supported versions of VS

| Titanium SDK Version | Min Visual Studio Version | Max Visual Studio Version |
| --- | --- | --- |
| 7.0.0 - 8.3.x | Visual Studio 2015 | Visual Studio 2017 |

#### Unsupported versions of VS

| Titanium SDK Version | Min Visual Studio Version | Max Visual Studio Version |
| --- | --- | --- |
| 6.2.0 - 6.3.0 | Visual Studio 2013 | Visual Studio 2017 |
| 5.1.0 - 6.2.0 | Visual Studio 2013 | Visual Studio 2015 |

### Supported Platforms

#### Supported platform versions

| Titanium SDK Version | Supported Mobile Platforms | Supported Desktop Platforms |
| --- | --- | --- |
| 7.0.0 - 8.3.x | Windows 10 Mobile | Windows 10 |

#### Unsupported platform versions

| Titanium SDK Version | Supported Mobile Platforms | Supported Desktop Platforms |
| --- | --- | --- |
| 5.1.0 - 6.3.0 | Windows 10 Mobile, Windows Phone | Windows 10, Windows 8.1 |

**Please ask your Confluence administrator to update the license for the [MultiExcerpt Plugin for Confluence 4+](https://plugins.atlassian.com/plugins/biz.artemissoftware.confluence.multiexcerpt.MultiExcerptMacro) .**
**Admin Info: The error is: license VERSION\_MISMATCH**

## Installing the Windows SDKs

The minimum requirements (builds tools and SDKs, not including Windows Mobile Emulators), will take around 10 GB of storage.

1. **Download Visual Studio** installer from [https://www.visualstudio.com/vs/](https://www.visualstudio.com/vs/).

2. **Run the installer** and select the **Visual Studio Edition** you wish to install.

3. In the **Workloads tab**, select the following required Workloads and optional workload components:

    1. **Universal Windows Platform Development** with the **C++ Universal Windows Platform Tools** optional component

4. In the Individual **Components tab**, select the following required **Individual Components** (there may be newer versions of the components, please select the latest version)

    1. SDKs, Libraries, and frameworks:

        1. Windows 10 SDK (10.15063.0) for Desktop C++ x86 and x64

        2. Windows 10 SDK (10.0.15063.0) for UWP: C++

5. If you wish to use emulators during development, select the **Windows Mobile Emulators** component in the Universal Windows Platform development optional packages.

6. Click **Install**.

7. Once the install has finished, open Visual Studio to verify that the install worked.

## Troubleshooting

* The CLI does not show any emulators or connected devices/`ti info -t windows` does not display any information

    * The tooling within the Visual Studio installation used by Titanium to detect information can sometimes get corrupted, this may happen while Visual Studio was updating or installing. To fix this, first try restarting your development machine. If that does not work you can run a repair of Visual Studio by opening the installer and choosing the **Repair** option.

## Further Information

* Module development: [Windows Module Development Guide](#undefined)

* Building to devices: [Deploying to Windows Devices](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_Windows_Devices/)

* Distributing your application: [Distributing Windows Applications](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Windows_Applications/)
