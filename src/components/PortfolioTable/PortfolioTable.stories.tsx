import { Story } from '@storybook/react'
import { Asset } from '../../types'
import PortfolioTable, { PortfolioTableProps } from './PortfolioTable'

const config = {
  title: 'Components/PortfolioTable',
  component: PortfolioTable,
}

const Template: Story<PortfolioTableProps> = (args) => (
  <PortfolioTable {...args} />
)

export const Primary = Template.bind({})

const assets: Asset[] = [
  {
    logoSrc: 'http://simpleicon.com/wp-content/uploads/apple.png',
    name: 'Apple Inc.',
    ticker: 'AAPL',
    price: 148.98,
    gain24Hr: 0.012,
    holdings: 1350,
  },
  {
    logoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/BitConnect.png',
    name: 'Bitconnect',
    ticker: 'BCC',
    price: 0.003021,
    gain24Hr: -0.9984,
    holdings: 2450000.15,
  },
]

Primary.args = {
  assets,
}

export default config
