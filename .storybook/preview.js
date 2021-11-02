import { ApolloProvider } from '@apollo/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import client from '../src/apolloClient'
import theme from '../src/theme'

const withThemeProvider = (Story, context) => {
  return (
    <ApolloProvider client={client}>
      <EmotionThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story {...context} />
        </ThemeProvider>
      </EmotionThemeProvider>
    </ApolloProvider>
  )
}

export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
