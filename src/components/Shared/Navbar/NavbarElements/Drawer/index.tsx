import { ReactElement } from "react";
import { DrawerContainer, DrawerItem, Overlay } from "./Elements";
import { MdDashboard, MdInfo } from "react-icons/md";
import { FaStrava } from "react-icons/fa";

interface Props {
  open: boolean;
  close: () => void;
  currentPage: string;
}

function Drawer({ open, close, currentPage }: Props): ReactElement {
  return (
    <>
      <DrawerContainer open={open}>
        <DrawerItem
          active={currentPage === "dash"}
          Icon={MdDashboard}
          onClick={close}
          to="/dashboard"
        >
          Dashboard
        </DrawerItem>
        <DrawerItem
          active={currentPage === "info"}
          Icon={MdInfo}
          onClick={close}
          to="/information"
        >
          Information
        </DrawerItem>
        <DrawerItem
          active={currentPage === "connect"}
          Icon={FaStrava}
          onClick={close}
          to="/connect"
        >
          Connect Strava
        </DrawerItem>
      </DrawerContainer>
      {open && <Overlay onClick={close} />}
    </>
  );
}

export default Drawer;
