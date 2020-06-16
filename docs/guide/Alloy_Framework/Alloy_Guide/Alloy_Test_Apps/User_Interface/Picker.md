---
title: Picker
weight: '120'
---

# Picker

Demonstrates basic use of the Picker control to let a user select one or more fixed values.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/picker](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/picker). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

The sample application demonstrates creating single- and multi-column [Picker](#!/api/Titanium.UI.Picker), as well as Alloy short-hand for declaring columns and rows. Note that, on Android, the Picker's`useSpinner` property must be set to `true` to enable multi-column pickers.

![screenshot](./screenshot.png)

To declare columns and rows you can use `<PickerRow/>` and `<PickerColumn/>` elements, or the shorthand `<Row/>` and `<Column/>` elements.

**app/views/index.xml**

```xml
<Alloy>
    <TabGroup>
        <Tab title="Single Column">
            <Window title="Single Column">
                <Picker>
                    <PickerRow title="row 1"/>
                    <PickerRow title="row 2"/>
                    <PickerRow title="row 3"/>
                    <PickerRow title="row 4"/>
                    <Require src="pickerrow"/>
                </Picker>
            </Window>
        </Tab>
        <Tab title="Multi-Column">
            <Window title="Multi-Column">
                <Picker>
                    <PickerColumn>
                        <PickerRow title="row 1"/>
                        <PickerRow title="row 2"/>
                        <PickerRow title="row 3"/>
                        <PickerRow title="row 4"/>
                        <Require src="pickerrow"/>
                    </PickerColumn>
                    <PickerColumn>
                        <Require src="pickerrow"/>
                        <PickerRow title="row 5"/>
                        <PickerRow title="row 6"/>
                        <PickerRow title="row 7"/>
                        <PickerRow title="row 8"/>
                    </PickerColumn>
                    <Require src="pickercolumn"/>
                </Picker>
            </Window>
        </Tab>
        <Tab title="Shorthand">
            <Window title="Shorthand">
                <Picker>
                    <Column>
                        <Row title="row 1"/>
                        <Row title="row 2"/>
                        <Row title="row 3"/>
                        <Row title="row 4"/>
                    </Column>
                    <Column>
                        <Row title="row 5"/>
                        <Row title="row 6"/>
                        <Row title="row 7"/>
                        <Row title="row 8"/>
                    </Column>
                </Picker>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>
```

The `index.tss` file sets the Picker object's [selectionIndicator](#!/api/Titanium.UI.Picker-property-selectionIndicator) property to `true`, and sets `useSpinner` to true on Android devices.

**app/styles/index.tss**

```javascript
"Window": {
  backgroundColor: '#fff'
},
"Label": {
  color: '#000',
  font: {
    fontSize: '32dp',
    fontWeight: 'bold'
  }
},
"Picker": {
  top: 0,
  selectionIndicator: true
},
"Picker[platform=android]": {
  useSpinner: true
}
```

## See also

* [Titanium.UI.Picker](#!/api/Titanium.UI.Picker) API reference
