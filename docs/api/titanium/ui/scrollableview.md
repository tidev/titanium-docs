# Titanium.UI.ScrollableView

<TypeHeader/>

## Overview

Use the <Titanium.UI.createScrollableView> method or **`<ScrollableView>`** Alloy element to create
a scrollable view.

The `ScrollableView` supports an on-screen paging control to indicate whether a previous or next
page exists. When the paging control is enabled on iOS, by default it appears as
small dots on the bottom of the screen, whereas Android displays arrows on the left and
right-hand sides.

Use the `cacheSize` property to cache views inside the scrollable view. This can be required when
using complex view structures in the scrollable view (e.g. map views) and the app might crash if no
proper cache size is specified. See the <Titanium.UI.ScrollableView.cacheSize> documentation for more
infos regarding view caching.

Only the `scroll` event exists for the `ScrollableView` on Android. To support others, child
views may be added to pages, and event listeners added to these views instead of the pages
themselves.

In a previous Titanium version for iOS, the `maxZoomScale` and `minZoomScale` properties were
removed for performance and parity reasons. As they still remain in <Titanium.UI.ScrollView>,
the equivalent functionality may be obtained by adding a `ScrollView` to `ScrollableView`. See
the "Simple Scrollable View with 2 Zoomable Images" example for a demonstration.

## Examples

### Simple Scrollable View with 3 Views

Create three views and assign them as pages to a scrollable view.

``` js
var win = Ti.UI.createWindow();

var view1 = Ti.UI.createView({ backgroundColor:'#123' });
var view2 = Ti.UI.createView({ backgroundColor:'#246' });
var view3 = Ti.UI.createView({ backgroundColor:'#48b' });

var scrollableView = Ti.UI.createScrollableView({
  views:[view1,view2,view3],
  showPagingControl:true
});

win.add(scrollableView);
win.open();
```

### Simple Scrollable View with 2 Zoomable Images

Create two scroll views, each containing an image view, and assign them as pages to a
scrollable view.

``` js
var img1 = Ti.UI.createImageView({
    image:'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/' +
    'Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/' +
    '402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
});
var img1Wrapper = Ti.UI.createScrollView({
    maxZoomScale:4.0,
});
img1Wrapper.add(img1);

var img2 = Ti.UI.createImageView({
    image:'http://www.nasa.gov/images/content/' +
    '616903main_rover_comparison1600_1600-1200.jpg'
});
var img2Wrapper = Ti.UI.createScrollView({
    maxZoomScale:4.0,
});
img2Wrapper.add(img2);
var photosView = Ti.UI.createScrollableView({
    showPagingControl:true,
    views:[img1Wrapper, img2Wrapper]
});
win.add(photosView);
```

### Scrollable View with multiple visible views

Create three views and assign them as pages to a scrollable view. Each page is narrower than
a scrollable view, so multiple views are visible at the same time.

``` js
var win = Ti.UI.createWindow();

var view1 = Ti.UI.createView({ backgroundColor:'#123' });
var view2 = Ti.UI.createView({ backgroundColor:'#246' });
var view3 = Ti.UI.createView({ backgroundColor:'#48b' });

// Common params
var params = {
  views:[view1,view2,view3],
  clipViews:false,
  showPagingControl:false,
  top: 0
};

if (Ti.Platform.name === 'android') {
  // Android specific params
  params.padding = {
    left:40,
    right:40
  };
} else {
  // iOS specific params
  params.width = '90%';
}

win.add(scrollableView);
win.open();
```

### Alloy XML Markup

First example as an Alloy view.

``` xml
<Alloy>
    <Window id="win">
        <ScrollableView id="scrollableView" showPagingControl="true">
            <View id="view1" backgroundColor="#123">
              <Label>View 1</Label>
            </View>
            <View id="view2" backgroundColor="#246">
            <Label>View 2</Label>
            </View>
            <View id="view3" backgroundColor="#48b">
            <Label>View 3</Label>
            </View>
        </ScrollableView>
    </Window>
</Alloy>
```

### Scrollable View with indicator image (iOS only)

Create three views and assign them as pages to a scrollable view. Assign preferred indicator image.
After window opens, update second page indicator image.

``` js
var win = Ti.UI.createWindow({ extendSafeArea: false });

var view1 = Ti.UI.createView({ backgroundColor:'#123' });
var view2 = Ti.UI.createView({ backgroundColor:'#246' });
var view3 = Ti.UI.createView({ backgroundColor:'#48b' });
var backwardImage = Ti.UI.iOS.systemImage('backward');
var scrollableView = Ti.UI.createScrollableView({
  views:[view1,view2,view3],
  showPagingControl:true,
  preferredIndicatorImage: backwardImage
});

win.add(scrollableView);
win.addEventListener('open', function () {
  var forwardImage = Ti.UI.iOS.systemImage('forward');
  scrollableView.setIndicatorImageForPage(forwardImage, 1);
});

win.open();
```

<ApiDocs/>
