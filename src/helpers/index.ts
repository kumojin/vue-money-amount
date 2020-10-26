import { getUserLocale } from 'get-user-locale'
import { utils as currencyUtils } from 'iso4217'

/**
 * Formats the given money "amount" with "currency" according to the
 * locale of the user.
 *
 * Amounts can come as fractionated ("isFractionated" to TRUE), which
 * means they do not include the fraction (ex: USD$4200 is in fact
 * USD$42.00 because the USD currency allows for 2 decimal places)
 *
 * Then we use the standard Intl.NumberFormat to format the unit
 * to the currency using the user's locale.
 *
 * @param {*} amount the money amount
 * @param {*} currency the currency of the amount
 * @param {*} locale the locale of the user, defaults to #getUserLocale
 * @param {*} isFractionated whether the amount comes without decimals, and
 * the decimal point must be determined according to the currency. Defaults to false
 * @param {*} minimumFractionDigits how many fraction digits to show (see `Intl.NumberFormat` options)
 */
export const formatMoneyAmount = (
  amount,
  currency,
  {
    locale = getUserLocale(),
    isFractionated = false,
    minimumFractionDigits = 0
  } = {}
) => {
  if (!currency) {
    return ''
  }

  const precision = isFractionated ? currencyUtils.getByCode(currency)?.Fraction || 0 : 0

  return Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    minimumFractionDigits // So we don't show .00 if the amount has no decimals
  }).format(amount / Math.pow(10, precision))
}
