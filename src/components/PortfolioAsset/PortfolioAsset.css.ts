import { styled } from '@mui/material/styles'
import { TableRow } from '@mui/material'
import { Box } from '@mui/system'

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}))

export const AssetInfoWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '1rem',
}))
