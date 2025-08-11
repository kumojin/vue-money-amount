import Helper from '@/helpers/index';
import { vi } from 'vitest';

vi.mock('get-user-locale', () => ({
  __esModule: true,
  default: vi.fn().mockReturnValue('fr-CA'),
}));

describe('formatMoneyAmount', () => {
  const amount = 428400;

  describe('with default parameters', () => {
    it('should return the amount formatted as a number with fr-CA locale (default from mock)', () => {
      const f = Helper.formatMoneyAmount(amount);
      expect(f).toBe('428 400');
    });
  });

  describe('with parameters', () => {
    const currency = 'CAD';
    const locale = 'en-EN';

    const baseCase = { amount, currency, locale };
    const cases = [
      { ...baseCase, isFractionated: false, minimumFractionDigits: 0, result: 'CA$428,400' },
      { ...baseCase, isFractionated: true, minimumFractionDigits: 0, result: 'CA$4,284' },
      { ...baseCase, isFractionated: false, minimumFractionDigits: 2, result: 'CA$428,400.00' },
      { ...baseCase, isFractionated: true, minimumFractionDigits: 2, result: 'CA$4,284.00' },
      // With a currency that has no fractions, the result should be the same
      // regardless of "isFractionated"
      { ...baseCase, currency: 'JPY', isFractionated: false, minimumFractionDigits: 0, result: '¥428,400' },
      { ...baseCase, currency: 'JPY', isFractionated: true, minimumFractionDigits: 0, result: '¥428,400' },
      // Without currency, the result should be only the decimal part
      { ...baseCase, currency: '', isFractionated: true, minimumFractionDigits: 0, result: '428,400' },
    ];

    describe.each(cases)('with', ({ amount, currency, locale, isFractionated, minimumFractionDigits, result }) => {
      describe(`amount: ${amount}, currency: ${currency}, locale: ${locale}, isFractionated: ${isFractionated} and minimumFractionDigits: ${minimumFractionDigits}`, () => {
        it('should return the formatted amount', () => {
          const f = Helper.formatMoneyAmount(amount, currency, { locale, isFractionated, minimumFractionDigits });
          expect(f).toBe(result);
        })
      });
    });
  });
})
