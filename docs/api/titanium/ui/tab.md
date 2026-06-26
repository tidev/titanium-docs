---
title: Titanium.UI.Tab
properties:
  - name: active
    type: Boolean
    summary: >
      <code>true</code> if this tab is active, <code>false</code> if it is
      not.<br>
    description: >
      <p>The tab can be activated by setting the property, but since this
      property is<br>

      platform-specific, using <a
      href="Titanium.UI.TabGroup.setActiveTab">TabGroup.setActiveTab</a><br>

      is recommended instead.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: activeIcon
    type: String
    summary: Icon URL for this tab when active.
    description: >
      <p>If unspecified, iOS uses a tint color to indicate the active tab.
      See<br>

      <a href="Titanium.UI.Tab.icon">icon</a> for more information.</p>

      <p>If the icon provided is larger than [30 pixels (60 pixels for retina,
      90 pixels for super-retina)]<br>

      (https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/image-size-and-resolution/),<br>

      this image will be scaled to fit.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.1.0
  - name: backgroundColor
    type: ''
    summary: Sets the color of the tab when it is inactive.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - android
    since:
      android: 3.0.0
  - name: backgroundFocusedColor
    type: ''
    summary: Sets the color of the tab when it is focused.
    description: >
      <p>On the Android platform, this sets the color of the active tab and is
      only supported by<br>

      <a
      href="Titanium.UI.Android.TABS_STYLE_BOTTOM_NAVIGATION">TABS_STYLE_BOTTOM_NAVIGATION</a>.</p>

      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - android
    since:
      android: 3.0.0
  - name: badge
    type: String
    summary: Badge value for this tab. <code>null</code> indicates no badge.
    description: >
      <p>On the Android platform you will need to use a Theme with
      <code>parent=&quot;Theme.MaterialComponents.*&quot;</code><br>

      in order to use a badge. You have to pass a number as a string.
      Non-numeric characters will not be displayed.</p>

      <p>On iOS, a badge will only be shown if the tab has been assigned an
      icon. Text only tabs do not support badges.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 9.3.0
  - name: badgeColor
    type: String, Titanium.UI.Color
    summary: >
      If this item displays a badge, this color will be used for the badge's
      background.<br>

      If set to null, the default background color will be used instead.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    deprecated: true
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 9.3.0
      iphone: 6.1.0
      ipad: 6.1.0
      macos: 9.2.0
  - name: badgeBackgroundColor
    type: String, Titanium.UI.Color
    summary: >
      If this item displays a badge, this color will be used for the badge's
      background.<br>

      If set to null, the default background color will be used instead.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 12.2.0
  - name: badgeTextColor
    type: String, Titanium.UI.Color
    summary: |
      Set the text color of the badge.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - android
    since:
      android: 12.2.0
  - name: icon
    type: String
    summary: Icon URL for this tab.
    description: >
      <h4>iOS Tab Icons</h4>

      <p>On iOS, tab icons are usually white with a transparent background. The
      system uses<br>

      a transparent tint color to indicate whether the tab is active or
      inactive. In the<br>

      inactive state, the tint color is based on the tab bar's color<br>

      <a
      href="Titanium.UI.TabGroup.tabsBackgroundColor">tabsBackgroundColor</a>,
      which defaults<br>

      to black. In the active state, the tint color is usually blue. Prior to
      Titanium<br>

      3.1, there was no way to override the default active icon tint.</p>

      <p>Some icon-related features:</p>

      <ul>

      <li>

      <p>You can specify the active tab's tint color as<br>

      <a
      href="Titanium.UI.TabGroup.activeTabIconTint">activeTabIconTint</a>.</p>

      </li>

      <li>

      <p>You can set separate icon images for the active and inactive states.
      If<br>

      <a href="Titanium.UI.Tab.activeIcon">activeIcon</a> is set, then
      <code>icon</code> is used in the<br>

      inactive state, and <code>activeIcon</code> is used in the active state.
      <strong>No default tint<br>

      is applied to either icon.</strong></p>

      </li>

      </ul>

      <p>If the icon provided is larger than [30 pixels (60 pixels for retina,
      90 pixels for super-retina)]<br>

      (https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/image-size-and-resolution/),<br>

      this image will be scaled to fit if used with activeIcon, and cropped at
      the bottom<br>

      otherwise.</p>

      <h4>Android Tab Icons</h4>

      <p>Can be used in combination with <code>iconFamily</code> in a
      BottomNavigation setup with <code>experimental:true</code>.</p>
  - name: iconFamily
    type: String
    summary: Specifies the font family or specific font to use.
    description: >
      <p>When using a BottomNavigation setup with <code>experimental:true</code>
      you can use this property in combination<br>

      with an <code>icon</code> to use an icon-font for the tab icons:</p>

      <div class="language-js"><pre class="shiki"><code>'#tab1': {
        icon: &quot;\ueac1&quot;,
        iconFamily: &quot;tabler-icons&quot;
      }

      </code></pre></div>
    platforms:
      - android
    since: 12.7.0
  - name: iconInsets
    type: TabIconInsets
    summary: The icon inset or outset for each edge.
    description: >
      <p>Use this property for example to center an icon without providing a
      title. To do that, set the<br>

      insets to <code>{ top: 6 }</code> and/or <code>{ left: 6 }</code>. The
      <code>right</code> and <code>bottom</code> are calculated internally to
      prevent the<br>

      icon from mutating.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 5.2.0
  - name: iconIsMask
    type: Boolean
    summary: Defines if the icon property of the tab must be used as a mask.
    description: >
      <p>When this property is true, the color data of the image specified as
      the icon is ignored and the image is used as an alpha mask.<br>

      When this is false, the color data of the image is preserved.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.1.3
  - name: activeIconIsMask
    type: Boolean
    summary: Defines if the active icon property of the tab must be used as a mask.
    description: >
      <p>This is the equivalent of the <a
      href="Titanium.UI.Tab.iconIsMask">iconIsMask</a> property, but for the
      active icon. When this is true, the active icon is<br>

      tinted with the color specified in <a
      href="Titanium.UI.TabGroup.tabsTintColor">tabsTintColor</a>. When this is
      false the image is rendered as is, though the<br>

      title of the tab is still tinted.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.1.3
  - name: tintColor
    type: String
    summary: Defines the color of the tab icon.
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      iphone: 3.1.3
      ipad: 3.1.3
      android: 9.0.3
  - name: activeTintColor
    type: String
    summary: Defines the color of the tab icon when it is active.
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      android: 9.0.3
  - name: title
    type: String
    summary: Title for this tab.
  - name: titleid
    type: String
    summary: >-
      Key identifying a string from the locale file to use for the tab title.
      Only one of <code>title</code> or <code>titleid</code> should be
      specified.
  - name: titleColor
    type: String, Titanium.UI.Color
    summary: Defines the color of the title of tab when it's inactive.
    description: |
      <p>The color of the title of the tab when it's inactive.</p>
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      iphone: 4.1.0
      ipad: 4.1.0
      android: 8.0.0
  - name: activeTitleColor
    type: String, Titanium.UI.Color
    summary: Defines the color of the title of tab when it's active.
    description: |
      <p>The color of the title of the tab when it's active.</p>
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      iphone: 4.1.0
      ipad: 4.1.0
      android: 8.0.0
  - name: window
    type: Titanium.UI.Window
    summary: >-
      Root-level tab window.  All tabs must have at least one root-level tab
      window.
