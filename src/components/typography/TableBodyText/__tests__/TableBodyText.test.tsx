import { render } from '../../../../utils/testUtils'
import TableBodyText from '../TableBodyText'

describe('TableBodyText component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<TableBodyText>Test</TableBodyText>)

    expect(asFragment).toMatchSnapshot()
  })

  test('renders correctly', () => {
    const { getByText } = render(<TableBodyText>Test</TableBodyText>)

    expect(getByText('Test')).not.toBeNull()
  })
})
