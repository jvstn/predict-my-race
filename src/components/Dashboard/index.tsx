import { ReactElement, useState } from "react";
import RacePredictions from "./RacePrediction";
import { CardWrap, DashDiv, ModalButton } from "./Elements";
import SidePanel from "../../features/sidePanel";
import Chevron from "./Elements/Chevron";
import Navbar from "../Shared/Navbar";

function Dashboard(): ReactElement {
  // mobile card functions min-width: 800px
  const [cardPositionMultiplier, setCardPositionMultiplier] = useState(0);
  const handleNext = () =>
    setCardPositionMultiplier(cardPositionMultiplier - 1.5);
  const handleBack = () =>
    {setCardPositionMultiplier(cardPositionMultiplier + 1.5);
    console.log(cardPositionMultiplier)
  }
  
  
  return (
    <DashDiv>
      <Navbar currentPage="dash" />
      <CardWrap>
        {cardPositionMultiplier < 0 && (
          <Chevron orient="left" onClick={handleBack} />
        )}
        
        <RacePredictions distance={5000} multiple={cardPositionMultiplier} />

        <RacePredictions distance={10000} multiple={cardPositionMultiplier + 1} />

        <RacePredictions distance={21097.5} multiple={cardPositionMultiplier + 2} />

        <RacePredictions distance={42195} multiple={cardPositionMultiplier + 3} />

        {cardPositionMultiplier > -4 && (
          <Chevron orient="right" onClick={handleNext} />
        )}
      </CardWrap>
      <ModalButton primary>Change Inputs</ModalButton>
      <SidePanel />
    </DashDiv>
  );
}

export default Dashboard;
