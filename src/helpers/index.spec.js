import { formatMoneyAmount } from './'

describe('formatMoneyAmount', () => {
  const amount = 428400
  const currency = 'CAD'
  const locale = 'fr-CA'

  const baseCase = { amount, currency, locale }
  const cases = [
    { ...baseCase, isFractioned: false, minimumFractionDigits: 0, result: 'CA$428,400' },
    { ...baseCase, isFractioned: true, minimumFractionDigits: 0, result: 'CA$4,284' },
    { ...baseCase, isFractioned: false, minimumFractionDigits: 2, result: 'CA$428,400.00' },
    { ...baseCase, isFractioned: true, minimumFractionDigits: 2, result: 'CA$4,284.00' },
    // With a currency that has no fractions, the result should be the same
    // regardless of "isFractioned"
    { ...baseCase, currency: 'JPY', isFractioned: false, minimumFractionDigits: 0, result: '¥428,400' },
    { ...baseCase, currency: 'JPY', isFractioned: true, minimumFractionDigits: 0, result: '¥428,400' }
  ]

  cases.forEach((c, idx) => {
    it(`should return the formatted amount for case ${idx + 1}`, () => {
      const f = formatMoneyAmount(c.amount, c.currency, { ...c })
      expect(f).toBe(c.result)
    })
  })
})
