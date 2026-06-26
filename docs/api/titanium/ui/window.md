---
title: Titanium.UI.Window
properties:
  - name: activity
    type: Titanium.Android.Activity
    summary: >
      Contains a reference to the Android Activity object associated with this
      window.<br>
    description: >
      <p>An Activity object is not created until the window is opened.<br>

      Before the window is opened, <code>activity</code> refers to an empty
      JavaScript object.<br>

      You can be set properties on this object, but cannot invoke any Activity
      methods on it.<br>

      Once the window is opened, the actual Activity object is created,<br>

      using any properties set on the JavaScript object. At this point, you can
      call methods<br>

      on the activity and access any properties that are set when the activity
      is created,<br>

      for example, <a
      href="Titanium.Android.Activity.actionBar">actionBar</a>.</p>
    platforms:
      - android
  - name: backButtonTitle
    type: String
    summary: >-
      Title for the back button. This is only valid when the window is a child
      of a tab.
    platforms:
      - iphone
      - ipad
      - macos
  - name: backButtonTitleImage
    type: String, Titanium.Blob
    summary: >-
      The image to show as the back button. This is only valid when the window
      is a child of a tab.
    platforms:
      - iphone
      - ipad
      - macos
  - name: backgroundColor
    type: String, Titanium.UI.Color
    summary: Background color of the window, as a color name or hex triplet.
    description: >
      <p>On Android, to specify a semi-transparent background, set the alpha
      value using the<br>

      <a href="Titanium.UI.Window.opacity">opacity</a> property before opening
      the window.</p>

      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: barColor
    type: String, Titanium.UI.Color
    summary: |
      Background color for the nav bar, as a color name or hex triplet.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 8.0.1
      iphone: '0.9'
      ipad: '0.9'
  - name: barImage
    type: String
    summary: Background image for the nav bar, specified as a URL to a local image.
    description: >
      <p>The behavior of this API on iOS has changed from version 3.2.0.
      Previous versions<br>

      of the SDK created a custom image view and inserted it as a child of the
      navigation bar.<br>

      The Titanium SDK now uses the native call to set the background image of
      the navigation bar.<br>

      You can set it to a 1px transparent png to use a combination of
      <code>barColor</code> and <code>hideShadow:true</code>.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: bottom
    type: Number, String
    summary: Window's bottom position, in platform-specific units.
    description: |
      <p>On Android, this property has no effect.</p>
  - name: closed
    type: Boolean
    summary: Determines whether this Window is closed.
    since: 9.1.0
  - name: exitOnClose
    type: Boolean
    summary: >
      Boolean value indicating if the application should exit when the
      Android<br>

      Back button is pressed while the window is being shown or when the
      window<br>

      is closed programmatically.<br>
    description: >
      <p>Starting in 3.4.2 you can set this property at any time. In earlier
      releases you can only set this as a createWindow({...}) option.</p>
    platforms:
      - android
  - name: extendEdges
    type: Array<Number>
    summary: >
      An array of supported values specified using the EXTEND_EDGE constants in
      <a href="/api/titanium/ui">Titanium.UI</a>.<br>
    description: >
      <p>This is only valid for windows hosted by navigation controllers or tab
      bar controllers. This property is used to<br>

      determine the layout of the window within its parent view controller. For
      example if the window is specified to extend its top edge<br>

      and it is hosted in a navigation controller, then the top edge of the
      window is extended underneath the navigation bar so that part<br>

      of the window is obscured. If the navigation bar is opaque (translucent
      property on window is false), then the top edge of the window<br>

      will only extend if <a
      href="/api/titanium/ui/window">Titanium.UI.Window.includeOpaqueBars</a> is
      set to true.</p>

      <p>The default behavior is to assume that no edges are to be extended.
      Must be specified before <strong>opening</strong> the window.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.1.3
      ipad: 3.1.3
      macos: 9.2.0
  - name: flagSecure
    type: Boolean
    summary: >
      Treat the content of the window as secure, preventing it from appearing in
      screenshots or from being viewed on non-secure displays.<br>
    description: >
      <p>When the value is true, preventing it from appearing in screenshots or
      from being viewed on non-secure displays.</p>
    platforms:
      - android
    since: 3.3.0
  - name: focused
    type: Boolean
    summary: Determines whether this TextArea has focus.
    since: 9.1.0
  - name: includeOpaqueBars
    type: Boolean
    summary: >
      Specifies if the edges should extend beyond opaque bars (navigation bar,
      tab bar, toolbar).<br>
    description: >
      <p>By default edges are only extended to include translucent bars. However
      if this is set to true, then edges are extended beyond<br>

      opaque bars as well.</p>

      <p>The default behavior assumes that this is false. Must be specified
      before <strong>opening</strong> the window.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.1.3
      ipad: 3.1.3
      macos: 9.2.0
  - name: autoAdjustScrollViewInsets
    type: Boolean
    summary: >
      Specifies whether or not the view controller should automatically adjust
      its scroll view insets.<br>
    description: >
      <p>When the value is true, it allows the view controller to adjust its
      scroll view insets in response<br>

      to the screen areas consumed by the status bar, navigation bar, toolbar
      and tab bar.</p>

      <p>The default behavior assumes that this is false. Must be specified
      before <strong>opening</strong> the window.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.1.3
      ipad: 3.1.3
      macos: 9.2.0
  - name: extendSafeArea
    type: Boolean
    summary: >
      Specifies whether the screen insets/notches are allowed to overlap the
      window's content or not.<br>
    description: >
      <p>If set <code>true</code>, then the contents of the window will be
      extended to fill the whole screen and allow the<br>

      system's UI elements (such as a translucent status-bar) and physical
      obstructions (such as the iPhone X<br>

      rounded corners and top sensor housing) to overlap the window's content.
      In this case, it is the app<br>

      developer's responsibility to position views so that they're unobstructed.
      On Android, you can use the<br>

      <a href="Titanium.UI.Window.safeAreaPadding">Window.safeAreaPadding</a>
      property after the window has been opened to<br>

      layout your content within the insets.</p>

      <p>If set <code>false</code>, then the window's content will be laid out
      within the safe-area and its child views will be<br>

      unobstructed. For example, you will not need to position a view below the
      top status-bar.</p>

      <p>Read more about the safe-area layout-guide in the <a
      href="https://developer.apple.com/ios/human-interface-guidelines/overview/iphone-x/">Human
      Interface Guidelines</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 7.5.0
      iphone: 6.3.0
      ipad: 6.3.0
      macos: 9.2.0
  - name: fullscreen
    type: Boolean
    summary: Boolean value indicating if the window is fullscreen.
    description: >
      <p>A fullscreen window occupies all of the screen space, hiding the status
      bar. Must be specified<br>

      at creation time or in the <code>options</code> dictionary passed to the
      <a href="Titanium.UI.Window.open">Window.open</a> method.</p>

      <p>On iOS the behavior of this property has changed. Starting from 3.1.3,
      if this property is undefined<br>

      then the property is set to the value for UIStatusBarHidden defined in
      tiapp.xml.<br>

      If that is not defined it is treated as <strong>explicit false</strong>.
      On earlier versions, opening a window with this property<br>

      undefined would not effect the status bar appearance.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: homeIndicatorAutoHidden
    type: Boolean
    summary: >-
      Boolean value indicating whether the system is allowed to hide the visual
      indicator for returning to the Home screen.
    description: >
      <p>Set this value true, if you want the system to determine when to hide
      the indicator. Set this value false,<br>

      if you want the indicator shown at all times. The system takes your
      preference into account, but setting<br>

      true is no guarantee that the indicator will be hidden.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 7.3.0
      ipad: 7.3.0
      macos: 9.2.0
  - name: hideShadow
    type: Boolean
    summary: Set this to true to hide the shadow image of the navigation bar.
    description: >
      <p>This property is only honored if a valid value is specified for the <a
      href="Titanium.UI.Window.barImage">barImage</a> property.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.2.0
      ipad: 3.2.0
      macos: 9.2.0
  - name: hidesBarsOnSwipe
    type: Boolean
    summary: Set this to true to hide the navigation bar on swipe.
    description: >
      <p>When this property is set to true, an upward swipe hides the navigation
      bar and toolbar.<br>

      A downward swipe shows both bars again.  If the toolbar does not have any
      items, it remains<br>

      visible even after a swipe.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 6.0.0
      ipad: 6.0.0
      macos: 9.2.0
  - name: hidesBarsOnTap
    type: Boolean
    summary: Set this to true to hide the navigation bar on tap.
    description: >
      <p>When the value of this property is true, the navigation controller
      toggles the hiding and<br>

      showing of its navigation bar and toolbar in response to an otherwise
      unhandled tap<br>

      in the content area.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 6.0.0
      ipad: 6.0.0
      macos: 9.2.0
  - name: hidesBarsWhenKeyboardAppears
    type: Boolean
    summary: Set this to true to hide the navigation bar when the keyboard appears.
    description: >
      <p>When this property is set to true, the appearance of the keyboard
      causes the<br>

      navigation controller to hide its navigation bar and toolbar.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 6.0.0
      ipad: 6.0.0
      macos: 9.2.0
  - name: hidesBackButton
    type: Boolean
    summary: Set this to true to hide the back button of navigation bar.
    description: >
      <p>When this property is set to <code>true</code>, the navigation window
      hides its back button.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 8.0.0
      iphone: 7.5.0
      ipad: 7.5.0
      macos: 9.2.0
  - name: largeTitleEnabled
    type: Boolean
    summary: >-
      A Boolean value indicating whether the title should be displayed in a
      large format.
    description: >
      <p>When set to <code>true</code>, the navigation bar will use a larger
      out-of-line<br>

      title view when requested by the current navigation item. To specify
      when<br>

      the large out-of-line title view appears, see <a
      href="/api/titanium/ui/window">Titanium.UI.Window.largeTitleDisplayMode</a>.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 6.3.0
      ipad: 6.3.0
      macos: 9.2.0
  - name: hidesSearchBarWhenScrolling
    type: Boolean
    summary: >-
      A Boolean value indicating whether the integrated search bar is hidden
      when scrolling any underlying content.
    description: >
      <p>When the value of this property is true, the search bar is visible only
      when the scroll position<br>

      equals the top of your content view. When the user scrolls down, the
      search bar collapses into<br>

      the navigation bar. Scrolling back to the top reveals the search bar
      again. When the value of<br>

      this property is false, the search bar remains regardless of the current
      scroll position.<br>

      You must set <a
      href="/api/titanium/ui/list-view">Titanium.UI.ListView.showSearchBarInNavBar</a>
      or <a
      href="/api/titanium/ui/table-view">Titanium.UI.TableView.showSearchBarInNavBar</a><br>

      property for this property to have any effect.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 8.1.0
      ipad: 8.1.0
      macos: 9.2.0
  - name: largeTitleDisplayMode
    type: Number
    summary: The mode to use when displaying the title of the navigation bar.
    description: >
      <p>Automatically use the large out-of-line title based on the state of
      the<br>

      previous item in the navigation bar. An item with<br>

      <code>largeTitleDisplayMode =
      Ti.UI.iOS.LARGE_TITLE_DISPLAY_MODE_AUTOMATIC</code><br>

      will show or hide the large title based on the request of the previous<br>

      navigation item. If the first item pushed is set to Automatic, then it<br>

      will show the large title if the navigation bar has
      <code>largeTitleEnabled = true</code>.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 6.3.0
      ipad: 6.3.0
      macos: 9.2.0
  - name: left
    type: Number, String
    summary: Window's left position, in platform-specific units.
    description: |
      <p>On Android, this property has no effect.</p>
  - name: leftNavButton
    type: Titanium.UI.View
    summary: View to show in the left nav bar area.
    description: >
      <p>In an Alloy application you can specify this property with a
      <code>&lt;LeftNavButton&gt;</code> element inside the<br>

      <code>&lt;Window&gt;</code> element, for example:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;Alloy&gt;
          &lt;TabGroup&gt;
              &lt;Tab&gt;
                  &lt;Window class=&quot;container&quot;&gt;
                      &lt;LeftNavButton platform=ios&gt;
                          &lt;Button title=&quot;Back&quot; onClick=&quot;closeWindow&quot; /&gt;
                      &lt;/LeftNavButton&gt;
                  &lt;/Window&gt;
              &lt;/Tab&gt;
          &lt;/TabGroup&gt;
      &lt;/Alloy&gt;

      </code></pre></div>
    platforms:
      - iphone
      - ipad
      - macos
  - name: leftNavButtons
    type: Array<Titanium.UI.View>
    summary: An Array of views to show in the left nav bar area.
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.3.0
      ipad: 3.3.0
      macos: 9.2.0
  - name: modal
    type: Boolean
    summary: Indicates to open a modal window or not.
    description: >
      <p>Set to <code>true</code> to create a modal window.</p>

      <p>Must be specified at creation time or in the dictionary passed to
      the<br>

      <a href="Titanium.UI.Window.open">Window.open</a> method.</p>

      <p>In the user interface, a modal window is a window that blocks the main
      application UI until<br>

      the modal window is dismissed.  A modal window requires the user to
      interact with it to<br>

      resume the normal flow of the application.</p>

      <p>See the &quot;Modal Windows&quot; section for platform-specific
      information.</p>
  - name: navBarHidden
    type: Boolean
    summary: >-
      Hides the navigation bar (<code>true</code>) or shows the navigation bar
      (<code>false</code>).
    description: >
      <h4>iOS Platform Notes</h4>

      <p>Since Titanium SDK 6.0.0, you can use this property to hide and show
      the property as well.</p>

      <p>Using this property, the navigation bar will be hidden or shown
      animated by default. Please note that<br>

      this property will only take effect if the window is used inside a <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a><br>

      and will be ignored otherwise. If you want to hide or show the navigation
      without an animation, use t<br>

      he methods <a
      href="/api/titanium/ui/window">Titanium.UI.Window.showNavBar</a> and <a
      href="/api/titanium/ui/window">Titanium.UI.Window.hideNavBar</a> with the
      second parameter<br>

      to specify the animation:</p>

      <div class="language-js"><pre class="shiki"><code>// &quot;myWindow&quot;
      is a Ti.UI.Window inside a Ti.UI.NavigationWindow

      myWindow.hideNavBar(true, {animated: false});

      </code></pre></div>

      <h4>Android Platform Notes</h4>

      <p>Since Release 3.3.0, due to changes to support the appcompat library,
      this property has no<br>

      effect. By default, the action bar is always displayed.  To hide the
      action bar, see the<br>

      <a
      href="https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Android_UI_Components_and_Conventions/Android_Action_Bar.html">Android
      Action Bar guide</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: navTintColor
    type: String, Titanium.UI.Color
    summary: The tintColor to apply to the navigation bar.
    description: >
      <p>This property is a direct correspondent of the tintColor property of
      NavigationBar on iOS.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.1.3
      ipad: 3.1.3
      macos: 9.2.0
  - name: navigationWindow
    type: Titanium.UI.NavigationWindow
    summary: >-
      The <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>
      instance hosting this window.
    description: >
      <p>Returns the navigation window that hosts this window. Returns
      <code>null</code> if the window is not<br>

      hosted by a navigation window.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 7.3.0
      ipad: 7.3.0
      macos: 9.2.0
  - name: opacity
    type: Number
    summary: The opacity from 0.0-1.0.
    description: >
      <p>iOS notes: For modal windows that cover the previous window, the
      previous window is<br>

      removed from the render stack after the modal window finishes opening. If
      the<br>

      modal window is semi-transparent, the underlying window will be visible
      during the<br>

      transition animation, but disappear as soon as the animation is completed.
      (In general<br>

      all modal windows cover the previous window, except for iPad modal windows
      using the<br>

      Page sheet or Form sheet style.)</p>

      <p>Android notes: If you set any of <code>windowSoftInputMode</code>,
      <code>fullscreen</code>, or <code>navBarHidden</code>,<br>

      <em>and</em> you wish to use the <code>opacity</code> property at any time
      during the window's lifetime,<br>

      be sure to set an <code>opacity</code> value <strong>before</strong>
      opening the window.  You can later change that<br>

      value -- and you can set it to 1 for full opacity if you wish -- but the
      important thing<br>

      is that you set it to a value before opening the window if you will want
      to set it at<br>

      any time during the window's lifetime.</p>

      <p>The technical reason for this is that if the opacity property is
      present (i.e., has<br>

      been set to something) and a new Android Activity is created for the
      window,<br>

      then a translucent theme will be used for the Activity.  Window
      transparency (opacity<br>

      values below 1) will only work in Android if the Activity's theme is
      translucent, and<br>

      Titanium only uses a translucent theme for an Activity if you set an
      opacity property<br>

      before opening the window.  Additionally, do not use <code>opacity</code>
      and <code>fullscreen: true</code><br>

      together, because translucent themes in Android cannot hide the status
      bar.  Finally,<br>

      if you do set the <code>opacity</code> property, be sure to also set a
      <code>backgroundImage</code> or<br>

      <code>backgroundColor</code> property as well, unless you want the window
      to be completely<br>

      transparent.</p>
  - name: onBack
    type: Callback<void>
    summary: >
      Callback function that overrides the default behavior when the user
      presses the <strong>Back</strong><br>

      button.<br>
    description: >
      <p>This was separated from the <a
      href="/api/titanium/ui/window">Titanium.UI.Window.androidback</a> event.
      You need to define this<br>

      callback if you explicitly want to override the back button behavior.</p>
    platforms:
      - android
  - name: orientationModes
    type: Array<Number>
    summary: |
      Array of supported orientation modes, specified using the orientation<br>
      constants defined in <a href="/api/titanium/ui">Titanium.UI</a>.<br>
    description: >
      <p><strong>Note:</strong> Using the <code>orientationModes</code> property
      to force the orientation of non-modal<br>

      windows is considered a bad practice and will not be supported, including
      forcing the<br>

      orientation of windows inside a NavigationWindow or TabGroup.</p>

      <p>To restrict this window to a certain set of orientations, specify one
      or more<br>

      of the orientation constants <a
      href="Titanium.UI.LANDSCAPE_LEFT">LANDSCAPE_LEFT</a>,<br>

      <a href="Titanium.UI.LANDSCAPE_RIGHT">LANDSCAPE_RIGHT</a>, <a
      href="Titanium.UI.PORTRAIT">PORTRAIT</a>,<br>

      <a href="Titanium.UI.UPSIDE_PORTRAIT">UPSIDE_PORTRAIT</a>.</p>

      <p><code>orientationModes</code> must be set <strong>before</strong>
      opening the window.</p>

      <p>To determine the current orientation of the <em>window</em>, see<br>

      <a href="Titanium.UI.Window.orientation">Window.orientation</a>.<br>

      To determine the current orientation of the <em>device</em>, see<br>

      <a href="Titanium.Gesture.orientation">Gesture.orientation</a>.<br>

      To be notified when the device's current orientation changes, add a
      listener for the<br>

      <a href="/api/titanium/gesture">Titanium.Gesture.orientationchange</a>
      event.</p>

      <h4>Android Orientation Modes</h4>

      <p>On Android, orientation behavior is dependent on the Android SDK
      level<br>

      of the device itself. Devices running Android 2.3 and above support
      &quot;sensor portrait<br>

      mode&quot; and &quot;sensor landscape mode,&quot; in these modes, the
      device is locked into<br>

      either a portrait or landscape orientation, but can switch between the
      normal and reverse<br>

      orientations (for example, between PORTRAIT and UPSIDE_PORTRAIT).</p>

      <p>In addition, the definition of portrait or<br>

      landscape mode can vary based on the physical design of the device. For
      example,<br>

      on some devices <a
      href="/api/titanium/ui/landscape_left">Titanium.UI.LANDSCAPE_LEFT</a>
      represents the top of the device being at<br>

      the 270 degree position but other devices may (based on camera position
      for example)<br>

      treat this position as <a
      href="/api/titanium/ui/landscape_right">Titanium.UI.LANDSCAPE_RIGHT</a>.
      In general, applications for<br>

      Android that need to be aware of orientation should try and limit their
      orientation<br>

      logic to handling either portrait or landscape rather than worrying about
      the reverse<br>

      modes. This approach will allow the orientation modes to adopt a more
      natural feel for<br>

      the specific device.</p>

      <p>The following list breaks down the orientation behavior on Android
      based on the contents<br>

      of the <code>orientationModes</code> array:</p>

      <ol>

      <li>

      <p>Empty array. Enables orientation to be fully controlled by the device
      sensor.</p>

      </li>

      <li>

      <p>Array includes one or both portrait modes <strong>and</strong> one or
      both landscape modes.<br>

      Enables full sensor control (identical to an empty array).</p>

      </li>

      <li>

      <p>Array contains PORTRAIT <strong>and</strong> UPSIDE_PORTRAIT. On
      Android 2.3 and above,<br>

      enables sensor portrait mode. This means the screen will shift between<br>

      both portrait modes according to the sensor inside the device.</p>

      <p>On Android versions below 2.3, locks screen orientation in normal
      portrait mode.</p>

      </li>

      <li>

      <p>Array contains LANDSCAPE_LEFT <strong>and</strong> LANDSCAPE_RIGHT. On
      Android 2.3 and above,<br>

      enables sensor landscape mode. This means the screen will shift between
      both<br>

      landscape modes according to the sensor inside the device.</p>

      <p>On Android versions below 2.3, locks screen orientation in normal
      landscape mode.</p>

      </li>

      <li>

      <p>Array contains <strong>only</strong> <a
      href="Titanium.UI.PORTRAIT">PORTRAIT</a>. Locks screen orientation<br>

      to normal portrait mode.</p>

      </li>

      <li>

      <p>Array contains <strong>only</strong> <a
      href="Titanium.UI.LANDSCAPE_LEFT">LANDSCAPE_LEFT</a>. Locks screen<br>

      orientation to normal landscape mode.</p>

      </li>

      <li>

      <p>Array contains <strong>only</strong> <a
      href="Titanium.UI.UPSIDE_PORTRAIT">UPSIDE_PORTRAIT</a>. On<br>

      Android 2.3 and above, locks screen in reverse portrait mode.</p>

      <p>On Android versions below 2.3, results are undefined.</p>

      </li>

      <li>

      <p>Array contains <strong>only</strong>  <a
      href="Titanium.UI.LANDSCAPE_RIGHT">LANDSCAPE_RIGHT</a>. On<br>

      Android 2.3 and above, locks screen in reverse landscape mode.</p>

      <p>On Android versions below 2.3, results are undefined.</p>

      </li>

      </ol>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: orientation
    type: Number
    summary: Current orientation of the window.
    description: >
      <p>To determine the current orientation of the <em>device</em>, see<br>

      <a href="Titanium.Gesture.orientation">Gesture.orientation</a>,
      instead.</p>

      <p>See<br>

      the discussion of the <a
      href="Titanium.UI.Window.orientationModes">orientationModes</a><br>

      property for more information on how the screen orientation is
      determined.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.0.0
      ipad: 3.0.0
      macos: 9.2.0
  - name: right
    type: Number, String
    summary: Window's right position, in platform-specific units.
    description: |
      <p>On Android, this property has no effect.</p>
  - name: rightNavButton
    type: Titanium.UI.View
    summary: View to show in the right nav bar area.
    description: >
      <p>In an Alloy application you can specify this property with a
      <code>&lt;RightNavButton&gt;</code> element in the<br>

      <code>&lt;Window&gt;</code> element, for example:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;Alloy&gt;
          &lt;TabGroup&gt;
              &lt;Tab&gt;
                  &lt;Window class=&quot;container&quot;&gt;
                      &lt;RightNavButton platform=ios&gt;
                          &lt;Button title=&quot;Back&quot; onClick=&quot;closeWindow&quot; /&gt;
                      &lt;/RightNavButton&gt;
                  &lt;/Window&gt;
              &lt;/Tab&gt;
          &lt;/TabGroup&gt;
      &lt;/Alloy&gt;

      </code></pre></div>
    platforms:
      - iphone
      - ipad
      - macos
  - name: rightNavButtons
    type: Array<Titanium.UI.View>
    summary: An Array of views to show in the right nav bar area.
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.3.0
      ipad: 3.3.0
      macos: 9.2.0
  - name: safeAreaPadding
    type: Padding
    summary: >-
      The padding needed to safely display content without it being overlapped
      by the screen insets and notches.
    description: >
      <p>When setting <a
      href="Titanium.UI.Window.extendSafeArea">Window.extendSafeArea</a> to
      <code>true</code>, the system's insets<br>

      such as a translucent status bar, translucent navigation bar, and/or
      camera notches will be allowed to<br>

      overlay on top of the window's content. In this case, it is the app
      developer's responsibility to<br>

      prevent these insets from overlapping key content such as buttons. This
      property provides the amount of<br>

      space needed to be added to the left, top, right, and bottom edges of the
      window root view to do this.</p>

      <p>This property won't return values greater than zero until the window
      has been opened. It is recommended<br>

      that you read this property via a <a
      href="/api/titanium/ui/view">Titanium.UI.View.postlayout</a> event
      listener since the padding values can<br>

      change when when the app's orientation changes or when showing/hiding the
      action bar.</p>

      <p>If the <a
      href="Titanium.UI.Window.extendSafeArea">Window.extendSafeArea</a>
      property is set <code>false</code>, then the<br>

      returned padding will be all zeros since the root content will be
      positioned between all insets.</p>

      <p>Below is an example on how to set up a safe-area view container using
      this property.</p>

      <div class="language-js"><pre class="shiki"><code>// Set up a window with
      a translucent top status bar and translucent nav bar.

      // This will only work on Android 4.4 and newer OS versions.

      var win = Ti.UI.createWindow({
          extendSafeArea: true,
          theme: 'Theme.Titanium.NoTitleBar',
          windowFlags: Ti.UI.Android.FLAG_TRANSLUCENT_NAVIGATION | Ti.UI.Android.FLAG_TRANSLUCENT_STATUS
      });


      // Set up a safe-area view to be laid out between the system insets.

      // You should use this as a container for child views.

      var safeAreaView = Ti.UI.createView({
          backgroundColor: 'green'
      });

      win.add(safeAreaView);

      win.addEventListener('postlayout', function() {
          // Update the safe-area view's dimensions after every 'postlayout' event.
          safeAreaView.applyProperties(win.safeAreaPadding);
      });


      // Open the window.

      win.open();

      </code></pre></div>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 7.5.0
      iphone: 8.0.0
      ipad: 8.0.0
      macos: 9.2.0
  - name: shadowImage
    type: String
    summary: Shadow image for the navigation bar, specified as a URL to a local image..
    description: >
      <p>This property is only honored if a valid value is specified for the <a
      href="Titanium.UI.Window.barImage">barImage</a> property.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.2.0
      ipad: 3.2.0
      macos: 9.2.0
  - name: splitActionBar
    type: Boolean
    summary: Boolean value to enable split action bar.
    description: >
      <p><code>splitActionBar</code> must be set <strong>before</strong> opening
      the window.<br>

      This property indicates if the window should use a <a
      href="https://developer.android.com/guide/topics/ui/actionbar.html#SplitBar">split
      action bar</a></p>
    deprecated: true
    platforms:
      - android
    since: 3.6.0
  - name: statusBarStyle
    type: Number
    summary: The status bar style associated with this window.
    description: >
      <p>Sets the status bar style when this window has focus. This is now the
      recommended way to control the<br>

      status bar style on the application.</p>

      <p>If this value is undefined, the value is set to UIStatusBarStyle
      defined in tiapp.xml.<br>

      If that is not defined it defaults to <a
      href="/api/titanium/ui">Titanium.UI.iOS.StatusBar.DEFAULT</a>.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.1.3
      ipad: 3.1.3
      macos: 9.2.0
  - name: statusBarColor
    type: Number
    summary: The color of the status bar (top bar) for this window.
    platforms:
      - android
    since:
      android: 12.5.0
  - name: navBarColor
    type: Number
    summary: The color of the navigation bar (bottom bar) for this window.
    platforms:
      - android
    since:
      android: 13.1.0
  - name: sustainedPerformanceMode
    type: Boolean
    summary: Maintain a sustainable level of performance.
    description: >
      <p>Performance can fluctuate dramatically for long-running apps, because
      the system throttles<br>

      system-on-chip engines as device components reach their temperature
      limits. This fluctuation<br>

      presents a moving target for app developers creating high-performance,
      long-running apps.</p>

      <p>Setting this feature to true will set sustained performance mode for
      the corresponding window.<br>

      If property is undefined then it defaults to false.</p>

      <p>Note: This feature is only available on supported devices. The
      functionality is experimental and<br>

      subject to change in future releases. See <a
      href="https://source.android.com/devices/tech/power/performance">Android
      docs</a> for further info.</p>
    platforms:
      - android
    since: 7.0.0
  - name: swipeToClose
    type: Boolean
    summary: >-
      Boolean value indicating if the user should be able to close a window
      using a swipe gesture.
    description: >
      <p>If <code>false</code> the user will not be able to swipe from the left
      edge of the window to close it.<br>

      Note: This property is only used for a window being embedded in a <a
      href="Titanium.UI.Tab">Ti.UI.Tab</a> or<br>

      <a href="Titanium.UI.NavigationWindow">Ti.UI.NavigationWindow</a>. It is
      enabled by default.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 5.2.0
      ipad: 5.2.0
      macos: 9.2.0
  - name: tabBarHidden
    type: Boolean
    summary: |
      Boolean value indicating if the tab bar should be hidden.<br>
    description: >
      <p><code>tabBarHidden</code> must be set <strong>before</strong> opening
      the window.</p>

      <p>This property is only valid when the window is the child of a tab.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: theme
    type: String
    summary: Name of the theme to apply to the window.
    description: >
      <p>Set the theme of the window. It can be either a <a
      href="https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Android_UI_Components_and_Conventions/Android_Themes.html#titanium-material-themes">built-in
      theme</a><br>

      or a <a
      href="https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Android_UI_Components_and_Conventions/Android_Themes.html#custom-themes">custom
      theme</a>.</p>
    platforms:
      - android
    since: 3.4.0
  - name: title
    type: String
    summary: Title of the window.
  - name: titleAttributes
    type: titleAttributesParams
    summary: Title text attributes of the window.
    description: >
      <p>Use this property to specify the color, font and shadow attributes of
      the title.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 12.3.0
      iphone: 3.2.0
      ipad: 3.2.0
      macos: 9.2.0
  - name: titleControl
    type: Titanium.UI.View
    summary: View to show in the title area of the nav bar.
    description: >
      <p>In an Alloy application you can specify this property using a
      <code>&lt;TitleControl&gt;</code> element inside<br>

      <code>&lt;Window&gt;</code>, for example:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;Alloy&gt;
          &lt;Window&gt;
              &lt;RightNavButton&gt;
                  &lt;Button title=&quot;Back&quot; /&gt;
              &lt;/RightNavButton&gt;
              &lt;LeftNavButton&gt;
                  &lt;Button title=&quot;Back&quot; /&gt;
              &lt;/LeftNavButton&gt;
              &lt;TitleControl&gt;
                  &lt;View backgroundColor=&quot;blue&quot; height=&quot;100%&quot; width=&quot;100%&quot;&gt;&lt;/View&gt;
              &lt;/TitleControl&gt;
          &lt;/Window&gt;
      &lt;/Alloy&gt;

      </code></pre></div>
    platforms:
      - iphone
      - ipad
      - macos
  - name: titleImage
    type: String
    summary: >-
      Image to show in the title area of the nav bar, specified as a local file
      path or URL.
    platforms:
      - iphone
      - ipad
      - macos
  - name: titlePrompt
    type: String
    summary: Title prompt for the window.
    platforms:
      - iphone
      - ipad
      - macos
  - name: titleid
    type: String
    summary: Key identifying a string from the locale file to use for the window title.
    description: >
      <p>Only one of <code>title</code> or <code>titleid</code> should be
      specified.</p>
  - name: titlepromptid
    type: String
    summary: >-
      Key identifying a string from the locale file to use for the window title
      prompt.
    description: >
      <p>Only one of <code>titlePrompt</code> or <code>titlepromptid</code>
      should be specified.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: toolbar
    type: Array<Titanium.UI.View>
    summary: |
      Array of button objects to show in the window's toolbar.<br>
    description: >
      <p>The toolbar is only shown when the window is inside a <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>.<br>

      To display a toolbar when a window is not inside a NavigationWindow, add
      an instance of a<br>

      <a href="/api/titanium/ui">Titanium.UI.iOS.Toolbar</a> to the window.</p>

      <p>To customize the toolbar, use the <a
      href="Titanium.UI.Window.setToolbar">setToolbar()</a> method.</p>

      <p>Since Alloy 1.6.0, you can specify this property using the
      <code>&lt;WindowToolbar&gt;</code> element as a<br>

      child of a <code>&lt;Window&gt;</code> element, for example:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;Alloy&gt;
          &lt;NavigationWindow&gt;
              &lt;Window&gt;
                  &lt;WindowToolbar&gt;
                      &lt;Button id=&quot;send&quot; title=&quot;Send&quot; style=&quot;Ti.UI.BUTTON_STYLE_OPTION_POSITIVE&quot; /&gt;
                      &lt;FlexSpace/&gt;
                      &lt;Button id=&quot;camera&quot; systemButton=&quot;Ti.UI.iOS.SystemButton.CAMERA&quot; /&gt;
                      &lt;FlexSpace/&gt;
                      &lt;Button id=&quot;cancel&quot; systemButton=&quot;Ti.UI.iOS.SystemButton.CANCEL&quot; /&gt;
                  &lt;/WindowToolbar&gt;
              &lt;/Window&gt;
          &lt;/NavigationWindow&gt;
      &lt;/Alloy&gt;

      </code></pre></div>
    platforms:
      - iphone
      - ipad
      - macos
  - name: top
    type: Number, String
    summary: Window's top position, in platform-specific units.
    description: |
      <p>On Android, this property has no effect.</p>
  - name: transitionAnimation
    type: Titanium.Proxy
    summary: >
      Use a transition animation when opening or closing windows in a<br>

      <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>
      or <a href="/api/titanium/ui/tab">Titanium.UI.Tab</a>.<br>
    description: >
      <p>Create the transition animation using the <a
      href="/api/titanium/ui">Titanium.UI.iOS.createTransitionAnimation</a><br>

      method.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.2.0
      ipad: 3.2.0
      macos: 9.2.0
  - name: translucent
    type: Boolean
    summary: Boolean value indicating if the nav bar is translucent.
    platforms:
      - iphone
      - ipad
      - macos
  - name: windowFlags
    type: Number
    summary: Additional flags to set on the Activity Window.
    description: >
      <p>Sets flags such as <a
      href="/api/titanium/ui/android/flag_translucent_navigation">Titanium.UI.Android.FLAG_TRANSLUCENT_NAVIGATION</a>
      and<br>

      <a
      href="/api/titanium/ui/android/flag_translucent_status">Titanium.UI.Android.FLAG_TRANSLUCENT_STATUS</a>.
      When using multiple flags, you must bitwise-or them together.</p>

      <p>See <a
      href="https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html">WindowManager.LayoutParams</a>
      for<br>

      list of additional flags that you can assign to this property. You can
      assign these Java flags to this property<br>

      by using their numeric constant.</p>

      <p>Setting <a
      href="/api/titanium/ui/window">Titanium.UI.Window.fullscreen</a> to
      <code>true</code> automatically sets the <a
      href="https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_FULLSCREEN">WindowManager.LayoutParams.FLAG_FULLSCREEN</a><br>

      flag. Setting <a
      href="/api/titanium/ui/window">Titanium.UI.Window.flagSecure</a> to true
      automatically sets the <a
      href="https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SECURE">WindowManager.LayoutParams.FLAG_SECURE</a>
      flag.</p>

      <p>Use <a
      href="/api/titanium/ui/android/status_bar_light">Titanium.UI.Android.STATUS_BAR_LIGHT</a>
      to set the status bar text color to light mode.</p>
    platforms:
      - android
    since: 3.3.0
  - name: uiFlags
    type: Number
    summary: Additional UI flags to set on the Activity Window.
    description: >
      <p>See <a
      href="https://developer.android.com/reference/android/view/View#setSystemUiVisibility(int)">WindowManager.LayoutParams</a>
      for a<br>

      list of additional flags that can be assigned to this property. For
      example, you can use <code>8192</code> (SYSTEM_UI_FLAG_LIGHT_STATUS_BAR)
      to set<br>

      the status bar text color to a dark color.</p>
    platforms:
      - android
    since: 12.7.0
  - name: windowSoftInputMode
    type: Number
    summary: >
      Determines whether a window's soft input area (ie software keyboard) is
      visible<br>

      as it receives focus and how the window behaves in order to accommodate it
      while keeping its<br>

      contents in view.<br>
    description: >
      <p>In order for this property to take effect on an emulator, its Android
      Virtual Device (AVD)<br>

      must be configured with the <code>Keyboard Support</code> setting set to
      <code>No</code>. Note that it is always<br>

      recommended to test an application on a physical device to understand its
      true behavior.</p>

      <p>This property is capable of representing two settings from the soft
      input <em>visibility</em><br>

      constants and soft input <em>adjustment</em> constants<br>

      using the <a
      href="http://en.wikipedia.org/wiki/Bitwise_operation#OR">bitwise OR</a>
      operation.</p>

      <p>Note that in JavaScript, bitwise OR is achieved using the single pipe
      operand. See the<br>

      example for a demonstration.</p>

      <p>For more information, see the official Android Developers website API
      Reference for<br>

      <a
      href="https://developer.android.com/reference/android/view/Window.html#setSoftInputMode(int)">Window.setSoftInputMode</a>.</p>
    platforms:
      - android
  - name: windowPixelFormat
    type: Number
    summary: Set the pixel format for the Activity's Window.
    description: >
      <p>For more information on pixel formats, see<br>

      <a
      href="https://developer.android.com/reference/android/view/Window.html#setFormat(int)">Android
      SDK Window.setFormat</a></p>
    platforms:
      - android
    since: 1.8.0
  - name: activityExitTransition
    type: Number
    summary: The type of transition used when activity is exiting.
    description: >
      <p>Activity A's exit transition determines how views in A are animated
      when A starts B.<br>

      Applicable for Android 5.0 and above. This transition property will be
      ignored if <code>animated</code> is set to false.<br>

      Will also be ignored unless at least 1 view has been assigned to the
      <code>addSharedElement()</code> method,<br>

      except on Titanium 8.0.1 and higher where shared elements are no longer
      required to do transitions.</p>

      <p>See &quot;Material design activity transitions in Android&quot; in the
      main description of Titanium.UI.Window<br>

      for more information.</p>
    platforms:
      - android
    since: 5.2.0
  - name: activityEnterTransition
    type: Number
    summary: The type of transition used when activity is entering.
    description: >
      <p>Activity B's enter transition determines how views in B are animated
      when A starts B.<br>

      Applicable for Android 5.0 and above. This transition property will be
      ignored if <code>animated</code> is set to false.<br>

      Will also be ignored unless at least 1 view has been assigned to the
      <code>addSharedElement()</code> method,<br>

      except on Titanium 8.0.1 and higher where shared elements are no longer
      required to do transitions.</p>

      <p>See &quot;Material design activity transitions in Android&quot; in the
      main description of Titanium.UI.Window<br>

      for more information.</p>
    platforms:
      - android
    since: 5.2.0
  - name: activityReturnTransition
    type: Number
    summary: >-
      The type of transition used when returning from a previously started
      activity.
    description: >
      <p>Activity B's return transition determines how views in B are animated
      when B returns to A.<br>

      Applicable for Android 5.0 and above. This transition property will be
      ignored if <code>animated</code> is set to false.<br>

      Will also be ignored unless at least 1 view has been assigned to the
      <code>addSharedElement()</code> method,<br>

      except on Titanium 8.0.1 and higher where shared elements are no longer
      required to do transitions.</p>

      <p>See &quot;Material design activity transitions in Android&quot; in the
      main description of Titanium.UI.Window<br>

      for more information.</p>
    platforms:
      - android
    since: 5.2.0
  - name: activityReenterTransition
    type: Number
    summary: >-
      The type of transition used when reentering to a previously started
      activity.
    description: >
      <p>Activity A's reenter transition determines how views in A are animated
      when B returns to A.<br>

      Applicable for Android 5.0 and above. This transition property will be
      ignored if <code>animated</code> is set to false.<br>

      Will also be ignored unless at least 1 view has been assigned to the
      <code>addSharedElement()</code> method,<br>

      except on Titanium 8.0.1 and higher where shared elements are no longer
      required to do transitions.</p>

      <p>See &quot;Material design activity transitions in Android&quot; in the
      main description of Titanium.UI.Window<br>

      for more information.</p>
    platforms:
      - android
    since: 5.2.0
  - name: activitySharedElementExitTransition
    type: Number
    summary: >-
      The type of exit transition used when animating shared elements between
      two activities.
    description: >
      <p>Activity A's shared element exit transition animates shared elements
      before they transition from A to B<br>

      Applicable for Android 5.0 and above. This value will be ignored if
      <code>animated</code> is set to false.<br>

      See &quot;Material design activity transitions in Android&quot; in the
      main description of Titanium.UI.Window<br>

      for more information.</p>
    platforms:
      - android
    since: 5.2.0
  - name: activitySharedElementEnterTransition
    type: Number
    summary: >-
      The type of enter transition used when animating shared elements between
      two activities.
    description: >
      <p>Activity B's shared element enter transition determines how shared
      elements animate from A to B.<br>

      Applicable for Android 5.0 and above. This value will be ignored if
      <code>animated</code> is set to false.<br>

      See &quot;Material design activity transitions in Android&quot; in the
      main description of Titanium.UI.Window<br>

      for more information.</p>
    platforms:
      - android
    since: 5.2.0
  - name: activitySharedElementReturnTransition
    type: Number
    summary: >-
      The type of return transition used when animating shared elements between
      two activities.
    description: >
      <p>Activity B's shared element return transition determines how shared
      elements animate from B to A.<br>

      Applicable for Android 5.0 and above. This value will be ignored if
      <code>animated</code> is set to false.<br>

      See &quot;Material design activity transitions in Android&quot; in the
      main description of Titanium.UI.Window<br>

      for more information.</p>
    platforms:
      - android
    since: 5.2.0
  - name: activitySharedElementReenterTransition
    type: Number
    summary: >-
      The type of reenter transition used when animating shared elements between
      two activities.
    description: >
      <p>Activity A's shared element reenter transition animates shared elements
      after they have transitioned from B to A.<br>

      Applicable for Android 5.0 and above. This value will be ignored if
      <code>animated</code> is set to false.<br>

      See &quot;Material design activity transitions in Android&quot; in the
      main description of Titanium.UI.Window<br>

      for more information.</p>
    platforms:
      - android
    since: 5.2.0
