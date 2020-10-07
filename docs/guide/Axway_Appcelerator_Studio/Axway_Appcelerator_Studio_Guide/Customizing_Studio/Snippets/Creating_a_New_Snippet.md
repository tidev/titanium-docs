---
title: Creating a New Snippet
weight: '10'
---

# Creating a New Snippet

## Overview

Users can create new templates or modify existing snippets to allow easy creation of default content.

::: warning ⚠️ Warning
We assume you've [created a new Ruble](#undefined) as a placeholder for the following content
:::

## Creating a new snippet

Snippets are templates that show up in content assist and the Snippets View.

![Screen_shot_2011-04-13_at_3.08.29_AM](./Screen_shot_2011-04-13_at_3.08.29_AM.png)

1. Open the existing bundle.rb file.

2. Add the following content to the bottom of the file:

    ```
    snippet "My Snippet" do |snip|
      snip.trigger = "foo"
      snip.expansion = "my_super_snippet"
    end
    ```

3. Save and close bundle.rb.

If you now open a new file (for example a .js file) and type "fo", you should see you snippet show up in the list. Selecting it will insert "my\_super\_snippet" into the document.

Instead, if you type "foo" + the Tab key, the phrase "my\_super\_snippet" will automatically be inserted.

### Special Characters

Snippets, like other ruble elements, are written using ruby. As a result, you should familiarize yourself with ruby syntax as a base. Some characters have special meanings inside double-quoted strings: [http://ruby-for-beginners.rubymonstas.org/bonus/string\_interpolation.html](http://ruby-for-beginners.rubymonstas.org/bonus/string_interpolation.html)

The basics are that ruby code surrounded with #{} is interpreted and inserted into the string. References to globals, for example, `$my_global`, will be interpreted even if not surrounded by #{}. You should escape $ like so:

```
s.expansion = "\\$global = 123;"
```

This will end up inserting `"$global = 123;"`, whereas if the dollar was not escaped, the $global reference would be interpreted (and would typically produce an empty string replacement).
Dollar signs are also significant in tab stops (see below). Backticks, \`,\` are used for executing shell commands (described below).

## Executing shell commands

You can use backticks to have shellcode executed when the snippet is inserted. The result from running the code gets inserted into the snippet, though with the last newline in the result removed (if present). So for example, to create a snippet that inserts a datestamp in an HTML comment, we can do:

```xml
<!-- File created on: `date` -->
```

Inside shell code, the only character you need to escape is the backtick.

## Adding tab stops

Tab stops allow you to modify a snippet once it has been inserted easily.

1. Re-open bundle.rb

2. Add the following content to the bottom of the file:

    ```
    snippet "My Second Snippet" do |s|
      s.trigger = "foo"
      s.expansion = "${1:method_name}: function(${2:attribute}){}"
    end
    ```

3. The ${X:Y} indicates a tab stop. X indicates the order of the tab stop, and Y indicates the default content that will be placed there.

4. Save and close bundle.rb

Now attempt to complete the snippet as before. If you type "foo" + Tab, you will get a list showing the two snippets you've created. Selecting the "My Second Snippet" will insert the snippet and allow you to tab through the two variables listed as $1 and $2 above, where you can replace the default content just by typing. Pressing Tab enough times will exit the snippet.

## Mirroring

Mirroring means that you can have the same content appear to update in multiple places.

1. Re-open bundle.rb.

2. Update the content to add a second $2 item:

    ```
    snippet "My Second Snippet" do |s|
      s.trigger = "foo"
      s.expansion = "${1:method_name}: function(${2:attribute}){${2:attribute}}"
    end
    ```

3. Repeating a tab stop means that the content will be mirrored. If you update the value of one tab stop, the other identically numbered one will also update simultaneously.

4. Save and close bundle.rb.

Attempt to complete the snippet as before. Note that when you start typing for tab stop #2, both items labeled #2 will update.

### Restricting the scope of a snippet

Adding a scope means that the snippet will only show up in certain editors or languages

1. Re-open bundle.rb.

2. Add this to the bottom of the file:

    ```
    snippet "My JavaScript Snippet 2" do |s|
      s.trigger = "foo"
      s.scope = "source.js"
      s.expansion = "function($1) {};"
    end
    ```

3. Save and close bundle.rb.

Note that this snippet is now only available in JavaScript files. A list of scopes is available here: [Current Theme Scopes](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/Current_Theme_Scopes/)

The [Ruble Specification](#undefined) gives a complete discussion on the new Ruble scripting system in Studio.

### Adding a snippet to a menu

Adding a snippet to a menu is identical to adding a command. You add a menu entry with the same name as the snippet:

```
require 'ruble'

bundle do |bundle|
  bundle.display_name = 'My Ruble'
  bundle.menu 'My Ruble' do |menu|
    menu.command 'My Snippet'
  end
end

snippet "My Snippet" do |snip|
  snip.trigger = "foo"
  snip.expansion = "my_super_snippet"
end
```

### Adding a Snippet Category

Having categories allows snippets to be grouped with similar snippets, making it easier to find and discover snippets. To add a snippet category, create a snippet\_category entry, and update any corresponding snippets to have the category:

```
require 'ruble'

snippet_category "my_category" do |category|
  category.icon_path = "icons/my_category.png"
end

snippet "My Snippet" do |snip|
  snip.trigger = "foo"
  snip.expansion = "my_categorized_snippet"
  snip.category = "my_category"
end
```

### Adding additional information about a snippet

This provides context and discoverability of snippets. The Snippets View uses this information to group and filter snippets.

```
require 'ruble'

snippet "My create map Snippet" do |snip|
  snip.trigger = "foo"
  snip.expansion = "my_map_snippet"
  snip.description = "Creates a map object and adds the following annotations: current location, paris, and ontario"
  snip.tags = ['UI','map','annotation']
  snip.category = "Maps and Annotations"
  snip.icon_path = "icons/my_map_icon.png"
end
```
