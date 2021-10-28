import { FC } from 'react'
import { TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { OwnedAsset } from '../../types'
import ConfirmModal from '../ui/ConfirmModal'

export interface EditAssetModalProps {
  asset: OwnedAsset
  open: boolean
  handleSave: () => void
  handleClose: (e: any) => void
}

const EditAssetModal: FC<EditAssetModalProps> = ({
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
        Editing holdings for {asset.name} ({asset.ticker}):
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

export default EditAssetModal
