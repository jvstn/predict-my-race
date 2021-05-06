import styled from 'styled-components'
import { palette } from '../../theme';

export default styled.div`
  background: ${palette.offWhite};
  margin-top: 10vh;
  border: 1px solid ${palette.primary};
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  max-width: 40vw;
  max-height: 100vh;
  text-align: center;
  padding: 4%;

  @media (max-width: 800px) {
    border: 0;
    background-color: transparent;
    box-shadow: none;
    max-width: 80vw;
    max-height: 80vh;
  }
`;
