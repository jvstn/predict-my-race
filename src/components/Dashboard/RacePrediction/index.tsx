import { ReactElement } from "react";
import { useAppSelector } from "../../../app/hooks";
import {
  getHHMMSSFromMinutes,
  getHHMMSSFromSeconds,
  getNameFromDistance,
} from "../../../util";
import { useRiegel, useVickVert } from "../../../hooks";
import { Headline } from "../../Shared";
import { RacePace, RaceTitle } from "./Elements";
import TimeCard from "./Elements/TimeCard";

interface RP_Props {
  distance: number;
  multiple: number;
}

function RacePredictions({ distance, multiple }: RP_Props): ReactElement {
  // Get distances of race provided
  const { time: timeOne, distance: distanceOne } = useAppSelector(
    (state) => state.raceTimes.raceOne
  );
  const { time: timeTwo, distance: distanceTwo } = useAppSelector(
    (state) => state.raceTimes.raceTwo
  );

  // Two prediction algorithims, Riegel for all races but marathon
  const riegelTime = getHHMMSSFromSeconds(useRiegel(distance));

  const vickVertTime = getHHMMSSFromSeconds(useVickVert(distance));

  // The predicted pace predicted as mile per min
  const riegelPace = getHHMMSSFromMinutes(
    (useRiegel(distance) / distance) * 26.8224
  );

  const vickVertPace = getHHMMSSFromMinutes(
    (useVickVert(distance) / distance) * 26.8224
  );

  // If distance is marathon use VV else use Riegel
  const showPredictedTime = (distance: number) =>
    distance === 42195 ? vickVertTime : riegelTime;

  // If distance is marathon use VicksVert else use Riegel
  const showPredictedPace = (distance: number) =>
    distance === 42195 ? vickVertPace : riegelPace;

  // If distance is one of times provided show provided else show prediction
  const showProvidedTimeOrPrediction = (distance: number) => {
    if (distance === distanceOne) return getHHMMSSFromSeconds(timeOne);
    if (distance === distanceTwo)
      return timeTwo && getHHMMSSFromSeconds(timeTwo);

    return showPredictedTime(distance);
  };

  const showProvidedPaceOrPrediction = (distance: number) => {
    const paceOne = (timeOne / distance) * 26.8224;
    if (distance === distanceOne) return getHHMMSSFromMinutes(paceOne);
    if (distance === distanceTwo)
      return timeTwo && getHHMMSSFromMinutes((timeTwo / distance) * 26.8224);

    return showPredictedPace(distance);
  };

  return (
    <TimeCard multiple={multiple}>
      <RaceTitle>{getNameFromDistance(distance)}</RaceTitle>
      <Headline>Time</Headline>
      <RacePace>
        {showProvidedTimeOrPrediction(distance)}
      </RacePace>
      <Headline> Pace </Headline>
      <RacePace>
        {`${showProvidedPaceOrPrediction(distance)}/mi`}
      </RacePace>
    </TimeCard>
  );
}

export default RacePredictions;
