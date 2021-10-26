import { ChangeEvent, FC, useState } from 'react'
import { Input, Typography } from '@mui/material'
import ConfirmModal from '../ui/ConfirmModal'
import { Asset } from '../../types'

export interface RemoveAssetModalProps {
  asset: Asset
  open: boolean
  handleConfirm: () => void
  handleClose: () => void
}

const RemoveAssetModal: FC<RemoveAssetModalProps> = ({
  asset,
  open,
  handleConfirm,
  handleClose,
}) => {
  const [inputState, setInputState] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputState(e.currentTarget.value)

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
        {asset.name} ({asset.ticker})
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

export default RemoveAssetModal
