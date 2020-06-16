---
title: A Simple Command
weight: '30'
---

# A Simple Command

## Overview

In this recipe, we show how to create a simple Ruble command, place it in a menu, and optionally bind it to a key command.

## The Code

In the snippet below, we use the Ruby "swapcase" command to switch the case of the selected text. This is the entire Ruble file, though you could ad the menu items and commands to your existing file.

```
require 'ruble'

bundle do |bundle|
  bundle.display_name = 'My Ruble'
  bundle.menu 'My Ruble' do |menu|
    menu.command 'Swap Case'
  end
end

command 'Swap Case' do |cmd|
  #cmd.key_binding = 'SHIFT+CTRL+A' # uncomment for a key binding
  cmd.scope = 'source'
  cmd.output = :replace_selection
  cmd.input = :selection, :word
  cmd.invoke do |context|
    word = $stdin.gets
    context.exit_discard if word.nil? # exit if the selection is null
    print word.swapcase
  end
end
```

Once created and activated, select text in your document and try the above command. It should flip the case of your text:

**Wrap Each Selected Line** => **wRAP eACH sELECTED lINE**

## Using Environment Variables

Rather than reading from stdin (note the "input = :selection, :word" up top), you could also use an [environment variable](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_environment_variables/):

```
command 'Swap Case' do |cmd|
  #cmd.key_binding = 'SHIFT+CTRL+A' # uncomment for a key binding
  cmd.scope = 'source'
  cmd.output = :replace_selection
  cmd.invoke do |context|
    word = ENV['TM_SELECTED_TEXT']
    context.exit_discard if word.nil? # exit if the selection is null
    print word.swapcase
  end
end
```
