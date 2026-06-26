---
title: Modules.Facebook
properties:
  - name: AUDIENCE_ONLY_ME
    type: Number
    summary: Published content is only visible to the user.
    description: >
      <p>Use to set the default audience with either <a
      href="Modules.Facebook.LoginButton.audience">LoginButton.audience</a><br>

      or <a
      href="/api/modules/facebook">Modules.Facebook.requestNewPublishPermissions</a>.</p>
    since: 4.0.0
  - name: AUDIENCE_FRIENDS
    type: Number
    summary: Published content is only visible to the user and user's friends.
    description: >
      <p>Use to set the default audience with either <a
      href="Modules.Facebook.LoginButton.audience">LoginButton.audience</a><br>

      or <a
      href="/api/modules/facebook">Modules.Facebook.requestNewPublishPermissions</a>.</p>
    since: 4.0.0
  - name: AUDIENCE_EVERYONE
    type: Number
    summary: Published content is visible to all Facebook users.
    description: >
      <p>Use to set the default audience with either <a
      href="Modules.Facebook.LoginButton.audience">LoginButton.audience</a><br>

      or <a
      href="/api/modules/facebook">Modules.Facebook.requestNewPublishPermissions</a>.</p>
    since: 4.0.0
  - name: ACTION_TYPE_NONE
    type: Number
    summary: No action type.
    description: >
      <p>Use to set the actionType with <a
      href="Modules.Facebook.presentSendRequestDialog">presentSendRequestDialog()</a></p>
    since: 5.0.0
  - name: ACTION_TYPE_SEND
    type: Number
    summary: The user is sending an object to the friends.
    description: >
      <p>Use to set the actionType with <a
      href="Modules.Facebook.presentSendRequestDialog">presentSendRequestDialog()</a></p>
    since: 5.0.0
  - name: ACTION_TYPE_ASK_FOR
    type: Number
    summary: The user is asking for an object from friends.
    description: >
      <p>Use to set the actionType with <a
      href="Modules.Facebook.presentSendRequestDialog">presentSendRequestDialog()</a></p>
    since: 5.0.0
  - name: ACTION_TYPE_TURN
    type: Number
    summary: It is the turn of the friends to play against the user in a match.
    description: >
      <p>Use to set the actionType with <a
      href="Modules.Facebook.presentSendRequestDialog">presentSendRequestDialog()</a></p>
    since: 5.0.0
  - name: FILTER_NONE
    type: Number
    summary: No filter all friends can be displayed.
    description: >
      <p>Use to set the filter with <a
      href="Modules.Facebook.presentSendRequestDialog">presentSendRequestDialog()</a></p>
    since: 5.0.0
  - name: FILTER_APP_USERS
    type: Number
    summary: Friends using the app can be displayed.
    description: >
      <p>Use to set the filter with <a
      href="Modules.Facebook.presentSendRequestDialog">presentSendRequestDialog()</a></p>
    since: 5.0.0
  - name: FILTER_APP_NON_USERS
    type: Number
    summary: Friends not using the app can be displayed.
    description: >
      <p>Use to set the filter with <a
      href="Modules.Facebook.presentSendRequestDialog">presentSendRequestDialog()</a></p>
    since: 5.0.0
  - name: LOGIN_BUTTON_TOOLTIP_BEHAVIOR_AUTOMATIC
    type: Number
    summary: >
      The default behavior. The tooltip will only be displayed if the app is
      eligible<br>

      (determined by possible server round trip).<br>
    platforms:
      - iphone
      - ipad
      - android
    since: 6.1.0
  - name: LOGIN_BUTTON_TOOLTIP_BEHAVIOR_FORCE_DISPLAY
    type: Number
    summary: Force display of the tooltip (typically for UI testing).
    platforms:
      - iphone
      - ipad
      - android
    since: 6.1.0
  - name: LOGIN_BUTTON_TOOLTIP_BEHAVIOR_DISABLE
    type: Number
    summary: >
      Force disable. In this case you can still exert more refined control by
      manually<br>

      constructing a new login button.<br>
    platforms:
      - iphone
      - ipad
      - android
    since: 6.1.0
  - name: LOGIN_BUTTON_TOOLTIP_STYLE_NEUTRAL_GRAY
    type: Number
    summary: Dark gray background, white text, light gray close button.
    platforms:
      - iphone
      - ipad
      - android
    since: 6.1.0
  - name: LOGIN_BUTTON_TOOLTIP_STYLE_FRIENDLY_BLUE
    type: Number
    summary: Light blue background, white text, faded blue close button.
    platforms:
      - iphone
      - ipad
      - android
    since: 6.1.0
  - name: SHARE_DIALOG_MODE_AUTOMATIC
    type: Number
    summary: Acts with the most appropriate mode that is available.
    description: >
      <p>Use with <a
      href="Modules.Facebook.presentShareDialog">presentShareDialog()</a>.</p>
    platforms:
      - iphone
      - ipad
      - android
    since: 6.0.0
  - name: SHARE_DIALOG_MODE_NATIVE
    type: Number
    summary: Displays the dialog in the main native Facebook app.
    description: >
      <p>Use with <a
      href="Modules.Facebook.presentShareDialog">presentShareDialog()</a>.</p>
    platforms:
      - iphone
      - ipad
      - android
    since: 6.0.0
  - name: SHARE_DIALOG_MODE_SHARE_SHEET
    type: Number
    summary: Displays the dialog in the iOS integrated share sheet.
    description: >
      <p>Use with <a
      href="Modules.Facebook.presentShareDialog">presentShareDialog()</a>.</p>
    platforms:
      - iphone
      - ipad
    since: 6.0.0
  - name: SHARE_DIALOG_MODE_BROWSER
    type: Number
    summary: Displays the dialog in Safari.
    description: >
      <p>Use with <a
      href="Modules.Facebook.presentShareDialog">presentShareDialog()</a>.</p>
    platforms:
      - iphone
      - ipad
    since: 6.0.0
  - name: SHARE_DIALOG_MODE_WEB
    type: Number
    summary: Displays the dialog in a web view within the app.
    description: >
      <p>Use with <a
      href="Modules.Facebook.presentShareDialog">presentShareDialog()</a>.</p>
    platforms:
      - iphone
      - ipad
      - android
    since: 6.0.0
  - name: SHARE_DIALOG_MODE_FEED_BROWSER
    type: Number
    summary: Displays the feed dialog in Safari.
    description: >
      <p>Use with <a
      href="Modules.Facebook.presentShareDialog">presentShareDialog()</a>.</p>
    platforms:
      - iphone
      - ipad
    since: 6.0.0
  - name: SHARE_DIALOG_MODE_FEED_WEB
    type: Number
    summary: Displays the feed dialog in a webview within the app.
    description: >
      <p>Use with <a
      href="Modules.Facebook.presentShareDialog">presentShareDialog()</a>.</p>
    platforms:
      - iphone
      - ipad
      - android
    since: 6.0.0
  - name: EVENT_NAME_COMPLETED_REGISTRATION
    type: String
    summary: Log this event when a user has completed registration with the app.
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_NAME_VIEWED_CONTENT
    type: String
    summary: Log this event when a user has viewed a form of content in the app.
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_NAME_ADDED_TO_CART
    type: String
    summary: Log this event when the user has added an item to their cart.
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_NAME_INITIATED_CHECKOUT
    type: String
    summary: Log this event when the user has entered the checkout process.
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_NAME_ADDED_PAYMENT_INFO
    type: String
    summary: Log this event when the user has entered their payment info.
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_PARAM_CONTENT
    type: String
    summary: >
      Parameter key used to specify data for the one or more pieces of content
      being logged about.<br>
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_PARAM_CONTENT_ID
    type: String
    summary: >
      Parameter key used to specify an ID for the specific piece of content
      being logged about.<br>
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_PARAM_CONTENT_TYPE
    type: String
    summary: >
      Parameter key used to specify a generic content type/family for the logged
      event.<br>
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_PARAM_CURRENCY
    type: String
    summary: |
      Parameter key used to specify currency used with logged event.<br>
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_PARAM_NUM_ITEMS
    type: String
    summary: |
      Parameter key used to specify how many items are being processed.<br>
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: EVENT_PARAM_PAYMENT_INFO_AVAILABLE
    type: String
    summary: |
      Parameter key used to specify whether payment info is available.<br>
    platforms:
      - iphone
      - ipad
      - android
    since:
      android: 8.0.0
      iphone: 7.0.0
      ipad: 7.0.0
  - name: accessToken
    type: String
    summary: OAuth token set after a successful <code>authorize</code>.
  - name: accessTokenExpired
    type: Boolean
    summary: >-
      Returns whether the <a
      href="/api/modules/facebook">Modules.Facebook.accessToken</a> is expired
      by checking its <a
      href="/api/modules/facebook">Modules.Facebook.expirationDate</a> property.
    since: 7.4.0
  - name: accessTokenActive
    type: Boolean
    summary: >-
      Returns <code>true</code> if the <a
      href="/api/modules/facebook">Modules.Facebook.accessToken</a> is not
      <code>null</code> AND not expired.
    since: 7.4.0
  - name: appID
    type: String
    summary: >
      If not explicitly set, the default will be read from the application's<br>

      plist (FacebookAppID) which is the recommended way.<br>

      <br>

      Since Titanium SDK 6.2.0, this property also has a getter to return the
      currently set appID.<br>
  - name: canPresentOpenGraphActionDialog
    type: Boolean
    summary: >
      Checks if the device can support the use of the Facebook Open Graph action
      dialog from the Facebook App.<br>
    platforms:
      - android
    since: 4.0.0
  - name: expirationDate
    type: Date
    summary: Time at which the <code>accessToken</code> expires.
  - name: loggedIn
    type: Boolean
    summary: Indicates if the user is logged in.
  - name: MESSENGER_BUTTON_MODE_CIRCULAR
    type: Number
    summary: >
      Use with <a
      href="Modules.Facebook.MessengerButton.mode">MessengerButton.mode</a> to
      specify<br>

      the default send button reading &quot;Send&quot;.<br>
    description: >
      <p>You can localize the button by localizing &quot;Send&quot; in your
      strings.xml. Learn more about<br>

      that topic <a
      href="http://docs.appcelerator.com/platform/latest/#!/guide/Internationalization">here</a>.</p>
    platforms:
      - iphone
      - ipad
    since: 5.4.0
  - name: MESSENGER_BUTTON_MODE_RECTANGULAR
    type: Number
    summary: >
      Use with <a
      href="Modules.Facebook.MessengerButton.mode">MessengerButton.mode</a> to
      specify<br>

      the default send button reading &quot;Send&quot;.<br>
    description: >
      <p>You can localize the button by localizing &quot;Send&quot; in your
      strings.xml. Learn more about<br>

      that topic <a
      href="http://docs.appcelerator.com/platform/latest/#!/guide/Internationalization">here</a>.</p>
    platforms:
      - iphone
      - ipad
    since: 5.4.0
  - name: loginTracking
    type: Number
    summary: Gets or sets the desired tracking preference to use for login attempts.
    description: >
      <p>On Android, only the programmatic <a
      href="Modules.Facebook.authorize">authorize</a><br>

      and <a
      href="Modules.Facebook.requestNewReadPermissions">requestNewReadPermissions</a><br>

      entry points honor this — the <a
      href="Modules.Facebook.LoginButton">LoginButton</a><br>

      widget always uses classic login because the underlying Facebook
      Android<br>

      SDK button does not expose Limited Login configuration.</p>
    platforms:
      - android
      - iphone
      - ipad
    since: 10.0.0
  - name: nonce
    type: String
    summary: >
      Optional nonce used by Limited Login (<code>LOGIN_TRACKING_LIMITED</code>)
      to bind the<br>

      issued Authentication Token to a server-side challenge.<br>
    description: >
      <p>When set, the value is embedded as the <code>nonce</code> claim of the
      JWT the SDK<br>

      returns. Validate the same value on your backend to defeat replay. If<br>

      omitted, the Facebook SDK mints a random UUID. Has no effect when<br>

      <code>loginTracking == LOGIN_TRACKING_ENABLED</code>.</p>
    platforms:
      - android
    since: 19.0.0
  - name: authenticationToken
    type: String
    summary: >
      Returns the raw Authentication Token (JWT) from the most recent
      Limited<br>

      Login, or an empty string if none is currently set.<br>
    description: >
      <p>Equivalent to reading
      <code>FBSDKAuthenticationToken.currentAuthenticationToken.tokenString</code><br>

      on iOS and
      <code>AuthenticationToken.getCurrentAuthenticationToken().getToken()</code><br>

      on Android.</p>
    platforms:
      - android
    since: 19.0.0
  - name: advertiserTrackingEnabled
    type: Boolean
    summary: Gets or sets the SDK's advertiser-tracking flag.
    description: >
      <p>Maps to
      <code>FBSDKSettings.sharedSettings.isAdvertiserTrackingEnabled</code>.</p>

      <p>Starting with the Facebook iOS SDK v18, a
      <code>LOGIN_TRACKING_ENABLED</code> (classic)<br>

      login attempt is silently shimmed into the Limited Login flow whenever
      this<br>

      flag is <code>false</code> (the SDK default until App Tracking
      Transparency has been<br>

      granted). Set this to <code>true</code> after a successful<br>

      <a
      href="https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/requesttrackingauthorization(completionhandler:)">ATTrackingManager.requestTrackingAuthorization</a><br>

      in your app to keep classic login behaviour and continue receiving an<br>

      Access Token rather than an Authentication Token.</p>

      <p>See
      https://developers.facebook.com/docs/facebook-login/ios/limited-login/<br>

      for the difference between classic and Limited Login.</p>
    platforms:
      - iphone
      - ipad
    since: 16.0.0
  - name: LOGIN_TRACKING_ENABLED
    type: Number
    summary: >
      Use with <a
      href="Modules.Facebook.LoginButton.loginTracking">LoginButton.loginTracking</a>
      (iOS)<br>

      or the top-level <a
      href="Modules.Facebook.loginTracking">loginTracking</a> property to set
      the<br>

      desired tracking preference.<br>
    description: >
      <p>For more information on the differences between<br>

      <code>LOGIN_TRACKING_ENABLED</code> and
      <code>LOGIN_TRACKING_LIMITED</code> see:
      https://developers.facebook.com/docs/facebook-login/limited-login/</p>
    platforms:
      - android
      - iphone
      - ipad
    since: 10.0.0
  - name: LOGIN_TRACKING_LIMITED
    type: Number
    summary: >
      Use with <a
      href="Modules.Facebook.LoginButton.loginTracking">LoginButton.loginTracking</a>
      (iOS)<br>

      or the top-level <a
      href="Modules.Facebook.loginTracking">loginTracking</a> property to set
      the<br>

      desired tracking preference.<br>
    description: >
      <p>For more information on the differences between<br>

      <code>LOGIN_TRACKING_ENABLED</code> and
      <code>LOGIN_TRACKING_LIMITED</code> see:
      https://developers.facebook.com/docs/facebook-login/limited-login/</p>
    platforms:
      - android
      - iphone
      - ipad
    since: 10.0.0
  - name: permissions
    type: Array<String>
    summary: Array of permissions to request for your app.
    description: >
      <p>Be sure the permissions you want are set before calling<br>

      <a href="Modules.Facebook.authorize">authorize</a>.</p>

      <p>For a complete list of permissions, see the<br>

      <a
      href="https://developers.facebook.com/docs/facebook-login/permissions">official
      Facebook Permissions Reference</a></p>

      <h4>iOS Platform Notes</h4>

      <p>On iOS, do not request any write permissions before calling the
      <code>authorize()</code> method.  Use the<br>

      <a
      href="Modules.Facebook.requestNewPublishPermissions">requestNewPublishPermissions()</a><br>

      to request write permissions once the user authorizes the application.</p>

      <p><strong>Prior to Release 4.0.0</strong></p>

      <p>To use the build-in iOS 6 login, this property cannot contain any of
      the following:<br>

      offline_access, publish_actions, publish_stream, publish_checkins,<br>

      ads_management, create_event, rsvp_event, manage_friendlists,
      manage_notifications,<br>

      or manage_pages.</p>
  - name: uid
    type: String
    summary: Unique user ID returned from Facebook.
