import { ApolloProvider } from '@apollo/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import AddCryptoCurrencyContainer from '../../containers/AddCryptoCurrencyContainer'
import client from '../../apolloClient'
import theme from '../../theme'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        <AddCryptoCurrencyContainer />
      </EmotionThemeProvider>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
