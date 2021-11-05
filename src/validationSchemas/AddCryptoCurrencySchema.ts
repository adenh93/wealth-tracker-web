import * as yup from 'yup'

const AddCryptoCurrencySchema = yup
  .object()
  .shape({
    cryptoCurrencyId: yup.number().required('You must choose an asset.'),
    holdings: yup
      .number()
      .min(1, 'You must be holding at least 1 unit.')
      .required('You must specify your total holdings.'),
  })
  .required()

export default AddCryptoCurrencySchema
