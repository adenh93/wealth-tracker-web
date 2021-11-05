import { gql } from '@apollo/client'

const CRYPTOCURRENCY_HOLDINGS_ADD = gql`
  mutation AddCryptoCurrencyHolding($input: CryptoCurrencyHoldingsAddInput!) {
    cryptoCurrencyHoldingsAdd(input: $input) {
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

export default CRYPTOCURRENCY_HOLDINGS_ADD
