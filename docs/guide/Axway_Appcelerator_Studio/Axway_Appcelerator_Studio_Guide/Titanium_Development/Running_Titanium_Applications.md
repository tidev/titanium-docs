---
title: Running Titanium Applications
weight: '40'
---

# Running Titanium Applications

## Introduction

In Studio, Titanium applications may be executed in two modes:

* In run mode, the program executes, but the execution may not be suspended or examined.

* In debug mode, execution may be suspended and resumed, variables may be inspected, and expressions may be evaluated. For more information about debug mode, refer to [Debugging Titanium Applications](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/).

To launch a project in run mode, first select the project in the **Project Explorer** view, then in the global tool bar, select **Run** from the **Launch Mode** drop-down list and a device from the **Target** drop-down list. If the **Launch Automatically** option is enabled under the **Target** drop-down list, the application will be automatically launched after the target is selected. If not, you need to click the **Launch** button to start the build process.

If you do not see your device or simulator listed in the **Target** drop-down list, select **Refresh Device** from the **Target** drop-down list.

Alternatively, you can select **Run Configurations** (the last device option) to change your run-time options for a specific application and override the default values set in **Preferences**.

## Run Configurations

Use **Run Configurations** to change your run-time options on the fly. You can create custom run configurations for each of your projects and save them as a different name.

In the **Project Explorer** view, first select your project, then from the global toolbar, select **Run** from the **Launch Mode** drop-down list and select the **Run Configuration...** option under the **Device** drop-down list  to launch the **Run Configurations** dialog. Select the deployment target you want to build and launch your application for, then configure your run-time options in the **Main** tab.

The following sections below list the run configurations for building your application on a specific emulator, simulator or device. Some common configuration settings include:

* **Name**: name to call your run configuration. By default, Studio names them as: '\[Platform\] \[Deploy Target\] - \[Project Name\]'.

* **Project**: select the project to be built and executed.

* **Re-build Project on Launch**: if enabled, your code is rebuilt before being executed. This is an option for most emulators and simulators.

* **Log Level**: select the verbosity level of the output log. This is an option for most emulators and simulators.

* **Enable JavaScript Minification**: if enabled, your JavaScript code is minified (unnecessary white space is removed and code is obfuscated) before building. This is an option for most device builds (application installer).

### Android Application Installer

Configuration settings for building your application for Android devices:

* **Android SDK Version**: select the Google API level to build your application against.

### Android Emulator

Configuration settings for building your application for the Android emulator:

* **Android API**: select the Google API level to build your application against.

* **Screen**: select the emulator skin, which varies by the Google API selected in the previous option. For a description of the options, refer to [http://developer.android.com/tools/revisions/platforms.html](http://developer.android.com/tools/revisions/platforms.html).

### iOS Application Installer

Configuration settings for building your application for an iOS device:

* **Development Certificate**: select your iOS development certificate.

* **Keychain**: select your Mac OS X keychain access file.

* **Provisioning Profile**: select your iOS development provisioning profile.

* **SDK Version**: select the iOS SDK version to build your application against.

If you have not obtained a development certificate or created a provisioning profile, refer to [Deploying to iOS devices](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/).

You need to manually launch the application once it has been installed to the device.

### iOS Simulator

Configuration settings for building your application for an iOS simulator:

* **Device**: select either **iPhone** or **iPad**.

* **iOS SDK**: select the iOS SDK version to build your application against.

* **Simulator Version**: select the simulator version to run your application on.

* **Display Type**: select the simulator screen size: **Non-Retina**, **Retina** or **Retina & Tall**.

### Mobile Web Previewer on Emulator

Configuration settings for building your application to be previewed in a browser in an Android emulator:

* **Android API**: select the Google API level to build your application against.

* **Screen**: select the emulator skin, which varies by the Google API selected in the previous option. For a description of the options, refer to [http://developer.android.com/tools/revisions/platforms.html](http://developer.android.com/tools/revisions/platforms.html).

* **Preview Server**: select the web server to deliver the application.

### Mobile Web Previewer

Configuration settings for building your application to be previewed in a desktop browser:

* **Web Browser**: select the desktop browser to preview your application with.

* **Preview Server**: select the web server to deliver the application.

## Troubleshooting

Try cleaning and rebuilding your project.

1. From the menu, select **Project** > **Clean**.

2. A dialog appears. Select the projects you want to clean and click the **OK** button.

3. Build your project again. You can optionally enable the **Re-build Project on Launch** option with a **Run Configuration** for simulator and emulator builds.

### Android Emulator

#### Application Fails to Install Due to Insufficient Memory

1. Open the AVD configuration file with your favorite text editor. The following are the default locations:

    1. On Mac OS X systems, open ~/`.android/avd/<AVD_name>.avd/config.ini`.

    2. On Windows 7 and 8 systems, open `C:\Users\<user>\.android\avd\<AVD_name>.avd\config.ini`.

2. Add or edit the following variable:

```
disk.dataPartition.size=<size_in_MB>m
```

### iOS Simulator

#### Reserved Folder Names

Double-check that your project does not contain the following directories, which are reserved for Xcode projects:

* `Resources/Resources`

* `Resources/Frameworks`

#### Reset the Simulator

If all else fails, you can reset your simulator, which erases all data, settings and applications from your simulator. To reset your simulator:

1. Launch your simulator or start Xcode then select **Open Developer Tool** > **iOS Simulator** to start the simulator.

2. Select **iOS Simulator** > **Reset Content and Settings**.

3. A dialog appears asking to confirm your decision. Click the **Reset** button.
