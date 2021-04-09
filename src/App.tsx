import React from "react";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import Dashboard from "./components/Dashboard";
import RunnerInputs from "./components/RunnerInputs";

function App() {
  const inputsComplete = useAppSelector(
    (state) => state.raceTimes.inputsComplete
  );
  return (
    <div >
      {!inputsComplete ? <RunnerInputs /> : <Dashboard />}
    </div>
  );
}

export default App;
