import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    access_token: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.access_token = action.payload.access_token;
            state.user = action.payload.userData;
        }
    },
});


export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;