methods:
  - name: addSharedElement
    summary: Adds a common UI element to participate in window transition animation.
    description: >
      <p>Available from Android 5.0. Use the current window's UI element that is
      contextually shared with the other window.</p>
    parameters:
      - name: view
        type: Titanium.UI.View
        summary: The shared view from the current window.
      - name: transitionName
        type: String
        summary: The assigned common transition name of UI elements in both windows.
  - name: close
    summary: Closes the window.
    description: >
      <p>Android only supports the argument type <a
      href="closeWindowParams">closeWindowParams</a>.</p>
    parameters:
      - name: params
        type: >-
          Titanium.UI.Animation, Dictionary<Titanium.UI.Animation>,
          closeWindowParams
        summary: Animation or display properties to use when closing the window.
        optional: true
    returns:
      type: Promise<any>
      summary: >
        Starting in SDK 10.0.0, this method returns a `Promise` that will be
        resolved once the window is closed,

        akin to adding a one-time listener for the `close` event. If the window
        fails to close (for example, because

        it was not yet open) the `Promise` will be rejected.
  - name: hideNavBar
    summary: Hides the navigation bar.
    description: >
      <p>If the window is not displayed in a <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>,
      this method has no effect.</p>
    parameters:
      - name: options
        type: AnimatedOptions
        summary: >
          Options dictionary supporting a single <code>animated</code> boolean
          property to determine whether<br>

          the navigation bar will be animated (default) while being hidden. Note
          that the default here is equivalent to <code>{ animated: true
          }</code><br>
        optional: true
  - name: hideTabBar
    summary: Hides the tab bar. Must be called before opening the window.
    description: >
      <p>To hide the tab bar when opening a window as a child of a tab, call<br>

      <code>hideTabBar</code> or set <code>tabBarHidden</code> to
      <code>true</code> <strong>before</strong> opening the window.<br>

      If the window is not a child of a tab, this method has no effect.</p>
  - name: open
    summary: Opens the window.
    parameters:
      - name: params
        type: openWindowParams
        summary: Animation or display properties to use when opening the window.
        optional: true
    returns:
      type: Promise<any>
      summary: >
        Starting in SDK 10.0.0, this method returns a `Promise` that will be
        resolved once the window is opened,

        akin to adding a one-time listener for the `open` event. If the window
        fails to open (for example, because

        it is already opened or opening) the `Promise` will be rejected.
  - name: removeAllSharedElements
    summary: Clears all added shared elements.
    description: >
      <p>Available from Android 5.0. Use this method to clear all shared
      elements. This will not remove the views from view hierarchy.</p>
  - name: setToolbar
    summary: Sets the array of items to show in the window's toolbar.
    parameters:
      - name: items
        type: Array<Object>
        summary: Array of button objects to show in the window's toolbar.
      - name: params
        type: windowToolbarParam
        summary: Parameters to control the toolbar appearance.
        optional: true
  - name: showNavBar
    summary: Makes the navigation bar visible.
    description: >
      <p>If the window is not displayed in a <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>,
      this method has no effect.</p>
    parameters:
      - name: options
        type: AnimatedOptions
        summary: >
          Options dictionary supporting a single <code>animated</code> boolean
          property to determine whether<br>

          the navigation bar will be animated (default) while being shown. Note
          that the default here is equivalent to <code>{ animated: true
          }</code><br>
        optional: true
  - name: showTabBar
    summary: Shows the tab bar. Must be called before opening the window.
    description: >
      <p>To show the tab bar when opening a window as a child of a tab, call<br>

      <code>showTabBar</code> or set <code>tabBarHidden</code> to
      <code>false</code> <strong>before</strong> opening the window.<br>

      If the window is not a child of a tab, this method has no effect.</p>
  - name: showToolbar
    summary: Makes the bottom toolbar visible.
    description: >
      <p>If the window is not displayed in a <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>,
      this method has no effect.<br>

      Note: This method is only intended to work with toolbars that are created
      using <a href="Titanium.UI.Window.setToolbar">setToolbar</a>.<br>

      It will not have any effect on toolbars added manually to the window.</p>
    parameters:
      - name: options
        type: AnimatedOptions
        summary: >
          Options dictionary supporting a single <code>animated</code> boolean
          property to determine whether<br>

          the toolbar will be animated (default) while being shown. Note that
          the default here is equivalent to <code>{ animated: true }</code><br>
        optional: true
  - name: hideToolbar
    summary: Makes the bottom toolbar invisible.
    description: >
      <p>If the window is not displayed in a <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>,
      this method has no effect.<br>

      Note: This method is only intended to work with toolbars that are created
      using <a href="Titanium.UI.Window.setToolbar">setToolbar</a>.<br>

      It will not have any effect on toolbars added manually to the window.</p>
    parameters:
      - name: options
        type: AnimatedOptions
        summary: >
          Options dictionary supporting a single <code>animated</code> boolean
          property to determine whether<br>

          the toolbar will be animated (default) while being hidden. Note that
          the default here is equivalent to <code>{ animated: true }</code><br>
        optional: true
