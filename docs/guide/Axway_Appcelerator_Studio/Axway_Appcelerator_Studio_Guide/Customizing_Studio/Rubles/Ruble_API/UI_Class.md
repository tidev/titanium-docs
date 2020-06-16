---
title: UI Class
weight: '100'
---

# UI Class

The UI class contains methods for interacting with the user interface inside Studio.

## Usage

Examples of how you might interact with methods of the UI class.

### Singleton:

```
require 'ruble/ui'

Ruble::UI.alert(:info, 'Title', 'Message') # opens an info dialog box with title
```

## UI Methods

The UI class has the following singleton methods:

| Method | Description |
| --- | --- |
| `alert(style, title, message, *buttons)` | Opens a dialog box. Style can be one of :warning, :error or :info buttons is an array of string labels for the buttons the of which user can choose. The first entry is the default button (what will be chosen if user hits Enter). The return value is the label of the chosen button. |
| `menu(options = [])` | Pop up a menu on screen.  <br />Options may be an Array of Strings, or an Array of Hashes:<br /><br />1. If it's an Array of Hashes, it's expected that each Hash will contain:<br />    <br />2. 'display' => String - entry to show in menu<br />    <br />3. 'image' = > String - image to show alongside the entry<br />    <br />4. 'insert' => String - a snippet to insert when the entry is chosen<br />    <br />5. 'tool\_tip' => String - tooltip to display for menu entry |
| `simple_notification(options = {})` | Opens an info dialog box with an "OK" button. Pass in :title, :summary in options hash to set those values on the opened dialog. like calling alert(:info, options\[:title\], options\[:summary\], "OK"). |
| `request_item(:title => '', :prompt => '', :button1 => '', :button2 => '')` |  |
| `request_color(hex_string = nil)` | Show the system color picker and return a hex-format color (#RRGGBB) string with the chosen color.  <br />If the input string is a recognizable hex string, the default color (in the opened color picker) will be set to it. |
| `request_confirmation(options = {`} | Post a confirmation alert. Returns true if the first button is chosen, false otherwise.  <br />Possible options:<br /><br />* :button1 => String - label of the default button<br />    <br />* :button2 => String - label of the secondary button<br />    <br />* :title => String - Title of the dialog<br />    <br />* :prompt => String - message in the dialog |
| `request_string(options)` | Opens a dialog box with a text field input. Returns the user input as a string if they choose "OK".  <br />Possible Options:<br /><br />* :title => String - title of the dialog.<br />    <br />* :prompt => String - message added to dialog<br />    <br />* :button1 => String - label of the confirm button, defaults to "OK"<br />    <br />* :button2 => String - label of the cancel button. defaults to "Cancel". |
| `request_secure_string(options = {})` | Opens a password dialog. See request\_string. |
| `tool_tip(content, options = {})` | Show Tooltip using the current cursor location. Content is shown as bold text at the top of the tooltip.  <br />Possible options:<br /><br />* :balloon => true - pop up a balloon style tooltip<br />    <br />* :icon => :error, :info, or :warning. add an image icon in upper left of tooltip. Only used with balloon tooltips.<br />    <br />* :message => String, an optional explanatory string that is shown below content. |
| `request_file(options = {})` | Show a standard open file dialog. Returns the full path of the file/dir as a string.  <br />Possible Options:<br /><br />* :only\_directories => true - limit to directory selection. If not present or false, it will be limited to only file selection<br />    <br />* :default => String - message added to dialog if selecting directories<br />    <br />* :title => String - title of dialog<br />    <br />* :directory => String - opening directory path for dialog |
| `request_files(options = {})` | Show a standard open file dialog, allowing multiple selections. See request\_file. |
