import React, { ReactElement } from "react";
import { Logo, MenuItem, NavbarContainer } from "./NavbarElements";
import { MdDashboard, MdInfo } from "react-icons/md";
import {FaStrava} from "react-icons/fa";
import Highlight from "./NavbarElements/Highlight";

function Navbar(): ReactElement {
  return (
    <NavbarContainer>
      <Logo />
      <Highlight>
        <MenuItem to="/dashboard" active Icon={MdDashboard}>
          Prediction
        </MenuItem>
      </Highlight>
      <MenuItem to="/information" Icon={MdInfo}>
        Information
      </MenuItem>
      <MenuItem to="/connect" Icon={FaStrava}>
        Connect to Strava
      </MenuItem>
    </NavbarContainer>
  );
}

export default Navbar;
