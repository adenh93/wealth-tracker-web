import { waitFor } from '@testing-library/react'
import { CryptoCurrencyHolding } from '../../../graphql/types'
import { render } from '../../../utils/testUtils'
import RemoveCryptoCurrencyModal from '../RemoveCryptoCurrencyModal'

describe('RemoveCryptoCurrencyModal component tests', () => {
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
      <RemoveCryptoCurrencyModal
        asset={mockAsset}
        submitting={false}
        inputState=""
        handleInputChange={jest.fn()}
        handleConfirm={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('renders asset details correctly', () => {
    const { getByText } = render(
      <RemoveCryptoCurrencyModal
        asset={mockAsset}
        submitting={false}
        inputState=""
        handleInputChange={jest.fn()}
        handleConfirm={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(getByText('Bitcoin (BTC)')).not.toBeNull()
  })

  test('confirm button is disabled if input value is not "delete"', () => {
    const { getByTestId } = render(
      <RemoveCryptoCurrencyModal
        asset={mockAsset}
        submitting={false}
        inputState=""
        handleInputChange={jest.fn()}
        handleConfirm={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    const confirmButton = getByTestId('confirm-button') as HTMLButtonElement

    expect(confirmButton.disabled).toBe(true)
  })

  test('confirm button is enabled if input value equals "delete"', async () => {
    const { getByTestId } = render(
      <RemoveCryptoCurrencyModal
        asset={mockAsset}
        submitting={false}
        inputState="delete"
        handleInputChange={jest.fn()}
        handleConfirm={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    const confirmButton = getByTestId('confirm-button') as HTMLButtonElement

    await waitFor(() => expect(confirmButton.disabled).toBe(false))
  })
})
