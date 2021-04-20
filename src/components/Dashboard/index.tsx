import { ReactElement } from 'react'
import RacePredictions from './RacePrediction';
import { CardWrap } from './Elements';
import BackgroundDiv from './Elements/BackgroundDiv';
import SidePanel from '../../features/sidePanel';

interface Props {
  
}

function Dashboard(): ReactElement {
  return (
    <BackgroundDiv>
    <CardWrap>
      <RacePredictions distance={5000} />
      <RacePredictions distance={10000} />
      <RacePredictions distance={21097.5} />
      <RacePredictions distance={42195} />
    </CardWrap>
    <SidePanel />
    </BackgroundDiv>
  );
}

export default Dashboard
