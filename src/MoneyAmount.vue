<template>
  <span :class="classes" v-text="formattedAmount" />
</template>

<script>
import { getUserLocale } from 'get-user-locale'
import { formatMoneyAmount } from './helpers'

export default {
  name: 'CheckoutPrice',
  props: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    isFractioned: {
      type: Boolean,
      required: false,
      default: true
    },
    locale: {
      type: String,
      required: false
    },
    minimumFractionDigits: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    classes () {
      return 'money-amount'
    },
    formattedAmount () {
      const options = {
        isFractioned: this.isFractioned,
        locale: this.locale || getUserLocale(),
        minimumFractionDigits: this.minimumFractionDigits
      }
      return formatMoneyAmount(this.amount, this.currency, options)
    }
  }
}
</script>
