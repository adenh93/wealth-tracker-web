import { gql } from '@apollo/client'

const CRYPTOCURRENCY_HOLDINGS_UPDATE = gql`
  mutation UpdateCryptoCurrencyHolding(
    $input: CryptoCurrencyHoldingsUpdateInput!
  ) {
    cryptoCurrencyHoldingsUpdate(input: $input) {
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

export default CRYPTOCURRENCY_HOLDINGS_UPDATE
