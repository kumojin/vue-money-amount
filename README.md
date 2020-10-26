# vue-money-amount
Displays a stylable money amount and currency according to the user's preferred formatting.

## Installation

### Using yarn

`yarn add vue-money-amount`

### Using npm

`npm i --save vue-money-amount`

## Usage

```js
import VueMoneyAmount from 'vue-money-amout';

Vue.component('vue-money-amout', VueMoneyAmount);
```

```html
<money-amount :amount="amount" :currency="currency" :locale="locale" />
```

## Props API

| Props                     | Type            | Required | Default             |
|---------------------------|-----------------|----------|---------------------|
| amount                    | Float           | true     | -                   |
| currency                  | String          | true     | -                   |
| locale                    | String          | no       | User locale         |
| isFractionated            | Boolean         | no       | true                |
| minimumFractionDigits     | Int             | no       | 0                   |

The `isFractionated` prop defines if the amount prop value is already fractionated or not.

Eg. 
- If the `amount` is `4284` and `isFractionated` is `true`, it will display: `42.84`
- If the `amount` is `4284` and `isFractionated` is `false`, it will display: `4284`

The `minimumFractionDigits` prop defines the minimum number of decimal digits.

Eg.
- If the `amount` is `4284`, `minimumFractionDigits` is `3`, it will display: `42.840`

## Contribution

### Project setup

```bash
yarn
```

### Building

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Storybook

```bash
yarn storybook
```

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
