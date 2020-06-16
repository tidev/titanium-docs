---
title: Windows Background Service Quick Start
weight: '20'
---

# Windows Background Service Quick Start

## Introduction

This guide walks through the steps to create, build and test an Windows background service module using Studio. The equivalent CLI instructions are given in the information boxes near the top of each section.

## Windows Module prerequisites

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.
:::
::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

To develop an Windows-based Module, you'll need all of the software required to build a Titanium application for Windows:

* Titanium SDK

* Supported versions of Visual Studio and the Windows Phone SDK, as described in [Installing the Windows Phone SDK](#undefined)

* Studio or the Appcelerator Command-Line Interface (CLI) for creating modules, and building and running test applications

Like Windows application development, Windows module development is only supported on Windows. Create a new module

First, create a new module project.

::: tip 💡 CLI Instructions
From a terminal, change the current working directory to your workspace and run:

```bash
cd /PATH/TO/WORKSPACE
appc new -n test --id com.example.test
### when prompted for the project type, select "Titanium Module"
```
:::

In Studio:

1. From the menu, select **File** > **New** > **Mobile Module Project** to open the **New Mobile Module Project** dialog.

2. In the **Project name** field, enter **test**.

3. In the **Module Id** field, enter **com.example.test**.

4. In **Deployment Targets**, select **Windows**.

5. Click **Next**, then click **Finish**.

Studio sets up a new folder called `test` that contains your module project.

## Build and package the module

Next, build the module and package it. This process produces a ZIP file containing a binary library with unprocessed module assets, example code and documentation.

::: tip 💡 CLI Instructions
From a terminal, go to the module's windows directory and run the `appc run -p windows --build-only`

```bash
cd test/windows
appc run -p windows --build-only
```

After the build completes, unzip the built module in the Titanium SDK home path: (`C:\ProgramData\Titanium`).
:::

In Studio:

1. Select your module folder in the **Project Explorer** view.

2. Verify **Package** and **Windows Module** are displayed in **Launch Mode** and **Launch Target**, respectively.

3. Click the Package icon to open the **Package Windows Module** dialog.

4. In **Output Location**, choose the **Titanium SDK** to install the module in the Titanium SDK home path to be accessed by any Titanium application.

5. Click **Finish**.

Studio builds and installs the module to the Titanium SDK home path.

## Test the module

To test the module, create a test application and add the module as a dependency of the project. Then, load the module and make module API calls to the module reference.

### Create a test application

::: tip 💡 CLI Instructions
From a new terminal window, change the current working directory to your workspace and run the following commands:

```bash
cd /PATH/TO/WORKSPACE
appc new -t titanium -p windows -n Hello -u http:// --id com.example.hello
cd Hello/
```
:::

In Studio:

1. From the menu, select **File** > **New** > **Mobile App Project** to open the **New Mobile App Project** dialog.

2. On the **Project Template** page, select **Default Alloy Project** as the template type, then click **Next**.

3. On the **Project Location** page, enter the following information:

    * In the **Project Name** field, enter **Hello**.

    * In the **App ID** field, enter **com.example.hello**.

    * In **Deployment Targets**, select **Windows**.

4. Click **Finish** to create the project.

Studio sets up a new folder called `Hello` that contains the test application you will be using to test the module.

### Add the module as a dependency to the project

To load the module in the application, you need to add it as a dependency to the project.

::: tip 💡 CLI Instructions
Open the `tiapp.xml` and update the `<modules/>` element to include the module as a dependency to the project. In addition to that Windows background module requires `Extension` element with `EntryPoint` specified. In `EntryPoint` you need to specify a background service class name, which is named "camel-cased module identifier" plus "`BackgroundServiceTask`". In this example since we uses "com.example.test" as an module id, background task entry point goes to "`ComExampleTest.BackgroundServiceTask`".

```xml
<ti:app>
  <modules>
    <module platform="windows">com.example.test</module>
  </modules>
  <windows>
    <manifest>
      <Extensions>
        <Extension Category="windows.backgroundTasks" EntryPoint="ComExampleTest.BackgroundServiceTask">
          <BackgroundTasks>
            <Task Type="timer" />
          </BackgroundTasks>
        </Extension>
      </Extensions>
    </manifest>
  </windows>
</ti:app>
```
:::

### Load the module and make module API calls

Open the `app.js` file and replace the code with the following, which invokes background service API calls to the module. In this example we use `registerTimerTask` to register [Windows::ApplicationModel::Background::TimeTrigger](https://msdn.microsoft.com/en-us/library/windows/apps/windows.applicationmodel.background.timetrigger.aspx) which is invoked for each 15 minutes interval.

**app.js**

```javascript
var win = Ti.UI.createWindow();
var task;

win.addEventListener('open', function() {

  // Clear all tasks that is associated with this app
  Ti.App.Windows.BackgroundService.unregisterAllTasks();

  // Register new task that is invoked for each 15 minutes interval.
  task = Ti.App.Windows.BackgroundService.registerTimerTask('ComExampleTest.BackgroundServiceTask', 15, false);

  if (task) {
    Ti.API.info("Background task is registered: task id=" + task.taskId);
  }
});

win.open();
```

### Run the application

::: tip 💡 CLI Instructions
From a terminal that has the test app as its current working directory, run:

```bash
appc run -p windows
```
:::

In the Studio toolbar, select **Run** in **Launch Modes** and select an Windows Phone simulator in **Launch Targets**.

Studio builds and launches the application on the select Windows Phone simulator. Monitor the **Console** view for log output.

The console lines seen below show us that the module is working as expected.

**Console**

```
[INFO]  Background task is registered: task id=0
```

## Modify the module

Let's modify the module code to create a view object and access a string property.

First, look at some of the default files created by the Titanium SDK. Expand the `windows` folder. Inside this folder are two files:

* `src/ComExampleTest.cpp`: This is a boilerplate Module class. Every module requires a module class, which acts as the base API for the module.

* i`nclude/ComExampleTest.hpp`: This is a header file for the boiler plate class.

### Implement background task

In `ComExampleTestModule.cpp` file you'll find `BackgroundServiceTask` class inside namespace `ComExampleTest`.

**ComExampleTest.cpp**

```cpp
namespace ComExampleTest
{
    /*
     * @class
     * @discussion This is background task for BackgroundService.
     *             EntryPoint: ComExampleTest.BackgroundServiceTask
     *
     *   Usage: (JavaScript)
     *     var task = Ti.App.Windows.BackgroundService.registerTimerTask(
     *                          'ComExampleTest.BackgroundServiceTask', 15, false);
     *
     *   Don't remove this class because Windows Store submission process requires
     *   at least one C++/CX class in winmd. (TIMOB-20192)
     *
     */
    [Windows::Foundation::Metadata::WebHostHidden]
    public ref class BackgroundServiceTask sealed : public Windows::ApplicationModel::Background::IBackgroundTask
    {
    public:
        virtual void Run(Windows::ApplicationModel::Background::IBackgroundTaskInstance^ taskInstance);
    };

    /*
     * BackgroundServiceTask::Run implementation
     */
    void BackgroundServiceTask::Run(IBackgroundTaskInstance^ taskInstance)
    {
        const auto deferral = taskInstance->GetDeferral();
        //
        // BACKGROUND TASK: IMPLEMENT SOMETHING USEFUL HERE :)
        //
        // Inform this task has finished
        deferral->Complete();
    }
}
```

BackgroundServiceTask implements Windows Background Service [`IBackgroundTask`](https://msdn.microsoft.com/library/windows/apps/br224794) interface so you can implement a task that works in the background. The implementation for background task should be inside `BackgroundServiceTask::Run` function:

**ComExampleTest.cpp**

```cpp
/*
 * BackgroundServiceTask::Run implementation
 */
void BackgroundServiceTask::Run(IBackgroundTaskInstance^ taskInstance)
{
    const auto deferral = taskInstance->GetDeferral();

    //
    // BACKGROUND TASK: IMPLEMENT SOMETHING USEFUL HERE :)
    //

    // Inform this task has finished
    deferral->Complete();
}
```

Let's implement something useful here: let say we want a number to count how many times background task is executed. Important thing you need to know here is that `BackgroundServiceTask` doesn't have a state because background task is executed and finished on each invocation. So you need a way to save a state: in this case we can use `ApplicationData::Current->LocalSettings` or local file storage to store values. In this example let's use `LocalSettings` for now:

**ComExampleTest.cpp**

```cpp
using namespace Windows::Foundation;
using namespace Windows::ApplicationModel::Background;
using namespace Windows::Storage;

/*
 * BackgroundServiceTask::Run implementation
 */
void BackgroundServiceTask::Run(IBackgroundTaskInstance^ taskInstance)
{
    const auto deferral = taskInstance->GetDeferral();

    int count = 0;
    const auto settings = ApplicationData::Current->LocalSettings;
    const auto values = settings->Values;

    // In this example we use "ComExampleTest.BackgroundServiceTask.count" key to store count value
    Platform::String^ key = "ComExampleTest.BackgroundServiceTask.count";

    // Restore count from settings...
    if (values->HasKey(key)) {
       count = safe_cast<IPropertyValue^>(values->Lookup(key))->GetInt32();
    }

    // Let's count up
    count++;

    // Save the count so that BackgroundServiceTask can lookup.
    settings->Values->Insert("ComExampleTest.BackgroundServiceTask.count", dynamic_cast<PropertyValue^>(PropertyValue::CreateInt32(count)));

    // Inform this task has finished
    deferral->Complete();
}
```

In this example we saves count value to `"ComExampleTest.BackgroundServiceTask.count"` local setting. Good new is that you can actually get the value from JavaScript using `Ti.App.Properties` with same key "`ComExampleTest.BackgroundServiceTask.count`". Because we save the state in the local settings, count value is still saved even when app is finished or even all background tasks are unregistered.

**app.js**

```javascript
var win = Ti.UI.createWindow();
var task;

win.addEventListener('open', function() {

  // Let's print out task execution count
  Ti.API.info('Task execution count: ' + Ti.App.Properties.getInt('ComExampleTest.BackgroundServiceTask.count'));

  // Clear all tasks that is associated with this app
  Ti.App.Windows.BackgroundService.unregisterAllTasks();

  // Register new task that is invoked for each 15 minutes interval.
  task = Ti.App.Windows.BackgroundService.registerTimerTask('ComExampleTest.BackgroundServiceTask', 15, false);
  if (task) {
    Ti.API.info('Background task is registered: task id=' + task.taskId);
  }
});

win.open();
```

## Next steps

* For information about Windows Runtime Background Service API, see [Windows.ApplicationModel.Background namespace](https://msdn.microsoft.com/en-us/library/windows/apps/windows.applicationmodel.background.aspx)

* For a general overview of background tasks in Windows Store apps, see the [Introduction to Background Tasks](https://www.microsoft.com/download/en/details.aspx?id=27411) whitepaper

* For example code that shows how to implement background tasks, see the [Background Task Sample](http://code.msdn.microsoft.com/windowsapps/background-task-sample-9209ade9).
