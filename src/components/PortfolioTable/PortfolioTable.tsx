import { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material'
import { OwnedAsset } from '../../types'
import PortfolioAsset from '../PortfolioAsset'
import TableHeadText from '../typography/TableHeadText'
import { StyledTableHead } from './PortfolioTable.css'

export interface PortfolioTableProps {
  assets: OwnedAsset[]
}

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
        {assets.map((asset: OwnedAsset) => (
          <PortfolioAsset key={asset.id} asset={asset} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default PortfolioTable
