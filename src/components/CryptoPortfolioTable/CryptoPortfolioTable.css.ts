import { styled } from '@mui/material/styles'
import { TableHead } from '@mui/material'

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))
