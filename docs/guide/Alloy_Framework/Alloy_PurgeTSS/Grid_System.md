# Grid System
A simple but useful Grid System with utilities to lay columns and rows.

This is the most basic layout in order to use the grid system. Of course you can create a more complex layout by mixing different columns and rows.

```xml
<Alloy>
  <View class='grid'>
    <View class="grid-cols-4">
      <View class="gap-1"> <!-- Optional if you dont need a gutter between columns ( or rows ) -->
        <!-- ANY CONTENT GOES HERE -->
      </View> 
    </View>

    <View class="grid-cols-4">
      <View class="gap-1"> <!-- Optional if you dont need a gutter between columns ( or rows ) -->
        <!-- ANY CONTENT GOES HERE -->
      </View>
    </View>
    ...
    ...
    ...
  </View>
</Alloy>
```

## Column grid
**`.grid-cols-{n}`**
With `grid-cols` your are telling the grid system how many columns you want to fit in each row, for example if you set each view with a `.grid-cols-2` class it will fit two views per row, `.grid-cols-3` will fit three views, and so on.

**`.col-span-{n}`**
With `col-span` you are setting the number of columns each element will occupy in a **12 column grid**.

If you set a view with `.col-span-3` you can add three more views of equal width to fill the row, or any other combination like 3-6-3, 2-4-6, etc., as long as the sum fills a **12 column grid**.


## Row grid
**`.grid-rows-{n}`**
With `grid-rows` your are telling the grid system how many rows you want to fit in each column, for example if you set each view with a `.grid-rows-2` class it will fit two views per row, `.grid-rows-3` will fit three views, and so on.

**`.row-span-{n}`**
With `row-span` you are setting the number of rows each element will occupy in a **12 row grid**.

If you set a view with `.row-span-3` you can add three more views of equal height to fill the column, or any other combination like 3-6-3, 2-4-6, etc., as long as the sum fills a **12 row grid**.
 ![grid-system-example](./images/grid-system-example.png)

## Available utilities for "The Grid"
These are the available utilities to control [”The Grid”](https://youtu.be/4-J4duzP8Ng?t=13) ;-)

### Gap
Utilities for controlling gutters between grid.
  - Use **`gap-{size}`** to change the gap between both rows and columns.
  - Use **`gap-x-{size}`** and **`gap-y-{size}`** to change the gap between rows and columns independently.
  - use **`gap-{side}-{size}`** to change the gap between rows and columns to an specific side. t=top, r=right, b=bottom and l=left.

### Column Span
Utilities for controlling how elements are sized across grid columns.
  - Use the **`col-span-{n}`** utilities to make an element span n columns.

### Row Span
Utilities for controlling how elements are sized across grid rows.
  - Use the **`row-span-{n}`** utilities to make an element span n rows.

### Grid and Grid Flow
Utilities for controlling the direction of the grid system.
  - Use **`grid`** or **`grid-flow-col`** to set the `layout` poperty to `horizontal`.
  - Use **`grid-flow-row`** to set the `layout` poperty to `vertical`.

### Grid Template Columns
Utilities for specifying the columns in a grid layout.
  - Use the **`grid-cols-{n}`** utilities to create grids with n equally sized columns.

### Grid Template Rows
Utilities for specifying the rows in a grid layout.
  - Use the **`grid-rows-{n}`** utilities to create grids with n equally sized rows.

### Items
Utilities for controlling how elements are sized and placed across grid rows.
  - `start`, `end` and `center` utilities