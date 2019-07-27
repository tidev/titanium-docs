# Titanium.UI.ListView

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tbody>
    <tr>
      <td><img src="images/listview/listview_android.png" height="200" /></td>
      <td><img src="images/listview/listview_ios.png" height="200" /></td>
      <td><img src="images/listview/listview_wp.png" height="200" /></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Android</th>
      <th>iOS</th>
      <th>Windows Phone</th>
    </tr>
  </tfoot>
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
A `ListItem` is created by passing an array of `ListDataItem` objects to the `ListSection`.

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

## Examples

### List View Sections

Creates a list with three sections, each with two rows.
Adds two sections to the table before and one after it is rendered.

    var win = Ti.UI.createWindow({backgroundColor: 'gray'});
    var listView = Ti.UI.createListView();
    var sections = [];

    var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits'});
    var fruitDataSet = [
        {properties: { title: 'Apple'}},
        {properties: { title: 'Banana'}},
    ];
    fruitSection.setItems(fruitDataSet);
    sections.push(fruitSection);

    var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables'});
    var vegDataSet = [
        {properties: { title: 'Carrots'}},
        {properties: { title: 'Potatoes'}},
    ];
    vegSection.setItems(vegDataSet);
    sections.push(vegSection);

    listView.sections = sections;
    win.add(listView);
    win.open();

    var fishSection = Ti.UI.createListSection({ headerTitle: 'Fish'});
    var fishDataSet = [
        {properties: { title: 'Cod'}},
        {properties: { title: 'Haddock'}},
    ];
    fishSection.setItems(fishDataSet);
    listView.appendSection(fishSection);

### List View with Custom Item Template

Modifies the previous example to create a list using an item template to customize the view layout.

    var win = Ti.UI.createWindow({backgroundColor: 'white'});

    // Create a custom template that displays an image on the left,
    // then a title next to it with a subtitle below it.
    var myTemplate = {
        childTemplates: [
            {                            // Image justified left
                type: 'Ti.UI.ImageView', // Use an image view for the image
                bindId: 'pic',           // Maps to a custom pic property of the item data
                properties: {            // Sets the image view  properties
                    width: '50dp', height: '50dp', left: 0
                }
            },
            {                            // Title
                type: 'Ti.UI.Label',     // Use a label for the title
                bindId: 'info',          // Maps to a custom info property of the item data
                properties: {            // Sets the label properties
                    color: 'black',
                    font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
                    left: '60dp', top: 0,
                }
            },
            {                            // Subtitle
                type: 'Ti.UI.Label',     // Use a label for the subtitle
                bindId: 'es_info',       // Maps to a custom es_info property of the item data
                properties: {            // Sets the label properties
                    color: 'gray',
                    font: { fontFamily:'Arial', fontSize: '14dp' },
                    left: '60dp', top: '25dp',
                }
            }
        ]
    };

    var listView = Ti.UI.createListView({
        // Maps myTemplate dictionary to 'template' string
        templates: { 'template': myTemplate },
        // Use 'template', that is, the myTemplate dict created earlier
        // for all items as long as the template property is not defined for an item.
        defaultItemTemplate: 'template'
    });
    var sections = [];

    var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits / Frutas'});
    var fruitDataSet = [
        // the text property of info maps to the text property of the title label
        // the text property of es_info maps to text property of the subtitle label
        // the image property of pic maps to the image property of the image view
        { info: {text: 'Apple'}, es_info: {text: 'Manzana'}, pic: {image: 'apple.png'}},
        { info: {text: 'Banana'}, es_info: {text: 'Banana'}, pic: {image: 'banana.png'}}
    ];
    fruitSection.setItems(fruitDataSet);
    sections.push(fruitSection);

    var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables / Verduras'});
    var vegDataSet = [
        { info: {text: 'Carrot'}, es_info: {text: 'Zanahoria'}, pic: {image: 'carrot.png'}},
        { info: {text: 'Potato'}, es_info: {text: 'Patata'}, pic: {image: 'potato.png'}}
    ];
    vegSection.setItems(vegDataSet);
    sections.push(vegSection);

    var grainSection = Ti.UI.createListSection({ headerTitle: 'Grains / Granos'});
    var grainDataSet = [
        { info: {text: 'Corn'}, es_info: {text: 'Maiz'}, pic: {image: 'corn.png'}},
        { info: {text: 'Rice'}, es_info: {text: 'Arroz'}, pic: {image: 'rice.png'}}
    ];
    grainSection.setItems(grainDataSet);
    sections.push(grainSection);

    listView.setSections(sections);
    win.add(listView);
    win.open();

