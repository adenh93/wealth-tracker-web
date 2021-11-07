import { Story } from '@storybook/react'
import Modal from '../ui/Modal'
import EditCryptoCurrencyModal, {
  EditCryptoCurrencyModalProps,
} from './EditCryptoCurrencyModal'
import { CryptoCurrencyHolding } from '../../graphql/types'

const config = {
  title: 'Components/EditCryptoCurrencyModal',
  component: EditCryptoCurrencyModal,
}

const Template: Story<EditCryptoCurrencyModalProps> = (args) => (
  <Modal title="Edit Asset" handleClose={() => {}}>
    <EditCryptoCurrencyModal {...args} />
  </Modal>
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
  errors: {},
  handleSubmit: () => {},
  handleClose: () => {},
}

export default config
