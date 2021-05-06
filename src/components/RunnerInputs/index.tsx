import React, { ReactElement } from 'react'
import { useAppSelector } from '../../app/hooks'
import Mileage from '../../features/mileage'
import RaceTimes from '../../features/raceTimes'
import { Papyrus } from '../Shared'
import { InputWrap } from './RunnerInputsElements'


export default function RunnerInputs(): ReactElement {
  const mileageSet = useAppSelector(state => state.mileage.averageMileage)
  return (
    <Papyrus>
      <InputWrap>
      {!mileageSet ? <Mileage /> : <RaceTimes />}
      </InputWrap>
    </Papyrus>
  )
}

