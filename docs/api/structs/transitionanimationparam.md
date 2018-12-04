# transitionAnimationParam

<ProxySummary/>

## Examples

### Simple Example

In this example, the red window opens with a transition animation, while closing it uses the
default behavior where it slides off screen.  To add a transition animation when the red
window closes, define a transition animation for the blue window.

    var transition = Ti.UI.iOS.createTransitionAnimation({
        duration: 300,
        // The show transition makes the window opaque and rotates it correctly
        transitionTo: {
            opacity: 1,
            duration: 300,
            transform: Ti.UI.create2DMatrix()
        },
        // The hide transition makes the window transparent and rotates it upside down
        transitionFrom: {
            opacity: 0,
            duration: 300 / 2,
            transform: Ti.UI.create2DMatrix().rotate(180),
        }
    });

    var win2 = Ti.UI.createWindow({
        backgroundColor: 'red',
        title: 'Red Window',
        transitionAnimation: transition,
        opacity: 0,
        transform: Ti.UI.create2DMatrix().rotate(180)
    });
    var button2 = Ti.UI.createButton({
        title: 'Close Red Window'
    });
    button2.addEventListener('click', function(){
        nav.closeWindow(win2);
        // In order to see the blue window again,
        // need to reverse the transition animation
        win1.opacity = 1;
        win1.transform = Ti.UI.create2DMatrix().rotate(0);
    });
    win2.add(button2);

    var win1 = Ti.UI.createWindow({
        backgroundColor: 'blue',
        title: 'Blue Window',
        // Uncomment to use a transition animation when the blue window is closed
        // transitionAnimation: transition
    });
    var button1 = Ti.UI.createButton({title: 'Open Red Window'});
    button1.addEventListener('click', function(){
        nav.openWindow(win2);
    });
    win1.add(button1);

    var nav = Ti.UI.createNavigationWindow({
        window: win1
    });
    nav.open();

<ApiDocs/>
