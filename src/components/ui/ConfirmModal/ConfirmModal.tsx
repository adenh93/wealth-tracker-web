import { FC } from 'react'
import { Box, Button } from '@mui/material'
import { ButtonContainer } from './ConfirmModal.css'

export interface ConfirmModalProps {
  disabled?: boolean
  handleConfirm: (e: any) => void
  handleClose: (e: any) => void
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  disabled = false,
  handleConfirm,
  handleClose,
  children,
}) => (
  <>
    <Box sx={{ mb: 4 }}>{children}</Box>
    <ButtonContainer>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={handleConfirm}
        data-testid="confirm-button"
      >
        Confirm
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClose}
        data-testid="cancel-button"
      >
        Cancel
      </Button>
    </ButtonContainer>
  </>
)

export default ConfirmModal
