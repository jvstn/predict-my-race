import styled from 'styled-components';
import { palette } from '../../../theme';

export default styled.p<{ color?: "dark" | "white" | "primary" }>`
  margin: 2vh 0;
  color: ${(props) => (props.color ? palette[props.color] : palette.white)};
`;