import { createLocalVue, shallowMount } from '@vue/test-utils';
import { getUserLocale } from 'get-user-locale';
import Helper from './helpers'

import MoneyAmount from '@/MoneyAmount.vue';

jest.mock('get-user-locale');
jest.mock('./helpers');

const localVue = createLocalVue();

describe('<MoneyAmount />', () => {
  const AMOUNT: number = 4284;
  const CURRENCY: string = 'USD';
  const CA_LOCALE: string = 'fr-CA';
  const propsData = {
    amount: AMOUNT,
    currency: CURRENCY,
  };
  let wrapper;

  const mount = (props = {}) => {
    return shallowMount(MoneyAmount, {
      localVue,
      propsData: {
        ...propsData,
        ...props,
      },
    });
  };

  beforeEach(() => {
    (getUserLocale as jest.Mock).mockReturnValue(CA_LOCALE);
    (Helper.formatMoneyAmount as jest.Mock).mockImplementation((amount, currency, opts) => {
      const optsAsString = Object.keys(opts).reduce((acc, optionName) => {
        acc += `${optionName}: ${opts[optionName]}, `
        return acc;
      }, '');

      return `${amount}-${currency}-${optsAsString}`;
    });
  });

  it('renders with default properties', () => {
    wrapper = mount();

    expect(wrapper.text()).toBe('4284-USD-isFractionated: true, locale: fr-CA, minimumFractionDigits: 0,');
  });

  it('renders with custom properties', () => {
    wrapper = mount({
      locale: 'fr-FR',
      isFractionated: false,
      minimumFractionDigits: 4,
    });

    expect(wrapper.text()).toBe('4284-USD-isFractionated: false, locale: fr-FR, minimumFractionDigits: 4,');
  });
});
