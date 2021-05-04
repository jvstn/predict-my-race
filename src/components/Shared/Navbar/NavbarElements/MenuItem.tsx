import styled from 'styled-components';
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { palette } from '../../../../theme';
import { IconLink } from '../../../../types';


const {primary, white} = palette 

function MenuItem({ to, children, Icon, active }: IconLink): ReactElement {
  
  return (
    <LinkWrap>
    <Icon color={active ? primary : white} />
    <StyledLink active={active} to={to}>{children}</StyledLink>
    </LinkWrap>
  )
}

const LinkWrap = styled.div`
  display: flex;
  height: 5vh;
  align-items: center;
  margin-left: 3vh;
  margin-right: auto;
  padding-top: .5vh;

  @media (max-width: 800px) {
    display: none;
  } 
`

const StyledLink = styled(Link)<{ active?: boolean }>`
  color: ${(props) => (props.active ? primary : white)};
  font-weight: bold;
  text-decoration: none;
  margin-left: 1vh;

  @media (max-width: 800px) {
    display: none;
  }
`;



export default MenuItem
