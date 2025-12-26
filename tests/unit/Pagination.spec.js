import sinon from 'sinon'
import VgtPagination from '@/components/pagination/VgtPagination'
import { mount } from '@vue/test-utils'

describe('VgtPagination', () => {
  let wrapper, vm
  beforeEach(() => {
    wrapper = mount(VgtPagination, {
      props: {
        perPage: 10,
        total: 30
      }
    })
    vm = wrapper.vm
  })
  it('should render 2 page buttons', () => {
    expect(wrapper.findAll('.footer__navigation__page-btn').length).toEqual(2)
    wrapper.find('select').exists()
  })

  it('should call previousPage when the first button is clicked', () => {
    let previousPageStub = sinon.stub(vm, 'previousPage')
    wrapper.find('.footer__navigation__page-btn:first-of-type').trigger('click')
    expect(previousPageStub.called).toBe(true)
  })

  it('should call nextPage when the last button is clicked', () => {
    let nextPageStub = sinon.stub(vm, 'nextPage')
    wrapper.find('.footer__navigation__page-btn:last-child').trigger('click')
    expect(nextPageStub.called).toBe(true)
  })

  it('should call pageChanged during nextPage', () => {
    let pageChangedStub = sinon.stub(vm, 'pageChanged')
    vm.nextPage()
    expect(pageChangedStub.called).toBe(true)
  })

  it('should call pageChanged during previousPage', () => {
    vm.nextPage()
    let pageChangedStub = sinon.stub(vm, 'pageChanged')
    vm.previousPage()
    expect(pageChangedStub.called).toBe(true)
  })
})
