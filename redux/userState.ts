import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface UserState {
    username : string,
}

const initialState: UserState = {
    username : '',
}

export const userSlice = createSlice({
    name: 'Username',
    initialState,
    reducers : {
        SetUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
            console.log('username set : ', action.payload)
        },
    },
})

export const { SetUsername } = userSlice.actions

export const SelectUser = (state: RootState) => state.user

export default userSlice.reducer