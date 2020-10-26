import MoneyAmount from './MoneyAmount';

export default {
  title: 'MoneyAmount',
};

export const USDAmount = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 4284,
    currency: 'USD',
    locale: 'en-US'
  }),
  template: `<money-amount :amount="amount" :currency="currency" :locale="locale" />`
});

export const CADAmount = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 4284,
    currency: 'CAD',
    locale: 'fr-CA'
  }),
  template: `<money-amount :amount="amount" :currency="currency" :locale="locale" />`
});

export const JPYAmount = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 4284,
    currency: 'JPY',
    locale: 'en-US'
  }),
  template: `<money-amount :amount="amount" :currency="currency" :locale="locale" />`
});