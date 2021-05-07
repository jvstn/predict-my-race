import styled from 'styled-components';
import { palette } from '../../../theme';

const DashDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${palette.offWhite};
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

export default DashDiv;