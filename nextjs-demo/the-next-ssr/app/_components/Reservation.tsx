import React from 'react';
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getCabin, getSettings, getBookedDatesByCabinId } from "@/app/_lib/data-service";
import { auth } from '../_lib/auth';
import LoginMessage from './LoginMessage';

const Reservation = async ({ cabin }: { cabin: Cabin }) => {
    const [settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id)
    ]);

    const session = await auth();

    return (
        <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
            <DateSelector settings={settings} />
            {session?.user ? (
                <ReservationForm cabin={cabin} user={session.user} />
            ) : (
                <LoginMessage />
            )}
        </div>
    );
}

export default Reservation;
