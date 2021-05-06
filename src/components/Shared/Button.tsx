import styled from 'styled-components'
import { palette } from '../../theme';

const Button = styled.button<{ primary?: boolean, }>`
  background-color: ${({ primary }) => primary ? palette.primary : palette.grey};
  min-width: 20vh;
  padding: 1%;
  margin: 3%;
  box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  color: #fff;
  font-family: "Exo";
  font-size: 1.1em;
  font-weight: bold;
  
`;

export default Button