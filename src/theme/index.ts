import { createTheme } from '@mui/material'
import typography from './typography'
import palette from './palette'

const theme = {
  typography,
  palette,
} as const

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key]
}

declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    tableHeader: React.CSSProperties
    tableCell1: React.CSSProperties
    tableCell2: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    tableHeader: true
    tableCell1: true
    tableCell2: true
  }
}

export default createTheme(theme)
