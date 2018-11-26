---
breadcrumbLabel: ListItem
sidebar: auto
---

# Titanium.UI.ListItem

<ProxySummary/>

## Overview

A list item is a combination of a [ListDataItem](ListDataItem) and [ItemTemplate](ItemTemplate).  The list data item
represents the actual data, while the item template represents the style elements of the item.

You should not create `ListItem` objects with a JavaScript factory method, as you do other Titanium proxies.
Instead, you should pass a [ListDataItem](ListDataItem) array to the `setItems` method of a `ListSection`. The list data items 
contain the data you want to display in the list.

Alloy applications can use **`<ListItem>`** elements to create `ListItem` objects. `<ListItem>` elements
must be nested inside a **`<ListSection>`** element, which itself is nested in a `<ListView>` element, 
as shown below:

    <Alloy>
        <ListView id="list">
            <ListSection id="accounts">
                <ListItem image="images/checking_account.png" title="Checking"/>
                <ListItem image="images/saving_account.png" title="Savings"/>
            </ListSection>
        </ListView>
    </Alloy>

By default, only the `title`, `image` and `accessoryType` keys of the list data item's
`properties` dictionary are displayed if an item template is not defined.  See "Default List Items" 
under "Examples" section for an example of using the default template.


### Item Templates

To customize the style of a list item, use an item template to create your view structure.

Add key-value pairs of view properties and their values to the `properties` dictionary of the
item template to set view properties of the list item.

**Note:** If possible, do not use `Ti.UI.SIZE` or non-static dimensions to set the
dimensions of view elements in list items.  Instead, try to use static dimensions. Scrolling in
the list view may be jerky if you use non-static dimensions.

Add key-value pairs of event names and their callback functions (or array of callback functions
for multiple callback bindings) to the `events` dictionary of the  item template to bind callbacks
to events, which are bubbled from the subcomponents of the item.

Add additional views, such as labels or image views, to the `childTemplates` array of the item
template. The child templates are item templates with two extra properties:

- Set the `type` property to a Titanium view class, such as `Ti.UI.Label` or `Ti.UI.ImageView`,
  to use that view in your template.
- Set the `bindId` to bind the template to a custom property in the list data item. The custom
  properties in the list data item contain key-value pairs of view properties and their values.

A list template supports the following view classes:

  * [Titanium.UI.ActivityIndicator](Titanium.UI.ActivityIndicator)
  * [Titanium.UI.Button](Titanium.UI.Button)
  * [Titanium.UI.ButtonBar](Titanium.UI.ButtonBar)
  * [Titanium.UI.ImageView](Titanium.UI.ImageView)
  * [Titanium.UI.Label](Titanium.UI.Label)
  * [Titanium.UI.MaskedImage](Titanium.UI.MaskedImage)
  * [Titanium.UI.ProgressBar](Titanium.UI.ProgressBar)
  * [Titanium.UI.Picker](Titanium.UI.Picker)
  * [Titanium.UI.ScrollableView](Titanium.UI.ScrollableView)
  * [Titanium.UI.Slider](Titanium.UI.Slider)
  * [Titanium.UI.Switch](Titanium.UI.Switch)
  * [Titanium.UI.TextArea](Titanium.UI.TextArea)
  * [Titanium.UI.TextField](Titanium.UI.TextField)
  * [Titanium.UI.iOS.BlurView](Titanium.UI.iOS.BlurView)
  * [Titanium.UI.iOS.LivePhotoView](Titanium.UI.iOS.LivePhotoView)
  * [Titanium.UI.iOS.Stepper](Titanium.UI.iOS.Stepper)
  * [Titanium.UI.iOS.TabbedBar](Titanium.UI.iOS.TabbedBar)

For example, suppose you have a list data item defined as `{foo:{text: 'foobar'}}` and an item
template defined as `{childTemplates: [{type: 'Ti.UI.Label', bindId: 'foo'}]}`.  The `foo`
property in the list data item binds to the label in the template, which sets the `text`
property of the label in the template to the `text` property in the list data item.

To bind the list data item to an item template, use the [templates](Titanium.UI.ListView.templates)
property to map the template to a style name, then use the style name to either set the
[defaultItemTemplate](Titanium.UI.ListView.defaultItemTemplate) property to globally set the style for all items or set the
`template` property of the list data item to override or individually set the style.

On iOS, you can specify one of the template constants for the [template](ListDataItem.template) property
or [defaultItemTemplate](Titanium.UI.ListView.defaultItemTemplate) property: [LIST_ITEM_TEMPLATE_CONTACTS](Titanium.UI.LIST_ITEM_TEMPLATE_CONTACTS),
[LIST_ITEM_TEMPLATE_SETTINGS](Titanium.UI.LIST_ITEM_TEMPLATE_SETTINGS) or [LIST_ITEM_TEMPLATE_SUBTITLE](Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE).

### Eventing

Unlike other views, you cannot use the `addEventListener` method to bind callbacks to events for a
ListItem.

Use list view's [itemclick](Titanium.UI.ListView.itemclick) event to monitor click events on
items in the list view. Do not rely on the `source` property to determine which item fired the
event.  Either use the `sectionIndex` and `itemIndex`, or the `itemId` to determine the list item
that generated the event and use the `bindId` to check which child control fired the event.
See "Default List Item" under "Examples" section for an example of using the `itemclick` event.

To monitor events that bubble to the `ListItem` or to monitor events of the view subcomponents,
bind them to the item by using the `events` dictionary of the item template or the child view
templates respectively. Add the bindings as key-value pairs, where the key is the event name
and the value is the callback (or array of callbacks for multiple bindings). See "List Items
with an Item Template" under "Examples" section for an example of binding a `click` event to an 
item using an item template.

<ApiDocs/>
