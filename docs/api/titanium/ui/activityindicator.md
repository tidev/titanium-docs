# Titanium.UI.ActivityIndicator

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/activityindicator/activityindicator_android.png" height="75" /></td>
    <td><img src="images/activityindicator/activityindicator_ios.png" height="75" /></td>
    <td><img src="images/activityindicator/activityindicator_wp.png" height="75" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

An activity indicator can be used to show the progress of an operation in the UI to let the
user know that some action is taking place. An activity indicator consists of a spinning
animation and an optional text message, and is used to indicate an ongoing activity of
indeterminate length. To show progress, use <Titanium.UI.ProgressBar> instead.

Use the <Titanium.UI.createActivityIndicator> method or **`<ActivityIndicator>`** Alloy element to
create an `ActivityIndicator` object.

`ActivityIndicator` is a view and, like any view, must be added to a window or other top-level
view before it can be shown. Unlike most views, `ActivityIndicator` is hidden by
default and must be shown explicitly by calling its <Titanium.UI.ActivityIndicator.show> method.

## Examples

### Simple Activity Indicator

Open a yellow window immediately after a blue window. Show an activity indicator while
some code executes and hide it on completion. Then close the yellow window.

    Ti.UI.backgroundColor = 'white';

    var win1 = Ti.UI.createWindow({
      backgroundColor: 'blue'
    });

    var win2 = Ti.UI.createWindow({
      backgroundColor: 'yellow'
    });

    var activityIndicator = Ti.UI.createActivityIndicator({
      color: 'green',
      message: 'Loading ...',
      style: Ti.UI.ActivityIndicatorStyle.DARK,
      top: 10,
      left: 10,
      height: Ti.UI.SIZE,
      width: Ti.UI.SIZE
    });

    // The activity indicator must be added to a window or view for it to appear
    win2.add(activityIndicator);

    // eventListeners must always be loaded before the event is likely to fire
    // hence, the open() method must be positioned before the window is opened
    win2.addEventListener('open', function (e) {
      activityIndicator.show();
      // do some work that takes 6 seconds
      // ie. replace the following setTimeout block with your code
      setTimeout(function() {
        e.source.close();
        activityIndicator.hide();
      }, 6000);
    });

    win1.open();
    win2.open();

### Alloy XML Markup

Previous example as two Alloy views.

win1.xml:

    <Alloy>
        <Window onOpen="openWin2" backgroundColor="blue" />
    </Alloy>

win1.js:

    function openWin2 () {
        var win2 = Alloy.createController('win2').getView();
        win2.open();
    }

win2.xml:

    <Alloy>
        <Window onOpen="showIndicator" backgroundColor="yellow">
            <!-- Define the styling properties in the TSS file -->
            <ActivityIndicator id="activityIndicator" message="Loading..."/>
        </Window>
    </Alloy>

win2.js:

    function showIndicator(e) {
        $.activityIndicator.show();
        // do some work that takes 6 seconds
        // ie. replace the following setTimeout block with your code
        setTimeout(function() {
            e.source.close();
            $.activityIndicator.hide();
        }, 6000);
    }

<ApiDocs/>
