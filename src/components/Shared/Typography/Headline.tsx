import styled from 'styled-components';
import { palette } from '../../../theme';

export default styled.h3<{ color?: "dark" | "white" | "primary" }>`
  color: ${props => props.color ? palette[props.color] : palette.white};
  margin: 2vh 0; 
`;