---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/RefreshControl.yml
---
# Titanium.UI.RefreshControl

<TypeHeader/>

## Overview

| Android | iOS |
| ------- | --- |
| ![Android](./refreshcontrol_android.png) |  |

You use a `RefreshControl` with a <Titanium.UI.TableView>, <Titanium.UI.ListView> or <Titanium.UI.ScrollView> object.
It provides an alternate method to implement **pull to refresh** functionality provided by
<Titanium.UI.TableView.headerPullView> and <Titanium.UI.ListView.pullView> properties.

Use the <Titanium.UI.createRefreshControl> method to create a RefreshControl.

**Important iOS 10+ Note**: If you use the RefreshControl inside a <Titanium.UI.Window> that has the `largeTitleEnabled` property
set to `true`, you also need to set the `extendEdges` property to either `[Ti.UI.EXTEND_EDGE_TOP]` or `[Ti.UI.EXTEND_EDGE_ALL]`
in order to prevent a flickering of the refresh spinner. In Titanium SDK 8+, the `extendEdges` property will be set to `[Ti.UI.EXTEND_EDGE_ALL]`
by default to match the native behavior.

## Examples

### Basic Pull To Refresh

A basic sample showing the usage of refreshstart event with endRefreshing functionality.

``` js
const win = Ti.UI.createWindow();
let counter = 0;
function genData() {
    const data = [];
    for (let i = 1; i <= 3; i++) {
        data.push({ properties:{ title: `ROW ${counter + i}` } });
    }
    counter += 3;
    return data;
}
const section = Ti.UI.createListSection();
section.items = genData();
const control = Ti.UI.createRefreshControl({
    tintColor: 'red'
});
const listView = Ti.UI.createListView({
    sections: [section],
    refreshControl: control
});
control.addEventListener('refreshstart', () => {
    Ti.API.info('refreshstart');
    setTimeout(() => {
        Ti.API.debug('Timeout');
        section.appendItems(genData());
        control.endRefreshing();
    }, 2000);
});
win.add(listView);
win.open();
```

### Alloy example

TableView with a RefreshControl

``` xml
<Alloy>
    <Window>
        <TableView id="table">
          <RefreshControl id="refresh" onRefreshstart="refreshstart"/>
            <TableViewSection id="sectionFruit" headerTitle="Fruit">
                <TableViewRow title="Apple"/>
                <TableViewRow title="Bananas"/>
            </TableViewSection>
        </TableView>
    </Window>
</Alloy>
```

``` js
function refreshstart(e){
  $.refresh.endRefreshing();
}

$.index.open();
```

<ApiDocs/>
