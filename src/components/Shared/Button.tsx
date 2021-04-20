import styled from 'styled-components'
import { palette } from '../../theme';

const Button = styled.button<{ primary?: boolean, }>`
  background-color: ${({primary}) => primary ? palette.primary : palette.secondary};
  height: 7vh;
  width: 15vh;
  margin-bottom: .7em;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 0px;
  border-right: 0px;
  box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  color: #fff;

  
`;

export default Button