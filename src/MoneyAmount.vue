<template>
  <span :class="classes" v-text="formattedAmount" :title="formattedAmount" />
</template>

<script>
import { getUserLocale } from 'get-user-locale';
import Helper from './helpers/index.ts';

export default {
  name: 'MoneyAmount',
  props: {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    isFractionated: {
      type: Boolean,
      required: false,
      default: true,
    },
    hasColors: {
      type: Boolean,
      required: false,
      default: true,
    },
    locale: {
      type: String,
      required: false,
      default: null,
    },
    minimumFractionDigits: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    classes() {
      if (!this.hasColors) {
        return '';
      }

      if (this.amount > 0) {
        return 'money-amount--positive';
      } if (this.amount < 0) {
        return 'money-amount--negative';
      }

      return 'money-amount--zero';
    },
    formattedAmount() {
      const options = {
        isFractionated: this.isFractionated,
        locale: this.locale || getUserLocale(),
        minimumFractionDigits: this.minimumFractionDigits,
      };

      return Helper.formatMoneyAmount(this.amount, this.currency, options);
    },
  },
};
</script>