methods:
  - name: open
    summary: Opens a new window.
    description: >
      <p>On iOS, the new window is opened as the top window in the tab's window
      stack. On Android, the new window is opened as a new, heavyweight window,
      obscuring the tab group.</p>
    parameters:
      - name: window
        type: Titanium.UI.Window
        summary: Window to open.
      - name: options
        type: openWindowParams
        summary: >
          Dictionary of display and animation settings to use when opening the
          window.<br>

          Identical to the <code>options</code> parameter to <a
          href="Titanium.UI.Window.open">Window.open</a>.<br>

          iOS only supports the <strong>animated</strong> parameter.<br>
        optional: true
  - name: close
    summary: Closes the top-level window for this tab.
    description: >
      <p>On iOS, this method should be used when closing a window opened from a
      tab, to<br>

      correctly maintain the iOS tab group's navigation state. Note that the
      window to<br>

      be closed <strong>must</strong> be passed in as a parameter:</p>

      <div class="language-js"><pre class="shiki"><code>myTab.close(tabWin);

      </code></pre></div>

      <p>On Android, this method does <strong>not</strong> take a
      <code>window</code> parameter.</p>

      <div class="language-js"><pre class="shiki"><code>myTab.close();

      </code></pre></div>

      <p>On Android, if a window has been opened in front of the tab using
      <code>Tab.open</code>,<br>

      a subsequent call to <code>Tab.close</code> is equivalent to calling
      <code>close</code> on that window.<br>

      No window stack is maintained, so only the most-recently opened window on
      a given<br>

      tab can be closed in this way.</p>

      <p>All platforms accept an optional <code>options</code> parameter. The
      only supported property<br>

      for this dictionary is the <code>animated</code> flag, which specifies
      whether the window<br>

      close should be animated. <code>animated</code> is true by default.</p>
    parameters:
      - name: window
        type: Titanium.UI.Window
        summary: >
          Window to close. This parameter <strong>must</strong> be omitted on
          Android.<br>
      - name: options
        type: Object
        summary: >
          Dictionary of display and animation settings to use when closing the
          window.<br>

          Identical to the <code>options</code> parameter to <a
          href="Titanium.UI.Window.close">Window.close</a>.<br>

          iOS only supports the <strong>animated</strong> parameter.<br>
        optional: true
  - name: setWindow
    summary: Sets the root window that appears in the tab.
    description: >
      <p>You can only use this method to set the tab's root window before the
      TabGroup containing this tab<br>

      is opened, that is, once the TabGroup is displayed, you cannot change the
      root window<br>

      that appears in the tab.</p>
    parameters:
      - name: window
        type: Titanium.UI.Window
        summary: Root window of the tab.
  - name: popToRootWindow
    summary: Closes all windows that are currently opened inside the tab.
    description: >
      <p>Note that only the <code>close</code> event of the most recently opened
      window is fired.</p>
    parameters:
      - name: options
        type: AnimatedOptions
        summary: >
          iOS only: Options supporting a single <code>animated</code> boolean
          property to determine whether the windows<br>

          will be animated while being closed (default: false).<br>
        optional: true
