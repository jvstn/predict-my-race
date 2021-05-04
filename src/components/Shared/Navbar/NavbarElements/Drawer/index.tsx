import { ReactElement } from "react";
import { DrawerContainer, DrawerItem, Overlay } from "./Elements";
import { MdDashboard, MdInfo, MdArrowBack } from "react-icons/md";
import { FaStrava } from "react-icons/fa";
import { useLocation } from "react-router";

interface Props {
  open: boolean;
  close: () => void;
}

function Drawer({ open, close }: Props): ReactElement {
  const location = useLocation();
  return (
    <>
      <DrawerContainer open={open}>
        <DrawerItem to={location.pathname} onClick={close} Icon={MdArrowBack}>
          Back
        </DrawerItem>
        <DrawerItem active Icon={MdDashboard} onClick={close} to="/dashboard">
          Dashboard
        </DrawerItem>
        <DrawerItem Icon={MdInfo} onClick={close} to="/information">
          Information
        </DrawerItem>
        <DrawerItem Icon={FaStrava} onClick={close} to="/connect">
          Connect Strava
        </DrawerItem>
      </DrawerContainer>
      {open && <Overlay onClick={close} />}
    </>
  );
}

export default Drawer;
