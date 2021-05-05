import styled from 'styled-components';
import { palette } from '../../../theme';

export default styled.h1<{ color?: "dark" | "white" | "primary" }>`
  color: ${(props) => (props.color ? palette[props.color] : palette.white)};
  margin: 2vh 0;
  font-family: "Exo";
`;