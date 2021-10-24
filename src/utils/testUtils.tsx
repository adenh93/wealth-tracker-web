import { ReactElement } from 'react'
import { ThemeProvider } from '@mui/material'
import { render as tlRender, RenderResult } from '@testing-library/react'
import theme from '../theme'

export const render = (component: ReactElement): RenderResult =>
  tlRender(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
