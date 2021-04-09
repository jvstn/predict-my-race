import { useAppSelector } from "../app/hooks";
import { riegelFormula } from "./Riegel";
import { findFatigueFactor } from "./util";

export const useVickVert = (newDistance: number) => {
  const { time: timeOne, distance: distanceOne } = useAppSelector(
    (state) => state.raceTimes.raceOne
  );
  const { time: timeTwo, distance: distanceTwo } = useAppSelector(
    (state) => state.raceTimes.raceTwo
  );
  const {averageMileage} = useAppSelector((state) => state.mileage)

  let marathonMeters = 42195
  let fatigueFactor = 1.07;

  if (timeTwo && distanceTwo) {
    fatigueFactor = findFatigueFactor(
      timeOne,
      timeTwo,
      distanceOne,
      distanceTwo
    );
  }

  const velocityRiegel =
    marathonMeters / riegelFormula(timeOne, distanceOne, marathonMeters, fatigueFactor)
  
  const velocityVickVert = 0.16018617 + (0.83076202 * velocityRiegel) + 0.064238 * (averageMileage / 10);
  
  const predictionWithOne = (marathonMeters / 3600) / velocityVickVert

  const vickVertFatigue = 1.4510756 + (-0.23797948 * fatigueFactor) + (-0.01410023 * (averageMileage / 10))
  
  const predictionWithTwo = timeTwo && distanceTwo && riegelFormula(timeTwo, distanceTwo, marathonMeters, vickVertFatigue)

  return timeTwo && distanceTwo
    ? predictionWithTwo
    : predictionWithOne;
};
