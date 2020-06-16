---
title: Creating a new Ruble
weight: '40'
---

# Creating a new Ruble

## Overview

If you want to extend the functionality of Studio, you can do so by creating a new Ruble or extending an existing one.

::: warning ⚠️ Warning
Starting with Studio Release 3.1.0, the Ruby editor is no longer included as part of the Studio installer. To edit Rubles in Studio, install the Ruby plug-in as instructed in [Adding PHP Ruby or Python Support](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Adding_PHP_Ruby_or_Python_Support/).
:::

## Creating a new Ruble Using the Wizard

Studio greatly simplifies the process of creating your Ruble.

1. From the menu, select **File > New > Ruby Project**.

2. Select **Ruble Template**, then click **Next**.

3. Type the name of your Ruble, for example, "my.ruble".

4. Ensure the "I'll generate my own code..." radio is selected, then click **Finish**.

The ruble is created in your workspace.

## A bare-bones Ruble from Scratch

The [Ruble Specification](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/) lists the complete set of items that can be created, but at the bare minimum, you need a folder and a single bundle.rb file to create a ruble. The only difference is where you place the files.

We list the steps to create a very simple ruble. Below these steps, we illustrate where you can place this Ruble for different effects.

::: warning ⚠️ Warning
Make sure the _rublename_ you choose below is unique to all your installed rubles, or otherwise, you will end up overriding an existing Ruble's functionality. Also note this is a tiny bit more complicated than it ought to be--we'll make this easier in future versions.
:::

1. You want to figure out first where your Application Rubles folder lives.

    * Mac: $home/Documents/Aptana Rubles.

    * Everywhere else: ${user.home}/Aptana Rubles. On Windows, that would translate to somewhere like c:\\Users\\Username\\Aptana Rubles

    * If you still can't find the location, look for your user.home java property. Open up the "About Studio" menu, then **Installation Details > Configuration**, and search for the user.home property.

2. Create a new Ruby project. (**File > New Ruby Project**)

3. Name it _rublename_.ruble, and browse to put the location into the "Aptana Rubles" folder.

    * ::: warning ⚠️ Warning
        **You need to create a new** **_rublename_** **.ruble folder in the above location.** Otherwise, it will create the project in the root of the "Aptana Rubles" folder.
        :::

    * As an example, the result on OS X might look like:

        * **Project name:** my.ruble

        * **Location:** /Users/username/Documents/Aptana Rubles/my.ruble

4. Finish the wizard

5. Add a bundle.rb file with the following content:

    ```
    require 'ruble'

    bundle do |bundle|
      bundle.display_name = 'My Ruble'
    end
    ```

6. Save and close bundle.rb

::: warning ⚠️ Warning
You've not added any content yet so that you won't see your Ruble show up in the UI. You'll need to add [templates](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Templates/Creating_a_new_template/) or commands to see a visible change. See below for checking to ensure your bundle loaded.
:::

### Ruble file locations

In general, you will place your Ruble files in one of two locations.

A. Any top-level "bundles" directory in the active projects within the current workspace.
B. The $USER\_DOCUMENT\_DIRECTORY/Aptana Rubles/, where $USER\_DOCUMENT\_DIRECTORY is platform dependent.

Project-level bundles (A) will override user-level bundles (B) if there is a conflict. (B) is the preferred approach as it makes your ruble easier to share later.

## Checking to ensure your Ruble loaded

Studio 3 includes a bundles view that shows all currently loaded Rubles. You can use it to ensure your Ruble loaded as expected.

1. Go to **Window > Show View > Other...**

2. Expand the Studio category.

3. Select the **Bundles** item.
    A view appears showing all currently loaded bundles.

4. You should see the bundle with the name you gave above in the list.

5. For detailed information on selected items in the Bundles View, go to **Window > Show View > Other...**

6. Expand the General category.

7. Select the **Properties** item.
    A view appears showing detailed information on your Bundles View selection.

8. If your bundle has an error, you should see the output in the Console view.
