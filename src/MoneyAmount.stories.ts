import MoneyAmount from './MoneyAmount.vue';

export default {
  title: 'MoneyAmount',
};

export const USDAmount = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 4284,
    currency: 'USD',
    locale: 'en-US',
  }),
  template: '<money-amount :amount="amount" :currency="currency" :locale="locale" />',
});

export const CADAmount = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 4284,
    currency: 'CAD',
    locale: 'fr-CA',
  }),
  template: '<money-amount :amount="amount" :currency="currency" :locale="locale" />',
});

export const JPYAmount = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 4284,
    currency: 'JPY',
    locale: 'en-US',
  }),
  template: '<money-amount :amount="amount" :currency="currency" :locale="locale" />',
});

export const CADAmountNotFractionatedWithMinimumFractionDigits2 = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 4284,
    currency: 'CAD',
    locale: 'fr-CA',
    isFractionated: false,
    minimumFractionDigits: 2,
  }),
  template: `
    <money-amount 
      :amount="amount" 
      :currency="currency" 
      :locale="locale" 
      :isFractionated="isFractionated" 
      :minimumFractionDigits="minimumFractionDigits"
    />
  `,
});

export const USDNegative = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: -4284,
    currency: 'USD',
    locale: 'en-US',
  }),
  template: '<money-amount :amount="amount" :currency="currency" :locale="locale" />',
});

export const CADZero = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 0,
    currency: 'USD',
    locale: 'en-US',
  }),
  template: '<money-amount :amount="amount" :currency="currency" :locale="locale" />',
});

export const USDNegativeWithoutColor = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: -4284,
    currency: 'USD',
    locale: 'en-US',
  }),
  template: '<money-amount :amount="amount" :currency="currency" :locale="locale" :hasColors="false" />',
});

export const WithoutCurrency = () => ({
  components: { MoneyAmount },
  data: () => ({
    amount: 4284,
    currency: '',
    locale: 'fr-CA',
  }),
  template: `
    <money-amount 
      :amount="amount" 
      :currency="currency" 
      :locale="locale" 
    />
  `,
});
