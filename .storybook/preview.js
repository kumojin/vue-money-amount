import Vue from 'vue'
import { addDecorator } from '@storybook/vue'

addDecorator(() => ({
  template: '<story/>',
}))
