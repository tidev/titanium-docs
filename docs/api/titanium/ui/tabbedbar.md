# Titanium.UI.TabbedBar

<ProxySummary/>

## Overview

A tabbed bar is a button bar that
maintains a state (visually distinguished as a pressed or selected look).
It is closely related to the `ButtonBar` control. See the description of 
[ButtonBar](Titanium.UI.ButtonBar) for information on styling tabbed bars and buttons
bars.

Use the <Titanium.UI.createTabbedBar> method to create a Tabbed Bar.

## Examples

### Simple Tabbed Bar with 3 items

var bb1 = Ti.UI.createTabbedBar({
	labels: ['One', 'Two', 'Three'],
	backgroundColor: '#336699',
	style: Ti.UI.iOS.SystemButtonStyle.BAR,
	width: 200,
	height: 25,
	top: 50
});
win.add(bb1);

<ApiDocs/>
