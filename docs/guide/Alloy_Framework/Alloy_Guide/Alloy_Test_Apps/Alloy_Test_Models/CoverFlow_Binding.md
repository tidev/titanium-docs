---
title: CoverFlow Binding
weight: '20'
---

# CoverFlow Binding

Demonstrates data binding with a CoverFlowView control, which presents images in carousel-like view.

::: tip App Folder Location
alloy/test/apps/**models/binding\_coverflow**
:::
![image](./image.png)

A [CoverFlowView](#!/api/Titanium.UI.iOS.CoverFlowView) element's `images` property is an array of images to display in the carousel. In Alloy, this property is represented by an `<Images/>` element, which contains a single <Image/> element. The <Images/> element's `dataCollection` attribute is set to "images", the name of the Alloy collection that contains the actual images to display. When the "images" collection is updated, the images displayed by the CoverFlowView update accordingly.

**app/views/index.xml**

```xml
<CoverFlowView id="coverflow" platform="ios">
    <!-- data-bound collection of images -->
    <Images dataCollection="images">
        <Image image="{url}" height="{height}" width="{width}"/>
    </Images>
    <!-- additional views for the CoverFlowView -->
    <Label id="apilabel">Ti.UI.iOS.CoverFlowView</Label>
</CoverFlowView>
```

The alloy.js file create the `images` collection. Each member of the collection specifies the URL of the image to display, as well as optional `width` and `height` properties. These properties are referenced by the <Image/> element in the index.xml view.

**app/alloy.js**

```javascript
var Image = Backbone.Model.extend();
var Images = Backbone.Collection.extend({
    model: Image
});
Alloy.Collections.images = new Images();
Alloy.Collections.images.reset([
    { url: '/appc1.png' },
    { url: '/appc2.png' },
    { url: '/appc3.png', width: 100, height: 100 },
    { url: '/appc4.png', width: 50, height: 50 }
]);
```

## See Also

* [Titanium.UI.iOS.CoverFlowView](#!/api/Titanium.UI.iOS.CoverFlowView) API reference
