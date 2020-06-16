---
title: Opening a Browser
weight: '80'
---

# Opening a Browser

## Overview

In this recipe, we show how a Ruble command can open a web browser and perform queries.

## Opening a browser using the current selection

Here we take the currently selected text and perform a search on Google.

```
require 'ruble'

command 'Search in Google' do |cmd|
  cmd.output = :output_to_console
  cmd.input = :selection
  cmd.invoke do |context|
    selection = ENV['TM_SELECTED_TEXT']
    context.browser.open("http://www.google.com/#q="+selection, :browser => :default)
  end
end
```

## Previewing the current document in the internal browser

This example takes the text from STDIN, wraps it into a temporary HTML page, and previews that in the internal browser. This could also preview a selection, or some other snippet of text if cmd.input were changed to another value.

```
require 'ruble'

command 'Preview in Internal Browser' do |cmd|
  cmd.output = :show_as_html
  cmd.input = :document
  cmd.invoke {|context| STDIN.read }
end
```

## Previewing an external URL in the internal browser

We take the current selection and use a redirect to point the internal browser to a remote site.

```
require 'ruble'
command 'Search in Google' do |cmd|
  cmd.output = :show_as_html
  cmd.input = :selection
  cmd.invoke do |context|
    url = "http://www.google.com/#q="+ENV['TM_SELECTED_TEXT']
    "<meta http-equiv='Refresh' content='0;URL=#{url}'>"
  end
end
```

## Previewing a document in the external browser

We use the TM\_FILEPATH environment variable to get the current path to the file.

```
require 'ruble'

command 'Open Document in Default Browser' do |cmd|
  cmd.output = :discard
  cmd.input = :none
  cmd.invoke do |context|
    require 'uri'
    url = "file:#{URI.escape(ENV['TM_FILEPATH'])}"
    context.browser.open(url, :browser => :default)
  end
end
```
