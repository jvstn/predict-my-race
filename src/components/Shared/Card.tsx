import styled from 'styled-components';
import { palette } from '../../theme';


const Card = styled.div`
  background-color: ${palette.primary};
  width: 30vh;
  height: auto;
  margin: 2em 1em 1em 1em;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 14px 12px 0 rgba(0, 0, 0, 0.17),
    0 20px 40px 0 rgba(0, 0, 0, 0.3); ;
`;
export default Card