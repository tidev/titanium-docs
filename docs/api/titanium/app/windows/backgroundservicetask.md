# Titanium.App.Windows.BackgroundServiceTask

<ProxySummary/>

## Overview

BackgroundServiceTask represents background task for Windows.

    // Register new task that is invoked for each 15 minutes interval.
    var task = Ti.App.Windows.BackgroundService.registerTimerTask('ComExampleTest.BackgroundServiceTask', 15, false);
    if (task) {
      Ti.API.info("Background task is registered: task id=" + task.taskId);

      //
      // Unregister task. Equivalent to 
      //
      // Ti.App.Windows.BackgroundService.unregisterTask(task);
      // or
      // Ti.App.Windows.BackgroundService.unregisterTask(task.taskId);
      //
      task.unregister();

    }

For more information see [Windows Background Service Quick Start](http://docs.appcelerator.com/platform/latest/#!/guide/Windows_Background_Service_Quick_Start)

<ApiDocs/>
