import * as yup from 'yup'

const EditCryptoCurrencySchema = yup
  .object()
  .shape({
    holdings: yup
      .number()
      .min(1, 'You must be holding at least 1 unit.')
      .required('You must specify your total holdings.'),
  })
  .required()

export default EditCryptoCurrencySchema
