import { createLocalVue, shallowMount } from '@vue/test-utils';
import { getUserLocale } from 'get-user-locale';
import Helper from './helpers';

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
    (getUserLocale as any as jest.Mock).mockReturnValue(CA_LOCALE);
    (Helper.formatMoneyAmount as jest.Mock).mockImplementation((amount, currency, opts) => {
      const optsAsString = Object.keys(opts).reduce((acc, optionName) => {
        acc += `${optionName}: ${opts[optionName]}, `
        return acc;
      }, '');

      return `${amount}-${currency}-${optsAsString.trim()}`;
    });
  });

  describe('when the component is mounted', () => {
    describe('with default properties', () => {
      it('should render with default properties', () => {
        wrapper = mount();

        expect(wrapper.text()).toBe('4284-USD-isFractionated: true, locale: fr-CA, minimumFractionDigits: 0,');
        expect(wrapper.attributes('title')).toBe('4284-USD-isFractionated: true, locale: fr-CA, minimumFractionDigits: 0,');
      });
    });

    describe('with custom properties', () => {
      it('should render with custom properties', () => {
        wrapper = mount({
          locale: 'fr-FR',
          isFractionated: false,
          minimumFractionDigits: 4,
        });

        expect(wrapper.text()).toBe('4284-USD-isFractionated: false, locale: fr-FR, minimumFractionDigits: 4,');
        expect(wrapper.attributes('title')).toBe('4284-USD-isFractionated: false, locale: fr-FR, minimumFractionDigits: 4,');
      });
    });

    describe('with classes', () => {
      describe('with positive amount', () => {
        it('should render with positive amount', () => {
          wrapper = mount();

          expect(wrapper.classes()).toEqual(['money-amount--positive']);
        });
      });

      describe('with negative amount', () => {
        it('should render with negative amount', () => {
          wrapper = mount({
            amount: -2233,
          });

          expect(wrapper.classes()).toEqual(['money-amount--negative']);
        });
      });

      describe('with zero amount', () => {
        it('should render with zero amount', () => {
          wrapper = mount({
            amount: 0,
          });

          expect(wrapper.classes()).toEqual(['money-amount--zero']);
        });
      });

      describe('without color', () => {
        it('should render without classes', () => {
          wrapper = mount({
            amount: -2233,
            hasColors: false,
          });

          expect(wrapper.classes()).toEqual([]);
        });
      });
    });
  });
});
