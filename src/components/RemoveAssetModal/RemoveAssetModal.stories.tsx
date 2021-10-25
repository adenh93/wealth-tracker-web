import { Story } from '@storybook/react'
import { Box } from '@mui/material'
import { Asset } from '../../types'
import RemoveAssetModal, { RemoveAssetModalProps } from './RemoveAssetModal'

const config = {
  title: 'Components/RemoveAssetModal',
  component: RemoveAssetModal,
}

const Template: Story<RemoveAssetModalProps> = (args) => (
  <Box>
    <RemoveAssetModal {...args} />
  </Box>
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
  handleDelete: () => {},
  handleClose: () => {},
}

export default config
