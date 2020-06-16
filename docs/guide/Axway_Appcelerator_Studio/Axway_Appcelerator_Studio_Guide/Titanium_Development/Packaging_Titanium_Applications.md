---
title: Packaging Titanium Applications
weight: '60'
---

# Packaging Titanium Applications

## Introduction

After successfully running, testing and debugging your application, you are ready to package it, so it can be distributed in a mobile application store.

![Packaging](./Packaging.png)

To package your application for distribution, first select the project in the **Project Explorer** view, then in the global tool bar, select **Publish** from the **Launch Mode** drop-down list and a distributor from the **Target** drop-down list. If the **Launch Automatically** option is enabled under the **Target** drop-down list, the application will be automatically launched after the target is selected. If not, you need to click the **Launch** button to start the build process. The **Distribute** wizard appears asking you to fill in key pieces of information. After you publish an application for the first time, the next subsequent invocation of the **Distribute** wizard may not ask you for the same exact information and uses your previous settings.

Alternatively, you can select **Configuration...** to create custom configurations per application. The first run of the **Distribute** wizard and **Configuration** wizard provide the same options.

## Android

To package an Android application, first select the project in the **Project Explorer** view, then in the global tool bar, select **Publish** from the **Launch Mode** drop-down list and **Android App Store** from the **Device** drop-down list. A wizard appears asking you key pieces of information to package your application:

* **Distribution Location****:** Path where the Android application package (APK) file will be copied to.

* **Keystore Location**: Path to your keystore file that is used to sign your application. Click the **New** button to create a new keystore.

* **Keystore Password****:** Password to your keystore.

* **Key Alias**: Alias associated with your application's certificate.

Click the **Publish** button once you have entered all of the above information. Studio builds your application and generates an APK file in the specified location.

Before uploading your APK file to the Google Play store or another Android marketplace for distribution, you can verify and test the APK file.

To verify your APK is correctly signed, run the following command:

```
jarsigner -verify -verbose YOUR_PACKAGE.apk
```

To install your APK file to a single Android device or emulator, run the following command:

```
android-sdk/platform-tools/adb install YOUR_PACKAGE.apk
```

Refer to [Distributing Android apps](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Android_apps/) for more information about the Google Play store and generating a keypair and certificate.

## iOS

The process of packaging iOS applications is more involved. Refer to [Distributing iOS apps](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/) for more information about distributing your application through the App Store or using the ad hoc method to distribute IPA files to testers.

## Mobile Web

To package a Mobile Web application, first select the project in the **Project Explorer** view, then in the global tool bar, select **Publish** from the **Launch Mode** drop-down list and **Mobile Web** from the **Device** drop-down list. A wizard appears asking you how you want to package your mobile project. You can either:

* **Copy Mobile Web app to a directory in the local file system**: this option copies the Mobile Web app to the specified location. These files can be copied to a local or remote web site for deployment.

* **Copy Mobile Web app to an exisiting project**: this option copies the Mobile Web app to an existing project.

* **Create a new project for the Mobile Web app**: this option creates a new Web project (not a Mobile project) based on your Mobile Web app.

Click the **Publish** button. Studio builds your Mobile Web app and copies it to the specified location.
