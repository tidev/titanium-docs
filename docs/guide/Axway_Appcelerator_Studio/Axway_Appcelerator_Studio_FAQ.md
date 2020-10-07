---
title: Axway Appcelerator Studio FAQ
weight: '50'
---

# Axway Appcelerator Studio FAQ

This document provides answers and links to commonly asked questions about Studio.

## Studio hangs on launch

Studio can hang for three common reasons: you may be using the wrong version of Java,, the version of Node.js is either out of date or beyond what is currently supported, or you're not logged in to an Appc environment.

### Java

Confirm that you are using a supported version of Java by visiting [Titanium Compatibility Matrix#Javasupport](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#java-support).

1. Check to see which version of Java is active: `java -version`

2. Check to see if Appc recognizes the correct version of Java: `appc ti info`

3. If there is any discrepancy, please install a supported version of Java.

### Node.js

To confirm which version of Node.js is supported, visit [Titanium Compatibility Matrix#Node.js](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#node.js).

1. Check to see which version of Node.js is active: `node -v`

2. Check to see if Appc recognizes the correct version of Node.js: `appc ti info`

3. If there is any discrepancy, please install a supported version of Node.js.

### Appc login

To confirm you are logged into an Appc environment, follow these steps:

1. Execute `appc logout` to confirm you are not logged in.

2. Execute `appc login` and provide your credentials.

3. Launch Studio.

It should be also noted that if you are logged into Appc environment on another machine, Studio will hang on the launch screen. Use the steps above to log in/out.

## Which version of Java should I use with Windows?

The JDK needs to be 32bit whether Windows running 32 or 64 bit.

## Check Android and set Android SDK version

You can see which ones you have installed using `appc ti info -t android` (Android Platforms) and select the one to use via `tiapp.xml`. It will default to 21 atm. See [Android SDK / Target Android Platform](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/#android-sdk-/-target-android-platform) for more details.

## How do I resolve this error: \[ERROR\] : invalid request

Please open your terminal and type: **appc login.** Login with your credential and restart Axway Appcelerator Studio.

## Error during installation IDE recommended updates

Execute the following commands:

```bash
sudo rm -rf ~/.appcelerator
sudo rm -rf ~/.titanium
sudo npm uninstall -g titanium
sudo npm uninstall -g appcelerator
sudo npm install -g appcelerator
appc use latest
appc setup
```

::: warning ⚠️ Warning
For Windows users, execute the same commands without the `sudo` command within the administrative command prompt.
:::

## Setup Android SDK for Studio on Windows

1. **Download the [Android SDK](https://developer.android.com/studio/index.html)** manually.

2. Move the downloaded file in `C:` directory. Go to the **Android SDK** > **tools** and click on Android and select all tools, Android-6, and Extra folder then install those packages.

3. Setup Android SDK via the command prompt:

    1. `appc ti config android.sdk /<SDK location>/`

    2. `appc ti setup android`

4. Restart Windows.

## Install Appcelerator Studio on the Mac

1. **Download [node.js](https://nodejs.org/#download)** and install it.

    ::: warning ⚠️ Warning
    Refer to [Node.js Compatibility Matrix](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#node.js) for which version to install.
    :::

2. Install **Appcelerator CLI** via the terminal:

    ```bash
    sudo npm install -g appcelerator
    appc use latest
    appc setup
    appc login
    ```

3. **Download and install [Studio](https://platform.appcelerator.com/#/product/studio)** . Installing Studio automatically installs all other prerequisite software.

## Appcelerator Studio is unable to install latest appc CLI due to proxy/network configuration issues

1. Open a terminal and execute this command: `appc use latest`

2. If you get the same error what you reported, verify your proxy configuration by executing this command: `appc config get proxyServer`

3. If this proxy configuration command shows any configured proxy and it was set unintentionally, you can remove it by executing this command: `appc config set proxyServer`

4. If there is no proxy configured but the issue still remains, it may be that your network firewall is not allowing accessing to Appcelerator Software Update site. Contact your network admin to unblock that site.

## Accessing the log from Studio

In Studio, go to **Help** > **Studio** > **View Log File**. This will open the log file in an editor window where you can save the log info to a separate file.

## Accessing the Daemon log from Studio

In Studio, go to **Help** > **Studio** > **Generate Appc Daemon Dump**. It generates the appc daemon dump and provide you the location for the generated file.

## Accessing the Log from the File System

Current log file is located in the `../.metadata` directory in your workspace directory. The following lists the path for various operating systems:

* **Windows XP**: `C:\Documents and Settings\username\My Documents\<Studio Workspace>\.metadata\.log`

* **Windows Vista/Windows 7**: `C:\Users\username\Documents\<Studio Workspace>\.metadata\.log`

* **Mac OS X**: `~/Documents/<Studio Workspace>/.metadata/.log`

## Fresh installation of Studio for Windows

If you download the Axway Appcelerator Studio and install it, the installation process will cover all the steps automatically. But, sometimes, the installation process may encounter an issue. If this is the case, it may be better to install all other prerequesities and then install Studio.

1. **Install 32bit Java**. Review the info in **[Installing Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/)** for Windows setup.

2. **Download [node.js](https://nodejs.org/#download)** and install it.

    ::: warning ⚠️ Warning
    Refer to [Node.js Compatibility Matrix](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#node.js) for which version to install.
    :::

3. Execute the following commands via the admin command prompt:

    ```bash
    npm install -g appcelerator
    appc use latest
    appc config set proxyServer null
    appc setup
    ```

4. **Download and install [Studio](https://platform.appcelerator.com/#/product/studio)** . Installing Studio automatically installs all other prerequisite software.

5. Launch Studio.

## Installing x86 emulator packages

Maximum versions of the Android API are available with Intel x86 emulators. Look for the "Intel x86 Atom System Image" in the _Android SDK Manager_.

Go to **Android SDK** > **tools** and click on Android and select all tools, Android-6, and Extra folder (Intel x86 emulator accelerator (HAXM)). Install those packages.

The x86 emulator may run faster than the standard ARM emulator but may show minor differences with the ARM emulator. Extra software is required to take advantage of the x86 emulator. See [Run Apps on the Android Emulator](https://developer.android.com/studio/run/emulator.html#accel-vm) in the Android Tools documentation for details.

The Extra software is [Intel x86 emulator accelerator (HAXM)](https://software.intel.com/en-us/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-windows).

## How to enable analytics in a new Appcelerator project?

To enable analytics in a new Appcelerator project:

1. In Studio, **create a new Mobile Application** (File > New Mobile App Project...).

2. Make sure the **Enable Appcelerator Services** option in **enabled** in the New Mobile App Project dialog and select the appropriate organization from the Organization pop-up menu. The application is tied to the account and organization used to create it.

3. Enter the rest of the required project information and click **Finish**.

4. **Build your application and deploy** to devices to begin collecting analytics data.

## Error: com.appcelerator.install.use.download.error

Please try following steps:

1. Open **terminal** (Mac) or **administrative command prompt** (Windows) and type: `appc config get proxyServer`

2. After the first command has finished, execute this one: `appc config set proxyServer null`

3. Try logging in again and enter your credentials: `appc login`

4. Launch Studio and try to log in again.

## How do I generate GUID on MAC

1. **Select your project**.

2. Open Studio **terminal** and execute: **`uuidgen`**

3. **Copy the output** and open **`tiapp.xml`** file.

4. **Find `<guid>` tag** and **replace the value** with the copied value from the terminal output.

5. **Clean your project** several times and build.

6. If you still get the error, close Studio, reopen, and build again.

## No Android SDK found

1. Go to your Android SDK folder/tools/android. This will open Android SDK manager.

2. Download and install the recommended SDK tools and build tools.

3. Restart your computer after the installation is done.

If the issue happens after installing Titanium SDK from IDE recommendation, it possible your SDK installation ran into some error during installation. You need to manually download the SDK and install it.

Setup Android SDK for Studio on Windows

1. **Download the [Android SDK](https://developer.android.com/studio/index.html)** manually.

2. Move the downloaded file in `C:` directory. Go to the **Android SDK** > **tools** and click on Android and select all tools, Android-6, and Extra folder then install those packages.

3. Setup Android SDK via the command prompt:

    1. `appc ti config android.sdk /<SDK location>/`

    2. `appc ti setup android`

4. Restart Windows.

## Install Appcelerator Studio on the Mac

1. **Download [node.js](https://nodejs.org/#download)** and install it.

    ::: warning ⚠️ Warning
    Refer to [Node.js Compatibility Matrix](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#node.js) for which version to install.
    :::

2. Install **Appcelerator CLI** via the terminal:

    ```bash
    sudo npm install -g appcelerator
    appc use latest
    appc setup
    appc login
    ```

3. **Download and install [Studio](https://platform.appcelerator.com/#/product/studio)** . Installing Studio automatically installs all other prerequisite software.

## Appcelerator Studio is unable to install latest appc CLI due to proxy/network configuration issues

1. Open a terminal and execute this command: `appc use latest`

2. If you get the same error what you reported, verify your proxy configuration by executing this command: `appc config get proxyServer`

3. If this proxy configuration command shows any configured proxy and it was set unintentionally, you can remove it by executing this command: `appc config set proxyServer`

4. If there is no proxy configured but the issue still remains, it may be that your network firewall is not allowing accessing to Appcelerator Software Update site. Contact your network admin to unblock that site.

## Accessing the log from Studio

In Studio, go to **Help** > **Studio** > **View Log File**. This will open the log file in an editor window where you can save the log info to a separate file.

### Accessing the log from the file system

Current log file is located in the `../.metadata` directory in your workspace directory. The following lists the path for various operating systems:

* **Windows XP**: `C:\Documents and Settings\username\My Documents\<Studio Workspace>\.metadata\.log`

* **Windows Vista/Windows 7**: `C:\Users\username\Documents\<Studio Workspace>\.metadata\.log`

* **Mac OS X**: `~/Documents/<Studio Workspace>/.metadata/.log`

## Fresh installation of Studio for Windows

If you download the Appcelerator Studio and install it, the installation process will cover all the steps automatically. But, sometimes, the installation process may encounter an issue. If this is the case, it may be better to install all other prerequesities and then install Studio.

1. **Install 32bit Java**. Review the info in **[Installing Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/)** for Windows setup.

2. **Download [node.js](https://nodejs.org/#download)** and install it.

    ::: warning ⚠️ Warning
    Refer to [Node.js Compatibility Matrix](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#node.js) for which version to install.
    :::

3. Execute the following commands via the admin command prompt:

    ```bash
    npm install -g appcelerator
    appc use latest
    appc config set proxyServer null
    appc setup
    ```

4. **Download and install [Studio](https://platform.appcelerator.com/#/product/studio)** . Installing Studio automatically installs all other prerequisite software.

5. Launch Studio.

## Installing Studio on Linux

Linux systems require the GTK windowing system, Node.js, and the JDK to be installed before running Studio.

1. Review the info in [Get started with Axway Appcelerator CLI](https://platform.appcelerator.com/#/product/cli).

2. Install CLI using the following commands:

    ```bash
    sudo npm install -g appcelerator
    appc use latest
    appc setup
    ```

3. **Download and install [Studio](https://platform.appcelerator.com/#/product/studio)** .

::: warning ⚠️ Warning
Appcelerator Axway doesn't officially support Linux installs.
:::

## Where can I find Titanium examples?

Visite [Example Applications](/guide/Titanium_SDK/Titanium_SDK_Guide/Example_Applications/) for an assortment of examples and approaches to app design.

## Where can I download Studio?

1. Log in to [https://platform.axway.com](https://platform.axway.com).

2. Expand the AMPLIFY menu ![appc_menu0](./appc_menu0.png) and clicked on [App Builder Studio](https://platform.appcelerator.com/#/product/studio).

3. Download the installer or ZIP file for your operating system.

## How do I configure Studio behind a proxy?

See [Using Studio From Behind a Proxy](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Using_Studio_From_Behind_a_Proxy/) for details.

## How do I install Android Development Tools with Studio?

See [Installing the Android Development Tools](#undefined) for details.

## How do I install Java Development Tools with Studio?

See [Installing the Java Development Tools](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Installing_the_Java_Development_Tools/) for details.

## How do I extend Studio?

See [Extending Studio](#undefined) and select the document that is appropriate for your situation.

## Can I add source control to Studio?

Yes. See [Source Control](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Source_Control/) for details on which source controls systems Studio can utilize.

## How do I configure Studio's error reporting?

See [Studio Error Reporting](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_How-tos/Studio_Error_Reporting/#error-reporting-configuration) for details.
