---
title: DashboardView
weight: '50'
---

# DashboardView

Demonstrates basic use of a DashboardView control in an Alloy application.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/dashboard](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/dashboard). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

The [DashboardView](#!/api/Titanium.UI.DashboardView) control presents a grid of icons, represented by [DashboardItem](#!/api/Titanium.UI.DashboardItem)s, that can reordered and deleted, similar to the iOS home screen (Springboard). Each grid icon can be assigned a numeric badge value displayed over the icon, and be assigned a select . You can configure the number of grid rows and columns. To start edit mode, a user can long-press on a icon, or the application can call the [startEditing()](#!/api/Titanium.UI.DashboardView-method-startEditing) method. The control generates several events as the user [enters](#!/api/Titanium.UI.DashboardView-event-edit) or [exits](#!/api/Titanium.UI.DashboardView-event-commit) edit mode, [deletes](#!/api/Titanium.UI.DashboardView-event-delete) or [moves](#!/api/Titanium.UI.DashboardView-event-move) an item, or [changes](#!/api/Titanium.UI.DashboardView-event-pagechanged) to another page.

![screenshot](./screenshot.png)

The index.xml view declares a DashboardView, and defines event handlers for [click](#!/api/Titanium.UI.DashboardView-event-click), [edit](#!/api/Titanium.UI.DashboardView-event-edit) and [commit](#!/api/Titanium.UI.DashboardView-event-commit) events that are defined by the view-controller.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <Toolbar top="0dp">
            <Items>
                <Button id="editButton" onClick="toggleEditMode">Edit</Button>
            </Items>
        </Toolbar>
        <DashboardView id="dash" onClick="resetBadge" onEdit="handleEdit" onCommit="handleCommit">
            <DashboardItem image="account_off.png" selectedImage="account_on.png" badge="10" label="account"/>
            <DashboardItem image="calls_off.png" selectedImage="calls_on.png" badge="110" label="calls"/>
            <DashboardItem image="cases_off.png" selectedImage="cases_on.png" label="cases"/>
            <DashboardItem image="contacts_off.png" selectedImage="contacts_on.png" badge="23" label="contacts"/>
            <DashboardItem image="emps_off.png" selectedImage="emps_on.png" label="employees"/>
            <DashboardItem image="leads_off.png" selectedImage="leads_on.png" badge="1" label="leads"/>
            <DashboardItem image="meetings_off.png" selectedImage="meetings_on.png" badge="5" label="meetings"/>
            <DashboardItem image="opps_off.png" selectedImage="opps_on.png" label="opps"/>
            <DashboardItem image="tasks_off.png" selectedImage="tasks_on.png" label="tasks"/>
        </DashboardView>
    </Window>
</Alloy>
```

The view-controller defines the event handler functions.

**app/controllers/index.js**

```javascript
var isEditable = false;
function resetBadge(e) {
    e.item.badge = 0;
}
function toggleEditMode(e) {
    if (isEditable) {
        $.dash.stopEditing();
    } else {
        $.dash.startEditing();
    }
}
function handleEdit(e) {
    $.editButton.title = 'Done';
    $.editButton.style = Ti.UI.iPhone.SystemButtonStyle.DONE;
    isEditable = true;
}
function handleCommit(e) {
    $.editButton.title = 'Edit';
    $.editButton.style = Ti.UI.iPhone.SystemButtonStyle.PLAIN;
    isEditable = false;
}
$.index.open();
```

## See Also

* [Titanium.UI.DashboardView](#!/api/Titanium.UI.DashboardView)

* [Titanium.UI.DashboardItem](#!/api/Titanium.UI.DashboardItem)

* [DashboardView Binding](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Alloy_Test_Models/DashboardView_Binding/) sample application, which demonstrates using data binding with a DashboardView.
