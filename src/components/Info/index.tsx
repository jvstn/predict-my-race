import { ReactElement } from 'react'
import { BackgroundDiv } from '../Shared'
import Navbar from '../Shared/Navbar'
import { Accordion } from './Elements'
import Container from './Elements/Container';

interface Props {
  
}

function Info({}: Props): ReactElement {
  return (
    <BackgroundDiv>
      <Navbar currentPage="info" />
      <Container>
        <Accordion title="How To Use">
          These algorithms give you a nice target pace for your next race. They
          also answer the question: If I were to race tomorrow what would my
          times be?
          <br />
          <br />
          That being said no algorithm can truly predict all the variables of
          your next race, but what this app can do is give you a general pace to
          target.
          <br />
          <br />
          In all long distance races it is better to err on the slow side to
          avoid running to fast at the start.
          <br />
          <br />
          You can always go faster at the end if you still feel good but it’s
          nearly impossible to recover after hitting the wall.
        </Accordion>
        <Accordion title="Riegel's Method">
          These algorithms give you a nice target pace for your next race. They
          also answer the question: If I were to race tomorrow what would my
          times be?
          <br />
          <br />
          That being said no algorithm can truly predict all the variables of
          your next race, but what this app can do is give you a general pace to
          target.
          <br />
          <br />
          In all long distance races it is better to err on the slow side to
          avoid running to fast at the start.
          <br />
          <br />
          You can always go faster at the end if you still feel good but it’s
          nearly impossible to recover after hitting the wall.
        </Accordion>
        <Accordion title="Vickers & Vertosick's Method">
          These algorithms give you a nice target pace for your next race. They
          also answer the question: If I were to race tomorrow what would my
          times be?
          <br />
          <br />
          That being said no algorithm can truly predict all the variables of
          your next race, but what this app can do is give you a general pace to
          target.
          <br />
          <br />
          In all long distance races it is better to err on the slow side to
          avoid running to fast at the start.
          <br />
          <br />
          You can always go faster at the end if you still feel good but it’s
          nearly impossible to recover after hitting the wall.
        </Accordion>
      </Container>
    </BackgroundDiv>
  );
}

export default Info