events:
  - name: androidback
    summary: Fired when the back button is pressed by the user.
    description: >
      <p>This event is fired when the current window's activity detects<br>

      a back button press by the user to navigate back.</p>

      <p>By default this event would trigger the current activity to be
      finished<br>

      and removed from the task stack. Subscribing to this event with a
      listener<br>

      will prevent the default behavior. To finish the activity from your
      listener<br>

      just call the <em>close</em> method of the window.</p>

      <p>This event replaces the android:back event. Some behavior<br>

      changes may exist such as the event no longer firing when the<br>

      user dismisses the keyboard with the back button or when the<br>

      user closes a full-screen video which is embedded in a web view<br>

      with the back button.</p>
  - name: androidcamera
    summary: Fired when the Camera button is released.
    description: >
      <p>Setting a listener disables the default key handling for this button.
      To restore<br>

      default behavior, remove the listener. It is recommended that you only
      have one<br>

      handler per window.</p>
  - name: androidfocus
    summary: Fired when the Camera button is half-pressed then released.
    description: >
      <p>Setting a listener disables the default key handling for this button.
      To restore<br>

      default behavior, remove the listener. It is recommended that you only
      have one<br>

      handler per window.</p>
  - name: androidsearch
    summary: Fired when the Search button is released.
    description: >
      <p>Setting a listener disables the default key handling for this button.
      To restore<br>

      default behavior, remove the listener. It is recommended that you only
      have<br>

      one handler per window.</p>
  - name: androidvoldown
    summary: Fired when the volume down button is released.
    description: >
      <p>Setting a listener disables the default key handling for this button.
      To restore<br>

      default behavior, remove the listener. It is recommended that you only
      have one<br>

      handler per window.</p>
  - name: androidvolup
    summary: Fired when the volume up button is released.
    description: >
      <p>Setting a listener disables the default key handling for this button.
      To restore<br>

      default behavior, remove the listener. It is recommended that you only
      have one<br>

      handler per window.</p>
  - name: blur
    summary: Fired when the window loses focus.
    description: >
      <p>On Android, this event also fires before putting the activity in the
      background<br>

      (before the activity enters the pause state).</p>

      <p>On iOS, this event does not fire before putting the application in the
      background.<br>

      The application needs to monitor the <a
      href="/api/titanium/app">Titanium.App.pause</a> event.<br>

      See <a href="/api/titanium/app">Titanium.App</a> for more information on
      the iOS application lifecycle.</p>
  - name: close
    summary: Fired when the window is closed.
  - name: focus
    summary: Fired when the window gains focus.
    description: >
      <p>The listener for this event must be defined before this window<br>

      is opened.</p>

      <p>On Android, this event also fires when the activity enters the
      foreground<br>

      (after the activity enters the resume state).</p>

      <p>On iOS, this event does not fire after the application returns to the
      foreground<br>

      if it was previously backgrounded.<br>

      The application needs to monitor the <a
      href="/api/titanium/app">Titanium.App.resumed</a> event.<br>

      See <a href="/api/titanium/app">Titanium.App</a> for more information on
      the iOS application lifecycle.</p>
  - name: open
    summary: Fired when the window is opened.
    description: |
      <p>The listener for this event must be defined before this window<br>
      is opened.</p>
