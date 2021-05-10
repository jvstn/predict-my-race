import styled from 'styled-components'
import { palette, shadows } from '../../theme';

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${({ primary }) =>
    primary ? palette.primary : palette.secondary};
  min-width: 20vh;
  min-height: 7vh;
  padding: 2%;
  margin: 3%;
  border: 0;
  box-shadow: ${shadows["bs-1"]};
  border-radius: 6px;
  color: ${({ primary }) => (primary ? "#fff" : palette.contrastText)};
  font-family: "Exo";
  font-size: 1.1em;
  font-weight: bold;
  
`;

export default Button