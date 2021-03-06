import { TypographyVariants } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'

const typography: Partial<TypographyVariants> = {
  fontFamily: '"Open Sans", sans-serif',
  h1: {
    colors: blueGrey[900],
    fontSize: 48,
  },
  h2: {
    colors: blueGrey[900],
    fontSize: 40,
  },
  h3: {
    colors: grey[700],
    fontSize: 32,
  },
  body1: {
    color: blueGrey[700],
    fontWeight: 500,
    fontSize: 24,
  },
  body2: {
    color: grey[600],
    fontSize: 20,
  },
  subtitle1: {
    color: blueGrey[700],
    fontSize: 18,
    lineHeight: 1.5,
  },
  subtitle2: {
    color: grey[600],
    fontSize: 18,
  },
  tableHeader: {
    color: 'white',
    fontSize: 16,
  },
  tableCell1: {
    color: blueGrey[700],
    fontSize: 16,
  },
  tableCell2: {
    color: grey[600],
    fontSize: 14,
    fontWeight: 'bold',
  },
}

export default typography
