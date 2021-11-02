import { gql } from '@apollo/client'

const CRYPTOCURRENCIES = gql`
  query GetCryptoCurrencies($query: String!) {
    cryptoCurrencies(query: $query) {
      id
      rank
      name
      symbol
    }
  }
`

export default CRYPTOCURRENCIES
