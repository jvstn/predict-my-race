import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import React, { ReactElement } from 'react'
import { palette } from '../../../theme';

interface Props {
  orient: "right" | "left";
  onClick?: () => void;
}

function Chevron({ orient, onClick }: Props): ReactElement {
  const StyledChev = styled(orient === "right" ? FaChevronRight : FaChevronLeft)`
    @media (min-width: 800px) {
      display: none;
    }
    position: absolute;
    ${orient === "right" ? "right: 10vw" : "left: 10vw" };
    top: 40vh;
    color: ${palette.primary};
    font-size: 10vh;
    width: 5vw;
    cursor: pointer;
  `;
  return (
    <StyledChev onClick={onClick} />
  )

}

export default Chevron


