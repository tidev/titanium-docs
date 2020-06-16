---
title: Filtering Ruble Items Per-Platform
weight: '60'
---

# Filtering Ruble Items Per-Platform

## Overview

Sometimes you want a snippet, command, sample, or another item to only appear on certain platforms. To do so, you can use some platform specifiers.

## Wrapping an item in a per-platform conditional

In the example below, we only want the sample to appear on OSX.

```
require 'ruble'

if Ruble.is_mac?
  project_sample "Kitchen Sink" do |s|
    s.id = "com.appcelerator.titanium.mobile.samples.kitchensink"
    s.category = "com.appcelerator.titanium.mobile.samples.category"
    s.location = "git://github.com/appcelerator/KitchenSink.git"
    s.description = "A sample Titanium Mobile project that demonstrates a variety of APIs available in Titanium Mobile"
    s.natures = ["com.appcelerator.titanium.mobile.nature", "com.aptana.projects.webnature"]
    s.icon = "http://preview.appcelerator.com/dashboard/img/icons/icon_kitchen_sink.png"
  end
end
```

| Platform | Test |
| --- | --- |
| Windows | is\_windows? |
| Windows XP | is\_windows\_xp? |
| Windows Vista | is\_windows\_7? |
| Windows 7 | is\_windows\_vista? |
| OS X | is\_mac? |
| Unix (includes Linux) | is\_unix? |

## Specifying per-platform options

Sometimes, you want an item to be bound to a different key per-platform. That can be done by using the [PLATFORM\_SPECIFIER](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/#platform_specifier). However, you could accomplish the same thing by conditionally setting the property using the same syntax as above with `Ruble.is_mac`, for example.

```
require 'ruble'

command 'Add to multifile Gist' do |cmd|
  cmd.key_binding.mac = 'CONTROL+OPTION+COMMAND+G' # aka M1+M3+M4+G
  cmd.key_binding = 'M1+M3+G'
  cmd.output = :show_as_tooltip
  cmd.input = :selection, :document
  cmd.invoke do
    require "gist"

    Gist.process_selection
  end
end
```

Currently, only the following properties support platform specifiers:

* key\_binding

* invoke

Alternatively, you could also wrap the setting of various properties in conditionals that test the platform using the calls from the previous section.
