---
title: Proxy Properties
weight: '140'
---

# Proxy Properties

Demonstrates expressing properties of Titanium objects with Alloy proxy elements.

::: tip App Folder Location
You can find this example app in the Alloy repository under [samples/apps/ui/proxy\_properties](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

Many Titanium UI objects and properties can be declared in Alloy as mark-up. These mark-up elements are considered proxies for the underlying Titanium APIs. For example, the [views/ios/index.xml](#ios) view, shown below, uses the following proxies.

* `<NavigationWindow/>`

* `<Window/>`

* `<Button/>`

    * `<LeftNavButton/>`

    * `<RightNavButton/>`

    * `<TitleControl/>`

* `<TextField/>`

    * `<LeftButton/>`

    * `<RightButton/>`

    * `<KeyboardToolbar/>`

        * `<Toolbar/>`

            * `<Items/>`

Proxies that represent properties of objects are nested inside the parent element. For example, a `<Window/>` element's [leftNavProperty](#!/api/Titanium.UI.Window-property-leftNavButton) is represented by a `<LeftNavButton/>` child element. Proxies can nest multiple levels, as shown with the Toolbar element in the XML view below.

**views/ios/index.xml**

```xml
<Alloy>
  <NavigationWindow>
    <Window>
      <!-- proxy properties for the window -->
      <LeftNavButton>
        <Button onClick="sayHi">say hi</Button>
      </LeftNavButton>
      <TitleControl>
        <Label>title control</Label>
      </TitleControl>
      <RightNavButton>
        <Button onClick="doAlert">alert</Button>
      </RightNavButton>
      <!-- test rest of the Window markup -->
      <Require src="table"/>
      <!-- iOS TextField proxy properties -->
      <TextField id="textfield" platform="ios">
        <LeftButton>
          <Button onClick="sayHi" class="textButton">left</Button>
        </LeftButton>
        <RightButton>
          <Button onClick="doAlert" class="textButton">right</Button>
        </RightButton>
        <!-- even nested proxy properties -->
        <KeyboardToolbar>
          <Toolbar>
            <Items>
              <Button>button 1</Button>
              <FlexSpace/>
              <Button>button 2</Button>
            </Items>
          </Toolbar>
        </KeyboardToolbar>
      </TextField>
    </Window>
  </NavigationWindow>
</Alloy>
```

The `views/table.xml` view defines a `<TableView/>` element and various properties of the TableView such as its footerView and headerView, as well as [TableViewSection](#!/api/Titanium.UI.TableViewSection) and `TableViewRow` elements.

**views/table.xml**

```xml
<Alloy>
  <TableView id="table">
    <!-- proxy properties for the table -->
    <HeaderView>
      <View id="headerView"/>
    </HeaderView>
    <HeaderPullView>
      <View id="headerPull">
        <Label id="pullLabel">Would be refreshing...</Label>
      </View>
    </HeaderPullView>
    <FooterView>
      <View id="footerView"/>
    </FooterView>
    <TableViewSection headerTitle="section 1">
      <TableViewRow title="row 1"/>
      <TableViewRow title="row 2"/>
      <TableViewRow title="row 3"/>
      <TableViewRow title="row 4"/>
      <TableViewRow title="row 5"/>
    </TableViewSection>
    <TableViewSection>
      <HeaderView>
        <Label height="30dp" backgroundColor="#ff0">section 2</Label>
      </HeaderView>
      <FooterView>
        <Label height="30dp" backgroundColor="#0ff">the footer</Label>
      </FooterView>
      <TableViewRow title="row 1"/>
      <TableViewRow title="row 2"/>
      <TableViewRow title="row 3"/>
      <TableViewRow title="row 4"/>
      <TableViewRow title="row 5"/>
    </TableViewSection>
  </TableView>
</Alloy>
```

## See also

* [Proxy Properties](#undefined)
