import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    email: '',
    password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            const { userName, email, password } = action.payload;
            state.userName = userName;
            state.email = email;
            state.password = password;
        },
    },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;