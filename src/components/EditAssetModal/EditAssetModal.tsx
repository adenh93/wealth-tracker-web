import { TextField, Typography } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { Asset } from '../../types'
import ConfirmModal from '../ui/ConfirmModal'

export interface EditAssetModalProps {
  asset: Asset
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
  const [newHoldings, setNewHoldings] = useState<number>(asset.holdings)

  const onChangeHoldings = (e: ChangeEvent<HTMLInputElement>) =>
    setNewHoldings(+e.currentTarget.value)

  return (
    <ConfirmModal
      open={open}
      title="Edit Asset"
      handleConfirm={handleSave}
      handleClose={handleClose}
    >
      <Typography variant="body2" sx={{ mb: 2 }}>
        Editing holdings for {asset.name} ({asset.ticker}):
      </Typography>
      <TextField
        variant="standard"
        label="New Holdings"
        type="number"
        value={newHoldings}
        onChange={onChangeHoldings}
        data-testid="new-holdings-input"
      />
    </ConfirmModal>
  )
}

export default EditAssetModal
