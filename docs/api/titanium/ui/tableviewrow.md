# Titanium.UI.TableViewRow

<ProxySummary/>

## Overview

Use the <Titanium.UI.createTableViewRow> method or **`<TableViewRow>`** Alloy element to create
a table view row.

These may be explicitly added to [TableViewSection](Titanium.UI.TableViewSection) objects, which are applied
to a [TableView](Titanium.UI.TableView). If a table section is not specified, one will be
automatically created.

A row's contents can be as simple as a single line of text, or comprised of a completely
customized layout of child views.

### Creating Table View Rows

Rows may be created using the properties directly available on the `TableViewRow` object, to
achieve the following:

* Row title to display the text content in the row.
* Background color and background image.
* Images on the left and right sides of the row.
* System decorations, such as checkboxes.

Alternatively, custom layouts of multiple lines of text, different fonts, and additional
images or controls can be created by adding child views to the row. In this case, the row's
`title` property should not be set.

As events automatically bubble/propogate to parent views, a listener may be placed on the table
view to detect events fired from the rows. The benefit is that it is not necessary to
explicitly create a listener for every individual row.

See the [TableView](Titanium.UI.TableView) description and examples section for more information
about creating table rows.

### Improved Table Performance (Android)

If you are experiencing performance issues on Android when using custom rows, you can
try setting the [className](Titanium.UI.TableViewRow.className) property. The class name serves as a
cue for reusing the underlying views used to display the rows.

A given `className` value indicates a row with a particular set of child views.
All rows that share a class name must have the same set of children -- for example, the class
name "myCustomRow" could identify a row containing two labels and an image view.

The properties of the child controls may be different. For example, each instance of
"myCustomRow" could have a different image and different text on the labels.

Note that `className` is no longer used on iOS, and is ignored.

### Platform Implementation Notes

The `top`, `left` and other positional parameters are not used for their usual purposes, because
the table view row is automatically positioned by its parent.

On Android, these properties are used to position the content (title) inside the row. For example,
setting `top` to 20 moves the title down from the top of the row.

On iOS, these values have no effect.

Also, note that the selected text color, `selectedColor`, can only be set on iOS.
On Android, the text color does not change when the row is selected.

### Row Swipe Gestures (Android and iOS)

A common requirement is to enable the user to interact with table rows using swipe gestures.
As this event is not available for the `TableViewRow` object, it will not "bubble up" to the
`TableView`, where a <Titanium.UI.TableView.swipe> is recognized.

A typical solution is to use a standard view as a container, or wrapper, for all each row's child
views, because it recognizes <Titanium.UI.View.swipe> events and allows them to pass to the table.
Each child view should have touch events disabled, so that the container view provides a reliable
source for these events. Refer to the "Row Swipe Gestures" example for a demonstration.

For iOS, read the [Row Editing and Moving Modes notes on TableView](Titanium.UI.TableView) regarding
the interactions between edit modes and swipes.

## Examples

### Simple Table View Row example

Create a table view row containing a red square view.

    var row = Titanium.UI.createTableViewRow();
    var view = Titanium.UI.createView({
      backgroundColor:'red',
      width: 20, height: 20
    });
    row.add(view);

### Row Swipe Gestures

Create a table of rows. When a row is swiped, output its ID to the log.

    var tableData = [];

    var win = Ti.UI.createWindow({ backgroundColor: 'white' });

    var table = Ti.UI.createTableView({ objName: 'table' });

    for (var i = 0; i <= 20; i++){
      var row = Ti.UI.createTableViewRow({
        className: 'row',
        objName: 'row',
        touchEnabled: true,
        height: 100
      });

      var enabledWrapperView = Ti.UI.createView({
        backgroundColor:'#008FD5',
        objName: 'enabledWrapperView',
        rowID: i,
        width: Ti.UI.FILL, height: '100%'
      });

      var disabledWrapperView = Ti.UI.createView({
        backgroundColor:'#A2E0FF',
        objName: 'disabledWrapperView',
        touchEnabled: false,
        width: 300, height: '80%'
      });
      enabledWrapperView.add(disabledWrapperView);

      var label = Ti.UI.createLabel({
        backgroundColor:'#313F48',
        color: 'white',
        objName: 'label',
        text: i,
        touchEnabled: false,
        left: 0,
        width: 200
      });
      disabledWrapperView.add(label);

      row.add(enabledWrapperView);
      tableData.push(row);
    }

    table.setData(tableData);

    table.addEventListener('swipe', function(e){
      if (e.source && e.source.objName !== 'table'){
        Ti.API.info('Row swiped: ' + e.source);
        Ti.API.info('Row swiped: ' + e.source.objName);
        Ti.API.info('Row ID : ' + e.source.rowID);
      }
    });

    win.add(table);
    win.open();

### Alloy XML Markup

Previous simple table view row example as an Alloy view.

    <Alloy>
        <TableViewRow id="row">
            <View id="view" backgroundColor="red" width="20" height="20"/>
        </TableViewRow>
    </Alloy>

<ApiDocs/>
