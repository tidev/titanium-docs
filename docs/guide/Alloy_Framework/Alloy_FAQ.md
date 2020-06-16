---
title: Alloy FAQ
weight: '50'
---

# Alloy FAQ

## Can I use a folder as a module?

Alloy do not support the Node.js concept of "folders as modules". That is, requiring a folder name does not automatically load the index.js or index.json file inside the folder, or use the package.json file to locate the main entry point. You need to explicitly require the file that serves as the main entry point to the library.

## Can I use Event methods listenTo and stopListening with an Alloy app?

The Event methods `listenTo` and `stopListening` is meant for Backbone View objects to listen to Model and Collection events. These APIs will not work with an Alloy application.

## Can I select a child element in Titanium style sheets?

Alloy does not support the CSS concept of child or descendent selectors.Specifying and applying styles is based on the tag hierarchy.
