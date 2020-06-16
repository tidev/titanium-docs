---
title: Date Time Pickers
weight: '60'
---

# Date Time Pickers

Demonstrates how to create a date/time picker using the Picker control.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/datetime\_picker](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/datetime_picker). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

The Picker control is used to let a user select one or more fixed values. You can set the `type` property of a Picker to display different types of information including [PICKER\_TYPE\_DATE\_AND\_TIME](#!/api/Titanium.UI-property-PICKER_TYPE_DATE_AND_TIME) and [PICKER\_TYPE\_DATE](#!/api/Titanium.UI-property-PICKER_TYPE_DATE). Set the `type` attribute to one of the date/time picker types. Then, supply the date in the XML or TSS as a string that can be parsed by the moment.js library.

![screenshot](./screenshot.png)

The main index.xml view in the sample application sets the Picker element's `type` property to `Ti.UI.PICKER_TYPE_DATE`, and sets the minimum and maximum dates the control will display.

**app/views/index.xml**

```xml
<Alloy>
  <Window>
    <!--
      The text field is included to show that its value attribute
      will not be parsed as a date, which is how the Picker's value
      attribute will be treated.
    -->
    <TextField id="txt" value="July 4, 2014" top="20"/>
    <Picker id="picker" top="50"
      type="Ti.UI.PICKER_TYPE_DATE"
      minDate= "2013-02-08 09:30:26 Z"
      maxDate="2015,11,17">
      <!-- the value (selected date) is being set in the TSS -->
    </Picker>
  </Window>
</Alloy>
```

The initial time displayed by the Picker control is set in the main view's TSS file. A Picker's `value` property can be any string that can parsed as a date by the [Moment.js](http://momentjs.com/docs/) library included with Alloy projects.

```
'#index': {
    backgroundColor: '#fff',
    fullscreen: false,
    exitOnClose: true
}
"#picker": {
    value: "December 17, 2013"
}
'#index[platform=android]': {
    backgroundColor: '#000'
}
```

## See Also

* [Titanium.UI.Picker API reference](#!/api/Titanium.UI.Picker)

* [Titanium.UI.Picker.type property API reference](#!/api/Titanium.UI.Picker-property-type)

* [Moment.js](http://momentjs.com/docs/)
