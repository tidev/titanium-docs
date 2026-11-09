---
title: Titanium SDK 14.0.0.GA - 9 November 2026
weight: '11'
---

## About this release

Titanium SDK 14.0.0 is a major release of the SDK, adding iPhone Duo and Xcode 27.2 support, a native `Ti.UI.iOS.SplitWindow`, true multi-scene support on iOS and a modernized Android build stack.

## Community Credits

* Michael Gangolf
  * parity for Matrix2D.rotate(from, to) ([54848a1](https://github.com/tidev/titanium-sdk/commit/54848a1f0f639e7ab38230c2b73c53b4fd5474fe))
  * update material library to 1.14.0 ([b3eef62](https://github.com/tidev/titanium-sdk/commit/b3eef621dfee4e72a9a43d12c5234395a6f41b0b))
  * cache property bridge name strings in the V8 runtime ([257c575](https://github.com/tidev/titanium-sdk/commit/257c575b7fbe7e607cc5ed03b8ef33be68d139a7))
  * stop forcing a full V8 GC after every TiBlob image operation ([ac4f5bf](https://github.com/tidev/titanium-sdk/commit/ac4f5bf64a637e0ab3bdb8823d3acdb8c5c4cf89))
  * keep the height of TabGroup windows with the vertical tab bar ([8519e1c](https://github.com/tidev/titanium-sdk/commit/8519e1c6cda47d1ed1d0a92b6f666104091ee711))
  * update WebView to support camera/gallery picker for input fields ([b002763](https://github.com/tidev/titanium-sdk/commit/b0027631bbbf62c2dc9537eb32916ee3a67883dc))
  * use borderRadius for floating BottomNavigation ([255f1da](https://github.com/tidev/titanium-sdk/commit/255f1da475beb88f684422821ca575c7c527ddd5))
  * change app icons at runtime ([f9d03ad](https://github.com/tidev/titanium-sdk/commit/f9d03ad2aa2ff2e4b00cc887b69f11c4cf4c1fc1))
  * code optimizations ([04710f5](https://github.com/tidev/titanium-sdk/commit/04710f5ea71ffe37fe9eaefe97aedbb96341da15))
  * append ListView events while scrolling ([42368d3](https://github.com/tidev/titanium-sdk/commit/42368d3850d23d9611e4bdc2930525b47cdf67d8))
  * fix padding unit in ScrollableView ([a1b81e2](https://github.com/tidev/titanium-sdk/commit/a1b81e290340375b41e1a33a026f9d361aee4aef))
  * expose videoPlayer buffer ([56a4877](https://github.com/tidev/titanium-sdk/commit/56a48772a3b90df2867b1b8f9cdd7b0b514bccb6))
  * more attributedString link features ([daa3c17](https://github.com/tidev/titanium-sdk/commit/daa3c17f65cdde8c30d3fb8c833168e589802459))
  * fire label link event for links in html text ([c2d20ab](https://github.com/tidev/titanium-sdk/commit/c2d20abdbee0f670cc93a6c4bb105642cd1b6273))
  * use newer APIs for battery level/status properties ([557e145](https://github.com/tidev/titanium-sdk/commit/557e14509d3bfb3066b4a03f312f8931ae7775ae))
  * adjust left padding for ScrollableView ([086200b](https://github.com/tidev/titanium-sdk/commit/086200b1db0562c4cb631eb31030600223df8be4))
  * new property Ti.Android.sdkVersion ([80fa7c4](https://github.com/tidev/titanium-sdk/commit/80fa7c4279520128ebd420abc305f6eb3d69a1b6))
  * custom gallery folder names ([0c2285a](https://github.com/tidev/titanium-sdk/commit/0c2285a6c3634bb2eeaf485522fff8cbb0a153fe))
  * allow VectorDrawables in ImageView ([9fbd7f8](https://github.com/tidev/titanium-sdk/commit/9fbd7f8f69400033d533c560792a7fa68b293cb5))
  * add padding property to Label ([5c9b7ec](https://github.com/tidev/titanium-sdk/commit/5c9b7ecf74d80c37093f2ba6743ad6f930cd6784))
  * add hideSharedBackground to navBar buttons ([5a11ad4](https://github.com/tidev/titanium-sdk/commit/5a11ad49d8a967c50dba1de9337eb7e30d85cc06))
  * parity for TextArea.scrollable ([9a6e101](https://github.com/tidev/titanium-sdk/commit/9a6e101f585e2f5e985452a11bbbd190098996f8))
  * restart JS runtime for services and receivers after app exit ([6b520de](https://github.com/tidev/titanium-sdk/commit/6b520deaebd41491741c30e21f091714ea41cbc8))
  * optional parameter for Database open() flags ([cd5d5dd](https://github.com/tidev/titanium-sdk/commit/cd5d5dd03c25a1f7d58c43bc2821e9d61cfe8cda))
  * improve CameraX and Database cleanup ([4319ceb](https://github.com/tidev/titanium-sdk/commit/4319cebf8ed0d1d92557875343a54003bc230b74))
  * add itemlongpress event to Ti.UI.ListView ([32df010](https://github.com/tidev/titanium-sdk/commit/32df010365ebaac397d87b9be9e48a0ee6f31b60))
  * parity for Toolbar height property ([bc68df4](https://github.com/tidev/titanium-sdk/commit/bc68df465a3918c59593abaf4eee11bbf42fd570))
  * set gradle/java idle timeouts ([40db4ee](https://github.com/tidev/titanium-sdk/commit/40db4ee876aef9201183f59148c2d9cc99cecee1))
  * make rotation animatable ([d749302](https://github.com/tidev/titanium-sdk/commit/d749302ea616ea13eb3ac606f194db1e17ab81a6))
  * use correct dark/light mode image for Buttons ([b5166fa](https://github.com/tidev/titanium-sdk/commit/b5166fa207423817104b59fe12792d64b9d8d5de))
  * return TableView contentOffset in default units and add iOS getter ([f9914d1](https://github.com/tidev/titanium-sdk/commit/f9914d1f16b7947856817a872f759d541707522f))
  * use ios.deviceId from CLI config as default --device-id ([3a08b63](https://github.com/tidev/titanium-sdk/commit/3a08b636caaeebf78a4e7accba6fda06c728eaf9))
  * fix navigationBar appearance when closing windows ([b774252](https://github.com/tidev/titanium-sdk/commit/b77425214f059bf54f340f6fc6a42bb840f57e33))
  * stop forcing UIRequiresFullScreen on Xcode 27 builds ([4ad64dc](https://github.com/tidev/titanium-sdk/commit/4ad64dc81a6e0b4175afd06dc55cfbd730f150a0))
  * convert large numbers to string without scientific notation ([e9aa4bb](https://github.com/tidev/titanium-sdk/commit/e9aa4bbeb89c4090ef6bbd4b080080e9ad24310d))
  * restart app when OS destroys all windows above root activity ([54722f0](https://github.com/tidev/titanium-sdk/commit/54722f0e6283d3340bf845248ddd10e300ec58f4))
  * cameraX rotation crash and wrong orientation ([a0e4d05](https://github.com/tidev/titanium-sdk/commit/a0e4d05b7fdb7fa6ecddd17342356734dea193f5))
  * cancel running animations when a view is released ([060ef8b](https://github.com/tidev/titanium-sdk/commit/060ef8b02719e756f8d78a301f5ab32c4dac560a))
  * ignore proxies of a disposed runtime after soft restart ([82f0ade](https://github.com/tidev/titanium-sdk/commit/82f0adefe5ac8f328a5944e06a6ad5a8e5f24c0d))
  * support dark and tinted app icons ([bc14f95](https://github.com/tidev/titanium-sdk/commit/bc14f95520a450f134f875dda56bbd1401057fc7))
  * release menu items and dialog views with their activity ([abe0a5d](https://github.com/tidev/titanium-sdk/commit/abe0a5d2ad0f57e66877c34b8a96eae52a2d09ea))
  * keep ActionBar settings when the activity is recreated  ([5338c23](https://github.com/tidev/titanium-sdk/commit/5338c232d9fe3a7161c98874372a6ede6b71c8d8))
  * propagate touch listener changes to nested child views ([a786336](https://github.com/tidev/titanium-sdk/commit/a786336e9473a5cdfb5498034a1634672ad703e3))
  * remove empty ActionBar gap with navBarHidden on API 30-34 ([708b933](https://github.com/tidev/titanium-sdk/commit/708b933029661969ec8187d52640179e54907c79))
  * webview injectEventBindings method for external pages ([3da67e4](https://github.com/tidev/titanium-sdk/commit/3da67e4c533dd033ea88736e46842adb1282e742))
  * import TiApp.h in TiUIiOSProxy ([1299e11](https://github.com/tidev/titanium-sdk/commit/1299e1195510b4e2851530ec12a06bcf2ca25dde))
  * update TabGroup background when changing the window background ([7bb6591](https://github.com/tidev/titanium-sdk/commit/7bb6591cc058bb80e1c5c48111c2106f4ef9fa4e))
  * apply theme's light system bar attributes to window ([dc530cc](https://github.com/tidev/titanium-sdk/commit/dc530cc30acd7ce02d2c3cc99dbb2b2642dcaf44))
  * rename ti.modulesdk920 to ti.modulesdk1341 ([fe1f8c3](https://github.com/tidev/titanium-sdk/commit/fe1f8c316e354babd525ddacc49128195229214d))
  * update ti.crypt to 1.0.1 ([6a0728c](https://github.com/tidev/titanium-sdk/commit/6a0728cff44be8db78ba3915d7d22cf4e95a31ec))
  * faster and more reliable getCurrentPosition ([7f7b055](https://github.com/tidev/titanium-sdk/commit/7f7b0559f2fbf12c13b974d865e8135c0be9f31d))
  * use dark-mode rendition for View.backgroundImage ([2b5d014](https://github.com/tidev/titanium-sdk/commit/2b5d01489aee3d8cb039dbccfff02d7c6b2e3342))
  * tableview content update fix ([6b6833f](https://github.com/tidev/titanium-sdk/commit/6b6833fafb0aa9423c7a1ab9738f0a91f1fc6634))
  * fix edge-to-edge Window.backgroundColor changes after creation ([df02037](https://github.com/tidev/titanium-sdk/commit/df02037501e4ba854b6018010679c855fb4d36f5))
  * update internal Android libraries ([e7de180](https://github.com/tidev/titanium-sdk/commit/e7de180737877f1ea8528b3172a2398bfce51597))
  * allow TableViewRow height of 0 to collapse the row ([494beed](https://github.com/tidev/titanium-sdk/commit/494beed3d5668f5d304882471bb3867f2e506be8))
  * respect touchEnabled:false setting in WebView ([411ad22](https://github.com/tidev/titanium-sdk/commit/411ad22a3eb425f8c7518727c980756e99471b62))
  * [TIMOB-8243](https://jira-archive.titaniumsdk.com/TIMOB-8243) - don't clamp ScrollView content to viewport on relayout ([6ebb8e6](https://github.com/tidev/titanium-sdk/commit/6ebb8e64e4dc75a57745f7810022306dab11db39))
  * show "ok" button when "buttonNames" is empty ([2dc6631](https://github.com/tidev/titanium-sdk/commit/2dc6631610c9e57e2ca7a878ab32bb9c394d552c))
  * replace deprecated statusBarOrientation usage ([d02b52b](https://github.com/tidev/titanium-sdk/commit/d02b52b6e19e1f14ceb7b22667630353c3625db9))
  * fix BuildProductsPath path issue ([1f8a32b](https://github.com/tidev/titanium-sdk/commit/1f8a32b744e9184167dd2fe291ac3cb6f0638bb7))
  * gradle 9.4.1 ([e23d5c5](https://github.com/tidev/titanium-sdk/commit/e23d5c5c77707c16e5bd010a3bd471085de8d448))
  * add searchText to TableView ([ea5d1f6](https://github.com/tidev/titanium-sdk/commit/ea5d1f634153f5b846447af065f034cb4888b078))
  * merge module build.gradle repositories ([a09d8c4](https://github.com/tidev/titanium-sdk/commit/a09d8c4787baf8e4f1a41fe7d89724402300744d))
  * webview safe-are-inset fix ([23c58b9](https://github.com/tidev/titanium-sdk/commit/23c58b92d15ddfc8df02fe23cdf6606167825171))
  * parity for touchEnabled in ListView itemClick ([2103ade](https://github.com/tidev/titanium-sdk/commit/2103ade2d3593ee5b6803bd56c209ed9975222b3))
  * add CFBundleVersion comment to tiapp.xml ([58333bf](https://github.com/tidev/titanium-sdk/commit/58333bf86386cd36372dc38399c7b437e4e805c1))
  * npm package.json updates ([bcead39](https://github.com/tidev/titanium-sdk/commit/bcead3972d515619690b6fd90351fc1b8cb84ae0))
  * unify yauzl versions ([dbd93b6](https://github.com/tidev/titanium-sdk/commit/dbd93b66d78aa9c274340f994b1a1479dd7b5d39))
  * ti.crypt ([3b98a0d](https://github.com/tidev/titanium-sdk/commit/3b98a0dda4a2b000c045c956f7317350fd9f499f))
  * remove danger files, move to native fetch/stream ([654ca44](https://github.com/tidev/titanium-sdk/commit/654ca44fe213f5fd5a832fa1280c9f345eaa8618))
  * snapping for ListView/TableView ([9092c4a](https://github.com/tidev/titanium-sdk/commit/9092c4a5e66395541a3bee41d9076116e5eec606))
  * fix layout regression introduced in #14476 ([578e3ed](https://github.com/tidev/titanium-sdk/commit/578e3ed3bd72bb1fbfb5457cf70a9969e102c961))
  * iOS test workflow ([ff39092](https://github.com/tidev/titanium-sdk/commit/ff39092e876011e99658184958eab45abebfb3c5))
  * Github workflow for Android Mocha tests ([959ecc7](https://github.com/tidev/titanium-sdk/commit/959ecc7accf22e797cf165eff2cc1b38487d3c82))
  * new iOS Ti.UI.Toolbar property: hideSharedBackground ([9f59587](https://github.com/tidev/titanium-sdk/commit/9f595876daceb59c7c7b57a391663abd2bb93d76))
  * fixing documentation ([b32b7eb](https://github.com/tidev/titanium-sdk/commit/b32b7eb1c793913c4a2d8b8db64942169e7ba2a9))
  * improve layout code ([8f78cdc](https://github.com/tidev/titanium-sdk/commit/8f78cdc5d7fc31894221851c69aa68bc24fdceee))

* Hans Knöchel
  * fix all high and critical npm audit findings ([cf40a8d](https://github.com/tidev/titanium-sdk/commit/cf40a8deb08b9a7f42dc010bd2c6550e798b6139))
  * add borderDashPattern to Ti.UI.View ([89e08af](https://github.com/tidev/titanium-sdk/commit/89e08af58b975896430ed4efb9952db9b456b42b))
  * update ioslib to 6.0.2 ([a5675bd](https://github.com/tidev/titanium-sdk/commit/a5675bde5d247a2906a95751c8776ecdda385b21))
  * Xcode 27.2 and iPhone Duo fixes ([3e7f644](https://github.com/tidev/titanium-sdk/commit/3e7f64409af4d9e6056d96edeaf2060dca74333a))
  * replace custom Ti.UI.iOS.SplitWindow with native UISplitViewController ([c48c1a9](https://github.com/tidev/titanium-sdk/commit/c48c1a95f71cb83df415b7cc14eeff3c806c23ee))
  * add arrangementStyle to SplitWindow for iPhone Duo ([f686534](https://github.com/tidev/titanium-sdk/commit/f6865342bbd0637bfc6da19098aa0152e6462962))
  * add vertical bar APIs for iPhone Duo ([99f58f6](https://github.com/tidev/titanium-sdk/commit/99f58f692e0dca6bd26eecfd934bcd0d4c0be431))
  * add Window.reservedRegions for iPhone Duo ([542522a](https://github.com/tidev/titanium-sdk/commit/542522af266b7ee5fd8044d651d9702f12264d7a))
  * add hingechange event for iPhone Duo ([cd3c69a](https://github.com/tidev/titanium-sdk/commit/cd3c69a79528ef5c7585f9c1a5efb24c4aeee8d6))
  * be able to build Titanium project from Xcode again ([07b72f8](https://github.com/tidev/titanium-sdk/commit/07b72f89fed87bfdf68c2cee919f7157a3067be7))
  * bump minimum iOS version to 16, require Xcode 16 / iOS SDK 18 ([4d11ec3](https://github.com/tidev/titanium-sdk/commit/4d11ec3543098ceea941a2e09ded8a7c906da68d))
  * incremental-build optimizations ([f70ba91](https://github.com/tidev/titanium-sdk/commit/f70ba910565592fedfa318ed7b770421a10ecc6f))
  * improve device- and simulator handling in Xcode 27 (ioslib v6.0.1) ([c107195](https://github.com/tidev/titanium-sdk/commit/c107195fb6bc5c1d6f516126c4883897cf17f024))
  * sync changelog with 13_4_X (up to 13.4.1) ([d579cd9](https://github.com/tidev/titanium-sdk/commit/d579cd9d22b1b94bdb2f9ecb0747e8996b8c19c5))
  * update readme.md with spm.json references ([017fd7a](https://github.com/tidev/titanium-sdk/commit/017fd7aa54773255a2bdf9a582038c321e6bf4b7))
  * run device builds via CoreDevice (devicectl), drop node-ios-device ([a499e2b](https://github.com/tidev/titanium-sdk/commit/a499e2b1b73975604263efbb4217c5d7cb3f2158))
  * make scrollToTop and scrollToBottom animatable ([f484a41](https://github.com/tidev/titanium-sdk/commit/f484a41d280e803865dd4c6cf4a3f6820675a0be))
  * bump to 14.0.0 ([191c9c8](https://github.com/tidev/titanium-sdk/commit/191c9c85df9423e0959381f9661d4eb6a973025f))

* Chris Barber
  * add a contributing guide ([89d38bf](https://github.com/tidev/titanium-sdk/commit/89d38bf736bece5b10e2dd850dd936ce32d2ed79))
  * generate release notes and open the docs pull request ([525f0ae](https://github.com/tidev/titanium-sdk/commit/525f0ae82403abd981d1fb7671fe8fffd734b52a))
  * resolve 23 broken cross-references ([8a64932](https://github.com/tidev/titanium-sdk/commit/8a64932e5178a77d02fe9185082adf9d0320a8c0))
  * modernize the project command ([9041962](https://github.com/tidev/titanium-sdk/commit/90419625aa5a6a94bdbd78789fe0960ea18de714))
  * async command `validate()` and `run()` ([8f818b7](https://github.com/tidev/titanium-sdk/commit/8f818b7bf58c76ccda3d8e461b47924fa15a1f25))
  * Name the notify job, and finish the rename (#14566) ([29c2656](https://github.com/tidev/titanium-sdk/commit/29c26561d1392e905c56ce3f142c3eacef9f368e))
  * Follow the docs repo rename to titaniumsdk.com (#14565) ([6363922](https://github.com/tidev/titanium-sdk/commit/6363922f7cd6892b719d54aa1dcc78689e570379))
  * Point the docs regen at titaniumsdk.com (#14564) ([f3cfb65](https://github.com/tidev/titanium-sdk/commit/f3cfb6505abb90f072c0ffee65e7fd3b1347f99a))
  * namespace the two colliding showParams pseudo-types ([0243b83](https://github.com/tidev/titanium-sdk/commit/0243b83cd7f9852123633c20df6d4854db606287))
  * correct invalid YAML in Geolocation.yml ([d362f35](https://github.com/tidev/titanium-sdk/commit/d362f3556a37f25766d2f6e2cfe2e9cdcc6d5c7a))
  * dispatch regen-builds to titanium-www as well ([88cdec7](https://github.com/tidev/titanium-sdk/commit/88cdec7ed911d3945a62307d8f3f26b19806b731))

* Prashant Saini
  * deliver notification payload via `callback` only once ([25f2905](https://github.com/tidev/titanium-sdk/commit/25f29059730cef7535f6853689672afa1c599254))
  * open the tab's root-window when the tab becomes active ([6b624b4](https://github.com/tidev/titanium-sdk/commit/6b624b465364ce0e4707f8190119a64ce5b38db8))

* César Estrada
  * accept quoted keystore paths ([8ed5f38](https://github.com/tidev/titanium-sdk/commit/8ed5f3836e269c4393bc9f44a8aa446c30de57e2))
  * make TabGroup opening lifecycle-safe ([108aa29](https://github.com/tidev/titanium-sdk/commit/108aa290f890a20de9ed0ac68fc9bb971d061419))
  * avoid needless activity recreation when night mode is unchanged ([755a3e6](https://github.com/tidev/titanium-sdk/commit/755a3e6d35f2d3f5c589fb3d61622b02bb12b49f))
  * keep the resumed activity on top of the activity stack ([18b5b71](https://github.com/tidev/titanium-sdk/commit/18b5b711bfc565be4faec5d058112e03d4ed420d))

* Marc Bender
  * tabgroup title in creation and textfield passwordMask default ([04bea3b](https://github.com/tidev/titanium-sdk/commit/04bea3bfe4fe4541bc2727d567d18a0200a23788))
  * true iOS multi scene support ([c854c71](https://github.com/tidev/titanium-sdk/commit/c854c71f553497ddff4f8f9069b6fa5aeeb53b00))
  * register AlertDialog/OptionDialog defaults and expose parent setter ([c296de4](https://github.com/tidev/titanium-sdk/commit/c296de41172164eff942b6eeab52e597920af7d7))
  * clipboard — synchronous setText/hasText cache and API 36 hasData fallback ([8f51c37](https://github.com/tidev/titanium-sdk/commit/8f51c37a89b5d275418b1ebbabbc60055b324953))

* Jason David Miller
  * emit TableView scroll events during scroll-to-top ([dcb837a](https://github.com/tidev/titanium-sdk/commit/dcb837ac7a37c6796133b39235e04a3a6d744f22))
  * restore click events for interactive glass effects ([d34ce36](https://github.com/tidev/titanium-sdk/commit/d34ce3603fa9d209837c3871aa9bfdc0c681298f))

* abentley8
  * [14544] feat(ios): support Icon Composer app icons (#14543) ([6345e9a](https://github.com/tidev/titanium-sdk/commit/6345e9a53eac4f4c953f7c2db283c8843dd86c26))

* Sergey Volkov
  * Android: Ti.UI.Color parity ([84cc149](https://github.com/tidev/titanium-sdk/commit/84cc149d80273f92dba30953fe779957f2b62245))


## Bug Fixes

### Multiple platforms

* return TableView contentOffset in default units and add iOS getter ([f9914d1](https://github.com/tidev/titanium-sdk/commit/f9914d1f16b7947856817a872f759d541707522f))
* correct invalid YAML in Geolocation.yml ([d362f35](https://github.com/tidev/titanium-sdk/commit/d362f3556a37f25766d2f6e2cfe2e9cdcc6d5c7a))
* namespace the two colliding showParams pseudo-types ([0243b83](https://github.com/tidev/titanium-sdk/commit/0243b83cd7f9852123633c20df6d4854db606287))

### Android platform

* accept quoted keystore paths ([8ed5f38](https://github.com/tidev/titanium-sdk/commit/8ed5f3836e269c4393bc9f44a8aa446c30de57e2))
* append ListView events while scrolling ([42368d3](https://github.com/tidev/titanium-sdk/commit/42368d3850d23d9611e4bdc2930525b47cdf67d8))
* apply theme's light system bar attributes to window ([dc530cc](https://github.com/tidev/titanium-sdk/commit/dc530cc30acd7ce02d2c3cc99dbb2b2642dcaf44))
* avoid needless activity recreation when night mode is unchanged ([755a3e6](https://github.com/tidev/titanium-sdk/commit/755a3e6d35f2d3f5c589fb3d61622b02bb12b49f))
* cameraX rotation crash and wrong orientation ([a0e4d05](https://github.com/tidev/titanium-sdk/commit/a0e4d05b7fdb7fa6ecddd17342356734dea193f5))
* cancel running animations when a view is released ([060ef8b](https://github.com/tidev/titanium-sdk/commit/060ef8b02719e756f8d78a301f5ab32c4dac560a))
* clipboard — synchronous setText/hasText cache and API 36 hasData fallback ([8f51c37](https://github.com/tidev/titanium-sdk/commit/8f51c37a89b5d275418b1ebbabbc60055b324953))
* code optimizations ([04710f5](https://github.com/tidev/titanium-sdk/commit/04710f5ea71ffe37fe9eaefe97aedbb96341da15))
* convert large numbers to string without scientific notation ([e9aa4bb](https://github.com/tidev/titanium-sdk/commit/e9aa4bbeb89c4090ef6bbd4b080080e9ad24310d))
* [TIMOB-8243](https://jira-archive.titaniumsdk.com/TIMOB-8243) - don't clamp ScrollView content to viewport on relayout ([6ebb8e6](https://github.com/tidev/titanium-sdk/commit/6ebb8e64e4dc75a57745f7810022306dab11db39))
* fix edge-to-edge Window.backgroundColor changes after creation ([df02037](https://github.com/tidev/titanium-sdk/commit/df02037501e4ba854b6018010679c855fb4d36f5))
* fix layout regression introduced in #14476 ([578e3ed](https://github.com/tidev/titanium-sdk/commit/578e3ed3bd72bb1fbfb5457cf70a9969e102c961))
* fix padding unit in ScrollableView ([a1b81e2](https://github.com/tidev/titanium-sdk/commit/a1b81e290340375b41e1a33a026f9d361aee4aef))
* ignore proxies of a disposed runtime after soft restart ([82f0ade](https://github.com/tidev/titanium-sdk/commit/82f0adefe5ac8f328a5944e06a6ad5a8e5f24c0d))
* improve CameraX and Database cleanup ([4319ceb](https://github.com/tidev/titanium-sdk/commit/4319cebf8ed0d1d92557875343a54003bc230b74))
* keep ActionBar settings when the activity is recreated  ([5338c23](https://github.com/tidev/titanium-sdk/commit/5338c232d9fe3a7161c98874372a6ede6b71c8d8))
* keep the resumed activity on top of the activity stack ([18b5b71](https://github.com/tidev/titanium-sdk/commit/18b5b711bfc565be4faec5d058112e03d4ed420d))
* make TabGroup opening lifecycle-safe ([108aa29](https://github.com/tidev/titanium-sdk/commit/108aa290f890a20de9ed0ac68fc9bb971d061419))
* register AlertDialog/OptionDialog defaults and expose parent setter ([c296de4](https://github.com/tidev/titanium-sdk/commit/c296de41172164eff942b6eeab52e597920af7d7))
* release menu items and dialog views with their activity ([abe0a5d](https://github.com/tidev/titanium-sdk/commit/abe0a5d2ad0f57e66877c34b8a96eae52a2d09ea))
* remove empty ActionBar gap with navBarHidden on API 30-34 ([708b933](https://github.com/tidev/titanium-sdk/commit/708b933029661969ec8187d52640179e54907c79))
* respect touchEnabled:false setting in WebView ([411ad22](https://github.com/tidev/titanium-sdk/commit/411ad22a3eb425f8c7518727c980756e99471b62))
* restart app when OS destroys all windows above root activity ([54722f0](https://github.com/tidev/titanium-sdk/commit/54722f0e6283d3340bf845248ddd10e300ec58f4))
* restart JS runtime for services and receivers after app exit ([6b520de](https://github.com/tidev/titanium-sdk/commit/6b520deaebd41491741c30e21f091714ea41cbc8))
* show "ok" button when "buttonNames" is empty ([2dc6631](https://github.com/tidev/titanium-sdk/commit/2dc6631610c9e57e2ca7a878ab32bb9c394d552c))
* tabgroup title in creation and textfield passwordMask default ([04bea3b](https://github.com/tidev/titanium-sdk/commit/04bea3bfe4fe4541bc2727d567d18a0200a23788))
* tableview content update fix ([6b6833f](https://github.com/tidev/titanium-sdk/commit/6b6833fafb0aa9423c7a1ab9738f0a91f1fc6634))
* use correct dark/light mode image for Buttons ([b5166fa](https://github.com/tidev/titanium-sdk/commit/b5166fa207423817104b59fe12792d64b9d8d5de))
* webview safe-are-inset fix ([23c58b9](https://github.com/tidev/titanium-sdk/commit/23c58b92d15ddfc8df02fe23cdf6606167825171))

### iOS platform

* allow TableViewRow height of 0 to collapse the row ([494beed](https://github.com/tidev/titanium-sdk/commit/494beed3d5668f5d304882471bb3867f2e506be8))
* be able to build Titanium project from Xcode again ([07b72f8](https://github.com/tidev/titanium-sdk/commit/07b72f89fed87bfdf68c2cee919f7157a3067be7))
* deliver notification payload via `callback` only once ([25f2905](https://github.com/tidev/titanium-sdk/commit/25f29059730cef7535f6853689672afa1c599254))
* emit TableView scroll events during scroll-to-top ([dcb837a](https://github.com/tidev/titanium-sdk/commit/dcb837ac7a37c6796133b39235e04a3a6d744f22))
* fire label link event for links in html text ([c2d20ab](https://github.com/tidev/titanium-sdk/commit/c2d20abdbee0f670cc93a6c4bb105642cd1b6273))
* fix BuildProductsPath path issue ([1f8a32b](https://github.com/tidev/titanium-sdk/commit/1f8a32b744e9184167dd2fe291ac3cb6f0638bb7))
* fix navigationBar appearance when closing windows ([b774252](https://github.com/tidev/titanium-sdk/commit/b77425214f059bf54f340f6fc6a42bb840f57e33))
* import TiApp.h in TiUIiOSProxy ([1299e11](https://github.com/tidev/titanium-sdk/commit/1299e1195510b4e2851530ec12a06bcf2ca25dde))
* keep the height of TabGroup windows with the vertical tab bar ([8519e1c](https://github.com/tidev/titanium-sdk/commit/8519e1c6cda47d1ed1d0a92b6f666104091ee711))
* open the tab's root-window when the tab becomes active ([6b624b4](https://github.com/tidev/titanium-sdk/commit/6b624b465364ce0e4707f8190119a64ce5b38db8))
* parity for touchEnabled in ListView itemClick ([2103ade](https://github.com/tidev/titanium-sdk/commit/2103ade2d3593ee5b6803bd56c209ed9975222b3))
* propagate touch listener changes to nested child views ([a786336](https://github.com/tidev/titanium-sdk/commit/a786336e9473a5cdfb5498034a1634672ad703e3))
* replace deprecated statusBarOrientation usage ([d02b52b](https://github.com/tidev/titanium-sdk/commit/d02b52b6e19e1f14ceb7b22667630353c3625db9))
* restore click events for interactive glass effects ([d34ce36](https://github.com/tidev/titanium-sdk/commit/d34ce3603fa9d209837c3871aa9bfdc0c681298f))
* stop forcing UIRequiresFullScreen on Xcode 27 builds ([4ad64dc](https://github.com/tidev/titanium-sdk/commit/4ad64dc81a6e0b4175afd06dc55cfbd730f150a0))
* support dark and tinted app icons ([bc14f95](https://github.com/tidev/titanium-sdk/commit/bc14f95520a450f134f875dda56bbd1401057fc7))
* update TabGroup background when changing the window background ([7bb6591](https://github.com/tidev/titanium-sdk/commit/7bb6591cc058bb80e1c5c48111c2106f4ef9fa4e))
* use dark-mode rendition for View.backgroundImage ([2b5d014](https://github.com/tidev/titanium-sdk/commit/2b5d01489aee3d8cb039dbccfff02d7c6b2e3342))
* Xcode 27.2 and iPhone Duo fixes ([3e7f644](https://github.com/tidev/titanium-sdk/commit/3e7f64409af4d9e6056d96edeaf2060dca74333a))

## Features

### Multiple platforms

* add borderDashPattern to Ti.UI.View ([89e08af](https://github.com/tidev/titanium-sdk/commit/89e08af58b975896430ed4efb9952db9b456b42b))
* add itemlongpress event to Ti.UI.ListView ([32df010](https://github.com/tidev/titanium-sdk/commit/32df010365ebaac397d87b9be9e48a0ee6f31b60))
* add padding property to Label ([5c9b7ec](https://github.com/tidev/titanium-sdk/commit/5c9b7ecf74d80c37093f2ba6743ad6f930cd6784))
* add searchText to TableView ([ea5d1f6](https://github.com/tidev/titanium-sdk/commit/ea5d1f634153f5b846447af065f034cb4888b078))
* make rotation animatable ([d749302](https://github.com/tidev/titanium-sdk/commit/d749302ea616ea13eb3ac606f194db1e17ab81a6))
* snapping for ListView/TableView ([9092c4a](https://github.com/tidev/titanium-sdk/commit/9092c4a5e66395541a3bee41d9076116e5eec606))
* async command `validate()` and `run()` ([8f818b7](https://github.com/tidev/titanium-sdk/commit/8f818b7bf58c76ccda3d8e461b47924fa15a1f25))
* generate release notes and open the docs pull request ([525f0ae](https://github.com/tidev/titanium-sdk/commit/525f0ae82403abd981d1fb7671fe8fffd734b52a))
* remove danger files, move to native fetch/stream ([654ca44](https://github.com/tidev/titanium-sdk/commit/654ca44fe213f5fd5a832fa1280c9f345eaa8618))

### Android platform

* adjust left padding for ScrollableView ([086200b](https://github.com/tidev/titanium-sdk/commit/086200b1db0562c4cb631eb31030600223df8be4))
* allow VectorDrawables in ImageView ([9fbd7f8](https://github.com/tidev/titanium-sdk/commit/9fbd7f8f69400033d533c560792a7fa68b293cb5))
* change app icons at runtime ([f9d03ad](https://github.com/tidev/titanium-sdk/commit/f9d03ad2aa2ff2e4b00cc887b69f11c4cf4c1fc1))
* custom gallery folder names ([0c2285a](https://github.com/tidev/titanium-sdk/commit/0c2285a6c3634bb2eeaf485522fff8cbb0a153fe))
* expose videoPlayer buffer ([56a4877](https://github.com/tidev/titanium-sdk/commit/56a48772a3b90df2867b1b8f9cdd7b0b514bccb6))
* faster and more reliable getCurrentPosition ([7f7b055](https://github.com/tidev/titanium-sdk/commit/7f7b0559f2fbf12c13b974d865e8135c0be9f31d))
* improve layout code ([8f78cdc](https://github.com/tidev/titanium-sdk/commit/8f78cdc5d7fc31894221851c69aa68bc24fdceee))
* merge module build.gradle repositories ([a09d8c4](https://github.com/tidev/titanium-sdk/commit/a09d8c4787baf8e4f1a41fe7d89724402300744d))
* more attributedString link features ([daa3c17](https://github.com/tidev/titanium-sdk/commit/daa3c17f65cdde8c30d3fb8c833168e589802459))
* new property Ti.Android.sdkVersion ([80fa7c4](https://github.com/tidev/titanium-sdk/commit/80fa7c4279520128ebd420abc305f6eb3d69a1b6))
* optional parameter for Database open() flags ([cd5d5dd](https://github.com/tidev/titanium-sdk/commit/cd5d5dd03c25a1f7d58c43bc2821e9d61cfe8cda))
* parity for TextArea.scrollable ([9a6e101](https://github.com/tidev/titanium-sdk/commit/9a6e101f585e2f5e985452a11bbbd190098996f8))
* set gradle/java idle timeouts ([40db4ee](https://github.com/tidev/titanium-sdk/commit/40db4ee876aef9201183f59148c2d9cc99cecee1))
* ti.crypt ([3b98a0d](https://github.com/tidev/titanium-sdk/commit/3b98a0dda4a2b000c045c956f7317350fd9f499f))
* update WebView to support camera/gallery picker for input fields ([b002763](https://github.com/tidev/titanium-sdk/commit/b0027631bbbf62c2dc9537eb32916ee3a67883dc))
* use borderRadius for floating BottomNavigation ([255f1da](https://github.com/tidev/titanium-sdk/commit/255f1da475beb88f684422821ca575c7c527ddd5))
* use newer APIs for battery level/status properties ([557e145](https://github.com/tidev/titanium-sdk/commit/557e14509d3bfb3066b4a03f312f8931ae7775ae))
* webview injectEventBindings method for external pages ([3da67e4](https://github.com/tidev/titanium-sdk/commit/3da67e4c533dd033ea88736e46842adb1282e742))

### iOS platform

* add arrangementStyle to SplitWindow for iPhone Duo ([f686534](https://github.com/tidev/titanium-sdk/commit/f6865342bbd0637bfc6da19098aa0152e6462962))
* add CFBundleVersion comment to tiapp.xml ([58333bf](https://github.com/tidev/titanium-sdk/commit/58333bf86386cd36372dc38399c7b437e4e805c1))
* add hideSharedBackground to navBar buttons ([5a11ad4](https://github.com/tidev/titanium-sdk/commit/5a11ad49d8a967c50dba1de9337eb7e30d85cc06))
* add hingechange event for iPhone Duo ([cd3c69a](https://github.com/tidev/titanium-sdk/commit/cd3c69a79528ef5c7585f9c1a5efb24c4aeee8d6))
* add vertical bar APIs for iPhone Duo ([99f58f6](https://github.com/tidev/titanium-sdk/commit/99f58f692e0dca6bd26eecfd934bcd0d4c0be431))
* add Window.reservedRegions for iPhone Duo ([542522a](https://github.com/tidev/titanium-sdk/commit/542522af266b7ee5fd8044d651d9702f12264d7a))
* make scrollToTop and scrollToBottom animatable ([f484a41](https://github.com/tidev/titanium-sdk/commit/f484a41d280e803865dd4c6cf4a3f6820675a0be))
* new iOS Ti.UI.Toolbar property: hideSharedBackground ([9f59587](https://github.com/tidev/titanium-sdk/commit/9f595876daceb59c7c7b57a391663abd2bb93d76))
* parity for Matrix2D.rotate(from, to) ([54848a1](https://github.com/tidev/titanium-sdk/commit/54848a1f0f639e7ab38230c2b73c53b4fd5474fe))
* parity for Toolbar height property ([bc68df4](https://github.com/tidev/titanium-sdk/commit/bc68df465a3918c59593abaf4eee11bbf42fd570))
* replace custom Ti.UI.iOS.SplitWindow with native UISplitViewController ([c48c1a9](https://github.com/tidev/titanium-sdk/commit/c48c1a95f71cb83df415b7cc14eeff3c806c23ee))
* run device builds via CoreDevice (devicectl), drop node-ios-device ([a499e2b](https://github.com/tidev/titanium-sdk/commit/a499e2b1b73975604263efbb4217c5d7cb3f2158))
* true iOS multi scene support ([c854c71](https://github.com/tidev/titanium-sdk/commit/c854c71f553497ddff4f8f9069b6fa5aeeb53b00))
* use ios.deviceId from CLI config as default --device-id ([3a08b63](https://github.com/tidev/titanium-sdk/commit/3a08b636caaeebf78a4e7accba6fda06c728eaf9))

## BREAKING CHANGES

### iOS platform

* replace custom Ti.UI.iOS.SplitWindow with native UISplitViewController ([c48c1a9](https://github.com/tidev/titanium-sdk/commit/c48c1a95f71cb83df415b7cc14eeff3c806c23ee))

### Multiple platforms

* Android: Ti.UI.Color parity ([84cc149](https://github.com/tidev/titanium-sdk/commit/84cc149d80273f92dba30953fe779957f2b62245))


## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 15.0.0 | 16.0.0 |
| ti.map | 5.7.0 | 7.3.1 |
| ti.webdialog | 2.5.0 | 3.0.2 |
| ti.playservices | 18.6.0 | n/a |
| ti.identity | 3.2.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 8.0.1 | 8.0.1 |

