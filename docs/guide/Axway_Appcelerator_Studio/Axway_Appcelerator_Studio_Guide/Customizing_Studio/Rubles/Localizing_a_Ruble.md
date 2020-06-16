---
title: Localizing a Ruble
weight: '80'
---

# Localizing a Ruble

## Overview

To allow locale-specific translations of UI strings, rubles use a system that is very similar to that used by Rails applications.

## Locales Directories

Any string that may need a translation is extracted out to a file in **<ruble>/config/locales/<locale>.yml**

Individual translations are stored in YML files in the **<ruble>/config/locales/** directory. The filename does not need to match any language or locale, but it is helpful to do so. So an **en.yml** file should hold the English translations of the UI strings, but it is not required.

## Externalizing the Strings

Inside the ruble code, to allow for translations, we externalize the string. To do so, we replace usage of the string with a call to the **t(key, variables = {})** method.

For example, we have the following command defined:

**commands/example.rb**

```ruby
command "Example" do |c|
  ...
end
```

We would replace the "Example" string with a new key representing the string, and a call to the **t** translate method. That string gets moved into the English translation pack in **config/locales/en.yml**, as a key-pair. The key is the symbol we chose to replace the string, and the value is the string we replaced.

**commands/example.rb**

```ruby
command t(:example) do |c|
  ...
end
```

**config/locales/en.yml**

```yml
en:
  example: "Example"
```

A quick note here, the root "en:" key in the translation pack groups the indented key-value pairs as belonging to the **en** (or English) language. Simply naming the file **en.yml** will not associate the enclosed strings as being English.

### Strings with variables inside them

If the string is not simply a static value but inserts values inside, the full signature form of the **t(key, variables = {})** method should be used.

**commands/variables.rb**

```ruby
command "Power of #{number}" do |c|
  ...
end
```

We would replace the "Power of #{number}" string with a new key representing the string, and a call to the **t** translate method. That string gets moved into the English translation pack in **config/locales/en.yml**, as a key-pair. The key is the symbol we chose to replace the string, and the value is the string we replaced. Note that the string interpolation gets changed to a **{variable\_name}** syntax, and the key in the argument hash must match the **variable\_name**.

**commands/variables.rb**

```ruby
command t(:complicated, :number => x) do |c|
  ...
end
```

**config/locales/en.yml**

```yml
en:
  example: "Example"
  complicated: "Power of {number}"
```

## Translation lookups

When looking up translations, we take the current locale and attempt to match the full **<language>-<country>** locale strings first, then **<locale>**, and finally falling back to the **en** locale.

So if our locale is **en\_US**, we will try to find **en-US**, then **en** strings.

If our locale is **es\_ES**, we'll try **es-ES**, then **es**, then **en**.

## Contributing a translation pack

If you would like to contribute a set of translations, there are a couple of different ways to do so.

### Forking the ruble

Ideally, the first step to take is to fork the ruble to which you're contributing.

The majority of the rubles can be found at [https://github.com/aptana](https://github.com/aptana)

We'll use the Zen Coding ruble as an example. It is found at [https://github.com/aptana/zen-coding.ruble](https://github.com/aptana/zen-coding.ruble)

On that page, click the Fork button in the upper right, and you'll be able to clone a fork of the ruble for your modifications. You can now grab the clone to work with, and once you're satisfied with your changes, you can then issue a pull request to us to incorporate your changes.

### Adding a new translation

Inside the ruble, you'll want to add a file to hold your translations (assuming that the language is not yet supported). We'll use Spanish as an example. We'd add a file at **zen-coding.ruble/config/locales/es.yml**

If there's already an English file, the easiest way to start is to copy the **zen-coding.ruble/config/locales/en.yml** to **zen-coding.ruble/config/locales/es.yml** file.

Then we'll change the root **en** key in the file to **es**. After that, it's simply a matter of changing the string values (the right-hand value of the indented pairs) to their Spanish equivalents.
