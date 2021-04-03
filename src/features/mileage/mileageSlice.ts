import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MileageState {
  averageMileage: number;
}
export const initialState: MileageState = {
  averageMileage: 0,
};

const MilageSlice = createSlice({
  name: "mileage",
  initialState,
  reducers: {
    setMileage: (state, { payload }: PayloadAction<number>) => {
      state.averageMileage = payload;
    },
  },
});

export const { setMileage } = MilageSlice.actions;
export default MilageSlice.reducer;
