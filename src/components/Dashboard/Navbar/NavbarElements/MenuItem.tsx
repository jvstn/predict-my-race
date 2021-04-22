import styled from 'styled-components';
import { ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IconType } from 'react-icons/lib';
import { palette } from '../../../../theme';

interface Props {
  to: string;
  children: ReactNode;
  Icon: IconType;
}

function MenuItem({to, children, Icon }: Props): ReactElement {
  return (
    <LinkWrap>
    <Icon color={'white'} />
    <StyledLink to={to}>{children}</StyledLink>
    </LinkWrap>
  )
}

const LinkWrap = styled.div`
  display: flex;
  height: 5vh;
  align-items: center;
  margin-left: 3vh;
  margin-right: auto;
`

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin-left: 1vh;
`



export default MenuItem
