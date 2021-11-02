import { Story } from '@storybook/react'
import CryptoCurrencyAutocomplete, {
  CryptoCurrencyAutocompleteProps,
} from './CryptoCurrencyAutocomplete'
import { CryptoCurrency } from '../../../graphql/types'

const config = {
  title: 'Components/UI/AssetAutocomplete',
  component: CryptoCurrencyAutocomplete,
}

const Template: Story<CryptoCurrencyAutocompleteProps> = (args) => (
  <CryptoCurrencyAutocomplete {...args} />
)

export const Primary = Template.bind({})

const options: CryptoCurrency[] = [
  {
    id: '1',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
  },
  {
    id: '1027',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  {
    id: '1839',
    rank: 3,
    name: 'Binance Coin',
    symbol: 'BNB',
  },
]

Primary.args = {
  options,
  onChange: () => {},
  onFilter: () => {},
}

export default config
