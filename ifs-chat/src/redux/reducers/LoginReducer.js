//Save username action and reducer 

import { createSlice } from '@reduxjs/toolkit';

const initialState = { username: '' }

const SaveLoginInfoSlice = createSlice({

    name: 'mySaveContact',
    initialState,
    reducers: {
        saveLoginInfo(state) {
            state.username = '';
        },
        saveLoginInfoSuccess(state, action) {
            state.username = action.payload.username;
        },
    },
});

export const { saveLoginInfo ,saveLoginInfoSuccess} = SaveLoginInfoSlice.actions;

export default SaveLoginInfoSlice.reducer;
