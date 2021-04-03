import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import mileageReducer from '../features/mileage/mileageSlice';

export const store = configureStore({
  reducer: {
    mileage: mileageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
