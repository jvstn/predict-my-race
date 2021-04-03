import React from "react";
import mileageReducer, { setMileage, initialState } from "./mileageSlice";
import { render } from "@testing-library/react";
import Mileage from "./";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Mileage", () => {
  it("should render", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Mileage />
      </Provider>
    );

    expect(getByText(/Add Mileage/)).toBeInTheDocument();
  });
  describe("Mileage Reducers", () => {
    it("should have an initial state of zero", () => {
      const { averageMileage } = initialState;
      expect(averageMileage).toBe(0);
    });

    it("should set state to disptached", () => {
      const { averageMileage } = mileageReducer(initialState, setMileage(30));
      expect(averageMileage).toBe(30);
    });
  });
});
