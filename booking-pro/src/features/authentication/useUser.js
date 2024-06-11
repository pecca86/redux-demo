import { useQuery } from '@tanstack/react-query';
import { getCurrenUser } from '../../services/apiAuth';

export function useUser() {
    const { isLoading, data: user, error } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrenUser
    });

    return {
        isLoading,
        user,
        isAuthenticated: user?.role === 'authenticated',
    };
}