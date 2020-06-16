---
title: Installing SCons
weight: '40'
---

# Installing SCons

## Contents

## Compatibility and Download

[SCons](http://en.wikipedia.org/wiki/SCons) (Software Construction tool) is a build tool, similar to the classic `make` utility. It is used to build the [Titanium SDK](https://github.com/appcelerator/titanium_mobile).

Installing `scons` is required if you want to build the Titanium SDK from source. It is not required for building, running, or distributing applications using the Titanium SDK.

::: warning ⚠️ Warning
Python is a prerequisite for SCons, and should be installed first. See [Installing Python](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Python/) for instructions.
:::

Obtain the SCons version listed below for your Operating System:

![download_05](/images/guide/download/attachments/29004836/download_05.png)

| Operating System | Package Version | Download Location |
| --- | --- | --- |
| OS X | Latest Stable | [Official Website](http://scons.org/pages/download.html) |
| Windows | Latest Stable | [Official Website](http://scons.org/pages/download.html) |
| Ubuntu | Latest Stable | Default Repositories |

## Installation

### Windows

Note that the typical filesystem location of this software can be found in the [Windows Software Locations](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#windows-software-locations) section of these guides.

* log in under your usual user account, and right-click the SCons Windows Installer and select _Run as administrator_. Enter your Administrator password, if you are prompted for it, and proceed until the first screenshot below

* verify that Python has been automatically detected on your system, as below. If none is found, you may have installed the 64bit rather than 32bit version

* verify that the `scons` script has been placed in the directory shown in the [Windows Software Locations](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#windows-software-locations) above, within the Python directory, and then proceed

* click **Next** and continue until complete

![scons-install-01](./scons-install-01.png)

Refer to the [Windows Software Locations](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#windows-software-locations) section and add the SCons location to the system's `PATH`.
