---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/CoverFlowView.yml
---
# Titanium.UI.iOS.CoverFlowView

<TypeHeader/>

## Overview

The cover flow view is created by the <Titanium.UI.iOS.createCoverFlowView> method or 
**`<CoverFlowView>`** element in an Alloy application.

## Examples

### Simple 3 image cover flow example

Create a simple cover flow view.

``` js
var view = Titanium.UI.iOS.createCoverFlowView({
  backgroundColor:'#000',
  images:['a.png','b.png','c.png']
});
window.add(view);
```

### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <Window id="window">
        <CoverFlowView id="view" platform="ios" backgroundColor="#000">

            <!-- The Images tag sets the CoverFlowView.images property. -->
            <Images>

                <!-- Assign the image by node text or the image attribute. -->
                <!-- Can also specify the width and height attributes. -->

                <Image>a.png</Image>
                <Image>b.png</Image>
                <Image>c.png</Image>

            </Images>

            <!-- Place additional views for the CoverFlowView here. -->

        </CoverFlowView>
    </Window>
</Alloy>
```

<ApiDocs/>
