import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDistanceInMeters } from "../../util";

interface RaceTimeState {
  hasSecondRace: boolean;
  inputsComplete: boolean;
  raceOne: {
    distance: number;
    time: number;
  };
  raceTwo: {
    distance: number | undefined;
    time: number | undefined;
  };
}

export const initialState: RaceTimeState = {
  hasSecondRace: false,
  inputsComplete: false,
  raceOne: {
    distance: 5000,
    time: 0,
  },
  raceTwo: {
    distance: undefined,
    time: undefined,
  },
};

const raceTimesSlice = createSlice({
  name: "raceTimes",
  initialState,
  reducers: {
    setRaceOneDistance: ({ raceOne }, { payload }: PayloadAction<string>) => {
      raceOne.distance = getDistanceInMeters(payload);
    },
    setRaceTwoDistance: ({ raceTwo }, { payload }: PayloadAction<string>) => {
      raceTwo.distance = getDistanceInMeters(payload);
    },
    setRaceOneTime: ({ raceOne }, { payload }: PayloadAction<number>) => {
      raceOne.time = payload;
    },
    setRaceTwoTime: ({ raceTwo }, { payload }: PayloadAction<number>) => {
      raceTwo.time = payload;
    },
    setHasSecondRace: (state, { payload }: PayloadAction<boolean>) => {
      state.hasSecondRace = payload;
    },
    setInputsComplete: (state, { payload }: PayloadAction<boolean>) => {
      state.inputsComplete = payload;
    },
    
  },
});

export const {
  setRaceOneTime,
  setRaceTwoTime,
  setRaceOneDistance,
  setRaceTwoDistance,
  setHasSecondRace,
  setInputsComplete
} = raceTimesSlice.actions;
export default raceTimesSlice.reducer;
