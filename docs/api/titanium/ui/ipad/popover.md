---
title: Titanium.UI.iPad.Popover
properties:
  - name: arrowDirection
    type: Number
    summary: Indicates the arrow direction of the popover.
    description: >
      <p>Use this property to indicate the popover arrows to use.  You can
      bitwise-OR the constant<br>

      values together.</p>

      <p>Do not set this property to <a
      href="/api/titanium/ui">Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_UNKNOWN</a>.</p>
  - name: backgroundColor
    type: ''
    summary: Sets the background color of the popover.
    description: >
      <p>It is recommended to set this property to colorize the whole popover
      instead of only<br>

      its content view.</p>
    since: 5.2.0
  - name: contentView
    type: Titanium.UI.View
    summary: >-
      View to use for the popover content. Must be set before calling the
      <code>show()</code> method.
    description: >
      <p>Set this property to any <a
      href="/api/titanium/ui/view">Titanium.UI.View</a> object, including a <a
      href="/api/titanium/ui/window">Titanium.UI.Window</a> or<br>

      <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>
      object.</p>

      <p>This property does not support the <a
      href="/api/titanium/ui">Titanium.UI.iOS.SplitWindow</a> or <a
      href="/api/titanium/ui/tab-group">Titanium.UI.TabGroup</a> objects.</p>

      <p>When this property is set to a valid object, the popover <strong>does
      not include the navigation<br>

      controller</strong> unless it is set to a <a
      href="/api/titanium/ui/navigation-window">Titanium.UI.NavigationWindow</a>
      object.</p>

      <p>In an Alloy application, you can specify this property as a
      <code>&lt;ContentView&gt;</code> child element<br>

      of the <code>&lt;Popover&gt;</code> element:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;Alloy&gt;
          &lt;Popover&gt;
              &lt;ContentView&gt;
                  &lt;Window title=&quot;Popover&quot;&gt;
                      &lt;Label&gt;Popover!&lt;/Label&gt;
                  &lt;/Window&gt;
              &lt;/ContentView&gt;
          &lt;/Popover&gt;
      &lt;/Alloy&gt;

      </code></pre></div>
    since: 3.2.0
  - name: passthroughViews
    type: Array<Titanium.UI.View>
    summary: Passthrough views to use when the popover is shown.
    description: >
      <p>Specify view objects that the user can interact with while the popover
      is open. While<br>

      interacting with these view, the popover will not be dismissed.</p>
methods:
  - name: hide
    summary: Hides the popover.
    parameters:
      - name: options
        type: AnimatedOptions
        summary: >
          Display properties to use when hiding the popover.<br>

          Note that the default here is equivalent to passing in <code>{
          animated: false }</code><br>
        optional: true
  - name: show
    summary: Displays the popover.
    parameters:
      - name: options
        type: ShowPopoverParams
        summary: |
          Display properties to use when displaying the popover.<br>
          Note that the default here is to be animated.<br>
events:
  - name: hide
    summary: Fired when the popover is hidden.
examples:
  - title: Simple Popover with a Title and Right Button
    code:
      - content: >-
          var win = Ti.UI.createWindow({backgroundColor: 'white'});


          var button = Ti.UI.createButton({title: 'Open Popover!'});

          button.addEventListener('click', function(e){
              popover.show({ view: button });
          })

          win.add(button);


          var rightButton = Ti.UI.createButton({title: 'Robin'});

          rightButton.addEventListener('click', function(e){
              alert("But green's the color of spring.");
          });


          var contentWindow = Ti.UI.createWindow({
              rightNavButton: rightButton,
              title: 'Kermit'
          });

          contentWindow.add(Ti.UI.createLabel({text: "It's not easy being
          green."}));


          var popover = Ti.UI.iPad.createPopover({
              backgroundColor: 'green',
              contentView: Ti.UI.createNavigationWindow({
                  width: 250,
                  height: 100,
                  window: contentWindow
              })
          });


          win.open();
        language: js
    intro: >-
      In this example, we create a simple popover and position it near the
      button.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window>
                  <Button id="button" onClick="openPopover">Open Popover!</Button>
              </Window>
          </Alloy>
        language: xml
      - content: |-
          function openPopover() {
              var popover = Alloy.createController('popover').getView();
              popover.show({view:$.button});
          };

          $.index.open();
        language: js
      - content: |-
          <Alloy>
              <Popover backgroundColor='green'>
                  <ContentView>
                      <NavigationWindow height='100' width='250'>
                          <Window title='Kermit'>
                              <RightNavButton onClick="showAlert" title="Robin" />
                              <Label>It's not easy being green.</Label>
                          </Window>
                      </NavigationWindow>
                  </ContentView>
              </Popover>
          </Alloy>
        language: xml
      - content: >-
          function showAlert(e) {
              alert('But green is the color of spring.');
          };


          // Prior to Alloy 1.1.0, the rightNavButton property was set in the
          controller.

          // var button = Ti.UI.createButton({title: 'Robin'});

          // button.addEventListener('click', showAlert);

          // $.popover.rightNavButton = button;
        language: js
    intro: |-
      Previous example as an Alloy project.

      `app/views/index.xml`:
---

# Titanium.UI.iPad.Popover

A Popover is used to manage the presentation of content in a popover.

A popover is created using the [Titanium.UI.iPad.createPopover](/api/titanium/ui) method or **`<Popover>`** Alloy element.

Popovers are used to present information temporarily, but in a way that does not take over
the entire screen in the way that a modal view does. The popover content is layered on top of
the existing content in a special type of window. The popover remains visible until the user
taps outside of the popover window or it is explicitly dismissed.

Do not add top-level view containers, such as a `SplitWindow` or `TabGroup`, to a popover.
Adding top-level view containers may have unintended side effects. See the [contentView](Titanium.UI.iPad.Popover.contentView)
property for more information.


**Extends:** `Titanium.UI.View` · **Since:** 1.2.0, 9.2.0 · **Platforms:** ipad, macos

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

