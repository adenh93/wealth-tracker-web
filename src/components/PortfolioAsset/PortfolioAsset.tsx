import { FC } from 'react'
import { Button, TableCell, Box } from '@mui/material'
import { OwnedAsset } from '../../types'
import { formatCurrency, formatNumber } from '../../utils/number'
import ProfitLossLabel from '../ProfitLossLabel'
import TableBodyText from '../typography/TableBodyText'
import TableBodySubText from '../typography/TableBodySubText'
import { StyledTableRow, AssetInfoWrapper } from './PortfolioAsset.css'

export interface PortfolioAssetProps {
  asset: OwnedAsset
}

const PortfolioAsset: FC<PortfolioAssetProps> = ({ asset }) => (
  <StyledTableRow>
    <TableCell align="left">
      <AssetInfoWrapper>
        <img
          width={30}
          height={30}
          src={asset.logoSrc}
          alt={`${asset.name} logo`}
        />
        <Box>
          <TableBodyText>{asset.name}</TableBodyText>
          <TableBodySubText>{asset.ticker}</TableBodySubText>
        </Box>
      </AssetInfoWrapper>
    </TableCell>
    <TableCell align="left">
      <TableBodyText>
        {formatCurrency(asset.price, { maximumFractionDigits: 8 })}
      </TableBodyText>
      <ProfitLossLabel
        value={asset.gain24Hr}
        type="percent"
        variant="tableCell2"
      />
    </TableCell>
    <TableCell align="left">
      <TableBodyText>
        {formatCurrency(asset.price * asset.holdings, {
          maximumFractionDigits: 2,
        })}
      </TableBodyText>
      <TableBodySubText>{formatNumber(asset.holdings)}</TableBodySubText>
    </TableCell>
    <TableCell align="left">
      <Button size="small" variant="contained" sx={{ marginRight: 1 }}>
        Edit
      </Button>
      <Button size="small" variant="contained" color="secondary">
        Remove
      </Button>
    </TableCell>
  </StyledTableRow>
)

export default PortfolioAsset
