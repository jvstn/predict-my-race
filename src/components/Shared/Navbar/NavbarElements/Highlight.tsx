import styled from 'styled-components';
import { palette } from '../../../../theme';

export default styled.div<{ active: boolean }>`
  ${(props) => !props.active && "display: none"}
  background-color: ${palette.offWhite};
  height: 2.5em;
  border-radius: 20px 0 0 20px;
  margin-left: 0.5em;

  &:before,
  :after {
    ${(props) => !props.active && "display: none"}
    content: "";
    position: absolute;

    height: 20px;
    width: 10px;
    background-color: ${palette.primary};
    right: 0;
  }

  &:before {
    ${(props) => !props.active && "display: none"}
    margin-top: -3.1vh;
    box-shadow: 0 10px 0 0 ${palette.offWhite};
    border-radius: 0 0 5px 0;
  }

  &:after {
    margin-top: 0.7vh;

    box-shadow: 0 -10px 0 0 ${palette.offWhite};
    border-radius: 0 5px 0 0;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;