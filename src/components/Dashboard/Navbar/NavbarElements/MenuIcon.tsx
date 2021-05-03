import styled from 'styled-components';
import {HiMenuAlt1} from 'react-icons/hi'
import { palette } from '../../../../theme';
export default styled(HiMenuAlt1)`
  margin: 1vh 0 0 85vw;
  width: 100px;
  font-size: 7vh;
  color: ${palette.primary};
  position: absolute;
  cursor: pointer;
  
  @media (min-width: 800px) {
    display: none;
  }
`