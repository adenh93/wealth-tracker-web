import NetWorthStatsCard, { NetWorthStatsCardProps } from './NetWorthStatsCard'
import { Story } from '@storybook/react'

const config = {
  title: 'Components/NetWorthStatsCard',
  component: NetWorthStatsCard,
}

const Template: Story<NetWorthStatsCardProps> = (args) => (
  <NetWorthStatsCard {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  gain24Hr: 14560,
  netWorth: 975650,
}

export default config
