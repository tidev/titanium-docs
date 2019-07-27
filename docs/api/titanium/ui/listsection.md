# Titanium.UI.ListSection

<TypeHeader/>

## Overview

Use the <Titanium.UI.createListSection> method or **`<ListSection>`** Alloy element to create a `ListSection`.

List sections are used to manipulate and organize list items contained within it. For examples
of using list sections, see the examples in <Titanium.UI.ListView> and <Titanium.UI.ListItem>.

## Examples

### Alloy XML Markup

ListSection is supported by Alloy 1.2.0 and later.

HeaderView and FooterView are supported on Alloy 1.3.0 and later.

    <Alloy>
        <Window fullscreen="true">
            <ListView>
                <ListSection>

                    <!-- Sets ListSection's headerView property -->
                    <HeaderView>
                        <View backgroundColor="#DDD" height="Ti.UI.SIZE">
                            <Label>Fruits</Label>
                        </View>>
                    </HeaderView>

                    <ListItem title="Apple" />
                    <ListItem title="Orange" />
                    <ListItem title="Pear" />

                    <!-- Sets ListSection's footerView property -->
                    <FooterView>
                        <View backgroundColor="#DDD" height="Ti.UI.SIZE">
                            <Label>3 items</Label>
                        </View>

                    </FooterView>
                </ListSection>
            </ListView>
        </Window>
    </Alloy>

<ApiDocs/>
