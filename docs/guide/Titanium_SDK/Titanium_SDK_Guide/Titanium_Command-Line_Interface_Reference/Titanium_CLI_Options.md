---
title: Titanium CLI Options
weight: '10'
---

# Titanium CLI Options

## Introduction

The CLI configuration options allow you to override or specify default values. You can specify CLI options three different ways:

1. Set, remove, or append values using the titanium config command.

    ```
    # Display current CLI options that are configured
    ti config
    # Set a new value for CLI log level
    ti config cli.logLevel info
    # Append a value to paths.hooks
    ti config -a paths.hooks "/path/to/some/hook"
    # Remove all Android options
    ti config -r android
    ```

2. Pass in JSON string using the `--config` option. Do not use this parameter with either the`ti config` or `ti setup` command. This may cause errors when the JSON object is written back to the filesystem.

    ```
    # Pass in CLI hooks for this build process
    ti build -p ios --config "{ paths: { hooks: '/path/to/some/hook' } }"
    ```

3. Pass in the location to a JSON file that specifies your CLI options using the `--config-file` option.

    ```
    ti build -p ios --config-file "/Users/meMyselfAndI/customConfig.json"
    ```

## Options

These configuration settings are optional unless otherwise specified.

### Android

These options configure the CLI to use the Android SDK tools. If you do not have the the Android SDK platform-tools and tools in your PATH or the ANDROID\_SDK variable defined, the `android.sdkPath` needs to be defined to build Android applications. See also the Genymotion section.

#### android.adb.port

Specifies the port number the Android Debug Bridger is using.

**Default:** 5037

#### android.allowAppNameAmpersands

If set to true, the app name may contain ampersands. If set to false, the build is aborted if the app name contains an ampersand.

**Default**: false

#### android.appInstallTimeout

Timeout in milliseconds to wait for the application to install before failing the build.

**Default:** 120000 (2 minutes)

#### android.appInstallRetryInterval

Delay in milliseconds to reattempt installing the application if it fails once previously.

**Default:** 15000 (15 seconds)

#### android.appStartTimeout

Timeout in milliseconds to wait for the application to start before failing the build.

**Default:** 120000 (2 minutes)

#### android.appStartRetryInterval

Delay in milliseconds to reattempt starting the application if it fails once previously.

Default: 30000 (30 seconds)

#### android.autoSelectDevice

If set to true, the CLI picks the emulator or device to launch your application on. If set to false, the CLI presents you with a list of emulator or device options for you to choose to launch the application on.

**Default:** true

#### android.buildTools.selectedVersion

Selects the version of the Android build tools to use.

**Default**: Maximum auto-detected version

#### android.dx.maxMemory

Max memory that the Dexer (dx) command will use.

**Default:** "1024M"

#### android.emulatorStartTimeout

Timeout in milliseconds to wait for the emulator to become ready before failing to the build.

**Default:** 120000 (2 minutes)

#### android.excludeInvalidI18nStrings

If set to true, excludes the bad i18n strings from the build and the build continues. If set to false, the build breaks if bad i18n strings are found.

**Default**: false

#### android.executables.appt

