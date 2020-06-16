---
title: Introduction
weight: '50'
---

# Introduction

This walkthrough will instruct you how to install the JavaScript debugger in Firefox, add a breakpoint to your code, and display the current values of your variables.

1. Import the debugging sample as a project.

    1. In the Samples View, expand the **Studio Samples** node.

    2. Select the **Debugger Sample**.

    3. Right-click the **Debugger Sample** and select **Import sample as project** from the context menu.

    4. Follow the prompts to import the sample. Studio creates a new **Debugger Sample** project, which includes a **debug\_tests.html** file (which will automatically open) and a **debug\_timer.html** file. You will be using **debug\_timer.html** later on in this tutorial.

    5. In your App Explorer or Project Explorer views, navigate to the new **Debugger Sample** project.

    6. Expand the **Debugger Sample** project node.

    7. Open the **debug\_timer.html** file in your Editor.

2. Install the debugger.

    1. From the **Run** menu, select **Debug...** to open a **Debug** window.

    2. In the lower-left corner of the **Debug** window, under the list of Configurations, click the **New** button to create a new configuration.

    3. In the **Name** field, type a name for your new configuration (for example, "debug").

    4. Under Web Browser, browse to your Firefox installation, if it is not there by default.

    5. Click the **Debug** button to install the debugger into Firefox. A browser window opens, checks for the Debugger extension, and then closes. Studio displays a prompt asking if you would like to install the Debugger Extension.

    6. On the prompt, click **Yes** to install the Debugger Extension for your browser. A browser window opens and displays a **Software Installation** prompt.

    7. Click the **Install Now** button to start installing the debugger. An **Extensions** pop-up window displays the list of extensions installed in your browser.

    8. Close the **Extensions** pop-up window.

    9. Close your browser window. Studio opens an **Install Debugger Extension** pop-up window.

    10. On the **Install Debugger Extension** pop-up window, click **OK**. A browser window opens, which installs the debugger.

    11. Close the browser window. Studio displays a prompt telling you that the debugger was successfully installed.

    12. Click **OK**. A browser window opens that contains the start page that you specified in your configuration.

3. Start debugging.

    1. Return to Studio, and switch to the Debug perspective. To access the Debug perspective for the first time, click the **Perspective** button ![IconPerspective](./IconPerspective.png) and select **Other... > Debug** from the pop-up menu. Studio switches to the Debug Perspective.

    2. On the Debug View in the upper-left corner of the Debug Perspective, select the main thread for **timer.html** and click the **Suspend** button ![IconSuspend](./IconSuspend.png) to suspend the current JavaScript thread.

    3. Switch back to Firefox, and click the **Start** button on the timer page to start executing the JavaScript for the page.

    4. Switch back to Studio to continue debugging.

4. Add a breakpoint to your code.

    1. In **timer.html**, navigate to the **timerUpdate()** function.

    2. On the second line of the **timerUpdate** function (for example, `if( timerID ) {`), right-click in the gray margin and select **Toggle Breakpoint** from the context menu.

    3. Click the **Resume** button ![IconResume](./IconResume.png) to resume execution of your code.<p>Execution of your JavaScript code will automatically suspend on this breakpoint.

5. Inspect the values of your variables.

    1. In the upper-right part of the Debug perspective, click the **Variables** tab. The Variables View displays the values for the variables in the current stack frame.

    2. Click the **Show Type Names** button ![IconShowTypeNames](./IconShowTypeNames.png) to display what types your variables are.

    3. Right-click a variable and select **Change Value...** from the context menu, if you want to change a variable value.

6. Quit the debugger.

    1. Click the **Terminate** button ![IconTerminate](./IconTerminate.png) to stop debugging and close your Firefox window.
