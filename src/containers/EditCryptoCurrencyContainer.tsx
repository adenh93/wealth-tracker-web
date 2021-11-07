import { FC, useContext } from 'react'
import { ApolloError, useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { EditCryptoCurrencySchema } from '../validationSchemas'
import EditCryptoCurrencyModal from '../components/EditCryptoCurrencyModal'
import {
  CryptoCurrencyHolding,
  Mutation,
  MutationCryptoCurrencyHoldingsUpdateArgs,
} from '../graphql/types'
import { CRYPTOCURRENCY_HOLDINGS_UPDATE } from '../graphql/Mutation'
import { AddCryptoCurrencyForm } from '../components/AddCryptoCurrencyModal'
import { extractInputErrorField } from '../utils/apollo'
import { EditCryptoCurrencyForm } from '../components/EditCryptoCurrencyModal/EditCryptoCurrencyModal'
import { ModalContext } from '../context/Modal'

interface EditCryptoCurrencyContainerProps {
  asset: CryptoCurrencyHolding
}

const EditCryptoCurrencyContainer: FC<EditCryptoCurrencyContainerProps> = ({
  asset,
}) => {
  const { hideModal } = useContext(ModalContext)

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCryptoCurrencyForm>({
    resolver: yupResolver(EditCryptoCurrencySchema),
  })

  const [updateHolding, { loading: submitting }] = useMutation<
    Mutation,
    MutationCryptoCurrencyHoldingsUpdateArgs
  >(CRYPTOCURRENCY_HOLDINGS_UPDATE, {
    onError(error: ApolloError) {
      const field = extractInputErrorField<EditCryptoCurrencyForm>(error)
      if (field) setError(field, { message: error.message })
    },
    onCompleted: hideModal,
  })

  const onSubmit = handleSubmit(async (data: EditCryptoCurrencyForm) => {
    updateHolding({
      variables: {
        input: {
          id: asset.id!,
          holdings: data.holdings!,
        },
      },
    })
  })

  return (
    <EditCryptoCurrencyModal
      asset={asset}
      submitting={submitting}
      errors={errors}
      register={register}
      handleSubmit={onSubmit}
      handleClose={hideModal}
    />
  )
}

export default EditCryptoCurrencyContainer
