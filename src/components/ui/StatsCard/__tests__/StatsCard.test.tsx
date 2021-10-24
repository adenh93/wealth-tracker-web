import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { green, lightGreen } from '@mui/material/colors'
import { render } from '../../../../utils/testUtils'
import StatsCard from '../StatsCard'

describe('StatsCard component tests', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <StatsCard
        Icon={AttachMoneyIcon}
        iconColor={green[500]}
        iconBackgroundColor={lightGreen[100]}
      >
        Test
      </StatsCard>
    )

    expect(asFragment).toMatchSnapshot()
  })
})
