import { FC, useState, ChangeEvent } from 'react'
import { useMutation } from '@apollo/client'
import {
  CryptoCurrencyHolding,
  Mutation,
  MutationCryptoCurrencyHoldingsDeleteArgs,
} from '../graphql/types'
import { CRYPTOCURRENCY_HOLDINGS_DELETE } from '../graphql/Mutation'
import RemoveCryptoCurrencyModal from '../components/RemoveCryptoCurrencyModal'

interface RemoveCryptoCurrencyContainerProps {
  asset: CryptoCurrencyHolding
}

const EditCryptoCurrencyContainer: FC<RemoveCryptoCurrencyContainerProps> = ({
  asset,
}) => {
  const [confirmationInput, setConfirmationInput] = useState('')

  const [deleteHolding, { loading: submitting }] = useMutation<
    Mutation,
    MutationCryptoCurrencyHoldingsDeleteArgs
  >(CRYPTOCURRENCY_HOLDINGS_DELETE, {
    variables: {
      id: asset.id!,
    },
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmationInput(e.currentTarget.value)

  return (
    <RemoveCryptoCurrencyModal
      asset={asset}
      open={true}
      submitting={submitting}
      inputState={confirmationInput}
      handleInputChange={handleInputChange}
      handleConfirm={deleteHolding}
      handleClose={() => {}}
    />
  )
}

export default EditCryptoCurrencyContainer
