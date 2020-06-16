---
title: Selection Class
weight: '80'
---

# Selection Class

The Selection class contains methods and properties for interacting with a selection inside a document inside Studio.

## Usage

Examples of how you might interact with instance and static methods of the selection class.

### Instance:

```
context.editor.selection = (node.getStartingOffset...node.getEndingOffset + 1)
```

## Selection Methods

Selection objects have the following properties and methods.

| Property | Description |
| --- | --- |
| `offset` | The offset of the selection in the document. |
| `text` | The text of the current selection. |
| `start_line` | The line on which the selection starts. |
| `end_line` | The line on which the selection ends. |
