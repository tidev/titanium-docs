---
title: Complex Styling
weight: '30'
---

# Complex Styling

Demonstrates how Alloy combines several TSS styles based on their priority.

::: tip App folder location
_alloy_/test/apps/advanced/complex\_styling
:::

[Styles](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/) can be defined on Alloy elements in variety of places: the global style sheet (app/app.tss), a view-controller's styles sheet (app/styles/index.tss, for example), or as attributes on an XML element, to name a few. In addition, styles can be applied conditionally based on the target platform or device form factor. Alloy defines a priority for each type of style, and styles are combined and mixed according to these priorities, as the sample app demonstrates. See [Style Priorities](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/#StylePriorities) for details.

![styles](./styles.png) t

The main index.xml view declares a several different UI elements some with defined IDs, some with specified `class` attributes, some that are specific to certain platforms or device form factors. In addional, some views are required from external XML files that define their own TSS styles.

**app/views/index.xml**

```xml
<Alloy>
    <Window class="container">
        <ScrollView class="scroll" id="sv">
            <Label class="lbl" id="lbl1" platform="android">1. Platform attribute in XML sets to green on Android from platform specific TSS ID style, font size</Label>
            <Label class="lbl" id="lbl1" platform="ios">1. Platform attribute in XML sets to blue from generic TSS ID style, font size from index.tss</Label>
            <Label class="lbl" id="lbl1" platform="mobileweb">1. Platform attribute in XML sets to blue from generic TSS ID style, font size from index.tss</Label>
            <Label class="lbl" id="lbl2"></Label>
            <Require src="label"/>
            <Label class="lbl" id="lbl4" color="blue">4. Text alignment and font size set in index.tss, XML color attribute overrides TSS</Label>
            <Require src="anotherlabel"/>
            <Label class="lbl" id="lbl6">6. Bold, large, custom font, font properties mixed from various stylesheets</Label>
            <Label class="lbl" id="lbl7">7. Theme controls color: iOS=blue, Android=green, MobileWeb=red, generic=black, font size from main index.tss</Label>
            <Require src="requiredlabel"/>
            <Label class="lbl" id="lbl9" formFactor="handheld">9. Device query in XML and TSS to set text and color (green on handheld)</Label>
            <Label class="lbl" id="lbl9" formFactor="tablet">9. Device query in XML and TSS to set text and color (purple on tablet)</Label>
            <Label class="lbl">Window background yellow by default, overridden to white by theme's app.tss</Label>
            <Label class="lbl">ScrollView's top accounts for iOS7 through Alloy.Globals value and index.tss property</Label>
        </ScrollView>
    </Window>
</Alloy>
```

The app.tss file defines global styles; each view-controller defines its own TSS file (anotherLabel.tss or index.tss, for example); a number of themes define their own styles and controller styles; finally, the XML views define styles as attributes on various XML elements.

**App Folder Structure**

```
├── app
    ├──styles
    │  ├── anotherlabel.tss
    │  ├── app.tss
    │  ├── index.tss
    │  ├── ios
    │  │   └── anotherlabel.tss
    │  └── label.tss
    ├──themes
    │  ├── android
    │  │   └── styles
    │  │       ├── app.tss
    │  │       └── requiredlabel.tss
    │  ├── default
    │  │   └── styles
    │  │       ├── app.tss
    │  │       └── requiredlabel.tss
    │  ├── ios
    │  │   └── styles
    │  │       ├── app.tss
    │  │       └── requiredlabel.tss
    │  └── mobileweb
    │      └── styles
    │          ├── app.tss
    │          └── requiredlabel.tss
    └──views
       ├── anotherlabel.xml
       ├── index.xml
       ├── label.xml
       ├── mobileweb
       │   └── label.xml
       └── requiredlabel.xml
```

As an example, the app.tss file defines the following global styles:

**app/styles/app.tss**

```javascript
"Window": {
    backgroundColor: 'yellow'
}
"#lbl6": {
    font: {
        fontWeight: 'bold',
        fontSize: '32dp'
    }
}
"Label": {
    left: 0
}
```

However, styles defined by the index.tss style file have a higher precedence than global styles, and so override them.

```
'Window[platform=android]': {
    backgroundColor: '#fff',
    exitOnClose: true
}
"#sv": {
    layout: 'vertical',
    top: Alloy.Globals.scrollTop,
    backgroundColor: '#fff'
}
"Label": {
    color: 'black',
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE
},
".lbl": {
    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
    font: {
        fontSize: '12dp'
    }
}
".lbl[platform=android]": {
    font: {
        fontSize: '16dp'
    }
}
"#lbl1": {
    color: 'blue'
}
"#lbl1[platform=android]": {
    color: 'green'
}
"#lbl2": {
    text: "2. Text set in TSS, ID selector's left property overrides app.tss",
    left: '20dp'
}
"#lbl4": {
    color: 'orange', /* overridden in XML */
    textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
}
"#lbl5": {
    color: 'purple',
    text: 'This text is purple'
}
"#lbl6": {
    font: {
        fontFamily: 'Zapfino'
    }
}
"#lbl6[platform=android]": {
    font: {
        fontFamily: 'FirecatMedium'
    }
}
"#lbl9[formFactor=handheld]": {
    color: 'green'
}
"#lbl9[formFactor=tablet]": {
    color: 'purple'
}
```

## See Also

* [Style priorities](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/#style-priorities)

* [Custom TSS Queries](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Advanced/Custom_TSS_Queries/) demo app
