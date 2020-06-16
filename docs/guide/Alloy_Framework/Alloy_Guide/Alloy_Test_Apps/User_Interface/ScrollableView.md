---
title: ScrollableView
weight: '150'
---

# ScrollableView

Demonstrates basic use of ScrollableView control to present a horizontally-scrolling set of child views, called _pages._

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/scrollableview](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/scrollableview). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

A [ScrollableView](#!/api/Titanium.UI.ScrollableView) encapsulates a horizontally-scrolling set of child views, known as pages, navigable using its built-in horizontal swipe gestures.

![scrollable](./scrollable.gif)

The main `index.xml` view declares a `<ScrollableView/>` named `scroller` that contains three `<View/>` elements. Clicking the label on the first view creates a new View object and appends it to the ScrollableView object's `views` array property.

**app/views/index.xml**

```xml
<Alloy>
  <Window>
    <ScrollableView id="scroller">
      <View backgroundColor="#a00">
        <Label onClick="addView">View 1</Label>
      </View>
      <View backgroundColor="#0a0">
        <Label>View 2</Label>
      </View>
      <View backgroundColor="#00a">
        <Label>View 3</Label>
      </View>
    </ScrollableView>
  </Window>
</Alloy>
```

**app/controllers/index.js**

```javascript
function addView() {
    $.scroller.views = $.scroller.views.concat(Ti.UI.createView({
        backgroundColor: '#ff0'
    }));
}
$.index.open();
```

## See also

* [Titanium.UI.ScrollableView](#!/api/Titanium.UI.ScrollableView) API reference
