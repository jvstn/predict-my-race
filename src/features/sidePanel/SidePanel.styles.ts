import styled from 'styled-components';
import { palette } from '../../theme';

export const SidePanelWrap = styled.div`
  height: 80vh;
  width: 40vh;
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${palette.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 30px;
`

export const MileageSlider = styled.input`
  background-color: ${palette.primary};
`

export const Title = styled.h1`
  
`

