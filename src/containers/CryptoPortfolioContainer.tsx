import { FC, useContext } from 'react'
import { useQuery } from '@apollo/client'
import CryptoPortfolioTable from '../components/CryptoPortfolioTable'
import { CRYPTOCURRENCY_HOLDINGS } from '../graphql/query'
import { CryptoCurrencyHolding, Query } from '../graphql/types'
import { ModalContext } from '../context/Modal'
import EditCryptoCurrencyContainer from './EditCryptoCurrencyContainer'
import RemoveCryptoCurrencyContainer from './RemoveCryptoCurrencyContainer'

const CryptoCurrencyTableContainer: FC = () => {
  const { showModal } = useContext(ModalContext)
  const { loading, data } = useQuery<Query>(CRYPTOCURRENCY_HOLDINGS)

  const showEditModal = (asset: CryptoCurrencyHolding) =>
    showModal('Edit Asset', <EditCryptoCurrencyContainer asset={asset} />)

  const showRemoveModal = (asset: CryptoCurrencyHolding) =>
    showModal('Remove Asset', <RemoveCryptoCurrencyContainer asset={asset} />)

  return (
    <CryptoPortfolioTable
      assets={data?.cryptoCurrencyHoldings || []}
      loading={loading}
      onEdit={showEditModal}
      onRemove={showRemoveModal}
    />
  )
}

export default CryptoCurrencyTableContainer
