import { FC } from 'react'
import { Autocomplete, Box, TextField } from '@mui/material'
import { CryptoCurrency } from '../../../graphql/types'
import { CMC_LOGO_URL } from '../../../constants'

export interface CryptoCurrencyAutocompleteProps {
  options: CryptoCurrency[]
  error?: string
  onChange: (e: any, cryptoCurrency: CryptoCurrency | null) => void
  onFilter: (e: any, value: string) => void
}

const CryptoCurrencyAutocomplete: FC<CryptoCurrencyAutocompleteProps> = ({
  options,
  error,
  onChange,
  onFilter,
}) => {
  const getOptionLabel = (option: CryptoCurrency): string => option.name

  return (
    <Autocomplete
      autoHighlight
      size="small"
      options={options}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      onInputChange={onFilter}
      filterOptions={(x) => x}
      renderOption={(props, option: CryptoCurrency) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`${CMC_LOGO_URL}/${option.id}.png`}
            alt={`${option.name} logo`}
          />
          {option.name} ({option.symbol})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose an Asset"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
          error={!!error}
          helperText={error}
        />
      )}
    />
  )
}

export default CryptoCurrencyAutocomplete