events:
  - name: unselected
    summary: Fired when the tab is no longer selected.
    properties:
      - name: index
        type: Number
        summary: Index of the current active tab.
      - name: previousIndex
        type: Number
        summary: Index of the previous active tab.
      - name: tab
        type: Titanium.UI.Tab
        summary: Current active tab object.
      - name: previousTab
        type: Titanium.UI.Tab
        summary: Previous active tab object.
  - name: click
    summary: Fired when this tab is clicked in the tab group.
  - name: selected
    summary: Fired when the tab is selected.
    properties:
      - name: index
        type: Number
        summary: Index of the current active tab.
      - name: previousIndex
        type: Number
        summary: Index of the previous active tab.
      - name: tab
        type: Titanium.UI.Tab
        summary: Current active tab object.
      - name: previousTab
        type: Titanium.UI.Tab
        summary: Previous active tab object.
examples:
  - title: Simple Tab Example
    code:
      - content: |-
          var window = Ti.UI.createWindow({
              title: 'My Tab'
          });

          var tab = Ti.UI.createTab({
              window: window,
              title: 'My Tab',
              icon: 'myicon.png'
          });

          tabGroup.addTab(tab);
        language: js
    intro: In this example, we create a simple tab and add it to a tab group.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <TabGroup id="tabGroup">
                  <Tab id="tab" title="My Tab" icon="myicon.png">
                      <Window id="window" title="My Tab" />
                  </Tab>
                </TabGroup>
          </Alloy>
        language: xml
    intro: Previous example an an Alloy view.
---

# Titanium.UI.Tab

A tab instance for a [TabGroup](Titanium.UI.TabGroup).

A `TabGroup` tab instance. Each tab includes a button and one or more windows, which
holds the "contents" of the tab. Users can select a tab by clicking on the tab button.

Use the [Titanium.UI.createTab](/api/titanium/ui) method or **`<Tab>`** Alloy element to create a tab.

Use [TabGroup.setActiveTab](Titanium.UI.TabGroup.setActiveTab) to switch between tabs
in a tab group.

The behavior of tabs and tab groups follows the platform's native navigation style,
which varies significantly between platforms.

#### iOS Platform Implementation Notes

On iOS, the tab maintains a stack of windows. Windows on top
of the stack can partially or totally obscure windows lower in the stack.  Calling
[open](Titanium.UI.Tab.open) opens a new window on top of the window stack. When a window
is closed, either by the user or by code, the window is removed from the stack, making
the previous window visible. The root tab window cannot be removed.

On iOS the tab controls are generally kept on screen to allow a user to
navigate inside the app. Tab controls are hidden when the user is performing a modal
task (for example, composing a message). In this case, the app should provide a button
in the navigation bar to return to the previous screen. On iOS, the window should also
be opened as modal. On iOS, The tab controls can also be hidden by opening the new window
with [tabBarHidden](Titanium.UI.Window.tabBarHidden) set to `true`.

When closing a tab window in iOS, you should always use the
[Tab.close](Titanium.UI.Tab.close) method to ensure that the tab group maintains its
navigation state.

#### Android Platform Implementation Notes

On Android, the tab does not maintain a stack of windows.
Calling [open](Titanium.UI.Tab.open) opens a new, heavyweight window, which
by default covers the tab group entirely. This seems quite different from the iOS model,
but it is the standard model for Android applications. Users can use the **Back** button
to close the window and return to the tab group.

On Android, tab windows can be closed using either
[Tab.close](Titanium.UI.Tab.close) or [Window.close](Titanium.UI.Window.close). Since
no window stack is maintained, only a single window opened using
[Tab.open](Titanium.UI.Tab.open) can be closed using `Tab.close`.

As on iOS, the root tab window cannot be closed.


**Extends:** `Titanium.UI.View` · **Since:** 0.8

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

