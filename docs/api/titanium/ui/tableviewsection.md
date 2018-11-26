---
breadcrumbLabel: TableViewSection
sidebar: auto
---

# Titanium.UI.TableViewSection

<ProxySummary/>

## Overview

Use the [createTableViewSection](Titanium.UI.createTableViewSection) method or **`<TableViewSection>`** Alloy element to 
create a `TableViewSection`.

Before the table is rendered, the `TableViewSection` [add](Titanium.UI.TableViewSection.add) 
method may be used to add [TableViewRow](Titanium.UI.TableViewRow) objects to a section. After 
it is rendered, one of the `TableView` [insertRowBefore](Titanium.UI.TableView.insertRowBefore), 
[insertRowAfter](Titanium.UI.TableView.insertRowAfter), or 
[appendRow](Titanium.UI.TableView.appendRow) methods must be used instead. 

To remove a row from a section after the table is rendered, use the `TableView` 
[deleteRow](Titanium.UI.TableView.deleteRow) method. 

In order for a section to be visible, either its `headerTitle` or `headerView` property must be 
configured. 

Starting in Release 3.0, you can directly manipulate the sections in a table using the
following `TableView` APIs:

* To set all sections in a table view at one time, use the `TableView`
[sections](Titanium.UI.TableView.sections) property.
* To add an individual section after a table view is rendered, use either the `TableView`
[insertSectionBefore](Titanium.UI.TableView.insertSectionBefore)
or [insertSectionAfter](Titanium.UI.TableView.insertSectionAfter) method.
* To add one or more sections to the end of a table view after it is rendered, use the `TableView`
[appendSection](Titanium.UI.TableView.appendSection) method.
* To remove an individual section after a table view is rendered, use the `TableView`
[deleteSection](Titanium.UI.TableView.deleteSection) method.

Prior to Release 3.0, adding or removing sections individually is not supported. Instead, use the
`TableView` [data](Titanium.UI.TableView.data) property to refresh the whole table with a
new section layout. 

See the description and examples sections of [TableView](Titanium.UI.TableView) for more details 
about how to use `TableViewSection`.

**Note**: On some platforms, `TableViewSection` may be implemented as a type of view
(that is, an object that inherits from [View](Titanium.UI.View)). However, this is an
implementation detail. For portability, you should only use the documented APIs on 
table view sections.

<ApiDocs/>
