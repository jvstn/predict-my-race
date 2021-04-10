import styled from 'styled-components'
import React from 'react';

interface GC_Props {
  type: string;
  onClick: (e: any) => void;
}

const GlassChip = ({type, onClick}: GC_Props) => {
  return (
    <StyledChip onClick={onClick} value={type}>
    {type}
    </StyledChip>
  )
}

const StyledChip = styled.button`
  width: 10vh;
  height: 10vh;
  background: transparent;
  margin-right: .5em;
  margin-left: .5em;
  margin-bottom: .7em;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 6px;
  text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  color: #fff;
`
export default GlassChip