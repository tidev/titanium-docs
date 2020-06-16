---
title: Setting up an external webserver to preview PHP and other non-HTML pages
weight: '50'
---

# Setting up an external webserver to preview PHP and other non-HTML pages

To preview PHP pages and have them rendered appropriately, you need a web server, such as [XAMPP](http://www.apachefriends.org/en/xampp.html), which can serve PHP pages. If you are using OS X, you may be able to use the pre-bundled web server that comes with the operating system, or you can download XAMPP too. In either case, the instructions will be relatively similar.

::: tip 💡 Hint
If you are currently running IIS (which runs on Port 80 by default), make sure you don't have a Port conflict when you set up the webserver. If your web server uses Port 80, you can stop IIS to use this port for your web server.
:::

## Install XAMPP

[Download XAMPP](http://www.apachefriends.org/en/xampp.html) (or the web server of your choice) and install it on your computer according to the installation instructions. For XAMPP, it will create a document root (by default), in the following locations:

* Windows: \\xampp\\htdocs

* OS X: /Applications/XAMPP/htdocs/

If you decide to use a different install location (or a different server), the above paths may be somewhat different, but make a note of the document root as it will become important in the next step.

## Set up your project

You can either create a new project to hold your content or move an existing project into the new location.

::: danger ❗️ Warning
We create a sub-folder under the **htdocs** root. This is to allow for multiple projects to be previewed with the same server. If you wish, you can place your project directly in the root of the webserver, but note that if you delete the project, and select to "delete files on disk" it will **delete the entire directory and all contents.**
:::

### Create a new project

::: warning ⚠️ Warning
For this document, we will refer to a project named **myproject**. Replace this with the name of your actual project.
:::

1. From the **File** menu, select **New > Project... > Web Project** (or **PHP Project**) in the project wizard.

2. Type a name for your project.

3. Uncheck the **Use default location box** and browse to the **htdocs** (or equivalent) folder in your server installation directory.

4. Create a new folder in that directory with the same name as your project and select that new folder for your project location (shown below). Using the above paths, that would equate to _\\xampp\\htdocs\\myproject_ on Windows, or _/Applications/XAMPP/htdocs/myproject_ on OSX.

    ![XamppProject](./XamppProject.png)
5. Continue to choose a project template, or Click the **Finish** button.

### Import an existing project

1. In Finder, Windows Explorer, or equivalent, copy the files from their current location into a sub-folder under the **htdocs** (or equivalent) folder in your server installation directory. Using the above paths, that would equate to _\\xampp\\htdocs\\myproject_ on Windows, or _/Applications/XAMPP/htdocs/myproject_ on OSX.

2. Follow the steps here [Importing an Existing Project](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Working_with_Projects/Importing_an_Existing_Project/).

## Create your preview server

_A more detailed discussion of this step can be found at [Creating a Custom Preview Server](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Previewing/Creating_a_Custom_Preview_Server/)._

1. Right-click on a project in the "Project Explorer" view, and select **Properties.**

2. Select "Preview Settings". Click **Use Specific Server** and **New.**

3. Select **Simple Webserver.**

4. Fill out the form:

    ::: tip
    * **Name:** Choose a descriptive name that describes the server uniquely.

    * **Base URL:** The URL of the server up to the document root; in other words
        http://localhost/myproject

        from above.

    * **Document Root:** The path to the public root of the web site, in other words, **\\xampp\\htdocs\\myproject** from above.
    :::

5. Click **OK** and **OK.**

## Start the external server

It may be started automatically for you, but ensure the server is started. XAMPP comes with a small control panel you can use to start and stop the server.

## Preview your files

You can now use the preview button in the editor toolbar or continue to create a run configuration based on this new preview server. See [Previewing a project in a web browser](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Previewing/Previewing_a_project_in_a_web_browser/) for more information.
