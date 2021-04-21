import styled from 'styled-components';
import React, { ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'
interface Props {
  to: string;
  children: ReactNode;
}

function MenuItem({to, children}: Props): ReactElement {
  return (
    <LinkWrap>
    <StyledLink to={to}>{children}</StyledLink>
    </LinkWrap>
  )
}

const LinkWrap = styled.div`
  display: flex;
  height: 5vh;
`

const StyledLink = styled(Link)`
  color: white;
`


export default MenuItem
