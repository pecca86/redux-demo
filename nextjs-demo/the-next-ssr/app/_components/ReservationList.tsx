"use client";

import React from 'react';
import ReservationCard from './ReservationCard';
import { useOptimistic } from 'react';
import { deleteReservation } from '../_lib/actions';


const ReservationList = ({ bookings }: { bookings: Booking[] }) => {
    
    // keep track of the optimistic state and actual state
    // first param is the current state, second is the update function
    // if the actual operation fails, the data will be put back
    const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (currentBookings, bookingId) => { 
        return currentBookings.filter(booking => booking.id !== bookingId);
        // adding a new booking would be like this:
        // return [...currentBookings, newBooking];
    });

    async function handleDelete(bookingId: number) {
        optimisticDelete(bookingId);
        await deleteReservation(bookingId);
    }

    return (
        <div>
            <ul className="space-y-6">
                {optimisticBookings.map((booking) => (
                    <ReservationCard booking={booking} key={booking.id} onDelete={handleDelete}/>
                ))}
            </ul>
        </div>
    );
}

export default ReservationList;
