import { ChangeEvent, FC } from 'react'
import { Typography, TextField, Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { AddCryptoCurrencySchema } from '../../validationSchemas'
import ConfirmModal from '../ui/ConfirmModal'
import CryptoCurrencyAutocomplete from '../ui/CryptoCurrencyAutocomplete'
import { CryptoCurrency } from '../../graphql/types'

export interface AddCryptoCurrencyModalProps {
  options: CryptoCurrency[]
  open: boolean
  loading: boolean
  handleSave: () => void
  handleClose: (e: any) => void
  handleFilter: (e: any, value: string) => void
}

export interface AddCryptoCurrencyForm {
  id: string | undefined
  holdings: number | undefined
}

const AddCryptoCurrencyModal: FC<AddCryptoCurrencyModalProps> = ({
  options,
  open,
  loading,
  handleSave,
  handleClose,
  handleFilter,
}) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCryptoCurrencyForm>({
    resolver: yupResolver(AddCryptoCurrencySchema),
  })

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <ConfirmModal
        open={open}
        title="Add Asset"
        handleConfirm={handleSubmit(handleSave)}
        handleClose={handleClose}
      >
        <Typography variant="body2" sx={{ mb: 2 }}>
          To add a new Cryptocurrency asset to your portfolio, select the asset
          from the list below, followed by the total number of units held.
        </Typography>
        <Box sx={{ mb: 2 }}>
          <CryptoCurrencyAutocomplete
            options={options}
            error={errors.id && errors.id.message}
            onChange={(e: any, cryptoCurrency: CryptoCurrency | null) =>
              setValue('id', cryptoCurrency?.id)
            }
            onFilter={handleFilter}
          />
        </Box>
        <TextField
          {...register('holdings')}
          fullWidth
          size="small"
          label="Holdings"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          error={!!errors.holdings}
          helperText={errors.holdings && errors.holdings.message}
        />
      </ConfirmModal>
    </form>
  )
}

export default AddCryptoCurrencyModal
