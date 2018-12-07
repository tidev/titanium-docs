# Titanium.UI.iOS.MenuPopup

<ProxySummary/>

## Examples

### Example using multiple `items` and a `click` event.

The example below creates a new menu popup and shows it when the user clicks on the button.

    var win = Ti.UI.createWindow({
        backgroundColor: "#fff",
    });

    var button = Ti.UI.createButton({
        title: "Show options"
    });

    win.add(button);

    var menu = Ti.UI.iOS.createMenuPopup({
        items: ["Option 1", "Option 2"]
    });

    menu.addEventListener("click", function(e) {
        alert(e);
    });

    button.addEventListener("click", function() {
        menu.show({
    	    view: button
        });
    });

    win.open();

<ApiDocs/>
