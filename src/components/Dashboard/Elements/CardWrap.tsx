import styled from 'styled-components';

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vh;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: 30vw;
  
  @media (max-width: 800px) {
    width: 200vw;
    margin: 25vh 0 0 32vw;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
  }
`
export default CardWrap