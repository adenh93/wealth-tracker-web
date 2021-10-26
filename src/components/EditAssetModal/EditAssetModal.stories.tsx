import { Story } from '@storybook/react'
import EditAssetModal, { EditAssetModalProps } from './EditAssetModal'
import { Asset } from '../../types'

const config = {
  title: 'Components/EditAssetModal',
  component: EditAssetModal,
}

const Template: Story<EditAssetModalProps> = (args) => (
  <EditAssetModal {...args} />
)

export const Primary = Template.bind({})

const asset: Asset = {
  id: 'test-id',
  logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BitConnect.png',
  name: 'Bitconnect',
  ticker: 'BCC',
  price: 0.003021,
  gain24Hr: -0.9984,
  holdings: 2450000.15,
}

Primary.args = {
  asset,
  open: true,
  handleSave: () => {},
  handleClose: () => {},
}

export default config
