import TableBodyText from './TableBodyText'
import { Story } from '@storybook/react'

const config = {
  title: 'Components/Typography/TableBodyText',
  component: TableBodyText,
}

const Template: Story = (args) => <TableBodyText {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'This is a Table Body Text component',
}

export default config
