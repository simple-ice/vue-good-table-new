# Row Details Table

This option allows you to show or hide the details of a row on click.

## Configuration 

type: `Boolean`

`table-row` props now also contain `props.expandedRow` this will be true if row is expanded

Object containing select options
```html
<vue-good-table
  :columns="columns"
  :rows="rows"
  :enable-row-expand="true"
  expanded-row-classes="bg-red"
  expanded-row-detail-classes="bg-yellow"
>
```

### Example
```vue
<vue-good-table
  :columns="columns"
  :rows="rows"
  :enable-row-expand="true"
  expanded-row-classes="bg-red"
  expanded-row-detail-classes="bg-yellow">
    <template #row-details="props">
      <p>{{ props.formattedRow }} (or props.row.X to access any property X of the current row)</p>
    </template>
</vue-good-table>
```
