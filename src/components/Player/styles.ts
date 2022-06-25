import styled from 'styled-components'

export const Container = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.backgrounds.darkest};
  border-top-width: 4px;
  border-top-color: ${props => props.theme.colors.opaque};
  border-top-style: solid;
  position: relative;
`;

export const TimeLine = styled.div`
  height: 4px;
  width: 50%;
  background: ${props => props.theme.colors.neonRed};
  position: absolute;
  top: -4px;
  left: 0px;
  cursor: pointer;
`;

export const ScrollingText = styled.div`
  
  
  
  position: absolute;
  bottom: 2px;
  left: 0px;
  cursor: pointer;
`;


export const Text = styled.p`
  margin-top: 24px;
  font-size: 18px;
`
