import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    loading: false
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload;
            state.loading = false;
        },
        addingSecretBonus: (state) => {
            state.loading = true;
        },
        withdraw: (state, action) => {
            state.balance -= action.payload;
        },
        loanRequest: {
            prepare: (amount, loanPurpose) => {
                return {
                    payload: { amount, loanPurpose }
                };
            },
            reducer: (
                state, action) => {
                state.loan += action.payload.amount;
                state.loanPurpose = action.payload.loanPurpose;
                state.balance += action.payload.amount;
            },
        },
        loanPay: (state, action) => {
            state.loan -= action.payload;
        }
    }
});

export const deposit = (amount) => {
    return async (dispatch) => {
        dispatch(addingSecretBonus());
        setTimeout(() => {
            dispatch(accountSlice.actions.deposit(amount + 11));
        }, 2000);
    };
};

export default accountSlice.reducer;
export const { addingSecretBonus, withdraw, loanRequest, loanPay } = accountSlice.actions;