import styled from 'styled-components';
import React, { ReactElement } from 'react'
import PMRLogo from '../../assets/predict race logo.png'
import { palette } from '../../theme';

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
  margin-left: auto;
  align-items: center;
  margin-top: -5vh;

  @media (max-width: 800px) {
    margin: 0;
    padding: 1vh 0; 
  }
`
const LogoImg = styled.img`
  height: 7vh;
  margin-right: 1vh;
`;
const LogoText = styled.h1`
  font-size: 7vh;
  color: ${palette.secondary};
  font-weight: 900;
  font-family: 'Exo';
`;
export default Logo
