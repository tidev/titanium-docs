---
title: Studio 4.1.0 - 08 July 2015
weight: '240'
---

# Studio 4.1.0 - 08 July 2015

Studio 4.1.0 is a feature release of Studio, introducing a number of new features, improvements and bug fixes. See the [full list of issues addressed in Release 4.1.0](https://jira.appcelerator.org/issues/?filter=16877).

As of this release, Studio 4.0.x will not be supported six months from 4.1.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features

* Support for Windows Phone and Store development.

* Import a Studio or Eclipse project by dragging the folder and dropping it to the **Project** **Explorer** view. Currently, projects created with the CLI cannot be imported using the drag-and-drop method ([TISTUD-7233](https://jira.appcelerator.org/browse/TISTUD-7233)).

* Update content assist for Alloy projects to suggest `<WindowsToolbar/>` as a child of a `<Window/>` element.

* Add ability to create Controllers, Styles and Views for Alloy Widgets. Right-click on the widget folder (not the `./app/widgets/` folder but its subfolders) and select **New**, and choose either **Widget Controller**, **Widget Style** or **Widget View**.

## Known Issues

* On Windows, node processes linger around consuming memory, which causes performance degradation ([TISTUD-7632](https://jira.appcelerator.org/browse/TISTUD-7632)).
