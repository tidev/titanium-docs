---
title: Modifying an existing Ruble
weight: '90'
---

# Modifying an existing Ruble

## Overview

If you want to extend the functionality of Studio, you can do so by creating a new Ruble or extending an existing one.

## Modifying an existing Ruble

The [Ruble Specification](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/) lists the complete mechanism for extending existing Rubles, but there are two main mechanisms.

### Edit this bundle

You can edit an existing Ruble by cloning the existing version from Github and editing the files.

1. Select **Commands > _RubleName_ > Edit this bundle.**
    The ruble is cloned from Github and imported as a project into your workspace.

2. At this point, you now have a complete copy of the Ruble to edit as you like. However, you won't get automatic updates if the remote content changes.

To update your Ruble, do one of the following:

* Select **Commands > Bundle Development > Update User Bundles.**

* Right-click on the project folder in **Project Explorer** and select **Team > Pull.**

### Extend an existing Ruble

::: warning ⚠️ Warning
You need to reference the _name_ of the Ruble, not the display name (which may be what you see in Menu items). You can find out the ruble name by opening up the Bundles View and expanding the node relevant to the Ruble of interest. You'll want to use the folder name of the Ruble, _minus_ ".ruble"; in other words, "html.ruble" => "html".
:::

1. Create a folder named _rublename.ruble_ (replacing _rublename_ with the name you wish).

2. Add a bundle.rb file with the following content:

    ```
    require 'ruble'

    bundle "XXX" do |bundle|
      bundle.display_name = 'YYY'
    end
    ```

3. Replace "XXX" with the name of the Ruble you are extending, and "YYY" with the display name.

4. Save and close ruble.rb.

## Specific overrides

Some examples of how you might override an existing item.

### Overriding an existing command

This replaces a current command's implementation with the new implementation. We'll use the HTML plugin as an example here.

1. Follow the instructions to "Extend an Existing Ruble":

    1. Create a folder in a workspace project titled **bundles/htmlextension.ruble.**

    2. Create a **bundle.rb** file with the following content:

        ```
        require 'ruble'

        bundle "html" do |bundle|
          bundle.display_name = 'HTML'
        end
        ```

    3. Create a folder at **bundles/htmlextension.ruble/commands.**

    4. Create a file in the **commands** folder, which is a copy of an existing command; in other words, **strip\_html\_tags.rb**.

    5. Add new content to suit:

        ```
        require 'ruble'

        command 'Strip HTML Tags from Document / Selection' do |cmd|
          cmd.scope = 'text.html'
          cmd.output = :replace_selection
          cmd.input = :selection, :document
          cmd.invoke do |context|
            CONSOLE.puts "Testing..."
          end
        end
        ```

    6. Modify the above code to suit.

Running the above command from the HTML menu should use your new implementation.
