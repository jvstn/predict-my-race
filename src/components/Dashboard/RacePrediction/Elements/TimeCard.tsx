import styled from 'styled-components';
import Card from '../../../Shared/Card';

export default styled(Card)<{ multiple: number }>`
  @media (max-width: 800px) {
    width: 40vw;
    height: 60vw;
    transition: ease-in-out 0.4s;
    transform: ${({ multiple }) => `translate(${multiple * 200}%)`};
    margin: 0 0;
  }
`;