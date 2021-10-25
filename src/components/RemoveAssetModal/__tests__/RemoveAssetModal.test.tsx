import { Simulate } from 'react-dom/test-utils'
import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Asset } from '../../../types'
import { render } from '../../../utils/testUtils'
import RemoveAssetModal from '../RemoveAssetModal'

describe('RemoveAssetModal component tests', () => {
  const mockAsset: Asset = {
    id: 'test-id',
    logoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/BitConnect.png',
    name: 'Bitconnect',
    ticker: 'BCC',
    price: 0.003021,
    gain24Hr: -0.9984,
    holdings: 2450000.15,
  }

  test('matches snapshot', () => {
    const { asFragment } = render(
      <RemoveAssetModal
        asset={mockAsset}
        open={true}
        handleDelete={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('renders asset details correctly', () => {
    const { getByText } = render(
      <RemoveAssetModal
        asset={mockAsset}
        open={true}
        handleDelete={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(getByText('Bitconnect (BCC)')).not.toBeNull()
  })

  test('confirm button is disabled if input value is not "delete"', () => {
    const { getByTestId } = render(
      <RemoveAssetModal
        asset={mockAsset}
        open={true}
        handleDelete={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    const input = getByTestId('delete-input')

    userEvent.type(input, 'not-delete')

    const confirmButton = getByTestId('confirm-button') as HTMLButtonElement

    expect(confirmButton.disabled).toBe(true)
  })

  test('confirm button is enabled if input value equals "delete"', async () => {
    const { getByTestId } = render(
      <RemoveAssetModal
        asset={mockAsset}
        open={true}
        handleDelete={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    const input = getByTestId('delete-input')

    userEvent.type(input, 'delete')

    const confirmButton = getByTestId('confirm-button') as HTMLButtonElement

    await waitFor(() => expect(confirmButton.disabled).toBe(false))
  })

  test('confirm button calls handleDelete when clicked', async () => {
    const mockHandleDelete = jest.fn()

    const { getByTestId } = render(
      <RemoveAssetModal
        asset={mockAsset}
        open={true}
        handleDelete={mockHandleDelete}
        handleClose={jest.fn()}
      />
    )

    const input = getByTestId('delete-input')

    userEvent.type(input, 'delete')

    const confirmButton = getByTestId('confirm-button') as HTMLButtonElement

    Simulate.click(confirmButton)

    expect(mockHandleDelete).toHaveBeenCalled()
  })

  test('cancel button calls handleClose when clicked', () => {
    const mockHandleClose = jest.fn()

    const { getByTestId } = render(
      <RemoveAssetModal
        asset={mockAsset}
        open={true}
        handleDelete={jest.fn()}
        handleClose={mockHandleClose}
      />
    )

    const cancelButton = getByTestId('cancel-button')
    Simulate.click(cancelButton)

    expect(mockHandleClose).toHaveBeenCalled()
  })
})
