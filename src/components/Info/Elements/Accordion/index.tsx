import { ReactElement, ReactNode, useState } from 'react'
import Box from './Box';
import { Body, Title } from '../../../Shared';

interface Props {
  title: string;
  children: ReactNode;
}

export default function Accordion({title, children }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <Box open={isOpen} onClick={toggleOpen}>
      <Title color='primary'>{title}</Title>
      {isOpen && <Body color="dark">{children}</Body>}
    </Box>
  )
}



