import PortfolioAsset, { PortfolioAssetProps } from './PortfolioAsset'
import { Story } from '@storybook/react'
import { Asset } from '../../types'

const config = {
  title: 'Components/PortfolioAsset',
  component: PortfolioAsset,
}

const Template: Story<PortfolioAssetProps> = (args) => (
  <PortfolioAsset {...args} />
)

export const Primary = Template.bind({})

const asset: Asset = {
  logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BitConnect.png',
  name: 'Bitconnect',
  ticker: 'BCC',
  price: 0.003021,
  gain24Hr: -0.9984,
  holdings: 2450000.15,
}

Primary.args = {
  asset,
}

export default config
