import { Avatar, Paper } from '@mui/material'
import { FC } from 'react'
import { Wrapper, ContentWrapper } from './StatsCard.css'

export interface StatsCardProps {
  Icon: any
  iconColor: string
  iconBackgroundColor: string
}

const StatsCard: FC<StatsCardProps> = ({
  Icon,
  iconColor,
  iconBackgroundColor,
  children,
}) => (
  <Paper sx={{ padding: 4.5, borderRadius: '0.5rem' }}>
    <Wrapper>
      <Avatar sx={{ bgcolor: iconBackgroundColor, width: 85, height: 85 }}>
        <Icon sx={{ fill: iconColor, fontSize: '60px' }} />
      </Avatar>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  </Paper>
)

export default StatsCard
