import { Typography } from '@mui/material'
import { FC } from 'react'

const TableBodySubText: FC = ({ children }) => (
  <Typography variant="tableCell2" component="p">
    {children}
  </Typography>
)

export default TableBodySubText
