import { createLocalVue, shallowMount } from '@vue/test-utils'
import { getUserLocale } from 'get-user-locale'
import { formatMoneyAmount } from './helpers'

import MoneyAmount from './MoneyAmount'

jest.mock('get-user-locale')
jest.mock('./helpers')

const localVue = createLocalVue()

describe('<MoneyAmount />', () => {
  const AMOUNT = 4284
  const CURRENCY = 'USD'
  const CA_LOCALE = 'fr-CA'
  const propsData = {
    amount: AMOUNT,
    currency: CURRENCY
  }
  let wrapper

  const mount = (props) => {
    return shallowMount(MoneyAmount, {
      localVue,
      propsData: {
        ...propsData,
        ...props
      }
    })
  }

  beforeEach(() => {
    getUserLocale.mockReturnValue(CA_LOCALE)
    formatMoneyAmount.mockImplementation((amount, currency, opts) => {
      const optsAsString = Object.keys(opts).reduce((acc, optionName) => {
        acc += `${optionName}: ${opts[optionName]}, `
        return acc
      }, '')
      return `${amount}-${currency}-${optsAsString}`
    })
  })

  it('renders with default properties', () => {
    wrapper = mount()

    expect(wrapper.text()).toBe('4284-USD-isFractioned: true, locale: fr-CA, minimumFractionDigits: 0,')
  })

  it('renders with custom properties', () => {
    wrapper = mount({
      locale: 'fr-FR',
      isFractioned: false,
      minimumFractionDigits: 4
    })

    expect(wrapper.text()).toBe('4284-USD-isFractioned: false, locale: fr-FR, minimumFractionDigits: 4,')
  })
})
