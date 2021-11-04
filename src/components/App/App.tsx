import { ApolloProvider } from '@apollo/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import CryptoPortfolioContainer from '../../containers/CryptoPortfolioContainer'
import client from '../../apolloClient'
import theme from '../../theme'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        <CryptoPortfolioContainer />
      </EmotionThemeProvider>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
