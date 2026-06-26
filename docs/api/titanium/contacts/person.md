---
title: Titanium.Contacts.Person
properties:
  - name: address
    type: Dictionary
    summary: Addresses for the person. Multi-value. Read-only on Android.
    description: >
      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: any of <code>home</code>, <code>work</code>, and/or
      <code>other</code>.</li>

      <li>Values: arrays of dictionary types with seven keys,
      <code>CountryCode</code>, <code>Street</code>, <code>City</code>,<br>

      , <code>State</code>, <code>Country</code> and <code>PostalCode</code>,
      each with a <code>string</code> type value.</li>

      </ul>

      <p>On Android:</p>

      <p>'CountryCode' and 'County' are currently not supported.</p>

      <p>On iOS:</p>

      <p>The <code>CountryCode</code> key value may be one of the recognized
      two-character ISO 3166-1 country<br>

      codes, and determines the format in which the contact is presented by the
      address book<br>

      user interface. See the wikipedia section<br>

      <a
      href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements">ISO
      3166-1 alpha-2</a><br>

      for a comprehensive list of codes.</p>
  - name: birthday
    type: String
    summary: Date of birth of the person. Single value.
    description: >
      <p>Date format is
      &quot;<em>yyyy</em>-<em>MM</em>-<em>dd</em><strong>T</strong><em>HH</em><strong>:</strong><em>mm</em><strong>:</strong><em>ss</em><strong>.</strong><em>SSS</em><strong>+0000</strong>&quot;</p>
  - name: alternateBirthday
    type: Dictionary
    summary: |
      Alternate birthday of the person. Single Dictionary.<br>
    description: >
      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: <code>calendarIdentifier</code>, <code>era</code>,
      <code>year</code>, <code>month</code>, <code>day</code> and
      <code>isLeapMonth</code>.</li>

      <li>Values: Use <code>chinese</code>, <code>hebrew</code> and
      <code>islamic-civil</code> for <code>calendarIdentifier</code>.<br>

      Use <code>number</code> type for <code>era</code>, <code>year</code>,
      <code>month</code> and <code>day</code>. These must be consistent with<br>

      corresponding <code>calendarIdentifier</code>.<br>

      Use <code>boolean</code> type for <code>isLeapMonth</code>.</li>

      </ul>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.6.0
      ipad: 3.6.0
      macos: 9.2.0
  - name: date
    type: Dictionary
    summary: Dates associated with the person. Multi-value.
    description: >
      <p>Adding or modifying this property is not currently supported.</p>

      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: any of <code>anniversary</code> and/or <code>other</code>.</li>

      <li>Values: array of <code>string</code> type.</li>

      </ul>

      <p>Date format is
      &quot;<em>yyyy</em>-<em>MM</em>-<em>dd</em><strong>T</strong><em>HH</em><strong>:</strong><em>mm</em><strong>:</strong><em>ss</em><strong>.</strong><em>SSS</em><strong>+0000</strong>&quot;</p>
  - name: department
    type: String
    summary: Department of the person. Single value.
  - name: email
    type: Dictionary
    summary: Email addresses for the person. Multi-value. Read-only on Android.
    description: >
      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: any of <code>home</code>, <code>work</code>, and/or
      <code>other</code>.</li>

      <li>Values: array of <code>string</code> type.</li>

      </ul>
  - name: firstName
    type: String
    summary: First name of the person. Single value.
  - name: firstPhonetic
    type: String
    summary: Phonetic first name of the person.  Single value.
  - name: fullName
    type: String
    summary: Localized full name of the person. Single value. Read-only on Android.
    description: |
      <p>The full name will be printed in the order of.<br>
      Prefix,first name, middle name, family name, suffix.</p>
  - name: id
    type: Number
    summary: Record identifier of the person. Single value.
    platforms:
      - android
  - name: identifier
    type: String
    summary: Identifier of the person.
    description: >
      <p>Prior to iOS 9, use the <a
      href="Titanium.Contacts.Person.recordId">recordId</a> property.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 5.0.0
      ipad: 5.0.0
      macos: 9.2.0
  - name: image
    type: Titanium.Blob
    summary: Image for the person. Single value. Read-only for &gt;= iOS 9
    description: |
      <p>Set to <code>null</code> to remove the image.</p>
  - name: instantMessage
    type: Dictionary
    summary: |
      Instant messenger information of the person. Multi-value.<br>
    description: >
      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: any of <code>home</code>, <code>work</code> and/or
      <code>other</code>.</li>

      <li>Values: arrays of dictionary types with two keys, <code>service</code>
      and <code>username</code>, each with a<br>

      <code>string</code> type value.</li>

      </ul>

      <p>The <code>service</code> key value may be one of <code>AIM</code>,
      <code>Facebook</code>, <code>GaduGadu</code>, <code>GoogleTalk</code>,
      <code>ICQ</code>,<br>

      <code>Jabber</code>, <code>MSN</code>, <code>QQ</code>,
      <code>Skype</code>, or <code>Yahoo</code>. These values are key
      sensitive.</p>
  - name: socialProfile
    type: Dictionary
    summary: |
      Social profile information of the person. Multi-value.<br>
    description: >
      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: any of <code>home</code>, <code>work</code> and/or
      <code>other</code>.</li>

      <li>Values: arrays of dictionary types with two keys, <code>service</code>
      and <code>username</code> each with a<br>

      <code>string</code> type value.</li>

      </ul>

      <p>The <code>service</code> key value may be one of <code>twitter</code>,
      <code>sinaweibo</code>, <code>gamecenter</code>,
      <code>facebook</code>,<br>

      <code>myspace</code>, <code>linkedin</code>, or <code>flickr</code>. These
      values are key sensitive.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.6.0
      ipad: 3.6.0
      macos: 9.2.0
  - name: jobTitle
    type: String
    summary: Job title of the person. Single value.
  - name: kind
    type: Number
    summary: >
      Determines the type of information the person record contains; either
      person or organization.<br>

      Read-only on Android.<br>
  - name: lastName
    type: String
    summary: Last name of the person. Single value.
  - name: lastPhonetic
    type: String
    summary: Phonetic last name of the person. Single value.
  - name: middleName
    type: String
    summary: Middle name of the person. Single value.
  - name: middlePhonetic
    type: String
    summary: Phonetic middle name of the person. Single value.
  - name: nickname
    type: String
    summary: Nickname of the person. Single value.
  - name: note
    type: String
    summary: Notes for the person. Single value.
  - name: organization
    type: String
    summary: Organization to which the person belongs. Single value.
  - name: phone
    type: Dictionary
    summary: Phone numbers for the person. Multi-value. Read-only on Android.
    description: >
      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: any of <code>home</code>, <code>work</code>, <code>other</code>,
      <code>mobile</code>, <code>pager</code>, <code>workFax</code>,
      <code>homeFax</code>, <code>main</code>,<br>

      and/or <code>iPhone</code>.</li>

      <li>Values: array of <code>string</code> type.</li>

      </ul>
  - name: prefix
    type: String
    summary: Prefix for the person. Single value.
  - name: recordId
    type: Number
    summary: Record identifier of the person. Single value. Deprecated since iOS 9.
    description: >
      <p>For iOS 9 and later, use the <a
      href="Titanium.Contacts.Person.identifier">Titanium.Contacts.Person.identifier</a>
      property.<br>

      Previously, a contact can be selected without requiring User permission.
      In such case this<br>

      property returns -1.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      macos: 9.2.0
  - name: relatedNames
    type: Dictionary
    summary: Names of people to which the person is related. Multi-value.
    description: >
      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: any of <code>mother</code>, <code>father</code>,
      <code>parent</code>, <code>brother</code>, <code>sister</code>,
      <code>child</code>, <code>friend</code>, <code>spouse</code>,<br>

      <code>partner</code>, <code>assistant</code>, <code>manager</code>, and/or
      <code>other</code>.</li>

      <li>Values: array of <code>string</code> type.</li>

      </ul>
  - name: suffix
    type: String
    summary: Suffix for the person. Single value.
  - name: url
    type: Dictionary
    summary: URLs of webpages associated with the person. Multi-value.
    description: >
      <p>The format of the dictionary accepted by this property is as
      follows:</p>

      <ul>

      <li>Keys: any of <code>homepage</code>, <code>home</code>,
      <code>work</code>, and/or <code>other</code>.</li>

      <li>Values: array of <code>string</code> type.</li>

      </ul>
---

# Titanium.Contacts.Person

An object that represents a contact record for a person or organization in the system contacts 
address book.


A person object is created using [Titanium.Contacts.createPerson](/api/titanium/contacts).

The following two kinds of properties exist for this object:

* single value - contains either a `string` or `number` type value, an array of `string` type 
values, or `null` if unset.
* multi-value - contains a dictionary with typical keys of `home`, `work` and/or `other`. Each 
key contains either a `string` type value, an array of `string` type values, or a dictionary 
containing key/value pairs with `string` type values.

#### Adding and Modifying Properties

Support for adding and modifying properties is currently supported on iOS and Android.

#### Keys as Address Book UI Labels

Keys act as labels in the address book user interface.

Although there is limited support for custom, arbitrarily-named, keys when used with multi-value 
properties, there is no support them with single value properties.

On iOS, creating custom keys is not recommended, and will lead to undefined results.

If a label has been created by the user of the device and used with a multi-value property, it 
will exist as a key with the same name.

See examples in [Titanium.Contacts](/api/titanium/contacts) for more information.

These APIs are unavailable on macOS if the app is built on a version of Xcode &lt; 12.


**Extends:** `Titanium.Proxy` · **Since:** 0.8, 0.8, 0.8, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

