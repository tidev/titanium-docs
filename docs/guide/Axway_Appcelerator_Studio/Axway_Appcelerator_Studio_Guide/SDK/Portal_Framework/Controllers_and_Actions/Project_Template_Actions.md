---
title: Project Template Actions
weight: '50'
---

# Project Template Actions

## Requirements

The examples in this page use the **_Prototype_** library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Invocation

This command is executed immediately in a synchronous way.

## Get Project Template Types

Gets the different types of project templates available, dispatch this call:

```
dispatch($H({
  controller: 'portal.project.templates',
  action: 'getTemplateTypes'
}).toJSON()).evalJSON();
```

Returns:
An array of strings

## Get Project Templates

Gets the project templates that matches the project template types, dispatch this call:

```
dispatch($H({
  controller: 'portal.project.templates',
  action: 'getTemplates',
  args: '["WEB","TITANIUM_MOBILE"]'
}).toJSON()).evalJSON();
```

Arguments:
List of project template types. If no arguments are specified, all project templates will be returned

Returns:
An array of Project Templates. Each template has the following attributes: "name", "id", "description", "type"

## Listening to Template Changes

Some of the templates may be loaded or removed after the portal is opened. In this case, the Studio fires events that indicate a Template addition or removal.
Here is a sample of a way you can listen to such events (based on the [studio3-sdk](https://github.com/aptana/studio3-sdk) sample):

```
eventsDispatcher.addObserver('templates', function(e) { portal.templates.update(e); });
```

The _update_ call receives an event object that holds the following information, and can be used to update the UI:

| key | value |
| --- | --- |
| event | The event identifier (in this case, always 'templates') |
| eventType | 'added' or 'deleted' |
| data | A JSON representation of the Template-Info (as described above) |
