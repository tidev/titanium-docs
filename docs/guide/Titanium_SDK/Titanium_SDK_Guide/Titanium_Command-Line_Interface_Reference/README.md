---
title: Titanium Command-Line Interface Reference
weight: '110'
---

# Titanium Command-Line Interface Reference

The Titanium Command-Line Interface (CLI) is a Node.js-based command-line tool for managing, building, and deploying Titanium projects.

## Titanium CLI quick start

Getting started with the CLI only requires two steps:

1. Install Node.js.

2. Install and configure the CLI.

### Install and configure the CLI

1. Install the `titanium` CLI.

    ```bash
    npm install titanium -g
    ```

2. Download the latest Titanium SDK.

    ```
    titanium sdk install --default
    ```

3. Configure CLI (optional).

    ```
    titanium setup
    ```

    The script prompts you to enter basic information, such as your name, default locale, default SDK version, and default workspace folder.

If you encounter an error installing `titanium`, see [Issues installing NPM packages](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/#issues-installing-npm-packages).

## Titanium commands

If you don't specify all of the required options, `titanium` prompts you for the missing options.

* [Build](#build)

* [Clean](#clean)

* [Config](#config)

* [Create](#create)

* [Help](#help)

* [Info](#info)

* [Module](#module)

* [Plugin](#plugin)

* [Project](#project)

* [SDK](#sdk)

* [Setup](#setup)

### Build

Builds and runs an application or module project.

::: warning ⚠️ Warning
**SDK version setting precedence**

The CLI checks several settings to see which SDK version to use to build your application. The following is a list of locations in the order of precedence. If an SDK version is not defined in that location, the next location is checked.

1. `tiapp.xml` file version specified with the `sdk-version` tag.
    To change this version, manually edit the tiapp.xml file with a text editor.

2. `--sdk` command-line option with the `titanium build` command.

3. `app.sdk` setting specified with the `titanium config` command.
    To check the version, run `titanium config` and to change the version, run `titanium config app.sdk <sdk_version>`.

4. SDK select version.
    To check or change this version, run `titanium sdk select`.
:::

```bash
# Titanium CLI
titanium build --platform <platform> [--build-only] [--force] [--project-dir <value>] [--sdk <value>] [--log-level <level>] [ <platform_build_options> ]

# Titanium CLI
ti build --platform <platform> [--build-only] [--force] [--project-dir <value>] [--sdk <value>] [--log-level <level>] [ <platform_build_options> ]
```

#### Generic build options and flags

| Option | Description |
| --- | --- |
| `-b, --build-only` | Only perform the build; when specified, does not install or run the app.  <br />  <br /> |
| `-f, --force` | Force a clean rebuild. |
| `--skip-js-minify` | Bypasses JavaScript minification. Simulator builds are never minified. Only supported for Android and iOS. |
| `--log-level <level>` | Minimum logging level. Supported options are **trace**, **debug**, **info**, **warn**, and **error**. |
| `-p, --platforms <platform>` | Target build platform: Supported values are **android** and **ios**. (**iphone** and **ipad** are currently accepted as synonyms for **ios**.) |
| `-d, --project-dir <directory>` | Directory containing the project, otherwise the current working directory is assumed. |
| `-s, --sdk <version>` | Titanium SDK version to build with. If not specified, uses the configured default SDK. |

#### Android build options

| Option | Description |
| --- | --- |
| `-A, --android-sdk <path>` | Path to the Android SDK. |
| `-C, --device-id <name>` | Name of the device or emulator to install the application to. When --target is "device", then you can specify "all" to install the app to all connected devices. |
| `-D, --deploy-type <type>` | Controls several settings such as optimization, encryption, and analytics. Type can be **development**, **test**, or **production**.<br /><br />When --target is "emulator", the deploy type defaults to **development**, but can be set to **test**.<br /><br />When --target is "device", the deploy type defaults to **test**, but can be set to **development**.<br /><br />When --target is "dist-playstore", the deploy type is **production** and cannot be overwritten.<br /><br />Note that **test** will minify and encrypt your JavaScript source code. Any JavaScript syntax errors, even files you are not using, will result in a build failure. |
| `-K, --keystore <path>` | Location of the keystore file. |
| `--key-password <keypass>` | Password of the keystore private key. Defaults to value specified with --store-password. |
| `--liveview` | Starts a [LiveView](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/LiveView/) session to let you quickly preview changes to your application's UI.  |
| `-L, --alias <alias>` | Alias for the keystore. |
| `--no-launch` | Disables launching the app after installing. |
| `-O, --output-dir <dir>` | Output directory (used when `target` is **dist-playstore**). |
| `-P, --store-password <password>` | Password for the keystore. |
| `--sigalg <algorithm>` | The digital signature algorithm to sign the .apk with. Possible algorithms are **MD5withRSA**, **SHA1withRSA**, and **SHA256withRSA**. |
| `-T, --target <value>` | Target to build for. Target can be **emulator**, **device**, or **dist-playstore**. |

#### iOS build options and flags

| Option | Description |
| --- | --- |
| `-C, --device-id <name>` | Name of the device or emulator to install the application to. When --target is "device", then you can specify "all" to install the app to all connected devices. |
| `-D, --deploy-type <type>` | Controls several settings such as optimization, encryption, and analytics. Type can be **development**, **test**, or **production**.<br /><br />When --target is "simulator", the deploy type defaults to **development**, but can be set to **test**.<br /><br />When --target is "device", the deploy type defaults to **test**, but can be set to **development**.<br /><br />When --target is "dist-appstore" or "dist-adhoc", the deploy type is **production** and cannot be overwritten.<br /><br />Note that **test** will minify and encrypt your JavaScript source code. Any JavaScript syntax errors, even files you are not using, will result in a build failure. |
| `--force-copy` | Forces files to be copied instead of symlinked for simulator builds only. |
| `--force-copy-all` | Identical to the --force-copy flag except this will also copy the 32.5 MB libTiCore.a file. **Removed since 8.0.0 and moving to the native JavaScriptCore library.** |
| `--launch-watch-app` | Launch both the watch app and main app; only used when target is **simulator** . |
| `--launch-watch-app-only` | Launch only the watch app; only used when target is **simulator** . |
| `--sim-focus` | Focus the iOS simulator (default is true). To not focus the simulator, use --no-sim-focus. |
| `-V, --developer-name <name>` | iOS Developer Certificate to use; required when target is **device**. |
| `-F, --device-family <value>` | Device family to build for (**iphone**, **ipad**, or **universal**). Default is **universal**, however if --target is set to "ipad", then the value defaults to **ipad**. |
| `-I, --ios-version <value>` | iOS SDK version to build for. Default: latest installed iOS SDK. |
| `-K, --keychain <value>` | Path to the distribution keychain to use instead of the system default; only used when target is **device**, **dist-appstore**, or **dist-adhoc**. |
| `--launch-bundle-id <id>` | After installing the app in the iOS Simulator, launch a different app instead of the app that was just built. Useful if you need to launch a test runner that in turn launches your app. |
| `-O, --output-dir <dir>` | Output directory. Only used when target is **dist-adhoc**. |
| `-P, --pp-uuid <uuid>` | Provisioning profile uuid; required when target is **device**, **dist-appstore**, or **dist-adhoc**. |
| `-R, --distribution-name <name>` | iOS Distribution Certificate to use; required when target is **dist-appstore** or **dist-adhoc**. |
| `--sim-focus` | Focus the iOS Simulator after launching. Defaults to **true**. |
| `-T, --target <value>` | Target to build for: **simulator**, **device**, **dist-appstore**, or **dist-adhoc**. |
| `--watch-app-name <name>` | Name of the watch app to launch; only used when target is **simulator** . |
| `-W, --watch-device-id <udid>` | Watch simulator UDID to launch when building an app with a watch app; only used when target is **simulator** . |
| `-Y, --sim-type <type>` | iOS Simulator type: **iphone** or **ipad**; only used when target is **simulator**. |

### Clean

Removes the build directories for an application or module project.

```bash
# Titanium CLI
titanium clean [ --platform <platform> ] [--project-dir <value>] [--sdk <value>] [--log-level <level>]

# Titanium CLI
ti clean [ --platform <platform> ] [--project-dir <value>] [--sdk <value>] [--log-level <level>]
```

::: warning ⚠️ Warning
You need to keep historical version of your module in your `dist` folder in a safe place (e.g. source control). Running this updated command will wipe out anything in the `dist` folder.
:::

**Best practice**: don't use releases as a means of archiving. Releases should be published in a stable location such as Github, S3, etc. But, if you wish to keep old releases in the module, you should consider using a different folder to archive your content in the `dist` folder and commit that zip to your source control before cleaning.

#### Clean options

| Option | Description |
| --- | --- |
| `--log-level <level>` | Minimum logging level. Supported options are **trace**, **debug**, **info**, **warn**, and **error**. |
| `-p, --platforms <platform>` | A single platform to clean: **android** and **ios**|
| `-d, --project-dir <directory>` | Directory containing the project, otherwise the current working directory is assumed. |
| `-s, --sdk <version>` | Titanium SDK version to build with. If not specified, uses the configured default SDK. |

### Config

Gets and sets configuration options. If no key is specified, then all key/values are returned.

```bash
# Titanium CLI
titanium config [--remove] [--output <value>] [<key>] [<value>]

# Titanium CLI
ti config [--remove] [--output <value>] [<key>] [<value>]
```

#### Config Options

| Option | Description |
| --- | --- |
| `-a, --append` | Appenda a value to a key containing a list of values. |
| `-r, --remove` | Removes the specified config key and all its descendants. |
| `-o, --output <value>` | Selects the output format: **report**, **json**, or **json-object**. Defaults to **report**. |

### Create

Creates a new application or module project.

```bash
# Titanium CLI
titanium create [ --type <type> ] [ --platforms <platforms> ] [--project-dir <value>] [--sdk <value>] [--log-level <level>]

# Titanium CLI
ti create [ --type <type> ] [ --platform <platforms> ] [--project-dir <value>] [--sdk <value>] [--log-level <level>]
```

#### Create options

| Option | Description |
| --- | --- |
| `-f, --force` | Force creation of the project, even if the path already exists. |
| `--id <value>` | Application ID. For uniqueness, application IDs should be based on a registered domain name, in reverse-DNS order (for example, `com.example.mygreatapp`). |
| `--log-level <level>` | Minimum logging level. Supported options are **trace**, **debug**, **info**, **warn**, and **error**. |
| `--template <value>` | Project template to use--either a name of a template to use or files to copy over to the newly created project. The file to be copied over can either be placed in a directory, ZIP file or ZIP file with a remote URL. |
| `-d, --workspace-dir <value>` | Directory to place the project in. Defaults to the workspace directory set in the `titanium` configuration, if any. |
| `-n, --name <value>` | Name of the project. Used as the default human-readable name for the project. |
| `-p, --platforms <platform>` | Comma-separated list of platforms: supported values are **android** and **ios**. (**iphone** and **ipad** are currently accepted as synonyms for **ios**.) |
| `-s, --sdk <version>` | Titanium SDK version to build with. If not specified, uses the configured default SDK. This can be changed later in the tiapp.xml. |
| `-t, --type <value>` | Type of project to create (defaul:<br /><br />* **app** (default)<br />    <br />* **applewatch**<br />    <br />* **module** (or **timodule** if using the Titanium CLI) |
| `-u --url <value>` | Your company/personal URL. |

### Help

Displays the help screen.

```bash
# Titanium CLI
titanium help
titanium help <command>
titanium --help
titanium <command> --help

# Titanium CLI
ti help
ti help <command>
ti --help
ti <command> --help
```

### Info

Displays development environment information.

```bash
# Titanium CLI
titanium info [--output <value>] [--types <value>]

# Titanium CLI
ti info [--output <value>] [--types <value>]
```

#### Info options

| Option | Description |
| --- | --- |
| `-o, --output <value>` | Selects the output format: **report** or **json**. Defaults to **report**. |
| `-t, --types <value>` | Comma-separated list of types to display: **all**, **os**, **nodejs**, **titanium**, **ios**, **jdk**, **haxm** and **android**. Defaults to **all**. |

### Module

Manages installed Titanium modules.

```bash
# Titanium CLI
titanium module [<subcommand>]

# Titanium CLI
ti module [<subcommand>]
```

#### Module list

Prints a list of installed modules.

```bash
# Titanium CLI
titanium module [--output <value>] [--project-dir <value>]
titanium module list [--output <value>] [--project-dir <value>]

# Titanium CLI
ti module [--output <value>] [--project-dir <value>]
ti module list [--output <value>] [--project-dir <value>]
```

##### Module list options

| Option | Description |
| --- | --- |
| `-o, --output <value>` | Selects the output format: **report**, **json** or **grid**. Defaults to **report**. |
| `--project-dir <value>` | Directory of the project to analyze. Defaults to the current working directory. |

### Plugin

Manages installed Titanium plugins.

```bash
# Titanium CLI
titanium plugin [<subcommand>]

# Titanium CLI
ti plugin [<subcommand>]
```

#### Plugin list

Prints a list of installed plugins.

```bash
# Titanium CLI
titanium plugin [--output <value>] [--project-dir <value>]
titanium plugin list [--output <value>] [--project-dir <value>]

# Titanium CLI
ti plugin [--output <value>] [--project-dir <value>]
ti plugin list [--output <value>] [--project-dir <value>]
```

##### Plugin list options

| Option | Description |
| --- | --- |
| `-o, --output <value>` | Selects the output format: **report**, **json** or **grid**. Defaults to **report**. |
| `--project-dir <value>` | Directory of the project to analyze. Defaults to the current working directory. |

### Project

Gets `tiapp.xml` settings.

It also allows you to set the deployment-targets using a comma-separated list of platforms. If a specific platform is being enabled for the first time, it will also non-destructively copy that platform's default resources into your project's Resources folder. For example, if your app currently supports "iphone" and you wish to add Android support, you must specify "iphone,android". Note that the deployment target requires you to explicitly set "iphone" and "ipad".

```bash
# Titanium CLI
titanium project [--output <value>] [--project-dir <value>] [--template <value>] [--sdk <value>] [--log-level <level>] [<key>] [<value>]

# Titanium CLI
ti project [--output <value>] [--project-dir <value>] [--template <value>] [--sdk <value>] [--log-level <level>] [<key>] [<value>]
```

#### Project options

| Option | Description |
| --- | --- |
| `-o, --output <value>` | Selects the output format: **report**, **json** or **text**. Defaults to **report**. |
| `--project-dir <directory>` | Directory containing the project, otherwise the current working directory is assumed. |

### SDK

Manages installed Titanium SDKs.

```bash
# Titanium CLI
titanium sdk [<subcommand>]

# Titanium CLI
ti sdk [<subcommand>]
```

#### SDK install

Downloads the latest Titanium SDK or a specific version.

```bash
# Titanium CLI
titanium sdk install [<version>] [--default] [--force] [--branch <branch name>]

# Titanium CLI
ti sdk install [<version>] [--default] [--force] [--branch <branch name>]
```

`<version>` may be either a specific version number, such as `12.2.0.GA`, a URL like `https://nightly.link/tidev/titanium-sdk/actions/runs/6285955863/mobilesdk-12.3.0.v20230923211249-linux.zip` or a ZIP file if you downloaded a build locally.

To override this behavior, set the `sdk.defaultInstallLocation` key to a path where you want to install the SDKs, for example:

```bash
# Titanium CLI
titanium config sdk.defaultInstallLocation /path/to/intall/sdks

# Titanium CLI
ti config sdk.defaultInstallLocation /path/to/intall/sdks
```

##### SDK install options

| Option | Description |
| --- | --- |
| `-d, --default` | Sets as the default SDK. |
| `-f, --force` | Forces reinstallation. |
| `-k, --keep-files` | Keep downloaded files after install. |
| `-b, --branch <branch name>` | Branch to install or "latest". |

#### SDK list

Prints a list of installed SDK versions.

```bash
# Titanium CLI
titanium sdk [--branches] [--releases] [--output <value>]
titanium sdk list [--branches] [--releases] [--output <value>]

# Titanium CLI
ti sdk [--branches] [--releases] [--output <value>]
ti sdk list [--branches] [--releases] [--output <value>]
```

##### SDK list options

| Option | Description |
| --- | --- |
| `-b, --branches` | Retrieves and prints all branches. |
| `-r, --releases` | Retrieves and prints all releases. |
| `-o, --output <value>` | Selects the output format: **report** or **json**. Defaults to **report**. |

#### SDK select

Used to select which installed Titanium SDK is the active SDK. This is not the SDK your application will be built with but the SDK used to run the CLI commands. However, if the `tiapp.xml` file does not contain an SDK version or the `app.sdk` setting is not set with `titanium config`, then the application will be built with the SDK select version. If the SDK selected is ever deleted or if you are missing CLI commands, select a new active SDK.

```bash
# Titanium CLI
titanium sdk select [<version>]

# Titanium CLI
ti sdk select [<version>]
```

#### SDK uninstall

```bash
# Titanium CLI
titanium sdk uninstall [<version>] [--force]

# Titanium CLI
ti sdk uninstall [<version>] [--force]
```

Uninstalls a specific Titanium SDK version.

##### SDK uninstall options

| Option | Description |
| --- | --- |
| `-f, --force` | Forces uninstallation without confirmation. |

#### SDK update

Finds the latest version of the Titanium SDK.

```bash
# Titanium CLI
titanium sdk update [--default] [--force] [--install] [--branch <branch name>]

# Titanium CLI
ti sdk update [--default] [--force] [--install] [--branch <branch name>]
```

##### SDK update options

| Option | Description |
| --- | --- |
| `-d, --default` | Sets as the default SDK. |
| `-f, --force` | Forces reinstallation. |
| `-i, --install` | Installs the latest version. |
| `-b, --branch <branch name>` | Branch to update from. |

### Setup

Runs the setup wizard.

```bash
# Titanium CLI
titanium setup
titanium setup <section>

# Titanium CLI
ti setup
ti setup <section>
```

The "section" can be one of: **quick**, **check**, **user**, **app**, **network**, **cli**, **sdk**, **ios**, **android**, and **paths**.
