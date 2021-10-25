import PortfolioTable from '..'
import { Asset } from '../../../types'
import { render } from '../../../utils/testUtils'

describe('PortfolioTable component tests', () => {
  const mockAssets: Asset[] = [
    {
      id: 'test-id-1',
      logoSrc: 'https://localhost:3000/test.png',
      name: 'Apple Inc.',
      ticker: 'AAPL',
      price: 148.98,
      gain24Hr: 0.012,
      holdings: 1350,
    },
    {
      id: 'test-id-2',
      logoSrc: 'https://localhost:3000/test.png',
      name: 'Bitconnect',
      ticker: 'BCC',
      price: 0.003021,
      gain24Hr: -0.9984,
      holdings: 2450000.15,
    },
  ]

  test('matches snapshot', () => {
    const { asFragment } = render(<PortfolioTable assets={mockAssets} />)

    expect(asFragment).toMatchSnapshot()
  })

  test('it renders correctly', () => {
    const { container, getByText } = render(
      <PortfolioTable assets={mockAssets} />
    )

    const rows = container.querySelectorAll('tbody tr')

    expect(rows).toHaveLength(2)
    expect(getByText('Apple Inc.')).not.toBeNull()
    expect(getByText('Bitconnect')).not.toBeNull()
  })
})
