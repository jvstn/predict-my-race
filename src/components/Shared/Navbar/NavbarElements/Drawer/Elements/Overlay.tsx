import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .25);
  z-index: 1;
  @media (min-width: 800px) {
    display: none;
  }
`