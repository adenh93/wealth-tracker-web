import { render } from '../../../utils/testUtils'
import { Asset } from '../../../types'
import PortfolioAsset from '..'

describe('Portfolio Asset Tests', () => {
  const mockAsset: Asset = {
    logoSrc: 'https://localhost:3000/image.png',
    name: 'Apple Inc.',
    ticker: 'AAPL',
    price: 134.59,
    gain24Hr: 0.014,
    holdings: 42000,
  }

  test('matches snapshot', () => {
    const { asFragment } = render(<PortfolioAsset asset={mockAsset} />)

    expect(asFragment).toMatchSnapshot()
  })

  test('renders properly', () => {
    const { getByText } = render(<PortfolioAsset asset={mockAsset} />)

    expect(getByText('Apple Inc.')).not.toBeNull()
    expect(getByText('AAPL')).not.toBeNull()
    expect(getByText('A$134.59')).not.toBeNull()
    expect(getByText('+ 1.4%')).not.toBeNull()
    expect(getByText('A$5,652,780.00')).not.toBeNull()
    expect(getByText('42,000')).not.toBeNull()
  })
})
