import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignUp } from './useSignUp';

const SignUpForm = () => {
    const { register, formState, handleSubmit, reset } = useForm();
    const { errors } = formState;
    const { registerUser, isLoading } = useSignUp();

    const onSubmit = ({ name, email, password }) => {
        console.log('onSubmit ', name, email, password);
        registerUser({email, password, name}, {
            onSettled: () => {
                reset();
            }
        });
    }

    if (isLoading) {
        return <p>Signing up...</p>;
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Name"
                    {...register('name', { required: "Name is required" })}
                />
                {errors?.name?.message}
                <input
                    type="email"
                    placeholder="Email" {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please provide a valid email address",
                        },
                    })}
                />
                {errors?.email?.message}
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors?.password?.message}
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
