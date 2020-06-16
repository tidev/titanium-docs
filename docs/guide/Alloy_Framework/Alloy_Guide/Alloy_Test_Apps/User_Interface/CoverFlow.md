---
title: CoverFlow
weight: '40'
---

# CoverFlow

Demonstrates basic use of the CoverFlowView control, an iOS-only control that presents a list of scrollable images in a style consistent with that used for iPod, iTunes, and file browsing.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/coverflow](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/coverflow). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

![screenshot](./screenshot.png)

To define the images displayed by a [CoverFlowView](#!/api/Titanium.UI.iOS.CoverFlowView), insert an `<Images>` element to which you add one or more `<Image/>` elements.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <CoverFlowView id="coverflow" platform="ios">
            <Images>
                <!-- Assign image by node text or "image" attribute -->
                <Image>appc1.png</Image>
                <Image image="appc2.png"/>
                <!-- you can also change the width and height -->
                <Image width="100" height="100" image="appc3.png"/>
                <Image width="50" height="50">appc4.png</Image>
            </Images>
            <!-- additional views for the CoverFlowView -->
            <Label id="apilabel">Ti.UI.iOS.CoverFlowView</Label>
        </CoverFlowView>
        <Label platform="!ios">Ti.UI.iOS.CoverFlowView only supported on iOS</Label>
    </Window>
</Alloy>
```

## See Also

* [Titanium.UI.iOS.CoverFlowView](#!/api/Titanium.UI.iOS.CoverFlowView)
