import { FC } from 'react'
import { Typography } from '@mui/material'
import { green, lightGreen } from '@mui/material/colors'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import StatsCard from '../ui/StatsCard'
import ProfitLossLabel from '../ProfitLossLabel'
import { formatCurrency } from '../../utils/number'

export interface NetWorthStatsCardProps {
  gain24Hr: number
  netWorth: number
}

const NetWorthStatsCard: FC<NetWorthStatsCardProps> = ({
  gain24Hr,
  netWorth,
}) => (
  <StatsCard
    Icon={AttachMoneyIcon}
    iconColor={green[500]}
    iconBackgroundColor={lightGreen[100]}
  >
    <ProfitLossLabel value={gain24Hr} type="currency" variant="subtitle1" />
    <Typography variant="body1">{formatCurrency(netWorth)}</Typography>
    <Typography variant="body2">Total Net Worth</Typography>
  </StatsCard>
)

export default NetWorthStatsCard
