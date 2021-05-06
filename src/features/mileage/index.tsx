import { useState } from "react";
import {setMileage} from './mileageSlice'
import { useDispatch } from "react-redux";
import { Button, TimeInput, Headline } from "../../components/Shared";



export default function Mileage() {
  const dispatch = useDispatch();
  const [average, setAverage] = useState("");
  const handleMileage = () => {
    dispatch(setMileage(parseInt(average)))
  }

  return (
    <div>
      <Headline color="dark"> Average Mileage?</Headline>
      <br />
      <TimeInput
        id="mileage"
        value={average}
        type="number"
        onChange={(e) => setAverage(e.target.value)}
      />
      <br />
      <Button onClick={handleMileage}>Add Mileage</Button>
    </div>
  );
}
