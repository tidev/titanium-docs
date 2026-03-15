---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ScrollView.yml
---
# Titanium.UI.ScrollView

<TypeHeader/>

## Overview

Use the <Titanium.UI.createScrollView> method or **`<ScrollView>`** Alloy element to create a scroll view.

Views added to the scroll view will be scrolled based on the size of the scrollable region of
content. If a scrollable region fits within the size of its scroll view, the view will not
scroll.

### Android Platform Notes

On Android, a scroll view can only scroll in one direction, either vertically or horizontally,
and not both at the same time. The <Titanium.UI.ScrollView.scrollType> property sets the scroll
direction explicitly. If the `scrollType` property is not assigned a value, the scroll view
attempts to determine the scroll direction based on some the following rules:

* If <Titanium.UI.ScrollView.contentWidth> and <Titanium.UI.ScrollView.width> are both
set and are equal to each other, or if they are both set
*and* `showVerticalScrollIndicator` is set to `true`, then the scroll direction is set to
"vertical".

* If <Titanium.UI.ScrollView.contentHeight> and <Titanium.UI.ScrollView.height> are
both set and are equal, or if they are both set and <Titanium.UI.ScrollView.showHorizontalScrollIndicator> is set to
`true`, then the scroll direction is set to "horizontal".

Pinching a `ScrollableView` to zoom in and out of content is not supported on Android. On iOS, this action
is natively supported by the UIScrollView class, but on Android, the native ScrollView class does
not support this action.

## Examples

### Simple Scroll View

Create a scroll view with content.

``` js
var win = Ti.UI.createWindow({
  exitOnClose: true,
  fullscreen: false,
  title: 'ScrollView Demo'
});

var scrollView = Ti.UI.createScrollView({
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '80%',
  width: '80%'
});
var view = Ti.UI.createView({
  backgroundColor:'#336699',
  borderRadius: 10,
  top: 10,
  height: 2000,
  width: 1000
});
scrollView.add(view);
win.add(scrollView);
win.open();
```

### Scroll View as a Table View

Create a scroll view that contains a set of views in a layout to resemble a table view with
rows. This approach can mitigate the native Android issue described in the "TextFields in
Tables with SOFT_INPUT_ADJUST_PAN" section of <Titanium.UI.TableView>.

``` js
var win = Ti.UI.createWindow();

if (Ti.UI.Android){
  win.windowSoftInputMode = Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
}

function createRow(i) {
  var row = Ti.UI.createView({
    backgroundColor: 'white',
    borderColor: '#bbb',
    borderWidth: 1,
    width:'100%', height: 70,
    top: 0, left: 0
  });
  var inputTextField = Ti.UI.createTextField({
    hintText: 'Enter value ' + i,
    keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    top: 10, left: '10%',
    width: '80%', height: 60
  });
  row.add(inputTextField);
  return row;
}

var scrollView = Ti.UI.createScrollView({
  bottom:120,
  layout: 'vertical'
});

for(var i = 0; i <= 20; i++){
var row = createRow(i);
  scrollView.add(row);
}
win.add(scrollView);

var label = Ti.UI.createLabel({
  backgroundColor:'darkgray',
  text: 'Your advert here',
  textAlign: 'center',
  bottom:0,
  width: Titanium.UI.FILL,
  height:100
});
win.add(label);
win.open();
```

### Alloy XML Markup

Previous simple scroll view example as an Alloy view.

 ``` xml
 <Alloy>
     <Window id="win" backgroundColor="white" exitOnClose="true" fullscreen="false" title="ScrollView Demo">
         <ScrollView id="scrollView" showVerticalScrollIndicator="true" showHorizontalScrollIndicator="true" height="80%" width="80%">
             <View id="view" backgroundColor="#336699" borderRadius="10" top="10" height="2000" width="1000" />
         </ScrollView>
     </Window>
 </Alloy>
 ```

<ApiDocs/>
