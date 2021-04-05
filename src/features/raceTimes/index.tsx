import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { TimeInput } from "../../components/Shared";
import GlassPane from "../../components/Shared/GlassPane";
import ChipWrap from "./RaceTimesElements/ChipWrap";
import { GlassChip } from "./RaceTimesElements/GlassChip";
import { TimeWrap } from "./RaceTimesElements/TimeWrap";
import { setRaceOneTime, setRaceOneType, setRaceTwoTime, setRaceTwoType } from "./raceTimesSlice";
import { convertInputToSeconds, convertSecondsToHHMMSS } from "./util";

export default function RaceTimes() {
  const dispatch = useDispatch();
  const hasSecondRace = useAppSelector(
    (state) => state.raceTimes.hasSecondRace
  );

  const [timeValue, setTimeValue] = useState<any>("0:00");

  const handleChip = (e: any) => {
    if (!hasSecondRace) {
      dispatch(setRaceOneType(e.target.value));
    } else {
      dispatch(setRaceTwoType(e.target.value));
    }
  }
  const processTimeValue = (e: any) => {
    const value = e.target.value;
    const seconds = convertInputToSeconds(value)

    dispatch(!hasSecondRace ? setRaceOneTime(seconds) : setRaceTwoTime(seconds))

    const processedValue = convertSecondsToHHMMSS(seconds)
    
    setTimeValue(processedValue)
    };
  return (
    <div>
      <GlassPane>
        <ChipWrap>
          <GlassChip type="10k" onClick={handleChip} />
          <GlassChip type="5k" onClick={handleChip} />
          <GlassChip type="13.1" onClick={handleChip} />
          <GlassChip type="26.2" onClick={handleChip} />
        </ChipWrap>
        <TimeWrap>
          <TimeInput
            type="text"
            name='time-input'
            value={timeValue}
            onChange={(e) => setTimeValue(e.target.value)}
            onBlur={processTimeValue}
          />
        </TimeWrap>
      </GlassPane>
    </div>
  );
}
