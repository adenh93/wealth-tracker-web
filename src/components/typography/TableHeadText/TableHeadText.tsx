import { Typography } from '@mui/material'
import { FC } from 'react'

const TableHeadText: FC = ({ children }) => (
  <Typography variant="tableHeader" component="p">
    {children}
  </Typography>
)

export default TableHeadText