Path to the Android Asset Packaging Tool (appt) executable (including the executable name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-sdk/build-tools/<version>/aapt"` if the Android SDK path is known

#### android.executables.adb

Path to the Android Debugger Bridge (adb) executable (including the executable name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-sdk/platform-tools/adb"` if the Android SDK path is known

#### android.executables.aidl

Path to the `aidl` executable (including the executable name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-sdk/build-tools/<version>/aidl"` if the Android SDK path is known

#### android.executables.android

Path to the Android (`android`) script (including the script name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-sdk/tools/android"` if the Android SDK path is known

#### android.executables.dx

Path to the Dexer (`dx`) script (including the script name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-sdk/build-tools/<version>/dx"` if the Android SDK path is known

#### android.executables.emulator

Path to the Android Emulator (`emulator`) executable (including the executable name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-sdk/tools/emulator"` if the Android SDK path is known

#### android.executables.mksdcard

Path to the `mksdcard` executable (including the executable name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-sdk/tools/mksdcard"` if the Android SDK path is known

#### android.executables.ndkbuild

Path to the `ndk-build` script (including the script name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-ndk/ndk-build"` if the Android NDK path is known

#### android.executables.zipalign

Path to the `zipalign` executable (including the executable name). If defined, the CLI will attempt to use this first before using the default location.

**Default**: `"android-sdk/tools/zipalign"` if the Android SDK path is known

#### android.javac.maxmemory

Sets the maximum JVM heap size.

**Default:** " 3072M "

#### android.javac.source

Specifies the Java version of the source code. Overridable at the project level using `tiapp.xml` application properties, for example:

```xml
<property name="android.javac.source" type="string">1.7</property>
```

**Default:** "1.6" (Java SE 6)

#### android.javac.target

Specifies the target Java version of the generated class files. Overridable at the project level using `tiapp.xml` application properties, for example:

```xml
<property name="android.javac.target" type="string">1.7</property>
```

**Default:** "1.6" (Java SE 6)

#### android.mergeCustomAndroidManifest

If true, merges the customer `AndroidManifest.xml` file with the default Titanium `AndroidManifest.xml` file and the Android manifest section from the `tiapp.xml` file.

If false, uses the custom `AndroidManifest.xml` file without performing any merge operations.

**Default**: false

#### android.ndkPath

Path to the Android NDK.

#### android.sdkPath

Path to the Android SDK. If undefined, the CLI attempts to use the ANDROID\_SDK or PATH variable to determine the location. If the CLI cannot find the Android SDK, it will prompt you to enter the location.

#### android.symlinkResources

If set to true, the CLI creates symlinks in the build folder to the Resource files.

If set to false, the CLI copies the Resource files to the build folder.

Only available for Mac OS X.

**Default:** true

### Application

These options configure Titanium application settings, such as project location and [tiapp.xml settings](/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/). (See also user.name.) None of these options are mandatory but are used as default options when creating a new project.

#### app.idprefix

String value to prepend to the application name and used as the default value for the application ID when creating a new project.

#### app.publisher

String value used as the default publisher in new projects.

#### app.skipAppIdValidation

If set to true, the application ID is not validated.

**Default**: false

#### app.skipVersionValidation

If set to true, the version is not validated.

**Default**: false

#### app.url

String value used as the company URL in new projects.

#### app.workspace

Path to use as the workspace directory for new projects.

### CLI

These settings configure global CLI options.

#### cli.analytics.showErrors

If set to true, displays errors when sending analytic data if any are encountered.

**Default**: false

#### cli.colors

If set to true, turns on color output.

**Default:** true

#### cli.failOnWrongSDK

If set to true and the selected Titanium SDK version does not match the SDK version found in the `tiapp.xml` file, the build fails with an error. If set to false, the CLI uses the SDK found in the `tiapp.xml` file.

**Default:** false

#### cli.hideCharEncWarning

If set to true, hides terminal character encoding warnings.

**Default:** false

#### cli.httpProxyServer

Specifies the URL to use as the proxy server. Must be an HTTP or HTTPS protocol.

**Default**: undefined (do not use a proxy)

#### cli.ignoreDirs

A regular expression defining the directories the CLI should ignore.

**Default**: "^(.svn|.git|.hg|.?\[Cc\]\[Vv\]\[Ss\]|.bzr|$RECYCLE.BIN)$"

#### cli.ignoreFiles

A regular expression defining the file the CLI should ignore.

**Default:** "^(.gitignore|.npmignore|.cvsignore|.DS\_store|.\_\*|\[Tt\]humbs.db|.vspscc|.vssscc|.sublime-project|.sublime-workspace|.project|.tmproj)$"

#### cli.logLevel

Sets the log level of the CLI. Values can be either `error`, `warning`, `info`, `debug` or `trace`.

**Default**: "trace"

#### cli.prompt

If set to true, the CLI prompts you for missing information. If set to false and the CLI is missing options to complete the operation, the operation fails.

**Default**: true

#### cli.progressBars

If set to true, the CLI displays progress bars and busy spinners during long operations.

**Default**: true

#### cli.quiet

If set to true, the CLI suppresses all console output.

**Default:** false

#### cli.rejectUnauthorized

If set to true, the CLI rejects bad SSL certificates.

**Default**: true

#### cli.width

Specifies the width at which to wrap CLI text, such as `ti help` and `ti info` messages. This does not set the text wrap for console output.

**Default**: 100

### Genymotion

These settings configure Genymotion to test your Android applications. The only required settings are `genymotion.enabled` and `genymotion.path`. You must also specify the `--device-id` option with the Titanium build command to specify a Genymotion emulator. The path to the executables are based on the `genymotion.path` setting.

#### genymotion.enabled

Required to enable Genymotion support.

If set to true, Genymotion support is enabled with the CLI.

**Default**: false

#### genymotion.executables.genymotion

Path to the `genymotion` executable (including the executable name).

#### genymotion.executables.player

Path to the `player` executable (including the executable name).

#### genymotion.executables.vboxmanage

Path to the VirtualBox `vboxmanage` executable (including the executable name).

#### genymotion.home

Path to the Genymotion virtual machine data directory.

#### genymotion.path

Path to the Genymotion application directory.

### HAXM

These settings configure the Intel Hardware Accelerated Execution Manager.

#### haxm.plist

Path to the Intel HAXM plist file.

**Default**: "/Library/Preferences/com.intel.kext.haxm.plist" on OS X, nothing on Windows.

### iOS

These settings configure optional iOS settings. See also `osx.executables.xcodeSelect` and `paths.xcode`.

#### ios.autoSelectDevice

If set to true, the CLI picks the emulator or device to launch your application on. If set to false, the CLI presents you with a list of emulator or device options for you to choose to launch the application on.

**Default:** true

#### ios.developerName

Name of the iOS Developer certificate to use when building for a device.

#### ios.distributionName

Name of the iOS Distribution certificate to use when building for the App Store or for Adhoc distribution.

#### ios.symlinkResources

If set to true, the CLI creates symlinks in the build folder to the Resource files.

If set to false, the CLI copies the Resource files to the build folder.

**Default:** true

### Java

These settings configure optional JDK settings. The CLI will attempt to use the JAVA\_HOME or PATH environment variables to determines the location of these binaries.

#### java.executables.jarsigner

Path to the JDK `jarsigner` executable (including the executable name).

#### java.executables.java

Path to the JDK `java` executable (including the executable name).

#### java.executables.javac

Path to the JDK `javac` executable (including the executable name).

#### java.executables.keytool

Path to the JDK `keytool` executable (including the executable name).

#### java.home

Path to the JDK directory.

**Defaults:** JAVA\_HOME environment variable if defined.

### OS X

Configuration settings for the CLI when running on Mac OS X. The CLI will attempt to use the PATH environment variable to determine the location of the binaries.

#### osx.executables.gperf

Path to the `gperf` executable (including the executable name).

#### osx.executables.make

Path to the `make` executable (including the executable name).

#### osx.executables.security

Path to the `security` executable (including the executable name).

#### osx.executables.which

Path to the `which` executable (including the executable name).

#### osx.executables.xcodeSelect

Path to the `xcode-select` executable (including the executable name).

### Paths

These settings allow the CLI to search for items in the specified paths. These settings are array of paths.

#### paths.commands

Path to JavaScript files implementing additional CLI commands.

#### paths.hooks

Path to JavaScript files implementing CLI hooks.

#### paths.modules

Path to Titanium modules to use with the CLI. The CLI will also search the Titanium SDK locations for modules.

#### paths.plugins

Paths to plugins to use with the CLI.

#### paths.sdks

Paths to Titanium SDKs to use with the CLI. For the Titanium SDK installation path, see `sdk.defaultInstallLocation`.

#### paths.xcode

Paths to Xcode installations to use with the CLI.

### SDK

These settings configure the CLI to use the Titanium SDK. The `sdk.selected` setting is required.

#### sdk.defaultInstallLocation

Path to the location of where to install the Titanium SDKs. The defaults vary by operating system. The CLI will search for the SDKs in the following locations:

**Defaults:**

* **Mac OS X**

    * `~/Library/Application Support/Titanium` (default)

    * `/Library/Application Support/Titanium`

* **Windows**

    * `%ProgramData%\Titanium` (CLI default)

    * `%APPDATA%\Titanium` (Studio defaults)

    * `%ALLUSERSPROFILE%\Application Data\Titanium`

#### sdk.selected

Required to be set to build, create or clean Titanium projects.

Name of the selected Titanium SDK, for example, "3.2.2.GA", that is used to imploy the `build`, `clean` and `create` commands. You can also set this value using the `titanium sdk select` command. If you do not specify the Titanium SDK version in either the `tiapp.xml` file, `--sdk` command-line option or the `app.sdk` setting, then the CLI will use this version to build your application.

### User

These settings configure the user using the CLI.

#### user.email

AMPLIFY Appcelerator Services login e-mail address. Account to use with the `titanium login` command.

#### user.locale

User's locale, for example, "en\_US".

**Default:** Locale reported by the operating system

#### user.name

User's name.

### Windows

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::
::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

These settings configure the CLI for Windows Phone and Windows Store development.

#### windows.publisherId

Windows Publisher ID. Required for building and packaging Windows applications. Used to generate the `appmanifest.xml` file and signing certificates.

#### windows.phone.publisherGuid

Windows Phone Publisher ID. Used to deploy your Windows Phone application to an emulator or device.

#### windows.phone.productId

Windows Phone 8 Product ID. Used to upgrade Window 8 apps to Windows 8.1.

#### windows.visualstudio.selectedVersion

Selected version of Microsoft Visual Studio, such as "`Visual Studio Community 2017`". Used to specify preferred Visual Studio to build an app.

#### windows.sdk.selectedVersion

Selected version of Windows SDK, such as "`10.0.16299.0`". Used to specify preferred Windows SDK version to build an app.
