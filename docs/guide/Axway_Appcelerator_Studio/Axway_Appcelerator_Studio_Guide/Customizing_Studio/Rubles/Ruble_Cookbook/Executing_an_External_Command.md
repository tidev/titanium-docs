---
title: Executing an External Command
weight: '50'
---

# Executing an External Command

## Overview

In this recipe, we show how a Ruble command can call an external tool.

## Calling an external application and displaying the results

In this simplest example, we execute the "ls" application in the "\\Users\\username" directory and print the results to the console. We may execute these two different ways, which we discuss here:

### Single-line approach

The approach below is useful if executing a simple command and not adding additional information or performing manipulation on the results

```
require 'ruble'

command 'List Files' do |cmd|
  cmd.output = :output_to_console
  cmd.working_directory = "\Users\username"
  cmd.invoke = "ls"
end
```

### Blocks

Executing the command invocation in a block allows us to do more complicated manipulation of the input and output. Also note that we use Ruby backticks (\`) to run the ls application in this context (as if we are passing the command directly to the shell), but that the working directory option used above does not work in this situation...it needs to be part of the command itself.

```
require 'ruble'

command 'List Files' do |cmd|
  cmd.output = :output_to_console
  cmd.invoke do |context|
    `ls /Users/username`
  end
end
```

## Passing the current contents of the editor to an external application

Often it is useful to select something in the editor and call an external tool based on that value. **cmd.output** can take a variety of options. Some of the most common are:

::: tip
* **:selection:** selected text in the editor

* **:line:** the line containing the caret

* **:document:** the entire current document

* **:clipboard:** the contents of the clipboard
:::

### Using the selection in the executed command

Here we take the current selection in the editor and echo it to the console.

::: warning ⚠️ Warning
When using backticks, you need to assign the value of an environment variable to a temporary variable, and use that in the command.
:::

```
require 'ruble'

command 'List Files' do |cmd|
  cmd.output = :output_to_console
  cmd.input = :selection
  cmd.invoke do |context|
    selection = ENV['TM_SELECTED_TEXT']
    `echo "#{selection}"`
  end
end
```

### Referencing STDIN

Here, we take the current selection in the editor and pipe it to the standard command "cat", printing the results to the console:

```
require 'ruble'

command 'Output input' do |cmd|
  cmd.output = :output_to_console
  cmd.input = :selection
  cmd.invoke do |context|
    cmd_line = "cat"
    IO.popen(cmd_line, 'r+') do |io|
      io << ENV['TM_SELECTED_TEXT']
      io.close_write
      io.read
    end
  end
end
```

## Running different commands per OS

We can specify different commands to be run per-platform, and also mix the single-line and block methods for command invocation:

```
# general form, used if no platform specific form is provided
command.invoke = "ls"
command.invoke.windows = "dir /s"
command.invoke.linux do |context|
 `ls`
end
```

## Running a bash script

For advanced usage, you can even include an entire bash script as part of a command.

```
require 'ruble'

command 'Echo selection' do |cmd|
  cmd.output = :output_to_console
  cmd.input = :selection
  cmd.invoke =<<-EOF
#!/bin/bash
selection=${TM_SELECTED_TEXT}
echo "$selection"
EOF
end
```
