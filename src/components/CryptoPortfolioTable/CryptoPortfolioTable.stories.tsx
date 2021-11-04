import { Story } from '@storybook/react'
import { CryptoCurrencyHolding } from '../../graphql/types'
import PortfolioTable, {
  CryptoPortfolioTableProps,
} from './CryptoPortfolioTable'

const config = {
  title: 'Components/PortfolioTable',
  component: PortfolioTable,
}

const Template: Story<CryptoPortfolioTableProps> = (args) => (
  <PortfolioTable {...args} />
)

export const Primary = Template.bind({})

const assets: CryptoCurrencyHolding[] = [
  {
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
  },
  {
    cryptoCurrency: {
      id: 1027,
      rank: 2,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    id: 2,
    cryptoCurrencyId: 1027,
    holdings: 30,
    price: 4302.25,
    percentChange24h: 4.32,
    netHoldingsValue: 129067.5,
  },
  {
    cryptoCurrency: {
      id: 1839,
      rank: 3,
      name: 'Binance Coin',
      symbol: 'BNB',
    },
    id: 3,
    cryptoCurrencyId: 1839,
    holdings: 45,
    price: 678.11,
    percentChange24h: 2.76,
    netHoldingsValue: 30514.95,
  },
]

Primary.args = {
  assets,
}

export default config