### List View with a pullView (Only supported on iOS since 3.2.0)

This sample shows how the [pullView](Titanium.UI.ListView.pullView) property could be
utilized along with the [pull](Titanium.UI.ListView.pull) and [pullend](Titanium.UI.ListView.pullend) events to
create a refresh control.

    var win = Ti.UI.createWindow({backgroundColor: 'white'});
    var listView = Ti.UI.createListView({height:'90%', top:0});
    var sections = [];

    var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits'});
    var fruitDataSet = [
        {properties: { title: 'Apple'}},
        {properties: { title: 'Banana'}},
    ];
    fruitSection.setItems(fruitDataSet);
    sections.push(fruitSection);

    var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables'});
    var vegDataSet = [
        {properties: { title: 'Carrots'}},
        {properties: { title: 'Potatoes'}},
    ];
    vegSection.setItems(vegDataSet);

    var fishSection = Ti.UI.createListSection({ headerTitle: 'Fish'});
    var fishDataSet = [
        {properties: { title: 'Cod'}},
        {properties: { title: 'Haddock'}},
    ];
    fishSection.setItems(fishDataSet);
    listView.sections = sections;
    var refreshCount = 0;

    function getFormattedDate(){
        var date = new Date();
        return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    }

    function resetPullHeader(){
        actInd.hide();
        imageArrow.transform=Ti.UI.createMatrix2D();
        if (refreshCount < 2) {
            imageArrow.show();
            labelStatus.text = 'Pull down to refresh...';
            labelLastUpdated.text = 'Last Updated: ' + getFormattedDate();
        } else {
            labelStatus.text = 'Nothing To Refresh';
            labelLastUpdated.text = 'Last Updated: ' + getFormattedDate();
            listView.removeEventListener('pull', pullListener);
            listView.removeEventListener('pullend', pullendListener);
            eventStatus.text = 'Removed event listeners.';
        }
        listView.setContentInsets({top:0}, {animated:true});
    }

    function loadTableData()
    {
        if (refreshCount == 0) {
            listView.appendSection(vegSection);
        } else if (refreshCount == 1) {
            listView.appendSection(fishSection);
        }
        refreshCount ++;
        resetPullHeader();
    }

    function pullListener(e){
        eventStatus.text = 'EVENT pull FIRED. e.active = '+e.active;
        if (e.active == false) {
            var unrotate = Ti.UI.createMatrix2D();
            imageArrow.animate({transform:unrotate, duration:180});
            labelStatus.text = 'Pull down to refresh...';
        } else {
            var rotate = Ti.UI.createMatrix2D().rotate(180);
            imageArrow.animate({transform:rotate, duration:180});
            if (refreshCount == 0) {
                labelStatus.text = 'Release to get Vegetables...';
            } else {
                labelStatus.text = 'Release to get Fish...';
            }
        }
    }

    function pullendListener(e){
        eventStatus.text = 'EVENT pullend FIRED.';

        if (refreshCount == 0) {
            labelStatus.text = 'Loading Vegetables...';
        } else {
            labelStatus.text = 'Loading Fish...';
        }
        imageArrow.hide();
        actInd.show();
        listView.setContentInsets({top:80}, {animated:true});
        setTimeout(function(){
            loadTableData();
        }, 2000);
    }

    var tableHeader = Ti.UI.createView({
        backgroundColor:'#e2e7ed',
        width:320, height:80
    });

    var border = Ti.UI.createView({
        backgroundColor:'#576c89',
        bottom:0,
        height:2
    });
    tableHeader.add(border);

    var imageArrow = Ti.UI.createImageView({
        image:'arrow.png',
        left:20, bottom:10,
        width:23, height:60
    });
    tableHeader.add(imageArrow);

    var labelStatus = Ti.UI.createLabel({
        color:'#576c89',
        font:{fontSize:13, fontWeight:'bold'},
        text:'Pull down to refresh...',
        textAlign:'center',
        left:55, bottom:30,
        width:200
    });
    tableHeader.add(labelStatus);

    var labelLastUpdated = Ti.UI.createLabel({
        color:'#576c89',
        font:{fontSize:12},
        text:'Last Updated: ' + getFormattedDate(),
        textAlign:'center',
        left:55, bottom:15,
        width:200
    });
    tableHeader.add(labelLastUpdated);

    var actInd = Ti.UI.createActivityIndicator({
        left:20, bottom:13,
        width:30, height:30
    });
    tableHeader.add(actInd);
    listView.pullView = tableHeader;
    listView.addEventListener('pull', pullListener);
    listView.addEventListener('pullend',pullendListener);

    var eventStatus = Ti.UI.createLabel({
        font:{fontSize:13, fontWeight:'bold'},
        text: 'Event data will show here',
        bottom:0,
        height:'10%'
    })

    win.add(listView);
    win.add(eventStatus);
    win.open();

