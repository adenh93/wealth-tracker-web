import { ThemeProvider } from '@mui/material'
import theme from '../../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">Test</div>
    </ThemeProvider>
  )
}

export default App
