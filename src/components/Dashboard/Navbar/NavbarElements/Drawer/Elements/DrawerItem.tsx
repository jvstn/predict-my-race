import styled from 'styled-components';

import { ReactElement } from 'react'
import { IconLink } from '../../../../../../types';
import { palette } from '../../../../../../theme';
import { Link } from 'react-router-dom';


function DrawerItem({ Icon, children, to, active }: IconLink): ReactElement {
  const ItemIcon = styled(Icon)<{ active?: boolean }>`
  color: ${({ active }) => active ? palette.primary : palette.grey};
  font-size: 10vw;
  `;
  return (
    <Container>
      <ItemLink to={to}  active={active}>
        <ItemIcon active={active} />
        {children}
      </ItemLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw 0;
  height: 20vw;
  border-bottom: 1px solid ${palette.grey};
  
`

const ItemLink = styled(Link)<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  font-size: 3vw;
  color: ${({ active }) => (active ? palette.primary : palette.grey)};
  cursor: pointer;
  text-decoration: none;
  font-weight: bolder;
  font-family: "Exo";
`;

export default DrawerItem
