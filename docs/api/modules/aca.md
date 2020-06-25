# Modules.ACA

<TypeHeader/>

## Overview

<p class="note">This AMPLIFY Service feature requires a Pro, Enterprise, or purchased subscription.</p>

The AMPLIFY Crash Analytics (ACA) module provides hooks to the PEM-powered services for
real-time crash reporting and app monitoring to capture errors and provide valuable diagnostic
information of your mobile application.

For information on getting started and usage examples, refer to the
[ACA guide](https://docs.appcelerator.com/platform/latest/#!/guide/AMPLIFY_Crash_Analytics)

If you wish to try out the ACA module, try this sample app (app.js)

``` javascript
const aca = require('com.appcelerator.aca');
const win = Ti.UI.createWindow({ backgroundColor: 'gray', layout: 'vertical' });

add('Breadcrumb', () => {
    aca.leaveBreadcrumb('example breadcrumb #1');
    // do stuff...
    aca.leaveBreadcrumb('example breadcrumb #2');
});

add('Username', () => {
    aca.setUsername('Tester');
});

add('Metadata', () => {
    // specify metadata using key, value
    aca.setMetadata('testKey', 'testKeyValue');

    // specify metadata using object
    aca.setMetadata({
        testObj: 'testObjValue'
    });
});

add('Log Exception', () => {
    try {
        throw new Error('example exception');
    } catch (e) {
        aca.logHandledException(e);
    }
});

add('Opt Out', () => {
    aca.setOptOutStatus(!aca.getOptOutStatus());
    console.log('set optOutStatus: ' + aca.getOptOutStatus());
});

function add(name, callback) {
    const btn = Ti.UI.createButton({ title: name, left: 5, right: 5 });
    btn.addEventListener('click', callback);
    win.add(btn);
}
```

<ApiDocs/>
