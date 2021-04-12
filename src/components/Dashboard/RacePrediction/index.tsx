import  { ReactElement } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { getHHMMSSFromMinutes, getHHMMSSFromSeconds } from '../../../features/raceTimes/util'
import { useRiegel, useVickVert } from '../../../hooks'
import Card from '../../Shared/TimeCard'

interface RP_Props {
  distance: number
}

function RacePredictions({ distance }: RP_Props): ReactElement {
  // Get distances of race provided
  const {time: timeOne, distance: distanceOne} = useAppSelector(state => state.raceTimes.raceOne)
  const {time: timeTwo, distance: distanceTwo} = useAppSelector(state => state.raceTimes.raceTwo)

  // Two prediction algorithims, Riegel for all races but marathon
  const riegelTime = getHHMMSSFromSeconds(useRiegel(distance))
  
  const vickVertTime = getHHMMSSFromSeconds(useVickVert(distance))

  // The predicted pace predicted as mile per min
  const riegelPace = getHHMMSSFromMinutes((useRiegel(distance) / distance) * 26.8224)
  
  const vickVertPace = getHHMMSSFromMinutes((useVickVert(distance) / distance) * 26.8224)

  // If distance is marathon use VV else use Riegel
  const showPredictedTime = (distance: number) => distance === 42195 ? vickVertTime : riegelTime 

  // If distance is marathon use VicksVert else use Riegel
  const showPredictedPace = (distance: number) => distance === 42195 ? vickVertPace : riegelPace 

// If distance is one of times provided show provided else show prediction
  const showProvidedTimeOrPrediction = (distance: number) => {
    if (distance === distanceOne) return getHHMMSSFromSeconds(timeOne)
    if (distance === distanceTwo) return timeTwo && getHHMMSSFromSeconds(timeTwo)
    
    return showPredictedTime(distance)
  }

  const showProvidedPaceOrPrediction = (distance: number) => {
    const paceOne = (timeOne / distance) * 26.8224 
    if (distance === distanceOne) return getHHMMSSFromMinutes(paceOne)
    if (distance === distanceTwo) return timeTwo && getHHMMSSFromMinutes((timeTwo / distance) * 26.8224);
    
    return showPredictedPace(distance)
  }

  return (
      <Card>
        <h4 style={{color: 'white'}}>
          Time
        </h4>
        <h1 style={{color: 'white'}}>
        {showProvidedTimeOrPrediction(distance)}
        </h1>
        <h4 style={{color: 'white'}}> Pace </h4>
        <h1 style={{color: 'white'}}>
        {showProvidedPaceOrPrediction(distance)}
        </h1>
      </Card>
  )
  
}

export default RacePredictions
