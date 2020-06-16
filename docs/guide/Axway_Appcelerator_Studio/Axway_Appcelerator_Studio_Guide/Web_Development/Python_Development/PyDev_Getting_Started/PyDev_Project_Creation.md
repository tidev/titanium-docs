---
title: PyDev Project Creation
weight: '30'
---

# PyDev Project Creation

## Creating a Project

Ok, now that your interpreter is configured, it is time to **create a project**.

After opening Eclipse, go to the menu: **file > new > project > PyDev > PyDev project**. You should see the screen below:

![new_project](./new_project.png)
**Project name**: this is the name of the project.

**Project contents**: where it should be located.

**Project type**: defines the set of interpreters that will be available for that project.

**Grammar version**: the grammar used for parsing the files in this project. It doesn't have to match the grammar of the actual interpreter selected. This is done so that you can use a newer interpreter while having the grammar you use compatible with an older interpreter (for example, using a Python 2.6 interpreter with a Python 2.4 grammar in the project).

**Interpreter**: Defines which interpreter should be used for code-completion and default run configurations (note that you can still create a run configuration with a different interpreter).

**Create default 'src' folder and add it to the python path**: If you don't leave that option checked, you'll have to create the source folder(s) yourself after the project is created (which is covered in the next tutorial page).

You may finish on this screen or go to the next, where you will be asked which projects are referenced from this one.

## Referenced projects

The referenced projects are the projects whose source folders are added to the PYTHONPATH for the referrer project.

The [next tutorial page](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Python_Development/PyDev_Getting_Started/PyDev_Project_Configuration/) enters into more details on project references

## Creating a Project from existing sources

If you **created the project inside Eclipse**, you have to import the project again (in **files > import > general > existing projects into workspace**) – it'll look for the existing .project file and will configure it automatically from the existing configuration.

If you have the sources from an existing project that wasn't created in Eclipse, you have two options:

* Create the project as if it was a new project, but leave the **create default 'src' folder** option **unchecked** and point the location to the location of the sources (or a level above) – the next tutorial page will explain the steps to configure the PYTHONPATH (which should be done after creating the project this way).

* Create a new project in the default workspace and create a folder that's a **link to your existing sources**. Note that this link folder must be added to the PYTHONPATH in the next step.

**Note 1**: **Links** can be used **above the source folder** or **as the source folder**, but **never inside a source folder**, as it's not supported by PyDev)

**Note 2**: To create the folder as a link, choose the **file > new > folder** from the menu, and in the new folder dialog, select the **Advanced >>** options.

**Note 3**: If the file structure you have is:

> myproject
> .../ \__init_\_.py
> .../ module.py

and you want to make the import:

> **from myproject import module**

you have to add to the project the **folder above myproject** (as the folder above myproject will be your source folder – as required by Python).
