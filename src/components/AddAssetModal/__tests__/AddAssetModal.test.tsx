import { render } from '../../../utils/testUtils'
import AddAssetModal from '../AddAssetModal'

describe('AddAssetModal component tests', () => {
  const mockOptions: Asset[] = [
    {
      id: 'test-id-1',
      logoSrc: 'http://simpleicon.com/wp-content/uploads/apple.png',
      name: 'Apple Inc.',
      ticker: 'AAPL',
    },
    {
      id: 'test-id-2',
      logoSrc:
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/BitConnect.png',
      name: 'Bitconnect',
      ticker: 'BCC',
    },
  ]

  test('matches snapshot', () => {
    const { asFragment } = render(
      <AddAssetModal
        options={mockOptions}
        open={true}
        handleSave={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })
})
