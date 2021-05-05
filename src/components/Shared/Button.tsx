import styled from 'styled-components'
import { palette } from '../../theme';

const Button = styled.button<{ primary?: boolean, }>`
  background-color: ${({primary}) => primary ? palette.primary : palette.secondary};
  height: 7vh;
  width: 10vw;
  margin-bottom: .7em;
  box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  color: #fff;

  
`;

export default Button