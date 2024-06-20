"use client"

import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteReservation } from '../_lib/actions';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

type BookingId = {
    bookingId: number | string;
};

function DeleteReservation({ bookingId }: BookingId) {

    const [isPending, startTransition] = useTransition();

    function handleDelete() {
        if (confirm('Sure you want to delete this reservation?') === false) return;
        // wrapping this into startTransition allows react to keep track on the state change and provide us with a pending state that we can use to show a spinner or something
        startTransition(() => {
            deleteReservation(Number(bookingId));
        });
    }

    return (
        <button onClick={handleDelete} disabled={isPending} className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
            {   isPending ?
                <SpinnerMini /> :
                (<TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />)
            }
            <span className='mt-1'>Delete</span>
        </button>
    );
}

export default DeleteReservation;
