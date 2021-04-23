import React, { useState } from "react";
import {setMileage} from './mileageSlice'
import { useDispatch } from "react-redux";
import { Button, TimeInput, Headline } from "../../components/Shared";
import { useHistory } from "react-router";



export default function Mileage() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [average, setAverage] = useState("");
  const handleMilage = () => {
    dispatch(setMileage(parseInt(average)))
  }

  return (
    <div>
      <Headline> Average Mileage?</Headline>
      <br />
      <TimeInput
        id="mileage"
        value={average}
        type="number"
        onChange={(e) => setAverage(e.target.value)}
      />
      <br />
      <Button onClick={handleMilage}>Add Mileage</Button>
    </div>
  );
}
