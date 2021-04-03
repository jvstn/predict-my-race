import styled from 'styled-components'

const GlassInput = styled.input`
  background: transparent;
  width: 10vh;
  height: 10vh;
  padding: .8em;
  margin-bottom: 2em;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  color: #fff;
  font-size: 40px;
  text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.25)
  
`;

export default GlassInput 