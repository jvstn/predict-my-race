import { useAppSelector } from "../app/hooks"
import { findFatigueFactor } from "./util"

export const useRiegel = (newDistance: number) =>  {
  // Get state from Redux store
  const { time: timeOne, distance: distanceOne} = useAppSelector((state) => state.raceTimes.raceOne)
  const { time: timeTwo, distance: distanceTwo } = useAppSelector((state) => state.raceTimes.raceTwo)
  
  // Average fatigue factor commonly accepted
  let fatigueFactor = 1.07

  // If user gives two races calculate the FF
  if (timeTwo && distanceTwo) {
    fatigueFactor = findFatigueFactor(timeOne, timeTwo, distanceOne, distanceTwo);
  }

  // Return Prediction
  return riegelFormula(timeOne, distanceOne, newDistance, fatigueFactor)
}

// Implement algo found here http://bit.ly/marathon-algos
export const riegelFormula = (
  timeOne: number,
  distanceOne: number,
  newDistance: number,
  fatigueFactor: number
) =>
  timeOne * Math.pow(newDistance / distanceOne, fatigueFactor);