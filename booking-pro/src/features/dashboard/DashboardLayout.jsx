import styled from 'styled-components';

import DurationChart from '../../features/dashboard/DurationChart';
import SalesChart from '../../features/dashboard/SalesChart';
import Stats from '../../features/dashboard/Stats';
import TodayActivity from './TodayActivity';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
// import { useCabins } from 'features/cabins/useCabins';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

/*
We need to distinguish between two types of data here:
1) BOOKINGS: the actual sales. For example, in the last 30 days, the hotel might have sold 10 bookings online, but these guests might only arrive and check in in the far future (or not, as booking also happen on-site)
2) STAYS: the actual check-in of guests arriving for their bookings. We can identify stays by their startDate, together with a status of either 'checked-in' (for current stays) or 'checked-out' (for past stays)
*/

function DashboardLayout() {
  const { isLoading: isLoading1, bookings, numDays } = useRecentBookings();
  const { isLoading: isLoading2, stays } = useRecentStays();
  // const { isLoading: isLoading3, cabins } = useCabins();

  if (isLoading1 || isLoading2) return <p>Loading...</p>;

  console.log('bookings', bookings);

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        stays={stays}
        numDays={numDays}
        cabinCount={2}
        // cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart stays={stays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
