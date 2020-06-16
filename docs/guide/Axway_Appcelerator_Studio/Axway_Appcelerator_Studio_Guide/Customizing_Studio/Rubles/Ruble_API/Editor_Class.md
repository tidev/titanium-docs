---
title: Editor Class
weight: '40'
---

# Editor Class

The Editor class contains methods and properties for interacting with an editor inside Studio.

## Usage

Examples of how you might interact with instance and static methods of the editor class.

### Instance:

```
caret_offset = context.editor.caret_offset
```

### Static

```
Ruble::Editor.active.insert_as_snippet(text)
```

## Editor Methods

Editor objects have the following properties and methods.

| Property | Description |
| --- | --- |
| `close(save = true)` | Close the editor. Save or not based on the `save` argument. |
| `close!` | Close without saving. |
| `save` | Save the editor. Confirm or not based on the `confirm` argument. |
| `save!` | Save the editor without confirming. |
| `dirty?` | Return true if the editor dirty (has unsaved contents) else false. |
| `hide` | Hide the editor. |
| `show` | Show the editor. |
| `document=(src)` | Set the contents of the editor's document to `src.` |
| `document` | Returns editor's document. |
| `editable?` | Returns true if the editor is editable otherwise false. |
| `file` | (Not Yet Implemented) The File currently being edited or nil. |
| `[]=(offset, length, src)` | Replace a portion of the editor's contents. |
| `selection` | Return the current selection. It has properties length, offset, text, start\_line, or end\_line. |
| `selection=(array_or_range)` | The argument is a two integer array with first being offset, second being length, or a Range object with the range of offsets - first and last. |
| `current_scope` | Returns current scope. |
| `scope_at_offset(offset)` | Return scope at given `offset.` |
| `caret_column` | The caret column. |
| `caret_line` | The line containing the caret. |
| `caret_offset` | The caret offset. |
| `current_line` | The current line. |
| `current_line.length` | Length of the current line. |
| `line(line)` | Text of the specified line # (0-based). |
| `line_number` | The starting line number of `input`, numbered starting with 1. |
| `line_index` | The starting position on the line of `input`, numbered from 0. |
| `line_information(line)` | Offset of the line in the document, and length of the line. |
| `offset_at_line(line)` | Offset in the document at which this line begins. |
| `soft_tabs` | Boolean indicating whether or not soft tabs are being used for the current file. |
| `tab_size` | Tab width for the current file. |

There are also several useful static methods defined in the Ruble::Editor class that can be useful in ruby code outside of a command:

| Method | Description |
| --- | --- |
| `open(absolute_path)` | Open a file specified by the absolute path. |
| `active` | Returns the "active" editor. |
| `go_to(options)` | Where the options are a hash that can contains keys :file (active editor if not specified), :line (default to 1), or :column (defaults to 1). |
