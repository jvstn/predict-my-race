import { ReactElement, useState } from "react";
import RacePredictions from "./RacePrediction";
import { CardWrap, BackgroundDiv, ModalButton } from "./Elements";
import SidePanel from "../../features/sidePanel";
import Navbar from "./Navbar";
import Chevron from "./Elements/Chevron";

function Dashboard(): ReactElement {
  // mobile card functions min-width: 800px
  const [cardPositionMultiplier, setCardPositionMultiplier] = useState(0);
  const handleNext = () =>
    setCardPositionMultiplier(cardPositionMultiplier - 1.5);
  const handleBack = () =>
    {setCardPositionMultiplier(cardPositionMultiplier + 1.5);
    console.log(cardPositionMultiplier)
  }
  
  const [openDrawer, setOpenDrawer] = useState(false);

  // const openTheDrawer = () => {
  //   setDrawerOpen(true);
  //   console.log(drawerOpen);
  // };
  
  return (
    <BackgroundDiv>
      <Navbar />
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
    </BackgroundDiv>
  );
}

export default Dashboard;
