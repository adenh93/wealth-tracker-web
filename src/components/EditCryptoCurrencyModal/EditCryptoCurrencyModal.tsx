import { FC } from 'react'
import { TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import ConfirmModal from '../ui/ConfirmModal'
import { CryptoCurrencyHolding } from '../../graphql/types'

export interface EditCryptoCurrencyModalProps {
  asset: CryptoCurrencyHolding
  open: boolean
  handleSave: () => void
  handleClose: (e: any) => void
}

const EditCryptoCurrencyModal: FC<EditCryptoCurrencyModalProps> = ({
  asset,
  open,
  handleSave,
  handleClose,
}) => {
  const { register, handleSubmit } = useForm()

  return (
    <ConfirmModal
      open={open}
      title="Edit Asset"
      handleConfirm={handleSubmit(handleSave)}
      handleClose={handleClose}
    >
      <Typography variant="body2" sx={{ mb: 2 }}>
        Editing holdings for {asset.cryptoCurrency?.name} (
        {asset.cryptoCurrency?.symbol}):
      </Typography>
      <TextField
        {...register('newHoldings')}
        variant="standard"
        label="New Holdings"
        type="number"
        data-testid="new-holdings-input"
      />
    </ConfirmModal>
  )
}

export default EditCryptoCurrencyModal
