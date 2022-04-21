import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		users: userSlice
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// middleware array de functionalitati care atunci cand pleaca requestul trece prin functii in ordine si ajunge la ultimul
// in general setter/body request/etc
