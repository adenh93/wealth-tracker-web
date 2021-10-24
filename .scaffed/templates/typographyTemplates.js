const reactTemplate = (componentName) =>
  `import { FC } from 'react'

const ${componentName}: FC = ({ children }) => <Typography>{children}</Typography>

export default ${componentName}`

const testTemplate = (componentName) =>
  `import { render } from '../../../../utils/testUtils'
import ${componentName} from '../${componentName}'

describe('${componentName} component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<${componentName}>Test</${componentName}>)

    expect(asFragment).toMatchSnapshot()
  })
})`

const storiesTemplate = (componentName) =>
  `import ${componentName} from './${componentName}'
import { Story } from '@storybook/react'
  
const config = {
  title: 'Components/Typography/${componentName}',
  component: ${componentName},
}

const Template: Story = (args) => (
  <${componentName} {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
    children: 'This is a ${componentName} component'
}

export default config`

const indexTemplate = (componentName) =>
  `export { default } from './${componentName}'`

module.exports = [
  {
    fileName: '[componentName].tsx',
    template: reactTemplate,
  },
  {
    subDirName: '__tests__',
    files: [
      {
        fileName: '[componentName].test.tsx',
        template: testTemplate,
      },
    ],
  },
  {
    fileName: `[componentName].stories.tsx`,
    template: storiesTemplate,
  },
  {
    fileName: `index.ts`,
    template: indexTemplate,
  },
]
