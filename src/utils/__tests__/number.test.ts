import { formatCurrency, formatNumber, formatPercent } from '../number'

describe('formatNumber util', () => {
  test('it formats number properly', () => {
    const formatted = formatNumber(42000)

    expect(formatted).toEqual('42,000')
  })
})

describe('formatCurrency util', () => {
  test('it formats currency properly', () => {
    const formatted = formatCurrency(35400.52)

    expect(formatted).toEqual('A$35,400.52')
  })
})

describe('formatPercent util', () => {
  test('it formats percent properly', () => {
    const formatted = formatPercent(0.058)

    expect(formatted).toEqual('5.8%')
  })
})
