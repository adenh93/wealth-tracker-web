import { createContext } from 'react'
import { AlertColor } from '@mui/material'

export interface AlertContextProps {
  content: string
  severity?: AlertColor
  duration?: number
  showAlert: (text: string, severity?: AlertColor, duration?: number) => void
  closeAlert: () => void
}

const AlertContext = createContext<AlertContextProps>({
  content: '',
  severity: undefined,
  duration: undefined,
  showAlert: () => {},
  closeAlert: () => {},
})

export default AlertContext
