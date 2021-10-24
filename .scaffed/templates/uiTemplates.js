const reactTemplate = (componentName) =>
  `import { FC } from 'react'

export interface ${componentName}Props {}

const ${componentName}: FC<${componentName}Props> = () => <></>

export default ${componentName}`

const testTemplate = (componentName) =>
  `import { render } from '../../../../utils/testUtils'
import ${componentName} from '../${componentName}'

describe('${componentName} component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<${componentName} />)

    expect(asFragment).toMatchSnapshot()
  })
})`

const storiesTemplate = (componentName) =>
  `import ${componentName}, { ${componentName}Props } from './${componentName}'
import { Story } from '@storybook/react'
  
const config = {
  title: 'Components/UI/${componentName}',
  component: ${componentName},
}

const Template: Story<${componentName}Props> = (args) => (
  <${componentName} {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}

export default config`

const indexTemplate = (componentName) =>
  `export { default } from './${componentName}'
export type { ${componentName}Props } from './${componentName}'`

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
