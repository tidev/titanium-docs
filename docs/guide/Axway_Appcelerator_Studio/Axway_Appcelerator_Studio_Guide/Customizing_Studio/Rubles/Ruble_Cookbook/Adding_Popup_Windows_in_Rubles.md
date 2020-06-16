---
title: Adding Popup Windows in Rubles
weight: '20'
---

# Adding Popup Windows in Rubles

## Overview

In this recipe, we show how a Ruble command can open a popup window for user input.

## Opening a popup window to select from a list of elements

Here, we select from a list of projects and use the output of choice to insert different snippets to the editor.

```
require 'ruble'

command "Copy Scope" do |cmd|
  cmd.key_binding = "CONTROL+SHIFT+COMMAND+C"
  cmd.input = :none
  cmd.output = :insert_as_snippet
  cmd.invoke {
    choice = Ruble.choose("Projects:", ["project 1","project 2", "project 3"], :title => "Project Selector")
    case choice
    when 1
      "snippet for project 1"
    when 2
      "snippet for project 2"
    when 3
      "snippet for project 3"
    end
  }
end
```

The popup will look like the following:

![project_selection](./project_selection.png)

## Opening a popup window for user input

Here, we open a pop window to prompt for user input, store the output into a local variable "name" and output it as a snippet.

```
require 'ruble'

command "Copy Scope" do |cmd|
  cmd.key_binding = "CONTROL+SHIFT+COMMAND+C"
  cmd.input = :none
  cmd.output = :insert_as_snippet
  cmd.invoke {
    name = Ruble::UI.request_string(
    :title => "User Name",
    :default => "guest",
    :prompt => "Please insert user name:"
    )
  }
end
```

The popup will look like the following:

![username_popup](./username_popup.png)
