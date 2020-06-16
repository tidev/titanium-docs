---
title: Six Steps to Extensive Titanium App Build Automation
weight: '40'
---

# Six Steps to Extensive Titanium App Build Automation

Guest writer: [Yakup Kalin](https://www.appcelerator.com/blog/author/yakup-kalin/)

## Testing and launching is NOT time-consuming or complicated

Test and launch steps are extremely important but they can also be time consuming as well as complicated. Testing and launching doesn’t have to be this way. This document will provide a high-level overview of an advance mobile app build automation process examples that allows one to increase efficiency and prepare multiple tested builds created from analyzed and validated codebases.

## Mobile build automation, a high-level overview

Typically, a high-level view of a build automation process with Titanium apps can go like this (based on information provided by [ACA Mobile](https://mobile.aca-it.be/)):

1. Prepare codebase (Jenkins)

2. Unit testing (TiUnit)

3. Analyzing codebase (sonarqube)

4. UI testing (AWS)

5. Archiving and sharing artifacts (Sonatype Nexus)

6. Notifying people

## Preparing the codebase

The process starts with the build process being triggered (typically twice a day via automation) or manually by a developer. The automation server (in this case [Jenkins](https://jenkins.io/)) guides the process by triggering a Maven build. Backend Urls, app version, and analytics ID configured in the `config.json` are examples of environment properties being injected within the Titanium codebase.

## Unit testing with TiUnit

Next, the unit tests are triggered and automatically executed. While this document uses the [TiUnit](https://github.com/aca-mobile/ti-unit) service as a prime example for writing unit tests, you can use what serves you best. TiUnit is based on [Jasmine](https://jasmine.github.io/) that quickly allows for writing and executing tests without having to depend on the Titanium runtime.

## Analyzing the codebase quality

Once the unit tests are complete, a code coverage report is generated, [SonarQube](https://www.sonarqube.org/) code quality is also performed. SonarQube is a platform for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities.

## UI testing on real devices

Upon the successful tests and reports generated, the build scripts are triggered for the Titanium CLI to build the app (on the platform of your choosing). Once the builds are available, they are then inspected for UI testing by being pushed into simulators and physical devices. With limitations of some simulators and emulators (for example, no iOS camera), one can integrate with [Amazon Device Farm](https://aws.amazon.com/device-farm/?sc_channel=PS&sc_campaign=acquisition_US&sc_publisher=google&sc_medium=ACQ-P%7CPS-GO%7CBrand%7CSU%7CMobile%20Services%7CDevice%20Farm%7CUS%7CEN%7CText&sc_content=device_farm_e&sc_detail=amazon%20device%20farm&sc_category=device_farm&sc_segment=278498061481&sc_matchtype=e&sc_country=US&s_kwcid=AL!4422!3!278498061481!e!!g!!amazon%20device%20farm&ef_id=W37oyAAAAKXxP6o5:20180823170304:s) (ADF) to test the apps on real devices. ADF can execute UI tests and behaviour validation a wide range of Android devices (which emulators may miss).

For more information about AWS Device Farm integration, please visit [the AWS developer guide](https://docs.aws.amazon.com/devicefarm/latest/developerguide/continuous-integration-jenkins-plugin.html).

## Archiving and sharing the artifacts

Once the ADF tests returns with all the device logs, videos, and images, Jenkins can trigger a build script again to initiate the (test) launch. Based on the configuration, development, ad hoc, or release/production, builds are generated and signed. Upon signing, the builds (`.ipa` and/or `.apk`) files are pushed to an internal repository manager for archiving. [Nexus Repository Manager](https://www.sonatype.com/nexus-repository-sonatype) is one fine repository manager for this task.

Also, these builds can be automatically published to a distribution site for providing apps for users to beta test.

## Sending notifications

With everyone done, the development team is notified via email and/or automated IMs through your service(s) of choice.
