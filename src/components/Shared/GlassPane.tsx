import styled from 'styled-components'

const GlassPane = styled.div`
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  display: flex;
  margin-top: 10vh;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-left: auto;
  margin-right: auto;
  box-shadow: 40px 40px 60px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 60vh;
  height: 80vh;
`;

export default GlassPane