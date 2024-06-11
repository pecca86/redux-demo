
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/apiAuth'
import { toast } from 'react-hot-toast';

export function useLogin() {
    // cache the result using react-query
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: signIn, isLoading } = useMutation
        (
            {
                mutationFn: ({ email, password }) => login({ email, password }),
                onSuccess: (data) => {
                    queryClient.setQueryData(['user'], data.user); // if another component is using the same query key, it will be updated or fetched from the cache
                    navigate('/dashboard');
                },
                onError: (error) => {
                    console.error(error);
                    toast.error('Login failed');
                }
            }
        )
        return { signIn, isLoading };
}