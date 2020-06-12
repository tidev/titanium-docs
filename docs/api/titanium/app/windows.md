# Titanium.App.Windows

<TypeHeader/>

## Overview

ExtendedExecution provides a way to postpone application suspension.
This method is useful expecially for Windows desktop apps because app suspension happens when you 
minimize the app Window, which happens often on desktop. Note that extended execution is not available
for use in Windows Store applications.

    var win = Ti.UI.createWindow();

    win.addEventListener('open', function () {
        Ti.App.Windows.requestExtendedExecution({
            reason: Ti.App.Windows.EXTENDED_EXECUTION_REASON_UNSPECIFIED,
            result: function (granted) {
                Ti.API.info('Windows extended execution requested: result = ' + granted);
            },
            revoked: function (reason) {
                Ti.API.info('Windows extended execution revoked: reason = ' + reason);
            }
        });
    });

    Ti.App.addEventListener('paused', function () {
        Ti.API.info('application paused');
    });

    Ti.App.addEventListener('resumed', function () {
        Ti.API.info('application resumed');
    });

    win.open();

<ApiDocs/>
