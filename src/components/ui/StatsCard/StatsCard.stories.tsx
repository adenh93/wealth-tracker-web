import { Story } from '@storybook/react'
import { green, lightGreen } from '@mui/material/colors'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import StatsCard, { StatsCardProps } from './StatsCard'
import { Typography } from '@mui/material'
import ProfitLossLabel from '../../ProfitLossLabel'

const config = {
  title: 'Components/UI/StatsCard',
  component: StatsCard,
}

const Template: Story<StatsCardProps> = (args) => (
  <StatsCard {...args}>
    <ProfitLossLabel value={210.56} type="currency" variant="subtitle1" />
    <Typography variant="body1">A$87,000.56</Typography>
    <Typography variant="body2">Total Net Worth</Typography>
  </StatsCard>
)

export const Primary = Template.bind({})

Primary.args = {
  Icon: AttachMoneyIcon,
  iconColor: green[500],
  iconBackgroundColor: lightGreen[100],
}

export default config
