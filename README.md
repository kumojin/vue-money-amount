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
