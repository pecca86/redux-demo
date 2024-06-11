
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signUp } from '../../services/apiAuth';

export const useSignUp = () => {
    const { mutate: registerUser, isLoading } = useMutation({
        mutationFn: signUp,
        onSuccess: (user) => {
            console.log("Created user", user);
            toast.success('Sign up successful');
        },
        onError: (error) => {
            console.error(error);
            toast.error('Sign up failed');
        }
    });

    return { registerUser, isLoading };
}

