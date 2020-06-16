---
title: Using JavaScript Libraries
weight: '40'
---

# Using JavaScript Libraries

This walkthrough will instruct you on how to create a new web project and get started with your coding using a pre-documented JavaScript library. For this example, we will use jQuery.

::: warning ⚠️ Warning
The library you are using must have either a [JSCA 1.0 Specification](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/JSCA_1.0_Specification/) file, be documented using the [ScriptDoc](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/ScriptDoc_(SDOC)_2.0_Specification/) spec, be documented using [VSDoc](http://weblogs.asp.net/bleroy/archive/2007/04/23/the-format-for-javascript-doc-comments.aspx) for JavaScript, or have an [Aptana Studio 2.X](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/SDK/Specifications/ScriptDoc_XML_(SDOCML)_2.0_Specification/) code assist XML file. If using the Studio 2.X XML code assist file, you need to change the file extension to .sdocml.
:::

## Accessing your projects

1. Click the **Project Explorer** tab to view your Studio projects.

2. Create a new Web project.

    1. From the Studio **File** menu, select **New > Project...**
        The **New Project** wizard opens.

    2. On the **New Project** wizard, select **Web Project**.

    3. Click the **Next** button.

    4. In the **Project name:** field, type a name for your new project.

    5. Click the **Next** button.

    6. From the **Project Template** list, select a default template for the project if you like.

    7. Click the **Finish** button. Studio creates a new web project, with several files, depending on the project template you selected.

::: tip
This will create a new web project, but unlike Studio 2, most templates do not drop in a default set of JavaScript files for library support, as they quickly become outdated. Instead, download the library you are interested in using and drag and drop the files into your project as appropriate.
:::

## Adding a documented library for code assist

1. Find a library you are interested in. Some examples are listed here: [JavaScript Library Support](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Using_JavaScript_Libraries/JavaScript_Library_Support/)

2. Save it to your disk, and then drag it into your project. It does not matter where in the project it sits, so you can create a new folder for files like this if you like.

::: warning ⚠️ Warning
The project must be some web project: Web, PHP, Python, Ruby, Rails. You can confirm that here by checking the project nature: [Importing an Existing Project](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Working_with_Projects/Importing_an_Existing_Project/)
:::

## Viewing code assist (using jQuery as an example)

1. Add the file from [https://raw.github.com/aptana/javascript-jquery.ruble/master/support/jquery.1.4.2.sdocml](https://raw.github.com/aptana/javascript-jquery.ruble/master/support/jquery.1.4.2.sdocml). Make sure to save it with the .sdocml extension.

2. If you do not have a JavaScript file in your project, create a new one by selecting the **File** menu, select **New > File...** and typing 'sample.js' or a different name if you prefer. Select **Finish**.

3. In your **sample.js** file, add the following snippet:

    ```
    $(document).ready(function(){});
    ```

4. Inside that, add the following line: `$("p")`

    1. While entering that selector you should have seen documentation come up for how to use the `$` function.

5. Now insert your cursor just after "`$("p")`" and type `.ad` and press **ctrl+space**.
    Code Assist displays a list of jQuery functions that begin with the letters "ad" (for example, add, addClass, and so forth). Use Code Assist to help you code.

6. Start coding.

    1. As you type, notice that Code Assist is now active for the jQuery objects and functions that you use.

    2. Press **ctrl+space** at any time to activate Code Assist.
