import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { GlassButton, TimeInput } from "../../components/Shared";
import { EtchedH3 } from "../../components/Shared/EtchedText";
import { ButtonWrap, GlassChip, TimeWrap } from "./RaceTimesElements";
import ChipWrap from "./RaceTimesElements/ChipWrap";
import {
  setHasSecondRace,
  setRaceOneTime,
  setRaceOneDistance,
  setRaceTwoTime,
  setRaceTwoDistance,
  setInputsComplete
} from "./raceTimesSlice";
import { convertInputToSeconds, convertSecondsToHHMMSS } from "./util";

export default function RaceTimes() {
  const dispatch = useDispatch();
  const hasSecondRace = useAppSelector(
    (state) => state.raceTimes.hasSecondRace
  );
  const timeOne = useAppSelector(
    (state) => state.raceTimes.raceOne.time
  );

  const [timeValue, setTimeValue] = useState<string>("0:00:00");
  const [distanceValue, setDistanceValue] = useState<string>("");

  const handleChip = (e: any) => {
    const value = e.target.value
    if (!hasSecondRace) {
      dispatch(setRaceOneDistance(value));
    } else {
      dispatch(setRaceTwoDistance(value));
    }
    setDistanceValue(value)
  };
  const processTimeValue = (e: any) => {
    const value = e.target.value;
    const seconds = convertInputToSeconds(value);

    dispatch(
      !hasSecondRace ? setRaceOneTime(seconds) : setRaceTwoTime(seconds)
    );

    const processedValue = convertSecondsToHHMMSS(seconds);

    setTimeValue(processedValue);
  };

  const handleSecondRace = () => {
    setTimeValue(!hasSecondRace ? "0:00:00" : convertSecondsToHHMMSS(timeOne));
    dispatch(setHasSecondRace(!hasSecondRace))
  };
  
  const calculatePredictions = () => {
    dispatch(setInputsComplete(true))
    dispatch(
      !hasSecondRace ? setRaceOneTime(convertInputToSeconds(timeValue)) : setRaceTwoTime(convertInputToSeconds(timeValue))
    );
  }

  return (
    <div>
      
        <EtchedH3>
          {!hasSecondRace
            ? "First Race Time & Distance"
            : "Second Race Time & Distance"}
        </EtchedH3>
        <ChipWrap>
          <GlassChip selected={distanceValue === "5k"} type="5k" onClick={handleChip} />
          <GlassChip selected={distanceValue === "10k"} type="10k" onClick={handleChip} />
          <GlassChip selected={distanceValue === "13.1"}  type="13.1" onClick={handleChip} />
          <GlassChip selected={distanceValue === "26.2"}  type="26.2" onClick={handleChip} />
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
          <GlassButton onClick={!hasSecondRace ? calculatePredictions : handleSecondRace}>
            {!hasSecondRace ? 'Use One Race' : 'Back' }
          </GlassButton>
          <GlassButton accent onClick={!hasSecondRace ? handleSecondRace : calculatePredictions}>
            {!hasSecondRace ?'Next' : 'Predict'}
          </GlassButton>
        </ButtonWrap>

    </div>
  );
}
