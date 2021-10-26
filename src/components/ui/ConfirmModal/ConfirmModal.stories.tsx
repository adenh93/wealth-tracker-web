import ConfirmModal, { ConfirmModalProps } from './ConfirmModal'
import { Story } from '@storybook/react'
import { Typography } from '@mui/material'

const config = {
  title: 'Components/UI/ConfirmModal',
  component: ConfirmModal,
}

const Template: Story<ConfirmModalProps> = (args) => (
  <ConfirmModal {...args}>
    <Typography variant="body2" sx={{ mb: 4 }}>
      This is a confirmation modal
    </Typography>
  </ConfirmModal>
)

export const Primary = Template.bind({})

Primary.args = {
  open: true,
  title: 'Confirm Modal',
  disabled: false,
  handleConfirm: () => {},
  handleClose: () => {},
}

export default config
