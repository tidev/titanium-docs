# Titanium.UI.Android.ProgressIndicator

<TypeHeader/>

## Overview

A progress indicator can be used to show the progress of an operation in the UI to let the
user know that some action is taking place. It is used to indicate an ongoing activity of
determinate or indeterminate length.

Use the <Titanium.UI.Android.createProgressIndicator> method or **`<ProgressIndicator>`** Alloy
element to create a progress indicator.

A progress indicator can be either a progress dialog or a horizontal progress bar in the title 
of the window. The progress dialog is a modal dialog that blocks the UI. See also: 
<Titanium.UI.Android.PROGRESS_INDICATOR_DIALOG>,
<Titanium.UI.Android.PROGRESS_INDICATOR_STATUS_BAR>.

Calling <Titanium.UI.Android.ProgressIndicator.show> displays the indicator, 
and calling <Titanium.UI.Android.ProgressIndicator.hide> removes it.

To display a horizontal progress bar in the title of a heavyweight window,
wait for the window to open before creating the progress bar.
For example, in the sample code below, for it to work in the status bar,
create the progress bar inside the event listener, which waits for the open event.

## Examples

### Simple Progress Indicator

Click the button to show a progress indicator while
some code executes and hide it on completion.

``` js
Ti.UI.backgroundColor = 'white';

var win = Ti.UI.createWindow({
  backgroundColor: 'blue'
});

var button = Ti.UI.createButton({
  title: 'Show Progress Dialog'
});

var progressIndicator = Ti.UI.Android.createProgressIndicator({
  message: 'Loading...',
  location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
  type: Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT,
  cancelable: true,
  min: 0,
  max: 10
});

button.addEventListener('click', function (e) {
  progressIndicator.show();
  var value = 0;
  setInterval(function(){
    if (value > 10) {
        return;
    }
    progressIndicator.value = value;
    value ++;
  }, 200);
  // do some work that takes 3 seconds
  // ie. replace the following setTimeout block with your code
  setTimeout(function(){
    progressIndicator.hide();
  }, 3000);
});

win.add(button);
win.open();
```

### Alloy XML Markup

Previous example as an Alloy view-controller.

index.xml:
``` xml
<Alloy>
    <Window backgroundColor="blue">
        <Button id="button" onClick="showIndicator">Show Progress Dialog</Button>

        <ProgressIndicator ns="Ti.UI.Android" platform="android" id="progressIndicator"
          message="Loading..." min="0" max="10" cancelable="true"
          location="Ti.UI.Android.PROGRESS_INDICATOR_DIALOG"
          type="Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT" />
    </Window>
</Alloy>
```

index.js:
``` js
function showIndicator(e) {
    $.progressIndicator.show();
    var value = 0;
    setInterval(function(){
        if (value > 10) {
            return;
        }
        $.progressIndicator.value = value;
        value ++;
    }, 200);
    // do some work that takes 3 seconds
    // ie. replace the following setTimeout block with your code
    setTimeout(function(){
        $.progressIndicator.hide();
    }, 3000);
}
$.index.open();
```

<ApiDocs/>
