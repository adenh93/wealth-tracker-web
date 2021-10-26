import { Asset } from '../../../types'
import { render } from '../../../utils/testUtils'
import EditAssetModal from '../EditAssetModal'

describe('EditAssetModal component tests', () => {
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
      <EditAssetModal
        asset={mockAsset}
        open={true}
        handleSave={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('renders asset name correctly', () => {
    const { getByText } = render(
      <EditAssetModal
        asset={mockAsset}
        open={true}
        handleSave={jest.fn()}
        handleClose={jest.fn()}
      />
    )

    expect(getByText('Editing holdings for Bitconnect (BCC):')).not.toBeNull()
  })
})
