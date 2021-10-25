import { Story } from '@storybook/react'
import { Typography } from '@mui/material'
import Modal, { ModalProps } from './Modal'

const config = {
  title: 'Components/UI/Modal',
  component: Modal,
}

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <Typography variant="body2">This is a modal component</Typography>
  </Modal>
)

export const Primary = Template.bind({})

Primary.args = {
  open: true,
  title: 'Modal Component',
  handleClose: () => {},
}

export default config
