import { useQuery } from '@apollo/client'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import AddCryptoCurrencyModal from '../components/AddCryptoCurrencyModal'
import { CRYPTOCURRENCIES } from '../graphql/query'
import { Query } from '../graphql/types'

const AddCryptoCurrencyContainer = () => {
  const { data, refetch } = useQuery<Query>(CRYPTOCURRENCIES, {
    variables: { query: '' },
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedRefetch = useCallback(
    debounce((_e: any, value: string) => refetch({ query: value }), 500),
    []
  )

  return (
    <AddCryptoCurrencyModal
      options={data?.cryptoCurrencies || []}
      open={true}
      handleSave={() => {}}
      handleClose={() => {}}
      handleFilter={debouncedRefetch}
    />
  )
}

export default AddCryptoCurrencyContainer
