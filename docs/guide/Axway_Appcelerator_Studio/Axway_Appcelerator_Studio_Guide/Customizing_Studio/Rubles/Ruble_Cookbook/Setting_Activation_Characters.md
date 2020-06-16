---
title: Setting Activation Characters
weight: '100'
---

# Setting Activation Characters

## Overview

In this recipe, we show how it is possible to use a Ruble command to modify the activation characters for the HTML, CSS, and JS editors.

## The Code

Below is a sample to change the activation characters for the CSS editor. The activation characters are set to '.', '#', and ':'. This happens to be the default, so you will not see any change; however, by altering the content of the string in the call to node.put, you can modify the set of characters that will cause content assist to appear automatically.

```
require 'ruble'

bundle do |bundle|
  bundle.author = 'Kevin Lindsey'
  bundle.copyright = "Copyright 2011 Appcelerator, Inc. Distributed under the MIT license."
  bundle.display_name = 'CSS Prefs'
  bundle.description = "A simple bundle showing how to set CSS preferences"

  bundle.menu "CSS Prefs" do |m|
    m.command "Set Activation Characters" do |cmd|
      cmd.invoke do |ctx|
        pluginId = "com.aptana.editor.css"
        prefKey = "CSS_ACTIVATION_CHARACTERS"

        node = org.eclipse.core.runtime.preferences.InstanceScope.new.getNode pluginId
        node.put prefKey, ".#:"
        node.flush

        CONSOLE.puts "CSS activation character preference has been updated"
      end
    end
  end
end
```

## Plugin Ids and Preference Keys

To set the activate characters for a specific language, you need to know the editor's plugin id and the associated preference key. Below is a table providing that information. Replace the "pluginId" and "prefKey" assignments in the above example to the setting appropriate for the language you wish to update.

| Language | Plugin Id | Preference Key |
| --- | --- | --- |
| CSS | com.aptana.editor.css | CSS\_ACTIVATION\_CHARACTERS |
| HTML | com.aptana.editor.html | HTML\_ACTIVATION\_CHARACTERS |
| JS | com.aptana.editor.js | JS\_ACTIVATION\_CHARACTERS |
