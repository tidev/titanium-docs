---
title: Using Titanium Modules
weight: '20'
---

# Using Titanium Modules

Titanium Modules provide JavaScript bindings for your application to use and access native features and libraries. Titanium Modules are linked (or bundled) at build time. They must be built to support the target architectures that your application is also targeting.

## Finding Modules

When looking for a specific Titanium Module, there are two places you should search:

* The Official Marketplace: [https://marketplace.axway.com](https://marketplace.axway.com/home#!attribute/4824)

* gitTio: [http://gitt.io/](http://gitt.io/)

The Marketplace contains enterprise and professional developed modules as well as links to open source modules. gitTio is exclusively free and open source modules.

## Downloading Modules

### Marketplace

Once you have selected and purchased the modules you are interested in using, you'll need to download them.

1. In **marketplace.axway.com**, click on **My Products**.

2. Click on the module you wish to download. It should download a .zip file to your computer. You may need to click on the little gear icon to find the download link the first time you download a module.

3. Locate the .zip file on disk.

### gitTio

Follow the instructions on **[http://gitt.io/cli](http://gitt.io/cli)**.

## Installing Modules

Once a module is downloaded, it must be installed in a specific project or in a shared global location.

### Per-Project Installation

#### From Studio

1. Open Studio.

2. Expand the project folder in the **Project Explorer** view.

3. Drag the .zip file from the download location into the current project, placing it at the root of the project. Choose to "Copy Files".

#### Automatic Unzip

Place the module zip file in the root of the project directory. The Titanium build will automatically extract all registered Titanium modules in the root of the project.

#### Manually Unzip

Extract the .zip file into the root of your project. It should extract into the `modules/<platform>/<module-id>/<version>` directory.

### Global Installation

Modules can be globally installed in the following locations:

* macOS

    * `~/Library/Application Support/Titanium` (preferred)

    * `/Library/Application Support/Titanium`

* Linux

    * `~/.titanium/modules`

* Windows

    * `%ProgramData%\Titanium` (preferred)

    * `%APPDATA%\Titanium`
        `%ALLUSERSPROFILE%\Application Data\Titanium\`

::: tip 💡 Hint
On macOS, the `~/Library` directory may be hidden. Press `Shift+Command+G` in the Finder to open a dialog allowing you to navigate to the folder directly to `~/Library/Application Support/Titanium`.
:::

## Using Your Module

To use your module in a mobile app, follow these steps:

![Screen_Shot_2012-03-30_at_11.28.02_AM](./Screen_Shot_2012-03-30_at_11.28.02_AM.png)

### Using the tiapp.xml Editor

Studio has a module section inside the `tiapp.xml` editor to greatly simplify the usage of modules. In order to use the module editor:

1. Double-click on the `tiapp.xml` file

2. In the right-hand column, click the + to add a new module. It will show you a list of modules available in your global directory and in your project.

3. Once you've added a module, clicking the pencil (edit) icon allows you to switch versions if there are multiple version available.

4. If you wish to delete a module, click the x (delete) button to delete the module.

Switching a SDK will re-validate the modules based on their compatibility with the selected SDK. If they are not compatible, they will show warnings as appropriate, allowing you to update as appropriate.

### Manually

1. Open the module's .zip file, and look at the folder structure. The path will look like the following:

    ::: tip
    * **Folder Structure:** `modules/<platform>/<module-id>/<version>`

    * **Example:** `modules/ios/ti.greystripe/1.1`
    :::

2. Open Studio, and the `tiapp.xml` file for the project in question.

3. Switch to the `tiapp.xml` tab.

4. In the application's `tiapp.xml`, find the `<modules/>` node, and replace it with the new `<modules>` content. If you already have modules, just add a new node for the new module. Note that the "version" and "platform" attributes are optional. When "version" is not specified, the latest version of the module will be used (as of Titanium SDK 2.0.0), and the "platform" tag is only necessary when using a module that is not available on both platforms.

    ```xml
    <ti:app>
      <!-- $MODULE_VERSION should be the same as "version" from above -->
      <modules>
        <!-- For example, if we were adding the greystripe module: -->
        <module version="1.1" platform="ios">ti.greystripe</module>
      </modules>
    </ti:app>
    ```

5. Use the require function to load the module in the app's code, for example:

    ```javascript
    var Module = require('$MODULE_ID');

    // For example, to load the greystripe module:
    var greystripe = require('ti.greystripe');
    ```

6. The next time the app is launched or built, the module should be included with the application.
