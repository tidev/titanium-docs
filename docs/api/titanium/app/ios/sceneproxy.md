---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/App/iOS/SceneProxy.yml
---
# Titanium.App.iOS.SceneProxy

<TypeHeader/>

## Overview

A SceneProxy provides access to a single UIWindowScene instance and its properties.
Scene proxies are obtained via <Titanium.App.iOS.currentScene>, <Titanium.App.iOS.scenes>,
<Titanium.App.iOS.focusedScene>, or the <Titanium.UI.Window.scene> property.

Multi-scene support is available on iOS 13 and later. The Titanium SDK includes
a default `UIApplicationSceneManifest` in the generated `Info.plist` with
`UIApplicationSupportsMultipleScenes` set to `true` and a single scene configuration
named "Default Configuration" with delegate class `TiApp`.

To add additional scene configurations (e.g., for CarPlay or custom window scenes),
add them under the `<ios><plist><dict>` section in your `tiapp.xml`:

    <ios>
        <plist>
            <dict>
                <key>UIApplicationSceneManifest</key>
                <dict>
                    <key>UIApplicationSupportsMultipleScenes</key>
                    <true/>
                    <key>UISceneConfigurations</key>
                    <dict>
                        <key>UIWindowSceneSessionRoleApplication</key>
                        <array>
                            <dict>
                                <key>UISceneConfigurationName</key>
                                <string>Default Configuration</string>
                                <key>UISceneDelegateClassName</key>
                                <string>TiApp</string>
                            </dict>
                        </array>
                    </dict>
                </dict>
            </dict>
        </plist>
    </ios>

In single-scene apps (iOS versions prior to 13.0 or apps without a scene manifest),
`currentScene` returns `null` and `scenes` returns an empty array.

### Example

``` js
// Get the current scene
var scene = Ti.App.iOS.currentScene;
Ti.API.info('Scene ID: ' + scene.sceneId);
Ti.API.info('Scene Name: ' + scene.sceneName);
Ti.API.info('Active: ' + scene.isActive);
Ti.API.info('Foreground: ' + scene.isForeground);
Ti.API.info('Primary: ' + scene.isPrimary);
Ti.API.info('Key (focused): ' + scene.isKey);

// Get trait collection info
var traits = scene.traitCollection;
Ti.API.info('UI Style: ' + traits.userInterfaceStyle);
Ti.API.info('Horizontal Size Class: ' + traits.horizontalSizeClass);
Ti.API.info('Vertical Size Class: ' + traits.verticalSizeClass);
```

<ApiDocs/>
