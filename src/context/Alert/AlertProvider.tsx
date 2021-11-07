import { Alert, Snackbar, AlertColor } from '@mui/material'
import { Component } from 'react'
import AlertContext, { AlertContextProps } from './AlertContext'

class AlertProvider extends Component<{}, AlertContextProps> {
  showAlert = (
    content: string,
    severity: AlertColor = 'success',
    duration: number = 6000
  ) => {
    this.setState({
      content,
      severity,
      duration,
    })
  }

  closeAlert = () => {
    this.setState({
      content: '',
      severity: undefined,
      duration: undefined,
    })
  }

  state = {
    content: '',
    severity: undefined,
    duration: undefined,
    showAlert: this.showAlert,
    closeAlert: this.closeAlert,
  }

  render() {
    const { content, severity, duration, closeAlert } = this.state

    return (
      <AlertContext.Provider value={this.state}>
        {this.props.children}
        {content && (
          <Snackbar
            open={true}
            autoHideDuration={duration}
            onClose={closeAlert}
          >
            <Alert severity={severity}>{content}</Alert>
          </Snackbar>
        )}
      </AlertContext.Provider>
    )
  }
}

export default AlertProvider
