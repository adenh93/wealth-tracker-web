import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  columnGap: '1.8rem',
})

export const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '0.2rem',
})
