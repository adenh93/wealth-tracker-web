import { FC } from 'react'
import { Autocomplete, Box, TextField } from '@mui/material'
import { Asset } from '../../../types'

export interface AssetAutocompleteProps {
  options: Asset[]
  error?: string
  onChange: (e: any, asset: Asset | null) => void
}

const AssetAutocomplete: FC<AssetAutocompleteProps> = ({
  options,
  error,
  onChange,
}) => {
  const getOptionLabel = (option: Asset): string =>
    `${option.name} (${option.ticker})`

  return (
    <Autocomplete
      autoHighlight
      size="small"
      options={options}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option: Asset) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={option.logoSrc}
            alt={`${option.name} logo`}
          />
          {option.name} ({option.ticker})
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

export default AssetAutocomplete
