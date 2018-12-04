# Titanium.UI.iOS.BlurView

<ProxySummary/>

## Examples

### Basic Blur View

The following example shows how to create a simple blur view:

    var win = Ti.UI.createWindow({
        backgroundColor: "#fff"
    });
    
    // Reference image (or view)
    var img = Ti.UI.createImageView({
        image: "/default_app_logo.png",
        top: 100,
        width: 300,
        height: 300
    });
    
    // Blur view
    var blur = Ti.UI.iOS.createBlurView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    
    img.add(blur);
    
    // Effect controls
    var tabs = Ti.UI.iOS.createTabbedBar({
        labels: ["Extra light", "Light", "Dark"],
        bottom: 100
    });

    // Available blur effects
    var effects = [
        Ti.UI.iOS.BLUR_EFFECT_STYLE_EXTRA_LIGHT,
        Ti.UI.iOS.BLUR_EFFECT_STYLE_LIGHT,
        Ti.UI.iOS.BLUR_EFFECT_STYLE_DARK,
    ];

    tabs.addEventListener("click", function(e) {
        blur.setEffect(effects[e.index]);
    });

    win.add(tabs);
    win.add(img);
    win.open();

<ApiDocs/>
