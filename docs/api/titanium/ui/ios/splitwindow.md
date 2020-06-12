# Titanium.UI.iOS.SplitWindow

<TypeHeader/>

## Overview

The [masterView](Titanium.UI.iOS.SplitWindow.masterView) and [detailView](Titanium.UI.iOS.SplitWindow.detailView) 
properties are required before the SplitWindow is opened.

You use this class to implement a master-detail interface, in which the left-side view presents
a list of items and the right-side presents details of the selected item. The `SplitWindow` is supported
for both iPhone and iPad idioms. Use the <Titanium.UI.iOS.createSplitWindow> method to create a `SplitWindow` object

By default, `SplitWindow` shows both master and detail views in landscape orientation. When the
device switches into portrait orientation, the master is only shown if [showMasterInPortrait](Titanium.UI.iOS.SplitWindow.showMasterInPortrait)
is set to true.

The property [masterIsOverlayed](Titanium.UI.iOS.SplitWindow.masterIsOverlayed) controls how the master is
displayed in portrait mode. When `masterIsOverlayed` is set to true, the `detailView` occupies the full screen
and and `masterView` is displayed overlayed on top to the left of the screen. When `masterIsOverlayed` is set
to false, the available screen width is split between the `masterView` and `detailView`.

The width of the `masterView` can be controlled by the [portraitSplit](Titanium.UI.iOS.SplitWindow.portraitSplit) and
[landscapeSplit](Titanium.UI.iOS.SplitWindow.landscapeSplit) properties. These values are capped in the range 0.25 to 0.5.
Any values outside this range are ignored.

To add a navigation bar to either the master or detail view of the split window,
use a <Titanium.UI.NavigationWindow>.

The SplitWindow is a top-level window and cannot be contained within another window or view.

## Examples

### Split Window

This is an example of a Split Window.

``` js
var detail = Ti.UI.createWindow({ backgroundColor: 'white' });
var label1 = Ti.UI.createLabel({ text: 'Detail View' });
detail.add(label1);
var detailNav = Ti.UI.createNavigationWindow({ window: detail });

var master = Ti.UI.createWindow({ backgroundColor: 'gray' });
var label2 = Ti.UI.createLabel({ text: 'Master View' });
master.add(label2);
var masterNav = Ti.UI.createNavigationWindow({ window: master });

var splitWin = Ti.UI.iOS.createSplitWindow({
    detailView: detailNav,
    masterView: masterNav
});
splitWin.open();
```


### Alloy XML Markup

Below is an Alloy version of the previous example. The first window is the `masterView` and the second window is the `detailView`. You can also use the `<Require>` element to add a `<Window>` or `<NavigationWindow>`.

**views/index.xml:**
``` xml
<Alloy>
  <SplitWindow backgroundColor="white" showMasterInPortrait="true">

    <!-- First window is the masterView -->
    <NavigationWindow>
      <Window title="Master View">
        <ListView>
          <ListSection headerTitle="Some items">
            <ListItem title="Item 1" />
            <ListItem title="Item 2" />
            <ListItem title="Item 3" />
          </ListSection>
        </ListView>
      </Window>
    </NavigationWindow>

    <!-- Second window is the detailView -->
    <NavigationWindow>
      <Window title="Detail View">
        <Label>I am the detail view.</Label>
      </Window>
    </NavigationWindow>
  </SplitWindow>
</Alloy>
```

**controllers/index.js:**
``` js
$.index.open();
```


<ApiDocs/>
