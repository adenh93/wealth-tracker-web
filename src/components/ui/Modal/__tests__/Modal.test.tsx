import { Typography } from '@mui/material'
import { Simulate } from 'react-dom/test-utils'
import { render } from '../../../../utils/testUtils'
import Modal from '../Modal'

describe('Modal component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <Modal title="Test Modal" handleClose={jest.fn()} />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('renders title', () => {
    const { getByText } = render(
      <Modal title="Test Modal" handleClose={jest.fn()} />
    )

    expect(getByText('Test Modal')).not.toBeNull()
  })

  test('renders children', () => {
    const { getByText } = render(
      <Modal title="Test Modal" handleClose={jest.fn()}>
        <Typography>Test Modal Children</Typography>
      </Modal>
    )

    expect(getByText('Test Modal Children')).not.toBeNull()
  })

  test('close icon button calls handleClose', () => {
    const mockHandleClose = jest.fn()

    const { getByTestId } = render(
      <Modal title="Test Modal" handleClose={mockHandleClose} />
    )

    const closeButton = getByTestId('close-button')
    Simulate.click(closeButton)

    expect(mockHandleClose).toHaveBeenCalled()
  })
})
