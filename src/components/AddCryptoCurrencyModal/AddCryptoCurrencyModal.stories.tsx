import { Story } from '@storybook/react'
import Modal from '../ui/Modal'
import AddCryptoCurrencyModal, {
  AddCryptoCurrencyModalProps,
} from './AddCryptoCurrencyModal'
import { CryptoCurrency } from '../../graphql/types'

const config = {
  title: 'Components/AddAssetModal',
  component: AddCryptoCurrencyModal,
}

const Template: Story<AddCryptoCurrencyModalProps> = (args) => (
  <Modal title="Add Asset" handleClose={() => {}}>
    <AddCryptoCurrencyModal {...args} />
  </Modal>
)

export const Primary = Template.bind({})

const options: CryptoCurrency[] = [
  {
    id: 1,
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
  },
  {
    id: 1027,
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  {
    id: 1839,
    rank: 3,
    name: 'Binance Coin',
    symbol: 'BNB',
  },
]

Primary.args = {
  options,
  errors: {},
  setValue: () => {},
  handleSubmit: () => {},
  handleClose: () => {},
  handleFilter: () => {},
}

export default config
