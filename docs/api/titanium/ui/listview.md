---
breadcrumbLabel: ListView
sidebar: auto
---

# Titanium.UI.ListView

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/listview/listview_android.png" height="200" style="border: 1px solid black;"/></td>
    <td><img src="images/listview/listview_ios.png" height="200" style="border: 1px solid black;"/></td>
    <td><img src="images/listview/listview_wp.png" height="200" style="border: 1px solid black;"/></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

Use the <Titanium.UI.createListView> method or **`<ListView>`** Alloy element to create a `ListView`.

A `ListView` object is a container for [ListSection](Titanium.UI.ListSection) 
objects that are, in turn, containers for [ListItem](Titanium.UI.ListItem) objects. This is 
easily visualized as an Alloy view:

    <Alloy>
        <ListView id="list">
            <ListSection>
                <ListItem title="List item 1"></ListItem>
                <ListItem title="List item 2"></ListItem>
                <ListItem title="List item 3"></ListItem>
            </ListSection>
        </ListView>
    </Alloy>        

For more instructions and examples of using `ListView`, refer to the
[ListViews guide](https://docs.appcelerator.com/platform/latest/#!/guide/ListViews).

### Creating a List

To create a `ListView` object using JavaScript, pass an array of <ListDataItem> objects to the list section's
[items](Titanium.UI.ListSection.items) property, which creates and adds each array
element as a row to a single [ListSection](Titanium.UI.ListSection). Use the `ListView`'s
[sections](Titanium.UI.ListView.sections) property to add the section(s) to the list view.

By default, only the `image`, `title` and `accessoryType` of a list data item
are displayed in the list. Refer to the next section for using an item template.

See the "List View Sections" example.

### Customizing the List Items

To create a custom list view, you need to define an <ItemTemplate> and define each view
component you want to add. Use the `bindId` property of the child template to bind a dictionary
property in the item data to a child view component.

Map the template to a style name using the <Titanium.UI.ListView.templates> property, then use
the style name to  set the <Titanium.UI.ListView.defaultItemTemplate> property to globally change
all item styles or set the <ListDataItem.template> property when passing in your list data
to apply the template to that one list item or to override the globally defined template.

On iOS, you can specify one of the template constants for the <ListDataItem.template> property
or <Titanium.UI.ListView.defaultItemTemplate>:
<Titanium.UI.LIST_ITEM_TEMPLATE_CONTACTS>, <Titanium.UI.LIST_ITEM_TEMPLATE_SETTINGS>
or <Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE>.

See <Titanium.UI.ListItem> for a detailed description of creating list items with a custom
item template and see the "List View with Custom Item Template" example for a sample.

### List and Table Views

This section describes the differences between the new list view and the old table view.

`ListView` is analogous to `TableView`, `ListSection` is analogous to `TableViewSection`, and
`ListItem` is analogous to `TableViewRow`.

Both list view and table view present data to user as a vertically scrolling list of rows.
However, list view uses a data-oriented approach versus table view's view-oriented approach.

List view is designed for performance. One side effect of the design is that you cannot directly
manipulate the views--add children, set view properties and bind event callbacks--as you can in
`TableView`. Instead, you interact with list items indirectly, using templates and data items. The
next subsection describes how to use list items.

#### ListItem versus TableViewRow

With `TableView`, you can directly add rows to a table view using the data property and its accessors.
With `TableViewRows`, you can directly create a row using the `Ti.UI.createTableViewRow` and customize
its styling by setting its view properties. You can add view subcomponents to the row using the add
method.

With `ListView`, you need to explicitly create a `ListSection` in order to add a `ListItem` to a `ListView`.
You cannot directly add a `ListItem` to a `ListView`.
In a `TableView`, a `TableViewRow` can be directly added to a `TableView` because a
`TableViewSection` is implicitly created and added to the `TableView`.

A `ListItem` object is not created in the same method as a `TableViewRow`.
A `ListItem` is create by passing an array of `ListDataItem` objects to the `ListSection`.

You cannot add views to a `ListItem` using the `add` method, which could be done with a
`TableViewRow`. To add views to a `ListItem`, you need to define an <ItemTemplate>,
which is bound to a list data item using the `template` property.

You cannot explicitly set properties or bind events for a `ListItem`.  You have to set them using the
`properties` dictionary of a <ListDataItem> or <ItemTemplate> and the `events` dictionary of the
<ItemTemplate> or <ViewTemplate>, respectively.

#### API Differences

- **TableViewRow properties**: The following properties and their accessors are not
  available for `ListItem`: `accessibilityLabel`, `className`, `editable`, `hasCheck`,
  `hasChild`, `hasDetail`, `leftImage`, `moveable` and `rightImage`.

    - For `hasCheck`, `hasChild`, and `hasDetail`, use the `accessoryType` property.
    - For `leftImage` and `rightImage`, use the `image` property or create a custom item template.

- **TableViewRow methods**: `ListItem` does not support any methods. Adding views and binding
  event callbacks are supported through the item template.

- **TableViewSection properties**: The following properties and their accessors are not
  supported by `ListSection`: `rows` and `rowCount`.

    - For `rows`, use the `items` property.
    - For `rowCount`, use the `itemCount` property. (Not yet implemented.)

- **TableViewSection methods**: The following methods are not supported by `ListSection`:
  `add`, `remove` and `rowAtIndex`.

    - For `rowAtIndex`, use the `getItemAt` method.
    - For `add` and `remove`, use the other `ListSection` methods to manipulate the `ListItem`
      objects in the `ListSection`.

- **TableView properties**: The `data` property and its accessors are not available
  for `ListView`. Use the `sections` property to set the `ListSections` for a `ListView`.  You
  cannot directly add `ListItem` objects to a `ListView`.

- **TableView methods**: The following methods are not available to `ListView`:
  `appendRow`, `deleteRow`, `deselectRow`, `insertRowAfter`, `insertRowBefore`, `selectRow`,
  `updateRow`, `scrollToIndex` and `selectRow`.

    - For `scrollToIndex`, use the `scrollToItem` method.
    - For `selectRow`, use the `selectItem` method. (Currently implemented only for iOS.)
    - For all other row methods, you cannot manipulate `ListItems` with a `ListView`.
      You have to manipulate them with the `ListSection` they are contained in.

### List and Scroll Views

As a list view inherently scrolls, it creates a very poor user experience when it contains
other scrolling views, such as a [ScrollableView](Titanium.UI.ScrollableView) or
[TextArea](Titanium.UI.TextArea). Thus, this layout is strongly discouraged.

### TextFields in Lists with SOFT_INPUT_ADJUST_PAN (Android)
In order to use [TextField](Titanium.UI.TextField) inside `ListView`, [SOFT_INPUT_ADJUST_PAN](Titanium.UI.Android.SOFT_INPUT_ADJUST_PAN)
must be set to the window that is containing the `ListView`, otherwise the [TextField](Titanium.UI.TextField) may not be able to gain focus.

When a [TextField](Titanium.UI.TextField) is placed in a row near the bottom of a `ListView`,
in a window that is configured with
[SOFT_INPUT_ADJUST_PAN](Titanium.UI.Android.SOFT_INPUT_ADJUST_PAN), it is expected for the 
text field to automatically move to a visible position after it is focused and the software
keyboard displayed. However, due to a known problem caused by native Android's `ListView` behavior,
the keyboard is likely to completely obscure the text field.

To mitigate this, a `ScrollView` may be used instead of a list view, as demonstrated in the
[ScrollView](Titanium.UI.ScrollView), "Scroll View as a Table View", example.

### Editing Support (iOS)

Editing a ListView through user initiated actions is supported through the following properties.

- **ListItem properties**:

    - [canEdit](Titanium.UI.ListItem.canEdit) - When this is set to true, it allows the item to be deleted 
      from the ListView through a user initiated action. The item can only be deleted when the ListView is 
      in editing mode. The ListView can enter 'editing' mode either by explicitly setting the [editing](Titanium.UI.ListView.editing)
      property to true, or by swiping accross an item whose `canEdit` property is set to true. When the user
      deletes the item, a [delete](Titanium.UI.ListView.delete) event is fired.

    - [editActions](Titanium.UI.ListItem.editActions) - When [canEdit](Titanium.UI.ListItem.canEdit) is set to true, the default behavior
      is to allow the item to be deleted. This behavior can be overridden by using the [editActions](Titanium.UI.ListItem.editActions)
      property of the item. When this property is defined, the user is instead presented with the options as defined by the [title](RowActionType.title) property.
      In this scenario the ListView does not fire a [delete](Titanium.UI.ListView.delete) event. Instead the [editaction](Titanium.UI.ListView.editaction) event is fired
      and the developer is free to update the ListView as required. This is supported on Titanium SDK 4.1.0 and later on the iOS platform.

    - [canInsert](Titanium.UI.ListItem.canInsert) - When this is set to true, it allows the item to insert a new item to the
      ListView through a user initiated action. A new item can only be inserted when the ListView is
      in editing mode. The ListView can enter 'editing' mode by explicitly setting the [editing](Titanium.UI.ListView.editing)
      property to true. When the user clicks on the '+' sign of the item, an [insert](Titanium.UI.ListView.insert) event is fired.
      Note: A new item is not inserted automatically when clicking on the '+' sign to let you decide the way to insert a new item.
      You can use any inserting method of [Ti.UI.ListSection](Titanium.UI.ListSection), for example [insertItemsAt](Titanium.UI.ListSection.insertItemsAt)
      and [appendItems](Titanium.UI.ListSection.appendItems).

    - [canMove](Titanium.UI.ListItem.canMove) - When this item is set to true, it allows the item to be moved
      to a different location within the ListView. The item can only be moved when the ListView is put in 
      editing mode by explicitly setting the [editing](Titanium.UI.ListView.editing) property to true. When the 
      user moves an item, a [move](Titanium.UI.ListView.move) event is fired.

- **ListView properties**:

    - [editing](Titanium.UI.ListView.editing) - Determines if the List View is in a state where items can
      be deleted or reordered.

    - [pruneSectionsOnEdit](Titanium.UI.ListView.pruneSectionsOnEdit) - When this property is set to true and the 
      user action results in a section having no other items, the section is deleted from the List View. Please note 
      that this property only applies to the sections whose items are being edited.

<ApiDocs/>
