# Titanium.UI.RefreshControl

<TypeHeader/>

## Overview

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

    var win = Ti.UI.createWindow({
        fullscreen:true
    });
    var counter = 0;
    function genData()
    {
        var data = [];
        var i=1;
        for (i=1;i<=3;i++) {
            data.push({properties:{title:'ROW '+(counter+i)}})
        }
        counter += 3;
        return data;
    }
    var section = Ti.UI.createListSection();
    section.setItems(genData());
    var control = Ti.UI.createRefreshControl({
        tintColor:'red'
    })
    var listView = Ti.UI.createListView({
        sections:[section],
        refreshControl:control
    });
    control.addEventListener('refreshstart',function(e){
        Ti.API.info('refreshstart');
        setTimeout(function(){
            Ti.API.debug('Timeout');
            section.appendItems(genData());
            control.endRefreshing();
        }, 2000);
    })
    win.add(listView);
    win.open();

<ApiDocs/>
