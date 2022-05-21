---
title: Titanium Angular - Helpers and Services
weight: '40'
---

# Titanium Angular - Helpers and Services

Titanium Angular comes with a set of helpers that provide a modernized access to commonly used features of our Titanium SDK. All of these employ a Promise-based API and try to abstract away repetitive steps from the original Titanium APIs. However, they are purely a convenience feature and won't replace any existing Titanium APIs.

## User Interface

### Dialogs

To ease the creation of dialogs, Titanium Angular comes with several predefined dialogs.

#### AlertDialog

The `AlertDialog` helper allows you to display a simple alert with a single button. Besides the dialog's `title` and `message` you can also specify an optional `okButtonText`.

**AlertDialog**

```javascript
import { AlertDialog } from 'titanium-angular';

const alertDialog = new AlertDialog({
  title: 'Alert',
  message: 'This is awesome!'
});
alertDialog.show().then(() => console.log(`Alert closed`));
```

#### ConfirmDialog

A confirm dialog will display a dialog using the `title` and `message` properties. You can also change the button text through the `okButtonText` and `cancelButtonText` options.

**ConfirmDialog**

```javascript
import { ConfirmDialog, ConfirmResult } from 'titanium-angular';

const confirmDialog = new ConfirmDialog({
  title: 'Confirm',
  message: 'Do you want to continue?'
});
confirmDialog.show().then((result: ConfirmResult) => {
  if (result === ConfirmResult.Ok) {
    console.log('Confirmed!');
  } else if (result === ConfirmResult.Cancel) {
    console.log('Canceled!');
  }
});
```

#### Prompt Dialog

To prompt a user for some text input you can use the prompt dialog.

::: danger ❗️ Warning
**This has not yet been impletement with the current tech preview.**
:::

#### Custom Dialogs

Besides those predefined dialogs you can also completely customize your dialogs using the `BaseDialog` class. A base dialog accepts the `title` and `message` options. You can then add multiple `DialogAction` to your dialog which represent a button of the dialog with a `title` and an optional `handler` function to call if that button is pressed.

**BaseDialog**

```javascript
import { BaseDialog, DialogAction } from 'titanium-angular';

const dialog = new BaseDialog('Dialog title', 'Some message');

// Add a simple button
dialog.addAction(new DialogAction('Ok', () => console.log('Ok button pressed!')));

// Add a button representing the cancel action.
const cancelAction = new DialogAction('Cancel', () => console.log('Are you really gonna quit now?'));
cancelAction.cancel = true;
dialog.addAction(cancelAction);

// Add a button with the destructive option
const destructiveAction = new DialogAction('Abort', () => console.log('Ok ok, we are done here.'));
destructiveAction.destructive = true;
dialog.addAction(destructiveAction);
```

By default both the `cancel` and `destructive` properties are set to `false`.

### Picker (Android only)

Handle the common use case of date and time pickers presented as modals with the following helper classes.

#### Time Picker

A simple time picker can be created with a `minDate`, `maxValue`, and `value` options. All of those options are optional and will accept a `Date` object. Passing an empty options object results in no restrictions on the selectable time frame and the current time will be pre-selected.

**TimePicker**

```javascript
const timePicker = new TimePicker({});
 timePicker.show().then(selectedTime => {
     console.log(`Selected time: ${selectedTime}`);
 }).catch(() => {
     console.log('Time selection canceled');
 });
```

#### Date Picker

Selecting both the date and a time can be achieved with the date picker. It accepts the `minDate`, `maxValue` and `value` options. All of those options are optional and will accept a `Date` object. Passing an empty options object results in no restrictions on the selectable dates and the current date and time will be pre-selected.

**DatePicker**

```javascript
const datePicker = new DatePicker({});
datePicker.show().then(selectedDate => {
    console.log(`Selected date: ${selectedDate}`);
}).catch(() => {
    console.log('Date selection canceled');
});
```

## Device

### Device environment

Allows to check on which platform the app is currently running.

```
@Component({templateUrl: "./some.component.html"})
class SomeComponent implements OnInit {
    constructor(private device: DeviceEnvironment) {

    }

    onInit() {
        if (this.device.runs('android')) {
            // ...
        }
    }
}
```

Valid platform names are `android` and `ios`.
