import React from 'react'
import { useAppSelector } from '../../app/hooks'
import Mileage from '../../features/mileage'
import RaceTimes from '../../features/raceTimes'
import GlassPane from '../Shared/GlassPane'


export default function RunnerInputs() {
  const mileageSet = useAppSelector(state => state.mileage.averageMileage)
  return (
    <GlassPane>
      {!mileageSet ? <Mileage /> : <RaceTimes />}
      
    </GlassPane>
  )
}

