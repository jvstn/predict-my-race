import styled from 'styled-components';
import { palette } from '../../../../theme';
import { Title } from '../../../Shared';

export default styled(Title)`
  color: ${palette.secondary};
  margin: 1vh 0;
  @media (max-width: 800px) {
    font-size: 300%;
  };
`