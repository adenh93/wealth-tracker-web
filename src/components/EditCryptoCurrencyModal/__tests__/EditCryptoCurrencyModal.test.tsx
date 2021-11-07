import { CryptoCurrencyHolding } from '../../../graphql/types'
import { render } from '../../../utils/testUtils'
import EditCryptoCurrencyModal from '../EditCryptoCurrencyModal'

describe('EditCryptoCurrencyModal component tests', () => {
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
    const { asFragment } = render(
      <EditCryptoCurrencyModal
        asset={mockAsset}
        open={true}
        errors={{}}
        submitting={false}
        register={jest.fn()}
        handleSubmit={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('renders asset name correctly', () => {
    const { getByText } = render(
      <EditCryptoCurrencyModal
        asset={mockAsset}
        open={true}
        errors={{}}
        submitting={false}
        register={jest.fn()}
        handleSubmit={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(getByText('Editing holdings for Bitcoin (BTC):')).not.toBeNull()
  })
})
