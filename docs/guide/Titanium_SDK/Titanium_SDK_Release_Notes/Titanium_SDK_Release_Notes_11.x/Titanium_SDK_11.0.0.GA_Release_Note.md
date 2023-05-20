---
title: Titanium SDK 11.0.0.GA - 01 July 2022
weight: '20' 
---

# Titanium SDK 11.0.0.GA Release Note

## Titanium SDK 11.0.0.GA - 01 July 2022

## About this release

Titanium SDK 11.0.0 is a major release of the SDK, under new leadership of TiDev, Inc and addressing high-priority issues from previous releases.

## Community Credits

* Sebastian Klaus
  * more copyrights changed in java files ([4e806df](https://github.com/tidev/titanium-sdk/commit/4e806df95de7f1c26045fbaf9b37b2b1b1fce9ad))
  * copyright in java files ([e4b50ad](https://github.com/tidev/titanium-sdk/commit/e4b50ad971b0b4741eb79eefb33bc284d670deb7))
  * fixed legal link (#13441) ([11af5ff](https://github.com/tidev/titanium-sdk/commit/11af5ff02a9fd6d71eb3dc05fb1bba34bd73fcbf))
  * replace tislack.org with slack.tidev.io ([81d3f4a](https://github.com/tidev/titanium-sdk/commit/81d3f4a1bfa69a5367b8cf05af40b608b62ebe3b))
  * Fix legal information and copyrights (#13436) ([27cbe93](https://github.com/tidev/titanium-sdk/commit/27cbe93e5ab596f0864bdc390f2297f2cb492aaf))
  * Create FUNDING.yml ([d296e02](https://github.com/tidev/titanium-sdk/commit/d296e02477900f56f722bcd4418727534606de86))
  * removed semicolon as it breaks the app if the example is used ([2800aee](https://github.com/tidev/titanium-sdk/commit/2800aee07ad3f0a2f14a3edbec8321d6a3deae6b))
  * Replace appcelerator relations (#13347) ([1132743](https://github.com/tidev/titanium-sdk/commit/11327431ab8ffe9c6693b0ee4ef40e00130e1608))
  * removed appcelerator from templates and extended templates (#13315) ([cc50eff](https://github.com/tidev/titanium-sdk/commit/cc50eff370ead285c601a0abe131ba1389af2260))

* Bruno Augier
  * for module build enable target & device-id command line parameters for the example app ([e915ef6](https://github.com/tidev/titanium-sdk/commit/e915ef6352782096d3c75c294a54a68720ae4c1f))
  * fix windows build of Titanium SDK - titanium_mobile ([6566453](https://github.com/tidev/titanium-sdk/commit/656645388d6d7d3601751a5cf11ea6bdd3939285))

* Michael Gangolf
  * update gradle to 7.4.2 ([122fa59](https://github.com/tidev/titanium-sdk/commit/122fa59b761fc19ed8513b208394d2b1f1c39f95))
  * update included module versions ([49657d9](https://github.com/tidev/titanium-sdk/commit/49657d9e3f11fba23c4730a707bcb0c98b3615c4))
  * revert to V8 8 ([1e14156](https://github.com/tidev/titanium-sdk/commit/1e14156cc67aa6e132afca3f85380ae50ab3c848))
  * remove deprecated parameter from example ([6d84ca9](https://github.com/tidev/titanium-sdk/commit/6d84ca9fe8674102174870d6862b1cf45975b448))
  * change xmlns ([32c628e](https://github.com/tidev/titanium-sdk/commit/32c628e3d3c742aaddd9d8812ffc4dda056bc624))
  * change version number ([b98c67e](https://github.com/tidev/titanium-sdk/commit/b98c67e7f0a735ba1d21be24fc1ed2ec7258a6a3))
  * fix restart activity ([0205aa7](https://github.com/tidev/titanium-sdk/commit/0205aa7ba321d8fe27cc5b0dcbfcdd759714a0f4))
  * expose base context ([5618220](https://github.com/tidev/titanium-sdk/commit/5618220a521886a76149c38f6d74b8c15fe7ac17))
  * add other skip-zip npm scripts ([fbbc258](https://github.com/tidev/titanium-sdk/commit/fbbc258894ee643164bf2933403d430da652fb56))
  * add fixedSize to RecyclerViews ([d057eed](https://github.com/tidev/titanium-sdk/commit/d057eed0d88458a60b6557478e51ea38a3dd4bd3))
  * add defaultCalendar to Ti.Calendar ([0d20ec0](https://github.com/tidev/titanium-sdk/commit/0d20ec02995f09b00e0e1cf86fd9fd51fb78473b))
  * fix clipboard test ([6289860](https://github.com/tidev/titanium-sdk/commit/62898605bb5b0319eb2ed3997dedead8cbeac56a))
  * update internal libraries ([1325f1a](https://github.com/tidev/titanium-sdk/commit/1325f1ab4732993899380897b220e747dbeff21c))
  * add default semantic.colors.json ([498b596](https://github.com/tidev/titanium-sdk/commit/498b59625a75b6336b2a4ee411b2d3a45d6129f3))
  * issue templates ([226f87d](https://github.com/tidev/titanium-sdk/commit/226f87dee02f86935adf925588243bf85d5eb50b))
  * move to getter/setter ([734c41b](https://github.com/tidev/titanium-sdk/commit/734c41b56cd63010b269ef6b6e6247da2f9d656c))
  * parity for optionbar index ([af7371b](https://github.com/tidev/titanium-sdk/commit/af7371b8671e30bd449c311ea3e101c57575f1f9))
  * remote webview, fix two errors ([0372c45](https://github.com/tidev/titanium-sdk/commit/0372c459fca3605011a08990f76db1a2995dff8e))
  * color regex for rgba() ([07b108a](https://github.com/tidev/titanium-sdk/commit/07b108a5f38695bef850ce4cc77094a142dc3ac5))
  * roundBorder fix for Android 12+ ([7628a5c](https://github.com/tidev/titanium-sdk/commit/7628a5c42d3e5b82320d518e7c029c09a42f7c3c))
  * sync tab and actionbar title ([6972587](https://github.com/tidev/titanium-sdk/commit/6972587807632d95e3c40debda31173154cead04))
  * Update documentation TabGroup/VideoPlayer/TableViewRow ([5068dc1](https://github.com/tidev/titanium-sdk/commit/5068dc1d89cff65af009490e6665ab84dc4acec9))
  * remove Ti.Analytics (iOS / Android) ([3e54924](https://github.com/tidev/titanium-sdk/commit/3e549242e8421601dc5f98bf68cb16e723bf7d27))
  * fix static links ([ae68972](https://github.com/tidev/titanium-sdk/commit/ae6897296355bcd56bfb7586975e368212137902))
  * tabgroup/scrollview null pointer ([c706bea](https://github.com/tidev/titanium-sdk/commit/c706bea567d683d318fe179c97ba33cb20809ab4))
  * update documentation links in readme ([79a94f7](https://github.com/tidev/titanium-sdk/commit/79a94f746b4971af4b10416761b779c8a431ed04))

* Hans Knöchel
  * fix adaptive background gradients ([6435c02](https://github.com/tidev/titanium-sdk/commit/6435c0241a43de74d63e5b48943653cd20b378e4))
  * document iPadOS behavior ([08450e3](https://github.com/tidev/titanium-sdk/commit/08450e3ecf9cdf9f15db3a05f50a30b57c8a3a9f))
  * properly expose precompile flags for Ti.Media.queryMusicLibrary API ([74a6e3c](https://github.com/tidev/titanium-sdk/commit/74a6e3c5ffdc689ca3d9451ecf4aa27ed5b82654))
  * fix top padding of dim-view in Ti.UI.TableView's search-bar  ([c0c2dcc](https://github.com/tidev/titanium-sdk/commit/c0c2dccf8f74e11464876c189c15431c7e4cb238))
  * fix drag and drop issues ([cffee52](https://github.com/tidev/titanium-sdk/commit/cffee52517ffc77f1362927c11f352666edc124c))
  * remove falsy error log ([d9ef416](https://github.com/tidev/titanium-sdk/commit/d9ef41613f896926eec931b3d00f8a4feca72111))
  * apply “overrideUserInterfaceStyle” to main app window ([07c7422](https://github.com/tidev/titanium-sdk/commit/07c7422be3b0cc6cc97c650ab62af0c286293578))
  * Revert "Revert "fix(webview): authenticationMethod NSURLAuthenticationMethodClientCertificate not handled correctly (#13352)" (#13354)" (#13367) ([2e8fa00](https://github.com/tidev/titanium-sdk/commit/2e8fa00f24f4c18e766f10eaee3d9506b3ac57a3))
  * Revert "fix(webview): authenticationMethod NSURLAuthenticationMethodClientCertificate not handled correctly (#13352)" (#13354) ([827752f](https://github.com/tidev/titanium-sdk/commit/827752f46a25209c58e167e69a37947040ec0c6b))
  * support flexible border radius in card view ([a1c8edf](https://github.com/tidev/titanium-sdk/commit/a1c8edf55938186c8b9e500e72e264533a1e0974))
  * fix build deps ([dbb7177](https://github.com/tidev/titanium-sdk/commit/dbb7177498d434983eee0d720cac8a31238f6632))
  * redraw CGColor when changing trait collection ([1ac97a4](https://github.com/tidev/titanium-sdk/commit/1ac97a45283e2ecdd87d680a70b9d5e153e38c0b))

* Marc Bender
  * fixes crashing macos app because of permissions ([c36867e](https://github.com/tidev/titanium-sdk/commit/c36867e6422246119a7f3a76566771fe52bfa6db))
  * textarea contentHeight fix with new return property textareaHeight in "change" event ([94820d1](https://github.com/tidev/titanium-sdk/commit/94820d1952d5e301b6ea2741576b3046b5b382b5))
  * backgroundcolor Ti.UI.backgroundcolor fixed on modal windows ([a1c83d8](https://github.com/tidev/titanium-sdk/commit/a1c83d8e0a5b071b71ede22d494447949656f639))

* Christian Hauf
  * authenticationMethod NSURLAuthenticationMethodClientCertificate not handled correctly ([edfd037](https://github.com/tidev/titanium-sdk/commit/edfd037c4e6f50aa03cd382247d5128bb9292731))

* Sergey Volkov
  * update link to a build status badge ([b66c287](https://github.com/tidev/titanium-sdk/commit/b66c287161788e00d05adbe5bc2b61322d827688))
  * problems with "userinterfacestyle" event ([bdfd640](https://github.com/tidev/titanium-sdk/commit/bdfd64029484abd2f3b61b1239c6cd3835e82722))
  * [TIMOB-28563](https://jira-archive.titaniumsdk.com/TIMOB-28563) - use Activity for colors resolution ([e290733](https://github.com/tidev/titanium-sdk/commit/e2907331ef681ca2aaf6d96d1e1718dbeb427acc))
  * reuse address for debugger ([c404163](https://github.com/tidev/titanium-sdk/commit/c4041636297034167bc581474c7057acf5ebae7f))
  * [TIMOB-28583](https://jira-archive.titaniumsdk.com/TIMOB-28583) - commit fragments transaction only once after wrapping view being attached to a window ([0838db2](https://github.com/tidev/titanium-sdk/commit/0838db24a64d0eec534d02b9b43efea8d98d7d05))
  * crash in ListView on API 21 ([b30de10](https://github.com/tidev/titanium-sdk/commit/b30de101032fc668bcf8284559aec3f0a4eacb52))
  * Titanium.UI.iOS.Toolbar was removed in 10.0.0 ([23986a3](https://github.com/tidev/titanium-sdk/commit/23986a36be11b52a8485ce8971e6e3869c7bc738))

* Monili Nicolò
  * [TIMOB-28543](https://jira-archive.titaniumsdk.com/TIMOB-28543) - selectedBackgroundGradient deprecation shown when not using it ([93f5689](https://github.com/tidev/titanium-sdk/commit/93f5689444c57534c5a2defb336ce6802c97e5a6))


## Bug Fixes

### Multiple platforms

* copyright in java files ([e4b50ad](https://github.com/tidev/titanium-sdk/commit/e4b50ad971b0b4741eb79eefb33bc284d670deb7))
* document iPadOS behavior ([08450e3](https://github.com/tidev/titanium-sdk/commit/08450e3ecf9cdf9f15db3a05f50a30b57c8a3a9f))
* fix adaptive background gradients ([6435c02](https://github.com/tidev/titanium-sdk/commit/6435c0241a43de74d63e5b48943653cd20b378e4))
* for module build enable target & device-id command line parameters for the example app ([e915ef6](https://github.com/tidev/titanium-sdk/commit/e915ef6352782096d3c75c294a54a68720ae4c1f))
* morey copyrights changed in java files ([4e806df](https://github.com/tidev/titanium-sdk/commit/4e806df95de7f1c26045fbaf9b37b2b1b1fce9ad))
* removed semicolon as it breaks the app if the example is used ([2800aee](https://github.com/tidev/titanium-sdk/commit/2800aee07ad3f0a2f14a3edbec8321d6a3deae6b))
* rollback dateformat version to 4.6.3 ([cbb2746](https://github.com/tidev/titanium-sdk/commit/cbb27466c3f181bd139a8879a44b54fb6ba0eedb))
* fix windows build of Titanium SDK - titanium_mobile ([6566453](https://github.com/tidev/titanium-sdk/commit/656645388d6d7d3601751a5cf11ea6bdd3939285))
* replace tislack.org with slack.tidev.io ([81d3f4a](https://github.com/tidev/titanium-sdk/commit/81d3f4a1bfa69a5367b8cf05af40b608b62ebe3b))
* change xmlns ([32c628e](https://github.com/tidev/titanium-sdk/commit/32c628e3d3c742aaddd9d8812ffc4dda056bc624))
* fixes crashing macos app because of permissions ([c36867e](https://github.com/tidev/titanium-sdk/commit/c36867e6422246119a7f3a76566771fe52bfa6db))
* remove deprecated parameter from example ([6d84ca9](https://github.com/tidev/titanium-sdk/commit/6d84ca9fe8674102174870d6862b1cf45975b448))
* properly expose precompile flags for Ti.Media.queryMusicLibrary API ([74a6e3c](https://github.com/tidev/titanium-sdk/commit/74a6e3c5ffdc689ca3d9451ecf4aa27ed5b82654))
* Update documentation TabGroup/VideoPlayer/TableViewRow ([5068dc1](https://github.com/tidev/titanium-sdk/commit/5068dc1d89cff65af009490e6665ab84dc4acec9))
* move to getter/setter ([734c41b](https://github.com/tidev/titanium-sdk/commit/734c41b56cd63010b269ef6b6e6247da2f9d656c))
* authenticationMethod NSURLAuthenticationMethodClientCertificate not handled correctly ([edfd037](https://github.com/tidev/titanium-sdk/commit/edfd037c4e6f50aa03cd382247d5128bb9292731))
* issue templates ([226f87d](https://github.com/tidev/titanium-sdk/commit/226f87dee02f86935adf925588243bf85d5eb50b))
* update link to a build status badge ([b66c287](https://github.com/tidev/titanium-sdk/commit/b66c287161788e00d05adbe5bc2b61322d827688))

### Android platform

* [TIMOB-28535](https://jira-archive.titaniumsdk.com/TIMOB-28535) - blob fails to read WebP image info ([acc561a](https://github.com/tidev/titanium-sdk/commit/acc561af3c246c0ac98b95c4a9f0ed60688022b8))
* color regex for rgba() ([07b108a](https://github.com/tidev/titanium-sdk/commit/07b108a5f38695bef850ce4cc77094a142dc3ac5))
* [TIMOB-28583](https://jira-archive.titaniumsdk.com/TIMOB-28583) - commit fragments transaction only once after wrapping view being attached to a window ([0838db2](https://github.com/tidev/titanium-sdk/commit/0838db24a64d0eec534d02b9b43efea8d98d7d05))
* crash in ListView on API 21 ([b30de10](https://github.com/tidev/titanium-sdk/commit/b30de101032fc668bcf8284559aec3f0a4eacb52))
* [TIMOB-28552](https://jira-archive.titaniumsdk.com/TIMOB-28552) [TIMOB-28553](https://jira-archive.titaniumsdk.com/TIMOB-28553) [TIMOB-28554](https://jira-archive.titaniumsdk.com/TIMOB-28554) [TIMOB-28555](https://jira-archive.titaniumsdk.com/TIMOB-28555) - edit move issues with ListView/TableView ([e525889](https://github.com/tidev/titanium-sdk/commit/e5258890f3cd14fee369ff6b538d472f2ed17122))
* fix build deps ([dbb7177](https://github.com/tidev/titanium-sdk/commit/dbb7177498d434983eee0d720cac8a31238f6632))
* fix drag and drop issues ([cffee52](https://github.com/tidev/titanium-sdk/commit/cffee52517ffc77f1362927c11f352666edc124c))
* fix restart activity ([0205aa7](https://github.com/tidev/titanium-sdk/commit/0205aa7ba321d8fe27cc5b0dcbfcdd759714a0f4))
* menu and toolbar icons to use ActionBar style colors ([2052f78](https://github.com/tidev/titanium-sdk/commit/2052f783867fc6c032f9c3f9c1086d1b02e9b17b))
* [TIMOB-28547](https://jira-archive.titaniumsdk.com/TIMOB-28547) - menu item icon wrongly ignores theme ([f3c4057](https://github.com/tidev/titanium-sdk/commit/f3c40577e3b65ebd583a442788266d7caf4276a2))
* prevent multiple RippleDrawable backgrounds ([87553fa](https://github.com/tidev/titanium-sdk/commit/87553fa1b9f704bc525cbc7f1a701eb56a1cb905))
* [TIMOB-28558](https://jira-archive.titaniumsdk.com/TIMOB-28558) - restore res/drawable support for Ti.UI.Button ([11dc187](https://github.com/tidev/titanium-sdk/commit/11dc187fa042285eb071895af4b6bdfb354c15ca))
* reuse address for debugger ([c404163](https://github.com/tidev/titanium-sdk/commit/c4041636297034167bc581474c7057acf5ebae7f))
* [TIMOB-28577](https://jira-archive.titaniumsdk.com/TIMOB-28577) - themes to not use dark status/nav icons on dark background ([08219c2](https://github.com/tidev/titanium-sdk/commit/08219c238da536a376cedada486ab7a60164786d))
* problems with "userinterfacestyle" event ([bdfd640](https://github.com/tidev/titanium-sdk/commit/bdfd64029484abd2f3b61b1239c6cd3835e82722))
* revert to V8 8 ([1e14156](https://github.com/tidev/titanium-sdk/commit/1e14156cc67aa6e132afca3f85380ae50ab3c848))
* drop-down picker to never accept keyboard input ([2dad43e](https://github.com/tidev/titanium-sdk/commit/2dad43e47e6db455ce6d9f852082ab766bfd81d8))
* fix clipboard test ([6289860](https://github.com/tidev/titanium-sdk/commit/62898605bb5b0319eb2ed3997dedead8cbeac56a))
* re-create list upon visibility change ([18b4eaf](https://github.com/tidev/titanium-sdk/commit/18b4eaffaf3e0b73d74f628cb5e262c2b951b9ef))
* refactor clipboard to remove deprecated apis ([09e3e0d](https://github.com/tidev/titanium-sdk/commit/09e3e0dd243fd5423364371534f29de8d7dec757))
* roundBorder fix for Android 12+ ([7628a5c](https://github.com/tidev/titanium-sdk/commit/7628a5c42d3e5b82320d518e7c029c09a42f7c3c))
* tabgroup/scrollview null pointer ([c706bea](https://github.com/tidev/titanium-sdk/commit/c706bea567d683d318fe179c97ba33cb20809ab4))
* [TIMOB-28576](https://jira-archive.titaniumsdk.com/TIMOB-28576) - Ti.UI.Android.ProgressIndicator dialog not using theme's "colorPrimary" ([71ce0e9](https://github.com/tidev/titanium-sdk/commit/71ce0e9ec7d43d4999dde998eb060fb4afb770e3))
* [TIMOB-28563](https://jira-archive.titaniumsdk.com/TIMOB-28563) - use Activity for colors resolution ([e290733](https://github.com/tidev/titanium-sdk/commit/e2907331ef681ca2aaf6d96d1e1718dbeb427acc))

### iOS platform

* apply “overrideUserInterfaceStyle” to main app window ([07c7422](https://github.com/tidev/titanium-sdk/commit/07c7422be3b0cc6cc97c650ab62af0c286293578))
* backgroundcolor Ti.UI.backgroundcolor fixed on modal windows ([a1c83d8](https://github.com/tidev/titanium-sdk/commit/a1c83d8e0a5b071b71ede22d494447949656f639))
* [TIMOB-28544](https://jira-archive.titaniumsdk.com/TIMOB-28544) - dont run simulator detection for macos builds ([ead1713](https://github.com/tidev/titanium-sdk/commit/ead1713e5e36b4632b692ce6fcc9a9785b91ad26))
* fix top padding of dim-view in Ti.UI.TableView's search-bar  ([c0c2dcc](https://github.com/tidev/titanium-sdk/commit/c0c2dccf8f74e11464876c189c15431c7e4cb238))
* [TIMOB-28548](https://jira-archive.titaniumsdk.com/TIMOB-28548) - ListView/TableView multiselection events only fired when tapping checkboxes ([09e9044](https://github.com/tidev/titanium-sdk/commit/09e90441869b1330902ad97ebea8ec59e4a6b82c))
* redraw CGColor when changing trait collection ([1ac97a4](https://github.com/tidev/titanium-sdk/commit/1ac97a45283e2ecdd87d680a70b9d5e153e38c0b))
* remove falsy error log ([d9ef416](https://github.com/tidev/titanium-sdk/commit/d9ef41613f896926eec931b3d00f8a4feca72111))
* [TIMOB-28543](https://jira-archive.titaniumsdk.com/TIMOB-28543) - selectedBackgroundGradient deprecation shown when not using it ([93f5689](https://github.com/tidev/titanium-sdk/commit/93f5689444c57534c5a2defb336ce6802c97e5a6))

## Features

### Multiple platforms

* update included module versions ([49657d9](https://github.com/tidev/titanium-sdk/commit/49657d9e3f11fba23c4730a707bcb0c98b3615c4))
* [TIMOB-28558](https://jira-archive.titaniumsdk.com/TIMOB-28558) [TIMOB-28559](https://jira-archive.titaniumsdk.com/TIMOB-28559) - add "imageIsMask" property to Ti.UI.Button ([0b82834](https://github.com/tidev/titanium-sdk/commit/0b828344c7a6c5cec45d82dac1829771657aac5d))
* add default semantic.colors.json ([498b596](https://github.com/tidev/titanium-sdk/commit/498b59625a75b6336b2a4ee411b2d3a45d6129f3))
* [TIMOB-28562](https://jira-archive.titaniumsdk.com/TIMOB-28562) - declare node 16 support ([8465675](https://github.com/tidev/titanium-sdk/commit/8465675286aad65859961a27d2a0d9eac16d3522))
* remove Ti.Analytics (iOS / Android) ([3e54924](https://github.com/tidev/titanium-sdk/commit/3e549242e8421601dc5f98bf68cb16e723bf7d27))

### Android platform

* add defaultCalendar to Ti.Calendar ([0d20ec0](https://github.com/tidev/titanium-sdk/commit/0d20ec02995f09b00e0e1cf86fd9fd51fb78473b))
* add fixedSize to RecyclerViews ([d057eed](https://github.com/tidev/titanium-sdk/commit/d057eed0d88458a60b6557478e51ea38a3dd4bd3))
* add other skip-zip npm scripts ([fbbc258](https://github.com/tidev/titanium-sdk/commit/fbbc258894ee643164bf2933403d430da652fb56))
* [TIMOB-4350](https://jira-archive.titaniumsdk.com/TIMOB-4350) - add pinch zoom and double-tap zoom support to ImageView ([2f90677](https://github.com/tidev/titanium-sdk/commit/2f90677094a8142a37f97507e2df007dcd7b2fc3))
* expose base context ([5618220](https://github.com/tidev/titanium-sdk/commit/5618220a521886a76149c38f6d74b8c15fe7ac17))
* menu text should not be all-caps by default ([da00331](https://github.com/tidev/titanium-sdk/commit/da003310d92bff28675d919b04b9d7aaa75f14cc))
* parity for optionbar index ([af7371b](https://github.com/tidev/titanium-sdk/commit/af7371b8671e30bd449c311ea3e101c57575f1f9))
* support flexible border radius in card view ([a1c8edf](https://github.com/tidev/titanium-sdk/commit/a1c8edf55938186c8b9e500e72e264533a1e0974))
* sync tab and actionbar title ([6972587](https://github.com/tidev/titanium-sdk/commit/6972587807632d95e3c40debda31173154cead04))
* update gradle to 7.4.2 ([122fa59](https://github.com/tidev/titanium-sdk/commit/122fa59b761fc19ed8513b208394d2b1f1c39f95))
* update internal libraries ([1325f1a](https://github.com/tidev/titanium-sdk/commit/1325f1ab4732993899380897b220e747dbeff21c))

### iOS platform

* textarea contentHeight fix with new return property textareaHeight in "change" event ([94820d1](https://github.com/tidev/titanium-sdk/commit/94820d1952d5e301b6ea2741576b3046b5b382b5))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 11.1.0 | 12.0.0 |
| ti.map | 5.3.4 | 6.0.1 |
| ti.webdialog | 2.2.0 | 3.0.2 |
| ti.playservices | 17.5.0 | n/a |
| ti.identity | 3.1.0 | 4.0.1 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.1 |
| hyperloop | 7.0.4 | 7.0.4 |
