import { getReservation } from '@/app/_lib/actions';
import React from 'react';
import { Params } from 'react-router-dom';
import { auth } from '@/app/_lib/auth';
import Reservation from '@/app/_components/Reservation';
import { getCabin } from '@/app/_lib/data-service';


export default async function Page({ params }: { params: Params }) {
    const bookingId = params.reservationId;
    const booking: Booking = await getReservation(bookingId);
    console.log(booking);
    const cabin: Cabin = await getCabin(booking.cabin_id);

    return (
        <div>
            {bookingId}
            <p>Booked cabin id: {booking.cabin_id}</p>
            <Reservation cabin={cabin} />
        </div>
    );
}