examples:
  - title: Full Screen Window example
    code:
      - content: |-
          var window = Titanium.UI.createWindow({
              backgroundColor:'red'
          });
          window.open({fullscreen:true});
        language: js
    intro: Create a fullscreen window with a red background.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window id="win" backgroundColor="red" fullscreen="true" />
          </Alloy>
        language: xml
    intro: Previous example as an Alloy view.
---

# Titanium.UI.Window

The Window is an empty drawing surface or container.

To create a window, use the [Titanium.UI.createWindow](/api/titanium/ui) method or a **`<Window>`** Alloy element.

A window is a top-level container which can contain other views. Windows can
be *opened* and *closed*.  Opening a window causes the window and its child
views to be added to the application's render stack, on top of any previously opened
windows. Closing a window removes the window and its children from the render stack.

Windows *contain* other views, but in general they are not *contained* inside
other views. There are a few specialized views that manage windows:

* [NavigationWindow](Titanium.UI.NavigationWindow)
* [SplitWindow](Titanium.UI.iOS.SplitWindow)
* [TabGroup](Titanium.UI.TabGroup)
* [Tab](Titanium.UI.Tab)

By default, windows occupy the entire screen except for the navigation bar,
status bar, and in the case of windows contained in tab groups, the tab bar.
To take up the entire screen, covering any other UI, specify `fullscreen:true`
when creating the window.

