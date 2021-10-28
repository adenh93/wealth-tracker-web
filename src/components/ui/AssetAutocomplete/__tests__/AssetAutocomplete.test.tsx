import { Asset } from '../../../../types'
import { render } from '../../../../utils/testUtils'
import AssetAutocomplete from '../AssetAutocomplete'

describe('AssetAutocomplete component tests', () => {
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
      <AssetAutocomplete options={mockOptions} onChange={jest.fn()} />
    )

    expect(asFragment).toMatchSnapshot()
  })
})
