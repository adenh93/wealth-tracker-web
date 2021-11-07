import { Story } from '@storybook/react'
import { Typography } from '@mui/material'
import Modal from '../Modal'
import ConfirmModal, { ConfirmModalProps } from './ConfirmModal'

const config = {
  title: 'Components/UI/ConfirmModal',
  component: ConfirmModal,
}

const Template: Story<ConfirmModalProps> = (args) => (
  <Modal title="Confirm Modal" handleClose={() => {}}>
    <ConfirmModal {...args}>
      <Typography variant="body2" sx={{ mb: 4 }}>
        This is a confirmation modal
      </Typography>
    </ConfirmModal>
  </Modal>
)

export const Primary = Template.bind({})

Primary.args = {
  disabled: false,
  handleConfirm: () => {},
  handleClose: () => {},
}

export default config
