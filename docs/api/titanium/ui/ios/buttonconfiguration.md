---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/ButtonConfiguration.yml
---
# Titanium.UI.iOS.ButtonConfiguration

<TypeHeader/>

## Overview

The ButtonConfiguration API provides a modern way to configure buttons on iOS with support for 
various styles, titles, subtitles, images, and padding. This API wraps the native `UIButtonConfiguration`
introduced in iOS 15.0 and represents a modern alternative to the existing Button API while retaining
backwards compatibility. In the future, this API may be merged into the root parameters of a button instead.

Use the <Titanium.UI.iOS.createButtonConfiguration> method to create a button configuration.

Button configurations support several predefined styles:
- **plain**: A plain button style with minimal background
- **tinted**: A tinted button style with a subtle background
- **filled**: A filled button style with a solid background
- **gray**: A gray button style
- **borderless**: A borderless button style
- **bordered**: A bordered button style with an outline
- **borderedTinted**: A bordered button style with a tinted outline
- **borderedProminent**: A bordered button style with a prominent appearance

Additional styles available on iOS 26.0+:
- **glass**: A glass-like appearance
- **prominentGlass**: A prominent glass-like appearance
- **clearGlass**: A clear glass-like appearance
- **prominentClearGlass**: A prominent clear glass-like appearance

## Examples

### Basic Button Configuration

``` js
const button = Ti.UI.createButton({
    configuration: Ti.UI.iOS.createButtonConfiguration({
        style: 'filled',
        title: 'Sign In',
        subtitle: 'with your account',
        backgroundColor: '#007AFF',
        color: 'white'
    })
});
```

### Button with Image and Padding

``` js
const button = Ti.UI.createButton({
    configuration: Ti.UI.iOS.createButtonConfiguration({
        style: 'borderedTinted',
        title: 'Upload',
        image: 'upload-icon.png',
        imagePlacement: 'leading',
        imagePadding: 8,
        padding: {
            top: 12,
            left: 20,
            bottom: 12,
            right: 20
        }
    })
});
```

### Prominent Button Style

``` js
const button = Ti.UI.createButton({
    configuration: Ti.UI.iOS.createButtonConfiguration({
        style: 'borderedProminent',
        title: 'Get Started',
        backgroundColor: '#34C759'
    })
});
```

### Typography and Alignment

``` js
const button = Ti.UI.createButton({
    configuration: Ti.UI.iOS.createButtonConfiguration({
        style: 'filled',
        title: 'Continue',
        font: { fontSize: 18, fontWeight: 'semibold' },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    })
});
```

### Highlighted Background Color

``` js
const button = Ti.UI.createButton({
    configuration: Ti.UI.iOS.createButtonConfiguration({
        style: 'filled',
        title: 'Tap Me',
        backgroundColor: '#007AFF',
        backgroundSelectedColor: '#005BBB' // shown while pressed
    })
});
```

<ApiDocs/>
