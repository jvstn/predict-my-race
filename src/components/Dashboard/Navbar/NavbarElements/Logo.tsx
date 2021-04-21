import styled from 'styled-components';
import React, { ReactElement } from 'react'
import PMRLogo from '../../../../assets/predict race logo.png'
import { palette } from '../../../../theme';

function Logo(): ReactElement {
  return (
    <LogoWrap>
      <LogoImg src={PMRLogo} />
      <LogoText>PMR</LogoText>
    </LogoWrap>
  )
}

const LogoWrap = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: 2vh;
  align-items: center;
  margin-top: -5vh;
`
const LogoImg = styled.img`
  height: 3em;
  margin-right: 1vh;
`;
const LogoText = styled.h1`
  font-size: 3em;
  color: ${palette.secondary};
`;
export default Logo
