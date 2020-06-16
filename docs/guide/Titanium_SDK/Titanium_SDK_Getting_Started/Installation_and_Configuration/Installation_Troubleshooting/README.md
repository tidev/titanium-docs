---
title: Installation Troubleshooting
weight: '50'
---

# Installation Troubleshooting

This document provides basic installation troubleshooting information.

## All platforms

### Could not locate the Android SDK at the given path

If you see the error, "Could not locate the Android SDK at the given path", when configuring the \_Android SDK Home\_ field in Studio preferences, confirm that you have all the prerequisite packages installed, as shown in the [Installing the Android SDK: Updating Android packages](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/#UpdatingAndroidpackages) screenshot.

## Windows

### xcopy is not recognized as an internal or external command

If you see the error, "xcopy is not recognized as an internal or external command", when attempting to install the Android SDK with the Studio configuration wizard, it is caused by a Windows system `PATH` misconfiguration. To resolve it, add the following path **to the beginning** of your system `PATH`:

```
%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;
```

See [Configuring Environment Variables on Windows](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#configuring-environment-variables-on-windows) for instructions about how to do this.

### Installation updates fail

On-access antivirus software and personal firewalls, such as ZoneAlarm, can interfere with Titanium and Appcelerator downloads. If the installation progress meter appears to stall, try disabling your antivirus and firewall for the duration of the download and installation.

### OEM USB drivers

In order to test your applications on an Android-powered device connected to your Windows, you will need to install the appropriate USB driver. See [this page](http://developer.android.com/sdk/oem-usb.html) for more information.

### Unable to open database file

During development, when using the [Titanium.Database](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database-module) module in your project, you may receive an error such as:

```
Error in compiler. <class 'sqlite3.OperationalError'>, unable to open database file
```

Try disabling on-access antivirus scanning to determine whether it is the cause. If so, it is recommended to create an exception rule in the antivirus software, rather than disabling on-access scanning altogether.

### Install Diagnostics for Windows

As a quick check to verify that your environment has been configured correctly, you can use the code below.

::: warning ⚠️ Warning
In order for this script to work as intended, the `PATH` variable of your system must be configured as described in [Installing and Updating Android SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/#windows)
:::

You will need to run it **with the user account you use when working with Titanium**. These commands should execute without error, except `SCons` which is an optional component.

To run the commands:

* open a Windows 7 `Command Prompt`

* copy all of the code below

* right-click on the `Command Prompt` window

* choose `Paste` from the context menu

* press **Enter** to ensure the last command in the list executes

* compare your output with the [Install Diagnostics Output](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installation_Troubleshooting/Install_Diagnostics_Script_Output/) from our system

To copy your output, ready to paste into a text document or to share:

* right-click on the window

* choose `Select All` from the context menu

* press **Enter** to copy

::: danger ❗️ Warning
Do not post your output directly into the [Q&A](http://developer.appcelerator.com/questions/created), as the formatting is likely to be messy making it difficult for others to interpret. Instead, create a new [GitHub Gist](https://gist.github.com/). To do this, paste the **unedited** output into the main Gist text area, click the **Create Public Gist** button at the bottom of the page and copy and share the resulting URL from your browser address bar.
:::

```
cls
cd \
echo %PROGRAMFILES%
echo %PROGRAMDATA%
echo %USERPROFILE%
echo %PATH%
echo %JAVA_HOME%
java -version
javac -version
python -V
git --version
rem if the ANDROID_SDK variable is configured, please delete it and run this script again
echo %ANDROID_SDK%
adb version
cd %PROGRAMFILES%
android list target
cd \
rem --- The following are optional ---
rem ----------------------------------
scons -v
rem ----------------------------------
echo %HTTP_PROXY%
echo %HTTPS_PROXY%
rem ----------------------------------
echo %SOCKS_PROXY%
rem ----------------------------------
rem
```

Bear in mind that the installed android packages and software versions are correct at the time of writing, but are likely to change in future.
