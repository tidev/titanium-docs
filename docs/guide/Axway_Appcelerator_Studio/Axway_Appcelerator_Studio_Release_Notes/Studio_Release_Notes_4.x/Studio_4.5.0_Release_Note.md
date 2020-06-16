---
title: Studio Release Notes
weight: '170'
---

# Studio Release Notes

Studio 4.5.0 is a minor release that includes new features, improvements, and bug fixes. See the [full list of issues address in Release 4.5.0](https://jira.appcelerator.org/browse/TISTUD-7991?filter=17280).

As of this release, Studio 4.4.x will not be supported six months from 4.5.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features

* Studio allows drag-and-drop CLI created projects (native, Arrow, and Module) into Appcelerator Studio Project Explorer.

* Studio now has a defined range of compatible CLI versions. If the CLI or Studio doesn't fall within the defined range of one another, the user will be prompted to update either Studio or the CLI accordingly.

* When a user logs in or out of Studio, the user will be reminded that they are in trial period. This is shown only for Developer Trial/free Plans.

## Improvements

* Studio now creates swift based watchOS2 projects with SDK 5.2 and higher.

* Improved startup performance by loading organizations in the background

* During Studio updates, Studio will verify the minimum required Node.js version is set to at least 0.12.7. If the minimum version is not found, a wizard will launch and help you to install the necessary version.

* When creating a new Alloy project, only the `appc new` call happens instead of calling that command plus `appc alloy new`

* For new workspaces, the console's output is no longer limited to 200,000 characters. Existing workspaces can set a new limit by clicking on **Window** > **Preferences** > **Run/Debug** > **Console**. There will a checkbox called "**Limit console output**" and a textfield where you can enter the buffer size (up to 1,000,000 characters).

* You can now abort Appcelerator CLI installs or upgrades via an alert window

* As Appc studio doesn't support JDK 1.8, during the installation phase if studio couldn't find JDK 1.7 in the system, it will install JDK 1.7 even though it has JDK 1.8.

* Instead of failing a Windows build, the user is now prompted for a GUID

* Previously bad installs of Appcelerator CLI no longer prevents future updates from failing

## Fixed Issues

* [TISTUD-7991](https://jira.appcelerator.org/browse/TISTUD-7991) - Creating an Arrow project with invalid characters in studio does not show any warning message

* [TISTUD-7982](https://jira.appcelerator.org/browse/TISTUD-7982) - Windows: Studio should validate the value for Windows Publisher ID before accepting it

* [TISTUD-7974](https://jira.appcelerator.org/browse/TISTUD-7974) - Org name is hidden below the users email

* [TISTUD-7971](https://jira.appcelerator.org/browse/TISTUD-7971) - Unable to publish arrow app

* [TISTUD-7961](https://jira.appcelerator.org/browse/TISTUD-7961) - Avoid force update if studio doesn't find required cli information in the sdk-info.json file

* [TISTUD-7956](https://jira.appcelerator.org/browse/TISTUD-7956) - Studio does not recognise orgs with CLI 5.2.0

* [TISTUD-7916](https://jira.appcelerator.org/browse/TISTUD-7916) - Can't login to Jira via Appcelerator Studio if username has space

* [TISTUD-7911](https://jira.appcelerator.org/browse/TISTUD-7911) - Remove multiple wizard pages for configuring provisioning profiles

* [TISTUD-7900](https://jira.appcelerator.org/browse/TISTUD-7900) - Invalid proxyServer set after launching Studio

* [TISTUD-7899](https://jira.appcelerator.org/browse/TISTUD-7899) - Remove hardcoded node version 4.2.1 from studio

* [TISTUD-7883](https://jira.appcelerator.org/browse/TISTUD-7883) - Install Titanium SDK - List of SDK's empty

* [TISTUD-7879](https://jira.appcelerator.org/browse/TISTUD-7879) - JIRA ticket creation will fail from studio if we select the severity to 'None'

* [TISTUD-7871](https://jira.appcelerator.org/browse/TISTUD-7871) - When you update Studio, the admin dialog to enter admin password appears

* [TISTUD-7822](https://jira.appcelerator.org/browse/TISTUD-7822) - Studio freezes for a while when we open a tiapp.xml file where the project org does not belong to the current logged in user

* [TISTUD-7783](https://jira.appcelerator.org/browse/TISTUD-7783) - When you create new project, the App Id field and URL field are in the reverse order

* [TISTUD-7769](https://jira.appcelerator.org/browse/TISTUD-7769) - On Login splash screen "Remember my Email Address" label foreground color looks black on windows and white on mac os

* [TISTUD-7741](https://jira.appcelerator.org/browse/TISTUD-7741) - Add prominent display of "what you like/what can be better" to solicit feedback

* [TISTUD-7740](https://jira.appcelerator.org/browse/TISTUD-7740) - Unable to submit a JIRA ticket via Studio as "versions" is not defined

* [TISTUD-7715](https://jira.appcelerator.org/browse/TISTUD-7715) - TiApp Editor doesn't update when you change <extensions>

* [TISTUD-7713](https://jira.appcelerator.org/browse/TISTUD-7713) - TiApp: Using the <windows> tag in tiapp.xml shows an invalid content error

* [TISTUD-7639](https://jira.appcelerator.org/browse/TISTUD-7639) - Clicking on the "Arrow Builder" link in the release notes take you to http://www.appcelerator.com/product/

* [TISTUD-7637](https://jira.appcelerator.org/browse/TISTUD-7637) - Liveview: --liveview flag is not passed to the CLI when building for Windows Platform

* [TISTUD-7604](https://jira.appcelerator.org/browse/TISTUD-7604) - Missing Windows Store Certificate in Preferences dialog

* [TISTUD-7552](https://jira.appcelerator.org/browse/TISTUD-7552) - Importing an existing Alloy (non-Studio) project does not add Alloy nature

* [TISTUD-7538](https://jira.appcelerator.org/browse/TISTUD-7538) - Default URL for tiapp.xml valid in wizard but invalid in editor

* [TISTUD-7508](https://jira.appcelerator.org/browse/TISTUD-7508) - When unpublishing an Arrow application, the toast notification displays the app name prefixed with 'P/'

* [TISTUD-7484](https://jira.appcelerator.org/browse/TISTUD-7484) - Dashboard in offline mode:Clicking refresh button from dashboard launches another browser with name"Web Browser"

* [TISTUD-7149](https://jira.appcelerator.org/browse/TISTUD-7149) - Windows: Cryptic error message in tiapp.xml editor that needs to be reworded

* [TISTUD-6755](https://jira.appcelerator.org/browse/TISTUD-6755) - Appcelerator Studio: Run configurations display incorrectly
