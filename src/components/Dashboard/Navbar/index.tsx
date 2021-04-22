import React, { ReactElement } from "react";
import { Logo, MenuItem, NavbarContainer } from "./NavbarElements";
import { MdDashboard, MdInfo } from "react-icons/md";
import {FaStrava} from "react-icons/fa";

function Navbar(): ReactElement {
  return (
    <NavbarContainer>
      <Logo />
      <MenuItem to="/dashboard" Icon={MdDashboard}>
        Prediction
      </MenuItem>
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
