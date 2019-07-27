# Titanium.UI.DashboardView

<TypeHeader/>

## Overview

The DashboardView is created using the <Titanium.UI.createDashboardView> method or **`<DashboardView>`**
Alloy element.

Dashboard view's edit mode may be activated by a longpress of a <Titanium.UI.DashboardItem> item,
unless this behavior has been disabled by the [editable](Titanium.UI.DashboardView.editable)
property. As a dashboard view does not inherently provide a way to exit edit mode, this must be
explicitly defined.

When edit mode has been activated, the item icons wobble by default to act as a visual cue.
This behavior may be disabled using the [wobble](Titanium.UI.DashboardView.wobble) property.

If a dashboard contains more than 9 items, it will be paged into screens in a 3 x 3 formation
using its built-in scrollable view. A paging control is added to the bottom of the view to
indicate the active page.

Note that a dashboard is only intended to be used in [PORTRAIT](Titanium.UI.PORTRAIT)
orientation mode.

## Examples

### Dashboard Demo

Create a toolbar with an edit/done button and a dashboard of items on a single screen.
Set the badge value for some items, and allow them to be reset with a click. Enter edit mode
with a longpress of a dashboard item (default behavior). Toggle edit mode with a click to
the toolbar button.

Copy your image files to the local project `/images/dashboard` directory.


    var win = Ti.UI.createWindow({
        backgroundColor: '#13386c'
    });

    var button = Ti.UI.createButton({
        title: 'Edit',
        style: Ti.UI.iOS.SystemButtonStyle.DONE,
    });

    var toolbar = Ti.UI.iOS.createToolbar({
        items: [button],
        top: 0
    });
    win.add(toolbar);

    var label = Ti.UI.createLabel({
      color: 'white',
      font: { fontSize: 14 },
      text: 'Click an item to reset badge\nPress and hold an item to enable edit mode',
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      top: 55,
      height: 40,
      width: 300
    });
    win.add(label);

    var dashboardData = [];
    var itemData = [
      { name: 'account', badge: 10 },
      { name: 'cases', badge: 2 },
      { name: 'calls', badge: 2 },
      { name: 'contacts', badge: 5},
      { name: 'emps' },
      { name: 'leads' },
      { name: 'meetings', badge: 3 },
      { name: 'opps',  badge:  126 }, // badge will be displayed as "99+"
      { name: 'tasks' }
    ];

    for (var i = 0; i < itemData.length; i++) {
      var item = Ti.UI.createDashboardItem({
        badge: itemData[i].badge,
        image: '/images/dashboard/' + itemData[i].name + '_off.png',
        selectedImage: '/images/dashboard/' + itemData[i].name + '_on.png',
        label: itemData[i].name
      });
      dashboardData.push(item);
    }

    var dashboard = Ti.UI.createDashboardView({
      data: dashboardData,
      wobble: true,
      top: 100
    });
    win.add(dashboard);

    var isEditable = false;

    button.addEventListener('click', function(e) {
      if (isEditable) {
        dashboard.stopEditing();
      } else {
        dashboard.startEditing();
      }
    });

    dashboard.addEventListener('edit', function(e) {
      button.title = 'Done';
      button.style = Ti.UI.iOS.SystemButtonStyle.DONE;
      isEditable = true;
    });

    dashboard.addEventListener('commit', function(e) {
      button.title = 'Edit';
      button.style = Ti.UI.iOS.SystemButtonStyle.PLAIN;
      isEditable = false;
    });

    dashboard.addEventListener('click', function(e) {
      e.item.badge = 0;
    });

    win.open();

### Alloy XML Markup

Previous example as an Alloy view.

dashboard.xml:

    <Alloy>
        <Window id="win" backgroundColor="#13386c">
            <Toolbar id="toolbar" top="0">
                <Items>
                    <Button id="button" onClick="changeMode">Edit</Button>
                </Items>
            </Toolbar>
            <Label id="label" color="white" top="55" height="40" width="300">
                Click an item to reset badge\nPress and hold an item to enable edit mode
            </Label>

            <DashboardView id="dashboard" top="100" wobble="true"
                onClick="resetBadge" onEdit="handleEdit" onCommit="handleCommit">

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

dashboard.js:

    var isEditable = false;

    function changeMode(e) {
      if (isEditable) {
        $.dashboard.stopEditing();
      } else {
        $.dashboard.startEditing();
      }
    }

    function handleEdit(e) {
      $.button.title = 'Done';
      $.button.style = Ti.UI.iOS.SystemButtonStyle.DONE;
      isEditable = true;
    }

    function handleCommit(e) {
      $.button.title = 'Edit';
      $.button.style = Ti.UI.iOS.SystemButtonStyle.PLAIN;
      isEditable = false;
    }

    function resetBadge(e) {
      e.item.badge = 0;
    }

<ApiDocs/>
