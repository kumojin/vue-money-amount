# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 2 component library that provides a single `MoneyAmount` component for displaying localized monetary amounts with currency formatting. The component uses the browser's `Intl.NumberFormat` API for proper locale-specific formatting and supports fractionated amounts (where the raw number needs to be divided by currency precision).

## Commands

**Important**: always use yarn (not npm) to run commands in this project.

### Development

- `yarn` - Install dependencies
- `yarn build` - Build the library using Vite
- `yarn lint` - Run ESLint with auto-fix
- `yarn storybook` - Start Storybook development server on port 6006
- `yarn build:storybook` - Build Storybook for production

### Testing

- `yarn test:unit` - Run Vitest tests once
- `yarn test:unit:watch` - Run Vitest tests in watch mode

## Architecture

### Core Component (`src/MoneyAmount.vue`)

The main Vue 2 component that accepts props for amount, currency, locale, and formatting options. It delegates formatting logic to the Helper class and applies CSS classes based on positive/negative/zero values when `hasColors` is enabled.

### Helper Class (`src/helpers/index.ts`)

Contains the core business logic in `Helper.formatMoneyAmount()` which:

- Uses `iso4217` to determine currency precision for fractionated amounts
- Leverages `Intl.NumberFormat` for locale-aware formatting
- Supports both currency and decimal formatting modes

### Key Dependencies

- **Vue 2.x** - Component framework (note: uses Vue 2, not Vue 3)
- **get-user-locale** - Browser locale detection
- **iso4217** - Currency precision data (e.g., USD has 2 decimal places, JPY has 0)

### Build Configuration

- **Vite** with TypeScript and Vue 2 support
- **Vitest** for fast unit testing
- **Storybook 7.x** for component documentation and development
- Uses Vite builder with custom SCSS support

### Important Notes

- The component supports "fractionated" amounts where raw integers are divided by currency precision (e.g., 4284 cents becomes $42.84 for USD)
- TypeScript is configured with relaxed settings (`noImplicitAny: false`, `strictNullChecks: false`)
- The build targets ES6 with CommonJS output for library distribution
- CSS classes are applied conditionally: `money-amount--positive`, `money-amount--negative`, `money-amount--zero`
