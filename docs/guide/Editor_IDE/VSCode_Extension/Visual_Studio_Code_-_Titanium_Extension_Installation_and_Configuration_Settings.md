---
title: Visual Studio Code - Titanium Extension Installation and Configuration Settings
sidebar_title: Titanium Extension Installation and Configuration Settings
weight: '20'
---

# Visual Studio Code - Titanium Extension Installation and Configuration Settings

## Titanium extension installation

Via the browser:

1. In [https://marketplace.visualstudio.com/vscode](https://marketplace.visualstudio.com/vscode), type in **Titanium** and click the search icon or go directly to the extension **[here](https://marketplace.visualstudio.com/items?itemName=axway.vscode-titanium)**.

2. Click **Install** once the extension opens up in VS Code.

In VS Code:

1. Open the **Extension view** (View > Extension) or click the Extension icon ![Screen_Shot_2019-05-01_at_11.21.46_AM](./Screen_Shot_2019-05-01_at_11.21.46_AM.png) .

2. Type **Titanium** in the input field.

3. Select the **Titanium** extension by **Axway**.

4. Click the green **Install** button in the extension: Titanium panel.

5. **Reload** VS Code.

## Configuration settings

There are a variety of settings that you can use to customize Titanium extension to your needs.

To learn more about User and Workspace settings, review [VS Code documentation](https://code.visualstudio.com/docs/getstarted/settings).

To modify these settings, go to **Settings** and type in **Titanium**.

| Setting name | Description | Default value |
| --- | --- | --- |
| `titanium.android.keystoreAlias` | Keystore alias used for packaging Android applications | `No Default` |
| `titanium.android.keystorePath` | Path to keystore used for packaging Android applications | `No Default` |
| `titanium.build.liveview` | Whether to enable LiveView when building applications | `true` |
| `titanium.codeTemplates.jsFunction` | Event handler function template | `\nfunction ${text}(e){\n}\n` |
| `titanium.codeTemplates.tssClass` | Style class (.) template | `\n'.${text}': {\n}\n` |
| `titanium.codeTemplates.tssId` | Style ID (#) template | `\n'#${text}': {\n}\n` |
| `titanium.codeTemplates.tssTag` | Style tag template | `\n'${text}': {\n}\n` |
| `titanium.general.appcCommandPath` | Set the full path to the `appc` command if VS Code is unable to locate it. | `appc` |
| `titanium.general.displayBuildCommandInConsole` | The executed build command is written to the output channel to aid debugging. This will include password arguments. | `true` |
| `titanium.general.logLevel` | Logging level for commands being run | `info` |
| `titanium.general.useTerminalForBuild` | When true build/package commands will be run using the integrated terminal as opposed to using an output channel. | `true` |
| `titanium.package.distributionOutputDirectory` | Output directory for package builds. | `dist` |
| `titanium.project.defaultI18nLanguage` | Default language to use for i18n autocomplete. | `en` |
