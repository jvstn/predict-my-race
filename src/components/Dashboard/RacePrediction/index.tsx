import React, { ReactElement } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { convertSecondsToHHMMSS as getHHMMSSFromSeconds } from '../../../features/raceTimes/util'
import { useRiegel } from '../../../hooks/Riegel'
import { useVickVert } from '../../../hooks/VickVert'
import Card from '../../Shared/TimeCard'
import { CardWrap } from '../Elements'

interface RP_Props {
  distance: number
}

function RacePredictions({ distance }: RP_Props): ReactElement {
  // Get distances of race provided
  const {time: timeOne, distance: distanceOne} = useAppSelector(state => state.raceTimes.raceOne)
  const {time: timeTwo, distance: distanceTwo} = useAppSelector(state => state.raceTimes.raceTwo)

  // Two prediction algorithims, Riegel for all races but marathon
  const riegelEstimate = getHHMMSSFromSeconds(useRiegel(distance))
  const vickVertEstimate = getHHMMSSFromSeconds(useVickVert(distance))

  // If distance is marathon use VV else use Riegel
  const showPrediction = (distance: number) => distance === 42195 ? vickVertEstimate : riegelEstimate 

// If distance is one of times provided show provided else show prediction
  const showProvidedTimeOrPrediction = (distance: number) => {
    if (distance === distanceOne) return getHHMMSSFromSeconds(timeOne)
    if (distance === distanceTwo) return timeTwo && getHHMMSSFromSeconds(timeTwo)
    
    return showPrediction(distance)
  }

  return (
      <Card>
        <h1 style={{color: 'white'}}>
        {showProvidedTimeOrPrediction(distance)}
        </h1>
      </Card>
  )
  
}

export default RacePredictions