### Alloy XML Markup

'List View with Custom Item Template' as an Alloy view.  List view markup is supported in
Alloy 1.2.0 and later.

`app/views/index.xml`:

    <Alloy>
        <Window backgroundColor="white">
            <ListView id="listView" defaultItemTemplate="template">

                <!-- The Templates tag sets the ListView's templates property -->

                <Templates>

                    <!-- Define your item templates within the Templates tags or use the
                         Require tag to include a view that only contains an ItemTemplate -->

                    <ItemTemplate name="template">
                        <ImageView bindId="pic" id="icon" />
                        <Label bindId="info" id="title" />
                        <Label bindId="es_info" id="subtitle" />
                    </ItemTemplate>

                </Templates>

                <ListSection headerTitle="Fruit / Frutas">

                    <!-- You can specify any ListItem or ListDataItem properties in ListItem -->

                    <!-- Specify data to bind to the item template with inline attributes
                         defined as <bindId>:<Ti.UI.Component.property> -->

                    <ListItem info:text="Apple" es_info:text="Manzana" pic:image="/apple.png" />
                    <ListItem info:text="Banana" es_info:text="Banana" pic:image="/banana.png" />
                </ListSection>
                <ListSection headerTitle="Vegetables / Verduras">
                    <ListItem info:text="Carrot" es_info:text="Zanahoria" pic:image="/carrot.png" />
                    <ListItem info:text="Potato" es_info:text="Patata" pic:image="/potato.png" />
                </ListSection>
                <ListSection headerTitle="Grains / Granos">
                    <ListItem info:text="Corn" es_info:text="Maiz" pic:image="/corn.png" />
                    <ListItem info:text="Rice" es_info:text="Arroz" pic:image="/rice.png" />
                </ListSection>
            </ListView>
        </Window>
    </Alloy>

`app/styles/index.tss`:

    "#icon" : {
        width: '50dp', height: '50dp', left: 0
    },
    "#title" : {
        color: 'black',
        font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
        left: '60dp', top: 0
    },
    "#subtitle" : {
        color: 'gray',
        font: { fontFamily:'Arial', fontSize: '14dp' },
        left: '60dp', top: '25dp'
    }

### Alloy example of ListView properties

Supported in Alloy 1.3.0 and later.

In Alloy, ListView's `searchView`, `headerView`, `footerView`, and `pullView`
properties may be declared as XML elements inline with the `ListView` element.  The example
below demonstrates how to use `searchView`, `headerView` and `footerView`.

    <Alloy>
        <Window fullscreen="true">
            <ListView>
                <!-- Sets ListView's searchView property.
                     For Android, you can also do <SearchView platform="android" />
                     to use a Ti.UI.Android.SearchView instead of a search bar. -->
                <SearchBar barColor="#000" />

                <!-- Sets ListView's headerView property -->
                <HeaderView>
                    <View backgroundColor="#DDD" height="Ti.UI.SIZE">
                        <Label>Header View</Label>
                    </View>>
                </HeaderView>

                <ListSection>
                    <ListItem title="Papaya" searchableText="Papaya"/>
                    <ListItem title="Peach" searchableText="Peach"/>
                    <ListItem title="Pear" searchableText="Pear"/>
                    <ListItem title="Persimmon" searchableText="Persimmon"/>
                    <ListItem title="Pineapple" searchableText="Pineapple"/>
                    <ListItem title="Pluot" searchableText="Pluto"/>
                    <ListItem title="Pomegranate" searchableText="Pomegranate"/>
                </ListSection>

                <!-- Sets ListView's footerView property -->
                <FooterView>
                    <View backgroundColor="#DDD" height="Ti.UI.SIZE">
                        <Label>Footer View</Label>
                    </View>
                </FooterView>
            </ListView>
        </Window>
    </Alloy>

### Alloy example of <PullView> element

The example below demonstrates how to use a `<PullView>` Alloy element.

    <!-- views/index.xml -->
    <Alloy>
        <Window class="container" >
            <ListView id="list">
                <ListSection>
                    <ListItem title="Number 1"></ListItem>
                    <ListItem title="Number 2"></ListItem>
                </ListSection>
                <PullView>
                    <View backgroundColor="red" height="50">
                        <Label>Release to reload</Label>
                    </View>
                </PullView>
            </ListView>
        </Window>
    </Alloy>

<ApiDocs/>
