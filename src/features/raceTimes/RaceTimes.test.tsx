import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import RaceTimes from "./";

describe("RaceTimes", () => {
  it("should render", () => {
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <RaceTimes />
      </Provider>
    );

    expect(getByDisplayValue(/0:00/)).toBeInTheDocument();
  });
});
describe("RaceTimes Reducers", () => {
  it("should have an initialState of 0", () => {
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <RaceTimes />
      </Provider>
    );
    expect(getByDisplayValue(/0:00/)).toBeInTheDocument();
  });
  it("should set RaceOne time value", () => {
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <RaceTimes />
      </Provider>
    );
    const input = screen.getByDisplayValue("0:00");

    fireEvent.change(input, { target: { value: "1:65:65" } });

    fireEvent.blur(input);

    expect(getByDisplayValue(/2:06:05/)).toBeInTheDocument();
    expect(store.getState().raceTimes.raceOne.time).toBe(7565);
  });
  it("should set RaceOne time value", () => {
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <RaceTimes />
      </Provider>
    );
    const input = screen.getByDisplayValue("0:00");

    fireEvent.change(input, { target: { value: "1:65:65" } });

    fireEvent.blur(input);

    expect(getByDisplayValue(/2:06:05/)).toBeInTheDocument();
    expect(store.getState().raceTimes.raceOne.time).toBe(7565);
  })
  // it("should set raceOne type", () => {

  //const distance = screen.getByText(/10k/i);
  //   const { races } = raceTimesReducer(initialState, setRaceOneType("26.2"));

  //   expect(races.raceOne.type).toBe("26.2");
  // });
  // it("should set raceTwo type", () => {
  //   const { races } = raceTimesReducer(initialState, setRaceTwoType("13.1"));

  //   expect(races.raceTwo.type).toBe("13.1");
  // });
});