### Pass Context Between Windows

To pass data between windows, use a
[CommonJS module](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/CommonJS_Modules_in_Titanium.html)
to save information from one window then retrieve it in another.  In the example below, the foo
module exposes two methods to store and retrieve an object.  The first window of the project
loads the foo module and uses the set method to store some data before opening the second window.
The second window loads the same module and is able to retrieve the content saved by the first
window with the get method.

Note that for Alloy projects, you can simply pass the context as the second argument of the
Alloy.createController method, then retrieve the data with the special variable `$.args`
in the controller code.

`app/lib/foo.js`:
``` js
// For a classic Titanium project, save the file to 'Resources/foo.js'
var data = {};
function setData (obj){
    data = obj;
}
function getData () {
    return data;
}

// The special variable 'exports' exposes the functions as public
exports.setData = setData;
exports.getData = getData;
```

`app/views/index.xml`:
``` xml
<Alloy>
    <Window backgroundColor="blue">
        <Label onClick="openWindow">Open the Red Window!</Label>
    </Window>
</Alloy>
```

`app/controllers/index.js`:
``` js
var foo = require('foo');
foo.setData({foobar: 42});

function openWindow () {
    var win2 = Alloy.createController('win2').getView();
    // For Alloy projects, you can pass context
    // to the controller in the Alloy.createController method.
    // var win2 = Alloy.createController('win2', {foobar: 42}).getView();
    win2.open();
}

$.index.open();
```

