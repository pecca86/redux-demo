import React from 'react';
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getCabin, getSettings, getBookedDatesByCabinId } from "@/app/_lib/data-service";

const Reservation = async ({cabin}: {cabin: Cabin}) => {
    // const settings: Settings = await getSettings();
    // const bookedDates = await getBookedDatesByCabinId(cabin.id);
    const [settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id)
    ]);


    return (
        <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
            <DateSelector settings={settings}/>
            <ReservationForm cabin={cabin} />
        </div>
    );
}

export default Reservation;
