import { ApolloProvider } from '@apollo/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import CryptoCurrencyTableContainer from '../../containers/CryptoPortfolioContainer'
import { ModalProvider } from '../../context/Modal'
import client from '../../apolloClient'
import theme from '../../theme'
import { AlertProvider } from '../../context/Alert'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        <AlertProvider>
          <ModalProvider>
            <CryptoCurrencyTableContainer />
          </ModalProvider>
        </AlertProvider>
      </EmotionThemeProvider>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
