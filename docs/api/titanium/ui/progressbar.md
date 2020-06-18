# Titanium.UI.ProgressBar

<TypeHeader/>

## Overview

| Android | iOS | Windows |
| --- | --- | --- |
| ![Android](./progressbar_android.png) | ![iOS](./progressbar_ios.png) | ![Windows](./progressbar_wp.png) |

A progress bar is used for displaying an ongoing activity with a defined progression.
For an activity without a defined progression, you can use <Titanium.UI.ActivityIndicator>.

Unlike most views, progress bars are hidden by default, so you must explicitly
show the progress bar.

Use the <Titanium.UI.createProgressBar> method or **`<ProgressBar>`** Alloy element to create a progress bar.

### Android Platform Notes

In SDK 3.0, use <Titanium.UI.Android.ProgressIndicator> to display a progress indicator
in a modal dialog or window title bar. Use `ProgressBar` to display the progress bar inside
another view.

### iOS Platform Notes

On iOS, to display the progress bar in the window title bar, assign the progress bar object
to the window's [titleControl](Titanium.UI.Window.titleControl) property.
Make sure the window is modal and not full screen, and that the navigation bar is not hidden.

## Examples

### Simple Progress Bar

In this example we create a progress bar with the min value of `0` and the max value
of `10` and the current value of `0`. Changing the `value` property causes the
displayed progress bar to update.

``` js
var pb = Ti.UI.createProgressBar({
    top: 25,
    width: 250,
    min: 0,
    max: 10,
    value: 0,
    color: 'blue',
    message: 'Downloading 0 of 10',
    font: {fontSize: 14, fontWeight: 'bold'},
    style: Ti.UI.iOS.ProgressBarStyle.PLAIN,
});
var win = Ti.UI.createWindow({backgroundColor: 'white'});
win.addEventListener('click', function(){
    if (pb.value < pb.max) {
        pb.message = 'Downloading '+ ++pb.value + ' of 10';
    }
});
win.add(pb);
win.open();
```

### Alloy XML Markup

Previous example as an Alloy view.

index.xml:
``` xml
<Alloy>
    <Window id="win" backgroundColor="white" onClick="incPB">
        <ProgressBar id="pb" />
    </Window>
</Alloy>
```

index.js:
``` js
function incPB() {
    if ($.pb.value < $.pb.max) {
        $.pb.message = 'Downloading '+ ++$.pb.value + ' of 10';
    }
}
$.win.open();
```

index.tss:
``` js
"#pb": {
    top: 25,
    width: 250,
    min: 0,
    max: 10,
    value: 0,
    color: 'blue',
    message: 'Downloading 0 of 10',
    font: {fontSize:14, fontWeight:'bold'},
    style: Titanium.UI.iOS.ProgressBarStyle.PLAIN
}
```

<ApiDocs/>
