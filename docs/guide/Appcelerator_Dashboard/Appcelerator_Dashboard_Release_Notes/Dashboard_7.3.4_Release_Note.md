---
title: Dashboard 7.3.4 Release Note
weight: '10'
---

# Dashboard 7.3.4 Release Note

## Dashboard 7.3.4 - 29 May 2020

Dashboard 7.3.4 is a patch release, which includes an improvement and a bug fix.

## Improvements

* Improved password validation to disallow values containing personally identifiable information and implemented stronger password hashing based on [PBKDF2](https://www.pbkdf2.com/).

## Fixed Issues

* Fixed an issue where users may not be able to upload iOS push certificates for Mobile Backend Services datasources.

* Fixed an issue where Mobile Backend Services Database Storage and File Storage usage may show as zero GB on the organization's _Usage_ view.
