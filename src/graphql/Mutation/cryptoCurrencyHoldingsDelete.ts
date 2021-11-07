import { gql } from '@apollo/client'

const CRYPTOCURRENCY_HOLDINGS_DELETE = gql`
  mutation DeleteCryptoCurrencyHolding($id: Int!) {
    cryptoCurrencyHoldingsDelete(id: $id) {
      cryptoCurrency {
        name
        symbol
      }
      price
      percentChange24h
      holdings
    }
  }
`

export default CRYPTOCURRENCY_HOLDINGS_DELETE
