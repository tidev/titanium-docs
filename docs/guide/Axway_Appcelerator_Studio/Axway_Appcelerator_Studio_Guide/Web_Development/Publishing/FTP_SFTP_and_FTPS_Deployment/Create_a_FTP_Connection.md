---
title: Create a FTP Connection
weight: '10'
---

# Create a FTP Connection

You can create a FTP/SFTP/FTPS connection in the [deployment](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/Publishing/FTP_SFTP_and_FTPS_Deployment/) process, or if you would like to add one without associating it to a project, through the Remote View.

## From the Remote View

1\. Select **Window->Show View->Remote** to open the view.

2\. Right-click in the Remote View and select **Add New FTP Site**.

3\. Studio will open a New Connection window for defining the information on the connection.

* In the **Site Name** field, type a name for the new remote site.

* In the **Protocol** field, select the one applied to this connection (FTP/SFTP/FTPS).

* In the **Server** field, type the URL for the site that you will be connecting to (e.g. admin.myWebSite.com).

* In the **Username** and **Password** fields, type your username and password for the server.

* If you want to connect to a subfolder under the root of the remote site, type the folder path in the **Remote Path** field or user **Browse...** to browse into the desired folder.

* If you want to use a port other than "21", expand **More Options** and type the port number in the **Port** field.

* If you want to test that your username and password work for this particular set up, click the **Test** button.

* If you want to save your password setting, check the **Save** box to the right of the **Password** field.

* There are additional options in the **More Options** panel that you could define for the different protocols, such as encoding, server timezone, and connection mode.

* Click **OK**.

The new connection will be created and added to Remote View. You could then browse its content by expanding the entry in Remote View and edit a file by double-clicking on it to open the file in an editor.

You can modify the existing connection by right-clicking on the connection and selecting Properties from the context menu.
