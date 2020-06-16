---
title: PyDev Editor preferences
weight: '100'
---

# PyDev Editor preferences

## PyDev Editor Preferences

### Preferences

The options in the preferences should be self-explanatory, so they're only briefly detailed here, but if you don't understand one, please ask in the user's forum (so that the spelling of the option is improved).

## Editor

In **window > preferences > PyDev > editor**, PyDev can edit the tab settings and appearance colors used in PyDev (such as the code color, decorators, numbers, strings, comments, and so forth).

It's important to have in mind that many preferences, such as print margin, show line number, background/foreground colors, and so forth are inherited from the text-editor preferences at **general > editors > text editors**, and some other preferences are at **general > appearance > colors and fonts** – there's a link for both at the end of the preferences page.

![editor_preferences](./editor_preferences.png)

## Code Completion

In code completion preferences, configure how you want the code-completion to work.

![code_completion_preferences](./code_completion_preferences.png)

## Code Folding

Code-folding: new editors will have it applied.

![code_folding_preferences](./code_folding_preferences.png)

## Code Style

Code-style: Choose how you want the **assign to variable quick assist assign** to work (Ctrl+1): with camel case variables or variables separated with an underline (an example is shown when you change it).

![code_style_preferences](./code_style_preferences.png)

## Block Comments

Block comments are specially formatted comments. An example of applying the block comment is shown (2 types of block comments are available: a multi-line and a single line comment).

![block_comments_preferences](./block_comments_preferences.png)

## Code Formatter

In the code-formatter preferences page, you can choose different ways of having your code formatted.

![code_formatter_preferences](./code_formatter_preferences.png)

## Docstrings

With Ctrl+1 when over a function line, you can create the docstring automatically (and these preferences are used to determine what's the result of doing so)

![docstring_preferences](./docstring_preferences.png)

## File Types

The file types indicate which file extensions are recognized for the type inference engine (it's not an association to the file editor)

![file_type_preferences](./file_type_preferences.png)

## Imports

Ctrl+Shift+O can organize the available imports (when no selection is done – if done over a selection, it'll do a regular text sort over the selected text), and those preferences indicate how the available imports should be organized.

![import_preferences](./import_preferences.png)

## Hover

What to show on the mouse hover?

![hover_preferences](./hover_preferences.png)

## Templates

Here you can enter new templates. There are two contexts, the "Editor" and the "New Module". The templates in the "Editor" context are available for code-completion, and the ones with "New Module" are available for the creation
of new modules.

![template_preferences](./template_preferences.png)

## Typing

The typing preferences indicate what should be automatically entered when you're typing text (for example, automatic parenthesis, smart indent, and so forth).

![typing_preferences](./typing_preferences.png)
