---
title: Trigger on Save
weight: '110'
---

# Trigger on Save

## Overview

In this recipe, we show how a Ruble command can be triggered when an editor saves its content. This allows for processing to occur immediately after the file has been saved.

## The Code

In the snippet below, we register our command with the "execution listener". When that listener encounters an event with the "org.eclipse.ui.file.save" id, the command will be triggered. Inside the invocation block, we see that the context contains an "execution\_listener" property, which is a hash of properties being sent with the event. All key/value pairs are emitted to the console. To perform your post-save processing, replace the CONSOLE.puts line with the appropriate code.

```
require 'ruble'

bundle do |bundle|
  bundle.author = "Kevin Lindsey"
  bundle.copyright = "Copyright 2001 Appcelerator, Inc. Distributed under the MIT license."
  bundle.display_name = "Execute on Save"
  bundle.description = "A simple bundle showing how to trigger a command when editors save their content"
end

command "Show Save Information" do |cmd|
  cmd.input = :none
  cmd.output = :discard
  cmd.trigger = :execution_listener, "org.eclipse.ui.file.save"
  cmd.invoke do |ctx|
    ctx.execution_listener.each {|k,v| CONSOLE.puts "Execution: #{k}=#{v}"}
  end
end
```

::: warning ⚠️ Warning
To get an idea of what events are available, remove the "org.eclipse.ui.file.save" argument from the trigger assignment. This will cause the command to trigger for all execution listener events.
:::

## An Example

A script that takes the current file and makes a backup in a specific spot.

```
command "Backup Open Editor" do |cmd|
  cmd.input = :document
  cmd.output = :discard
  cmd.trigger = :execution_listener, "org.eclipse.ui.file.save"
  cmd.invoke do |ctx|
    backup_path = "/Users/ingo/Desktop/"
    source_path = ENV['TM_FILEPATH']

    # Strip name and extension to create a new backup file name.
    # We use Unix milliseconds to provide the unique #
    ext = File.extname(source_path)
    filename = File.basename(source_path, ext)
    destination_path =  backup_path + filename + "_" + Time.now.to_i.to_s + ext

    # Copy the file name
    CONSOLE.puts "Backing Up: " + source_path + " to " + destination_path
    File.copy(source_path, destination_path)
  end
end
```
