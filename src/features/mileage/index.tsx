import React, { useState } from "react";
import {setMileage} from './mileageSlice'
import { useDispatch } from "react-redux";
import { Button, TimeInput } from "../../components/Shared";
import { EtchedH3 } from "../../components/Shared/EtchedText";
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
      <EtchedH3> Average Mileage?</EtchedH3>
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
