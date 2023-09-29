import { configureStore } from '@reduxjs/toolkit';
import { carsApi } from './carSlice';

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    carsApi.middleware,
  ],
});
