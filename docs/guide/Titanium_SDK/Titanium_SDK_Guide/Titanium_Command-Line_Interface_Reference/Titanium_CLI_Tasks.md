---
title: Titanium CLI Tasks
weight: '30'
---

# Titanium CLI Tasks

Titainum provides a command-line interface to check and configure your environment setup, create and build applications, and much more. The Titanium CLI is distributed as apart of the Titanium CLI. Please refer to [Titanium CLI Getting Started](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/Appcelerator_CLI_Getting_Started/) for details on installing the Titanium CLI.

Run `ti --help` to see all available target options or see the [Titanium Command-Line Interface Reference](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/).

## Development environment

Before using the Titanium CLI to create and build Titanium projects, you need to make sure your development environment is correctly configured.

### Check your development environment

To check if you current development environment is setup correctly to build projects, run the `ti setup check` command. This command will report what tools are configured to work with the CLI.

**Output Examples:**

The following output indicates that `node` and `npm` are installed correctly but may be updated.

```bash
Node.js
  ★  node               new version v0.10.28 available! (currently v0.10.13)
  ★  npm                new version v1.4.13 available! (currently v1.3.2)
```

The following output indicates that your Android environment is not setup correctly.

```
Android Environment
  !  sdk                Android SDK not found
  !  targets            no targets found
  !  avds               no avds found
```

### Check the development environment against the Titanium SDK

The `ti info` command retrieves detailed information about your platform environment, such as Android SDKs installed, and iOS certificates and provisioning profiles. Use this command to check if your currently selected Titanium SDK supports your development environment.

**Output Examples:**

The following output indicates that your Android environment is not setup correctly and provides you with some resolution steps.

```
Android Issues
  ✕  Unable to locate an Android SDK. If you have already downloaded and installed the Android SDK,
     you can tell Titanium where the Android SDK is located by running 'titanium config
     android.sdkPath /path/to/android-sdk', otherwise you can install it by running 'titanium setup
     android' or manually downloading from http://appcelerator.com/android-sdk.
```

The following output indicates that your iOS environment is fine, but you have older versions of Xcode installed.

```
iOS Issues
  !  Xcode 4.3 is too old and is no longer supported by Titanium SDK 3.3.0. The minimum supported
     Xcode version by Titanium SDK 3.3.0 is Xcode 5.0.
  !  Xcode 4.4.1 is too old and is no longer supported by Titanium SDK 3.3.0. The minimum supported
     Xcode version by Titanium SDK 3.3.0 is Xcode 5.0.
```

### Configuring your development environment

By default, the Titanium CLI uses your environment variables to search for paths to executables and other development tools. If you installed these tools in custom locations or the CLI cannot find them, you will need to use the `ti config` command to tell the CLI where to find these tools. The example below sets some common Android configuration options. For a detailed list of configurable options, see [Titanium CLI Options](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/Titanium_CLI_Options/).

```bash
## Set the location of the Android SDK
ti config android.sdkPath ~/opt/android_sdk
## Set the location of the Android NDK
ti config android.ndkPath ~/opt/android_ndk
## Enable support for Genymotion virtual device
ti config genymotion.enabled true
```

## Building applications

Once you have your development environment correctly configured, you can create and build Titanium applications.

### Create a Titanium project

To create a new Titanium project, run the `ti create` command. The CLI will prompt you to fill in the necessary information to create a project, such as which platforms the application runs on and the name of the project. To create a new project with all the information specified in the command, run:

```bash
ti create -t app --id <APP_ID> -n <APP_NAME> -p <PLATFORMS> -d <WORKSPACE_DIRECTORY> -u <APP_URL>
## Example
ti create -t app --id com.appcelerator.sample -n SampleProject -p android,ios -d ~/Documents/Titanium_Studio_Workspace -u https://titaniumsdk.com
```

### Build an application

To build a Titanium project to test on a device, simulator or emulator, run the `ti build` command from the project directory. The CLI will prompt you to fill in the necessary information to build the project, such as which platform you want to test the application on. More detailed examples are listed below.

Once the application is installed and launched, use native tools to test, debug and profile your application. See [Debugging and Profiling](/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/).

::: warning ⚠️ Warning
**SDK version setting precedence**

The CLI checks several settings to see which SDK version to use to build your application. The following is a list of locations in the order of precedence. If an SDK version is not defined in that location, the next location is checked.

1. `tiapp.xml` file version specified with the `sdk-version` tag.
    To change this version, manually edit the `tiapp.xml` file with a text editor or use Studio.

2. `--sdk` command-line option with the `titanium build` command.

3. `app.sdk` setting specified with the `titanium config` command.
    To check the version, run `titanium config` and to change the version, run `ti config app.sdk <sdk_version>`.

4. SDK select version.
    To check or change this version, run `ti sdk select`.
:::

#### Android emulator

You need to create an Android emulator or setup Genymotion before running these commands.

