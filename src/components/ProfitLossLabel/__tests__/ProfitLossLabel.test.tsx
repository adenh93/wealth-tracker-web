import ProfitLossLabel from '..'
import { render } from '../../../utils/testUtils'

describe('ProfitLossLabel component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <ProfitLossLabel value={34560.5} type="currency" />
    )

    expect(asFragment).toMatchSnapshot()
  })

  test('it shows positive currency', () => {
    const { getByText } = render(
      <ProfitLossLabel value={34560.5} type="currency" />
    )

    expect(getByText('+ A$34,560.50')).not.toBeNull()
  })

  test('it shows negative currency', () => {
    const { getByText } = render(
      <ProfitLossLabel value={-34560.5} type="currency" />
    )

    expect(getByText('- A$34,560.50')).not.toBeNull()
  })

  test('it shows positive percent', () => {
    const { getByText } = render(
      <ProfitLossLabel value={0.052} type="percent" />
    )

    expect(getByText('+ 5.2%')).not.toBeNull()
  })

  test('it shows negative percent', () => {
    const { getByText } = render(
      <ProfitLossLabel value={-0.052} type="percent" />
    )

    expect(getByText('- 5.2%')).not.toBeNull()
  })
})
