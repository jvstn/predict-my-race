import { ReactElement } from 'react'
import RacePredictions from './RacePrediction';
import { CardWrap, BackgroundDiv } from './Elements';
import SidePanel from '../../features/sidePanel';
import Navbar from './Navbar';


function Dashboard(): ReactElement {
  return (
    <BackgroundDiv>
    <Navbar />
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
