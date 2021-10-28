import * as yup from 'yup'

const AddAssetSchema = yup
  .object()
  .shape({
    assetId: yup.string().required('You must choose an asset.'),
    holdings: yup
      .number()
      .min(1, 'You must be holding at least 1 unit.')
      .required('You must specify your total holdings.'),
  })
  .required()

export default AddAssetSchema
