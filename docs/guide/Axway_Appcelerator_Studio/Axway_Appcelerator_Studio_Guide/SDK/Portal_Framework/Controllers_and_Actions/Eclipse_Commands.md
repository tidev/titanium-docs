---
title: Eclipse Commands
weight: '20'
---

# Eclipse Commands

## Requirements

The examples on this page use the _**Prototype**_ library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Description

Eclipse has a _Command Handling_ system that is invoked through an internal _Command Service_. Those commands are contributed via Eclipse extensions and can be called using the portal.

To invoke a specific command, a command ID, and optional command arguments, need to be provided to the Portal's _dispatch_ call. These IDs are, in some cases, hidden deep inside Eclipse, so an Eclipse knowledge is needed to find out what they are. We list at the bottom of this page a few common ID's and their usage with the _dispatch_.

## Invocation

This command is executed immediately in a synchronous way.

## A generic Eclipse command-handler invocation

Executing an Eclipse command that does not require any arguments:

```
dispatch($H({
  controller: 'portal.commands',
  action: "execute",
  args: ["org.eclipse.ui.help.aboutAction"].toJSON()
}).toJSON());
```

## An Eclipse command that accepts arguments

```
dispatch($H({
 controller: 'portal.commands',
 action: "execute",
 args: ["org.eclipse.ui.views.showView", {"org.eclipse.ui.views.showView.viewId": "org.eclipse.debug.ui.BreakpointView"}].toJSON()
}).toJSON());
```

## Examples

### Open Studio's "New Web Project Wizard"

```
dispatch($H({
  controller: 'portal.commands',
  action: "execute",
  args: ["org.eclipse.ui.newWizard", {"newWizardId": "com.aptana.ui.wizards.NewWebProject"}].toJSON()
}).toJSON());
```

### Open Titanium Studio "New Mobile App Project Wizard"

```
dispatch($H({
  controller: 'portal.commands',
  action: "execute",
  args: ["org.eclipse.ui.newWizard", {"newWizardId": "com.appcelerator.titanium.mobile.project_wizard"}].toJSON()
}).toJSON());
```

### Open Titanium Studio "New Desktop Project Wizard"

```
dispatch($H({
  controller: 'portal.commands',
  action: "execute",
  args: ["org.eclipse.ui.newWizard", {"newWizardId": "com.appcelerator.titanium.desktop.project_wizard"}].toJSON()
}).toJSON());
```
