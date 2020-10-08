---
title: iCloud Services
weight: '40'
---

# iCloud Services

## Introduction

Titanium applications running on iOS devices can backup data to Apple's iCloud service. By default, iOS schedules to backup application data to iCloud once a day if the device is plugged in, inactive and has an internet connection. Only files saved in the`applicationDataDirectory` and `applicationSupportDirectory`directories are saved unless you specifically set the `remoteBackup` property on the file to false. Files in the Resources (app bundle), Cache and tmp directories are not backed up. If you want to backup a file to iCloud, make sure it is in the data directory.

To use iCloud's backup feature, you need to setup a distribution profile with iCloud services enabled, then package your application using the distribution profile.

### Apple best practices

Apple recommends that only files created by users or data that cannot be recreated by the application should be backed up, to save time uploading data and iCloud storage space. Use the application's data directory (called the `Document` directory in the iOS filesystem) to store user data and critical files.

If a file can be downloaded or recreated by the application, the application should disable backing up that file. Apple recommends using the application support directory (called the `Library/Application Support` directory in the iOS filesystem) to store downloaded content and data that the application can recreate. Since, by default, files in the application support directory are backed up, you need to explicitly disable backing them up if needed.

## Setup a Distribution Profile with iCloud Services

To use the iCloud service, you need to create a Distribution Profile, which requires a Distribution Certificate and an App ID with iCloud services enabled. If you have created a Distribution Profile before, the only difference is you need to create an Explicit App ID with the iCloud services enabled.

### Register an App ID

You need to register an App ID for your application.

1. Log in to the [Apple Developer Member Center](https://developer.apple.com/membercenter/) as the Team Agent or Admin.

2. Click **Certificates, Identifiers & Profiles**.

3. Click **Identifiers**, then click the add (**+**) button near the top-right corner.

4. Under **App ID Description**, enter a value in the **Name** field.

5. Select the **App ID Prefix** to use. (You cannot use a Wildcard App ID for an application with push notifications.)

6. In the the **App ID Suffix** section, select **Explicit App ID** and enter your application's ID. This is the value of the `<id>` element in your project's `tiapp.xml` file.

7. Under **App Services**, check the **iCloud** checkbox.

8. Click **Continue**, **Submit**, and **Done** to complete the process.

After creating your App ID, follow the directions from [Distributing iOS apps](/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/) to create your Distribution Certificate and Distribution Profile, then use the certificate and profile to package your application.

## Disable iCloud backup

By default, files in the `applicationDataDirectory`and`applicationSupportDirectory`directories are backed up to iCloud unless you set the `remoteBackup`property of the file to false. The file needs to exist before setting the property. Setting the `remoteBackup` property to false also disables backing up the file using iTunes. iTunes backs up the application data locally.

For example, to disable backing up the entire application support directory, you need to recursively set the property on every file in the folder and its subfolders.

```javascript
function walk(folder) {
    var dir = Ti.Filesystem.getFile(folder);
    var dir_files = dir.getDirectoryListing();
    for (var i = 0; i < dir_files.length; i++) {
        var file = Ti.Filesystem.getFile(folder, dir_files[i]);
        file.remoteBackup = false;
        var nativePath = file.nativePath;
        // Subfolder not a file
        if (nativePath.lastIndexOf('/') == nativePath.length - 1) {
            walk(file.nativePath);
        }
    }
}
walk(Ti.Filesystem.applicationSupportDirectory);
```

Database files created using the Titanium.Database API are not stored in the data or application support directories. To disable backing up a database file, use the [`file`](#!/api/Titanium.Database.DB-property-file) property after opening a database to access the database file, then set the `remoteBackup` property on the database file to false.

```javascript
var db = Ti.Database.open('foostore');
db.file.remoteBackup = false
```

## Perform a manual backup

If you do not want to wait for iOS to backup your files, you can manually perform a backup. To perform a manual backup to iCloud, on the iOS device:

1. Open **Settings.**

2. Navigate to **iCloud** > **Storage & Backup.**

3. Make sure **iCloud Backup** is switched on.

4. Tap **Backup Now**.

To check how much space the backup uses:

1. Open **Settings.**

2. Navigate to **iCloud** > **Storage & Backup** \> **Manage Storage**.

3. Tap **This Device**.

The device displays an itemized list of how much iCloud storage space each application uses.

## Test restoring an iCloud backup

To test restoring an iCloud backup, you need to reset your device and erase the application settings and content. After the reset, during the "Set Up iPhone" step of the iOS Setup Assistant, select to **Restore from iCloud Backup** and choose a previous device backup to start restoring your device.

Before proceeding make sure have a current backup of your device. See the previous section to perform a manual backup.

1. Open **Settings**.

2. Navigate to **General** > **Reset**.

3. Tap **Erase all settings and content**. A dialog appears asking you to confirm your selection. After confirming, the device will reset.

4. After the device resets, the iOS Setup Assistant appears. Follow the initial steps to select your language, region, etc.

5. Once you have come to the "Set Up iPhone" step, tap **Restore from iCloud Backup**.

6. In the "Choose backup" step, select the backup to use to restore your device.

iOS will start restoring your device based on the backup chosen.

## Further reading and references

* [iOS Data Storage Guidelines](https://developer.apple.com/icloud/documentation/data-storage/index.html)

* [iOS App Programming Guide: App Backup Best Practices](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/PerformanceTuning/PerformanceTuning.html#//apple_ref/doc/uid/TP40007072-CH8-SW9)

* [Back up and restore your iOS device with iCloud or iTunes](http://support.apple.com/kb/HT1766)

* [Transfer content from an iPhone, iPad, or iPod touch to a new device](http://support.apple.com/kb/ht2109)
