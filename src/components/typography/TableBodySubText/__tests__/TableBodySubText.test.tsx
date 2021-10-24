import { render } from '../../../../utils/testUtils'
import TableBodySubText from '../TableBodySubText'

describe('TableBodySubText component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<TableBodySubText>Test</TableBodySubText>)

    expect(asFragment).toMatchSnapshot()
  })

  test('renders correctly', () => {
    const { getByText } = render(<TableBodySubText>Test</TableBodySubText>)

    expect(getByText('Test')).not.toBeNull()
  })
})
