import { ApolloError } from '@apollo/client'

export const extractInputErrorField = <FormType>(
  error: ApolloError
): keyof FormType | null => {
  if (error.graphQLErrors.length)
    return error.graphQLErrors[0].extensions?.field as keyof FormType
  return null
}
