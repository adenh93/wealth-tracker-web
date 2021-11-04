import { gql } from '@apollo/client'

const CRYPTOCURRENCY_HOLDINGS = gql`
  query GetCryptoCurrencyHoldings {
    cryptoCurrencyHoldings {
      cryptoCurrency {
        id
        rank
        name
        symbol
      }
      id
      cryptoCurrencyId
      holdings
      price
      percentChange24h
      netHoldingsValue
    }
  }
`

export default CRYPTOCURRENCY_HOLDINGS
