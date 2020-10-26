<template>
  <span :class="classes" v-text="formattedAmount" />
</template>

<script>
  import { getUserLocale } from 'get-user-locale';
  import Helper, { MoneyAmountOptions } from '@/helpers';

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
      }
    },
    computed: {
      classes () {
        return 'money-amount';
      },
      formattedAmount () {
        const options: MoneyAmountOptions = {
          isFractionated: this.isFractionated,
          locale: this.locale || getUserLocale(),
          minimumFractionDigits: this.minimumFractionDigits,
        };

        return Helper.formatMoneyAmount(this.amount, this.currency, options);
      }
    }
  };
</script>