`app/views/win2.xml`:
``` xml
<Alloy>
    <Window backgroundColor="red">
        <Label id="label">I am a red window.</Label>
    </Window>
</Alloy>
```

`app/controllers/win2.js`:
``` js
var foo = require('foo');
$.label.text = foo.getData().foobar;

// For Alloy projects, you can also pass in context
// with the Alloy.createController method and retrieve
// it in the controller code.
// $.label.text = $.args.foobar;
```

### Modal Windows

In the user interface, a modal window is a window that blocks the main application UI until the
modal window is dismissed.  A modal window requires the user to interact with it to resume the
normal flow of the application.  For example, if an action requires the user to login, the
application can present a login window, then after the user is authenticated, the normal flow
of the application can be resumed.

To create a modal window, set the `modal` property to `true` in the dictionary passed to
either the `Titanium.UI.createWindow()` method or the Window object's `open()` method.

#### Android Behavior

The Android platform does not has the concept of a modal window but instead uses modal
dialogs. You are probably looking for a [Titanium.UI.AlertDialog](/api/titanium/ui/alert-dialog) or [Titanium.UI.OptionDialog](/api/titanium/ui/option-dialog) and
the `androidView` property rather than a modal window.

However, if you know what you are doing and use `modal`, Titanium creates a window with
a translucent background (if the background properties are not set).

