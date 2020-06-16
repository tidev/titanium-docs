---
title: Snippets
weight: '100'
---

# Snippets

Snippets are small bits of template code that can be inserted while typing. They show up in your list of content assist items. Snippets are similar to "editor templates" in Eclipse parlance but can be contributed via script.

Some key items:

* trigger: The text needed to trigger the snippet.

* expansion: The text the trigger will be replaced with. Can contain variables and tab stops.

* scope: The editors and languages in which this snippet will be active.

* description: A descriptive text about the snippet. Optional

* category: A name of a category used to group the snippet with other similar snippets. Optional

* icon\_path: The path to an icon that represents the snippet. Optional

* tags: Keywords that describe the snippet. Used as a means to easily filter snippets. Optional

Typing part of the trigger will show the snippet in content assist. If the trigger phrase is unique, typing the whole trigger + the Tab key will automatically insert the snippet into the document, otherwise, you will be prompted to pick one of the available options.

If you instead want to modify an existing piece of content (say to modify the current selection in the editor), you'll want to look at creating a command instead.

::: warning ⚠️ Warning
You'll need to [create a new Ruble](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Creating_a_new_Ruble/) as a placeholder for any new content.
:::

## Chapters

* [Creating a New Snippet](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Snippets/Creating_a_New_Snippet/)

* [Converting Editor Templates to Snippets](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Snippets/Converting_Editor_Templates_to_Snippets/)
