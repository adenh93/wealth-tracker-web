import { Story } from '@storybook/react'
import AssetAutocomplete, { AssetAutocompleteProps } from './AssetAutocomplete'
import { Asset } from '../../../types'

const config = {
  title: 'Components/UI/AssetAutocomplete',
  component: AssetAutocomplete,
}

const Template: Story<AssetAutocompleteProps> = (args) => (
  <AssetAutocomplete {...args} />
)

export const Primary = Template.bind({})

const options: Asset[] = [
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
  {
    id: 'test-id-3',
    logoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png',
    name: 'Tesla',
    ticker: 'TSLA',
  },
  {
    id: 'test-id-4',
    logoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png',
    name: 'Bitcoin',
    ticker: 'BTC',
  },
  {
    id: 'test-id-4',
    logoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png',
    name: 'Microsoft',
    ticker: 'MSFT',
  },
]

Primary.args = {
  options,
  onChange: () => {},
}

export default config
