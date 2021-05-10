import { useState } from "react";
import {setMileage} from './mileageSlice'
import { useDispatch } from "react-redux";
import { Button, TimeInput, Headline } from "../../components/Shared";
import Logo from "../../components/Shared/Logo";
import styled from "styled-components";



export default function Mileage() {
  const dispatch = useDispatch();
  const [average, setAverage] = useState("");
  const handleMileage = () => {
    dispatch(setMileage(parseInt(average)))
  }

  return (
    <div>
      <MileageLogo />
      <Headline color="dark"> Average Mileage?</Headline>
      <br />
      <TimeInput
        id="mileage"
        value={average}
        type="number"
        onChange={(e) => setAverage(e.target.value)}
      />
      <br />
      <Button primary onClick={handleMileage}>Add Mileage</Button>
    </div>
  );
}

const MileageLogo  = styled(Logo)`
  margin: 30px;
`