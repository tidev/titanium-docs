---
breadcrumbLabel: BackgroundService
sidebar: auto
---

# Titanium.App.Windows.BackgroundService

<ProxySummary/>

## Overview

BackgroundService provides a basic way to register background tasks.

// Clear all tasks that is associated with this app
Ti.App.Windows.BackgroundService.unregisterAllTasks();

// Register new task that is invoked for each 15 minutes interval.
var task = Ti.App.Windows.BackgroundService.registerTimerTask('ComExampleTest.BackgroundServiceTask', 15, false);
if (task) {
  Ti.API.info("Background task is registered: task id=" + task.taskId);
}

For more information see [Windows Background Service Quick Start](http://docs.appcelerator.com/platform/latest/#!/guide/Windows_Background_Service_Quick_Start)

<ApiDocs/>
