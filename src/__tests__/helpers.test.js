import { summaryDonations, isNotEmpty, add, toSlug } from '../helpers'

describe('helpers', () => {
  test('`summaryDonations` should calculate donations correctly', () => {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10)
  })

  test('`add` should calculate correctly', () => {
    expect(add(1, 2, 3, 4)).toEqual(10)
    expect(add(1, '2', 3, '4')).toEqual(10)
  })

  test('`isNotEmpty` should return true only `undefined` or `null`', () => {
    expect(isNotEmpty({})).toBe(true)
    expect(isNotEmpty(null)).toBe(false)
    expect(isNotEmpty(undefined)).toBe(false)
    expect(isNotEmpty(0)).toBe(true)
    expect(isNotEmpty('')).toBe(true)
  })

  test('`toSlug` should handle it well', () => {
    expect(toSlug('I am Batman')).toBe('i-am-batman')
    expect(toSlug('   I    am    Batman   ')).toBe('i-am-batman')
    expect(toSlug('I-AM-BATMAN')).toBe('i-am-batman')
    expect(toSlug('I- -AM- -BATMAN')).toBe('i-am-batman')
  })
})
