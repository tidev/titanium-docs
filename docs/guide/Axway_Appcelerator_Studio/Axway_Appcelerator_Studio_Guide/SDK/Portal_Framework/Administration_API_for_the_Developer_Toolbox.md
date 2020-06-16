---
title: Administration API for the Developer Toolbox
weight: '30'
---

# Administration API for the Developer Toolbox

## About

This document provides the Admin API for the developer toolbox usage.

## Design & Background

The Developer Toolbox is designed to interact with the Studio through a controller-action mechanism that uses JSON to pass commands and information.

On the Studio side, the main plugin that takes part in handling remote requests and communicating with the toolbox is the com.aptana.portal.ui. The plugin provides the core implementation for a controller-action-like scheme.

## Capabilities

This is what the Studio side is capable of handling at the moment (this list will grow as we add more capabilities in time):

1. Version check of these items:

    1. Plugins

    2. Ruby (native call)

    3. Rails (native call)

    4. SqLite3 (native call)

    5. Preferences check of version for other applications that were installed through a supported installer (see below).

2. Installations:

    1. Ruby (Windows only)

    2. XAMPP (Windows only)

    3. Python (Windows only)

3. Add to Project:

    1. JavaScript libraries

4. Other Studio interactions

    1. Open views

    2. List the latest opened files

    3. Open files

## Administration

The admin of the toolbox database controls what will be displayed and available for installation.

The toolbox gets the information from the ‘items’ table. This table contains multiple columns and a lot of information. However, this document will describe only the columns that are critical for the Toolbox-Studio interactions.

This list contains the columns we will be dealing with:

* name - The item’s name

* version - The version we are looking for or installing.

* item\_type - The general type definition of an item. It can be ‘Plugin’, ‘Application’, ‘Template’, ‘Ruble’ and ‘Gem’ (for now, only the first two are in use). More about the item\_type below.

* action - Holds the JSON command that will be inspected and partially transferred to the Studio side.

### ‘name’ field

As hinted by its name... this field will be displayed in the Toolbox as the item’s name.

### ‘version’ field

The version field is used when the toolbox tries to determine what item version is installed. For example, a Plugin item will be displayed as ‘Installed’ if the Studio reports a matching plugin version for it. It will be displayed as ‘Update’ if the Studio reports a lower version exists.

This field should be given in the form of an x.y.z pattern and should include numbers only.

### ‘item\_type’ field

This field defines the internal type of the item. Note that this type can be different then what is specified in the ‘category\_list’ field, which defines the UI arrangement of the items in the toolbox.

The field must hold one of the supported integer types:

* 1: Plugin

* 2: Application

* 3: Template

* 4: Ruble

* 5: Gem

Note that for the moment, only the first two (plugins (1) and applications (2)) are being handled by the Javascript part of the toolbox. The rest are there for future use and are defined in the item.rb model of the toolbox rails-application.

### ‘action’ field

The action field is the most important and complex part of the Toolbox-Studio interaction. It holds the JSON instructions that specify how to download and install the item.

Here is the structure outline of the JSON command, followed by an example:

```
{
    "command":"<command_name>",
    "os": {
        "<windows | linux | macosx | all>": {
            "action": "<action>",
            "attributes": {"<key>": "<value>" ... },
            "urls": <array of strings or a single string>
        }
    }
}
```

_Example:_

```
{
    "command":"ruby",
    "os": {
        "windows": {
            "action": "install",
            "attributes": {"install_dir": "C:\/Ruby"},
            "urls": [
                "http://rubyforge.org/frs/download.php/71492/rubyinstaller-1.8.7-p299.exe",
                "http://rubyforge.org/frs/download.php/66888/devkit-3.4.5r3-20091110.7z"
            ]
        },
        "all": {
            "action":"open",
            "urls": "http://www.ruby-lang.org/en/downloads/"
        }
    }
}
```

In the following example, we call for the ‘ruby’ command. The toolbox JavaScript framework looks at the ‘item\_type’ value and decides how to proceed and which controller to call.

The ‘os’ attribute defines that for Windows, the action ‘install’ should be invoked. For any other OS, the action ‘open’ is called. The ‘all’ is the default operation that will be called if a specific OS match was not found.

For the ‘Windows’ OS, the install action is requested, and the toolbox will dispatch the ‘install’ on the ‘portal.ruby.installer’ Studio controller, and will pass it the attributes map and the URLs that will be used to download the content.

For any other, non-Windows, OS, the action ‘open’ will be called to open an internal browser with the given URL string that was defined for the ‘urls’ key.

Note that some **installers**, such as Ruby, require a specific order of URLs. The Studio-side installation expects a specific order and will execute the download and install it in that order. The specific instructions for any supported installer will be described at the end of this document.

Here are a couple of more examples that will install a plugin and a JavaScript library:

```
{
    "command":"plugins",
    "os": {
        "all": {
            "attributes": {
                "feature_id": "com.aptana.php.feature",
                "plugin_id": "com.aptana.editor.php",
                "plugin_version": "3.0.0"},
            "action": "install",
            "urls": "http://download.aptana.com/studio3/plugin/install"
        }
    }
}
```

\---------------------------------------------------------------------------------------

```
{
    "command":"js_library",
    "os": {
        "all": {
            "attributes": {"name" : "prototype 1.6.1"},
            "action": "install",
            "urls": "http://prototypejs.org/assets/2009/8/31/prototype.js"
        }
    }
}
```

Pay attention that installing a Plug-in or a JavaScript library is more generic then installing a specific application. The command for installing a Plug-in is always ‘plugins’, and the command for installing a JS library is always ‘js\_library’.

The application installers are more complex, so they require specific support for each app we want to provide our users. See the "**_Supported Application Installers_**" section below.

The ‘**_attributes_**’ JSON value contains extra information that is used by the different types of installers. Here is a table of attributes that are expected to be given for each installer type:

| Command | Attributes |
| --- | --- |
| plugins | feature\_id  <br />plugin\_id  <br />plugin\_version |
| js\_library | name |
| ruby | install\_dir \[optional\] |
| xampp | install\_dir \[optional\] |
| python | install\_dir \[optional\] |

## Supported Application Installers

The specific supported applications, as mentioned above, are:

* Ruby - Through the ‘ruby’ command (see the example)

* XAMPP - Through the ‘xampp’ command.

* Python - Through the ‘python’ command.

Each of these applications has its installer support that runs the native installer with its expected attributes.

Each of the application is downloaded from the web, and then, the downloaded content is handled by executing the native installer process and unzipping it.

Special requirements:

1. Ruby - The installer requires two URLs in the JSON ‘urls’ array, in that order. The first URL should be pointed to the Windows ‘RubyInstaller’. The second URL should be pointed to the ‘DevKit’ zip file. The RubyInstaller will be executed natively, while the DevKit will be later extracted into the installed directory, and some modifications will be made to its configuration files.

2. XAMPP - The installer expects a single URL for the native XAMPP installer.

3. Python - The installer expects a single URL for the native Python installer.
