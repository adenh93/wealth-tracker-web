import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const ModalBody = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.5rem',
  width: 600,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 0.2rem 0.2rem rgba(0, 0, 0, 0.25)',
  outline: 0,
}))
