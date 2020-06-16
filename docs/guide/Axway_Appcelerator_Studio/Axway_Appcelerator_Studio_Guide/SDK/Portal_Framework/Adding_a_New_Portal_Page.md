---
title: Adding a New Portal Page
weight: '10'
---

# Adding a New Portal Page

Studio has a newly-developed portal infrastructure that interacts with Studio through Eclipse browser-functions. This page will provide an overview of how to create add a new portal-like page, such as a 'Welcome Screen' using the same infrastructure that was built for the Developer Toolbox.

## Studio Changes

On the Studio side, we need to create a new BrowserEditor that will carry a unique ID. <br>Here are the basic steps:

1. Create a new class which extends from ''com.aptana.portal.ui.browser.PortalBrowserEditor''.

2. Override the ''getEditorId()''.

3. In the plugin.xml, add this editor to the ''org.eclipse.ui.editors'' extension point. Make sure that you use the same unique ID to identify this editor.

To open the portal, you can create an eclipse startup class, and create a command handler that will trigger it when the user asks for.

In any case, to open the new portal page you will need to call the ''Portal ''class this way:

```
Portal.getInstance().openPortal(new URL(MyBrowserEditor.MY_URL), MyBrowserEditor.EDITOR_ID);
```

Note that you can restrict the opening of the portal by looking at the preferences. The Portal system can support preferences 'set' and 'get' from the web-page itself (see example below on how to achieve that).

## Setting up the Web Page

The portal system was designed to interact with remote content that is opened inside the Studio. First, we need to add some JavaScript resources. You can find them at the GitHub repo here:

[https://github.com/aptana/studio3-sdk/tree/master/portal/sample](https://github.com/aptana/studio3-sdk/tree/master/portal/sample)

### Adding Required Resources

Add the following to the head of the web page in question:

```xml
<script src="resources/prototype.js" type="text/javascript"></script>
<script src="resources/elements.js" type="text/javascript"></script>
<script src="resources/preferences.js" type="text/javascript"></script>
<script src="resources/portal.js" type="text/javascript"></script>
```

then, modify the body tag to start the portal functionality:

```xml
<body onload="loadPortal(false)">
```

## Adding Handlers for Special Functionality

Studio includes several special functions you can call via JavaScript. In, general items will be of the form:

You can either call them directly via a link or by using a checkbox to switch preferences on and off:

1. Open a specific view (specify view ID).

2. Create a New Project (specify project type).

3. Run a specific wizard (in other words, Run the "Import a Project From Git" wizard).

4. Show list of recently-opened files.

```xml
<div id="toolboxPref" class="preference checkbox" text="Load the Welcome Screen on startup" key="open_welcome">
</div>
```

## Notes

1. The portal code above uses the Prototype JS library.

2. In case you are using both prototype and jquery libraries, make sure they are not conflicting by placing the following JS block in your code. Also, scope your jquery code that uses the '$' sign (see code below).

Making JQuery play nice with Prototype:

```xml
<script language="javascript" type="text/javascript">
    jQuery.noConflict();
</script>
```

Scoping the '$' sign for JQuery

```
(function($) {
    $.jqotetag( '$' );
}(jQuery));
```
