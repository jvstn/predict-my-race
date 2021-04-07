import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { GlassButton, TimeInput } from "../../components/Shared";
import { EtchedH3 } from "../../components/Shared/EtchedText";
import GlassPane from "../../components/Shared/GlassPane";
import ChipWrap from "./RaceTimesElements/ChipWrap";
import { GlassChip } from "./RaceTimesElements/GlassChip";
import { TimeWrap } from "./RaceTimesElements/TimeWrap";
import {
  setHasSecondRace,
  setRaceOneTime,
  setRaceOneType,
  setRaceTwoTime,
  setRaceTwoType,
} from "./raceTimesSlice";
import { convertInputToSeconds, convertSecondsToHHMMSS } from "./util";

export default function RaceTimes() {
  const dispatch = useDispatch();
  const hasSecondRace = useAppSelector(
    (state) => state.raceTimes.hasSecondRace
  );

  const [timeValue, setTimeValue] = useState<string>("0:00:00");

  const handleChip = (e: any) => {
    if (!hasSecondRace) {
      dispatch(setRaceOneType(e.target.value));
    } else {
      dispatch(setRaceTwoType(e.target.value));
    }
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
    setTimeValue("0:00:00");
    dispatch(setHasSecondRace(!hasSecondRace))
  };
  const calculatePredictions = () => {
    
  }
  return (
    <div>
      <GlassPane>
        <EtchedH3>
          {!hasSecondRace
            ? "First Race Time & Distance"
            : "Second Race Time & Distance"}
        </EtchedH3>
        <ChipWrap>
          <GlassChip type="10k" onClick={handleChip} />
          <GlassChip type="5k" onClick={handleChip} />
          <GlassChip type="13.1" onClick={handleChip} />
          <GlassChip type="26.2" onClick={handleChip} />
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
        <GlassButton onClick={calculatePredictions}>Use Only One Race</GlassButton>
        <GlassButton onClick={handleSecondRace}>Add Second Race</GlassButton>
      </GlassPane>
    </div>
  );
}
