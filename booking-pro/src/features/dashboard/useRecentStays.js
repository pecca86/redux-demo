
import { subDays } from 'date-fns';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getStaysAfterDate } from '../../services/apiBookings';

export const useRecentStays = () => {
    const [searchParams] = useSearchParams();

    const numDays = !searchParams.get('last') ? 7 : Number(searchParams.get('last'));

    const queryDate = subDays(new Date(), numDays).toISOString();

    const { isLoading, data: stays } = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ['stays', `last-${numDays}`]
    });

    return { isLoading, stays };
}
