import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    address: '',
    createdAt: ''
};

const accountSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer: {
            prepare: (name, address) => {
                return {
                    payload: { name, address }
                };
            },
            reducer: (state, action) => {
                state.name = action.payload.name;
                state.address = action.payload.address;
                state.createdAt = new Date().toISOString();
            },
        },
        updateCustomer: {
            prepare: (name, address) => {
                return {
                    payload: { name, address }
                };
            },
            reducer: (state, action) => {
                state.name = action.payload.name;
                state.address = action.payload.address;
            }
        }
    }
});

export default accountSlice.reducer;
export const { createCustomer, updateCustomer } = accountSlice.actions;