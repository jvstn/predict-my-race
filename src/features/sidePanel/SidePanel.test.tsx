import React from "react";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import SidePanel from "./";
import { setRaceOneTime, setRaceTwoDistance, setRaceTwoTime } from "../raceTimes/raceTimesSlice";
import { setMileage } from "../mileage/mileageSlice";
import { getHHMMSSFromSeconds } from "../../util";

describe("SidePanel", () => {
  it("should render", () => {
    const { getByText } = render(
      <Provider store={store}>
        <SidePanel />
      </Provider>
    );
    expect(getByText(/Tweak Inputs/)).toBeInTheDocument();
  });
});
describe("SidePanel State", () => {
  it("should render time One", () => {
    store.dispatch(setMileage(30));
    store.dispatch(setRaceOneTime(1260));

    const { getByDisplayValue } = render(
      <Provider store={store}>
        <SidePanel />
      </Provider>
    );


    expect(getByDisplayValue(/21:00/)).toBeInTheDocument();
  });

  it("should render time One and time Two", () => {
    store.dispatch(setMileage(30));
    store.dispatch(setRaceOneTime(1260));
    store.dispatch(setRaceTwoDistance('10k'));
    store.dispatch(setRaceTwoTime(2580));

    const { getByDisplayValue} = render(
      <Provider store={store}>
        <SidePanel />
      </Provider>
    );
    


    expect(getByDisplayValue(/21:00/)).toBeInTheDocument();
    expect(getByDisplayValue(/43:00/)).toBeInTheDocument();
  });
  
  it("should alter state when given new time one input", async () => {
    store.dispatch(setMileage(30));
    store.dispatch(setRaceOneTime(1260));
    store.dispatch(setRaceTwoDistance('10k'));
    store.dispatch(setRaceTwoTime(2580));

    const { getByDisplayValue, getByRole} = render(
      <Provider store={store}>
        <SidePanel />
      </Provider>
    );
    const timeOneInput = getByDisplayValue(/21:00/)
    
    // User input with too many seconds
    fireEvent.change(timeOneInput, { target: { value: '21:65' } })
    
    fireEvent.blur(timeOneInput)

    // Expect blur handler to validate user input to correct HH:MM:SS 
    expect(getByDisplayValue(/22:05/)).toBeInTheDocument();
    
    fireEvent.click(getByRole('button'))
    
    const { time: timeOne } = store.getState().raceTimes.raceOne;
    
    expect(timeOne).toBe(1325)
  });

  it("should alter state when given new time two input", async () => {
    store.dispatch(setMileage(30));
    store.dispatch(setRaceOneTime(1260));
    store.dispatch(setRaceTwoDistance('10k'));
    store.dispatch(setRaceTwoTime(2580));

    const { getByDisplayValue, getByRole} = render(
      <Provider store={store}>
        <SidePanel />
      </Provider>
    );
    const timeTwoInput = getByDisplayValue(/43:00/)
    
    // User input with too many seconds
    fireEvent.change(timeTwoInput, { target: { value: '43:75' } })
    
    fireEvent.blur(timeTwoInput)

    // Expect blur handler to validate user input to correct HH:MM:SS 
    expect(getByDisplayValue(/44:15/)).toBeInTheDocument();
    
    fireEvent.click(getByRole('button'))

    const { time: timeTwo } = store.getState().raceTimes.raceTwo;
    
    expect(timeTwo).toBe(2655)
  });

  it('should change mileage with range input', () => {
    store.dispatch(setMileage(30));
    store.dispatch(setRaceOneTime(1260));
    store.dispatch(setRaceTwoDistance("10k"));
    store.dispatch(setRaceTwoTime(2580));

    const { getByTestId, getByRole } = render(
      <Provider store={store}>
        <SidePanel />
      </Provider>
    );

    const slider = getByTestId(/mileageRange/);

    fireEvent.change(slider, { target: { value: 56 } })

    fireEvent.click(getByRole("button"))
    
    const mileageState = store.getState().mileage.averageMileage

    expect(mileageState).toBe(56);

  })

});
