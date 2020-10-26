import Helper from '@/helpers/index';

describe('formatMoneyAmount', () => {
  const amount = 428400;
  const currency = 'CAD';
  const locale = 'fr-CA';

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

  cases.forEach((c, idx) => {
    it(`should return the formatted amount for case ${idx + 1}`, () => {
      const f = Helper.formatMoneyAmount(c.amount, c.currency, { ...c });
      expect(f).toBe(c.result);
    })
  })
})
