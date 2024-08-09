import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '../api/getRepo';
import SearchQueryReducer from './slice/QuerySlice';

export const store = configureStore({
  reducer: {
    searchQuery: SearchQueryReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
