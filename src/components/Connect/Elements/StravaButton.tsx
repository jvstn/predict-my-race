import styled from 'styled-components';
import { palette } from '../../../theme';
import { Button } from '../../Shared';

export default styled(Button)`
  background-color: #fc4c02;
  color: ${palette.white};
  width: 20vw;
  padding: 4%;
  height: 8vh;
  display: flex;
  margin: 2vh auto;
  align-items: center;
  column-gap: 1vw;
  border: 0;
  font-size: 1rem;
  justify-content: center;
`;