* To create an Android emulator, see [Native Android Debugging and Testing Tools: Creating an emulator](/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Native_Android_Debugging_and_Testing_Tools/#creating-an-emulator).

* To setup Genymotion, see [Installing Genymotion](#undefined).

To build for an emulator, run `ti build -p android`. Because no other options were specified, the CLI launches your default Android emulator and installs the application on it.

To launch a specific Android or Genymotion emulator, add the `-C <EMULATOR_NAME>` option.

```bash
ti build -p android -C "Google Nexus 7 - 4.4.2 - API 19 - 800x1280"
```

To retrieve a list of Android or Genymotion emulators, run the `ti info -p android` command.

#### Android device

To build for an Android device, connect your device to the computer with a USB cable, then run:

```bash
ti build -p android -T device -C <DEVICE_ID>
## Example
ti build -p android -T device -C deadbeef
```

#### iOS simulator

To build for an iOS simulator, run `ti build -p ios`. Because no other options were specified, the CLI launches the application on the default iOS simulator.

To use a specific simulator, add the `-C <SIMULATOR_NAME>` option.

```bash
ti build -p ios -C "iPad Retina"
```

To retrieve a list of simulator names, run the `ti build --help` option and look at the `-C, --device-id` option under the "Build iOS Options".

#### iOS device

Before deploying to an iOS device for testing, you need to generate a development certificate and development provisioning profile. See [Deploying to iOS devices](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/).

The CLI allows you to install your application directly to the device connected to your computer with a USB cable.

To build for an iOS device, run:

```bash
ti build -p ios -T device  -C <DEVICE_UDID> [-V "<DEVELOPER_CERTIFICATE_NAME>"  -P <PROVISIONING_PROFILE_UUID>]
## Example
ti build -p ios -T device -C itunes -V "Loretta Martin (GE7BAC5)" -P "11111111-2222-3333-4444-555555555555"
ti build -p ios -T device -C "iOS Device" -V "Loretta Martin (GE7BAC5)" -P "11111111-2222-3333-4444-555555555555"
```

If you omit the `-V` and `-P` options, the CLI will prompt you with options. You can also retrieve the information from Xcode's Devices window (or Organizer window for Xcode 5.x and older) or with the `ti info -p ios` command.

### Package an application

#### Google Play APK

Before packaging an APK file for distribution, you need to generate a keypair and certificate for your application. See [Distributing Android apps](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Android_apps/).

To package an APK for Google Play, run:

```bash
ti build -p android -T dist-playstore [-K <KEYSTORE_FILE> -P <KEYSTORE_PASSWORD> -L <KEYSTORE_ALIAS> -O <OUTPUT_DIRECTORY>]
## Example
ti build -p android -T dist-playstore -K ~/android.keystore -P secret -L foo -O ./dist/
```

If you omit any of the optional parameters, you will be prompted by the CLI to enter these values. If the password for the private key of the keystore is different from the password for the keystore, add the `--key-password <KEYPASS>` option with the password of your private key.

#### iOS ad hoc distribution

Before packaging for the iOS ad hoc distribution, you need to generate a distribution certificate and distribution provisioning profile. See [Distributing iOS apps](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/).

To package an IPA file for Ad Hoc distribution, run:

```bash
ti build -p ios -T dist-adhoc [-R <DISTRIBUTION_CERTIFICATE_NAME> -P <PROVISIONING_PROFILE_UUID> -O <OUTPUT_DIRECTORY>]
## Example
ti build -p ios -T dist-adhoc -R "Pseudo, Inc." -P "FFFFFFFF-EEEE-DDDD-CCCC-BBBBBBBBBBBB" -O ./dist/
```

If you omit any of the optional parameters, the CLI will prompt you with options.

#### iTunes Store

Before packaging for the iTunes Store, you need to generate a distribution certificate and distribution provisioning profile, and have an iTunes Connect account. See [Distributing iOS apps](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/).

::: warning ⚠️ Warning
If you are using Mac OS X 10.9 (Mavericks) or newer, make sure you grant CLI access to the computer as described in [Note for Mavericks (and later)](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/#note-for-mavericks-and-later).
:::

To package an APP bundle for the iTunes store, run:

```bash
ti build -p ios -T dist-appstore [-R <DISTRIBUTION_CERTIFICATE_NAME> -P <PROVISIONING_PROFILE_UUID>]
## Example
ti build -p ios -T dist-appstore -R "Pseudo, Inc." -P "AAAAAAAA-0000-9999-8888-777777777777"
```

The CLI installs the package to Xcode's Organizer and launches Organizer for you to start the submission process.

If you omit any of the optional parameters, the CLI will prompt you with options.

### Clean your build folder

If you run into issues building your application, you may need to clean your build folder. Run the `ti clean` command or to clean for a specific platform, add the `-p <PLATFORM>` option.

```bash
ti clean [-p <PLATFORM>]
## Examples
ti clean
ti clean -p ios
```
