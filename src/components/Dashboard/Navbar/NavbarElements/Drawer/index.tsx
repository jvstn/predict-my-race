import { ReactElement } from 'react'
import { DrawerContainer, DrawerItem, Overlay } from './Elements'
import { MdDashboard, MdInfo } from "react-icons/md";
import { FaStrava } from "react-icons/fa";

interface Props {
  open: boolean;
}

function Drawer({open}: Props): ReactElement {
  return (
    <>
    <DrawerContainer open={open}>
        <DrawerItem active Icon={MdDashboard} to="/dashboard">Predictions</DrawerItem>
        <DrawerItem Icon={MdInfo} to="/information">Information</DrawerItem>
        <DrawerItem Icon={FaStrava} to="/connect">Connect Strava</DrawerItem>
      </DrawerContainer>
      {open && <Overlay />}
    </>
  )
}

export default Drawer