The combination of `fullscreen:true` and `modal:true` will not work as expected.
If the background window displays the status bar or action bar, it will be visible behind the modal
window.

Note that Titanium will allow a non-modal window to open on top of a modal window on
Android.

#### iOS Behavior

By default, if you do not set a `backgroundColor`, the modal's background color will be the
value set to `Titanium.UI.backgroundColor`.

The modal window will not show the background window stack even if you make the modal translucent.
For fullscreen modals, when the modal appears, the background window stack is removed. For
non-fullscreen modals on the iPad, the background will be opaque gray if a background color
is not specified.

By default, modal windows appear from the bottom of the screen and slide up. To change the default
transition, set the `modalTransitionStyle` property to a
`Titanium.UI.iOS.MODAL_TRANSITION_STYLE_*` constant in the dictionary passed to the Window
object's `open()` method.

Modal windows should not support orientation modes that the window they are opened over do not
support. Doing otherwise *may* cause bad visual/redraw behavior after the modal is dismissed,
due to how iOS manages modal transitions.

Starting with Release 3.1.3, if the `orientationModes` property of a modal window is undefined,
then the orientations supported by this window would be the orientation modes specified by
the `tiapp.xml` with the `UISupportedInterfaceOrientations` key.

iOS does not allow opening non-modal windows on top of a modal window.

##### iPad Features

In addition to full-screen modal windows, iPad supports "Page sheet"
and "Form sheet" style windows:

* **Page sheet** style windows have a fixed width, equal to the width of the screen
  in portrait mode, and a height equal to the *current* height of the screen. This means
  that in portrait mode, the window covers the entire screen. In landscape mode,
  the window is centered on the screen horizontally.

* **Form sheet** style windows are smaller than the screen size, and centered on the screen.

The example below is a modal window using the Form sheet style:

&lt;img src="./window-modal.png" width="400" /&gt;

You can create this type of modal window on iPad with the following code snippet:

``` js
var win = Ti.UI.createNavigationWindow({
    window: Ti.UI.createWindow({
        title: "Modal Window"
    })
});

win.open({
    modal: true,
    modalTransitionStyle: Ti.UI.iOS.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
    modalStyle: Ti.UI.iOS.MODAL_PRESENTATION_FORMSHEET
});
```

### Animations

Windows can be animated like a [View](Titanium.UI.View), such as using an animation
to open or close a window.  The example below creates a window
that opens from small to large with a bounce effect.  This is done by applying a
transformation at initialization time that scales the original size of the window to 0.
When the window is opened, a new 2D transformation is applied that will scale the window
size from 0 to 110% of it's original size, then, after 1/20th of a second, it is scaled
back to it's original size at 100%. This gives the bounce effect during animation.

`app/views/index.xml`:
``` xml
<Alloy>
    <Window backgroundColor="blue" onPostlayout="animateOpen" >
        <Label color="orange">Animated Window</Label>
    </Window>
</Alloy>
```

`app/controllers/index.js`:
``` js
$.index.transform = Titanium.UI.createMatrix2D().scale(0);
$.index.open();

var a = Ti.UI.createAnimation({
    transform : Ti.UI.createMatrix2D().scale(1.1),
    duration : 2000,
});
a.addEventListener('complete', function() {
    $.index.animate({
        transform: Ti.UI.createMatrix2D(),
        duration: 200
    });
});

function animateOpen() {
    $.index.animate(a);
}
```

Note that to animate an Android window while you open it, you need to follow a specific
procedure which is explained below in "Window Transitions in Android".

### iOS Platform Notes

#### iOS Transition Animations

iOS contains built-in transition animations when switching between non-modal windows. In the Window's
`open` method, set the `transition` property to a `Titanium.UI.iOS.AnimationStyle` constant to use an animation.
For example, to flip right-to-left between two windows:

