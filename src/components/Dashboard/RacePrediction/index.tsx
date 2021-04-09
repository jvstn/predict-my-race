import React, { ReactElement } from 'react'
import { convertSecondsToHHMMSS } from '../../../features/raceTimes/util'
import { useRiegel } from '../../../hooks/Riegel'
import { useVickVert } from '../../../hooks/VickVert'

interface RP_Props {
  distance: number
}

function RacePredictions({ distance }: RP_Props): ReactElement {
  // Two prediction algorithims, Riegel used if not marathon else VickVert

  const riegelEstimate = convertSecondsToHHMMSS(useRiegel(distance))
  const vickVertEstimate = convertSecondsToHHMMSS(useVickVert(distance))

  return (
    <div>
      {distance === 42195 ? vickVertEstimate : riegelEstimate}
    </div>
  )
}

export default RacePredictions
