import { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
} from '@mui/material'
import { Asset } from '../../types'
import PortfolioAsset from '../PortfolioAsset'
import { StyledTableHead } from './PortfolioTable.css'

export interface PortfolioTableProps {
  assets: Asset[]
}

const TableHeadText: FC = ({ children }) => (
  <Typography variant="tableHeader" component="p">
    {children}
  </Typography>
)

const PortfolioTable: FC<PortfolioTableProps> = ({ assets }) => (
  <TableContainer component={Paper}>
    <Table>
      <StyledTableHead>
        <TableRow>
          <TableCell align="left">
            <TableHeadText>Asset</TableHeadText>
          </TableCell>
          <TableCell align="left">
            <TableHeadText>Price</TableHeadText>
          </TableCell>
          <TableCell align="left">
            <TableHeadText>Holdings</TableHeadText>
          </TableCell>
          <TableCell />
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {assets.map((asset: Asset) => (
          <PortfolioAsset key={asset.ticker} asset={asset} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default PortfolioTable
