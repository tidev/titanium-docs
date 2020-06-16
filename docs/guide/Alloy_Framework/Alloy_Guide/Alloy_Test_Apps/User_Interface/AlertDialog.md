---
title: AlertDialog
weight: '10'
---

# AlertDialog

Demonstrates basic use of an AlertDialog.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/alertdialog](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/alertdialog). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

An [AlertDialog](#!/api/Titanium.UI.AlertDialog) presents a modal dialog with a title, message and one or more buttons. On Android, you add add a custom view to an AlertDialog, which replaces any declared buttons.

![alert](./alert.png)

The main index.xml view declares the AlertDialog element, and a Button that calls the `showAlert()` function defined by the main view-controller to show the dialog.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <!--
            Declare AlertDialog, which will be opened by an event.
            The AlertDialog is not part of the view hierarchy.
        -->
        <AlertDialog id="alertDialog" title="title" message="This is my message" cancel="1">
            <ButtonNames>
                <ButtonName>OK</ButtonName>
                <ButtonName>cancel</ButtonName>
                <ButtonName platform="android">android</ButtonName>
            </ButtonNames>
            <!--
                Only on Android, an additional view can be added to be rendered in
                the AlertDialog, replacing any declared buttons. It will be added
                to the AlertDialog's view hierarchy like any other View.
            -->
            <View layout="horizontal" platform="android">
                <ImageView id="avImage" image="/appc4.png" height="40dp" width="40dp"/>
                <Label id="avLabel">custom view label</Label>
            </View>
        </AlertDialog>
        <!-- The actual view hierarchy code -->
        <Button onClick="showAlert">show alert</Button>
    </Window>
</Alloy>
```

**app/controllers/index.js**

```javascript
function showAlert(e) {
    $.alertDialog.show();
}
$.index.open();
```

## See Also

* [Titanium.UI.AlertDialog](#!/api/Titanium.UI.AlertDialog)

* [Titanium.UI.iPhone.AlertDialogStyle](#!/api/Titanium.UI.iPhone.AlertDialogStyle)
