import ProfitLossLabel, { ProfitLossLabelProps } from './ProfitLossLabel'
import { Story } from '@storybook/react'

const config = {
  title: 'Components/ProfitLossLabel',
  component: ProfitLossLabel,
}

const Template: Story<ProfitLossLabelProps> = (args) => (
  <ProfitLossLabel {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  value: 2190.5,
  type: 'currency',
}

export default config
