import { ReactElement, useState } from "react";
import { Logo, MenuItem, NavbarContainer } from "./NavbarElements";
import { MdDashboard, MdInfo } from "react-icons/md";
import { FaStrava } from "react-icons/fa";
import Highlight from "./NavbarElements/Highlight";
import MenuIcon from "./NavbarElements/MenuIcon";
import Drawer from "./NavbarElements/Drawer";

interface Props {
  currentPage: "dash" | "info" | "connect";
}

function Navbar({ currentPage }: Props): ReactElement {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <Logo />

        <Highlight active={currentPage === "dash"}>
          <MenuItem
            to="/dashboard"
            active={currentPage === "dash"}
            Icon={MdDashboard}
          >
            Prediction
          </MenuItem>
        </Highlight>
        <Highlight active={currentPage === "info"}>
          <MenuItem
            to="/information"
            active={currentPage === "info"}
            Icon={MdInfo}
          >
            Information
          </MenuItem>
        </Highlight>
        <Highlight active={currentPage === "connect"}>
          <MenuItem
            
            to="/connect"
            Icon={FaStrava}
          >
            Connect to Strava
          </MenuItem>
        </Highlight>
        <MenuIcon onClick={openDrawer} />
      </NavbarContainer>
      <Drawer open={drawerOpen} close={closeDrawer} />
    </>
  );
}

export default Navbar;
