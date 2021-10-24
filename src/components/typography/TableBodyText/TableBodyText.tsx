import { Typography } from '@mui/material'
import { FC } from 'react'

const TableBodyText: FC = ({ children }) => (
  <Typography variant="tableCell1" component="p">
    {children}
  </Typography>
)

export default TableBodyText
