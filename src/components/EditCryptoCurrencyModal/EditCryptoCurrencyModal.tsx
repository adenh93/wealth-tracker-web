import { FC } from 'react'
import { TextField, Typography } from '@mui/material'
import { FieldError, UseFormRegister } from 'react-hook-form'
import ConfirmModal from '../ui/ConfirmModal'
import { CryptoCurrencyHolding } from '../../graphql/types'

interface EditCryptoCurrencyFormErrors {
  holdings?: FieldError | undefined
}

export interface EditCryptoCurrencyForm {
  holdings: number | undefined
}

export interface EditCryptoCurrencyModalProps {
  asset: CryptoCurrencyHolding
  open: boolean
  submitting: boolean
  errors: EditCryptoCurrencyFormErrors
  register: UseFormRegister<EditCryptoCurrencyForm>
  handleSubmit: (e: any) => void
  handleClose: (e: any) => void
}

const EditCryptoCurrencyModal: FC<EditCryptoCurrencyModalProps> = ({
  asset,
  open,
  submitting,
  errors,
  register,
  handleSubmit,
  handleClose,
}) => (
  <form onSubmit={handleSubmit}>
    <ConfirmModal
      open={open}
      title="Edit Asset"
      disabled={submitting}
      handleConfirm={handleSubmit}
      handleClose={handleClose}
    >
      <Typography variant="body2" sx={{ mb: 2 }}>
        Editing holdings for {asset.cryptoCurrency?.name} (
        {asset.cryptoCurrency?.symbol}):
      </Typography>
      <TextField
        {...register('holdings')}
        disabled={submitting}
        fullWidth
        size="small"
        label="Holdings"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        error={!!errors.holdings}
        helperText={errors.holdings?.message}
      />
    </ConfirmModal>
  </form>
)

export default EditCryptoCurrencyModal
