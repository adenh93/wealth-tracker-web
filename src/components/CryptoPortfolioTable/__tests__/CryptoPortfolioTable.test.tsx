import CryptoPortfolioTable from '..'
import { CryptoCurrencyHolding } from '../../../graphql/types'
import { render } from '../../../utils/testUtils'

describe('CryptoPortfolioTable component tests', () => {
  const mockAssets: CryptoCurrencyHolding[] = [
    {
      cryptoCurrency: {
        id: 1,
        rank: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
      },
      id: 1,
      cryptoCurrencyId: 1,
      holdings: 15.25,
      price: 80532.5,
      percentChange24h: 1.54,
      netHoldingsValue: 1228120.625,
    },
    {
      cryptoCurrency: {
        id: 1027,
        rank: 2,
        name: 'Ethereum',
        symbol: 'ETH',
      },
      id: 2,
      cryptoCurrencyId: 1027,
      holdings: 30,
      price: 4302.25,
      percentChange24h: 4.32,
      netHoldingsValue: 129067.5,
    },
  ]

  test('matches snapshot', () => {
    const { asFragment } = render(
      <CryptoPortfolioTable assets={mockAssets} loading={false} />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('it renders correctly', () => {
    const { container, getByText } = render(
      <CryptoPortfolioTable assets={mockAssets} loading={false} />
    )

    const rows = container.querySelectorAll('tbody tr')

    expect(rows).toHaveLength(2)
    expect(getByText('Bitcoin')).not.toBeNull()
    expect(getByText('Ethereum')).not.toBeNull()
  })
})
