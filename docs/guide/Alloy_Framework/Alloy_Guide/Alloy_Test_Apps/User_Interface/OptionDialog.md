---
title: OptionDialog
weight: '110'
---

# OptionDialog

Demonstrates how to use an OptionDialog control, a modal view that includes a message and one or more option items.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/optiondialog](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/optiondialog). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

On Android an [OptionDialog](#!/api/Titanium.UI.OptionDialog) is centered on the screen, and at the bottom of the screen on iOS. On Android, you can add buttons below the options, or define a custom view to show in place of the options, as shown below. You can either the options or a custom view, but not both. On iPhone, a Cancel option is always displayed at the bottom of the dialog; on iPad, no cancel option is not displayed and the user can cancel the dialog by tapping outside the dialog.

![screenshot](./screenshot.png)

The main `index.xml` view defines the OptionDialog options for Android and iOS. Individual options are defined by an `<Options>` element that contains one or more `<Option>` elements. On iOS, you should use the [destructive](#!/api/Titanium.UI.OptionDialog-property-destructive) attribute to specify the index of an option that is destructive or irreversible (like deleting a contact or photo, for example). Destructive options are colored red, as shown above.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <!--
            Declare option dialog, which will be opened by an event.
            The OptionDialog is not part of the view hierarchy.
            On iOS, descructive and cancel will change the characteristics
            of the options.
        -->
        <OptionDialog id="options" title="App Options" destructive="3" cancel="2">
            <Options>
                <Option>option 1</Option>
                <Option>option 2</Option>
                <Option>cancel</Option>
                <Option>destructive</Option>
            </Options>
            <!-- buttonNames only rendered on Android -->
            <ButtonNames>
                <ButtonName>button 1</ButtonName>
                <ButtonName>button 2</ButtonName>
            </ButtonNames>
            <!--
                Only on Android, an additional view can be added to be rendered in
                the OptionDialog, replacing any declared options. It will be
                assigned to the underlying "androidView" property of the OptionDialog.
            -->
            <View layout="horizontal" platform="android">
                <ImageView id="avImage" image="/appc4.png" height="40dp" width="40dp"/>
                <Label id="avLabel">This is an androidView</Label>
            </View>
        </OptionDialog>
        <!-- The actual view hierarchy code -->
        <Button onClick="showOptions">options</Button>
    </Window>
</Alloy>
```

## See also

* [Titanium.UI.OptionDialog](#!/api/Titanium.UI.OptionDialog)
