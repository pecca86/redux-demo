import styled from 'styled-components';
import { format } from 'date-fns';

import { box } from 'styles/styles';
import { formatDistanceFromNow } from 'utils/helpers';
import { isToday } from 'date-fns/esm';
import { formatCurrency } from 'utils/helpers';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import DataItem from 'ui/DataItem';
import { Flag } from 'ui/Flag';

const StyledBookingDataBox = styled.section`
  ${box} /* padding: 3.2rem 4rem; */
  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  /* padding: 2.4rem 4rem; */
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: 'Sono';
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  /* font-size: 1.8rem; */
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
  color: ${(props) =>
    props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

function BookingDataBox({ booking }) {
  console.log('BookingDataBox', booking);
  const {
    created_at,
    start_date,
    end_date,
    number_of_nights,
    number_of_guests,
    cabin_price,
    extra_price,
    total_price,
    breakfast,
    observations,
    paid,
    guests: { fullName: full_name, email, nationality, flag, national_id },
    cabins: { name: cabin_name },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {number_of_nights} nights in Cabin <span>{cabin_name}</span>
          </p>
        </div>

        <p>
          {format(new Date(start_date), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(end_date))
            ? 'Today'
            : formatDistanceFromNow(start_date)}
          ) &mdash; {format(new Date(end_date), 'EEE, MMM dd yyyy')}
        </p>
      </Header>

      <Section>
        <Guest>
          {flag && <Flag src={flag} alt={`Flag of ${nationality}`} />}
          <p>
            {full_name} {number_of_guests > 1 ? `+ ${number_of_guests - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {national_id}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label='Observations'
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label='Breakfast included?'>
          {breakfast ? 'Yes' : 'No'}
        </DataItem>

        <Price isPaid={paid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(total_price)}

            {breakfast &&
              ` (${formatCurrency(cabin_price)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{paid ? 'Paid' : 'Will pay at property'}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