methods:
  - name: authorize
    summary: >
      Prompts the user to log in (if not already logged in) and authorize your
      application.<br>

      You can also use <a href="Modules.Facebook.LoginButton">LoginButton</a> to
      log in.<br>
    description: >
      <p>Be sure to set your required <a
      href="Modules.Facebook.permissions">permissions</a> before<br>

      calling <code>authorize</code>.</p>

      <p>A <a href="Modules.Facebook.login">login</a> event is generated to
      indicate a successful or<br>

      unsuccessful login attempt.</p>

      <h4>iOS Platform Notes</h4>

      <p>On iOS, do not request any write permissions before calling this
      method.  Use the<br>

      <a
      href="Modules.Facebook.requestNewPublishPermissions">requestNewPublishPermissions()</a><br>

      to request write permissions once the user authorizes the application.</p>
  - name: createActivityWorker
    summary: >
      Creates a Facebook proxy to hook into the activity of either a standalone
      <a href="/api/titanium/ui/window">Titanium.UI.Window</a><br>

      (not inside a TabGroup) or <a
      href="/api/titanium/ui/tab-group">Titanium.UI.TabGroup</a>.<br>
    description: >
      <p>Set the <code>lifecycleContainer</code> property in the dictionary
      passed to the method to either<br>

      the current active  instance of a <a
      href="/api/titanium/ui/window">Titanium.UI.Window</a> or <a
      href="/api/titanium/ui/tab-group">Titanium.UI.TabGroup</a> in order to
      monitor the activity's<br>

      lifecycle events, required by Facebook to synchronize its state between
      various<br>

      activities in the application.</p>

      <p>The proxy object must be created before calling the <code>open()</code>
      method on the associated Window<br>

      or TabGroup.</p>
    parameters:
      - name: parameters
        type: Dictionary<Titanium.Proxy>
        summary: >
          Properties to set on a new object, including any defined by <a
          href="/api/titanium/proxy">Titanium.Proxy</a> except<br>

          those marked not-creation or read-only.<br>

          <br>

          <strong>Note:</strong> You must set the
          <code>lifecycleContainer</code> property.<br>
    returns:
      type: Titanium.Proxy
  - name: initialize
    summary: >
      Loads a cached Facebook session if available, then fires the
      <code>login</code> event.<br>
    description: >
      <p>Be sure to set your <a href="Modules.Facebook.login">login</a> and <a
      href="Modules.Facebook.logout">logout</a><br>

      event listeners before calling <code>initialize</code>.</p>

      <p>**Note: This method needs to be called before calling <a
      href="/api/modules/facebook">Modules.Facebook.authorize</a><br>

      in order to be handle the auth-flow correctly. Otherwise, you might see a
      white screen without<br>

      any response.</p>
  - name: logCustomEvent
    summary: Logs a custom event to Facebook.
    description: >
      <p><strong>From the Facebook API Reference:</strong></p>

      <p>Events are not sent immediately when logged. They're cached and flushed
      out to the Facebook servers<br>

      in a number of situations:</p>

      <ul>

      <li>when an event count threshold is passed (currently 100 logged
      events).</li>

      <li>when a time threshold is passed (currently 15 seconds).</li>

      <li>when an app has gone to background and is then brought back to the
      foreground.</li>

      </ul>

      <p>Some things to note when logging events:</p>

      <ul>

      <li>There is a limit on the number of unique event names an app can use,
      on the order of 300.</li>

      <li>Event names must be between 2 and 40 characters and must consist of
      alphanumeric<br>

      characters, <code>_</code>, <code>-</code> or spaces.</li>

      </ul>
    parameters:
      - name: event
        type: String
        summary: Arbitrary string to log as an event.
      - name: valueToSum
        type: Number
        summary: >
          An arbitrary number that can represent any value (e.g., a price or a
          quantity).<br>

          When reported, all of the valueToSum properties will be summed
          together in Facebook<br>

          Analytics for Apps (since 5.4.0).<br>
        optional: true
      - name: params
        type: Object
        summary: |
          A dictionary object containing optional parameters (since 5.4.0).<br>
        optional: true
  - name: logPurchase
    summary: Log a purchase of the specified amount, in the specified currency.
    parameters:
      - name: amount
        type: Number
        summary: >
          Purchase amount to be logged, as expressed in the specified
          currency.<br>

          This value will be rounded to the thousandths place (e.g., 12.34567
          becomes 12.346).<br>
      - name: currency
        type: String
        summary: >
          Currency, is denoted as, e.g. &quot;USD&quot;, &quot;EUR&quot;,
          &quot;GBP&quot;.  See ISO-4217 for specific values.<br>
      - name: parameters
        type: Object
        summary: >
          A dictionary object containing optional parameters (since 8.0.0 in
          android and since 7.0.0 in ios).<br>
        optional: true
  - name: logout
    summary: Clears the OAuth <code>accessToken</code> and logs out the user.
  - name: presentShareDialog
    summary: Opens a Facebook link share dialog.
    description: >
      <p>Note: The <code>link</code> parameter is <strong>required</strong> by
      the Facebook SDK.</p>

      <p>Listen for the <a
      href="/api/modules/facebook">Modules.Facebook.shareCompleted</a> to be
      notified if the attempt was<br>

      successful or not.</p>
    parameters:
      - name: params
        type: ShareLinkContentParams
        summary: A dictionary object containing the required and optional parameters.
  - name: presentPhotoShareDialog
    summary: Opens a Facebook photo share dialog.
    description: >
      <p>Note: The <code>images</code> parameter is <strong>required</strong> by
      the Facebook SDK.</p>

      <p>Android Note: In order to share images on Android, the Facebook app
      needs to be installed and the<br>

      &quot;content provider&quot; settings in your Android manifest needs to be
      configured:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;provider
      android:name=&quot;com.facebook.FacebookContentProvider&quot;
                android:authorities=&quot;com.facebook.app.FacebookContentProvider&lt;YOUR_APP_ID&gt;&quot;
                android:exported=&quot;true&quot; /&gt;
      </code></pre></div>

      <p>Listen for the <a
      href="/api/modules/facebook">Modules.Facebook.shareCompleted</a> to be
      notified if the attempt was<br>

      successful or not.</p>
    parameters:
      - name: params
        type: SharePhotoContentParams
        summary: A dictionary object containing the required and optional parameters.
  - name: refreshPermissionsFromServer
    summary: Makes a request to Facebook to get the latest permissions granted.
    description: >
      <p>Facebook now grants total control over granted permissions, and if the
      user modified the permissions<br>

      outside of your app your cached token may not be updated.</p>

      <p>Listen for the <a
      href="/api/modules/facebook">Modules.Facebook.tokenUpdated</a> event to be
      notified if the attempt was<br>

      successful.</p>
  - name: requestWithGraphPath
    summary: Makes a Facebook Graph API request.
    description: >
      <p>If the request requires user authorization, the user must be logged in,
      and your app<br>

      must be authorized to make the request. You can check the<br>

      <a href="Modules.Facebook.loggedIn">loggedIn</a> property to determine if
      the user is logged in.</p>

      <p>Every Facebook object has an associated path. For example,
      &quot;me&quot; requests information about<br>

      the current user.</p>

      <p>For a complete list of Graph API methods, parameters and return types,
      see the<br>

      <a href="https://developers.facebook.com/docs/graph-api">official Facebook
      Graph API documentation</a>.</p>
    parameters:
      - name: path
        type: String
        summary: Graph API path to request.
      - name: params
        type: Dictionary
        summary: >
          A dictionary object for setting parameters required by the call, if
          any.<br>
      - name: httpMethod
        type: String
        summary: The HTTP method (GET/POST/DELETE) to use for the call.
      - name: callback
        type: Callback<FacebookGraphResponse>
        summary: Callback to invoke  when the request completes.
  - name: requestNewReadPermissions
    summary: Makes a request to Facebook for additional read permissions.
    description: >
      <p>Note that it is not an error for the user to 'Skip' your requested
      permissions,<br>

      so you should check the module's <code>permissions</code> property
      following the call.</p>
    parameters:
      - name: permissions
        type: Array<String>
        summary: >
          Array of additional permissions to request. For a complete list of
          permissions, see the<br>

          <a
          href="https://developers.facebook.com/docs/facebook-login/permissions">official
          Facebook Permissions Reference</a><br>
      - name: callback
        type: Callback<FacebookPermissionResponse>
        summary: Callback to invoke when the request completes.
  - name: requestNewPublishPermissions
    summary: Makes a request to Facebook for additional write permissions.
    description: >
      <p>Note that it is not an error for the user to 'Skip' your requested
      permissions,<br>

      so you should check the module's <code>permissions</code> property
      following the call.</p>
    parameters:
      - name: permissions
        type: Array<String>
        summary: >
          Array of additional permissions to request. For a complete list of
          permissions, see the<br>

          <a
          href="https://developers.facebook.com/docs/facebook-login/permissions">official
          Facebook Permissions Reference</a><br>
      - name: audience
        type: Number
        summary: |
          The extent of the visibility write permissions will have.<br>
      - name: callback
        type: Callback<FacebookPermissionResponse>
        summary: Callback to invoke when the request completes.
  - name: fetchDeferredAppLink
    summary: Fetch the deferred app link
    description: >
      <p>Deferred deep linking allows you to send people to a custom view
      after<br>

      they installed your app via the app store.</p>
    parameters:
      - name: callback
        type: Callback<FacebookDeferredAppLinkResponse>
        summary: Callback to invoke when the request completes.
  - name: setCurrentAccessToken
    summary: Set a new access token for using Facebook services.
    parameters:
      - name: params
        type: CurrentAccessTokenParams
        summary: >
          A dictionary object containing required and optional parameters.<br>

          <br>

          Note: There is an <a
          href="https://developers.facebook.com/bugs/675847029242342/">open
          issue</a> in the native Facebook SDK causing the appID<br>

          from not being updated although specified in the parameters. You can
          use<br>

          the <a href="/api/modules/facebook">Modules.Facebook.appID</a> setter
          to change the appID inside your app.<br>
  - name: logPushNotificationOpen
    summary: >-
      Log an app event that tracks that the application was open via Push
      Notification.
    parameters:
      - name: payload
        type: Dictionary
        summary: Notification payload received via in the  push-notification callback.
      - name: action
        type: String
        summary: Name of the action that was taken.
        optional: true
  - name: setPushNotificationsDeviceToken
    summary: >-
      Sets a device token to register the current application installation for
      push notifications.
    parameters:
      - name: deviceToken
        type: String
        summary: Device-token received when registering for push-notifications.
