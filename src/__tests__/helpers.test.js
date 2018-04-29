import {
  summaryDonations,
  isNotEmpty,
  add,
  toSlug,
  getSymbolFromCurrency,
  displayPrice,
  groupBy,
  mapValues,
} from '../helpers'

describe('helpers', () => {
  test('`summaryDonations` should calculate donations correctly', () => {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10)
    expect(summaryDonations([1, undefined, null, 2, 3, 4])).toEqual(10)
  })

  test('`add` should calculate correctly', () => {
    expect(add(1, 2, 3, 4)).toEqual(10)
    expect(add(1, '2', 3, '4')).toEqual(10)
    expect(add(1, undefined, null, '2', 3, '4')).toEqual(10)
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

  test('`getSymbolFromCurrency` should return correct symbol', () => {
    expect(getSymbolFromCurrency('thb')).toBe('฿')
    expect(getSymbolFromCurrency('THB')).toBe('฿')
    expect(getSymbolFromCurrency('USD')).toBe('$')
    expect(getSymbolFromCurrency('JPY')).toBe('¥')
  })

  test('`displayPrice` should return correct format', () => {
    expect(displayPrice(1000000)).toBe('1,000,000')
    expect(displayPrice('1000000')).toBe('1,000,000')
  })

  test('`groupBy` should return correct value', () => {
    const TEST_DATA = [
      {
        charitiesId: 2,
        amount: 10,
        currency: 'THB',
        id: 1,
      },
      {
        charitiesId: 1,
        amount: 20,
        currency: 'THB',
        id: 2,
      },
      {
        charitiesId: 3,
        amount: 50,
        currency: 'JPY',
        id: 3,
      },
      {
        id: 7,
      },
    ]
    const EXPECTED_DATA = {
      THB: [
        {
          charitiesId: 2,
          amount: 10,
          currency: 'THB',
          id: 1,
        },
        {
          charitiesId: 1,
          amount: 20,
          currency: 'THB',
          id: 2,
        },
      ],
      JPY: [
        {
          charitiesId: 3,
          amount: 50,
          currency: 'JPY',
          id: 3,
        },
      ],
    }
    expect(groupBy(TEST_DATA, 'currency')).toEqual(EXPECTED_DATA)
  })

  test('`mapValues` should return correct value', () => {
    const TEST_DATA = {
      foo: 1,
      bar: 2,
      baz: 3,
    }
    const EXPECTED_DATA = {
      foo: 2,
      bar: 4,
      baz: 6,
    }
    expect(mapValues(TEST_DATA, x => x * 2)).toEqual(EXPECTED_DATA)
  })
})
