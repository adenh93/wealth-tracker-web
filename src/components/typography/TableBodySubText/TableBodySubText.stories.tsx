import TableBodySubText from './TableBodySubText'
import { Story } from '@storybook/react'

const config = {
  title: 'Components/Typography/TableBodySubText',
  component: TableBodySubText,
}

const Template: Story = (args) => <TableBodySubText {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'This is a Table Body SubText component',
}

export default config
