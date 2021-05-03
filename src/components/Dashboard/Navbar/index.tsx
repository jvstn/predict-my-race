import { ReactElement, useState } from "react";
import { Logo, MenuItem, NavbarContainer } from "./NavbarElements";
import { MdDashboard, MdInfo } from "react-icons/md";
import {FaStrava} from "react-icons/fa";
import Highlight from "./NavbarElements/Highlight";
import MenuIcon from "./NavbarElements/MenuIcon";
import Drawer from "./NavbarElements/Drawer";


function Navbar(): ReactElement {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openTheDrawer = () => {
    setDrawerOpen(true)
    console.log(drawerOpen);
    
  }
  return (
    <>
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
      <MenuIcon onClick={openTheDrawer} />
    </NavbarContainer>
    <Drawer open={drawerOpen} />  
    </>
  );
}

export default Navbar;
