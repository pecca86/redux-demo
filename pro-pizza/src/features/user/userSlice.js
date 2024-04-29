import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

const initialState = {
    userName: '',
    email: '',
    password: '',
    status: 'idle',
    position: null,
    address: null,
    error: ''
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
    // REDUX THUNK EXAMPLE (AKA MIDDLEWARE)
    extraReducers: (builder) => builder
    .addCase(
        fetchAddress.pending,
        (state, action) => {
            state.status = 'loading'
            console.log(action);
        }
    )
    .addCase(
        fetchAddress.fulfilled,
        (state, action) => {
            state.status = 'idle';
            state.position = action.payload.position;
            state.address = action.payload.address;
        }
    )
    .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
    })
});

function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// REDUX THUNK EXAMPLE (AKA MIDDLEWARE)
export const fetchAddress = createAsyncThunk(
    'user/fetchAddress',
    async function () {
        // 1) We get the user's geolocation position
        const positionObj = await getPosition();
        const position = {
            latitude: positionObj.coords.latitude,
            longitude: positionObj.coords.longitude,
        };

        // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
        const addressObj = await getAddress(position);
        const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

        // 3) Then we return an object with the data that we are interested in.
        // Payload of the FULFILLED state
        return { position, address };
    }
);

export const { updateName } = userSlice.actions;
export default userSlice.reducer;