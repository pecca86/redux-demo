"use client";

import React, { createContext, useState, useContext } from 'react';

const ReservationContext = createContext({

});

const initialState = {
    from: null,
    to: null
}

function ReservationProvider({ children }: { children: React.ReactNode }) {
    const [range, setRange] = useState(initialState);
    const resetRange = () => setRange(initialState);

    return (
        <ReservationContext.Provider value={{ range, setRange, resetRange }}>
            {children}
        </ReservationContext.Provider>
    );
}


function useReservation(): any {
    const context = useContext(ReservationContext);
    if (context === undefined) {
        throw new Error('useReservation must be used within a ReservationProvider');
    }
    return context;
}

export { ReservationProvider, useReservation };