---
title: Platform folders
weight: '140'
---

# Platform folders

Demonstrates how to structure an Alloy project with folders that contains platform-specific views.

::: tip 💡 App folder location
_alloy_/test/apps/**advanced/platform\_folders**
:::

You can define platform-specific resources in an Alloy project, including controllers, views and styles. Simply create a folder named **android** or **ios** inside the `app/controllers`, `app/views`, or `app/styles` folders, and add your platform specific files. The sample application uses this feature to display a scrollable list of images using [CoverFlowView](#!/api/Titanium.UI.iOS.CoverFlowView) component for iOS builds, and a [ScrollView](#!/api/Titanium.UI.ScrollView) for other platform builds.

The project structure looks as follows:

**App views folder**

```
app/views/
├──index.xml
└──ios
   └──index.xml
```

The `views/index.xml` file includes a ScrollView element:

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <ScrollView id="scroll" layout="vertical">
            <ImageView image="/appc1.png"/>
            <ImageView image="/appc2.png"/>
            <ImageView image="/appc3.png"/>
            <ImageView image="/appc4.png"/>
        </ScrollView>
    </Window>
</Alloy>
```

And the `views/ios/index.xml` file includes the CoverFlowView component.

**app/views/ios/index.xml**

```xml
<Alloy>
    <Window>
        <CoverFlowView id="coverflow"/>
        <Label id="apilabel">Ti.UI.iOS.CoverFlowView</Label>
    </Window>
</Alloy>
```

## See also

* [Alloy Concepts: Platform-Specific Resources](/guide/Alloy_Framework/Alloy_Guide/Alloy_Concepts/#platform-specific-resources)
