# Titanium.UI.PickerColumn

<TypeHeader/>

## Overview

Use the <Titanium.UI.createPickerColumn> method to create a picker column control. In an Alloy application,
you can use a **`<PickerColumn>`** element inside a `<Picker>` element. You can also use `<Column>`
as a shorthand for `<PickerColumn>` (see Examples).

On Android, the `useSpinner` property must be enabled to support multiple columns.

See <Titanium.UI.Picker> for further examples of usage.

## Examples

### Multi-Column Picker

Create a two-column, platform-specific style, picker and automatically select a row in
each column.

``` js
var win = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false,
  title: 'Use picker to make selection'
});

var fruit = [ 'Bananas', 'Grapes', 'Blueberries', 'Strawberries' ];
var color = [ 'blue', 'red', 'yellow', 'white' ];

var column1 = Ti.UI.createPickerColumn();

for(var i=0, ilen=fruit.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: fruit[i]
  });
  column1.addRow(row);
}

var column2 = Ti.UI.createPickerColumn();

for(var i=0, ilen=color.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: color[i]
  });
  column2.addRow(row);
}

var picker = Ti.UI.createPicker({
  columns: [column1, column2],
  selectionIndicator: true,
  useSpinner: true, // required in order to use multi-column pickers with Android
  top:50
});

function pickerDefaults(obj){
  // on iOS, must be after picker has been rendered
  picker.setSelectedRow(0, 2, false);
  picker.setSelectedRow(1, 3, false);
}

win.add(picker);

var isAndroid = Ti.Platform.osname === 'android';

if(isAndroid){
  pickerDefaults(picker);
}

win.open();

if(!isAndroid){
  setTimeout(function(){
    pickerDefaults(picker);
  }, 1500);
}
```

### Alloy XML Markup

Previous example as an Alloy view.

multicolumnpicker.xml
``` xml
<Alloy>
    <Window id="win" backgroundColor="white" exitOnClose="true" fullscreen="false"
        title="Use picker to make selection">

        <Picker id="picker" top="50" selectionIndicator="true" useSpinner="true">
            <PickerColumn id="column1">
                <PickerRow title="Bananas"/>
                <PickerRow title="Grapes"/>
                <PickerRow title="Blueberries"/>
                <PickerRow title="Strawberries"/>
            </PickerColumn>
            <!-- Picker shorthand notation -->
            <Column id="column2">
                <Row title="blue"/>
                <Row title="red"/>
                <Row title="yellow"/>
                <Row title="white"/>
            </Column>
        </Picker>
    </Window>
</Alloy>
```

multicolumnpicker.js:
``` js
$.picker.setSelectedRow(0, 2, false);
$.picker.setSelectedRow(1, 3, false);
```

<ApiDocs/>
