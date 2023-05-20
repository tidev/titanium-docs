---
title: Titanium SDK 12.1.0.GA - 24 April 2023
weight: '20'
---

# Titanium SDK 12.1.0.GA Release Note

## Titanium SDK 12.1.0.GA - 24 April 2023

## About this release

Titanium SDK 12.1.0 is a minor release of the SDK, adding new features and addressing high-priority issues from previous releases.

- Support for Node.js 19
- Enhanced support for Android 13
- Improved macOS support
- More parity APIs between iOS and Android

## Community Credits

* Hans Knöchel
  * move invocation ([4bcdca9](https://github.com/tidev/titanium-sdk/commit/4bcdca9a64371dfe7bce98e26d800365b8a6b418))
  * only show popover presentation style if popover view exists ([74f9296](https://github.com/tidev/titanium-sdk/commit/74f92967fb4b627ebaedb1b2bcc76fe552d499e9))
  * only attempt to create path if not exists ([48a6342](https://github.com/tidev/titanium-sdk/commit/48a6342a61d8a7756272c30c59e8e386edceebaa))
  * fix production build error in Xcode 14.3 ([f4263be](https://github.com/tidev/titanium-sdk/commit/f4263beedabf17c76490ae063e14ff90593e958e))
  * add changelog ([f944119](https://github.com/tidev/titanium-sdk/commit/f944119f6eed477600ea529f4298c18ab37fbf1e))
  * fix target relation ([34da923](https://github.com/tidev/titanium-sdk/commit/34da92318a1ca5f775f185b43c1b9c7e29fa4c6e))
  * fix bottom resizing ([2d5d7f8](https://github.com/tidev/titanium-sdk/commit/2d5d7f8bc3a4f9ad22828c7bf56a2bf81dafa392))
  * add “Optimize for Mac” option for macOS catalyst builds, add tooltip API ([56d7661](https://github.com/tidev/titanium-sdk/commit/56d76614c77e7343e3c5b73b8bc56436f98f616e))
  * be able to get a list of available system font families ([a3c4f26](https://github.com/tidev/titanium-sdk/commit/a3c4f267076838292089080e0027375e86b10ca3))
  * add tabBarVisible API ([9ee0d42](https://github.com/tidev/titanium-sdk/commit/9ee0d42044cf1858dd72521a374dc336eb046246))
  * update some build steps to use Xcode 14.x ([6d24f0a](https://github.com/tidev/titanium-sdk/commit/6d24f0ac90f36339094c274a3e3f3f5d6bec1de8))
  * fix macOS build ([cf4b370](https://github.com/tidev/titanium-sdk/commit/cf4b370dec4986dea677d255ddfbbfa9445cb75f))
  * use core.js 3.27.4 ([86180ae](https://github.com/tidev/titanium-sdk/commit/86180aee825349927acf4d68f7e019bd2ac4c96e))
  * only apply custom String.format for non-64 Bit Simulators ([512c034](https://github.com/tidev/titanium-sdk/commit/512c0344189d791c502c09c7d7dd73db1345df61))
  * read status bar height programmatically ([22d26f8](https://github.com/tidev/titanium-sdk/commit/22d26f83573439994cb172518c14f50e23302ef6))
  * fix border refresh issue ([931ce38](https://github.com/tidev/titanium-sdk/commit/931ce386cab755b330cd4b1c83b648dba1415206))
  * fix crash on soft-restart ([1128407](https://github.com/tidev/titanium-sdk/commit/11284074a378149309375b1b880eaadb9ec7b9e1))
  * fix error handling ([057a2f0](https://github.com/tidev/titanium-sdk/commit/057a2f048600f5959046b6075206caf378226dd5))
  * bump master to 12.1.0 ([70f1d97](https://github.com/tidev/titanium-sdk/commit/70f1d9727fd8209c006a55f78a7dd702ffe030b7))

* Michael Gangolf
  * hide error for empty http decode charset ([b45b6d4](https://github.com/tidev/titanium-sdk/commit/b45b6d44b36df9a0e16711dc2b092bba332b62a3))
  * ioslib update ([2df423c](https://github.com/tidev/titanium-sdk/commit/2df423c8a1e1d39d03dc2ed815aee3af00536b64))
  * fix Android level in gallery permission ([0932b05](https://github.com/tidev/titanium-sdk/commit/0932b05ca5473c816917755f7b7433a987011c6f))
  * remove obsolete Android tools folder ([344850d](https://github.com/tidev/titanium-sdk/commit/344850d91200d3f9aff47c60e3053a0910876d00))
  * animated parameter for disableTabNavigation ([fbc8c7e](https://github.com/tidev/titanium-sdk/commit/fbc8c7e17b844796c85b43ef29d1fe08d2b04fae))
  * fix packages ([bf0d3f2](https://github.com/tidev/titanium-sdk/commit/bf0d3f2b706d69b45e94b68076bd8714890e26bb))
  * get notificationChannels ([9be6c33](https://github.com/tidev/titanium-sdk/commit/9be6c33d0047cb9d2b0b86c07071d1c4b86d37de))
  * add links to selectionStyle constants ([ee64cd2](https://github.com/tidev/titanium-sdk/commit/ee64cd2d50add46b16c5de9e20607719cd35fa39))
  * revert borderWrapperView code ([2a23d82](https://github.com/tidev/titanium-sdk/commit/2a23d82800108840c1672c3c62d5e50be8c8832a))
  * use example platform folder for module builds ([b95abde](https://github.com/tidev/titanium-sdk/commit/b95abded468a2ec25a5b7d71780150cea77aa0e2))
  * add stopAnimation() to View ([0d4829b](https://github.com/tidev/titanium-sdk/commit/0d4829b98dd58b86b51f3369d108c9c4f8bd7980))
  * collapseToolbar Alloy fix ([3c964a0](https://github.com/tidev/titanium-sdk/commit/3c964a0fd6a64f9d8c9e5072d1e6317554d36e5e))
  * null check for registerPush callbacks ([72a03e4](https://github.com/tidev/titanium-sdk/commit/72a03e4569bd04515aeeaf682e1eb5fb507a994d))
  * code optimizations ([64ac40c](https://github.com/tidev/titanium-sdk/commit/64ac40cd613ccea5ccc6d50ed55dd982fe4bfa30))
  * tableView optimizations ([57bcbf9](https://github.com/tidev/titanium-sdk/commit/57bcbf95a5a8bc6f24ea5fd02252ccfefab9d247))
  * module update ([8a36570](https://github.com/tidev/titanium-sdk/commit/8a36570af01960804eb7d6c616f0b6ff300fd59a))
  * initial gesture orientation value ([1dac79d](https://github.com/tidev/titanium-sdk/commit/1dac79d74dfce6fcd4884df790797dea9c358cf7))
  * fullscreen mode ([e6e043f](https://github.com/tidev/titanium-sdk/commit/e6e043f7d505667772990a56ef7a196277eb06c6))
  * adjust Android 13 requestPhotoGalleryPermissions ([3b7ec5c](https://github.com/tidev/titanium-sdk/commit/3b7ec5c437e8f6604e7a31a3cbe28eb59bce2779))
  * extend addScriptMessageHandler example ([be75843](https://github.com/tidev/titanium-sdk/commit/be7584385295503ded62aed96ea817aa48c26eba))
  * link to AppleWWDRCA ([5dcb217](https://github.com/tidev/titanium-sdk/commit/5dcb21756a25bafb01e75b25763c5e944f0ca451))
  * imageAsResized to squared images ([c2fa9f7](https://github.com/tidev/titanium-sdk/commit/c2fa9f729a4f217448e50f3f47f8c68b764ea8a3))
  * parity for WebView.createPDF() ([c23e88f](https://github.com/tidev/titanium-sdk/commit/c23e88f9430d4be8a949838d4943ec18de6cd279))
  * add FloatingActionButton ([a24399c](https://github.com/tidev/titanium-sdk/commit/a24399ca04ff0ab2c0bb540534fe152f2f405c3f))
  * videoPlayer autoHide ([8b37384](https://github.com/tidev/titanium-sdk/commit/8b37384c7a2ed3901d3aef5b81b0f4a6bbf33615))
  * collapseToolbar layout ([e144d61](https://github.com/tidev/titanium-sdk/commit/e144d61676fcd95b5954fc62fcc8082f2ff39ca5))
  * correction for the cutout properties ([8825cd4](https://github.com/tidev/titanium-sdk/commit/8825cd4cd9a14757b73d72ed02b7e92652503eb4))
  * statusBarHeight parity and cutoutSize ([82e07f7](https://github.com/tidev/titanium-sdk/commit/82e07f79b90bc5eca04887effcb3aee725e3bcad))
  * change deprecated view.setBackgroundDrawable ([05cbfd4](https://github.com/tidev/titanium-sdk/commit/05cbfd4c18bd831483c5e7738d8bd17761a8050b))
  * add SOFT_INPUT_ADJUST_NOTHING ([fc1e2e1](https://github.com/tidev/titanium-sdk/commit/fc1e2e108cc66ef38268492e1c065aea80483f2d))
  * info about appBadge ([d8e3f78](https://github.com/tidev/titanium-sdk/commit/d8e3f78535d515d09389918599fa829a7cf10cce))
  * fix image link in docs ([74b55e6](https://github.com/tidev/titanium-sdk/commit/74b55e6284d0994cfe0e9dd2e8fb44998320b23f))
  * fix duplicate lifecycle issue ([881552f](https://github.com/tidev/titanium-sdk/commit/881552f15e7e01b490e2641d66d8f0adbfbee679))
  * readme ([258966d](https://github.com/tidev/titanium-sdk/commit/258966de4c667037028ce479926b6633eea28217))
  * toolbar tintColor ([c7474f7](https://github.com/tidev/titanium-sdk/commit/c7474f7789a47ad56310eb097b4c69f95a0d6dee))
  * code optimizations ([a16d76c](https://github.com/tidev/titanium-sdk/commit/a16d76c767025a67a7375edd9da70a4d99edb597))
  * optimize deprecation warning ([aa43de9](https://github.com/tidev/titanium-sdk/commit/aa43de97163e8b2edf773b540fc28a39025c1319))
  * ioslib package update ([40db379](https://github.com/tidev/titanium-sdk/commit/40db379f7bccd7a6b3769126bb751ba1f96c6883))
  * gitignore ([41fbc08](https://github.com/tidev/titanium-sdk/commit/41fbc0812b4d3b24706f0aeafdbb9fd55591c80c))
  * npm modules ([463038c](https://github.com/tidev/titanium-sdk/commit/463038c1f9e1e777e8817a2dcb74988550f351a8))
  * update logo ([ed5c8c7](https://github.com/tidev/titanium-sdk/commit/ed5c8c7fba497dc915abcee723ad5ed1c7a833fb))
  * use SVG logo ([33a7fbd](https://github.com/tidev/titanium-sdk/commit/33a7fbd7038e350bf42faeab638f40c2100e8e71))
  * gradle warning log ([a48c173](https://github.com/tidev/titanium-sdk/commit/a48c173833f37d1dcce5a8432660986788250244))
  * liveview, titanium package update ([848028b](https://github.com/tidev/titanium-sdk/commit/848028b2814876ad618f2afcbe6f3b510b88a556))
  * fix material version ([60fe1a4](https://github.com/tidev/titanium-sdk/commit/60fe1a4b6f03ecd53b0132fee959e7be46743acd))
  * update node-appc ([9776ed8](https://github.com/tidev/titanium-sdk/commit/9776ed8a7dfb633c4852a8d67ddbf123a698245c))
  * update libraries ([2f4cd82](https://github.com/tidev/titanium-sdk/commit/2f4cd82ae6a895cc711e2856ed4af3c8c4601ce0))
  * gitignore update for Android Studio ([9aabe8c](https://github.com/tidev/titanium-sdk/commit/9aabe8c5639040a610ce02388c602522d8567d0a))

* Marc Bender
  * build module platform/xcframwork symbolic links ([9972afc](https://github.com/tidev/titanium-sdk/commit/9972afcbcc4f75db3ad206ac6ce5d628ae4c89ec))

* markive
  * android Ti.UI.WebView support allowFileAccess ([29ed703](https://github.com/tidev/titanium-sdk/commit/29ed703b1e6be15c654c53335479696ac9488f65))

* Rohid JETHA
  * Update AudioRecorder.yml (#13713) ([bfb8fb7](https://github.com/tidev/titanium-sdk/commit/bfb8fb71c1a11bb20b52dbc8db967b160727e2c1))

* Matt Delmarter
  * allow images in ListItem editActions ([68aa61f](https://github.com/tidev/titanium-sdk/commit/68aa61fbfccbb4ef05ec8423898117479a7c605b))

* Jan Vennemann
  * remember proxies from section data items ([e6948e0](https://github.com/tidev/titanium-sdk/commit/e6948e04ed0782487749b6aec33b5e608531f9a9))

## Bug Fixes

### Android platform

* change deprecated view.setBackgroundDrawable ([05cbfd4](https://github.com/tidev/titanium-sdk/commit/05cbfd4c18bd831483c5e7738d8bd17761a8050b))
* code optimizations ([64ac40c](https://github.com/tidev/titanium-sdk/commit/64ac40cd613ccea5ccc6d50ed55dd982fe4bfa30))
* code optimizations ([a16d76c](https://github.com/tidev/titanium-sdk/commit/a16d76c767025a67a7375edd9da70a4d99edb597))
* collapseToolbar Alloy fix ([3c964a0](https://github.com/tidev/titanium-sdk/commit/3c964a0fd6a64f9d8c9e5072d1e6317554d36e5e))
* fix Android level in gallery permission ([0932b05](https://github.com/tidev/titanium-sdk/commit/0932b05ca5473c816917755f7b7433a987011c6f))
* fix bottom resizing ([2d5d7f8](https://github.com/tidev/titanium-sdk/commit/2d5d7f8bc3a4f9ad22828c7bf56a2bf81dafa392))
* fix duplicate lifecycle issue ([881552f](https://github.com/tidev/titanium-sdk/commit/881552f15e7e01b490e2641d66d8f0adbfbee679))
* fullscreen mode ([e6e043f](https://github.com/tidev/titanium-sdk/commit/e6e043f7d505667772990a56ef7a196277eb06c6))
* gradle warning log ([baecb61](https://github.com/tidev/titanium-sdk/commit/baecb6155de7b340d972f6e674a1f48c4bddb891))
* gradle warning log ([a48c173](https://github.com/tidev/titanium-sdk/commit/a48c173833f37d1dcce5a8432660986788250244))
* hide error for empty http decode charset ([b45b6d4](https://github.com/tidev/titanium-sdk/commit/b45b6d44b36df9a0e16711dc2b092bba332b62a3))
* imageAsResized to squared images ([c2fa9f7](https://github.com/tidev/titanium-sdk/commit/c2fa9f729a4f217448e50f3f47f8c68b764ea8a3))
* initial gesture orientation value ([1dac79d](https://github.com/tidev/titanium-sdk/commit/1dac79d74dfce6fcd4884df790797dea9c358cf7))
* null check for registerPush callbacks ([72a03e4](https://github.com/tidev/titanium-sdk/commit/72a03e4569bd04515aeeaf682e1eb5fb507a994d))
* revert borderWrapperView code ([2a23d82](https://github.com/tidev/titanium-sdk/commit/2a23d82800108840c1672c3c62d5e50be8c8832a))
* tableView optimizations ([57bcbf9](https://github.com/tidev/titanium-sdk/commit/57bcbf95a5a8bc6f24ea5fd02252ccfefab9d247))

### Multiple platforms

* correction for the cutout properties ([8825cd4](https://github.com/tidev/titanium-sdk/commit/8825cd4cd9a14757b73d72ed02b7e92652503eb4))
* fix target relation ([34da923](https://github.com/tidev/titanium-sdk/commit/34da92318a1ca5f775f185b43c1b9c7e29fa4c6e))
* support passing target and device id to the module build ([3838f7a](https://github.com/tidev/titanium-sdk/commit/3838f7a49c814c96d0832aac15ca16aca87f821e))
* only apply custom String.format for non-64 Bit Simulators ([512c034](https://github.com/tidev/titanium-sdk/commit/512c0344189d791c502c09c7d7dd73db1345df61))
* only attempt to create path if not exists ([48a6342](https://github.com/tidev/titanium-sdk/commit/48a6342a61d8a7756272c30c59e8e386edceebaa))
* remember proxies from section data items ([e6948e0](https://github.com/tidev/titanium-sdk/commit/e6948e04ed0782487749b6aec33b5e608531f9a9))

### iOS platform

* build module platform/xcframwork symbolic links ([9972afc](https://github.com/tidev/titanium-sdk/commit/9972afcbcc4f75db3ad206ac6ce5d628ae4c89ec))
* enable JSContext to be inspectable ([9a6f99a](https://github.com/tidev/titanium-sdk/commit/9a6f99a67fa4a7c2c69244434f621c806a31a80d))
* fix border refresh issue ([931ce38](https://github.com/tidev/titanium-sdk/commit/931ce386cab755b330cd4b1c83b648dba1415206))
* fix crash on soft-restart ([1128407](https://github.com/tidev/titanium-sdk/commit/11284074a378149309375b1b880eaadb9ec7b9e1))
* fix error handling ([057a2f0](https://github.com/tidev/titanium-sdk/commit/057a2f048600f5959046b6075206caf378226dd5))
* fix macOS build ([cf4b370](https://github.com/tidev/titanium-sdk/commit/cf4b370dec4986dea677d255ddfbbfa9445cb75f))
* fix production build error in Xcode 14.3 ([f4263be](https://github.com/tidev/titanium-sdk/commit/f4263beedabf17c76490ae063e14ff90593e958e))
* link to AppleWWDRCA ([5dcb217](https://github.com/tidev/titanium-sdk/commit/5dcb21756a25bafb01e75b25763c5e944f0ca451))
* only show popover presentation style if popover view exists ([74f9296](https://github.com/tidev/titanium-sdk/commit/74f92967fb4b627ebaedb1b2bcc76fe552d499e9))
* optimize deprecation warning ([aa43de9](https://github.com/tidev/titanium-sdk/commit/aa43de97163e8b2edf773b540fc28a39025c1319))

## Features

### Multiple platforms

* android Ti.UI.WebView support allowFileAccess ([29ed703](https://github.com/tidev/titanium-sdk/commit/29ed703b1e6be15c654c53335479696ac9488f65))
* add tabBarVisible API ([9ee0d42](https://github.com/tidev/titanium-sdk/commit/9ee0d42044cf1858dd72521a374dc336eb046246))

### Android platform

* add FloatingActionButton ([a24399c](https://github.com/tidev/titanium-sdk/commit/a24399ca04ff0ab2c0bb540534fe152f2f405c3f))
* add SOFT_INPUT_ADJUST_NOTHING ([fc1e2e1](https://github.com/tidev/titanium-sdk/commit/fc1e2e108cc66ef38268492e1c065aea80483f2d))
* add stopAnimation() to View ([0d4829b](https://github.com/tidev/titanium-sdk/commit/0d4829b98dd58b86b51f3369d108c9c4f8bd7980))
* adjust Android 13 requestPhotoGalleryPermissions ([3b7ec5c](https://github.com/tidev/titanium-sdk/commit/3b7ec5c437e8f6604e7a31a3cbe28eb59bce2779))
* animated parameter for disableTabNavigation ([fbc8c7e](https://github.com/tidev/titanium-sdk/commit/fbc8c7e17b844796c85b43ef29d1fe08d2b04fae))
* collapseToolbar layout ([e144d61](https://github.com/tidev/titanium-sdk/commit/e144d61676fcd95b5954fc62fcc8082f2ff39ca5))
* get notificationChannels ([9be6c33](https://github.com/tidev/titanium-sdk/commit/9be6c33d0047cb9d2b0b86c07071d1c4b86d37de))
* parity for WebView.createPDF() ([c23e88f](https://github.com/tidev/titanium-sdk/commit/c23e88f9430d4be8a949838d4943ec18de6cd279))
* statusBarHeight parity and cutoutSize ([82e07f7](https://github.com/tidev/titanium-sdk/commit/82e07f79b90bc5eca04887effcb3aee725e3bcad))
* toolbar tintColor ([c7474f7](https://github.com/tidev/titanium-sdk/commit/c7474f7789a47ad56310eb097b4c69f95a0d6dee))
* update libraries ([2f4cd82](https://github.com/tidev/titanium-sdk/commit/2f4cd82ae6a895cc711e2856ed4af3c8c4601ce0))
* use example platform folder for module builds ([b95abde](https://github.com/tidev/titanium-sdk/commit/b95abded468a2ec25a5b7d71780150cea77aa0e2))
* videoPlayer autoHide ([8b37384](https://github.com/tidev/titanium-sdk/commit/8b37384c7a2ed3901d3aef5b81b0f4a6bbf33615))

### iOS platform

* allow images in ListItem editActions ([68aa61f](https://github.com/tidev/titanium-sdk/commit/68aa61fbfccbb4ef05ec8423898117479a7c605b))
* be able to get a list of available system font families ([a3c4f26](https://github.com/tidev/titanium-sdk/commit/a3c4f267076838292089080e0027375e86b10ca3))
* read status bar height programmatically ([22d26f8](https://github.com/tidev/titanium-sdk/commit/22d26f83573439994cb172518c14f50e23302ef6))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 12.0.0 | 13.0.0 |
| ti.map | 5.5.1 | 7.0.0 |
| ti.webdialog | 2.2.0 | 3.0.2 |
| ti.playservices | 18.2.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.4 | 7.0.4 |
