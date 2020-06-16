---
title: App Designer Quick Start Guide
weight: '10'
---

# App Designer Quick Start Guide

## Studio Setup

A good way to get started with App Designer is to create a new Alloy project. This section will walk you through the basics of setting up a new Alloy project and get you familiarized with setting up Titanium Studio views commonly used with App Designer.

Before starting this guide, ensure that the App Designer plugin has been installed. If you didn't install it yet, please review [Installing App Designer](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_How-tos/App_Designer_Overview/Installing_App_Designer/) for instructions on installation.

1. Let's start out by making a new Alloy project. From the menu bar, select **File** > **New** > **Mobile App Project**.

2. Make sure the **Default Alloy Project** is selected and click **Next**.

3. Enter a **Project name** and **App Id** and click **Finish**.

4. Appcelerator's Test service may appear for this app. Click No to continue. We won't need the Test service for this project.

5. With the project created and the **Project Explorer** view open, **expand** the following folders until you get to **index.xml**:

    * ![image2016-5-2_13_52_2](/images/guide/download/attachments/46249378/image2016-5-2_13_52_2.png)
6. Open the **App Designer editor**: click on the **App Designer [Perspective](#perspectives)** button (found in the upper right corner of Studio). This perspective includes the following views: Project Explorer, Outline, App Designer editor, Properties, and Elements. If these views don't open, please following the instructions below to add them manually to your perspective.

### Manually adding views to App Designer perspective

In the unlikelihood that toggling the App Designer Perspective button, doesn't open up the aforementioned views, or you are using a version of Studio prior to 4.6.0, the following steps will instruct you on how to add the common views necessary to work with App Designer.

If the **Properties**, **Elements**, and **Outline** views didn't open when you opened the index.xml file, follow these steps to open them:

1. To launch the **Outline** view, go to **Window** > **Show View...**. In the Show View window, expand **General**, select **Outline**, and click **OK**.

2. To open the **Properties** and **Elements** views, go to **Window** > **Show View** > **Other...** again, expand **App Designer**, **shift-select Elements** and **Properties**, and click **OK**.

Once you have these helpful views open, you can drag and drop the views that best assists your in your app design workflow. The image below shows a typical layout for using the Outline, Properties, and Elements views in conjunction with the App Designer design view.

![image2016-5-2_14_10_16](/images/guide/download/attachments/46249378/image2016-5-2_14_10_16.png)

Now you're ready to start designing and laying out elements, modify element properties, and tweak your design using a WYSIWYG environment but before we move on to that, let's take a moment to explore a new perspective (view set): App Designer editor.

## Perspectives

As a quick reminder, a perspective is a pre-defined set of views that works best with one workflow or another. With the introduction of App Designer, we also introduce a new perspective just for App Designer.

![image2016-5-12_9_14_5](/images/guide/download/attachments/46249378/image2016-5-12_9_14_5.png)

App Designer enabled

By default, Titanium Studio launches with the **Studio** ![image2016-5-12_9_11_42](/images/guide/download/attachments/46249378/image2016-5-12_9_11_42.png) perspective. To switch to a new perspective, click one of the perspective icons found in the upper right corner. In the image to the right, you see the new icon for App Designer perspective has been enabled. Before working with App Designer, its recommended that you switch your perspective to App Designer perspective.

To add the App Designer perspective to the Perspective toggle options,

1. Click on the **Open Perspective** icon ![image2016-5-12_9_26_49](/images/guide/download/attachments/46249378/image2016-5-12_9_26_49.png) found in the upper right corner.

2. Select the **App Designer** icon ![image2016-5-12_9_19_26](/images/guide/download/attachments/46249378/image2016-5-12_9_19_26.png) from the dialog window and click **OK**. This will launch the App Designer perspective with the additional views of Properties, Elements, and Outline.

3. Double-click on any Alloy view file to launch that project into the App Designer editor.

## Creating and modifying elements

To get a feel for creating and modifying content in App Designer, let's explore the views by creating a few elements and modifying them using the various tools and features these views offer.

### Modifying the background

![image2016-5-11_14_20_10](/images/guide/download/thumbnails/46249378/image2016-5-11_14_20_10.png)

Color picker

In this short tutorial, we will modify the background of our app to have a red background color using the Outline and Properties views.

1. In the **Outline** **view**, select the **Window** object.

2. With the Window object selected, scroll down to **Background** in the **Properties** **view** until you find the **Background property**.

3. Click on the **BackgroundColor parameter** to show it's current hex color values.

4. Click the **... button** to open a Color picker window.

5. In the **RGB Sliders** option, set the following colors:

    1. Red: 181

    2. Green: 13

    3. Blue: 0

6. **Close the Color picker** window to apply the color to the selected (Window) object.

You should now have a red background to your app.

### Creating a button

![image2016-5-11_14_21_110](./image2016-5-11_14_21_110.png)
Window background properties and parameters

The following instructions will show you how to create a button element from the Elements view and modify various parameters using the Properties view.

1. From the **Elements view**, select and drag a **button element** anywhere on the app's App Designer editor.

2. With the newly created button element selected, rename the element by changing the **id** value in the **Properties view**. Change the id value to "Tutorials". You should notice that the name of the button element has now changed in the Outline view.

3. Adjust the position of the button by changing the **left** and **top parameters** in the **Position** property in the **Property view**. Set the left parameter value to **30%** and the top value to **25%**.

4. Next, change the size of the button element by adjusting the parameters found in the **Size** property. Under Size, set the **height parameter** to **5%** and **width** to **18%**.

5. Finally, change the **font size** and **font family** in the **font parameters** found under the **Appearance** property.

    1. Set the **fontSize** to **14**.

    2. Set the **fontFamily** to a family such as **Arial**. To see the font family change, you will need to click off that parameter.

6. To make the button to look more like a button, change the rigid looking corners to a rounded corner. Under the **Borders** property, set **borderColor** to #b50d00 (using the Color picker) and **borderRadius** to 15.

7. Finally, change the text of the button element by **title parameter** (under Appearance property) to display "Tutorials".

Now, let's give this button an action by modifying it's code via the XML view.

1. Click the XML tab in the App Designer editor.

2. Change the following code:

    * ```xml
        <Button id="Tutorials"/>
        ```

3. To this:

    * ```xml
        <Button id="Tutorials" onClick="loadTutorials"/>
        ```

Back in the Properties view, you will now see the click parameter (under Events) has a value of loadTutorials. The loadTutorials event hasn't been defined anywhere so it won't do anything. Defining that event is beyond the scope of this tutorial.

If all went well, you should now have a button element with text of "Tutorials".

### Creating a label

![image2016-5-11_14_22_50](./image2016-5-11_14_22_50.png)
Label element

These steps will show you how to create a label element from the Outline view and modify it's parameters via the Properties view.

1. From the **Outline** view, select the **Window** **object**.

2. **Right-click on the Window object** and go to **Quick Create** > **Create Label**.

3. Select the newly created label element.

4. In the **Properties** view, modify the following parameters:

    1. **id**: App Designer

    2. Position

        1. **left**: 0

        2. **top**: 10%

    3. Size

        1. **height**: 12%

        2. **width**: 100%

    4. Appearance

        1. **color**: #ffffff

        2. font

            1. **fontSize**: 48

            2. **fontFamily**: Arial

        3. **text (xml)**: App Designer

        4. **textAlign**: [Titanium.UI.TEXT\_ALIGNMENT\_CENTER](#!/api/Titanium.UI.Label-property-textAlign)

We should now have a nicely positioned prominent title label for our app that reads App Designer. There are a bazillion properties, methods, and events you can apply to your elements. As you can see in the textAlign parameter, we used the text align property from the Titanium.UI.Label module. More UI label modules can be found in the [Titanium.UI](#!/api/Titanium.UI) documentation.

::: warning ⚠️ Warning
If a change in a parameter's value doesn't trigger a change to the displayed element, you may need to complete the value change by hitting enter or by clicking onto a different part of the window.
:::

### Copying an element

![image2016-5-11_14_22_510](./image2016-5-11_14_22_510.png)
Copied button element

The following steps shows you how to copy an element via the Outline view and modify it's properties view the Properties view.

1. Select the recently created button called **Tutorials** in the **Outline** view.

2. **Right-click** and select **Copy**.

3. **Right-click** on the **Window** **object** and select **Paste**. You should see a new element called Button\_1.

4. Next, let's modify this copied element. In the **Properties** view, make the following changes to the parameters of this new element:

    1. **id**: Links

    2. Position

        1. Remove the value listed in the **left** **parameter**.

        2. **right**: 30%

    3. Appearance

        1. **title**: Links

    4. Events

        1. **click**: loadLinks

As you can see, creating a new element from an existing one and modifying it a bit is pretty quick. If everything went well in these tutorials, your app should look something like this:

![image2016-5-11_14_31_54](/images/guide/download/attachments/46249378/image2016-5-11_14_31_54.png)

## Review

In this guide, we created a [new Alloy project](#studio-setup), learned how to add the new [App Designer perspective](#perspectives), set up the [Outline, Elements, and Properties views](#undefined) for commonly used workflows, and [created and modified a few elements](#creating-and-modifying-elements) using both the Design and XML views.
