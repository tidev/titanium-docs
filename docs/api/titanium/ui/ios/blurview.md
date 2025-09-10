---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/BlurView.yml
---
# Titanium.UI.iOS.BlurView

<TypeHeader/>

## Examples

### Basic Blur View

The following example shows how to create a simple blur view:

``` js
const win = Ti.UI.createWindow({
    backgroundColor: "#fff"
});

// Reference image (or view)
const img = Ti.UI.createImageView({
    image: "/default_app_logo.png",
    top: 100,
    width: 300,
    height: 300
});

// Blur view
const blur = Ti.UI.iOS.createBlurView({
    width: Ti.UI.FILL,
    height: Ti.UI.FILL
});

img.add(blur);

// Effect controls
const tabs = Ti.UI.iOS.createTabbedBar({
    labels: ["Extra light", "Light", "Dark"],
    bottom: 100
});

// Available blur effects
const effects = [
    Ti.UI.iOS.BLUR_EFFECT_STYLE_EXTRA_LIGHT,
    Ti.UI.iOS.BLUR_EFFECT_STYLE_LIGHT,
    Ti.UI.iOS.BLUR_EFFECT_STYLE_DARK,
];

tabs.addEventListener("click", function(e) {
    blur.effect = effects[e.index];
});

win.add(tabs);
win.add(img);
win.open();
```

### Glass Effect View (iOS 26+)

The following example shows how to create a blur view with the new glass effect:

``` js
const win = Ti.UI.createWindow({
    backgroundColor: "#fff"
});

const backgroundView = Ti.UI.createImageView({
    image: 'https://s1.directupload.eu/images/250817/ufgix5hy.jpg',
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FILL
});

const effectView = Ti.UI.iOS.createBlurView({
    width: 250,
    height: 250,
    glassEffect: {
        style: Ti.UI.iOS.GLASS_EFFECT_STYLE_CLEAR,
        interactive: true
    }
});

backgroundView.add(effectView);

const toggleButton = Ti.UI.createButton({
    title: "Toggle Glass Effect",
    bottom: 50
});

let isEnabled = true;
toggleButton.addEventListener("click", () => {
    isEnabled = !isEnabled;
    if (isEnabled) {
        backgroundView.add(effectView)
    } else {
        backgroundView.remove(effectView)
    }
});

win.add(backgroundView);
win.add(toggleButton);
win.open();
```

<ApiDocs/>
