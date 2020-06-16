---
title: Print Editor Properties
weight: '90'
---

# Print Editor Properties

## Overview

In this recipe, we show how to create a simple Ruble command that prints out the properties of the current editor

## The Code

In the snippet below, we use the Ruby reflection method to print all the public methods available on the editor property of the context object

```
require 'ruble'

command "Print Editor Properties" do |cmd|
  cmd.output = :insert_as_text
  cmd.invoke do |context|
    CONSOLE.puts context.editor.public_methods(true).sort
  end
end
```

## Example

As an example of the above properties, you can try the following. In a blank CSS file, add the following content:

```
body {
  background: #000;
}
```

Select text "background", with the caret after the "d":

```
require 'ruble'

command "Print Editor Properties" do |cmd|
  cmd.invoke do |context|
    r = "\nEditor properties:\n"
    r << "editor.caret_column                                               #{context.editor.caret_column}\n"
    r << "editor.caret_line                                                 #{context.editor.caret_line}\n"
    r << "editor.caret_offset                                               #{context.editor.caret_offset}\n"
    r << "editor.current_line                                               '#{context.editor.current_line}'\n"
    r << "editor.current_line.length                                        #{context.editor.current_line.length }\n"
    r << "editor.current_scope                                              #{context.editor.current_scope}\n"
    r << "editor.dirty?                                                     #{context.editor.dirty?}\n"
    r << "editor.line(caret_line)                                          '#{context.editor.line(context.editor.caret_line)}'\n"
    r << "editor.offset_at_line(caret_line)                                 #{context.editor.offset_at_line(context.editor.caret_line)}\n"
    r << "editor.line_information(caret_line)                               #{context.editor.line_information(context.editor.caret_line)}\n"
    r << "editor.scope_at_offset(caret_offset)                              #{context.editor.scope_at_offset(context.editor.caret_offset)}\n"
    r << "\n\nDocument properties:\n"
    r << "editor.document.get                                               '#{context.editor.document.get}'\n"
    r << "editor.document.char(1)                                           #{context.editor.document.char(1)}\n"
    r << "editor.document.content_type(caret_line)                          #{context.editor.document.content_type(context.editor.caret_line)}\n"
    r << "editor.document.get(1, 1)                                         #{context.editor.document.get(1, 1)}\n"
    r << "editor.document.legal_content_types                               #{context.editor.document.legal_content_types.sort.join(',')}\n"
    r << "editor.document.line_delimiter(caret_line)                        #{context.editor.document.line_delimiter(context.editor.caret_line)}\n"
    r << "editor.document.line_length(caret_line)                           #{context.editor.document.line_length(context.editor.caret_line)}\n"
    r << "editor.document.line_of_offset(caret_offset)                      #{context.editor.document.line_of_offset(context.editor.caret_offset)}\n"
    r << "editor.document.line_offset(caret_line)                           #{context.editor.document.line_offset(context.editor.caret_line)}\n"
    r << "editor.document.length                                            #{context.editor.document.length}\n"
    r << "editor.document.line_information(caret_line)                      #{context.editor.document.line_information(context.editor.caret_line)}\n"
    r << "editor.document.line_information_of_offset(caret_offset)          #{context.editor.document.line_information_of_offset(context.editor.caret_offset)}\n"
    r << "editor.document.number_of_lines                                   #{context.editor.document.number_of_lines}\n"
    r << "editor.document.number_of_lines(0,1)                              #{context.editor.document.number_of_lines(0,1)}\n"
    r << "editor.document.legal_line_delimiters                             #{context.editor.document.legal_line_delimiters.sort.join(',')}\n"
    r << "\n\nSelection properties:\n"
    r << "editor.selection.offset                                           #{context.editor.selection.offset}\n"
    r << "editor.selection.text                                             #{context.editor.selection.text}\n"
    r << "editor.selection.start_line                                       #{context.editor.selection.start_line}\n"
    r << "editor.selection.end_line                                         #{context.editor.selection.end_line}\n"
    CONSOLE.puts r
  end
end
```

Results:

```
Editor properties:
editor.caret_column                                               1
editor.caret_line                                                 1
editor.caret_offset                                               18
editor.current_line                                               '  background: #000;'
editor.current_line.length                                        18
editor.current_scope                                              source.css meta.property-list.css meta.property-value.css punctuation.separator.key-value.css
editor.dirty?                                                     true
editor.line(caret_line)                                          '  background: #000;'
editor.offset_at_line(caret_line)                                 7
editor.line_information(caret_line)                               offset: 7, length: 18
editor.scope_at_offset(caret_offset)                              source.css meta.property-list.css meta.property-value.css punctuation.separator.key-value.css

Document properties:
editor.document.get                                               'body {
  background: #000;
}
'
editor.document.char(1)                                           111
editor.document.content_type(caret_line)                          __dftl_partition_content_type
editor.document.get(1, 1)                                         o
editor.document.legal_content_types                               __css___dftl_partition_content_type,__css_multiline_comment,__css_string_double,__css_string_single
editor.document.line_delimiter(caret_line)

editor.document.line_length(caret_line)                           19
editor.document.line_of_offset(caret_offset)                      1
editor.document.line_offset(caret_line)                           7
editor.document.length                                            28
editor.document.line_information(caret_line)                      offset: 7, length: 18
editor.document.line_information_of_offset(caret_offset)          offset: 7, length: 18
editor.document.number_of_lines                                   4
editor.document.number_of_lines(0,1)                              1
editor.document.legal_line_delimiters
,
,

Selection properties:
editor.selection.offset                                           8
editor.selection.text                                             background
editor.selection.start_line                                       1
editor.selection.end_line                                         1
```
