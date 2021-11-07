import { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material'
import CryptoPortfolioAsset from '../CryptoPortfolioAsset'
import TableHeadText from '../typography/TableHeadText'
import { StyledTableHead } from './CryptoPortfolioTable.css'
import { CryptoCurrencyHolding } from '../../graphql/types'

export interface CryptoPortfolioTableProps {
  assets: CryptoCurrencyHolding[]
  loading: boolean
  onEdit: (asset: CryptoCurrencyHolding) => void
  onRemove: (asset: CryptoCurrencyHolding) => void
}

const CryptoPortfolioTable: FC<CryptoPortfolioTableProps> = ({
  assets,
  loading,
  onEdit,
  onRemove,
}) => (
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
        {assets.map((asset: CryptoCurrencyHolding) => (
          <CryptoPortfolioAsset
            key={asset.id}
            asset={asset}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default CryptoPortfolioTable
