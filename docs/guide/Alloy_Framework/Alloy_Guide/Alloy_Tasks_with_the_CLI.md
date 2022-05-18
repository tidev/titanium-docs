---
title: Alloy Tasks with the CLI
weight: '60'
---

# Alloy Tasks with the CLI

Alloy provides a command-line interface to create a new projects, generate skeleton components, and compile Alloy code to Titanium code. See [Command-Line Interface Installation](/guide/Alloy_Framework/Alloy_Getting_Started/#command-line-interface-installation) for directions on installing the latest released Alloy CLI.

Run `alloy --help` to see all available target options or see the [Alloy Command-Line Interface Reference](/guide/Alloy_Framework/Alloy_How-tos/Alloy_Reference_Guides/Alloy_Command-Line_Interface_Reference/).

## Creating a new application

To create an Alloy application, run the following command from your work space directory:

```bash
ti create
```

You will be prompted to enter an application name and application ID.

```bash
cd PROJECTDIRECTORY
alloy new
```

A new skeleton Alloy project will be generated in the directory named after the application name.

A new Alloy project has a folder named `app` that contains the skeleton Alloy application.

## Creating a new application using a test application

You can generate a new Alloy project using a test application from the Alloy Github repo. (The source code is copied from the global or local install of the Alloy npm package.)

To create an Alloy application based on a test application, first create a skeleton Titanium project, then run the Alloy new command with the `--testapp <path_to_test_app>` option. Pass the option the relative path to the test application after the `alloy/test/apps` path.

```bash
ti create -t app --classic -i com.appc.picker -n AlloyPicker
cd AlloyPicker
alloy new --testapp ui/picker
```

## Generating components

The CLI can generate skeleton controllers (with views and styles), models, database migrations and widgets. The following commands can be ran from the root folder of the project or the location of the project may be specified with the `-o` command-line option. You can also create platform-specific views or controllers using the `--platform` option. You can also create views, styles and controllers for a widget by specifying the `--widgetname` option with the name of the widget.

### Generating a controller

To generate a controller with a style and view, run the following command:

```bash
alloy generate controller <name> [--widgetname <widget_name>] [-o path_to_project/app] [--platform <platform>]
```

This creates `app/controllers/<name>.js`, `app/styles/<name>.tss`, and `app/views/<name>.xml`.

### Generating a view

To generate a view and style **without** a controller, run the following command:

```bash
alloy generate view <name>  [--widgetname <widget_name>] [-o path_to_project/app] [--platform <platform>]
```

This creates `app/styles/<name>.tss` and `app/views/<name>.xml`.

### Generating a style

To generate a style for a view-controller, run the following command:

```bash
alloy generate style <name> [--widgetname <widget_name>]
```

Alloy uses the id and attribute names in the markup file to populate the skeleton style file. This creates `app/styles/<name>.tss`.

To generate style files for all view-controllers, run the following command:

```bash
alloy generate style --all
```

If you add new id or class attributes to the markup file, running either of these commands updates the style file with the new attributes.

### Generating a model

To generate a model, run the following command:

```bash
alloy generate model <name> <adapter> [<col_name_1>:<col_type_1> <col_name_2>:<col_type_2> ...] [-o path_to_project/app]
```

The fourth parameter selects the adapter type, either `sql` for SQLite engine (Android and iOS platforms) or `properties` for storing models locally in Titanium SDK context.

The fifth parameter defines the table schema. This is required for 'sql' and 'properties' adapter types.

This creates `app/models/<name>.js`, and `app/migrations/DATETIME_<name>.js` if the adapter type is 'sql'.

### Generating a migration

To generate a standalone migration for a specific model, run the following command:

```bash
alloy generate migration <name> [-o path_to_project/app]
```

This creates a timestamp-ordered migration file for the model specified, that is, `app/migrations/DATETIME_<name>.js`

### Generating a widget

To generate a basic widget, run the following command:

```bash
alloy generate widget <name> [-o path_to_project/app]
```

This creates a default widget in the project's `app/widgets` path, generating a configuration file, controller, style and view: `app/widgets/<name>/widget.json`, `app/widgets/<name>/controllers/widget.js`, `app/widgets/<name>/styles/widget.tss`, and `app/widgets/<name>/views/widget.xml`. The widget is automatically added as a dependency in the Alloy project's configuration file `config.json`.

### Generating alloy.jmk

To generate the build customization file `alloy.jmk`, run the following command:

```bash
alloy generate jmk [-o path_to_project/app]
```

This creates the JavaScript Makefile `app/alloy.jmk` with a few task hooks in place. Refer to [Build Configuration File (alloy.jmk)](/guide/Alloy_Framework/Alloy_How-tos/Alloy_Reference_Guides/Build_Configuration_File_(alloy.jmk)/) for more details.

## Extracting localization strings

The `alloy extract-i18n` command inspects your JS and TSS (since Alloy 1.2.0), and XML files (since Alloy 1.6.0) for instances of Titanium's localization functions and adds those strings to an i18n strings.xml file. The command has the following syntax:

```bash
alloy extract-i18n [language] [--apply]
```

**Parameters**:

* `language` – Optional. The two-letter language code (`en` or `es`, for example) of the target language. If not specified, the default is `en` (English).

* `--apply` – Optional. If present, the command writes new localization entries to the target language `strings.xml` file. Existing i18n entries are left untouched. If the XML file doesn't exist, it is created for you. If this parameter is absent, a preview of the changes are displayed in the terminal window.

The following localization functions are supported:

* `Titanium.Locale.getString()`

* `L()`

The command extracts the first parameter (the i18n key) from each localization function and, if it's a string, adds it to the target language `strings.xml` file. For example, suppose a JavaScript file in your application contained the following code:

```javascript
var name = Ti.Locale.getString('name');
var color = Titanium.Locale.getString('color');
var currency = L('currency');
```

To create an English language localization file, run the following command:

```bash
alloy extract-i18n --apply
```

This generates `app/i18n/en/strings.xml` or (before Alloy 1.8.0) `i18n/en/strings.xml` in your project directory, if it doesn't exist. The contents of the generated XML file would appear as follows:

```xml
<resources>
  <string name="name">name</string>
  <string name="color">color</string>
  <string name="currency">currency</string>
</resources>
```

If you later add more localization functions to your code and run the same command again, the new entries would be added to `strings.xml`. Existing entries are left untouched.

To generate a `strings.xml` for a specific language, pass the two-letter language code as a parameter. For example, the following command creates a strings.xml file for Spanish language locales (`app/i18n/es/strings.xml` or - before Alloy 1.8.0 - `i18n/es/strings.xml` ):

```bash
alloy extract-i18n es --apply
```

When called with `--apply`, the command only adds new i18n entries and leaves existing entries untouched. For this reason, `alloy extract-i18n --apply` is a safe operation, but you can also preview changes in the terminal by calling the command without `--apply` , as shown below.

```bash
alloy extract-i18n
```

The output of this command shows the content of the current `en/strings.xml` file (before) and its content once you apply the changes (after) with `--apply`.

```
[INFO] ######## BEFORE ########
<resources>
  <string name="name">name</string>
  <string name="color">color</string>
  <string name="currency">currency</string>
</resources>
[INFO] ######## AFTER  ########
<resources>
  <string name="name">name</string>
  <string name="color">color</string>
  <string name="currency">currency</string>
  <string name="test">test</string>
</resources>
```

## Compiling a specific view-controller

You can select which Alloy view-controller to compile to Titanium code. Use the command to update the Titanium base code for incremental changes to the Alloy project. Pass the `file=<filename>` to the `--config` option when running the Alloy compile command.

```bash
alloy compile --config platform=<platform>,file=<file>

## Example
alloy compile --config platform=android,file=app/controller/index.js
```

## Building an application

To build and run an application, execute the following command:

```bash
ti build --platform <platform> [--project-dir <value>] [--sdk <value>] [ <platform_build_options> ]
```

Running this from the root directory of the project compiles the files to the correct location automatically.

See the [Titanium Command-Line Interface Reference guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/#build) for a complete explanation of the available options.

## Installing special project components

### Installing the compiler plugin

To install the compiler plugin that hooks the Alloy project to Studio, run the following command:

```bash
alloy install plugin [path_to_project]
```

Use this command to update the compiler plugin if your project was created using an older version of Alloy.
