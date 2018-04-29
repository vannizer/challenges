import { commonCurrency } from './constant'

export const isNotEmpty = x => !(x == null)

export const add = (...args) =>
  args.filter(isNotEmpty).reduce((acc, curr) => Number(acc) + Number(curr))

export const summaryDonations = donations =>
  donations.filter(isNotEmpty).reduce((acc, curr) => add(acc, curr))

export const toSlug = str =>
  str
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-')
    .replace(/--+/g, '-') // replace multiple hyphen to one

export const getSymbolFromCurrency = currency =>
  currency &&
  commonCurrency[currency.toUpperCase()] &&
  commonCurrency[currency.toUpperCase()].symbol

export const displayPrice = num => Number(num).toLocaleString()

export const groupBy = (list, fieldname) => {
  return list.filter(x => Boolean(x[fieldname])).reduce((result, obj) => {
    const key = obj[fieldname]
    const previousVal = result[key] || []
    return {
      ...result,
      [key]: [...previousVal, obj],
    }
  }, {})
}

export const mapValues = (obj, fn) =>
  Object.entries(obj).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: fn(value),
    }),
    {},
  )
