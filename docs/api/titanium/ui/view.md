---
title: Titanium.UI.View
properties:
  - name: accessibilityHidden
    type: Boolean
    summary: >-
      Whether the view should be &quot;hidden&quot; from (i.e., ignored by) the
      accessibility service.
    description: >
      <p>On iOS this is a direct analog of the
      <code>accessibilityElementsHidden</code> property defined in the<br>

      <a
      href="https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility">UIAccessibility<br>

      Protocol</a>.</p>

      <p>On Android, setting <code>accessibilityHidden</code> calls the
      native<br>

      <a
      href="https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29">View.setImportantForAccessibility</a><br>

      method. The native method is only available in Android 4.1 (API level
      16/Jelly Bean) and<br>

      later; if this property is specified on earlier versions of Android, it is
      ignored.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: accessibilityHint
    type: String
    summary: >-
      Briefly describes what performing an action (such as a click) on the view
      will do.
    description: >
      <p>On iOS this is a direct analog of the <code>accessibilityHint</code>
      property defined in the<br>

      <a
      href="https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility">UIAccessibility
      Protocol</a>.<br>

      On Android, it is concatenated together with<br>

      <a href="/api/titanium/ui/view">Titanium.UI.View.accessibilityLabel</a>
      and <a
      href="/api/titanium/ui/view">Titanium.UI.View.accessibilityValue</a> in
      the order: <code>accessibilityLabel</code>,<br>

      <code>accessibilityValue</code>, <code>accessibilityHint</code>. The
      concatenated value is then passed as the<br>

      argument to the native <a
      href="https://developer.android.com/reference/android/view/View.html#setContentDescription%28java.lang.CharSequence%29">View.setContentDescription</a>
      method.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: accessibilityLabel
    type: String
    summary: >-
      A succinct label identifying the view for the device's accessibility
      service.
    description: >
      <p>On iOS this is a direct analog of the <code>accessibilityLabel</code>
      property defined in the<br>

      <a
      href="https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility">UIAccessibility
      Protocol</a>.<br>

      On Android, it is concatenated together with<br>

      <a href="/api/titanium/ui/view">Titanium.UI.View.accessibilityValue</a>
      and <a href="/api/titanium/ui/view">Titanium.UI.View.accessibilityHint</a>
      in the order: <code>accessibilityLabel</code>,<br>

      <code>accessibilityValue</code>, <code>accessibilityHint</code>. The
      concatenated value is then passed as the<br>

      argument to the native <a
      href="https://developer.android.com/reference/android/view/View.html#setContentDescription%28java.lang.CharSequence%29">View.setContentDescription</a>
      method.<br>

      Defaults to Title or label of the control.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: accessibilityValue
    type: String
    summary: >-
      A string describing the value (if any) of the view for the device's
      accessibility service.
    description: >
      <p>On iOS this is a direct analog of the <code>accessibilityValue</code>
      property defined in the<br>

      <a
      href="https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility">UIAccessibility
      Protocol</a>.<br>

      On Android, it is concatenated together with<br>

      <a href="/api/titanium/ui/view">Titanium.UI.View.accessibilityLabel</a>
      and <a href="/api/titanium/ui/view">Titanium.UI.View.accessibilityHint</a>
      in the order: <code>accessibilityLabel</code>,<br>

      <code>accessibilityValue</code>, <code>accessibilityHint</code>. The
      concatenated value is then passed as the<br>

      argument to the native <a
      href="https://developer.android.com/reference/android/view/View.html#setContentDescription%28java.lang.CharSequence%29">View.setContentDescription</a>
      method.<br>

      Defaults to State or value of the control.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: accessibilityDisableLongPress
    type: Boolean
    summary: >-
      Boolean value to remove the long press notification for the device's
      accessibility service.
    description: >
      <p>Will disable the &quot;double tap and hold for long press&quot; message
      when selecting an item.</p>
    platforms:
      - android
    since: 12.4.0
  - name: anchorPoint
    type: Point
    summary: Coordinate of the view about which to pivot an animation.
    description: >
      <p>Used on iOS only. For Android, use <a
      href="/api/titanium/ui/animation">Titanium.UI.Animation.anchorPoint</a>.</p>

      <p>Anchor point is specified as a fraction of the view's size.  For
      example, <code>{0, 0}</code> is at<br>

      the view's top-left corner, <code>{0.5, 0.5}</code> at its center and
      <code>{1, 1}</code> at its bottom-right<br>

      corner.</p>

      <p>See the &quot;Using an anchorPoint&quot; example in <a
      href="/api/titanium/ui/animation">Titanium.UI.Animation</a> for a
      demonstration.<br>

      The default is center of this view.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 7.5.0
      iphone: 2.1.0
      ipad: 2.1.0
  - name: animatedCenter
    type: Point
    summary: Current position of the view during an animation.
    platforms:
      - iphone
      - ipad
      - macos
  - name: backgroundColor
    type: String, Titanium.UI.Color
    summary: Background color of the view, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>. Defaults to
      <code>Transparent</code>.</p>
  - name: backgroundDisabledColor
    type: String
    summary: Disabled background color of the view, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.<br>

      Defaults to the normal background color of this view.</p>
    platforms:
      - android
  - name: backgroundDisabledImage
    type: String
    summary: >-
      Disabled background image for the view, specified as a local file path or
      URL.
    description: >
      <p>If <code>backgroundDisabledImage</code> is undefined, and the normal
      background image<code>backgroundImage</code><br>

      is set, the normal image is used when this view is disabled.</p>
    platforms:
      - android
  - name: backgroundFocusedColor
    type: String
    summary: Focused background color of the view, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>

      <p>For normal views, the focused color is only used if
      <code>focusable</code> is <code>true</code>.<br>

      Defaults to the normal background color of this view.</p>
    platforms:
      - android
  - name: backgroundFocusedImage
    type: String
    summary: >-
      Focused background image for the view, specified as a local file path or
      URL.
    description: >
      <p>For normal views, the focused background is only used if
      <code>focusable</code> is <code>true</code>.<br>

      If <code>backgroundFocusedImage</code> is undefined, and the normal
      background image <code>backgroundImage</code><br>

      is set, the normal image is used when this view is focused.</p>
    platforms:
      - android
  - name: backgroundGradient
    type: Gradient
    summary: A background gradient for the view.
    description: >
      <p>A gradient can be defined as either linear or radial. A linear gradient
      varies continuously<br>

      along a line between the <code>startPoint</code> and
      <code>endPoint</code>.</p>

      <p>A radial gradient is interpolated between two circles, defined by
      <code>startPoint</code> and<br>

      <code>startRadius</code> and <code>endPoint</code> and
      <code>endRadius</code> respectively.</p>

      <p>The start points, end points and radius values can be defined in device
      units, in the view's<br>

      coordinates, or as percentages of the view's size. Thus, if a view is 60 x
      60, the center<br>

      point of the view can be specified as:</p>

      <div class="language-js"><pre class="shiki"><code>{ x: 30, y: 30 }

      </code></pre></div>

      <p>Or:</p>

      <div class="language-js"><pre class="shiki"><code>{ x: '50%', y: '50%' }

      </code></pre></div>

      <p>When specifying multiple colors, you can specify an <em>offset</em>
      value for each color, defining<br>

      how far into the gradient it takes effect. For example, the following
      color array specifies<br>

      a gradient that goes from red to blue back to red:</p>

      <div class="language-js"><pre class="shiki"><code>colors: [ { color:
      'red', offset: 0.0}, { color: 'blue', offset: 0.25 }, { color: 'red',
      offset: 1.0 } ]

      </code></pre></div>

      <p>Android's linear gradients ignores <code>backfillStart</code> and
      <code>backfillEnd</code>, treating them as if<br>

      they are true. Android's radial gradients ignore the <code>endPoint</code>
      property.<br>

      Defaults to no gradient.</p>
    platforms:
      - iphone
      - ipad
      - android
      - macos
  - name: backgroundImage
    type: String
    summary: Background image for the view, specified as a local file path or URL.
    description: >
      <p>Default behavior when <code>backgroundImage</code> is unspecified
      depends on the type of view and the platform.<br>

      For generic views, no image is used. For most controls (buttons,
      textfields, and so on), platform-specific default images are used.</p>
  - name: backgroundRepeat
    type: Boolean
    summary: Determines whether to tile a background across a view.
    description: >
      <p>Setting this to <code>true</code> makes the set
      <code>backgroundImage</code> repeat across the view as a series<br>

      of tiles. The tiling begins in the upper-left corner, where the upper-left
      corner of the<br>

      background image is rendered. The image is then tiled to fill the
      available space of the<br>

      view.</p>

      <p>Note that setting this to <code>true</code> may incur performance
      penalties for large views or<br>

      background images, as the tiling must be redone whenever a view is
      resized.</p>

      <p>On iOS, the following views do not currently support tiled
      backgrounds:</p>

      <ul>

      <li><a href="/api/titanium/ui/button">Titanium.UI.Button</a></li>

      <li><a href="/api/titanium/ui/text-field">Titanium.UI.TextField</a></li>

      <li><a href="/api/titanium/ui/label">Titanium.UI.Label</a></li>

      </ul>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: backgroundLeftCap
    type: Number
    summary: Size of the left end cap.
    description: >
      <p>See the section on backgroundLeftCap and backgroundTopCap behavior on
      iOS in <a href="/api/titanium/ui/view">Titanium.UI.View</a>.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: backgroundSelectedColor
    type: String, Titanium.UI.Color
    summary: Selected background color of the view, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.<br>

      Defaults to transparent, so the background color of this view will be
      used.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: '0.9'
      iphone: 13.1.0
      ipad: 13.1.0
      macos: 13.1.0
  - name: backgroundSelectedImage
    type: String
    summary: >-
      Selected background image URL for the view, specified as a local file path
      or URL.
    description: >
      <p>For normal views, the selected background is only used if
      <code>focusable</code> is <code>true</code>.</p>

      <p>If <code>backgroundSelectedImage</code> is undefined, and the normal
      background image <code>backgroundImage</code> is set<br>

      the normal image is used when this view is selected.</p>
    platforms:
      - android
  - name: backgroundTopCap
    type: Number
    summary: Size of the top end cap.
    description: >
      <p>See the section on backgroundLeftCap and backgroundTopCap behavior on
      iOS in <a href="/api/titanium/ui/view">Titanium.UI.View</a>.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: borderColor
    type: String, Titanium.UI.Color
    summary: Border color of the view, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>

      <p>Defaults to the normal background color of this view (Android), black
      (iOS).</p>
  - name: borderRadius
    type: Number, String, Array<Number>, Array<String>
    summary: Radius for the rounded corners of the view's border.
    description: >
      <p>Each corner is rounded using an arc of a circle.<br>

      Values for each corner can be specified. For example, '20px 20px' will set
      both left and right corners to <code>20px</code>.<br>

      Specifying '20px 20px 20px 20px' will set top-left, top-right,
      bottom-right and bottom-left corners in that order.</p>

      <p>If you have issues with dark artifacts on Android you can try to
      disable Hardware acceleration by setting a<br>

      <code>backgroundColor</code> with a small amount of transparency:
      <code>backgroundColor:&quot;rgba(255,255,255,254)&quot;</code>.</p>
  - name: borderWidth
    type: Number
    summary: Border width of the view.
    description: >
      <p>If <a href="Titanium.UI.View.borderColor">borderColor</a> is set
      without <a href="Titanium.UI.View.borderWidth">borderWidth</a>, this
      value<br>

      will be changed to 1 of the unit declared as 'ti.ui.defaultunit' in
      tiapp.xml descriptor.</p>
  - name: bottom
    type: Number, String
    summary: View's bottom position, in platform-specific units.
    description: >
      <p>This position is relative to the view's parent. Exact interpretation
      depends on the parent<br>

      view's <a href="Titanium.UI.View.layout">layout</a> property. Can be
      either a float value or a<br>

      dimension string (for example, '50%' or '10px').</p>

      <p>This is an input property for specifying where the view should be
      positioned, and does not<br>

      represent the view's calculated position.</p>

      <p>Defaults to <code>undefined</code>.</p>
  - name: center
    type: Point
    summary: View's center position, in the parent view's coordinates.
    description: >
      <p>This is an input property for specifying where the view should be
      positioned, and does not<br>

      represent the view's calculated position.</p>

      <p>Defaults to <code>undefined</code>.</p>
  - name: children
    type: Array<Titanium.UI.View>
    summary: Array of this view's child views.
  - name: clipMode
    type: Number
    summary: View's clipping behavior.
    description: >
      <p>Setting this to <a
      href="/api/titanium/ui">Titanium.UI.iOS.CLIP_MODE_ENABLED</a> enforces all
      child views to be clipped to this views bounds.<br>

      Setting this to <a
      href="/api/titanium/ui">Titanium.UI.iOS.CLIP_MODE_DISABLED</a> allows
      child views to be drawn outside the bounds of this view.<br>

      When set to <a
      href="/api/titanium/ui">Titanium.UI.iOS.CLIP_MODE_DEFAULT</a> or when this
      property is not set, clipping behavior is inferred.<br>

      See section on iOS Clipping Behavior in <a
      href="/api/titanium/ui/view">Titanium.UI.View</a>.</p>

      <p>Defaults to <code>undefined</code>. Behaves as if set to <a
      href="/api/titanium/ui">Titanium.UI.iOS.CLIP_MODE_DEFAULT</a>.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.3.0
  - name: elevation
    type: Number
    summary: Base elevation of the view relative to its parent in pixels.
    description: >
      <p>The elevation of a view determines the appearance of its shadow.<br>

      Higher elevations produce larger and softer shadows.</p>

      <p><strong>Note:</strong> The <code>elevation</code> property only works
      on <code>Titanium.UI.View</code> objects.<br>

      Many Android components have a default elevation that cannot be
      modified.<br>

      For more information, see<br>

      <a
      href="https://developer.android.com/training/material/shadows-clipping#Elevation">Google
      design guidelines: Elevation and shadows</a>.</p>
    platforms:
      - android
    since: 5.0.0
  - name: filterTouchesWhenObscured
    type: Boolean
    summary: >-
      Discards touch related events if another app's system overlay covers the
      view.
    description: >
      <p>This is a security feature to protect an app from
      &quot;tapjacking&quot;, where a malicious app can use a<br>

      system overlay to intercept touch events in your app or to trick the
      end-user to tap on UI<br>

      in your app intended for the overlay.</p>

      <p>Setting this property to <code>true</code> causes touch related events
      (including &quot;click&quot;) to not be fired<br>

      if a system overlay overlaps the view.</p>
    platforms:
      - android
    since: 9.3.0
  - name: focusable
    type: Boolean
    summary: Whether view should be focusable while navigating with the trackball.
    platforms:
      - android
  - name: height
    type: Number, String
    summary: View height, in platform-specific units.
    description: >
      <p>Defaults to: If undefined, defaults to either <a
      href="/api/titanium/ui/fill">Titanium.UI.FILL</a> or <a
      href="/api/titanium/ui/size">Titanium.UI.SIZE</a><br>

      depending on the view. See &quot;View Types and Default Layout
      Behavior&quot; in<br>

      <a
      href="https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/UI_Composite_Layout_Behavior_Spec.html">Transitioning
      to the New UI Layout System</a>.</p>

      <p>Can be either a float value or a dimension string (for example, '50%'
      or '40dp').<br>

      Can also be one of the following special values:</p>

      <ul>

      <li><a href="/api/titanium/ui/size">Titanium.UI.SIZE</a>. The view should
      size itself to fit its contents.</li>

      <li><a href="/api/titanium/ui/fill">Titanium.UI.FILL</a>. The view should
      size itself to fill its parent.</li>

      <li>'auto'.  Represents the default sizing behavior for a given type
      of<br>

      view. The use of 'auto' is deprecated, and should be replaced with the
      <code>SIZE</code> or<br>

      <code>FILL</code> constants if it is necessary to set the view's behavior
      explicitly.</li>

      </ul>

      <p>This is an input property for specifying the view's height dimension.
      To determine the<br>

      view's size once rendered, use the <a
      href="Titanium.UI.View.rect">rect</a> or<br>

      <a href="Titanium.UI.View.size">size</a> properties.</p>
  - name: hiddenBehavior
    type: Number
    summary: Sets the behavior when hiding an object to release or keep the free space
    description: >
      <p>If setting <code>hiddenBehavior</code> to <a
      href="/api/titanium/ui/hidden_behavior_gone">Titanium.UI.HIDDEN_BEHAVIOR_GONE</a>
      it will automatically release the space the view occupied.<br>

      For example: in a vertical layout the views below the object will move up
      when you hide<br>

      an object with
      <code>hiddenBehavior:Titanium.UI.HIDDEN_BEHAVIOR_GONE</code>.</p>

      <ul>

      <li><a
      href="/api/titanium/ui/hidden_behavior_invisible">Titanium.UI.HIDDEN_BEHAVIOR_INVISIBLE</a>.
      Keeps the space and just hides the object (default).</li>

      <li><a
      href="/api/titanium/ui/hidden_behavior_gone">Titanium.UI.HIDDEN_BEHAVIOR_GONE</a>.
      Releases the space and hides the object.</li>

      </ul>

      <p>Defaults to Titanium.UI.HIDDEN_BEHAVIOR_INVISIBLE.</p>
    platforms:
      - android
    since: 6.1.0
  - name: horizontalMotionEffect
    type: MinMaxOptions
    summary: Adds a horizontal parallax effect to the view
    description: >
      <p>Note that the parallax effect only happens by tilting the device so
      results can not be seen on Simulator.<br>

      To clear all motion effects, use the <a
      href="/api/titanium/ui">Titanium.UI.clearMotionEffects</a> method.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 7.3.0
  - name: id
    type: String
    summary: View's identifier.
    description: >
      <p>The <code>id</code> property of the Ti.UI.View represents the view's
      identifier. The identifier string does<br>

      not have to be unique. You can use this property with <a
      href="/api/titanium/ui/view">Titanium.UI.View.getViewById</a> method.</p>
  - name: left
    type: Number, String
    summary: View's left position, in platform-specific units.
    description: >
      <p>This position is relative to the view's parent. Exact interpretation
      depends on the<br>

      parent view's <a href="Titanium.UI.View.layout">layout</a> property. Can
      be either a float value or<br>

      a dimension string (for example, '50%' or '10px').</p>

      <p>This is an input property for specifying where the view should be
      positioned, and does not<br>

      represent the view's calculated position.</p>

      <p>Defaults to <code>undefined</code>.</p>
  - name: keepHardwareMode
    type: Boolean
    summary: A value indicating the render mode of the View
    description: >
      <p>Set to true to keep hardware mode when using a border and transparent
      backgrounds.</p>
    platforms:
      - android
    since:
      android: 13.2.0
  - name: layout
    type: String
    summary: |
      Specifies how the view positions its children.<br>
      One of: 'composite', 'vertical', or 'horizontal'.<br>
    description: >
      <p>There are three layout options:</p>

      <ul>

      <li>

      <p><code>composite</code> (or <code>absolute</code>). Default layout. A
      child view is positioned based on its<br>

      positioning properties or &quot;pins&quot;  (<code>top</code>,
      <code>bottom</code>, <code>left</code>, <code>right</code> and
      <code>center</code>).<br>

      If no positioning  properties are specified, the child is centered.</p>

      <p>The child is always sized based on its <code>width</code> and
      <code>height</code> properties, if these are<br>

      specified.  If the child's height or width is <em>not</em> specified
      explicitly, it may be<br>

      calculated implicitly from the positioning properties. For example, if
      both <code>left</code> and<br>

      <code>center.x</code> are specified, they can be used to calculate the
      width of the child control.</p>

      <p>Because the size and position properties can conflict, there is a
      specific precedence<br>

      order for the layout properties.  For vertical positioning, the
      precedence<br>

      order is: <code>height</code>, <code>top</code>, <code>center.y</code>,
      <code>bottom</code>.</p>

      <p>The following table summarizes the various combinations of properties
      that can<br>

      be used for vertical positioning, in order from highest precedence to
      lowest.<br>

      (For example, if <code>height</code>, <code>center.y</code> and
      <code>bottom</code> are all specified, the<br>

      <code>height</code> and <code>center.y</code> values take precedence.)</p>

      <p>&lt;table class=&quot;doc-table&quot;&gt;<br>

      &lt;thead&gt;<br>

      &lt;tr&gt;<br>

      &lt;th&gt;Scenario&lt;/th&gt;<br>

      &lt;th&gt;Behavior&lt;/th&gt;<br>

      &lt;/tr&gt;<br>

      &lt;/thead&gt;<br>

      &lt;tbody&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;&lt;code&gt;height&lt;/code&gt; &amp;
      &lt;code&gt;top&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;<br>

      Child positioned &lt;code&gt;top&lt;/code&gt; unit from parent's top,
      using specified &lt;code&gt;height&lt;/code&gt;;<br>

      any &lt;code&gt;center.y&lt;/code&gt; and &lt;code&gt;bottom&lt;/code&gt;
      values are ignored.<br>

      &lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;&lt;code&gt;height&lt;/code&gt; &amp;
      &lt;code&gt;center.y&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;<br>

      Child positioned with center at &lt;code&gt;center.y&lt;/code&gt;, using
      specified &lt;code&gt;height&lt;/code&gt;;<br>

      any &lt;code&gt;bottom&lt;/code&gt; value is ignored.<br>

      &lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;&lt;code&gt;height&lt;/code&gt; &amp;
      &lt;code&gt;bottom&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;Child positioned &lt;code&gt;bottom&lt;/code&gt; units from
      parent's bottom, using specified
      &lt;code&gt;height&lt;/code&gt;.&lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;&lt;code&gt;top&lt;/code&gt; &amp;
      &lt;code&gt;center.y&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;<br>

      Child positioned with top edge &lt;code&gt;top&lt;/code&gt; units from
      parent's top and center at<br>

      &lt;code&gt;center.y&lt;/code&gt;. Height is determined implicitly; any
      &lt;code&gt;bottom&lt;/code&gt; value is ignored.<br>

      &lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;&lt;code&gt;top&lt;/code&gt; &amp;
      &lt;code&gt;bottom&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;<br>

      Child positioned with top edge &lt;code&gt;top&lt;/code&gt; units from
      parent's top and bottom edge<br>

      &lt;code&gt;bottom&lt;/code&gt; units from parent's bottom. Height is
      determined implicitly.<br>

      &lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;Only &lt;code&gt;top&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;<br>

      Child positioned &lt;code&gt;top&lt;/code&gt; units from parent's top, and
      uses the default height<br>

      calculation for the view type.<br>

      &lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;&lt;code&gt;center.y&lt;/code&gt; and
      &lt;code&gt;bottom&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;<br>

      Child positioned with center at &lt;code&gt;center.y&lt;/code&gt; and
      bottom edge &lt;code&gt;bottom&lt;/code&gt;<br>

      units from parent's bottom. Height is determined implicitly.<br>

      &lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;Only &lt;code&gt;center.y&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;Child positioned with center at
      &lt;code&gt;center.y&lt;/code&gt;, and uses the default height calculation
      for the view type.&lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;Only &lt;code&gt;bottom&lt;/code&gt; specified&lt;/td&gt;<br>

      &lt;td&gt;Child positioned with bottom edge
      &lt;code&gt;bottom&lt;/code&gt; units from parent's bottom, and uses the
      default height calculation for the view type.&lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;tr&gt;<br>

      &lt;td&gt;&lt;code&gt;height&lt;/code&gt;, &lt;code&gt;top&lt;/code&gt;,
      &lt;code&gt;center.y&lt;/code&gt;, and &lt;code&gt;bottom&lt;/code&gt;
      unspecified&lt;/td&gt;<br>

      &lt;td&gt;Child entered vertically in the parent and uses the default
      height calculation for the child view type.&lt;/td&gt;<br>

      &lt;/tr&gt;<br>

      &lt;/tbody&gt;<br>

      &lt;/table&gt;</p>

      <p>Horizontal positioning works like vertical positioning, except that
      the<br>

      precedence is <code>width</code>, <code>left</code>,
      <code>center.x</code>, <code>right</code>.</p>

      <p>For complete details on composite layout rules, see<br>

      <a
      href="https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/UI_Composite_Layout_Behavior_Spec.html">Transitioning
      to the New UI Layout System</a><br>

      in the Titanium Mobile Guides.</p>

      </li>

      <li>

      <p><code>vertical</code>. Children are laid out vertically from top to
      bottom. The first child<br>

      is laid out <code>top</code> units from its parent's bounding box. Each
      subsequent child is<br>

      laid out below the previous child. The space between children is equal to
      the<br>

      upper child's <code>bottom</code> value plus the lower child's
      <code>top</code> value.</p>

      <p>Each child is positioned horizontally as in the composite layout
      mode.</p>

      </li>

      <li>

      <p><code>horizontal</code>. Horizontal layouts have different behavior
      depending on whether wrapping<br>

      is enabled. Wrapping is enabled by default (the
      <code>horizontalWrap</code> property is <code>true</code>).</p>

      <p>With wrapping behavior, the children are laid out horizontally from
      left to right,<br>

      <em>in rows</em>. If a child requires more horizontal space than exists in
      the current row,<br>

      it is wrapped to a new row. The height of each row is equal to the maximum
      height of<br>

      the children in that row.</p>

      <p>Wrapping behavior is available on iOS and Android. When the
      <code>horizontalWrap</code> property is<br>

      set to true, the first row is placed at the top of the parent view, and
      successive rows<br>

      are placed below the first row. Each child is positioned vertically
      <em>within its row</em> somewhat<br>

      like composite layout mode. In particular:</p>

      <ul>

      <li>If neither <code>top</code> or <code>bottom</code> is specified, the
      child is centered in the<br>

      row.</li>

      <li>If either <code>top</code> or <code>bottom</code> is specified, the
      child is aligned to either<br>

      the top or bottom of the row, with the specified amount of padding.</li>

      <li>If <em>both</em> <code>top</code> and <code>bottom</code> is specified
      for a given child, the properties<br>

      are both treated as padding.</li>

      </ul>

      <p>If the <code>horizontalWrap</code> property is false, the behavior is
      more equivalent to a vertical layout.<br>

      Children are laid or horizontally from left to right in a single row. The
      <code>left</code> and<br>

      <code>right</code> properties are used as padding between the children,
      and the <code>top</code> and <code>bottom</code><br>

      properties are used to position the children vertically.</p>

      <p>Defaults to Composite layout.</p>

      </li>

      </ul>
  - name: opacity
    type: Number
    summary: >-
      Opacity of this view, from 0.0 (transparent) to 1.0 (opaque). Defaults to
      1.0 (opaque).
  - name: overrideCurrentAnimation
    type: Boolean
    summary: When on, animate call overrides current animation if applicable.
    description: >
      <p>If this property is set to false, the animate call is ignored if the
      view is currently being animated.</p>

      <p>Defaults to <code>undefined</code> but behaves as false</p>
    platforms:
      - android
    since: 3.3.0
  - name: pullBackgroundColor
    type: String, Titanium.UI.Color
    summary: >
      Background color of the wrapper view when this view is used as either <a
      href="/api/titanium/ui/list-view">Titanium.UI.ListView.pullView</a> or <a
      href="/api/titanium/ui/table-view">Titanium.UI.TableView.headerPullView</a>.<br>

      <br>

      Defaults to <code>undefined</code>. Results in a light grey background
      color on the wrapper view.<br>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.3.0
  - name: previewContext
    type: Titanium.UI.iOS.PreviewContext
    summary: The preview context used in the 3D-Touch feature &quot;Peek and Pop&quot;.
    description: >
      <p>Preview context to present the &quot;Peek and Pop&quot; of a view. Use
      an configured instance<br>

      of <a href="/api/titanium/ui">Titanium.UI.iOS.PreviewContext</a> here.</p>

      <p>Note: This property can only be used on devices running iOS 9 or later
      and supporting 3D-Touch.<br>

      It is ignored on older devices and can manually be checked using <a
      href="/api/titanium/ui">Titanium.UI.iOS.forceTouchSupported</a>.</p>
    platforms:
      - iphone
    since: 5.1.0
  - name: right
    type: Number, String
    summary: View's right position, in platform-specific units.
    description: >
      <p>This position is relative to the view's parent. Exact interpretation
      depends on the<br>

      parent view's <a href="Titanium.UI.View.layout">layout</a> property. Can
      be either a float value or<br>

      a dimension string (for example, '50%' or '10px').</p>

      <p>This is an input property for specifying where the view should be
      positioned, and does not<br>

      represent the view's calculated position.</p>

      <p>Defaults to <code>undefined</code>.</p>
  - name: rect
    type: DimensionWithAbsolutes
    summary: |
      The bounding box of the view relative to its parent, in system units.<br>
    description: >
      <p>The view's bounding box is defined by its size and position.</p>

      <p>The view's size is <code>rect.width</code> x <code>rect.height</code>.
      The view's top-left position relative to<br>

      its parent is (<code>rect.x</code> , <code>rect.y</code>).</p>

      <p>On Android it will also return <code>rect.absoluteX</code> and
      'rect.absoluteY' which are relative to<br>

      the main window.</p>

      <p>The correct values will only be available when layout is complete.<br>

      To determine when layout is complete, add a listener for the<br>

      <a href="Titanium.UI.View.postlayout">postlayout</a> event.</p>
    since: 2.0.0
  - name: rotation
    type: Number
    summary: Clockwise 2D rotation of the view in degrees.
    description: |
      <p>Translation values are applied to the static post layout value.</p>
    platforms:
      - android
      - iphone
      - ipad
    since:
      android: 5.4.0
      iphone: 12.3.0
      ipad: 12.3.0
  - name: rotationX
    type: Number
    summary: Clockwise rotation of the view in degrees (x-axis).
    description: |
      <p>Translation values are applied to the static post layout value.</p>
    platforms:
      - android
    since: 5.4.0
  - name: rotationY
    type: Number
    summary: Clockwise rotation of the view in degrees (y-axis).
    description: |
      <p>Translation values are applied to the static post layout value.</p>
    platforms:
      - android
    since: 5.4.0
  - name: scaleX
    type: Number
    summary: Scaling of the view in x-axis in pixels.
    description: |
      <p>Translation values are applied to the static post layout value.</p>
    platforms:
      - android
    since: 5.4.0
  - name: scaleY
    type: Number
    summary: Scaling of the view in y-axis in pixels.
    description: |
      <p>Translation values are applied to the static post layout value.</p>
    platforms:
      - android
    since: 5.4.0
  - name: size
    type: Dimension
    summary: |
      The size of the view in system units.<br>
    description: >
      <p>Although property returns a &lt;Dimension&gt; dictionary, only the
      <code>width</code> and <code>height</code><br>

      properties are valid. The position properties--<code>x</code> and
      <code>y</code>--are always 0.</p>

      <p>To find the position <em>and</em> size of the view, use the <a
      href="Titanium.UI.View.rect">rect</a><br>

      property instead.</p>

      <p>The correct values will only be available when layout is complete.<br>

      To determine when layout is complete, add a listener for the<br>

      <a href="Titanium.UI.View.postlayout">postlayout</a> event.</p>
  - name: softKeyboardOnFocus
    type: Number
    summary: >-
      Determines keyboard behavior when this view is focused. Defaults to <a
      href="/api/titanium/ui/android/soft_keyboard_default_on_focus">Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS</a>.
    platforms:
      - android
  - name: tintColor
    type: String, Titanium.UI.Color
    summary: The view's tintColor
    description: >
      <p>This property is a direct correspondent of the tintColor property of
      UIView on iOS. If no value is specified,<br>

      the tintColor of the View is inherited from its superview.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.1.3
  - name: tooltip
    type: String
    summary: The default text to display in the control's tooltip.
    description: >
      <p>Assigning a value to this property causes the tool tip to be displayed
      for the view.<br>

      Setting the property to <code>null</code> cancels the display of the tool
      tip for the view.<br>

      Note: This property is only used for apps targeting macOS Catalyst.</p>
    since: 12.1.0
  - name: top
    type: Number, String
    summary: The view's top position.
    description: >
      <p>This position is relative to the view's parent. Exact interpretation
      depends on the<br>

      parent view's <a href="Titanium.UI.View.layout">layout</a> property. Can
      be either a float value or<br>

      a dimension string (for example, '50%' or '10px').</p>

      <p>This is an input property for specifying where the view should be
      positioned, and does not<br>

      represent the view's calculated position.</p>
  - name: touchEnabled
    type: Boolean
    summary: Determines whether view should receive touch events.
    description: |
      <p>If false, will forward the events to peers.</p>
  - name: touchFeedback
    type: Boolean
    summary: >-
      A material design visual construct that provides an instantaneous visual
      confirmation of touch point.
    description: >
      <p>Touch feedback is only applied to a view's background. It is never
      applied to the view's foreground content<br>

      such as a <a
      href="/api/titanium/ui/image-view">Titanium.UI.ImageView</a>'s image.</p>

      <p>For Titanium versions older than 9.1.0, touch feedback only works if
      you set the<br>

      <a href="/api/titanium/ui/view">Titanium.UI.View.backgroundColor</a>
      property to a non-transparent color.</p>
    platforms:
      - android
    since: 6.1.0
  - name: touchFeedbackColor
    type: String
    summary: >-
      Optional touch feedback ripple color. This has no effect unless
      <code>touchFeedback</code> is true.
    description: |
      <p>Defaults to provided theme color.</p>
    platforms:
      - android
    since: 6.1.0
  - name: transform
    type: Titanium.UI.Matrix2D, Titanium.UI.Matrix3D
    summary: Transformation matrix to apply to the view.
    description: |
      <p>Android only supports Matrix2D transforms.</p>
  - name: translationX
    type: Number
    summary: Horizontal location of the view relative to its left position in pixels.
    description: |
      <p>Translation values are applied to the static post layout value.</p>
    platforms:
      - android
    since: 5.0.0
  - name: translationY
    type: Number
    summary: Vertical location of the view relative to its top position in pixels.
    description: |
      <p>Translation values are applied to the static post layout value.</p>
    platforms:
      - android
    since: 5.0.0
  - name: translationZ
    type: Number
    summary: Depth of the view relative to its elevation in pixels.
    description: |
      <p>Translation values are applied to the static post layout value.</p>
    platforms:
      - android
    since: 5.0.0
  - name: transitionName
    type: String
    summary: A name to identify this view in activity transition.
    description: |
      <p>Name should be unique in the View hierarchy.</p>
    platforms:
      - android
    since: 5.0.2
  - name: verticalMotionEffect
    type: MinMaxOptions
    summary: Adds a vertical parallax effect to the view
    description: >
      <p>Note that the parallax effect only happens by tilting the device so
      results can not be seen on Simulator.<br>

      To clear all motion effects, use the <a
      href="/api/titanium/ui">Titanium.UI.clearMotionEffects</a> method.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 7.3.0
  - name: viewShadowRadius
    type: Number, String
    summary: Determines the blur radius used to create the shadow.
    description: >
      <p>Defaults to <code>undefined</code>. Behaves as if set to 3. Accepts
      density units as of 10.0.1.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.3.0
  - name: viewShadowColor
    type: String, Titanium.UI.Color
    summary: Determines the color of the shadow.
    description: >
      <p>iOS Defaults to <code>undefined</code>. Behaves as if transparent.
      Android default is black.<br>

      On Android you can set <code>&lt;item
      name=&quot;android:ambientShadowAlpha&quot;&gt;0.5&lt;/item&gt;</code>
      and<br>

      <code>&lt;item
      name=&quot;android:spotShadowAlpha&quot;&gt;0.5&lt;/item&gt;</code> in
      your theme to change the<br>

      opacity.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 11.1.0
      iphone: 3.3.0
      ipad: 3.3.0
      macos: 9.2.0
  - name: viewShadowOffset
    type: Point
    summary: Determines the offset for the shadow of the view.
    description: |
      <p>Defaults to <code>undefined</code>. Behaves as if set to (0,-3)</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.3.0
  - name: visible
    type: Boolean
    summary: Determines whether the view is visible.
  - name: width
    type: Number, String
    summary: View's width, in platform-specific units.
    description: >
      <p>Defaults to: If undefined, defaults to either <a
      href="/api/titanium/ui/fill">Titanium.UI.FILL</a> or <a
      href="/api/titanium/ui/size">Titanium.UI.SIZE</a><br>

      depending on the view. See &quot;View Types and Default Layout
      Behavior&quot; in<br>

      <a
      href="https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/UI_Composite_Layout_Behavior_Spec.html">Transitioning
      to the New UI Layout System</a>.</p>

      <p>Can be either a float value or a dimension string (for example, '50%'
      or '40dp').<br>

      Can also be one of the following special values:</p>

      <ul>

      <li><a href="/api/titanium/ui/size">Titanium.UI.SIZE</a>. The view should
      size itself to fit its contents.</li>

      <li><a href="/api/titanium/ui/fill">Titanium.UI.FILL</a>. The view should
      size itself to fill its parent.</li>

      <li>'auto'.  Represents the default sizing behavior for a given type
      of<br>

      view. The use of 'auto' is deprecated, and should be replaced with the
      <code>SIZE</code> or<br>

      <code>FILL</code> constants if it is necessary to set the view's behavior
      explicitly.</li>

      </ul>

      <p>This is an input property for specifying the view's width dimension. To
      determine<br>

      the view's size once rendered, use the <a
      href="Titanium.UI.View.rect">rect</a> or<br>

      <a href="Titanium.UI.View.size">size</a> properties.</p>
  - name: horizontalWrap
    type: Boolean
    summary: Determines whether the layout has wrapping behavior.
    description: >
      <p>For more information, see the discussion of horizontal layout mode in
      the description of<br>

      the <a href="Titanium.UI.View.layout">layout</a> property.</p>
    since: 2.1.0
  - name: zIndex
    type: Number
    summary: Z-index stack order position, relative to other sibling views.
    description: >
      <p>A view does not have a default z-index value, meaning that it is
      undefined by default.<br>

      When this property is explicitly set, regardless of its value, it causes
      the view to be<br>

      positioned in front of any sibling that has an undefined z-index.</p>

      <p>Defaults to <code>undefined</code>.</p>
  - name: keepScreenOn
    type: Boolean
    summary: Determines whether to keep the device screen on.
    description: >
      <p>When <code>true</code> the screen will not power down. Note: enabling
      this feature will use more<br>

      power, thereby adversely affecting run time when on battery.<br>

      For iOS look at <a
      href="Titanium.App.idleTimerDisabled">Titanium.App.idleTimerDisabled</a>.</p>
    platforms:
      - android
