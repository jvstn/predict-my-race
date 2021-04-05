import styled from 'styled-components'
import React from 'react';

interface GC_Props {
  type: string;
  onClick: (e: any) => void;
}



export const GlassChip = ({type, onClick}: GC_Props) => {
  return (
    <StyledChip onClick={onClick} value={type}>
    {type}
    </StyledChip>
  )
}

const StyledChip = styled.button`
  width: 10vh;
  height: 10vh;
  margin-left: 5vh;
  border-radius: 20px;
`