import styled from 'styled-components';
import { palette } from '../../../../../../theme';

export default styled.nav<{ open: boolean }>`
  height: 100vh;
  transition: ease-in-out .25s;
  background-color: ${palette.offWhite};
  width: 30vw;
  position: absolute;
  right: ${({ open }) => open ? 0 : '-30vw'};
  bottom: 0;
  z-index: 2;
  @media (min-width: 800px) {
    display:  none;
  }
`