---
title: HTML Development
weight: '60'
---

# HTML Development

## HTML Support

Aptana Studio 3 is shipped with built-in support for HTML4 and HTML5 editing.

### Creating a project using the New Project wizard

To work with HTML content, a '**Web Project**' should be created.
The Web Project wizard can be accessed through multiple locations in the workspace.
A project can be created through the File->New->Web Project, or by right-clicking the 'Project Explorer' or the 'App Explorer' and select New->Web Project.

Once you type in a project name, a 'Next' button is enabled to allow you to select a project template in case you wish to do so.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083084/html_project_templates.jpg" alt="images/download/attachments/30083084/html_project_templates.jpg" class="confluence-embedded-image image-left"></p></td></tr></tbody></table>

::: warning ⚠️ Warning
Some of those templates will actually call a 'git clone' command to grab the latest project content from a remote site.
:::

### Creating a project using the import wizard

A project can be imported to the workspace using the 'Import Wizard' through File->Import and then selecting General->Existing Project Into Workspace. The same action exists when right-clicking in the 'Project Explorer' and the 'App Explorer'.

When in the 'Project Explorer' view, you can also navigate the 'Local System' node, right-click a directory and select 'Promote to Project'.

Once a project is imported, you may need to add the '**Web Nature**' order to enable some Web-specific features.
To do so, right-click the project you have just imported and select 'Properties'. Navigate to the 'Project Natures' item and check the 'Web' nature.

## Editing

Paste in your files, import them, or create new ones using the new file wizard.
When in the 'App Explorer', the new file wizard will offer you to create a file from a template as an option on the 'Next' page. These file-templates are contributed by the "HTML Ruble", and we discuss the 'Ruble' support at the [Ruble Specification](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/) page.

The HTML editor provides these features:

* Syntax Coloring according to the selected theme in the preferences.

* Code Assist

* HTML Validation

* Auto indentation and Code Formatting

* Previewing

### Syntax Coloring

Like with any other Studio-contributed editor, the syntax highlighting settings are controlled by the 'Theme' preference page in Studio's preferences.
More about the themes is described in detail at the [Themes](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/) page.

### Code Assist

The editor provides a code-assist mechanism that displays suggestions by the context at the edit-location.

* Typing an open tag '<' character will auto-show the content assist pop-up with a list of available tags (this behavior can be controlled by the 'Editors' preferences).

* Typing a letter or part of a word and then Ctrl+Space will bring up any possible completion proposals that start with the character's input. The content pop-up will show proposals for known HTML tags, and also for any HTML code snippets that were contributed by the [HTML Ruble](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Ruble_Specification/).

    <table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083084/html_template_completion.jpg" alt="images/download/attachments/30083084/html_template_completion.jpg" class="confluence-embedded-image image-left"></p></td></tr></tbody></table>

* When inside a tag, the content assist will suggest the relevant options according to the edit-point context.

    <table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083084/html_context_ca.jpg" alt="images/download/attachments/30083084/html_context_ca.jpg" class="confluence-embedded-image image-left"></p></td></tr></tbody></table>

### Auto Indentation & Code Formatting

Auto indentation is done as you type and move to a new line. For example, typing a new line after a '<html>' element will auto-indent the edit point in the new line.

Code formatting is an advanced feature that allows you to format your entire file as a post-editing action. The formatter is triggered by clicking Ctrl+Shif+F, or by selecting 'Source -> Format' in the editor's pop-up menu or top menu-bar.

The code formatter settings can be tweaked through Studio's preferences. You can create your formatting profile and edit it to your needs.
The HTML code formatter provides control over the new-lines, indentation-levels, blank-lines, spaces, and comments.
As of version 3.0.4, the formatter also provides an ability to turn off and turn on formatting for specific sections of code.
For example:

```xml
<!-- @formatter:off -->
<tr><td>row 1, cell 1</td></tr>
<tr><td>row 2, cell 1</td></tr>
<!-- @formatter:on -->
```

Note that the 'off' and 'on' tags are also customizable through the formatter preferences.

## Validation

Studio is bundled with a **Tidy** HTML validator that performs validation on the edited HTML and outputs any warnings and errors to the editor's annotations ruler and the 'Problems View'.
It's possible to turn off the validation through the preferences, under the 'Validation' page:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083084/html_validation_pref.jpg" alt="images/download/attachments/30083084/html_validation_pref.jpg" class="confluence-embedded-image image-left"></p></td></tr></tbody></table>

You can hover over any warning or error that the validation output to see its details:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083084/html_validation.jpg" alt="images/download/attachments/30083084/html_validation.jpg" class="confluence-embedded-image image-left"></p></td></tr></tbody></table>

## Previewing

Studio is equipped with an internal server that allows a quick preview of HTML content. See [Previewing a project in a web browser](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Previewing/Previewing_a_project_in_a_web_browser/)

If you wish, you can have your source and preview side-by-side: [Side-by-Side Previewing](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Previewing/Side-by-Side_Previewing/)
