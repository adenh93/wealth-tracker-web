import { useQuery } from '@apollo/client'
import { useCallback } from 'react'
import debounce from 'lodash.debounce'
import AddCryptoCurrencyModal from '../../components/AddCryptoCurrencyModal'
import { CRYPTO_CURRENCIES } from '../../graphql/query'
import { Query } from '../../graphql/types'

const AddAssetContainer = () => {
  const { loading, data, refetch } = useQuery<Query>(CRYPTO_CURRENCIES, {
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
      loading={loading}
      handleSave={() => {}}
      handleClose={() => {}}
      handleFilter={debouncedRefetch}
    />
  )
}

export default AddAssetContainer
