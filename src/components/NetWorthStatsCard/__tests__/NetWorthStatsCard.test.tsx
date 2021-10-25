import { render } from '../../../utils/testUtils'
import NetWorthStatsCard from '../NetWorthStatsCard'

describe('NetWorthStatsCard component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <NetWorthStatsCard gain24Hr={9999.99} netWorth={99999.99} />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('it shows positive gains', () => {
    const { getByText } = render(
      <NetWorthStatsCard gain24Hr={9999.99} netWorth={99999.99} />
    )

    expect(getByText('+ A$9,999.99')).toMatchSnapshot()
    expect(getByText('A$99,999.99')).toMatchSnapshot()
  })

  test('it shows negative gains', () => {
    const { getByText } = render(
      <NetWorthStatsCard gain24Hr={-9999.99} netWorth={-99999.99} />
    )

    expect(getByText('- A$9,999.99')).toMatchSnapshot()
    expect(getByText('A$99,999.99')).toMatchSnapshot()
  })
})
