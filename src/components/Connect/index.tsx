import { ReactElement } from "react";
import { BackgroundDiv, Headline, Papyrus, Title } from "../Shared";
import Navbar from "../Shared/Navbar";
import { StravaButton } from "./Elements";
import { FaStrava } from "react-icons/fa";

export default function Connect(): ReactElement {
  return (
    <BackgroundDiv>
      <Navbar currentPage="connect" />
      <Papyrus>
        <Title color="primary">Connect To Strava</Title>
        <Headline color="dark">
          Connect to strava to use previous best efforts,
          <br />
          to predict your future
          best.
        </Headline>
        <StravaButton>
          <FaStrava size={"2rem"} /> <Headline>Connect Now</Headline>
        </StravaButton>
      </Papyrus>
    </BackgroundDiv>
  );
}
