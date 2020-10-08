---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ListItem.yml
---
# Titanium.UI.ListItem

<TypeHeader/>

## Overview

A list item is a combination of a <ListDataItem> and <ItemTemplate>.  The list data item
represents the actual data, while the item template represents the style elements of the item.

You should not create `ListItem` objects with a JavaScript factory method, as you do other Titanium proxies.
Instead, you should pass a <ListDataItem> array to the `setItems` method of a `ListSection`. The list data items 
contain the data you want to display in the list.

Alloy applications can use **`<ListItem>`** elements to create `ListItem` objects. `<ListItem>` elements
must be nested inside a **`<ListSection>`** element, which itself is nested in a `<ListView>` element, 
as shown below:

``` xml
<Alloy>
    <ListView id="list">
        <ListSection id="accounts">
            <ListItem image="images/checking_account.png" title="Checking"/>
            <ListItem image="images/saving_account.png" title="Savings"/>
        </ListSection>
    </ListView>
</Alloy>
```

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

  * <Titanium.UI.ActivityIndicator>
  * <Titanium.UI.Button>
  * <Titanium.UI.ButtonBar>
  * <Titanium.UI.ImageView>
  * <Titanium.UI.Label>
  * <Titanium.UI.MaskedImage>
  * <Titanium.UI.ProgressBar>
  * <Titanium.UI.Picker>
  * <Titanium.UI.ScrollableView>
  * <Titanium.UI.Slider>
  * <Titanium.UI.Switch>
  * <Titanium.UI.TextArea>
  * <Titanium.UI.TextField>
  * <Titanium.UI.iOS.BlurView>
  * <Titanium.UI.iOS.LivePhotoView>
  * <Titanium.UI.iOS.Stepper>
  * <Titanium.UI.iOS.TabbedBar>

For example, suppose you have a list data item defined as `{foo:{text: 'foobar'}}` and an item
template defined as `{childTemplates: [{type: 'Ti.UI.Label', bindId: 'foo'}]}`.  The `foo`
property in the list data item binds to the label in the template, which sets the `text`
property of the label in the template to the `text` property in the list data item.

To bind the list data item to an item template, use the <Titanium.UI.ListView.templates>
property to map the template to a style name, then use the style name to either set the
<Titanium.UI.ListView.defaultItemTemplate> property to globally set the style for all items or set the
`template` property of the list data item to override or individually set the style.

On iOS, you can specify one of the template constants for the <ListDataItem.template> property
or <Titanium.UI.ListView.defaultItemTemplate> property: <Titanium.UI.LIST_ITEM_TEMPLATE_CONTACTS>,
<Titanium.UI.LIST_ITEM_TEMPLATE_SETTINGS> or <Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE>.

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

## Examples

### Default List Items

Creates a list without using an item template. Monitors the `itemclick` event to check and
uncheck tasks.

``` js
var win = Ti.UI.createWindow({backgroundColor: 'white'});
var listView = Ti.UI.createListView();

var tasks = [
    {id: 'trash', name: 'Take Out the Trash', icon: 'trash.png'},
    {id: 'dishes', name: 'Do the Dishes', icon: 'dishes.png'},
    {id: 'doggie', name: 'Walk the Dog', icon: 'doggie.png'}
];

var data = [];
for (var i = 0; i < tasks.length; i++) {
    data.push({ 
        properties: {
            itemId: tasks[i].id,
            title: tasks[i].name,
            image: tasks[i].icon,
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
            color: 'black'
        }
    });
}

var section = Ti.UI.createListSection();
section.setItems(data);
listView.sections = [section];
listView.addEventListener('itemclick', function(e) {
    var item = section.getItemAt(e.itemIndex);
    if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        item.properties.color = 'red';
    } else {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        item.properties.color = 'black';
    }
    section.updateItemAt(e.itemIndex, item);
});
win.add(listView);
win.open();
```

### Default List Items (Alloy version)

Alloy version of previous example. For additional Alloy examples of using `ListView`, see <Titanium.UI.ListView>. 

