import { CryptoCurrency } from '../../../../graphql/types'
import { render } from '../../../../utils/testUtils'
import AssetAutocomplete from '../CryptoCurrencyAutocomplete'

describe('CryptoCurrencyAutocomplete component tests', () => {
  const mockOptions: CryptoCurrency[] = [
    {
      id: '1',
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
    },
    {
      id: '1027',
      rank: 2,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    {
      id: '1839',
      rank: 3,
      name: 'Binance Coin',
      symbol: 'BNB',
    },
  ]

  test('matches snapshot', () => {
    const { asFragment } = render(
      <AssetAutocomplete
        options={mockOptions}
        onChange={jest.fn()}
        onFilter={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })
})