`app/views/index.xml`:
``` xml
<Alloy>
    <Window backgroundColor="blue" onOpen="animateOpen">
        <Label id="label">I am a blue window!</Label>
    </Window>
</Alloy>
```

`app/controllers/index.js`
``` js
function animateOpen() {
    Alloy.createController('win2').getView().open({
        transition: Ti.UI.iOS.AnimationStyle.FLIP_FROM_LEFT
    });
}
$.index.open();
```

`app/views/win2.xml`:
``` xml
<Alloy>
    <Window backgroundColor="red">
        <Label id="label">I am a red window!</Label>
    </Window>
</Alloy>
```

In the above example, the red window will be animated from the right-to-left over the blue window.

You can create transition animations when opening and closing windows in
either a [Titanium.UI.iOS.NavigationWindow](/api/titanium/ui) or [Titanium.UI.Tab](/api/titanium/ui/tab).

Use the [Titanium.UI.iOS.createTransitionAnimation](/api/titanium/ui) method to specify an animation objects to hide and
show the window, then set the newly created TransitionAnimation object to the window's
[Titanium.UI.Window.transitionAnimation](/api/titanium/ui/window) property.

In the example below, the windows are closed by rotating them upside down while simultaneously
making them transparent:

`app/views/index.xml`:
``` xml
<Alloy>
    <NavigationWindow platform="ios">
        <Window id="redwin" title="Red Window" backgroundColor="red">
            <Button id="button" onClick="openBlueWindow">Open Blue Window</Button>
        </Window>
    </NavigationWindow>
</Alloy>
```

`app/controllers/index.js`:
``` js
function openBlueWindow(e) {
    var bluewin = Alloy.createController('bluewin').getView();
    $.index.openWindow(bluewin);
}

$.redwin.transitionAnimation = Ti.UI.iOS.createTransitionAnimation({
    duration: 300,
    // The show transition makes the window opaque and rotates it correctly
    transitionTo: {
        opacity: 1,
        duration: 300,
        transform: Ti.UI.createMatrix2D()
    },
    // The hide transition makes the window transparent and rotates it upside down
    transitionFrom: {
        opacity: 0,
        duration: 300 / 2,
        transform: Ti.UI.createMatrix2D().rotate(180),
    }
});

$.index.open();
```

`app/views/bluewin.xml`:
``` xml
<Alloy>
    <Window title="Blue Window" backgroundColor="blue" opacity="0">
        <Button onClick="closeWindow">Close Window</Button>
    </Window>
</Alloy>
```

`app/controllers/bluewin.js`:
``` js
function closeWindow(){
    $.bluewin.close();
}

$.bluewin.transitionAnimation = Ti.UI.iOS.createTransitionAnimation({
    duration: 300,
    // The show transition makes the window opaque and rotates it correctly
    transitionTo: {
        opacity: 1,
        duration: 300,
        transform: Ti.UI.createMatrix2D()
    },
    // The hide transition makes the window transparent and rotates it upside down
    transitionFrom: {
        opacity: 0,
        duration: 300 / 2,
        transform: Ti.UI.createMatrix2D().rotate(180),
    }
});

$.bluewin.transform = Ti.UI.createMatrix2D().rotate(180);
```

### Android Platform Notes

#### Window Transitions in Android

A window is associated with a new Android [Activity](Titanium.Android.Activity). The only way
to animate the opening or closing of an Activity in Android is to apply an animation _resource_
to it. Passing a [Titanium.UI.Animation](/api/titanium/ui/animation) object as a parameter to [Titanium.UI.Window.open](/api/titanium/ui/window)
or [Titanium.UI.Window.close](/api/titanium/ui/window) will have no effect.

Instead, in the parameter dictionary you pass to [Titanium.UI.Window.open](/api/titanium/ui/window) or [Titanium.UI.Window.close](/api/titanium/ui/window),
you should set the `activityEnterAnimation` and `activityExitAnimation` keys to
animation resources. `activityEnterAnimation` should be set to the animation you want to run
on the incoming activity, while `activityExitAnimation` should be set to the animation you
want to run on the outgoing activity that you are leaving.

Animation resources are available through the `R` object. Use either [Titanium.Android.R](/api/titanium/android/r) for
built-in resources or [Titanium.App.Android.R](/api/titanium/app/android/r) for resources that you package in your application.

As an example, you may wish for the window that you are opening to fade in while the window
you are leaving should fade out:

``` js
var win2 = Ti.UI.createWindow();
win2.open({
    activityEnterAnimation: Ti.Android.R.anim.fade_in,
    activityExitAnimation: Ti.Android.R.anim.fade_out
});
```

See the official Android [R.anim](https://developer.android.com/reference/android/R.anim.html) documentation
for information about built-in animations.

For information on creating your own animation resource XML files, see
"[View Animation](https://developer.android.com/guide/topics/resources/animation-resource.html#View)"
in Android's Resources documentation. After creating an animation resource file, you can place it under
`platform/android/res/anim` in your Titanium project folder and it will be packaged in your app's APK
and then available via [Titanium.App.Android.R](/api/titanium/app/android/r).

#### Material design transitions in Android

You can provide transition between common elements among participating activities. For example in a master-detail pattern,
clicking on a row item animates the common elements of image, title smoothly into details activity as if they are part of
the same scene. This seamless animation is called shared element transition and can be achieved by the following steps.

Say window A is opening window B.
Firstly, specify a unique `transitionName` to the common UI elements between the two windows.
Next use `addSharedElement` method on window B passing the window A common UI element and the transition name. This tells the system
which views are shared between windows and performs the transition between them. Note that we specify the UI elements of window A
since the system needs the source element and connects the destination element from the shared transition name once window B is created
and shown.

For example to transition a preview ImageView in window A to a full-width ImageView in window B.

``` js
const windowA = Ti.UI.createWindow({
  title: "overview"
});

// Create an item in window A with a unique transitionName.
const viewA = Ti.UI.createImageView({
  top: 10,
  left: 10,
  scalingMode: Titanium.Media.IMAGE_SCALING_ASPECT_FILL,
  image: "https://api.lorem.space/image/shoes?w=500&h=500",
  height: 100,
  width: 100,
  transitionName: 'title'
});

const btn = Ti.UI.createButton({
  bottom: 10,
  title: "open new window"
})

btn.addEventListener("click", function() {
  // Before opening window B specify the common UI elements.
  windowB.addSharedElement(viewA, "title");
  windowB.open();

  windowB.activity.onCreate = () => {
    const actionBar = windowB.activity.actionBar;
    if (actionBar) {
      actionBar.displayHomeAsUp = true;
      actionBar.title = "New Title";
      actionBar.onHomeIconItemSelected = () => {
        windowB.close();
      };
    }
  };
})
windowA.add([viewA, btn]);
windowA.open();

// Creating an item in window B, note that the same transitionName is used.
const windowB = Ti.UI.createWindow({});
const viewB = Ti.UI.createImageView({
  scalingMode: Titanium.Media.IMAGE_SCALING_ASPECT_FILL,
  top: 0,
  left: 0,
  image: "https://api.lorem.space/image/shoes?w=500&h=500",
  height: 200,
  width: Ti.UI.FILL,
  transitionName: 'title'
});
const labelB = Ti.UI.createLabel({
  top: 210,
  left: 10,
  text: "Detail window"
})
windowB.add([viewB, labelB]);
```

Further you can use `activityEnterTransition`, `activityExitTransition`, `activityReenterTransition`
and `activityReturnTransition` to customize the way activities transition into the scene. These are intended
to be used with views set up as "shared elements" via the `addSharedElement()` method where these views
will be moved from window to the other. As of Titanium 8.0.1, you don't have to add views as shared elements
to use these transition animations, while in older version of Titanium that was required.

See the official Android [Activity Transitions](https://developer.android.com/training/material/animations.html#Transitions)
documentation for more information and supported transitions.

#### Android "root" Windows

In Android, you may wish to specify that a window which you create (such as the first
window) should be considered the root window and that the application should exit when
the back button is pressed from that window.  This is particularly useful if your application
is not using a Tab Group and therefore the splash screen window is appearing whenever you
press the back button from your lowest window on the stack.

To indicate that a particular window should cause an application to exit when the back
button is pressed, pass `exitOnClose: true` as one of the creation arguments, as shown here:

``` js
var win = Titanium.UI.createWindow({
  title: 'My Root Window',
  exitOnClose: true
});
```

Starting with Release 3.2.0, the root window's `exitOnClose` property is set to `true` by
default.  Prior to Release 3.2.0, the default value of the property was `false` for all windows.


**Extends:** `Titanium.UI.View` · **Since:** 0.9

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

