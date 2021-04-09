import React, { ReactElement } from 'react'
import RacePredictions from './RacePrediction';

interface Props {
  
}

function Dashboard(): ReactElement {
  return (
    <div>
      <RacePredictions distance={5000} />
      <RacePredictions distance={10000} />
      <RacePredictions distance={21097} />
      <RacePredictions distance={42195} />
    </div>
  );
}

export default Dashboard
