import { FC } from 'react'
import { Typography, TextField, Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Asset } from '../../types'
import { AddAssetSchema } from '../../validationSchemas'
import ConfirmModal from '../ui/ConfirmModal'
import AssetAutocomplete from '../ui/AssetAutocomplete'

export interface AddAssetModalProps {
  options: Asset[]
  open: boolean
  handleSave: () => void
  handleClose: (e: any) => void
}

export interface AddAssetForm {
  assetId: string | undefined
  holdings: number | undefined
}

const AddAssetModal: FC<AddAssetModalProps> = ({
  options,
  open,
  handleSave,
  handleClose,
}) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAssetForm>({
    resolver: yupResolver(AddAssetSchema),
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
          To add a new asset to your portfolio, select the asset from the list
          below, followed by the total number of units held.
        </Typography>
        <Box sx={{ mb: 2 }}>
          <AssetAutocomplete
            options={options}
            error={errors.assetId && errors.assetId.message}
            onChange={(e: any, asset: Asset | null) =>
              setValue('assetId', asset?.id)
            }
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

export default AddAssetModal
