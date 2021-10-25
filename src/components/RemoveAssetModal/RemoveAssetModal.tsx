import { ChangeEvent, FC, useState } from 'react'
import { Button, Input, Typography } from '@mui/material'
import Modal from '../ui/Modal'
import { Asset } from '../../types'
import { ButtonContainer } from './RemoveAssetModal.css'

export interface RemoveAssetModalProps {
  asset: Asset
  open: boolean
  handleDelete: () => void
  handleClose: (e: any) => void
}

const RemoveAssetModal: FC<RemoveAssetModalProps> = ({
  asset,
  open,
  handleDelete,
  handleClose,
}) => {
  const [inputState, setInputState] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputState(e.currentTarget.value)

  return (
    <Modal open={open} title="Delete Asset" handleClose={handleClose}>
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
      <ButtonContainer>
        <Button
          variant="contained"
          color="error"
          disabled={inputState !== 'delete'}
          onClick={handleDelete}
          data-testid="confirm-button"
        >
          Confirm
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClose}
          data-testid="cancel-button"
        >
          Cancel
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default RemoveAssetModal
