---
title: PyDev Project Configuration
weight: '40'
---

# PyDev Project Configuration

Here you will learn to configure your project further and add Python information to an already existing project.

The first thing to know about PyDev is that to use it to its 'full extent', you must have your python modules beneath a **source folder** (the source folders are the paths that are added to your PYTHONPATH).

You can add a new source folder in the menu: **File > new > other > PyDev > source folder**.

::: warning ⚠️ Warning
You may use PyDev without configuring that, for quick scripts, but some features such as code analysis may not work at all (but you will still have syntax highlighting and the default editor actions).
:::

![new_source_folder](./new_source_folder.png)
When you add a source folder to an existing project, it will 'automatically' add the PyDev information to it (in Eclipse terms, it will add its nature to it).

You may see which Python information your project has by going to the PyDev Package Explorer, right-clicking the project you want info on and selecting 'properties' (or pressing Alt+Enter with the project selected):

![navigator_rigth_click](./navigator_rigth_click.png)
The project properties allow you to see the **source folders** and the **external source folders** that will be added to your **PYTHONPATH**.

The external source folders are useful if you have some external library or compiled extension that is used solely for one project so that you don't have to add it to the system PYTHONPATH. However, the information on such folders works as the system information works; it is gathered once and then 'set in stone', so, if you will change it, it is recommended that you create a project for it and make a project reference to that project.

![project_properties](./project_properties.png)
The **force restore internal info** may be useful if you had an external library that changed and you want to update its information, or you believe that for some reason, PyDev did not succeed in synchronizing with the latest code-changes you did.

The **String Substitution Variables** can be used in conjunction with the **source folders**, **external source folders**, and **run configurations**. From the example below, if a reference ${GOOGLE\_APP\_ENGINE}/lib were present in the external source folders, it'd be resolved to D:/bin/google\_app\_engine122/lib.

![project_properties_substitution](./project_properties_substitution.png)
Also, you may change your project type as you wish. For example, you can set an existing python project as a Jython project on the screen below.

Note that here you can also set a different grammar version (you can have configured an interpreter that uses grammar 2.6 and still use a 2.4 grammar – this is done so that you can use newer interpreter while programming using an older grammar, which is useful on cases where you have to keep backward compatibility).

The selection of the interpreter will define which interpreter will be used to create the default run configurations and the shells for code-completion purposes (to gather the forced builtins).

![project_type](./project_type.png)
To reference another project, go to the 'project references' page.

The referenced projects are the projects whose source folders are added to the PYTHONPATH for the referrer project.

This is very important, so that code completion and run configurations work correctly.

Note that it'll get the configurations recursively, so if a project A depends on B, which in turn depends on C, you have to add a reference from A to B (and C will already be automatically referenced).

![project_refs](./project_refs.png)

## Project reference for Jython users

Jython projects may reference Java (JDT) projects. To create a reference, it's not enough to add the reference to the JDT project from the PyDev project, the JDT project must be **set as a PyDev project, and its bin folders must be properly configured as source folders for PyDev**.

To do that, right-click the project and select **PyDev > Set as PyDev project** and add the **bin** folders as if they were regular **PyDev source folders** (the ones containing your .class files – the folders containing the .java classes shouldn't be referenced in the PyDev config).

::: warning ⚠️ Warning
Before version **1.4.8**, PyDev did not handle a JDT project which had .py files correctly (even if the folders were properly configured).
:::
