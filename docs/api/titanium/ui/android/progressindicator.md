---
breadcrumbLabel: ProgressIndicator
sidebar: auto
---

# Titanium.UI.Android.ProgressIndicator

<ProxySummary/>

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

<ApiDocs/>