index.xml
``` xml
<!-- views/index.xml -->
<Alloy>
    <Window class="container" title="Some things">
        <ListView id="listView">
            <ListSection id="section">
                <ListItem image="images/trash.jpg" title="Take Out the Trash"/>
                <ListItem image="images/dishes.png" title="Do the Dishes"/>
                <ListItem image="images/doge.png" title="Walk the Dog"/>
            </ListSection>
        </ListView>
    </Window>
</Alloy>
```

index.js
``` js
// controllers/index.js
$.listView.addEventListener('itemclick', function(e) {
    var item = $.section.getItemAt(e.itemIndex);
    if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        item.properties.color = 'red';
    } else {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        item.properties.color = 'black';
    }
    $.section.updateItemAt(e.itemIndex, item);
});
```

### List Items with an Item Template

Previous example modified to use an item template.  The template defines a small icon on the
far left, a title label to the right of the icon and a subtitle below the title label in
smaller text.

Monitors the `click` event of the item rather than the `itemclick` event of the list view.

``` js
var win = Ti.UI.createWindow({backgroundColor: 'white'});

var plainTemplate = {
    childTemplates: [
        {                            // Image justified left
            type: 'Ti.UI.ImageView', // Use an image view for the image
            bindId: 'pic',           // Maps to a custom pic property of the item data
            properties: {            // Sets the image view properties
                width: '50dp', height: '50dp', left: 0
            }
        },
        {                            // Title
            type: 'Ti.UI.Label',     // Use a label for the title
            bindId: 'title',         // Maps to a custom title property of the item data
            properties: {            // Sets the label properties
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
                left: '60dp', top: 0,
            },
        },
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'subtitle',      // Maps to a custom subtitle property of the item data
            properties: {            // Sets the label properties
                color: 'gray',
                font: { fontFamily:'Arial', fontSize: '14dp' },
                left: '60dp', top: '25dp',
            }
        }
    ],
    // Binds a callback to the click event, which catches events bubbled by the view subcomponents.
    events: {click: toggleCheck }
};

// The following JSON API calls copy the plainTemplate object minus functions.
// This method of copying an object is simple but not quick.
// If performance is a factor, create your own method to copy an object.

var redTemplate = JSON.parse(JSON.stringify(plainTemplate));
// Change the text color to red
redTemplate.childTemplates[1].properties.color = 'red';
redTemplate.childTemplates[2].properties.color = 'red';
// Rebind the click event callback
redTemplate.events.click = toggleCheck;

var listView = Ti.UI.createListView({
    // Maps plainTemplate to 'uncheck' and redTemplate to 'check' 
    templates: { 'uncheck': plainTemplate, 'check': redTemplate },
    // Use 'uncheck', that is, the plainTemplate created earlier for all items
    // Can be overridden by the item's template property
    defaultItemTemplate: 'uncheck'
});

var tasks = [
    {id: 'trash', name: 'Take Out the Trash', person: 'Yakko', icon: 'trash.png'},
    {id: 'dishes', name: 'Do the Dishes', person: 'Wakko', icon: 'dishes.png'},
    {id: 'doggie', name: 'Walk the Dog', person: 'Dot', icon: 'doggie.png'}
];

var data = [];
for (var i = 0; i < tasks.length; i++) {
    data.push({
        // Maps to the title component in the template
        // Sets the text property of the Label component
        title : { text: tasks[i].name },
        // Maps to the subtitle component in the template
        // Sets the text property of the Label component
        subtitle : { text : tasks[i].person },
        // Maps to the pic component in the template
        // Sets the image property of the ImageView component
        pic : { image : tasks[i].icon },
        // Sets the regular list data properties
        properties : {
            itemId: tasks[i].id,
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
        }
    });
}

var section = Ti.UI.createListSection();
section.setItems(data);
listView.sections = [section];

// Modified version of the `itemclick` event listener
// Changes the item template rather than the list item's color property
function toggleCheck(e) {
    var item = section.getItemAt(e.itemIndex);
    if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        item.template = 'check';
    } else {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        item.template = 'uncheck';
    }
    section.updateItemAt(e.itemIndex, item);
} 

win.add(listView);
win.open();
```

<ApiDocs/>
