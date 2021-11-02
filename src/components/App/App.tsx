import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import client from '../../apolloClient'
import theme from '../../theme'

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className="App">Test</div>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
