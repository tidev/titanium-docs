---
title: Native Modules
weight: '130'
---

# Native Modules

Demonstrates using a native module in an Alloy application, in this case the Paint module provided by Appcelerator.

::: tip 💡 App folder location
_alloy_/test/apps/**advanced/native\_modules**
:::

![ti.paint](./ti.paint.png)

The native\_module sample app is configured to use the [Paint module](https://marketplace.axway.com/apps/4977#!overview) provided by Appcelerator. To use a module in an Alloy project, simply add it to an existing Alloy view using a `<Module/>` element, specifying the module's ID. The element's `method` parameter specifies the method that will be invoked on the module to initialize it. If no method is specified the module's `createView()` method will be invoked, by default. The ti.paint module's create method is called `createPaintView()`.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <Module id="paint" module="ti.paint" method="createPaintView" platform="ios" />
    </Window>
</Alloy>
```

Once you've imported sample app, you next to need to download and install the ti.paint module, and modify the application's tiapp.xml file to include it.

**Download and install the ti.paint module**:

1. Download the [ti.paint module](https://github.com/appcelerator-archive/ti.paint) ZIP from GitHub.

2. To manually install the module, copy the ZIP file to the root of the Titanium SDK folder (for example, **~/** **Library/Application Support/Titanium** on OS X). See [Module install locations](/guide/Titanium_SDK/Titanium_SDK_How-tos/Using_Modules/Using_a_Module/#module-install-locations)
    for other platforms. In Appcelerator Studio, you can also install the module by selecting **Help > Install Mobile Module** and locating the ZIP file.

3. Open the project's `tiapp.xml` file and insert **`<module>ti.paint</module>`** into the existing `<modules></modules>` element, as shown below.

    ```xml
    <ti:app xmlns:ti="http://ti.appcelerator.org">
        ...
        <modules>
            <module>ti.paint</module>
        </modules>
        ...
    </xml>
    ```

4. Save `tiapp.xml` and build the application for iOS simulator or device. (The Paint module does not currently work on Android.)

## See also

* [Using Titanium Modules](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Titanium_Modules/Using_Titanium_Modules/)

* [Paint module](https://marketplace.axway.com/apps/4977#!overview)
