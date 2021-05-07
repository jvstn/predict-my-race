import styled from 'styled-components';

export default styled.div<{ open?: boolean }>`
  width: 40vw;
  max-height: ${({open}) => open ? "100vh" : "20vh"};
  display: flex;
  flex-direction: column;
  border-radius: 1vw;
  border: 1px thin black;
  padding: 0 2vw;
  margin: 10vh auto;
  box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.19), 2px 10px 12px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;

  @media (max-width: 800px) {
    width: 60vw;
    
  }
`;