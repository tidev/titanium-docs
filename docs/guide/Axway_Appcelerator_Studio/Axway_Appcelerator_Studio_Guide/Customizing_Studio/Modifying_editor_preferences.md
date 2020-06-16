---
title: Modifying editor preferences
weight: '50'
---

# Modifying editor preferences

## Overview

This page describes how to modify or customize some editor settings in Studio. Some editor settings can be modified in preferences and can be further modified by editing a Ruble. Follow the directions below to customize settings further.

## Smart Typing Pairs

Smart typing pairs is when you type a character such as ' or (, and it auto-inserts the matching ' or ).

### Modifying the Built-In Bundles

1. Find the bundle that represents the editor you are interested in. If it's an HTML-based editor (like PHP), you'll want to edit the HTML ruble.

2. Select the menu item **Commands > Bundle Name > Edit this Bundle**. It will create a project in your workspace with the contents of that bundle.

3. Open up the bundle project, and find the **bundle.rb** file.

4. Edit (or add) the **smart\_typing\_pairs** section.

5. Save the file. Your new settings should be in effect.

### Example

As an example, we remove the auto-character insertion of quotes in the HTML/PHP editors, but leave parens and braces alone.

1. Select menu "Commands > HTML > Edit this bundle."

2. Open the file HTML / bundle.rb. searching for the following:

    ```
    smart_typing_pairs["text.html meta.tag - punctuation.definition.tag.begin"] = ['"', '"', '(', ')', '{', '}', '[', ']', "'", "'"]
       ...
    ```

3. Edit the smart\_typing\_pairs property to use the new key command to the following:

    ```
    smart_typing_pairs["text.html meta.tag - punctuation.definition.tag.begin"] = ['(', ')', '{', '}', '[', ']']
       ...
    ```

4. Save the file. The update should work as expected.
