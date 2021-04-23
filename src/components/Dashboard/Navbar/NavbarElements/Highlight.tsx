import styled from 'styled-components';
import { palette } from '../../../../theme';

export default styled.div`
  background-color: ${palette.offWhite};
  height: 2.5em;
  border-radius: 20px 0 0 20px;
  margin-left: .5em;
  
  &:before, :after {
    content: "";
    position: absolute;

    height: 20px;
    width: 10px;
    background-color: ${palette.primary};
    right: 0;
  }

  &:before {
    margin-top: -3.1vh;
    
    box-shadow: 0 10px 0 0 ${palette.offWhite};
    border-radius: 0 0 5px 0;
    }

  &:after {
    margin-top: 0.7vh;
    
    box-shadow: 0 -10px 0 0 ${palette.offWhite};
    border-radius: 0 5px 0 0;
    
  }
`;