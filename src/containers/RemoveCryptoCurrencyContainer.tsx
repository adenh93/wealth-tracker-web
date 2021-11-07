import { FC, useState, ChangeEvent, useContext } from 'react'
import { useMutation } from '@apollo/client'
import {
  CryptoCurrencyHolding,
  Mutation,
  MutationCryptoCurrencyHoldingsDeleteArgs,
} from '../graphql/types'
import { CRYPTOCURRENCY_HOLDINGS_DELETE } from '../graphql/Mutation'
import RemoveCryptoCurrencyModal from '../components/RemoveCryptoCurrencyModal'
import { ModalContext } from '../context/Modal'

interface RemoveCryptoCurrencyContainerProps {
  asset: CryptoCurrencyHolding
}

const EditCryptoCurrencyContainer: FC<RemoveCryptoCurrencyContainerProps> = ({
  asset,
}) => {
  const { hideModal } = useContext(ModalContext)
  const [confirmationInput, setConfirmationInput] = useState('')

  const [deleteHolding, { loading: submitting }] = useMutation<
    Mutation,
    MutationCryptoCurrencyHoldingsDeleteArgs
  >(CRYPTOCURRENCY_HOLDINGS_DELETE, {
    variables: {
      id: asset.id!,
    },
    onCompleted: hideModal,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmationInput(e.currentTarget.value)

  return (
    <RemoveCryptoCurrencyModal
      asset={asset}
      submitting={submitting}
      inputState={confirmationInput}
      handleInputChange={handleInputChange}
      handleConfirm={deleteHolding}
      handleClose={hideModal}
    />
  )
}

export default EditCryptoCurrencyContainer
