---
title: Debugging on Android Devices
weight: '20'
---

# Debugging on Android Devices

::: warning ⚠️ Warning
If you want to debug your Android app using Chrome DevTools, see [Debugging Android Apps with 3rd-party Tools](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_Android_Devices/Debugging_Android_Apps_with_3rd-party_Tools/) for details!
:::

## Introduction

Titanium SDK enables Studio to initiate a debug session on an Android device. Debugging on an Android device involves the following steps:

* User selects **Debug on Android Device**.

* Studio builds the application.

* Application is installed on the device.

* Application launches on the device.

* Application initiates debug session with Studio.

This page will guide you through the setup, and the launch, of a debug session.

::: warning ⚠️ Warning
You must already be set up to run applications on your Android device, as documented in [Deploying to Android Devices](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_Android_Devices/).
:::

## Starting a Debug Session

Before debugging, you must have created a Titanium project with an Android deploy target.

1. Make sure your project is selected in the **Project Explorer** view.

2. In the global tool bar, select **Debug** from the **Launch Mode** drop-down list.

3. Select the Android device you want to launch your project on in the **Target** drop-down list.

4. Click the **Launch** button.

5. Studio builds the application and installs it on the device.

The application will launch on the device and you can use the **Debug** perspective to start debugging your application.

After you have launched one debug session for a given application, Studio creates a launch configuration for you, named **Titanium Android Device - _AppName_**. You can select this launch configuration, after launching the **Debug Configuration** wizard by select **Debug Configurations** from the **Target** drop-down list, to skip the wizard and start a new debug session using the same parameters.

To change the SDK version that the application is built against:

1. In the global tool bar, select **Debug** from the **Launch Mode** drop-down list.

2. Select the **Debug Configuration** from the **Target** drop-down list.

3. Select the name of the launch configuration and click **Apply** to save changes or **Debug** to save changes and start a new debug session.

## Related Topics

* [Debugging Titanium Applications](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/)

    * [Debugging on the Emulator or Simulator](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_the_Emulator_or_Simulator/)

    * [Debugging on iOS Devices](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_iOS_Devices/)

* [About the Debug perspective](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/)

    * [Using the Debug View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Debug_View/)

    * [Using the Variables View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Variables_View/)

    * [Using the Console View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Using_the_Console_View/)

    * [Using the Breakpoints View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Breakpoints_View/)

    * [Using the Expressions View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Expressions_View/)

* [Stepping into and over functions](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Stepping_into_and_over_functions/)

* [Adding a breakpoint](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/)
