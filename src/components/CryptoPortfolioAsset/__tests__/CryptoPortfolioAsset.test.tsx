import { render } from '../../../utils/testUtils'
import CryptoPortfolioAsset from '..'
import { CryptoCurrencyHolding } from '../../../graphql/types'

describe('CryptoPortfolioAsset Tests', () => {
  const mockAsset: CryptoCurrencyHolding = {
    cryptoCurrency: {
      id: 1,
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
    },
    id: 2,
    cryptoCurrencyId: 1,
    holdings: 15.25,
    price: 80532.5,
    percentChange24h: 1.54,
    netHoldingsValue: 1228120.625,
  }

  test('matches snapshot', () => {
    const { asFragment } = render(<CryptoPortfolioAsset asset={mockAsset} />)

    expect(asFragment).toMatchSnapshot()
  })

  test('renders properly', () => {
    const { getByText } = render(<CryptoPortfolioAsset asset={mockAsset} />)

    expect(getByText('Bitcoin')).not.toBeNull()
    expect(getByText('BTC')).not.toBeNull()
    expect(getByText('A$80,532.50')).not.toBeNull()
    expect(getByText('+ 1.54%')).not.toBeNull()
    expect(getByText('A$1,228,120.63')).not.toBeNull()
    expect(getByText('15.25')).not.toBeNull()
  })
})
