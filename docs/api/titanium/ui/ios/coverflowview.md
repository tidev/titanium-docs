# Titanium.UI.iOS.CoverFlowView

<ProxySummary/>

## Overview

The cover flow view is created by the <Titanium.UI.iOS.createCoverFlowView> method or 
**`<CoverFlowView>`** element in an Alloy application.

## Examples

### Simple 3 image cover flow example

Create a simple cover flow view.

    var view = Titanium.UI.iOS.createCoverFlowView({
    	backgroundColor:'#000',
    	images:['a.png','b.png','c.png']
    });
    window.add(view);

### Alloy XML Markup

Previous example as an Alloy view.

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

<ApiDocs/>
