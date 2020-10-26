<template>
  <span :class="classes" v-text="formattedAmount" />
</template>

<script>
import { getUserLocale } from 'get-user-locale';
import Helper from '@/helpers';

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
    locale: {
      type: String,
      required: false,
    },
    minimumFractionDigits: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    classes () {
      if (this.amount > 0) {
        return 'money-amount--positive'
      } else if (this.amount < 0) {
        return 'money-amount--negative'
      } else {
        return 'money-amount--zero'
        
      }
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
<style lang="scss">
  .money-amount {
    &--positive {
      color: green;
    }

    &--negative {
      color: red;
    }
  }
</style>
