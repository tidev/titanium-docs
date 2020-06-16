---
title: Localization
weight: '100'
---

# Localization

Demonstrates how to use localized strings in your Alloy project.

::: tip 💡 App folder location
_alloy_/test/apps/**advanced/localization**
:::
![local](./local.png)

The global `L()` function, which maps `Titanium.Locale.getString()`, can be invoked from an Alloy controller, XML view, or TSS file. Below is the sample application's main index.xml view.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <!-- Localization via XML attribute -->
        <Label class="header">via XML attribute:</Label>
        <Label text="L('hello_world')"/>
        <!-- Localization via TSS -->
        <Label class="header">via TSS:</Label>
        <Label id="viaTss"/>
        <!-- Localization via JS code in controller -->
        <Label class="header">via controller:</Label>
        <Label id="viaController"/>
    </Window>
</Alloy>
```

Notice that in the XML view the second Label element's `text` property is assigned the value `L('hello_world')`. Similarly, the JavaScript controller and TSS file contain the same function call:

**app/controllers/index.js**

```javascript
$.viaController.text = L('hello_world');
```

**app/styles/index.css**

```css
'#viaTss': {
  text: L('hello_world')
}
```

To test the application with localized strings, you need to create the localized strings in the Titanium project, as described in the [Internationalization](/guide/Titanium_SDK/Titanium_SDK_How-tos/Cross-Platform_Mobile_Development_In_Titanium/Internationalization/) guide. You will also need to change the language on your device or simulator to see the results (see [Internationalization - Testing Languages](/guide/Titanium_SDK/Titanium_SDK_How-tos/Cross-Platform_Mobile_Development_In_Titanium/Internationalization/#TestingLanguages)).

**To create localized strings for testing**:

1. Create a folder named **i18n** in the Alloy project's **app/** folder, not in the root of the Titanium project.

2. In the **i18n** folder create two folders named **en** and **es**. These will contain localized strings for English and Spanish, respectively.

3. In the i18n/en folder, create a file named **strings.xml** with the following content and save it:

    ```xml
    <resources>
        <string name="hello_world">Hello, world!</string>
    </resources>
    ```

    Note that the value of the `<string>` element's **name** attribute, hello\_world, corresponds to the name passed as a parameter to the `L()` function in the XML, TSS, and JavaScript files.

4. In the i18n/es folder, create another strings.xml file with the following content and save it:

    ```xml
    <resources>
        <string name="hello_world">Hola, mundo!</string>
    </resources>
    ```

5. Build and run the application on a device or simulator/emulator whose language setting is set to either English or Spanish. You should see properly localized language strings. Quit the application, switch the language setting on the device and run the application again. You should see the localized strings for the alternate language, as shown below.

    ![local](./local.png)

## See also

* [Internationalization](/guide/Titanium_SDK/Titanium_SDK_How-tos/Cross-Platform_Mobile_Development_In_Titanium/Internationalization/)
