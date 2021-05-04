import styled from 'styled-components';
import { palette } from '../../../../theme';

const NavbarContainer = styled.div`
  height: 100vh;
  width: 30vh;
  display: flex;
  flex-direction: column;
  background-color: ${palette.primary};
  position: absolute;
  
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 100vh;
    background-color: ${palette.offWhite};
    justify-content: end;
  }
`

export default NavbarContainer