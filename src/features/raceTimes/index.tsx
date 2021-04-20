import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { Button, TimeInput } from "../../components/Shared";
import { EtchedH3 } from "../../components/Shared/EtchedText";
import { ButtonWrap, GlassChip, TimeWrap } from "./RaceTimesElements";
import ChipWrap from "./RaceTimesElements/ChipWrap";
import {
  setHasSecondRace,
  setRaceOneTime,
  setRaceOneDistance,
  setRaceTwoTime,
  setRaceTwoDistance,
  setInputsComplete,
} from "./raceTimesSlice";
import { getSecondsFromInput, getHHMMSSFromSeconds } from "./util";

export default function RaceTimes() {
  const dispatch = useDispatch();
  const hasSecondRace = useAppSelector(
    (state) => state.raceTimes.hasSecondRace
  );
  const timeOne = useAppSelector((state) => state.raceTimes.raceOne.time);
  const distanceOne = useAppSelector(
    (state) => state.raceTimes.raceOne.distance
  );

  const [timeValue, setTimeValue] = useState("0:00:00");
  const [distanceValue, setDistanceValue] = useState("");

  // Set first or second race depening on hasSecondRace
  const handleChip = (e: any) => {
    const value = e.target.value;
    if (!hasSecondRace) {
      dispatch(setRaceOneDistance(value));
    } else {
      dispatch(setRaceTwoDistance(value));
    }
    setDistanceValue(value);
  };

  const processTimeValue = (e: any) => {
    const value = e.target.value;
    const seconds = getSecondsFromInput(value);

    dispatch(
      !hasSecondRace ? setRaceOneTime(seconds) : setRaceTwoTime(seconds)
    );

    const processedValue = getHHMMSSFromSeconds(seconds);

    setTimeValue(processedValue);
  };

  const toggleSecondRace = () => {
    setTimeValue(!hasSecondRace ? "0:00:00" : getHHMMSSFromSeconds(timeOne));
    dispatch(setHasSecondRace(!hasSecondRace));
  };

  const calculatePredictions = () => {
    dispatch(setInputsComplete(true));
    dispatch(
      !hasSecondRace
        ? setRaceOneTime(getSecondsFromInput(timeValue))
        : setRaceTwoTime(getSecondsFromInput(timeValue))
    );
  };

  // Disable chips with distance lower than distanceOne
  const ifLowerThanFirst = (type: number): boolean => type <= distanceOne;

  return (
    <div>
      <EtchedH3>
        {!hasSecondRace
          ? "First Race Time & Distance"
          : "Second Race Time & Distance"}
      </EtchedH3>
      <ChipWrap>
        <GlassChip
          disabled={ifLowerThanFirst(5000)}
          selected={distanceValue === "5k"}
          type="5k"
          onClick={handleChip}
        />
        <GlassChip
          disabled={ifLowerThanFirst(10000)}
          selected={distanceValue === "10k"}
          type="10k"
          onClick={handleChip}
        />
        <GlassChip
          disabled={ifLowerThanFirst(21097.5)}
          selected={distanceValue === "13.1"}
          type="13.1"
          onClick={handleChip}
        />
        <GlassChip
          disabled={ifLowerThanFirst(42195)}
          selected={distanceValue === "26.2"}
          type="26.2"
          onClick={handleChip}
        />
      </ChipWrap>
      <TimeWrap>
        <TimeInput
          type="text"
          name="time-input"
          value={timeValue}
          onChange={(e) => setTimeValue(e.target.value)}
          onBlur={processTimeValue}
        />
      </TimeWrap>
      <ButtonWrap>
        <Button onClick={toggleSecondRace}>
          {!hasSecondRace ? "Add Second Race" : "Back"}
        </Button>
        <Button primary onClick={calculatePredictions}>
          Predict
        </Button>
      </ButtonWrap>
    </div>
  );
}
