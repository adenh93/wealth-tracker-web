import { CryptoCurrency } from '../../../graphql/types'
import { render } from '../../../utils/testUtils'
import AddCryptoCurrencyModal from '../AddCryptoCurrencyModal'

describe('AddCryptoCurrencyModal component tests', () => {
  const mockOptions: CryptoCurrency[] = [
    {
      id: 1,
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
    },
    {
      id: 1027,
      rank: 2,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    {
      id: 1839,
      rank: 3,
      name: 'Binance Coin',
      symbol: 'BNB',
    },
  ]

  test('matches snapshot', () => {
    const { asFragment } = render(
      <AddCryptoCurrencyModal
        options={mockOptions}
        open={true}
        handleSave={jest.fn()}
        handleClose={jest.fn()}
        handleFilter={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })
})