events:
  - name: login
    summary: Fired at session login.
    properties:
      - name: success
        type: Boolean
        summary: >
          Indicates if the user was logged in successfully.<br>

          Returns <code>true</code> if request succeeded, <code>false</code>
          otherwise.<br>
      - name: cancelled
        type: Number
        summary: >
          Indicates if the user canceled the login request by closing the
          dialog.<br>
      - name: error
        type: String
        summary: |
          Error message, if any returned.<br>
          Will be undefined if <code>success</code> is <code>true</code>.<br>
      - name: code
        type: Number
        summary: >
          Error code.<br>

          Error code will be 0 if <code>success</code> is <code>true</code>,
          nonzero otherwise. If the error<br>

          was generated by the operating system, that system's error value is
          used.<br>

          Otherwise, this value will be -1.<br>
      - name: uid
        type: String
        summary: User ID returned by Facebook if the login was successful.
      - name: data
        type: String
        summary: >
          Data returned by Facebook when we query for the UID (using graph path
          &quot;me&quot;)<br>

          after a successful login. Data is in JSON format, and includes
          information<br>

          such as user name, locale and gender.<br>

          <br>

          For Limited Login (<code>loginTracking ==
          LOGIN_TRACKING_LIMITED</code>) no Graph<br>

          request is made — instead this contains a JSON object built from
          the<br>

          verified claims of the Authentication Token (id, name, firstName,<br>

          middleName, lastName, email, picture).<br>
      - name: authenticationToken
        type: Dictionary<LimitedLoginAuthenticationToken>
        summary: >
          OIDC Authentication Token returned by the Facebook SDK when the
          login<br>

          attempt was made with <code>loginTracking ==
          LOGIN_TRACKING_LIMITED</code>.<br>

          <br>

          The <code>tokenString</code> is a signed JWT — forward it to your
          backend and<br>

          verify its signature against Facebook's JWKS
          (<code>https://www.facebook.com/.well-known/oauth/openid/jwks</code>)<br>

          with <code>aud</code> pinned to your Facebook App ID and
          <code>iss</code> pinned to<br>

          <code>https://www.facebook.com</code>. Limited Login does
          <strong>not</strong> issue an Access<br>

          Token, so the JWT and its claims are the only authoritative
          identity<br>

          material available to the server.<br>

          <br>

          Undefined when classic login (<code>LOGIN_TRACKING_ENABLED</code>) was
          used.<br>
  - name: logout
    summary: Fired at session logout.
  - name: requestDialogCompleted
    summary: Fired when the Send Request dialog is closed.
    properties:
      - name: success
        type: Boolean
        summary: >
          Returns <code>true</code> if request succeeded, <code>false</code>
          otherwise.<br>
      - name: cancelled
        type: Number
        summary: |
          Indicates if the user canceled the request by closing the dialog.<br>
      - name: error
        type: String
        summary: |
          Error message, if any returned.<br>
          Will be undefined if <code>success</code> is <code>true</code>.<br>
      - name: data
        type: Dictionary
        summary: |
          data returned by Facebook. See Facebook reference for details.<br>
  - name: shareCompleted
    summary: Fired when the Share dialog or Web Share dialog is closed.
    properties:
      - name: success
        type: Boolean
        summary: >
          Returns <code>true</code> if request succeeded, <code>false</code>
          otherwise.<br>
      - name: cancelled
        type: Number
        summary: |
          Indicates if the user canceled the request by closing the dialog.<br>
      - name: error
        type: String
        summary: |
          Error message, if any returned.<br>
          Will be undefined if <code>success</code> is <code>true</code>.<br>
  - name: inviteCompleted
    summary: Fired when the Invite dialog is closed.
    properties:
      - name: success
        type: Boolean
        summary: >
          Returns <code>true</code> if request succeeded, <code>false</code>
          otherwise.<br>
      - name: cancelled
        type: Number
        summary: |
          Indicates if the user canceled the request by closing the dialog.<br>
      - name: error
        type: String
        summary: |
          Error message, if any returned.<br>
          Will be undefined if <code>success</code> is <code>true</code>.<br>
  - name: tokenUpdated
    summary: >-
      Fired when <a
      href="Modules.Facebook.refreshPermissionsFromServer">refreshPermissionsFromServer</a>
      is completed.
examples:
  - title: Authorize
    code:
      - content: |-
          var fb = require('facebook');
          fb.initialize();
          fb.addEventListener('login', function (e) {
              if (e.success) {
                  alert('Logged in with User ID: ' + e.uid + ', Name: ' + JSON.parse(e.data).name);
                  label.text = 'Logged In = ' + fb.loggedIn;
              }
              else if (e.cancelled) {
                  // user cancelled
                  alert('cancelled');
              }
              else {
                  alert(e.error);
              }
          });
          fb.authorize();
        language: javascript
    intro: >-
      Shows official Facebook dialog for logging in the user and prompting the
      user to approve your

      requested permissions.  Listen for the module's
      [login](Modules.Facebook.login) event to

      determine whether the request succeeded.
  - title: Logout
    code:
      - content: |-
          fb.addEventListener('logout', function (e) {
              alert('Logged out');
          });
          fb.logout();
        language: javascript
    intro: >-
      Logout the user and forget the authorization token.  The

      [logout](Modules.Facebook.logout) event is fired after the user is logged
      out.
  - title: Authorize/Logout Using the Facebook LoginButton
    code:
      - content: >-
          // Don't forget to set your requested permissions, else the login
          button won't be effective.

          var win = Ti.UI.createWindow({ backgroundColor: 'white' });

          var fb = require('facebook');


          fb.addEventListener('login', function (e) {
              if (e.success) {
                  alert('Logged in');
              }
          });

          fb.addEventListener('logout', function (e) {
              alert('Logged out');
          });


          if (Ti.Platform.name === 'android') {
              win.fbProxy = fb.createActivityWorker({ lifecycleContainer: win });
          }


          // Add the button.  Note that it doesn't need a click event listener.

          win.add(fb.createLoginButton({
                  readPermissions: ['read_stream','email'],
                  top: 50
          }));


          win.open()
        language: javascript
    intro: >-
      You can use the the native Facebook
      [LoginButton](Modules.Facebook.LoginButton)

      to allow the user to log in as required. The button updates its state
      automatically depending

      on whether the user is logged in or not.  When the user is logged in, then
      the button

      will show "Logout", and vice-versa.


      Note that you don't need to set a click listener or anything else on the
      button.

      To be notified when the user logs in or out, add event listeners for the

      [login](Modules.Facebook.login) and [logout](Modules.Facebook.logout)
      events

      provided by the Facebook module, as in the example below.
  - title: Simple Graph API Call
    code:
      - content: |-
          fb.requestWithGraphPath('me', {}, 'GET', function (e) {
              if (e.success) {
                  alert(e.result);
              } else if (e.error) {
                  alert(e.error);
              } else {
                  alert('Unknown response');
              }
          });
        language: javascript
    intro: >-
      This example makes a call to the "me" graph path, which represents the
      current

      user. The JSON results are simply displayed in an alert.  This example
      assumes

      the user is already logged in. You can check this with
      <Modules.Facebook.loggedIn>.
  - title: Post a Photo Using the Graph API from the Gallery.
    code:
      - content: |-
          var b1 = Ti.UI.createButton({
              title: 'Upload Photo from Gallery with Graph API'
          });

          b1.addEventListener('click', function () {
              Titanium.Media.openPhotoGallery({
                  success: function (event) {
                      b1.title = 'Uploading Photo...';
                      var data = { picture: event.media };
                      // If publish_actions permission is not granted, request it
                      if (fb.permissions.indexOf('publish_actions') === -1) {
                          fb.requestNewPublishPermissions(['publish_actions'], fb.AUDIENCE_FRIENDS, function (e) {
                              if (!e.success) {
                                  Ti.API.info('Publish permission error');
                                  return;
                              }
                              if (e.cancelled) {
                                  Ti.API.info('Publish permission cancelled');
                                  return;
                              }
                              
                              Ti.API.info('Permissions: ' + fb.permissions);
                              fb.requestWithGraphPath('me/photos', data, 'POST', showRequestResult);
                          });
                      } else {
                          fb.requestWithGraphPath('me/photos', data, 'POST', showRequestResult);
                      }
                  },
                  error: function (e) {
                      Ti.API.error('Error opening photo gallery: ' + e.error);
                  }
              });
          });
        language: javascript
    intro: |-
      This example posts a photo to the user's account using the Graph API.
      This requires the "publish_actions" permission.
  - title: Post a Photo Using the Graph API with an image in resources directory
    code:
      - content: |-
          var b2 = Ti.UI.createButton({
              title: 'Upload Photo from file with Graph API',
              left: 10, 
              right: 10, 
              top: 90, 
              height: 80
          });

          b2.addEventListener('click', function () {
              b2.title = 'Uploading Photo...';
              var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images', 'flower.jpg');
              var blob = f.read();
              var data = {
                  picture: blob
              };
              // If publish_actions permission is not granted, request it
              if (fb.permissions.indexOf('publish_actions') < 0) {
                  fb.requestNewPublishPermissions(['publish_actions'], fb.AUDIENCE_FRIENDS, function (e) {
                      if (e.success) {
                          Ti.API.info('Permissions: ' + fb.permissions);
                          fb.requestWithGraphPath('me/photos', data, 'POST', showRequestResult);
                      }
                      if (e.error) {
                          Ti.API.info('Publish permission error');
                      }
                      if (e.cancelled) {
                          Ti.API.info('Publish permission cancelled');
                      }
                  });
              } else {
                  fb.requestWithGraphPath('me/photos', data, 'POST', showRequestResult);
              }
          });
        language: javascript
    intro: |-
      This example posts a photo to the user's account using the Graph API.
      This requires the "publish_actions" permission.
  - title: Show a basic Share Dialog
    code:
      - content: |-
          var button = Ti.UI.createButton({
              title: 'Share URL with Share Dialog'
          });

          button.addEventListener('click', function () {
              fb.presentShareDialog({
                  link: 'https://appcelerator.com/',
                  hashtag: 'codestrong'
              });
          });
        language: javascript
    intro: This example shows how to show a basic Share Dialog.
  - title: Share content to the Facebook Messenger
    code:
      - content: |-
          var btn = Ti.UI.createButton({
              title: 'Share media to messenger'
          });
          btn.addEventListener('click', function (e) {
              var media = [
                  Ti.UI.createView({ height: 30, width: 30,backgroundColor: '#ff0' }).toImage(), // Image blob
                  Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'test.gif').read(), // GIF Blob
                  Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'movie.mp4').read() // Video Blob
              ];

              var options = Ti.UI.createOptionDialog({
                  options: ['Photo', 'GIF', 'Video', 'Cancel'],
                  cancel: 3
              });
              options.addEventListener('click', function (e) {
                  if (e.index == 3) {
                      return;
                  }
                  FB.shareMediaToMessenger({
                      media: media[e.index],
                      metadata: 'Ti rocks!',
                      link: 'https://appcelerator.com',
                  });
              });
              options.show();
          });
        language: javascript
    intro: >-
      This example shows how to share images, GIF's and videos to the Facebook
      messenger.
  - title: Requesting additional permissions
    code:
      - content: >-
          fb.requestNewPublishPermissions(['publish_actions'],
          fb.AUDIENCE_FRIENDS, function (e) {
              if (e.success) {
                  fb.requestWithGraphPath('me/feed', null, 'POST', showRequestResult);
              } else {
                  Ti.API.debug('Failed authorization due to: ' + e.error);
              }
          });
        language: javascript
    intro: >-
      This example shows how to use the `requestNewPublishPermissions` method to
      request additional permissions

      to publish a post to the user's wall.
