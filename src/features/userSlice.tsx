import { createSlice } from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface UserState {
	usersList: any[]; // here we should have a list of userModel that came from request
}
const initialState: UserState = {usersList: []}; // set initial state
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// actions
		setUsersList: (state, action) => {
			state.usersList = action.payload;
		}
	}
});
export const {setUsersList} = userSlice.actions;
export const getUsersLIst = (state: RootState) => state.users.usersList;
export default userSlice.reducer;
