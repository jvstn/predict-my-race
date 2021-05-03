import { ReactElement, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { Button, Headline, TimeInput, Title } from '../../components/Shared'
import { MileageSlider, SidePanelWrap } from './SidePanel.styles'
import { getHHMMSSFromSeconds, getSecondsFromInput, processTimeValue } from '../../util'
import { useDispatch } from 'react-redux'
import { setRaceOneTime, setRaceTwoTime } from '../raceTimes/raceTimesSlice'
import { setMileage } from '../mileage/mileageSlice'


function SidePanel(): ReactElement {
  const dispatch = useDispatch()
  // TODO Extract getting times from store into hook
  const {time: timeOne} = useAppSelector(state => state.raceTimes.raceOne)
  const {time: timeTwo} = useAppSelector(state => state.raceTimes.raceTwo)
  // Get typical mileage
  const averageMileage = useAppSelector(state => state.mileage.averageMileage)

  // Create values to be sent to store on
  const [timeOneTemp, setTimeOneTemp] = useState(getHHMMSSFromSeconds(timeOne));
  const [timeTwoTemp, setTimeTwoTemp] =  useState(getHHMMSSFromSeconds(timeTwo));
  const [mileageTemp, setMileageTemp] =  useState(averageMileage);

  const handleTimeInput = (e: any,) => {
    processTimeValue(e, setTimeOneTemp)
    
  }

  const handleUpdate = () => {
    dispatch(setRaceOneTime(getSecondsFromInput(timeOneTemp)))
    timeTwo && dispatch(setRaceTwoTime(getSecondsFromInput(timeTwoTemp)))
    dispatch(setMileage(mileageTemp))
  }

  
  return (
    <SidePanelWrap>
      
      <Title> Tweak Inputs </Title>
      <Headline>Mileage</Headline>
      <Title>{mileageTemp}</Title>
      <MileageSlider
        type="range"
        min="1"
        max="100"
        value={mileageTemp}
        onChange={e => setMileageTemp(Number(e.target.value))}
        data-testid="mileageRange"
      />
      <Headline>Time One</Headline>
      <TimeInput
        value={timeOneTemp}
        onChange={(e) => setTimeOneTemp(e.target.value)}
        onBlur={handleTimeInput}
      />
      {timeTwo && (
        <div>
          <Headline>Time Two</Headline>
          <TimeInput
            value={timeTwoTemp}
            onChange={(e) => setTimeTwoTemp(e.target.value)}
            onBlur={handleTimeInput}
          />
        </div>
      )}
      <Button onClick={handleUpdate}>
        Update times
      </Button>
    </SidePanelWrap>
  );
}

export default SidePanel
