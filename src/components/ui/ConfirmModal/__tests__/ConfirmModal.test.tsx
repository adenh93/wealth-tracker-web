import { Simulate } from 'react-dom/test-utils'
import { render } from '../../../../utils/testUtils'
import ConfirmModal from '../ConfirmModal'

describe('ConfirmModal component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <ConfirmModal
        open={true}
        title="Test"
        handleConfirm={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('confirm button calls handleDelete when clicked', async () => {
    const mockHandleDelete = jest.fn()

    const { getByTestId } = render(
      <ConfirmModal
        open={true}
        title="Test"
        handleConfirm={mockHandleDelete}
        handleClose={jest.fn()}
      />
    )

    const confirmButton = getByTestId('confirm-button') as HTMLButtonElement
    Simulate.click(confirmButton)

    expect(mockHandleDelete).toHaveBeenCalled()
  })

  test('cancel button calls handleClose when clicked', () => {
    const mockHandleClose = jest.fn()

    const { getByTestId } = render(
      <ConfirmModal
        open={true}
        title="Test"
        handleConfirm={jest.fn()}
        handleClose={mockHandleClose}
      />
    )

    const cancelButton = getByTestId('cancel-button')
    Simulate.click(cancelButton)

    expect(mockHandleClose).toHaveBeenCalled()
  })

  test('confirm button is disabled if disabled prop is true', async () => {
    const mockHandleDelete = jest.fn()

    const { getByTestId } = render(
      <ConfirmModal
        open={true}
        title="Test"
        disabled={true}
        handleConfirm={mockHandleDelete}
        handleClose={jest.fn()}
      />
    )

    const confirmButton = getByTestId('confirm-button') as HTMLButtonElement

    expect(confirmButton.disabled).toBe(true)
  })
})
