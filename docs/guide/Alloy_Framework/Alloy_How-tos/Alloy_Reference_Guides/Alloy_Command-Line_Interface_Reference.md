---
title: Alloy Command-Line Interface Reference
weight: '10'
---

# Alloy Command-Line Interface Reference

The Alloy Command-Line Interface (CLI) is a command-line tool for managing and building Alloy projects.

## Command-Line Interface Installation

The Alloy command-line interface and plugin will be automatically installed by Appcelerator Studio or the Appcelerator CLI.

If there were installation problems or if you wish to install the Alloy CLI independent of the other tools, refer to the manual installation instructions below.

### Manual Installation

The Appcelerator CLI needs to be installed and configured before installing the Alloy CLI. The following steps install the latest released version of Alloy:

1. Download and install Node.js from [http://nodejs.org/#download](http://nodejs.org/#download), which includes the npm package manager needed to install Alloy.

2. From a console window, run the following command to install Alloy:

    ```bash
    sudo npm install -g alloy
    ```

By default, these installation directions will install the latest Alloy release. To install a specific released version, use the same directions, except after 'alloy', add the at symbol ('@') with the version number. For instance, executing sudo npm install -g alloy@1.10.0 will install version 1.10.0.

### Bleeding Edge Installation

To install the latest development version of Alloy, after installing [Node.js](http://nodejs.org/) , clone the Alloy GitHub repository and perform an npm install from the Alloy project's root directory:

```bash
git clone https://github.com/appcelerator/alloy.git
cd alloy
[sudo] npm install -g .
```

## New

Creates a new Alloy project on top of an existing new Titanium project, that is, create a classic Titanium project first, then run the command from inside the project directory.

```
alloy new [<project_path>] [<project_template>] [--force] [--no-colors]
```

| Options | Description |
| --- | --- |
| `<project_path>` | Path to a skeleton Titanium project, otherwise the current working directory is used. |
| `<project_template>` | Selects the template. Choose between **default** for a single pane application or **two\_tabbed** or a tabbed application. Defaults to **default**. |
| `--testapp <test_app_path>` | Relative path after the `alloy/ test / apps /` path to a test application in the Alloy Github repo to use as the new application. |
| `-f, --force` | Forces the command to execute. |
| `-n, --no-colors` | Disables color output. |

## Generate

Creates skeleton Alloy components.

```
alloy generate <component> [--widgetname <widget_name>] [--outputPath <output_path>] [--platform <platform>] [--force] [--no-colors]
```

| Options | Description |
| --- | --- |
| `<component>` | Format is component specific. |
| `controller <name>` | Create a skeleton controller, view and style. |
| `jmk` | Creates `alloy.jmk`. |
| `model <name> <adapter> [schema]` | Creates a model with the specified `name`. See [Model Format](#model-format) below. |
| `migration <model_name>` | Creates a skeleton migration file for the specified model. |
| `style <<name> | --all>` | Creates a skeleton style file with the specified name.  <br />If the name is associated with a view-controller, Alloy uses the id and class names from the markup file to populate the style file.  <br />If `--all` flag is specified, Alloy generates skeleton style files for all view-controllers.  <br />If you add new id or class attributes to the markup file, running this command updates the style file with the new attributes. |
| `view <name>` | Creates a skeleton view and style with the specified `name`. |
| `widget <name>` | Creates a basic widget with the specified `name`. |
| `--widgetname <name>` | Creates a component for the specified widget. Can only be used to create controllers, views or styles. |
| `-o, --outputPath <outputPath>` | Output path for generated code. Point to the 'app' directory. |
| `--platform <platform>` | Create a platform-specific view or controller component, where `<platform>` is either `android`, `ios` or `windows`. |
| `-f, --force` | Forces the command to execute. |
| `-n, --no-colors` | Disables color output. |

### Model Format

To generate a model, first select the adapter type:

* `sql` for the SQLite database for the Android and iOS platform.

* `properties` for storing models locally in Titanium SDK context.

For the `sql` and `properties` adapters, you will also need to specify a table schema. The `sql` adapter type will also generate a migration file with the model.

The table schema format for generating models is a space-delimited list of the field name, followed by a colon (':'), followed by the data type. For example, specifying 'name:string age:number sex:varchar dob:date' will create a table with four columns: 'name' which stores a string, 'age' which stores a number, 'sex' which stores a character, and 'dob' which stores a date.

Actually, in the above example, since both the Android and iOS platforms use SQLite, none of these datatypes are available. Instead, they will be mapped based on the following:

| Datatype | SQLite Datatype |
| --- | --- |
| string  <br />varchar  <br />text | TEXT |
| int  <br />tinyint  <br />smallint  <br />bigint  <br />integer | INTEGER |
| double  <br />float  <br />real | REAL |
| blob | BLOB |
| decimal  <br />number  <br />date  <br />datetime  <br />boolean | NUMERIC |
| null | NULL |
| unknown datatype | TEXT |

## Install

Installs special Alloy project components.

```
alloy install <module> [<project_path>]
```

| Options | Description |
| --- | --- |
| `<module>` | Format is module specific. |
| `plugin` | Installs the compiler plugin to hook the Alloy project to Studio. |
| `<project_path>` | Path to the Alloy project, otherwise the current working directory is used. |

## Compile

Compiles Alloy code to Titanium SDK code.

```
alloy compile [<project_path>] [--config <compiler_options>] [--no-colors]
```

| Options | Description |
| --- | --- |
| `<project_path>` | Path to the Alloy project, otherwise the current working directory is used. |
| `-c, --config <compiler_options>` | Compiler configuration options to use. See [Compiler Options](#compiler-options) below. |
| `-n, --no-colors` | Disables color output. |

### Compiler Options

The compiler options are a list of comma-delimited assignment statements (variable=value) without any spaces. For example, specifying "beautify=false,deploytype=test" overrides the default compiler behavior to disable beautifying the generated JavaScript files and building the application for the test environment.

Refer to the `event.alloyConfig` object in [Build Configuration File (alloy.jmk)](/guide/Alloy_Framework/Alloy_How-tos/Alloy_Reference_Guides/Build_Configuration_File_(alloy.jmk)/) for a list of settable compiler options.

## Run

Use the `titanium build` command to run Alloy projects. See the [Titanium Command-Line Interface Reference guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/) for more information.

## i18n-extract

Inspects your TSS and JS files for instances of Titanium's localization functions, extracts the i18n key from each function and adds it to the target language's strings.xml file.

```
alloy extract-i18n [<language>] [--apply]
```

| Options | Description |
| --- | --- |
| `<language>` | Optional. A two-letter language code that specifies the target language. Default is **`en`** (English). |
| `--apply` | Optional. If present, the command writes new localization entries to the target language's strings.xml file. If absent, a preview of the changes are displayed in the terminal window. |

The following localization functions are supported:

* [Ti.Locale.getString()](#!/api/Titanium.Locale-method-getString)

* [L()](#!/api/Global-method-L)

The syntax options for calling `alloy extract-i18n` are shown below.

```
// Show a before and after of your i18n file. Does NOT write changes to the file.
alloy extract-i18n

// Write changes to "app/i18n/en/strings.xml":
alloy extract-i18n --apply

// Specify "es" as the language and write the changes to "app/i18n/es/strings.xml":
alloy extract-i18n es --apply

// Specify a different language ("es") and preview changes:
alloy extract-i18n es
```

Also see [Extracting localization strings](/guide/Alloy_Framework/Alloy_Guide/Alloy_Tasks/Alloy_Tasks_with_the_CLI/#ExtractingLocalizationStrings) in the [Alloy Tasks with the CLI](/guide/Alloy_Framework/Alloy_Guide/Alloy_Tasks/Alloy_Tasks_with_the_CLI/) guide.

## Copy

Make a copy of an existing view-controller, which includes the controller, XML and TSS files.

```
alloy copy <CONTROLLER_NAME> <COPIED_CONTROLLER_NAME>
```

## Move

Rename a view-controller, which includes the controller, XML and TSS files.

```
alloy move <CONTROLLER_NAME> <NEW_CONTROLLER_NAME>
```

## Remove

Removes / Deletes a view-controller, which includes the controller, XML and TSS files.

```
alloy remove <CONTROLLER_NAME>
```

## Additional Options

| Options | Description |
| --- | --- |
| \-h, --help | Outputs command usage. |
| \-v, --version | Outputs the version number. |
