import { render } from '../../../../utils/testUtils'
import TableHeadText from '../TableHeadText'

describe('TableHeadText component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<TableHeadText>Test</TableHeadText>)

    expect(asFragment).toMatchSnapshot()
  })

  test('renders correctly', () => {
    const { getByText } = render(<TableHeadText>Test</TableHeadText>)

    expect(getByText('Test')).not.toBeNull()
  })
})
