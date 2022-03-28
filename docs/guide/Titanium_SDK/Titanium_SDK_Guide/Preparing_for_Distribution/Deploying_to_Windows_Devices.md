---
title: Deploying to Windows Devices
weight: '50'
---

# Deploying to Windows Devices

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::
::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

## Introduction

Use Appcelerator Studio or CLI to deploy your Titanium projects as Windows Phone applications, which can be deployed to Windows Phone devices. To deploy to a Windows tablet, you need to package a Windows Store app with Studio or the CLI, configure the tablet to sideload a package, and install the public certificate and package.

## Windows Phone

Before deploying the application to a Windows Phone device, you will need to:

* Set the Publisher ID in the CLI or Studio

* Register the device using the Windows Phone Developer Registration tool (part of the Windows Phone SDK)

* Connect the device to your computer with a USB cable

::: warning ⚠️ Warning
Currently, only one Windows Phone device may be plugged in to your computer to deploy. If multiple devices are plugged in, the build process will fail with an error.
:::

### Set the publisher ID

### Register the device

The following instructions are from [Windows Dev Center: How to register your phone for development for Windows Phone](https://msdn.microsoft.com/en-us/library/windows/apps/ff769508(v=vs.105).aspx).

1. Turn on your phone and unlock the phone screen.

2. On your phone, ensure that the date and time are correct.

3. Connect your phone to your computer by using the USB cable that came with your phone.

4. On your computer’s Start screen, switch to **All apps** view.

5. Under **Windows Phone SDK 8.1**, click **Windows Phone Developer Registration**.

6. Verify that the **Status** message displays **Identified Windows Phone device**. Click the **Register** button to unlock the phone. If your phone is already registered, the **Status** message indicates this and you see an **Unregister** button.

7. Click **Register**.

8. In the **Sign In** dialog box for your Microsoft account (formerly known as a Windows Live ID), enter the email address and password for your Microsoft account. Click **Sign In**. If you’re a registered developer, be sure to use the Microsoft account associated with your developer account.

9. After your phone is successfully registered, the **Status** message displays: "Congratulations! You have successfully unlocked your Windows Phone."

Your phone is now registered. You can now deploy apps to the phone.

### Deploy to a device with Studio

To deploy with Studio:

1. Select the project in the **Project Explorer** view.

2. In the global tool bar, select **Run** from the **Launch Mode** drop-down list.

3. Select **Windows Phone Device** from the **Target** drop-down list.

4. If the **Launch Automatically** option is enabled under the **Target** drop-down list, the application will be automatically launched after the device is selected. If not, you need to click the **Launch** button to start the build process.

Your app will be built, installed to your device and automatically launched.

![WindowsPhoneDevice](./WindowsPhoneDevice.png)

### Deploy to a device with the CLI

To deploy an application to a device with the CLI, run the following command:

```bash
ti build -p windows -T wp-device
```

## Windows tablet

To deploy to a Windows tablet, you need to [sideload](https://technet.microsoft.com/en-us/windows/jj874388.aspx) the application package to the device.

1. Package the application as a Windows Store app. For instructions, see [Distributing Windows Applications](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Windows_Applications/).

2. Enable the **Allow all trusted apps to install** group policy

3. Install the public certificate that was used to sign the package to the tablet's **Trusted Root Certification Authorities** store

4. Execute a PowerShell command to install the package to the tablet with the `Add-AppDevPackage` PowerShell script.

After you package the application, copy the project's `generated.cer` and `./dist/<PACKAGE_NAME>_Win32.appx` files to to a USB drive and plug it into the tablet.

### Edit group policy settings

To enable installation of the package, you need to update the device's group policy.

1. Go to the **Start** screen and type "edit group policy."

2. Click **Edit Group Policy**.

3. Expand **Computer Configuration \\** **Administrative Templates \\** **Windows Components**

4. Click **App Package Deployment**.

5. Double-click **Allow all trusted apps to install**.

6. Click **Enabled**.

7. Click **OK.**

### Install the certificate

Install the certificate you copied to the USB drive to the device's Trusted Root Certification Authorities store. You will need administrative privileges.

1. Double-click the certificate file.

2. Click **Install Certificate...** to open the Certificate Import wizard.

3. Click **LOCAL MACHINE**, then click **Next**.

4. Click **Place all certificates in the following store**, click **Browse**, click **Trusted Root Certification Authorities**, click **OK**, then click **Next**.

5. Click **Finish**.

A dialog should appear that the certificate was installed successfully.

### Install the package

Open PowerShell and execute the `Add-AppDevPackage` command to install the application.

1. Go to the **Start** screen and type `powershell`.

2. Click **PowerShell**.

3. Execute the following command to install the package:

    ```xml
    <TITANIUM_PROJECT_DIR>\build\windows\win10.x86\AppPackages\ProjectFolder\<PACKAGE_NAME>\Add-AppDevPackage.ps1
    ```

The application will be installed to the device and you can access it from the **All apps** screen.
