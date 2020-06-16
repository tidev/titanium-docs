---
title: Debugging Rubles
weight: '50'
---

# Debugging Rubles

## Overview

Debugging is a bit of a misnomer, as currently, you can only really set trace output. Proper debugging is currently on the TODO list, but not yet available.

## Writing to the console

You can write directly to the Scripting Console by using `CONSOLE.puts`, i.e.:

```
CONSOLE.puts "Hello!"
```

## Set the logging level

You can set the logging level in a script:

```
Ruble::Logger.log_level = :trace
```

Logging levels are:

* none

* trace

* info

* warning

* error

You might add this to the top of your file. With broader logging levels containing all the content from more restrictive ones (in other words, trace contains info, warning, and error as well).

The output will be put to the Scripting Console and is theme-able as per the regular theme guidelines for "console" scopes.

::: warning ⚠️ Warning
The logging level will persist at the newly set level until it is explicitly changed again.
:::

## Logging to the console

An example of turning on logging and writing out the trace, info, warning, and error messages.

```
require 'ruble'
require 'ruble/ui'

Ruble::Logger.log_level = :trace

command 'Tidy' do |cmd|
  cmd.output = :replace_document
  cmd.input = :document
  cmd.invoke do |context|
    Ruble::Logger.trace "trace"
    Ruble::Logger.log_info "Info"
    Ruble::Logger.log_warning "Warning"
    Ruble::Logger.log_error "Error"
  end
end
```

## Writing out properties

It's sometimes helpful to write out the properties of the current context object. An example of doing so:

```
command "Print Context Properties" do |cmd|
  cmd.invoke do |context|
    context.dynamic_properties.each { |k| CONSOLE.puts "#{k}\n" }
  end
end
```

prints:

```
project
editor
input_type
browser
command
bundle
TM_SELECTED_FILES
1316024714117_env
test_property
invoked_via
```

## Writing out available methods

It's also sometimes useful to write out the methods available on a particular object, i.e.:

```
command "Print Document Methods" do |cmd|
  cmd.invoke do |context|
    CONSOLE.puts context.editor.document.public_methods(true).sort
  end
end
```

## Disabling caching

To speed up bundle loading, we cache the overall structure of the bundle. This can cause problems on some versions of Windows, where a user might not see any changes until they restart Studio. To disable caching, please follow the instructions [here](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Disable_Ruble_Caching/).