---

# Modules.Facebook

Add-on Facebook module.


The Facebook module is used for connecting your application with Facebook. 
This module supports the following features:

* Logging in to Facebook and authorizing your application with either the
  [Login button](Modules.Facebook.LoginButton) or programatically.

* Making requests through the Facebook Graph API using the
  [requestWithGraphPath()](Modules.Facebook.requestWithGraphPath) method.

## Getting Started

To use the Facebook module, you need a Facebook application. To create a Facebook App,
go to the Facebook Developer App: [developers.facebook.com/apps](https://developers.facebook.com/apps).

- Edit the `modules` section of your tiapp.xml file to include this module:

    ``` xml
    <modules>
        <!-- Add the appropriate line(s) to your modules section -->
        <module platform="android">facebook</module>
        <module platform="iphone">facebook</module>
    </modules>
    ```

- Instantiate the module with the `require('facebook')` method, then make subsequent API calls
  with the new Facebook object.

    ``` javascript
    var fb = require('facebook');
    fb.permissions = [FACEBOOK_APP_PERMISSIONS]; // e.g. ['email']
    fb.initialize();
    fb.authorize();
    ```

### Additional iOS Setup Steps

For the iOS platform, in the `ios plist dict` section of your `tiapp.xml` file, add the following keys:

  * `FacebookAppID` key with your Facebook App ID as the string value
  * `FacebookDisplayName` key with your Facebook App name (the one from `developer.facebook.com`) as the string value
  * `CFBundleURLTypes` key with a single-element array containing a dict as the value, where the dict contains:
      * `CFBundleURLName` key with the application app ID (same value as the `id` in the `tiapp.xml` file) as the string value
      * `CFBundleURLSchemes` key with a single-element array containing the Facebook App ID prefixed with `fb` as a string value

For example:

``` xml
<ti:app>
    <ios>
        <plist>
            <dict>
                <key>CFBundleURLTypes</key>
                <array>
                    <dict>
                        <key>CFBundleURLName</key>
                        <!-- Application ID same as the id value in the tiapp.xml file -->
                        <string>APP_ID</string>
                        <key>CFBundleURLSchemes</key>
                        <array>
                            <!-- Prefix the Facebook App ID with 'fb' -->
                            <string>fbFACEBOOK_APP_ID</string>
                        </array>
                    </dict>
                </array>
                <key>FacebookAppID</key>
                <!-- Facebook App ID -->
                <string>FACEBOOK_APP_ID</string>
                <key>FacebookDisplayName</key>
                <!-- Facebook App Name from developer.facebook.com -->
                <string>FACEBOOK_APP_NAME</string>
            </dict>
        </plist>
    </ios>
</ti:app>
```

To enable the use of Facebook dialogs (e.g., Login, Share), you also need to include the following key and values in `tiapp.xml`
to handle the switching in and out of your app:

``` xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>fbapi</string>
    <string>fb-messenger-api</string>
    <string>fbauth2</string>
    <string>fbshareextension</string>
</array>
```

If you choose to enable App Transport Security (ATS), you have to set the following keys and values in `tiapp.xml` `<ios>` section for facebook module:

``` xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
        <dict>
            <key>facebook.com</key>
            <dict>
                <key>NSIncludesSubdomains</key> 
                <true/>
                <key>NSExceptionRequiresForwardSecrecy</key> 
                <false/>
            </dict>
            <key>fbcdn.net</key>
            <dict>
                <key>NSIncludesSubdomains</key> 
                <true/>
                <key>NSExceptionRequiresForwardSecrecy</key>  
                <false/>
            </dict>
            <key>akamaihd.net</key>
            <dict>
                <key>NSIncludesSubdomains</key> 
                <true/>
                <key>NSExceptionRequiresForwardSecrecy</key> 
                <false/>
            </dict>
        </dict>
</dict>
```

### Additional Android Setup Steps

For the Android platform, you need to:

  * Add the Facebook Login activity to the Android manifest
  * Add the Facebook App ID to the Android resources `string.xml` file
  * Create a Facebook proxy and associate it with the current active activity

**Modify the Android Manifest**

Add the Facebook Login activity to the `android manifest` section of your `tiapp.xml` file.
You may need to add the `manifest` and `application` elements.

``` xml
<ti:app>
    <android xmlns:android="http://schemas.android.com/apk/res/android">
        <manifest>
            <application>
                <activity android:name="com.facebook.FacebookActivity" 
                          android:theme="@android:style/Theme.Translucent.NoTitleBar" 
                          android:label="YourAppName" 
                          android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation" />
                <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>

                <provider android:name="com.facebook.FacebookContentProvider"
                          android:authorities="com.facebook.app.FacebookContentProvider<YOUR_APP_ID>"
                          android:exported="true" />
            </application>
        </manifest>
    </android>
<ti:app>
```

**Add the Facebook App ID to Android Resources**

Add a string element to the `/platform/android/res/values/strings.xml` file with the `name`
attribute set to `facebook_app_id` and the node text set to your Facebook App ID. Create the
file if it does not exist.

``` xml
<resources>
    <string name="facebook_app_id">FACEBOOK_APP_ID</string>
</resources>
```
    
**Generate the Key Hashes**

Facebook requires you to add the Key Hash of the Android app in order for you to use the module. 
Steps to get the Key Hash as follows. Alternatively, if you do not have the correct Key Hash on 
the Android App, the App will give an error message when you login with the Key Hash of the App 
which you can then copy.

Use the following command to generate and receive the key-hashpath of your app. To do do, 
replace `<sdk-version>` with your SDK-version and run:

``` sh
keytool -exportcert -alias androiddebugkey -keystore ~/Library/Application\ Support/Titanium/mobilesdk/osx/<sdk-version>/dev_keystore | openssl sha1 -binary | openssl base64
```

You would also require, to fill up the Google Play Package Name which is the Application ID 
and the Class Name which is the Application ID followed by the Application Name concatenated 
with the word Activity. Example, an App called Kitchensink with Application ID of 
"com.appcelerator.kitchensink" will have the Class Name as "com.appcelerator.kitchensink.KitchensinkActivity".
Alternatively, you can check the Class Name in `<project>/build/android/AndroidManifest.xml` which is 
generated when you build the project. The launcher activity is the Class Name of the Application.

For more info, please see https://developers.facebook.com/docs/android/getting-started

**Create a Facebook Proxy**

Use the [createActivityWorker()](Modules.Facebook.createActivityWorker) method to create a
Facebook proxy. Pass the method a dictionary with the `lifecycleContainer` property set to
the current active instance of a standalone Window (window not contained in a tab group) or TabGroup.
Create the proxy before calling the `open()` method on either the window or tab group.

The Facebook module needs to hook into the lifecycle events of the current active activity
in order to synchronize its state between various activities in the application, for example,
to update the label of the Login button when the user logs in or out of Facebook.

Attach the proxy to the Window or TabGroup object, so it does not get garbage collected.

``` javascript
win.fbProxy = fb.createActivityWorker({ lifecycleContainer: win });
```

## Module API Usage

### Facebook Login and Authorization

To use Facebook, a user must logged into Facebook and explicitly authorize the application to
perform certain actions, such as accessing profile information or posting status messages.

Call [authorize](Modules.Facebook.authorize) to prompt the user to login and authorize
the application. Before calling this method, set the [Modules.Facebook.permissions](/api/modules/facebook) property
if additional permissions are needed.

Which approach you take depends on your UI and how central Facebook is to your
application.

### Manage Read and Write Permissions

In order to read or write content to a user's Facebook page, you need to request permission from
the user.  You can either request permissions when the user authorizes your application or
request permissions on the fly.

Before the user logs in and authorizes the application, you can request permissions for the
application to use by either: Setting the [Modules.Facebook.permissions](/api/modules/facebook) property if you are using `authorize()` 
method to have the user login and authorize the application.

For a complete list of permissions, see the [official Facebook Permissions Reference](https://developers.facebook.com/docs/facebook-login/permissions/)

**Refresh Application Permissions**

Since the user can selectively turn application permissions on and off from their Facebook
page, the application may need to refresh its granted permissions.

To refresh the application's permissions, call the
[refreshPermissionsFromServer()](Modules.Facebook.refreshPermissionsFromServer) method, then
listen for the [Modules.Facebook.tokenUpdated](/api/modules/facebook) event to be notified when permissions are updated.

``` javascript
fb.addEventListener('tokenUpdated', function (e) {
    Ti.API.info('Updated permissions: ' + JSON.stringify(fb.permissions));
});
fb.refreshPermissionsFromServer();
```

### Share Dialogs

The Share dialog prompts a person to publish an individual story or an Open Graph story
to their timeline. This does not require the user to authorize your app or any extended permissions,
so it is the easiest way to enable sharing.

Pass either method parameters you want to add to the post, such as a `link` or `hashtag`, or to
share the user's status, do not pass any parameters to the methods. Note: The `link` parameter is
**required** by the Facebook SDK.

To monitor if the share request succeeded or not, listen to the [Modules.Facebook.shareCompleted](/api/modules/facebook)
event.

``` javascript
fb.addEventListener('shareCompleted', function (e) {
    if (e.success) {
        Ti.API.info('Share request succeeded.');
    } else {
        Ti.API.warn('Failed to share.');
    }
});

fb.presentShareDialog({
    link: 'https://appcelerator.com/',
    hashtag: 'codestrong'
});
```

For details on the Share dialog, see the
[official Facebook Share Dialogs documentation](https://developers.facebook.com/docs/sharing/reference/share-dialog).

### Messenger Button

The Messenger button provides a quick mechanism for users to share content to the Facebook Messenger.
A click on the button can share the content to multiple users.

To create a Messenger button, call the [createMessengerButton()](Modules.Facebook.createMessengerButton)
method and pass the "mode" and "style" properties:

``` javascript
var messengerButton = fb.createMessengerButton({
    mode: fb.MESSENGER_BUTTON_MODE_RECTANGULAR
    style: fb.MESSENGER_BUTTON_STYLE_BLUE
});
win.add(messengerButton);
```

For more information, see the [MessengerButton API reference](Modules.Facebook.MessengerButton).

### Login Tracking

The top-level [loginTracking](Modules.Facebook.loginTracking) property and the
[LOGIN_TRACKING_ENABLED](Modules.Facebook.LOGIN_TRACKING_ENABLED) /
[LOGIN_TRACKING_LIMITED](Modules.Facebook.LOGIN_TRACKING_LIMITED) constants are
supported on both iOS and Android. When set to `LOGIN_TRACKING_LIMITED`, calling
[authorize](Modules.Facebook.authorize) (or `requestNewReadPermissions`) starts
Facebook's OIDC-based Limited Login flow: the SDK returns an Authentication
Token (a JWT) instead of a classic Graph access token. The JWT is delivered as
`event.authenticationToken.tokenString` on the [login](Modules.Facebook.login)
event — verify its signature server-side against Facebook's JWKS.

The [LoginButton](Modules.Facebook.LoginButton) widget honors `loginTracking`
on iOS only. The Android FB SDK's button does not expose Limited Login
configuration, so on Android you must trigger Limited Login through
`Modules.Facebook.authorize()` rather than via the button.

For more information, see the [Login Tracking API reference](https://developers.facebook.com/docs/facebook-login/limited-login) and review the constants above.


**Extends:** `Titanium.Module` · **Since:** 3.1.0 · **Platforms:** android, iphone, ipad

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

