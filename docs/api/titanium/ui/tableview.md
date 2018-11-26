---
breadcrumbLabel: TableView
sidebar: auto
---

# Titanium.UI.TableView

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/tableview/tableview_android.png" height="200" style="border: 1px solid black;" /></td>
    <td><img src="images/tableview/tableview_ios.png" height="200" style="border: 1px solid black;" /></td>
    <td><img src="images/tableview/tableview_wp.png" height="200" style="border: 1px solid black;" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

A `TableView` object is a container for [TableViewSection](Titanium.UI.TableViewSection)
objects that are, in turn, containers for [TableViewRow](Titanium.UI.TableViewRow) objects.

Use the [createTableView](Titanium.UI.createTableView) method or **`<TableView>`** Alloy element to create a `TableView`.

Also see the [TableViews guide](https://docs.appcelerator.com/platform/latest/#!/guide/TableViews).

### Creating Tables

There are few approaches to creating and using `TableView` object.

The simplest approach is to pass dictionaries of `TableViewRow` properties, such as
[backgroundColor](Titanium.UI.TableViewRow.backgroundColor),
[color](Titanium.UI.TableViewRow.color), and [title](Titanium.UI.TableViewRow.title), to the
[createTableView](Titanium.UI.createTableView) method, which causes the rows to be implictly
created, added to a single [TableViewSection](Titanium.UI.TableViewSection), and then added to
the `TableView`. Refer to the "Simple Table View with Basic Rows" example.

For more control over the layout of each row, however, [TableViewRow](Titanium.UI.TableViewRow)
objects can be created explicitly using the [createTableViewRow](Titanium.UI.createTableViewRow) method. Child views,
such as [labels](Titanium.UI.Label), [images](Titanium.UI.ImageView), and
[buttons](Titanium.UI.Button), may be added to each row. When one or more
[rows](Titanium.UI.TableViewRow) are added to the table view,
a single [TableViewSection](Titanium.UI.TableViewSection) is automatically created to hold the
rows. See the "Table View with Composite Layout" example.

Lastly, sets of rows may be explicitly created and added to a their own
[TableViewSection](Titanium.UI.TableViewSection) objects, which are then added to a `TableView`,
to enable the rows to be organized. Headers and footers titles or views must be configured
in order for the sections to be visible.

### Tables and Scroll Views

As a table view inherently scrolls, it creates a very poor user experience when one contains
other scrolling views, such as a [ScrollableView](Titanium.UI.ScrollableView) or
[TextArea](Titanium.UI.TextArea). Thus, this layout is strongly discouraged.

### TextFields in Tables with SOFT_INPUT_ADJUST_PAN (Android)

When a [TextField](Titanium.UI.TextField) is placed in a row near the bottom of a `TableView`,
in a window that is configured with
[SOFT_INPUT_ADJUST_PAN](Titanium.UI.Android.SOFT_INPUT_ADJUST_PAN), it is expected for the
text field to automatically move to a visible position after it is focused and the software
keyboard displayed. However, due to a known problem caused by native Android's ListView behavior,
the keyboard is likely to completely obscure the text field.

To mitigate this, a `ScrollView` may be used instead of a table view, as demonstrated in the
[ScrollView](Titanium.UI.ScrollView), "Scroll View as a Table View", example.

### Known Issues

There are known issues with the `sections` property and associated methods added in
Release 3.0:

*   On iOS, the first two arguments to the `updateSection` method are reversed.
    ([TIMOB-12625](https://jira.appcelerator.org/browse/TIMOB-12625)). This issue has been
    addressed in Release 3.3.0 of the Titanium SDK

### Row Editing and Moving Modes (iOS only)

On iOS, table views have an `editing` and a `moving` mode that may be activated to using their
respective [editing](Titanium.UI.TableView.editing) and [moving](Titanium.UI.TableView.moving)
properties. These allow rows to be deleted or re-ordered by the user, depending on each row's
[editable](Titanium.UI.TableViewRow.editable) and [moveable](Titanium.UI.TableViewRow.moveable)
property that are either explicitly set or inherited from the table.

There are two UI controls available for deleting table view rows, depending on the combination
of editing and moving modes enabled:

* "red icon delete" - a circular red icon is displayed on the left-hand side of a row, which
reveals a delete button on the right-hand side of that row when clicked.
* "swipe delete" - without either of the table editing or moving modes enabled, a left or right
swipe gesture on a row reveals a delete button on the right-hand side of the row.

Note that because the operating system handles the functionality of the swipe delete, the OS will
capture swipe events and not bubble the event to Titanium listeners. As such, if you rely on
swipe events, you must not set editing to true on such rows, and simulate the functionality you
need.

When `editable` and `moveable` properties are set on the table view, they are known as `inherited`,
whereas when set on a row, they are known as `explicit`. As their resulting behavior may not
follow their literal meaning, depending on the combination of `editing` and `moving` modes that
are enabled, a detailed description of the behavior follows.

With `editing:false` and `moving:true`:

* For red icon delete and swipe delete, inherited and explicit `editable` properties may be set.
* Inherited `moveable` property is always `true`. Explicit `moveable` property may be set.

With `editing:true` and `moving:false`:

* For red icon delete and swipe delete, inherited `editable` property is always `true`. Explicit
`editable` property may be set.
* Inherited and explicit `moveable` properties may be set.

With `editing:false` and `moving: false`:

* For red icon delete, inherited and explicit `editable` properties always `false`. For
swipe delete, inherited and explicit `editable` properties may be set.
* Inherited `moveable` property is always `false`.

With `editing:true` and `moving:true`:

* For red icon delete and swipe delete, inherited and explicit `editable` properties may be set.
* Inherited `moveable` property is always `true`. Explicit `moveable` property may be set.

<ApiDocs/>
