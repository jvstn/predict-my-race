import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../../app/store";
import RacePredictions from "./";
import raceTimesReducer, {
  setRaceOneTime,
  initialState,
  setRaceOneDistance,
  setRaceTwoTime,
  setRaceTwoDistance,
} from "../../../features/raceTimes/raceTimesSlice";
import { setMileage } from "../../../features/mileage/mileageSlice";

describe("RacePredictions", () => {
  it("should show predictions from one race in HHMMSS", () => {
    // Set typical mileage
    store.dispatch(setMileage(30));

    // Set race one time and distance
    store.dispatch(setRaceOneTime(1268));
    store.dispatch(setRaceOneDistance("5k"));

    // Render components
    const { getByText } = render(
      <Provider store={store}>
        <RacePredictions distance={5000} />
        <RacePredictions distance={10000} />
        <RacePredictions distance={21097} />
        <RacePredictions distance={42195} />
      </Provider>
    );

    // Test Marathon Prediction
    expect(getByText(/3:41:32/i)).toBeInTheDocument();
  });

  it("should show predictions from one race in HHMMSS", () => {
    // Set typical mileage
    store.dispatch(setMileage(30));

    // Set time and distance for race one
    store.dispatch(setRaceOneTime(1268));
    store.dispatch(setRaceOneDistance("5k"));

    // Set time and distance for race two
    store.dispatch(setRaceTwoTime(2526));
    store.dispatch(setRaceTwoDistance("10k"));

    // Render components
    const { getByText } = render(
      <Provider store={store}>
        <RacePredictions distance={5000} />
        <RacePredictions distance={10000} />
        <RacePredictions distance={42195} />
      </Provider>
    );
    
    // Test Marthon prediction
    expect(getByText(/3:46:42/i)).toBeInTheDocument();
  });
});
