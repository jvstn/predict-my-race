import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RaceTimeState {
  hasSecondRace: boolean;
  raceOne: {
    type: string;
    time: number;
  };
  raceTwo: {
    type: string | undefined;
    time: number | undefined;
  };
}

export const initialState: RaceTimeState = {
  hasSecondRace: false,
  raceOne: {
    type: "5k",
    time: 0,
  },
  raceTwo: {
    type: undefined,
    time: undefined,
  },
};

const raceTimesSlice = createSlice({
  name: "raceTimes",
  initialState,
  reducers: {
    setRaceOneType: ({ raceOne }, { payload }: PayloadAction<string>) => {
      raceOne.type = payload;
    },
    setRaceTwoType: ({ raceTwo }, { payload }: PayloadAction<string>) => {
      raceTwo.type = payload;
    },
    setRaceOneTime: ({ raceOne }, { payload }: PayloadAction<number>) => {
      raceOne.time = payload;
    },
    setRaceTwoTime: ({ raceTwo }, { payload }: PayloadAction<number>) => {
      raceTwo.time = payload;
    },
    setHasSecondRace: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.hasSecondRace = payload;
    }
  }
});

export const {
  setRaceOneTime,
  setRaceTwoTime,
  setRaceOneType,
  setRaceTwoType,
  setHasSecondRace,
} = raceTimesSlice.actions;
export default raceTimesSlice.reducer;
