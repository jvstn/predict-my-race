import React, { ReactElement } from "react";
import { Logo, MenuItem, NavbarContainer } from "./NavbarElements";

function Navbar(): ReactElement {
  return (
    <NavbarContainer>
      <Logo />
      <MenuItem to="/dashboard">Prediction</MenuItem>
      <p>Algorithms</p>
      <p>Connect to Strava</p>
    </NavbarContainer>
  );
}

export default Navbar;