methods:
  - name: add
    summary: Adds a child to this view's hierarchy.
    description: >
      <p>The child view is added as the last child in this view's hierarchy.</p>

      <p>Although all views inherit from <a
      href="/api/titanium/ui/view">Titanium.UI.View</a>, not all views are
      capable of<br>

      containing other views. In particular:</p>

      <ul>

      <li>Some views are not designed to be containers at all.</li>

      <li>Some views are special-purpose containers that can only contain
      certain other<br>

      views.</li>

      <li>Some views are top-level containers that cannot (or should not) be
      added to other views.</li>

      </ul>

      <h4>Non-Container Views</h4>

      <p>The following views are not intended to act as containers that can hold
      other<br>

      views:</p>

      <ul>

      <li><a href="Titanium.UI.ActivityIndicator">ActivityIndicator</a></li>

      <li><a href="Titanium.UI.Button">Button</a></li>

      <li><a href="Titanium.UI.ImageView">ImageView</a></li>

      <li><a href="Titanium.UI.Label">Label</a></li>

      <li><a href="Titanium.UI.ProgressBar">ProgressBar</a></li>

      <li><a href="Titanium.UI.SearchBar">SearchBar</a></li>

      <li><a href="Titanium.UI.Slider">Slider</a></li>

      <li><a href="Titanium.UI.Switch">Switch</a></li>

      <li><a href="Titanium.UI.TableView">TableView</a></li>

      <li><a href="Titanium.UI.TextArea">TextArea</a></li>

      <li><a href="Titanium.UI.TextField">TextField</a></li>

      <li><a href="Titanium.UI.WebView">WebView</a></li>

      </ul>

      <p>Adding children to the these views <em>may</em> be supported on some
      platforms,<br>

      but is not guaranteed to work across platforms. Where it is supported, it
      may not<br>

      work as expected.</p>

      <p>For maximum portability, these views should be treated as if they do
      not support children.<br>

      Instead of adding children to these views, applications can position other
      views as<br>

      siblings. For example, instead of adding a button as a child of a
      <code>WebView</code>, you can add<br>

      the button to the web view's parent such that it appears on top of the web
      view.</p>

      <h4>Special-Purpose  Containers</h4>

      <p>A few view objects act as special-purpose containers--that is, they
      only manage<br>

      certain types of children, and many of them support a special means of
      adding<br>

      these children, instead of the general <code>add</code> method. These
      containers include:</p>

      <ul>

      <li>

      <p><a href="Titanium.UI.ButtonBar">ButtonBar</a> and <a
      href="Titanium.UI.iOS.TabbedBar">TabbedBar</a> are designed<br>

      to hold their own internally-created buttons, assigned by adding strings
      to the &quot;labels&quot; array.<br>

      Views added using the <code>add</code> method are displayed on top of
      these buttons.</p>

      </li>

      <li>

      <p><a href="Titanium.UI.Picker">Picker</a>. Can only hold
      <code>PickerRows</code> and <code>PickerColumns</code>, which<br>

      are added using the <code>add</code> method. Adding other types of views
      to a <code>Picker</code> is not<br>

      supported.</p>

      </li>

      <li>

      <p><a href="Titanium.UI.TableView">TableView</a> is a specialized
      container for<br>

      <code>TableViewSection</code> and <code>TableViewRow</code> objects. These
      objects must be<br>

      added using the properties and methods that <code>TableView</code>
      provides<br>

      for adding and removing sections and rows.</p>

      <p>On some platforms, it is possible to add arbitrary child views to a
      table view<br>

      using the <code>add</code> method. However, this is not guaranteed to work
      on all platforms,<br>

      and in general, should be avoided.</p>

      </li>

      <li>

      <p><a href="Titanium.UI.TableViewSection">TableViewSection</a> is a
      specialized container<br>

      for <code>TableViewRow</code> objects, which <em>are</em> added using the
      <code>add</code> method. The <code>add</code> method<br>

      on <code>TableViewSection</code> can only be used to add
      <code>TableViewRow</code> objects.</p>

      </li>

      <li>

      <p><a href="Titanium.UI.iOS.Toolbar">Toolbar</a> is designed to hold
      buttons and certain<br>

      other controls, added to its <code>items</code> array. Views added using
      the <code>add</code> method are<br>

      displayed on top of the controls in the <code>items</code> array.</p>

      </li>

      <li>

      <p>The <code>Tab</code>, <code>TabGroup</code>,
      <code>NavigationWindow</code> and <code>SplitWindow</code> objects are<br>

      special containers that manage windows. These are discussed in the<br>

      &quot;Top-Level Containers&quot; section.</p>

      </li>

      </ul>

      <h4>Top-Level Containers</h4>

      <p>There are certain top-level containers that are not intended to be
      added<br>

      as the children of other views. These top-level containers include<br>

      <a href="/api/titanium/ui/window">Titanium.UI.Window</a>, <a
      href="/api/titanium/ui">Titanium.UI.iOS.SplitWindow</a>, <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>,<br>

      and <a href="/api/titanium/ui/tab-group">Titanium.UI.TabGroup</a>.  Other
      types of views must be added<br>

      to a top-level container in order to be displayed on screen.</p>

      <p>The special containers <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>,<br>

      <a href="/api/titanium/ui">Titanium.UI.iOS.SplitWindow</a>, <a
      href="/api/titanium/ui/tab">Titanium.UI.Tab</a>, and<br>

      <a href="/api/titanium/ui/tab-group">Titanium.UI.TabGroup</a> manage
      windows.<br>

      These managed windows may be referred to as <em>children</em> of the<br>

      container, but they are not added using the <code>add</code> method.</p>

      <p><code>Tab</code> is another kind of special container: it is not itself
      a top-level container,<br>

      but can only be used within a <code>TabGroup</code>. You cannot
      <code>add</code> a <code>Tab</code> to an arbitrary<br>

      container.</p>
    parameters:
      - name: view
        type: Titanium.UI.View, Array<Titanium.UI.View>
        summary: >
          View to add to this view's hierarchy.<br>

          <br>

          You may pass an array of views, e.g. <code>view.add([subview1,
          subview2]</code>.<br>
  - name: animate
    summary: Animates this view.
    description: >
      <p>The <a href="Titanium.UI.Animation">Animation</a> object or dictionary
      passed to this method defines<br>

      the end state for the animation, the duration of the animation, and other
      properties.</p>

      <p>Note that on SDKs older than 9.1.0 - if you use <code>animate</code> to
      move a view, the view's actual <em>position</em> is changed, but<br>

      its layout properties, such as <code>top</code>, <code>left</code>,
      <code>center</code> and so on are not changed--these<br>

      reflect the original values set by the user, not the actual position of
      the view.</p>

      <p>As of SDK 9.1.0, the final values of the animation will be set on the
      view just before the <code>complete</code> event and/or the callback is
      fired.</p>

      <p>The <a href="Titanium.UI.View.rect">rect</a> property can be used to
      determine the actual size and<br>

      position of the view.</p>
    parameters:
      - name: animation
        type: Titanium.UI.Animation, Dictionary<Titanium.UI.Animation>
        summary: |
          Either a dictionary of animation properties or an<br>
          <a href="Titanium.UI.Animation">Animation</a> object.<br>
      - name: callback
        type: Callback<Object>
        summary: Function to be invoked upon completion of the animation.
        optional: true
  - name: clearMotionEffects
    summary: Removes all previously added motion effects.
    description: >
      <p>Use this method together with <a
      href="/api/titanium/ui">Titanium.UI.horizontalMotionEffect</a> and <a
      href="/api/titanium/ui">Titanium.UI.verticalMotionEffect</a>.</p>
  - name: hide
    summary: Hides this view.
    parameters:
      - name: options
        type: AnimatedOptions
        summary: >
          Animation options for Android only. <strong>Since SDK 5.1.0 and used
          only on Android 5.0+</strong><br>

          <br>

          Determines whether to enable a circular reveal animation.<br>

          Note that the default here is equivalent to passing in <code>{
          animated: false }</code><br>
        optional: true
  - name: insertAt
    summary: >-
      Inserts a view at the specified position in the <a
      href="Titanium.UI.View.children">children</a> array.
    description: >
      <p>Useful if the <code>layout</code> property is set to
      <code>horizontal</code> or <code>vertical</code>.</p>
    parameters:
      - name: params
        type: ViewPositionOptions
        summary: >
          Pass an object that specifies the view to insert and optionally at
          which position (defaults to end)<br>
  - name: remove
    summary: Removes a child view from this view's hierarchy.
    parameters:
      - name: view
        type: Titanium.UI.View
        summary: View to remove from this view's hierarchy.
  - name: removeAllChildren
    summary: Removes all child views from this view's hierarchy.
  - name: replaceAt
    summary: >-
      Replaces a view at the specified position in the <a
      href="Titanium.UI.View.children">children</a> array.
    description: >
      <p>Useful if the <code>layout</code> property is set to
      <code>horizontal</code> or <code>vertical</code>.</p>
    parameters:
      - name: params
        type: ViewPositionOptions
        summary: >
          Pass an object with the view to insert and the position of the view to
          replace. In this case the <code>position</code> property is
          required.<br>
  - name: show
    summary: Makes this view visible.
    parameters:
      - name: options
        type: AnimatedOptions
        summary: >
          Animation options for Android only. <strong>Since SDK 5.1.0 and only
          used on Android 5.0+</strong><br>

          <br>

          Determines whether to enable a circular reveal animation.<br>

          Note that the default here is equivalent to passing in <code>{
          animated: false }</code><br>
        optional: true
  - name: stopAnimation
    summary: Stops a running animation.
    description: |
      <p>Stops a running view <a href="Titanium.UI.Animation">Animation</a>.</p>
  - name: toImage
    summary: Returns an image of the rendered view, as a Blob.
    description: >
      <p>The <code>honorScaleFactor</code> argument is only supported on
      iOS.</p>
    parameters:
      - name: callback
        type: Callback<Titanium.Blob>
        summary: >
          Function to be invoked upon completion. If non-null, this method will
          be performed<br>

          asynchronously. If null, it will be performed immediately.<br>
        optional: true
      - name: honorScaleFactor
        type: Boolean
        summary: >
          Determines whether the image is scaled based on scale factor of main
          screen. (iOS only)<br>

          <br>

          When set to true, image is scale factor is honored. When set to false,
          the image in the<br>

          blob has the same dimensions for retina and non-retina devices.<br>
        optional: true
    returns:
      type: Titanium.Blob
  - name: convertPointToView
    summary: >
      Translates a point from this view's coordinate system to another view's
      coordinate system.<br>
    description: >
      <p>Returns <code>null</code> if either view is not in the view
      hierarchy.</p>

      <p>Keep in mind that views may be removed from the view hierarchy if their
      window is blurred<br>

      or if the view is offscreen (such as in some situations with <a
      href="/api/titanium/ui/scrollable-view">Titanium.UI.ScrollableView</a>).</p>

      <p>If this view is a <a
      href="/api/titanium/ui/scroll-view">Titanium.UI.ScrollView</a>, the view's
      x and y offsets are subtracted from<br>

      the return value.</p>
    parameters:
      - name: point
        type: Point
        summary: >
          A point in this view's coordinate system.<br>

          <br>

          If this argument is missing an <code>x</code> or <code>y</code>
          property, or the properties can not be<br>

          converted into numbers, an exception will be raised.<br>
      - name: destinationView
        type: Titanium.UI.View
        summary: >
          View that specifies the destination coordinate system to convert to.
          If this argument<br>

          is not a view, an exception will be raised.<br>
    returns:
      type: Point
  - name: getViewById
    summary: Returns the matching view of a given view ID.
    parameters:
      - name: id
        type: String
        summary: >
          The ID of the view that should be returned. Use the <code>id</code>
          property in your views to<br>

          enable it for indexing in this method.<br>
    returns:
      type: Titanium.UI.View
events:
  - name: click
    summary: Fired when the device detects a click against the view.
    description: >
      <p>There is a subtle difference between singletap and click events.</p>

      <p>A singletap event is generated when the user taps the screen
      briefly<br>

      without moving their finger. This gesture will also generate a click
      event.</p>

      <p>However, a click event can also be generated when the user touches,<br>

      moves their finger, and then removes it from the screen.</p>

      <p>On Android, a click event can also be generated by a trackball
      click.</p>
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the click passed through an overlapping
          window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: dblclick
    summary: Fired when the device detects a double click against the view.
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the double click passed through an
          overlapping window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: doubletap
    summary: Fired when the device detects a double tap against the view.
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the double tap passed through an
          overlapping window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: focus
    summary: Fired when the view element gains focus.
    description: |
      <p>This event only fires when using the trackball to navigate.</p>
  - name: keypressed
    summary: Fired when a hardware key is pressed in the view.
    description: >
      <p>A keypressed event is generated by pressing a hardware key. On Android,
      this event can only be<br>

      fired when the property <a href="Titanium.UI.View.focusable">focusable</a>
      is set to true. On iOS the<br>

      event is generated only when using <a
      href="Titanium.UI.TextArea">Ti.UI.TextArea</a>, <a
      href="Titanium.UI.TextField">Ti.UI.TextField</a><br>

      and <a href="Titanium.UI.SearchBar">Ti.UI.SearchBar</a>.</p>
    properties:
      - name: keyCode
        type: Number
        summary: >-
          The code for the physical key that was pressed. For more details, see
          <a
          href="https://developer.android.com/reference/android/view/KeyEvent.html">KeyEvent</a>.
          This API is experimental and subject to change.
  - name: longclick
    summary: Fired when the device detects a long click.
    description: >
      <p>A long click is generated by touching and holding on the touchscreen or
      holding down the<br>

      trackball button.</p>

      <p>The event occurs before the finger/button is lifted.</p>

      <p>A <code>longpress</code> and a <code>longclick</code> can occur
      together.</p>

      <p>As the trackball can fire this event, it is not intended to return the
      <code>x</code> and <code>y</code><br>

      coordinates of the touch, even when it is generated by the
      touchscreen.</p>

      <p>A <code>longclick</code> blocks a <code>click</code>, meaning that a
      <code>click</code> event will not fire when a<br>

      <code>longclick</code> listener exists.</p>
  - name: longpress
    summary: Fired when the device detects a long press.
    description: >
      <p>A long press is generated by touching and holding on the touchscreen.
      Unlike a <code>longclick</code>,<br>

      it does not respond to the trackball button.</p>

      <p>The event occurs before the finger is lifted.</p>

      <p>A <code>longpress</code> and a <code>longclick</code> can occur
      together.</p>

      <p>In contrast to a <code>longclick</code>, this event returns the
      <code>x</code> and <code>y</code> coordinates of the touch.</p>
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the long press passed through an
          overlapping window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: pinch
    summary: Fired when the device detects a pinch gesture.
    description: >
      <p>A pinch is a touch and expand or contract<br>

      with two fingers.  The event occurs continuously until a finger is lifted
      again.</p>
    properties:
      - name: scale
        type: Number
        summary: >-
          The scale factor relative to the points of the two touches in screen
          coordinates.
      - name: velocity
        type: Number
        summary: The velocity of the pinch in scale factor per second.
      - name: time
        type: Number
        summary: The event time of the current event being processed.
      - name: timeDelta
        type: Number
        summary: >
          The time difference in milliseconds between the previous accepted
          scaling event and the<br>

          current scaling event.<br>
      - name: currentSpan
        type: Number
        summary: >
          The average distance between each of the pointers forming the gesture
          in progress through<br>

          the focal point.<br>
      - name: currentSpanX
        type: Number
        summary: >
          The average X distance between each of the pointers forming the
          gesture in progress through<br>

          the focal point.<br>
      - name: currentSpanY
        type: Number
        summary: >
          The average Y distance between each of the pointers forming the
          gesture in progress through<br>

          the focal point.<br>
      - name: previousSpan
        type: Number
        summary: >
          The previous average distance between each of the pointers forming the
          gesture in progress through<br>

          the focal point.<br>
      - name: previousSpanX
        type: Number
        summary: >
          The previous average X distance between each of the pointers forming
          the gesture in progress through<br>

          the focal point.<br>
      - name: previousSpanY
        type: Number
        summary: >
          The previous average Y distance between each of the pointers forming
          the gesture in progress through<br>

          the focal point.<br>
      - name: focusX
        type: Number
        summary: |
          The X coordinate of the current gesture's focal point.<br>
      - name: focusY
        type: Number
        summary: |
          The Y coordinate of the current gesture's focal point.<br>
      - name: inProgress
        type: Boolean
        summary: >-
          Returns <code>true</code> if a scale gesture is in progress,
          <code>false</code> otherwise.
  - name: postlayout
    summary: Fired when a layout cycle is finished.
    description: >
      <p>This event is fired when the view and its ancestors have been laid
      out.<br>

      The <a href="Titanium.UI.View.rect">rect</a> and <a
      href="Titanium.UI.View.size">size</a> values<br>

      should be usable when this event is fired.</p>

      <p>This event is typically triggered by either changing layout<br>

      properties or by changing the orientation of the device. Note that
      changing the<br>

      layout of child views or ancestors can also trigger a relayout of this
      view.</p>

      <p>Note that altering any properties that affect layout from the
      <code>postlayout</code> callback<br>

      may result in an endless loop.</p>
  - name: rotate
    summary: Fired when the device detects a two finger rotation.
    description: >
      <p>This event is fired when doing a two finger rotation and returning the
      angle.<br>

      The event occurs continuously until a finger is lifted again.</p>
    properties:
      - name: rotate
        type: Number
        summary: Rotation in degrees.
  - name: singletap
    summary: Fired when the device detects a single tap against the view.
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the single tap passed through an
          overlapping window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: swipe
    summary: Fired when the device detects a swipe gesture against the view.
    properties:
      - name: direction
        type: String
        summary: Direction of the swipe--either 'left', 'right', 'up', or 'down'.
      - name: x
        type: Number
        summary: >-
          X coordinate of the event's endpoint from the <code>source</code>
          view's coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event's endpoint from the <code>source</code>
          view's coordinate system.
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the swipe passed through an overlapping
          window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: touchcancel
    summary: Fired when a touch event is interrupted by the device.
    description: >
      <p>A touchcancel can happen in circumstances such as an incoming call to
      allow the<br>

      UI to clean up state.</p>
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: force
        type: Number
        summary: >
          The current force value of the touch event.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later and on some Android devices.<br>
      - name: size
        type: Number
        summary: >
          The current size of the touch area. Note: This property is only
          available on some Android devices.<br>
      - name: maximumPossibleForce
        type: Number
        summary: >
          Maximum possible value of the force property.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later.<br>
      - name: altitudeAngle
        type: Number
        summary: >
          A value which indicates the stylus angle on the screen. If the stylus
          is perpendicular to the screen or no stylus is<br>

          being used, the value will be Pi/2. If the stylus is parallel to the
          screen, the value will be 0.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and are 9.1 or later.<br>
      - name: timestamp
        type: Number
        summary: >
          The time (in seconds) when the touch was used in correlation with the
          system start up.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later.<br>
      - name: azimuthUnitVectorInViewX
        type: Number
        summary: >
          The x value of the unit vector that points in the direction of the
          azimuth of the stylus.<br>

          Note: This property is only available for iOS devices that support the
          Apple Pencil and are 9.1 or later.<br>
      - name: azimuthUnitVectorInViewY
        type: Number
        summary: >
          The y value of the unit vector that points in the direction of the
          azimuth of the stylus.<br>

          Note: This property is only available for iOS devices that support the
          Apple Pencil and are 9.1 or later.<br>
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the touch passed through an overlapping
          window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: touchend
    summary: Fired when a touch event is completed.
    description: >
      <p>On the Android platform, other gesture events, such as
      <code>longpress</code> or <code>swipe</code>, cancel touch<br>

      events, so this event may not be triggered after a <code>touchstart</code>
      event.</p>
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: force
        type: Number
        summary: >
          The current force value of the touch event.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later and on some Android devices.<br>
      - name: size
        type: Number
        summary: >
          The current size of the touch area. Note: This property is only
          available on some Android devices.<br>
      - name: maximumPossibleForce
        type: Number
        summary: >
          Maximum possible value of the force property.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later.<br>
      - name: altitudeAngle
        type: Number
        summary: >
          A value which indicates the stylus angle on the screen. If the stylus
          is perpendicular to the screen or no stylus is<br>

          being used, the value will be Pi/2. If the stylus is parallel to the
          screen, the value will be 0.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and are 9.1 or later.<br>
      - name: timestamp
        type: Number
        summary: >
          The time (in seconds) when the touch was used in correlation with the
          system start up.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later.<br>
      - name: azimuthUnitVectorInViewX
        type: Number
        summary: >
          The x value of the unit vector that points in the direction of the
          azimuth of the stylus.<br>

          Note: This property is only available for iOS devices that support the
          Apple Pencil and are 9.1 or later.<br>
      - name: azimuthUnitVectorInViewY
        type: Number
        summary: >
          The y value of the unit vector that points in the direction of the
          azimuth of the stylus.<br>

          Note: This property is only available for iOS devices that support the
          Apple Penciland are 9.1 or later.<br>
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the touch passed through an overlapping
          window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: touchmove
    summary: Fired as soon as the device detects movement of a touch.
    description: >
      <p>Event coordinates are always relative to the view in which the initial
      touch occurred</p>
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: force
        type: Number
        summary: >
          The current force value of the touch event.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later and on some Android devices.<br>
      - name: size
        type: Number
        summary: >
          The current size of the touch area. Note: This property is only
          available on some Android devices.<br>
      - name: maximumPossibleForce
        type: Number
        summary: >
          Maximum possible value of the force property.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later.<br>
      - name: altitudeAngle
        type: Number
        summary: >
          A value which indicates the stylus angle on the screen. If the stylus
          is perpendicular to the screen or no stylus is<br>

          being used, the value will be Pi/2. If the stylus is parallel to the
          screen, the value will be 0.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and are 9.1 or later.<br>
      - name: timestamp
        type: Number
        summary: >
          The time (in seconds) when the touch was used in correlation with the
          system start up.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later.<br>
      - name: azimuthUnitVectorInViewX
        type: Number
        summary: >
          The x value of the unit vector that points in the direction of the
          azimuth of the stylus.<br>

          Note: This property is only available for iOS devices that support the
          Apple Pencil and are 9.1 or later.<br>
      - name: azimuthUnitVectorInViewY
        type: Number
        summary: >
          The y value of the unit vector that points in the direction of the
          azimuth of the stylus.<br>

          Note: This property is only available for iOS devices that support the
          Apple Pencil and are 9.1 or later.<br>
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the touch passed through an overlapping
          window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: touchstart
    summary: Fired as soon as the device detects a touch gesture.
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: force
        type: Number
        summary: >
          The current force value of the touch event.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later and on some Android devices.<br>
      - name: size
        type: Number
        summary: >
          The current size of the touch area. Note: This property is only
          available on some Android devices.<br>
      - name: maximumPossibleForce
        type: Number
        summary: >
          Maximum possible value of the force property.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later.<br>
      - name: altitudeAngle
        type: Number
        summary: >
          A value which indicates the stylus angle on the screen. If the stylus
          is perpendicular to the screen or no stylus is<br>

          being used, the value will be Pi/2. If the stylus is parallel to the
          screen, the value will be 0.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and are 9.1 or later.<br>
      - name: timestamp
        type: Number
        summary: >
          The time (in seconds) when the touch was used in correlation with the
          system start up.<br>

          Note: This property is only available for iOS devices that support
          3D-Touch and run 9.0 or later.<br>
      - name: azimuthUnitVectorInViewX
        type: Number
        summary: >
          The x value of the unit vector that points in the direction of the
          azimuth of the stylus.<br>

          Note: This property is only available for iOS devices that support the
          Apple Pencil and are 9.1 or later.<br>
      - name: azimuthUnitVectorInViewY
        type: Number
        summary: >
          The y value of the unit vector that points in the direction of the
          azimuth of the stylus.<br>

          Note: This property is only available for iOS devices that support the
          Apple Pencil and are 9.1 or later.<br>
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the touch passed through an overlapping
          window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
  - name: twofingertap
    summary: Fired when the device detects a two-finger tap against the view.
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: obscured
        type: Boolean
        summary: >
          Returns <code>true</code> if the tap passed through an overlapping
          window belonging to another app.<br>

          <br>

          This is a security feature to protect an app from
          &quot;tapjacking&quot;, where a malicious app can use a<br>

          system overlay to intercept touch events in your app or to trick the
          end-user to tap on UI<br>

          in your app intended for the overlay.<br>
examples:
  - title: Round View Example
    code:
      - content: |-
          const window = Ti.UI.createWindow();
          var view = Titanium.UI.createView({
              borderRadius:10,
              backgroundColor:'red',
              width:50,
              height:50
          });
          window.add(view);
          window.open();
        language: js
    intro: Create a rounded view.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
            <Window>
              <View id="view" borderRadius="10" backgroundColor="red" width="50" height="50" />
            </Window>
          </Alloy>
        language: xml
    intro: Previous example as an Alloy view.
---

# Titanium.UI.View

An empty drawing surface or container

The `View` is the base type for all UI widgets in Titanium.

You use the [Titanium.UI.createView](/api/titanium/ui) method or **`<View>`** Alloy element to create a View.

#### Units and Coordinates

Sizes and coordinates can be specified using a variety of units. If a value is
specified as a number, it is interpreted as a value in the default unit for the
current system and/or the current project.

When a value is specified as string, the value can consist of:

*  A number.
*  A percentage, such as "10%", interpreted as a percentage of the parent's total size
   in that dimension.
*  A number plus a unit specifier, such as "10px" or "1in".

The following units are supported:

&lt;table class="doc-table" width="60%"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Unit&lt;/th&gt;
      &lt;th&gt;Specifier&lt;/th&gt;
      &lt;th&gt;Note&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;pixels&lt;/td&gt;
      &lt;td&gt;px&lt;/td&gt;
      &lt;td&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;density-independent pixels&lt;/td&gt;
      &lt;td&gt;dip&lt;/td&gt;
      &lt;td&gt;Equivalent to Apple "points."&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;inches&lt;/td&gt;
      &lt;td&gt;in&lt;/td&gt;
      &lt;td&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;millimeters&lt;/td&gt;
      &lt;td&gt;mm&lt;/td&gt;
      &lt;td&gt;Android, iOS only&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;centimeters&lt;/td&gt;
      &lt;td&gt;cm&lt;/td&gt;
      &lt;td&gt;Android, iOS only&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;points&lt;/td&gt;
      &lt;td&gt;pt&lt;/td&gt;
      &lt;td&gt;Typographical points of 1/72 of an inch. On Android, you can specify sizes and coordinates in typographical points. On other platforms, this unit is only used to specify font sizes. Not to be confused with Apple "points."&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

The interpretation of the density-independent pixel (DIP) varies by platform:

*   On Android, one DIP corresponds to one pixel on a 160DPI
    display.

*   On iOS, one DIP corresponds to one pixel on a non-Retina display, which
    is 163DPI for iPhone/iPod touch and 132DPI for the iPad. A DIP
    corresponds to 2 pixels of width or height on a Retina display.

The absolute measures, such as inches, are dependent on the device correctly reporting
its density.

If no units are specified, a system-default unit is assumed. The system default unit is:

*    Pixels on Android.
*    DIPs on iOS.

On Android and iOS, the default unit can be overridden on a per-application level by setting the
`ti.ui.defaultunit` property in `tiapp.xml`. For example, to use DIPs as the
default on all platforms, set `defaultunit` to `dip`:

``` xml
<property name="ti.ui.defaultunit" type="string">dip</property>
```

The value for `ti.ui.defaultunit` can be any of the unit specifiers defined above, or
`system` to specify that the platform's default unit should be used.

On iOS if you set the `ti.ui.defaultunit` property to anything other than `system` or `dip`, your
application should detect and handle Retina displays manually.

Font sizes on iOS are treated differently than other sizes: font sizes are always
specified in typographical points.

For more details see:

* [UI Composite Layout Spec](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/UI_Composite_Layout_Behavior_Spec.html)

#### Size and Position

Titanium views are positioned using the `left`, `right`, `top,` `bottom` and `center`
properties, and sized using the `width` and `height` properties. These are
input properties, set by the user to specify layout, and not modified by the
system to indicate actual calculated positions and sizes.

The [height](Titanium.UI.View.height) and [width](Titanium.UI.View.width) properties
accept several special values:

*   [Titanium.UI.FILL](/api/titanium/ui/fill) specifies that the view should fill the parent in this
    dimension.
*   [Titanium.UI.SIZE](/api/titanium/ui/size) specifies that the view should adjust this size to fit its
    contents, such as a label's text or a view's children.
*   'auto' specifies that the view should choose either `FILL` or `SIZE` behavior.
    The use of `auto` is deprecated, and should be replaced with the SIZE or FILL constants if it is necessary to set the view's behavior explicitly.

Sizes and positions can also be specified as a percentage of the parent's size, for
example, `50%`.

How these properties are interpreted depends on the value of the view's `layout`
property. See the description of the [layout](Titanium.UI.View.layout) property
for details.

The [rect](Titanium.UI.View.rect) property is a read-only dictionary
with the properties `x`, `y`, `width` and `height`. It provides the *rendered*
size and position of the  view, and is only available once both it and its ancestors have been
fully drawn.

The [size](Titanium.UI.View.size) property is a read-only dictionary
with the properties `x`, `y`, `width` and `height`. It provides the *rendered* size
 of the  view, and is only available once both it and its ancestors have been
fully drawn.

To determine whether the `size` and `rect` values are available, add an event listener
for the [postlayout](Titanium.UI.View.postlayout) event, which is fired at the end of
a layout cycle.

#### Accessibility

Four accessibility-related view properties are available in Titanium Mobile for iOS
and Android:

* [Titanium.UI.View.accessibilityLabel](/api/titanium/ui/view)
* [Titanium.UI.View.accessibilityValue](/api/titanium/ui/view)
* [Titanium.UI.View.accessibilityHint](/api/titanium/ui/view)
* [Titanium.UI.View.accessibilityHidden](/api/titanium/ui/view)

The first three, `accessibilityLabel`, `accessibilityValue` and `accessibilityHint`, are for setting text
that will be relayed to the user by the assistive service (such as TalkBack on Android or VoiceOver
on iOS). On iOS, Titanium will then take these values and set the native properties
of the same name which are defined in the [UIAccessibilityProtocol](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility).
On Android, Titanium takes the three values and concatenates them in the order `accessibilityLabel`,
`accessibilityValue`, and `accessibilityHint`, and then uses the result to set the native view's
[`contentDescription`](https://developer.android.com/reference/android/view/View.html#setContentDescription%28java.lang.CharSequence%29)
property.

You are not required to set all three properties: feel free to set just one or two as needed and
experiment with the results by turning on VoiceOver (iOS) or TalkBack (Android) on your test device.

The fourth property, `accessibilityHidden`, when set to `true`, indicates that the view can be ignored
by the assistive service. In iOS this sets the similarly-named
[accessibilityElementsHidden](https://developer.apple.com/documentation/objectivec/nsobject/1615080-accessibilityelementshidden)
native property.

In Android `accessibilityHidden` calls the native [View.setImportantForAccessibility(boolean)](https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29) method, passing `false` when
this property is set to `true` (i.e., "hidden" means it's not important). However, the
native `setImportantForAccessibility` method is available only on devices running
Android 4.1 (API level 16/Jelly Bean) or later. On earlier versions of Android, this
property is ignored.

No error will occur on older devices if you set `accessibilityHidden`; the value will simply be ignored.

#### iOS: backgroundLeftCap and backgroundTopCap properties

The [backgroundLeftCap](Titanium.UI.View.backgroundLeftCap) and [backgroundTopCap](Titanium.UI.View.backgroundTopCap) properties are
used to specify the portions of the [backgroundImage](Titanium.UI.View.backgroundImage) that must not be resized when the image is stretched or shrunk.

Given an image of width `w` and height `h`, the stretchable portion on the image is defined as a rectangle with the `top-left` point set to
`(backgroundLeftCap , backgroundTopCap)` and the `bottom-right` point set to `(w - backgroundLeftCap , h - backgroundTopCap)`. The portions not covered by
the stretchable portion keep their original size and appearance.

For best results on ImageView set up the `backgroundLeftCap` and `backgroundTopCap` properties such that the stretchable portion is always a 1x1 box.

#### iOS Clipping Behavior

Four view related properties are available in Titanium Mobile for iOS.

* [Titanium.UI.View.viewShadowRadius](/api/titanium/ui/view)
* [Titanium.UI.View.viewShadowColor](/api/titanium/ui/view)
* [Titanium.UI.View.viewShadowOffset](/api/titanium/ui/view)
* [Titanium.UI.View.clipMode](/api/titanium/ui/view)

The first three, `viewShadowColor`, `viewShadowRadius` and `viewShadowOffset` control the shadow associated with the view.
The shadow of the view is drawn using a rounded rectangle with the arc radius set to the `borderRadius` property.

The `clipMode` property lets the user control the clipping behavior of the View.
Setting this to [Titanium.UI.iOS.CLIP_MODE_ENABLED](/api/titanium/ui) enforces all child views to be clipped to this views bounds.
Setting this to [Titanium.UI.iOS.CLIP_MODE_DISABLED](/api/titanium/ui) allows child views to be drawn outside the bounds of this view.
When set to [Titanium.UI.iOS.CLIP_MODE_DEFAULT](/api/titanium/ui) or when this property is not set, clipping behavior is defined by the following rules applied in order.

* If the `viewShadowColor` is defined to be a color with alpha &gt; 0, clipping is disabled.
* If the `borderWidth` or `borderRadius` of the view is set to a value &gt; 0, clipping is enabled.
* If the view has one or more `children` clipping is enabled.
* If none of the conditions are met, clipping is disabled.

In earlier versions of Titanium Mobile, views had clipping enabled by default.

#### iOS Animation on shadow associated with view

If `borderRadius` property has multiple values, animation on shadow associated with the view will not work.


**Extends:** `Titanium.Proxy` · **Since:** 0.9

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

