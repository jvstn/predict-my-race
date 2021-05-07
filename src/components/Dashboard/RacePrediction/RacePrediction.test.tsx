import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import RacePrediction from ".";
import {
  setRaceOneTime,
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
    const multiple = 1.3
    const { getByText } = render(
      
      <Provider store={store}>
        <RacePrediction multiple={multiple} distance={5000} />
        <RacePrediction multiple={multiple} distance={10000} />
        <RacePrediction multiple={multiple} distance={21097} />
        <RacePrediction multiple={multiple} distance={42195} />
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
    const multiple = 1.3;
    const { getByText } = render(
      <Provider store={store}>
        <RacePrediction multiple={multiple} distance={5000} />
        <RacePrediction multiple={multiple} distance={10000} />
        <RacePrediction multiple={multiple} distance={42195} />
      </Provider>
    );
    
    // Test Marthon prediction
    expect(getByText(/3:47:36/i)).toBeInTheDocument();
  });
});
