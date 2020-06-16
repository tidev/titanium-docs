---
title: Project Wizard Actions
weight: '60'
---

# Project Wizard Actions

## Requirements

The examples in this page use the **_Prototype_** library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Invocation

This command is executed immediately in a synchronous way.

## Open a Project Wizard

Launches a Project Wizard dialog for the given wizard id

```
dispatch($H({
  controller: 'portal.commands',
  action: 'execute',
  args: ["org.eclipse.ui.newWizard", {"newWizardId" : "<project wizard id>"}].toJSON()
}).toJSON());
```

Sample wizard ids:

* New Web Project: "com.aptana.ui.wizards.NewWebProject"

* New Desktop Project: "com.appcelerator.titanium.desktop.project\_wizard"

* New Mobile App Project: "com.appcelerator.titanium.mobile.project\_wizard"

* New Mobile Module Project: "com.appcelerator.titanium.mobile.module.wizard"

## Open a Project Wizard with a Project Template

Launches a Project Wizard dialog with the specified project template

```
dispatch($H({
  controller: 'portal.commands',
  action: 'execute',
  args: ["com.aptana.portal.ui.command.newProjectFromTemplate", {"newWizardId": "<project wizard id>", "projectTemplateId": "<project template id>"}].toJSON()
}).toJSON());
```

For Project template ids, see [Project Template Actions](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Portal_Framework/Controllers_and_Actions/Project_Template_Actions/).
