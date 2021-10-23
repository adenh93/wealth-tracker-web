const defaultOpts: Intl.NumberFormatOptions = {
  maximumFractionDigits: 2,
  notation: 'standard',
  signDisplay: 'never',
}

export const formatNumber = (
  value: number,
  opts: Intl.NumberFormatOptions = defaultOpts
): string =>
  new Intl.NumberFormat('en-US', {
    ...opts,
  }).format(value)

export const formatCurrency = (
  value: number,
  opts: Intl.NumberFormatOptions = defaultOpts
): string =>
  formatNumber(value, { ...opts, style: 'currency', currency: 'AUD' })

export const formatPercent = (
  value: number,
  opts: Intl.NumberFormatOptions = defaultOpts
): string => formatNumber(value, { ...opts, style: 'percent' })
