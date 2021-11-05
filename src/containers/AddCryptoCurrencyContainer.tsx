import { FC, useCallback } from 'react'
import { ApolloError, useMutation, useQuery } from '@apollo/client'
import debounce from 'lodash.debounce'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { AddCryptoCurrencySchema } from '../validationSchemas'
import AddCryptoCurrencyModal from '../components/AddCryptoCurrencyModal'
import { CRYPTOCURRENCIES } from '../graphql/query'
import {
  Mutation,
  MutationCryptoCurrencyHoldingsAddArgs,
  Query,
} from '../graphql/types'
import { CRYPTOCURRENCY_HOLDINGS_ADD } from '../graphql/Mutation'
import { AddCryptoCurrencyForm } from '../components/AddCryptoCurrencyModal'
import { extractInputErrorField } from '../utils/apollo'

const AddCryptoCurrencyContainer: FC = () => {
  const { data, refetch } = useQuery<Query>(CRYPTOCURRENCIES, {
    variables: { query: '' },
  })

  const {
    setValue,
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCryptoCurrencyForm>({
    resolver: yupResolver(AddCryptoCurrencySchema),
  })

  const [addNewHolding, { loading: submitting }] = useMutation<
    Mutation,
    MutationCryptoCurrencyHoldingsAddArgs
  >(CRYPTOCURRENCY_HOLDINGS_ADD, {
    onError(error: ApolloError) {
      const field = extractInputErrorField<AddCryptoCurrencyForm>(error)
      if (field) setError(field, { message: error.message })
    },
  })

  console.log(errors)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedRefetch = useCallback(
    debounce((_e: any, value: string) => refetch({ query: value }), 500),
    []
  )

  const onSubmit = handleSubmit(async (data: AddCryptoCurrencyForm) => {
    addNewHolding({
      variables: {
        input: {
          cryptoCurrencyId: data.cryptoCurrencyId!,
          holdings: data.holdings!,
        },
      },
    })
  })

  return (
    <AddCryptoCurrencyModal
      options={data?.cryptoCurrencies || []}
      open={true}
      submitting={submitting}
      errors={errors}
      register={register}
      setValue={setValue}
      handleSubmit={onSubmit}
      handleClose={() => {}}
      handleFilter={debouncedRefetch}
    />
  )
}

export default AddCryptoCurrencyContainer
