---
title: Ruby Development
weight: '30'
---

# Ruby Development

Aptana Studio is shipped with built-in support for Ruby editing. To add Ruby editing support in Titanium and Appcelerator Studio, see [Adding PHP Ruby or Python Support](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Adding_PHP_Ruby_or_Python_Support/).

## Preparing for Ruby development

Studio will not attempt to install Ruby for you. Please be sure that Ruby is installed, working, and is on your PATH before using Ruby features in Studio 3. For Windows, we recommend the [Rails Installer](http://railsinstaller.org/en).

Studio attempts to maintain the same environment used and seen inside your terminal. As a result, we use the PATH to find the applicable Ruby executable, libraries, gems, and bin scripts. We also respect RVM's settings and use of .rvmrc files. Please be sure to test out the environment inside our embedded Terminal view or editor to see if it matches your expectations.

**If you plan to make use of the debugger**, you may also want to consult [Ruby Debugger Pre-requisites](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Ruby_Development/Ruby_Debugger/#pre-requisites).

## Creating/Importing a Ruby project

### Creating a project using the new project wizard

The Ruby project wizard can be accessed through multiple locations in the workspace.
A project can be created through the **File** > **New** > **Ruby Project**, or by right-clicking the **Project Explorer** or the **App Explorer** and select **New** > **Ruby Project**.

![ruby_project_wizard](./ruby_project_wizard.png)

While importing a Ruby project, the wizard also gives you the option to use git to clone a URI to generate the project.

If you have a project that already exists on disk, you can use the new project wizard to "import" the project as well. Just point the Location at the existing project root.

## Editing

The Ruby editor provides specialized features for editing Ruby code.

Associated with the editor is a Ruby-specific Outline view, which shows the structure of the active Ruby script. It is updated as the user edits the script.

The editor includes the following features:

* Syntax Coloring according to the selected theme in the preferences

* Content/code assist

* Code formatting

* Auto Indentation

* Integrated debugging features

The most common way to invoke the Ruby editor is to open a Ruby file from the App Explorer or Project Explorer using pop-up menus or by double-clicking the file.

Paste in your files, import them, or create new ones using the new file wizard.

When in the 'App Explorer', the new file wizard will offer you to create a file from a template as an option on the 'Next' page. These file-templates are contributed by the "Ruby Ruble".

### Syntax coloring

Like with any other Studio-contributed editor, the syntax highlighting settings are controlled by the 'Theme' preference page in the Studio's preferences.

The following list displays the keys supported by the Ruby Editor: [Themes#ThemesinRubles](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/#themes-in-rubles).

### Code completion / content assist

Code Assist does not automatically appear for Ruby, unlike HTML/CSS/JS. If you press **Ctrl** + **Space** in the ruby editor, Content Assist will be invoked.

The Ruby content assist is special in that it is implemented entirely in (J)Ruby code inside the ruby ruble: [https://github.com/aptana/ruby.ruble](https://github.com/aptana/ruby.ruble).
We strongly encourage users to fork and contribute additions/bugfixes/etc. (For details on rubles, see [Ruble Specification](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/)).

::: warning ⚠️ Warning
The content assist relies on an **indexing** process that is performed on the workspace and the edited files. Inconsistent index state, like the one that may occur when turning off the 'Auto Building' option, may result in wrong or no accurate assistance.
:::

### Auto indentation and code formatting

Auto indentation is done as you type and move to a new line. For example, when starting an `if` block and hitting the 'Return' key, the next edit position in the new line will be indented under that `if`.

Code formatting is an advanced feature that allows you to format your entire file as a post-editing action. The formatter is triggered by clicking Ctrl + Shift + F, or by selecting **Source** > **Format** in the editor's pop-up menu or top menu-bar.

The code formatter settings can be tweaked through the Studio's preferences. You can create your formatting profile and edit it to your needs.

The Ruby code formatter provides control over the indentation-levels, blank-lines comments.

As of version 3.0.4, the formatter also provides an ability to turn off and turn on formatting for specific sections of code.

For example:

```
# @formatter:off
case a % 2
  when 1
    puts "odd"
  when 0
    puts "even"
end
# @formatter:on
```

Note that the 'off' and 'on' tags are also customizable through the formatter preferences.

## Related topics

* [Ruby Debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Ruby_Development/Ruby_Debugger/)

* [Ruby Outline View](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Ruby_Development/Ruby_Outline_View/)
