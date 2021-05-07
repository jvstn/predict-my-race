import styled from 'styled-components';
import { shadows } from '../../../theme';
import { Button } from '../../Shared';


export default styled(Button)`
  width: 40vw;
  font-size: 4vw;
  font-family: "Exo";
  font-weight: bold;
  margin: 10vh auto;
  border: 0;
  cursor: pointer;
  box-shadow: ${shadows['bs-2']};

  @media (min-width: 800px) {
    display: none;
  }
`