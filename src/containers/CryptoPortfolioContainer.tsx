import { useQuery } from '@apollo/client'
import CryptoPortfolioTable from '../components/CryptoPortfolioTable'
import { CRYPTOCURRENCY_HOLDINGS } from '../graphql/query'
import { Query } from '../graphql/types'

const CryptoCurrencyTableContainer = () => {
  const { loading, data } = useQuery<Query>(CRYPTOCURRENCY_HOLDINGS)

  return (
    <CryptoPortfolioTable
      assets={data?.cryptoCurrencyHoldings || []}
      loading={loading}
    />
  )
}

export default CryptoCurrencyTableContainer
