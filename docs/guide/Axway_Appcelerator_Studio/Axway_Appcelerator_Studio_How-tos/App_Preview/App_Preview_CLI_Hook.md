---
title: App Preview CLI Hook
weight: '10'
---

# App Preview CLI Hook

## Titanium has an CLI hook that you can use to deploy builds to App Preview.

## CLI usage

The most common usage of the CLI are as follows:

**iOS**

```bash
appc run -p ios -T dist-adhoc --app-preview
```

or

**Android**

```bash
appc run -p android -b --app-preview
```

Use the `--app-preview` flag with the CLI to upload your APK or IPA to App Preview.

If you wish to add release notes, use the `--release-notes` flag. For example:

```bash
appc run -p ios -T dist-adhoc --app-preview --release-notes='New build with awesome features
```

To invite testers via email addresses, use the `--invite` flag:

```bash
appc run -p ios -T dist-adhoc --app-preview --invite=someone@foobar.com,someelse@foobar.com
```

You can also set who to notify and add teams that have been previously invited to the app using the `--notify` and `--add` flags respectively. The add flag will give the team access but they will not get an email.

You can also set if you want to notify and add teams that have previously been invites to the app using `--notify` and `--add` flags. 'add' will give the team access, but they will not get an email. For example:

```bash
appc run -p ios -T dist-adhoc --app-preview --release-notes='New build' --notify='Devs,QA' --add='Legal'
```
