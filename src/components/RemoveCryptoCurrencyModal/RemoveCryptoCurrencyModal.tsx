import { ChangeEvent, FC } from 'react'
import { Input, Typography } from '@mui/material'
import ConfirmModal from '../ui/ConfirmModal'
import { CryptoCurrencyHolding } from '../../graphql/types'

export interface RemoveCryptoCurrencyModalProps {
  asset: CryptoCurrencyHolding
  open: boolean
  submitting: boolean
  inputState: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleConfirm: (e: any) => void
  handleClose: (e: any) => void
}

const RemoveCryptoCurrencyModal: FC<RemoveCryptoCurrencyModalProps> = ({
  asset,
  open,
  submitting,
  inputState,
  handleInputChange,
  handleConfirm,
  handleClose,
}) => {
  return (
    <ConfirmModal
      open={open}
      title="Delete Asset"
      disabled={inputState !== 'delete'}
      handleConfirm={handleConfirm}
      handleClose={handleClose}
    >
      <Typography variant="body2" sx={{ mb: 2 }}>
        Are you sure you want to remove the following asset from your portfolio?
        This action cannot be reversed:
      </Typography>
      <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
        {asset.cryptoCurrency?.name} ({asset.cryptoCurrency?.symbol})
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        If you are sure, enter 'delete' to remove this asset.
      </Typography>
      <Input
        value={inputState}
        onChange={handleInputChange}
        sx={{ mb: 4 }}
        data-testid="delete-input"
      />
    </ConfirmModal>
  )
}

export default RemoveCryptoCurrencyModal
