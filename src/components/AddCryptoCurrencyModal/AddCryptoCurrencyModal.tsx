import { FC } from 'react'
import { Typography, TextField, Box, Alert } from '@mui/material'
import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import ConfirmModal from '../ui/ConfirmModal'
import CryptoCurrencyAutocomplete from '../ui/CryptoCurrencyAutocomplete'
import { CryptoCurrency } from '../../graphql/types'

interface AddCryptoCurrencyFormErrors {
  cryptoCurrencyId?: FieldError | undefined
  holdings?: FieldError | undefined
}

export interface AddCryptoCurrencyForm {
  cryptoCurrencyId: number | undefined
  holdings: number | undefined
}

export interface AddCryptoCurrencyModalProps {
  options: CryptoCurrency[]
  open: boolean
  submitting: boolean
  submitError?: string
  errors: AddCryptoCurrencyFormErrors
  register: UseFormRegister<AddCryptoCurrencyForm>
  setValue: UseFormSetValue<AddCryptoCurrencyForm>
  handleSubmit: (e: any) => void
  handleClose: (e: any) => void
  handleFilter: (e: any, value: string) => void
}

const AddCryptoCurrencyModal: FC<AddCryptoCurrencyModalProps> = ({
  options,
  open,
  submitting,
  submitError,
  errors,
  register,
  setValue,
  handleSubmit,
  handleClose,
  handleFilter,
}) => (
  <form onSubmit={handleSubmit}>
    <ConfirmModal
      open={open}
      disabled={submitting}
      title="Add Asset"
      handleConfirm={handleSubmit}
      handleClose={handleClose}
    >
      <Typography variant="body2" sx={{ mb: 2 }}>
        To add a new Cryptocurrency asset to your portfolio, select the asset
        from the list below, followed by the total number of units held.
      </Typography>
      {submitError && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {submitError}
        </Alert>
      )}
      <Box sx={{ mb: 2 }}>
        <CryptoCurrencyAutocomplete
          options={options}
          disabled={submitting}
          error={errors.cryptoCurrencyId?.message}
          onChange={(_e: any, cryptoCurrency: CryptoCurrency | null) =>
            setValue('cryptoCurrencyId', cryptoCurrency?.id)
          }
          onFilter={handleFilter}
        />
      </Box>
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

export default AddCryptoCurrencyModal
