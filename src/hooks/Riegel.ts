import { useAppSelector } from "../app/hooks"
import { findFatigueFactor } from "./util"

export const useRiegel = (newDistance: number) =>  {
  const { time: timeOne, distance: distanceOne} = useAppSelector((state) => state.raceTimes.raceOne)
  const { time: timeTwo, distance: distanceTwo } = useAppSelector((state) => state.raceTimes.raceTwo)
  
  let fatigueFactor = 1.07

  if (timeTwo && distanceTwo) {
    fatigueFactor = findFatigueFactor(timeOne, timeTwo, distanceOne, distanceTwo);
  }

  return riegelFormula(timeOne, distanceOne, newDistance, fatigueFactor)
}

export const riegelFormula = (
  timeOne: number,
  distanceOne: number,
  newDistance: number,
  fatigueFactor: number
) =>
  timeOne * Math.pow(newDistance / distanceOne, fatigueFactor);