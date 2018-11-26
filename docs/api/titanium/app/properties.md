---
breadcrumbLabel: Properties
sidebar: auto
---

# Titanium.App.Properties

<ProxySummary/>

## Overview

### App Properties in the tiapp.xml file

App properties defined in the `tiapp.xml` file may be accessed using these APIs.  An app
property is defined inside the root-level `<ti:app>` element with the `<property>` element.
Use the `name` attribute to define your property name and place the value inline with the
`<property>` element. For example, to define an app property called `foo` with the value `42`:

    <?xml version="1.0" encoding="UTF-8"?>
    <ti:app xmlns:ti="http://ti.appcelerator.org">
        <property name="foo" type="string">42</property>
    </ti:app>

Then, you can retrieve the property during runtime with the following API call:

    var foo = Ti.App.Properties.getString('foo');

As of Release 3.2.0, any application properties defined in the `tiapp.xml` file are stored in the
device's secure storage, making them read-only.  Additionally, external access to these
properties is now restricted.  Other iOS applications cannot access these properties and
native Android modules must use the Titanium module API
[TiApplication.getAppProperties](https://docs.appcelerator.com/module-apidoc/latest/android/org/appcelerator/platform/TiApplication.html#getAppProperties())
method to access these properties.

If you need to change the values during runtime, initially create the property with these APIs
rather than defining them in the `tiapp.xml` file.

Prior to Release 3.2.0, application properties defined in the `tiapp.xml` file could be
overwritten by these APIs and accessed externally by other applications and modules.

<ApiDocs/>
