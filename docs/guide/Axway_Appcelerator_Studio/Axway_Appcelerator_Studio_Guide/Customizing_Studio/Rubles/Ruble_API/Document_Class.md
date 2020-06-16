---
title: Document Class
weight: '30'
---

# Document Class

The Document class contains methods and properties for interacting with the current document inside Studio.

## Usage

Examples of how you might interact with methods of the document class. Note that the document object is usually accessed off the editor object.

### Instance:

```
doc = context.editor.document.get
```

## Document Methods

Document objects have the following properties and methods.

| Property | Description |
| --- | --- |
| `get` | Text of the document. |
| `char(offset)` | A character at the specified offset. |
| `content_type(line)` | Content-type at the specified line. |
| `get(offset, length)` | Text of the document using the specified offset and length. |
| `legal_content_types` | Legal content types within the document. |
| `line_delimiter(line)` | The line delimiter which ends the specified line. |
| `line_length(line)` | Length of the specified line. |
| `line_of_offset(offset)` | Line # containing this offset. |
| `line_offset(line)` | Offset in the document at which this line begins. |
| `length` | Length of the document in characters. |
| `line_information(line)` | Offset of the line in the document, and length of the line. |
| `line_information_of_offset(offset)` | Same as above, but based on the specified offset. |
| `number_of_lines` | The total number of lines in the document. |
| `number_of_lines(offset, length)` | The number of lines contained with the specified offset and length. |
| `legal_line_delimiters` | Legal line delimiters used in the document. Usually, you use legal\_line\_delimiters\[0\]. |

## Examples

### Inserting a newline, based on the current document settings

```
require 'ruble'

command "Insert Newline" do |cmd|
  cmd.output = :insert_as_text
  cmd.invoke do |context|
    return context.editor.document.legal_line_delimiters[0]
  end
end
```
