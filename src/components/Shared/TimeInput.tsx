import React from "react";
import styled from "styled-components";

const TimeInput = styled.input`
  background: rgba(0, 0, 0, 0.6);
  width: 20vh;
  height: 1vh;
  padding: 0.8em;
  margin-bottom: 2em;
  border: 1px solid white;
  border-radius: 20px;
  color: #fff;
  font-size: 40px;
  text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: 0;

  }
`;

export default TimeInput;
