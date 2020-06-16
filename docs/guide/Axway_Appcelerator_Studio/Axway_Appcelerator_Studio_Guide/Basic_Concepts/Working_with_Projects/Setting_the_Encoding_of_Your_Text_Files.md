---
title: Setting the Encoding of Your Text Files
weight: '40'
---

# Setting the Encoding of Your Text Files

Studio ships with UTF-8 encoding enabled by default, but you may wish to change this or set it to a new value.

## Setting your workspace encoding

1. Select **Preferences > General > Workspace**.

2. Find the **Text File Encoding** area.

3. Ensure the **Other** radio button is selected and choose a new value from the list.

4. Click **OK** to save your changes.

## Setting the encoding of a specific file

::: warning ⚠️ Warning
Some files, like XML, have an encoding setting at the top of the file. This value will take precedence over any other value set in preferences.
:::

1. Select the file you are interested in from the **Project Explorer** view

2. Right-click on the file, or select **File > Properties**

3. Under the **Resource** tab, you will find a **Text File Encoding** area.

4. Ensure the **Other** radio button is selected and choose a new value from the list.

5. Click **OK** to save your changes.

## If you do not see your encoding in the list...

::: tip
A complete list of Java encodings is available here: [http://www.oracle.com/technetwork/java/archive-139210.html](http://www.oracle.com/technetwork/java/archive-139210.html). Select the Java encoding you want from the list.
:::

You can manually specify one of the supported encodings from the above web page

1. Select one of the previous "Text File Encoding" areas

2. Type in a supported encoding; for example, Shift\_JIS, by using the "Canonical Name" from the above list. Some common encodings:

    * Shift\_JIS: Japanese

    * GB18030: Simplified Chinese

3. Click OK
