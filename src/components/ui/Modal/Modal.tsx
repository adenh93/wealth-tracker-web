import { FC } from 'react'
import { IconButton, Modal as MuiModal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ModalBody } from './Modal.css'

export interface ModalProps {
  title: string
  handleClose: (e: any) => void
}

const Modal: FC<ModalProps> = ({ title, children, handleClose }) => (
  <MuiModal
    open={true}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
  >
    <ModalBody p={4}>
      <IconButton
        onClick={handleClose}
        sx={{ float: 'right' }}
        data-testid="close-button"
      >
        <CloseIcon />
      </IconButton>
      <Typography id="modal-modal-title" variant="body1" sx={{ pb: 2 }}>
        {title}
      </Typography>
      {children}
    </ModalBody>
  </MuiModal>
)

export default Modal
