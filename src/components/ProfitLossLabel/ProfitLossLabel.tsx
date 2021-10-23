import { FC } from 'react'
import { Typography, TypographyProps } from '@mui/material'
import { formatCurrency, formatPercent } from '../../utils/number'
import { useTheme } from '@mui/system'

export type Type = 'currency' | 'percent'

export interface ProfitLossLabelProps extends TypographyProps {
  value: number
  type: Type
}

const ProfitLossLabel: FC<ProfitLossLabelProps> = ({
  value,
  type,
  variant = 'body1',
}) => {
  const theme = useTheme()
  const isProfit: boolean = value > 0

  const getText = () =>
    type === 'currency'
      ? formatCurrency(value, {
          signDisplay: 'never',
          maximumFractionDigits: 2,
        })
      : formatPercent(value, { signDisplay: 'never', maximumFractionDigits: 2 })

  return (
    <Typography
      variant={variant}
      component="p"
      color={isProfit ? theme.palette.success.main : theme.palette.error.main}
    >
      {isProfit ? '+' : '-'} {getText()}
    </Typography>
  )
}

export default ProfitLossLabel
