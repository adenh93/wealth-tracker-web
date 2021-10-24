import TableHeadText from './TableHeadText'
import { Story } from '@storybook/react'

const config = {
  title: 'Components/Typography/TableHeadText',
  component: TableHeadText,
}

const Template: Story = (args) => <TableHeadText {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'This is a Table Head Text component',
}

export default config
