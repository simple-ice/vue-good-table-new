import sinon from 'sinon'
import { mount } from '@vue/test-utils'
import VueGoodTable from '@/components/Table'

const columns = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Age',
    field: 'age',
    type: 'number'
  }
]
const rows = [
  {name: 'John', age: '20'},
  {name: 'Jane', age: '24'},
  {name: 'Susan', age: '16'},
  {name: 'Chris', age: '55'},
  {name: 'Dan', age: '40'},
  {name: 'John', age: '20'},
  {name: 'Jane', age: '24'},
  {name: 'Susan', age: '16'},
  {name: 'Chris', age: '55'},
  {name: 'Dan', age: '40'}
]

describe('Table.vue', () => {
  let wrapper, vm
  beforeEach(() => {
    wrapper = mount(VueGoodTable, {
      attachToDocument: true,
      props: {
        rows: rows,
        columns: columns
      }
    })
    vm = wrapper.vm
  })

  it('should render correct contents', () => {
    let tableRows = wrapper.findAll('tbody tr')
    expect(tableRows.length).toEqual(rows.length)
  })

  describe('global search', () => {
    it('should render less records', async () => {
      wrapper = mount(VueGoodTable, {
        props: {
          searchOptions: { enabled: true }, // Enable global search
          rows: rows,
          columns: columns
        }
      })
      
      const searchElt = wrapper.find('.vgt-global-search input')
      await searchElt.setValue('jo')
      await searchElt.trigger('input')

      expect(wrapper.findAll('tbody tr').length).toBeLessThan(rows.length)
    })
  })

  describe('sort', () => {
    it('should sort on the given initialSortBy option by default', async () => {
      const wrapper = mount(VueGoodTable, {
        props: {
          rows: rows,
          columns: columns,
          sortOptions: { initialSortBy: {field: 'age', type: 'asc'} }
        }
      })
      const vm = wrapper.vm;

      expect(vm.$data.sortChanged).toBe(true)
      expect(vm.$data.sorts).toEqual([ { field: 'age', type: 'asc' } ]);
    })

    it('should call changeSort if click on first header item', async () => {
      const sortSpy = sinon.stub(vm, 'changeSort')
      await vm.$forceUpdate() // force stub method
      await wrapper.find('thead th button').trigger('click')
      expect(sortSpy.called).toBe(true)
    })

    it('should call changeSort if click on second header item', async () => {
      const sortSpy = sinon.stub(vm, 'changeSort')
      await vm.$forceUpdate() // force stub method
      await wrapper.find('thead th:nth-child(2) button').trigger('click')
      expect(sortSpy.called).toBe(true)
    })
  })

  describe('filter', () => {
    it('should remove some rows when filtering', async () => {
      columns[0].filterOptions = { enabled: true } // Enable sorting for the first column
      const wrapper = mount(VueGoodTable, {props: {rows: rows, columns: columns, paginated: false}})

      const searchElt = wrapper.find('input.vgt-input')
      await searchElt.setValue('jo')
      await searchElt.trigger('input')

      // debounce timeout
      setTimeout(() => {
        expect(wrapper.findAll('tbody tr').length).toBeLessThan(rows.length)
        expect(wrapper.findAll('tbody tr').length).toBeGreaterThan(1)
      }, 420)
    })
  })
})
