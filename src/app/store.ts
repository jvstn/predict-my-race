import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import mileageReducer from '../features/mileage/mileageSlice';
import raceTimesReducer from '../features/raceTimes/raceTimesSlice';

export const store = configureStore({
  reducer: {
    mileage: mileageReducer,
    raceTimes: raceTimesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
