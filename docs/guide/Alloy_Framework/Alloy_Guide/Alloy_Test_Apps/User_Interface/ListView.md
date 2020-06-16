---
title: ListView
weight: '80'
---

# ListView

Demonstrate basic use of the ListView element to create vertically scrolling lists of items.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/listview](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/listview). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

The sample demonstrates basic [ListView](#!/api/Titanium.UI.ListView) use with a single `ListViewSection`, using multiple `ListViewSection`s with header and footer views, and using custom item templates to customize the content and layout of individual list items within the same `ListView`.

![listviews](./listviews.png)

## Basic

A basic list view consists of `<ListView>` element that containing one or more `<ListSection>` elements that, in turn, contain one or more `<ListItem>` elements, as shown below. To handle events, you define an `onClick` handler on the ListView itself.

**app/views/basic.xml**

```xml
<Alloy>
    <Tab title="basic">
        <Window title="basic">
            <ListView id="list" onItemclick="onItemClick">
                <ListSection>
                    <ListItem title="row 1"/>
                    <ListItem title="row 2"/>
                    <ListItem title="row 3"/>
                    <ListItem title="row 4"/>
                    <ListItem title="row 5"/>
                    <ListItem title="row 6"/>
                    <ListItem title="row 7"/>
                    <ListItem title="row 8"/>
                    <ListItem title="row 9"/>
                    <ListItem title="row 10"/>
                </ListSection>
            </ListView>
        </Window>
    </Tab>
</Alloy>
```

To determine which item is selected in a ListView, the view-controller first determines which ListViewSection contains the selected item from the `itemclick` event's `sectionIndex` property. To get the selected item, it then calls the corresponding section's `getItemAt()` method, passing it the `itemclick` event's `itemIndex` property.

**app/controllers/basic.js**

```javascript
function onItemClick(e) {
  // get the clicked section
  var section = $.list.sections[e.sectionIndex];
  // get the clicked item from that section
  var item = section.getItemAt(e.itemIndex);
  // print the item's title
  Ti.API.info('itemclick: ' + item.properties.title);
}
```

::: tip 💡 Hint
You can also detect click events on views within an item template, as discussed in [Handling Events on Template Views](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/ListViews/Alloy_ListView_Guide/#handling-events-on-template-views).
:::

## Sections

A single can define multiple ListSections, each with optional header and footer views.

```xml
<Alloy>
    <Tab title="sections">
        <Window title="sections">
            <ListView id="list" onItemclick="onItemClick">
                <HeaderView>
                    <Label backgroundColor="#a88">headerView</Label>
                </HeaderView>
                <FooterView>
                    <Label backgroundColor="#8a8">footerView</Label>
                </FooterView>
                <ListSection headerTitle="title 1">
                    <ListItem title="row 1"/>
                    <ListItem title="row 2"/>
                    <ListItem title="row 3"/>
                </ListSection>
                <ListSection>
                    <HeaderView>
                        <Label backgroundColor="#a88">headerView</Label>
                    </HeaderView>
                    <FooterView>
                        <Label backgroundColor="#8a8">footerView</Label>
                    </FooterView>
                    <ListItem title="row 1"/>
                    <ListItem title="row 2"/>
                    <ListItem title="row 3"/>
                </ListSection>
                <ListSection headerTitle="title 3">
                    <ListItem title="row 1"/>
                    <ListItem title="row 2"/>
                    <ListItem title="row 3"/>
                </ListSection>
                <ListSection headerTitle="title 4">
                    <ListItem title="row 1"/>
                    <ListItem title="row 2"/>
                    <ListItem title="row 3"/>
                </ListSection>
            </ListView>
        </Window>
    </Tab>
</Alloy>
```

## Templates

In Alloy, a `<ListItem/>` element is a combination of a [ListDataItem](#!/api/ListDataItem), which specifies the data for the item to display, and an [ItemTemplate](#!/api/ItemTemplate), which specifies how that data should be displayed. If no template is specified, the [default list item template](#!/api/Titanium.UI-property-LIST_ITEM_TEMPLATE_DEFAULT) is used.

In the sample app, the `<ListView/>` defines three `<ItemTemplate/>` elements named "template1", "template2", and "requiredTemplate"one of which is required from an external XML file. The ListView element's `defaultItemTemplate` attribute is set to "template1", so it will be used if no template is specified.

The single `<ListSection>` element contains three `<ListItem/>` elements. The first one doesn't specify a template, so the default template ("template1") is applied; the second ListItem is required from an external file (`app/views/listItem.xml`) and specifies "template2" as its template; the third `<ListItem/>` specifies "requiredTemplate" as its template.

```xml
<Alloy>
    <Tab title="templates">
        <Window title="templates">
            <ListView id="list" defaultItemTemplate="template1">
                <Templates>
                    <ItemTemplate name="template1" height="100">
                        <ImageView bindId="image" id="image"/>
                        <Label bindId="label" id="label1"/>
                    </ItemTemplate>
                    <ItemTemplate name="template2" height="50">
                        <Label bindId="label" class="labels"/>
                    </ItemTemplate>
                    <Require src="itemTemplate"/>
                </Templates>
                <ListSection>
                    <ListItem image:image="/images/appc.png" label:text="this is some text"/>
                    <Require src="listItem"/>
                    <ListItem template="requiredTemplate" leftImage:image="/images/alien.png" rightImage:image="/images/up.png" title:text="Alien" subtitle:text="In space, no one can hear you scream"/>
                </ListSection>
            </ListView>
        </Window>
    </Tab>
</Alloy>
```

In addition to the `<ListItem>` elements declared in the XML, the templates.xml view-controller programmatically add items to the ListViewSection, conditionally applying either "requiredTemplate" or "template1" to each item.

::: tip 💡 Hint
It's important to note that this code does not generate list items directly, but rather just updates the data [items](#!/api/Titanium.UI.ListSection-property-items) array of the ListViewSection. The actual rendering of list items is left to the native control, based on the current scroll position. In this way, a ListView can display very large number of items without compromising performance.
:::

**app/controllers/templates.js**

```javascript
var IMAGES = [
    '/images/alien.png',
    '/images/predator.png',
    '/images/pod.png'
];
var moreItems = [];
var lastPos = 'left';
var imageCtr = 0;
for (var i = 0; i < 1023; i++) {
    // gradual increase to red
    var hex = (i%256).toString(16);
    if (hex.length < 2) {
        hex = '0' + hex;
    }
    // Use a different template every other row
    if (i%2) {
        moreItems.push({
            template: 'requiredTemplate',
            leftImage: {
                image: IMAGES[imageCtr++]
            },
            rightImage: {
                image: i%5 ? '/images/up.png' : '/images/down.png'
            },
            title: {
                text: 'This is my title'
            },
            subtitle: {
                text: 'And this is the subtitle'
            }
        });
        if (imageCtr >= IMAGES.length) { imageCtr = 0; }
    } else {
        var textAlign = lastPos === 'left' ? (lastPos = 'right') : (lastPos = 'left');
        moreItems.push({
            template: 'template2',
            label: {
                text: 'row ' + (i+1),
                color: '#' + hex + '0000',
                textAlign: textAlign,
                width: Ti.UI.FILL
            }
        });
    }
}
// append programmatic items to the ones from markup
$.list.sections[0].items = $.list.sections[0].items.concat(moreItems);
```

## See also

* [Alloy ListView Guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/ListViews/Alloy_ListView_Guide/)

    * [Handling Events](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/ListViews/Alloy_ListView_Guide/#handling-events)

* [Titanium.UI.ListView](#!/api/Titanium.UI.ListView)

* [Titanium.UI.ListItem](#!/api/Titanium.UI.ListItem)

* [ListDataItem](#!/api/ListDataItem) (abstract type)

* [ItemTemplate](#!/api/ItemTemplate) (abstract type)
