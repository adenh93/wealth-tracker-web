import { Story } from '@storybook/react'
import PortfolioAsset, {
  CryptoPortfolioAssetProps,
} from './CryptoPortfolioAsset'
import { CryptoCurrencyHolding } from '../../graphql/types'

const config = {
  title: 'Components/PortfolioAsset',
  component: PortfolioAsset,
}

const Template: Story<CryptoPortfolioAssetProps> = (args) => (
  <PortfolioAsset {...args} />
)

export const Primary = Template.bind({})

const asset: CryptoCurrencyHolding = {
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
}

Primary.args = {
  asset,
}

export default config
