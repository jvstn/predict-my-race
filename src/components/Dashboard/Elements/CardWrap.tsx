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
    margin: 25vh auto 0 25vw;
    flex-wrap: nowrap;
    flex-direction: row;
    
  }
`
export default CardWrap