---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/TabGroup.yml
---
# Titanium.UI.TabGroup

<TypeHeader/>

## Overview

A tab group can contain one or more [Tab](Titanium.UI.Tab) objects, each of which has an
associated tab control that is used to bring it into focus.

Use the <Titanium.UI.createTabGroup> method or **`<TabGroup>`** Alloy element to create a tab group
that, in turn, contains one or more `<Tab>` elements.

You can add tabs to the group using [addTab](Titanium.UI.TabGroup.addTab), and programmatically
switch to a specific tab using [setActiveTab](Titanium.UI.TabGroup.setActiveTab).

### Platform Implementation Notes

When using a tab group, note the following differences between platforms:

* The tab group controls are positioned at the top of the display on Android and at the bottom
on iOS.

* On Android, only one tab group may exist at one time. A tab group may be closed to allow a new
one to be opened later, but the root of the application must be a heavyweight window to prevent
it exiting. Tabs cannot be removed from the tab group once added, and tabs cannot be reordered.

* On iOS, more than one tab group may exist, and may be opened and closed as required.
Each tab can contain a stack of windows, and the user can switch between them by tapping the
tab's associated control. Tabs can be removed, and the user may (optionally) be allowed to
reorder tabs.

* On iOS, it is also possible to add tabs by updating the
[tabs](Titanium.UI.TabGroup.tabs) property, and to switch active tabs by setting the
[active](Titanium.UI.Tab.active) property on one of the tabs to `true`. Since these mechanisms
are platform-specific, it is recommended that you use `addTab` and `setActiveTab` instead.

* If you use the iOS-specific mechanisms, it is possible to add multiple active tabs
to a tab group. In this case, the result of which tab is initially selected is undefined.

### Further Reading

If using tab groups on iOS, see
[iOS UI Element Usage Guidelines](https://developer.apple.com/ios/human-interface-guidelines/bars/tab-bars/).

## Examples

### Alloy XML Markup

Default Titanium project as an Alloy view.

``` xml
<Alloy>
    <TabGroup backgroundColor="white" >
        <Tab id="tab1" title="Tab 1" icon="KS_nav_views.png">
            <Window id="win1" title="Tab 1">
                <Label id="label1" color="#999">I am Window 1</Label>
            </Window>
        </Tab>
        <Tab id="tab2" title="Tab 2" icon="KS_nav_views.png">
            <Window id="win2" title="Tab 2">
                <Label id="label2" color="#999">I am Window 2</Label>
            </Window>
        </Tab>
        <!-- Use the Require tag to include external Ti.UI.Tab views -->
    </TabGroup>
</Alloy>
```

### Classic Titanium Example

Simple two-tabbed app.

``` js
var win1 = Ti.UI.createWindow({
    backgroundColor: 'blue',
    title: 'Blue'
});
win1.add(Ti.UI.createLabel({text: 'I am a blue window.'}));

var win2 = Ti.UI.createWindow({
    backgroundColor: 'red',
    title: 'Red'
});
win2.add(Ti.UI.createLabel({text: 'I am a red window.'}));

var tab1 = Ti.UI.createTab({
    window: win1,
    title: 'Blue'
}),
tab2 = Ti.UI.createTab({
    window: win2,
    title: 'Red'
}),
tabGroup = Ti.UI.createTabGroup({
    tabs: [tab1, tab2]
});
tabGroup.open();
```

<ApiDocs/>
