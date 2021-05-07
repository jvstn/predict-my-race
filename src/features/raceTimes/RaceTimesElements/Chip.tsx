import styled from "styled-components";
import React from "react";
import { palette } from "../../../theme";

interface GC_Props {
  type: string;
  onClick: (e: any) => void;
  selected: boolean;
  disabled?: boolean;
}

const Chip = ({ type, onClick, selected, disabled }: GC_Props) => {
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

const StyledChip = styled.button<{ selected?: boolean, disabled?: boolean }>`
  width: 10vh;
  height: 10vh;
  background-color: ${({ selected, disabled }) =>
    selected ? palette.primary : disabled ? palette.grey : palette.offWhite};
  margin: 0 0.5em 0.7em 0.5em;
  border: 1px solid ${palette.primary};
  border-radius: 6px;
  font-weight: bolder;
  font-family: "Exo";
  color: ${({ selected }) => (selected ? palette.white : palette.dark)};
  transition: ease-in-out 250ms;

  &:hover {
    transform: ${props => !props.disabled && 'scale(1.1)'};
    transition: ease-in-out 250ms;
  }
  &:focus {
    outline: none;
  }
`;
export default Chip;
