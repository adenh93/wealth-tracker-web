import { FC } from 'react'
import { Button, TableCell, Box } from '@mui/material'
import { formatCurrency, formatNumber } from '../../utils/number'
import ProfitLossLabel from '../ProfitLossLabel'
import TableBodyText from '../typography/TableBodyText'
import TableBodySubText from '../typography/TableBodySubText'
import { StyledTableRow, AssetInfoWrapper } from './CryptoPortfolioAsset.css'
import { CryptoCurrencyHolding } from '../../graphql/types'
import { getCMCLogoUrl } from '../../utils/cryptoCurrency'

export interface CryptoPortfolioAssetProps {
  asset: CryptoCurrencyHolding
  onEdit: (asset: CryptoCurrencyHolding) => void
  onRemove: (asset: CryptoCurrencyHolding) => void
}

const CryptoPortfolioAsset: FC<CryptoPortfolioAssetProps> = ({
  asset,
  onEdit,
  onRemove,
}) => (
  <StyledTableRow>
    <TableCell align="left">
      <AssetInfoWrapper>
        <img
          width={30}
          height={30}
          src={getCMCLogoUrl(asset.cryptoCurrencyId)}
          alt={`${asset.cryptoCurrency?.name} logo`}
        />
        <Box>
          <TableBodyText>{asset.cryptoCurrency?.name}</TableBodyText>
          <TableBodySubText>{asset.cryptoCurrency?.symbol}</TableBodySubText>
        </Box>
      </AssetInfoWrapper>
    </TableCell>
    <TableCell align="left">
      <TableBodyText>
        {formatCurrency(asset.price, {
          maximumFractionDigits: asset.price >= 1 ? 2 : 8,
        })}
      </TableBodyText>
      <ProfitLossLabel
        value={asset.percentChange24h}
        type="percent"
        variant="tableCell2"
      />
    </TableCell>
    <TableCell align="left">
      <TableBodyText>
        {formatCurrency(asset.netHoldingsValue, {
          maximumFractionDigits: 2,
        })}
      </TableBodyText>
      <TableBodySubText>{formatNumber(asset.holdings)}</TableBodySubText>
    </TableCell>
    <TableCell align="left">
      <Button
        size="small"
        variant="contained"
        sx={{ marginRight: 1 }}
        onClick={() => onEdit(asset)}
      >
        Edit
      </Button>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => onRemove(asset)}
      >
        Remove
      </Button>
    </TableCell>
  </StyledTableRow>
)

export default CryptoPortfolioAsset
