import styled from "styled-components";
import React from "react";

interface GC_Props {
  type: string;
  onClick: (e: any) => void;
  selected: boolean;
  disabled: boolean;
}

const GlassChip = ({ type, onClick, selected, disabled }: GC_Props) => {
  return (
    <StyledChip
      disabled={disabled}
      selected={selected}
      onClick={onClick}
      value={type}
    >
      {type}
    </StyledChip>
  );
};

const StyledChip = styled.button<{ selected?: boolean }>`
  width: 10vh;
  height: 10vh;
  background-color: ${({ selected }) =>
    selected ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  margin-right: 0.5em;
  margin-left: 0.5em;
  margin-bottom: 0.7em;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 6px;
  text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  color: #fff;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color ease-in 200ms;
  }
  &:focus {
    outline: none;
  }
`;
export default GlassChip;
