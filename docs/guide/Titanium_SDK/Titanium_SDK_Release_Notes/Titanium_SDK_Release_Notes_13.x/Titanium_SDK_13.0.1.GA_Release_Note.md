## About this release

Titanium SDK 13.0.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (13.0.0) is no longer supported.

## Community Credits

* Michael Gangolf
  * new WebView property 'multipleWindows' ([4d78dcc](https://github.com/tidev/titanium_mobile/commit/4d78dcc661aaa1b4db9a4883d9be702e0fc99a65))
  * update iOS workflow ([4f99762](https://github.com/tidev/titanium_mobile/commit/4f99762ec2f286cb0f17e6c9ad7f228d35546c29))

* Prashant Saini
  * locale fixes and improvements ([58dea74](https://github.com/tidev/titanium_mobile/commit/58dea743851ad3e82a4b9e66cb3560c7b4e28842))
  * fix ANR caused by the `getNumberOfCameras` method ([4f85145](https://github.com/tidev/titanium_mobile/commit/4f85145594c584ca5dcb7436fce50e3d00feb487))

* Hans Knöchel
  * properly set Titanium SDK version for runtime usage ([3c56aa6](https://github.com/tidev/titanium_mobile/commit/3c56aa64288fd1b6f628a774ffff169bd193e59c))
  * fix ButtonConfiguration API from throwing an error on device ([7ddf0f5](https://github.com/tidev/titanium_mobile/commit/7ddf0f53ffb793342497d96cd972f1ee108aa8ff))

* Hendrik Bugdoll
  * TabBar appearance issue on iPhone landscape & iPad ([2e3f04e](https://github.com/tidev/titanium_mobile/commit/2e3f04edccdb60dadccef82eafe0b2988ddb2aac))
  * not conform to protocol warnings ([7100588](https://github.com/tidev/titanium_mobile/commit/7100588f1aeb5f0507de45b1a4e87f024b7243d2))

* narbs
  * ensure eventStoreChanged notification is not over-registered ([83704bd](https://github.com/tidev/titanium_mobile/commit/83704bd7ce8f1f36417916957a087027feca4104))
  * patch ActivityKit so it works with catalyst (#14280) ([be918dd](https://github.com/tidev/titanium_mobile/commit/be918ddb39c5a610d475cb23fb41544eabe6a5c7))

## Bug Fixes

### Android platform

* fix ANR caused by the `getNumberOfCameras` method ([4f85145](https://github.com/tidev/titanium_mobile/commit/4f85145594c584ca5dcb7436fce50e3d00feb487))

### Multiple platforms

* ensure eventStoreChanged notification is not over-registered ([83704bd](https://github.com/tidev/titanium_mobile/commit/83704bd7ce8f1f36417916957a087027feca4104))
* patch ActivityKit so it works with catalyst (#14280) ([be918dd](https://github.com/tidev/titanium_mobile/commit/be918ddb39c5a610d475cb23fb41544eabe6a5c7))
* properly set Titanium SDK version for runtime usage ([3c56aa6](https://github.com/tidev/titanium_mobile/commit/3c56aa64288fd1b6f628a774ffff169bd193e59c))

### iOS platform

* fix ButtonConfiguration API from throwing an error on device ([7ddf0f5](https://github.com/tidev/titanium_mobile/commit/7ddf0f53ffb793342497d96cd972f1ee108aa8ff))
* not conform to protocol warnings ([7100588](https://github.com/tidev/titanium_mobile/commit/7100588f1aeb5f0507de45b1a4e87f024b7243d2))
* TabBar appearance issue on iPhone landscape & iPad ([2e3f04e](https://github.com/tidev/titanium_mobile/commit/2e3f04edccdb60dadccef82eafe0b2988ddb2aac))

## Features

### Android platform

* locale fixes and improvements ([58dea74](https://github.com/tidev/titanium_mobile/commit/58dea743851ad3e82a4b9e66cb3560c7b4e28842))
* new WebView property 'multipleWindows' ([4d78dcc](https://github.com/tidev/titanium_mobile/commit/4d78dcc661aaa1b4db9a4883d9be702e0fc99a65))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 14.0.0 | 15.0.0 |
| ti.map | 5.7.0 | 7.3.1 |
| ti.webdialog | 2.5.0 | 3.0.2 |
| ti.playservices | 18.6.0 | n/a |
| ti.identity | 3.2.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.9 | 7.0.9 |