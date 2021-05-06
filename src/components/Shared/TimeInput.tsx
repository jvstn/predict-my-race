import styled from "styled-components";
import { palette } from "../../theme";

const TimeInput = styled.input`
  background: #ffffff;
  width: 20vh;
  height: 10vh;
  padding: 0 5%;
  text-align: center;
  margin-bottom: 2em;
  border: 1px solid ${palette.primary};
  border-radius: 10px;
  color: ${palette.primary};
  font-family: "Exo";
  font-weight: bold;
  font-size: 190%;
  text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: 0;

  }
`;

export default TimeInput;
